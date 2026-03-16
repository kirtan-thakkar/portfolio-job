import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const GITHUB_REST_URL = "https://api.github.com";
const DEFAULT_FROM = "2026-01-01";
const DEFAULT_TO = "2026-12-31";

const parseDateAtBoundary = (value, boundary) => {
  if (!value) {
    return null;
  }

  const parsed = new Date(`${value}T${boundary}`);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed;
};

const buildDateRange = (request) => {
  const url = new URL(request.url);
  const fromParam = url.searchParams.get("from") || DEFAULT_FROM;
  const toParam = url.searchParams.get("to") || DEFAULT_TO;

  const from = parseDateAtBoundary(fromParam, "00:00:00.000Z");
  const to = parseDateAtBoundary(toParam, "23:59:59.999Z");

  if (!from || !to) {
    throw new Error("Invalid from/to date format. Use YYYY-MM-DD.");
  }

  if (from > to) {
    throw new Error("from date must be on or before to date.");
  }

  return { from, to };
};

const getLevel = (count, maxCount) => {
  if (count <= 0) {
    return 0;
  }

  if (maxCount <= 1) {
    return 4;
  }

  const ratio = count / maxCount;

  if (ratio <= 0.25) {
    return 1;
  }

  if (ratio <= 0.5) {
    return 2;
  }

  if (ratio <= 0.75) {
    return 3;
  }

  return 4;
};

const mapCountsToHeatmapData = (countsByDate, from, to) => {
  const entries = [];
  const rangeCounts = [];
  const cursor = new Date(from);

  while (cursor <= to) {
    const dateKey = cursor.toISOString().slice(0, 10);
    const count = countsByDate.get(dateKey) || 0;

    entries.push({ date: dateKey, count });
    rangeCounts.push(count);

    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  const maxCount = Math.max(...rangeCounts, 0);

  return entries.map((entry) => ({
    date: entry.date,
    count: entry.count,
    level: getLevel(entry.count, maxCount),
  }));
};

const fetchContributionCalendar = async (username, token, from, to) => {
  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        username,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed (${response.status}).`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    throw new Error(payload.errors[0]?.message || "GitHub GraphQL returned an error.");
  }

  const days =
    payload?.data?.user?.contributionsCollection?.contributionCalendar?.weeks?.flatMap(
      (week) => week.contributionDays
    ) || [];

  const countsByDate = new Map();
  days.forEach((day) => {
    countsByDate.set(day.date, day.contributionCount);
  });

  return countsByDate;
};

const fetchPublicPushEvents = async (username) => {
  const countsByDate = new Map();

  for (let page = 1; page <= 3; page += 1) {
    const response = await fetch(
      `${GITHUB_REST_URL}/users/${username}/events/public?per_page=100&page=${page}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (response.status === 404) {
      throw new Error("GitHub username not found.");
    }

    if (!response.ok) {
      throw new Error(`GitHub public events request failed (${response.status}).`);
    }

    const events = await response.json();

    if (!Array.isArray(events) || events.length === 0) {
      break;
    }

    events.forEach((event) => {
      if (event.type !== "PushEvent") {
        return;
      }

      const dateKey = event.created_at?.slice(0, 10);
      const commitCount = Array.isArray(event.payload?.commits) ? event.payload.commits.length : 0;

      if (!dateKey || commitCount <= 0) {
        return;
      }

      countsByDate.set(dateKey, (countsByDate.get(dateKey) || 0) + commitCount);
    });

    if (events.length < 100) {
      break;
    }
  }

  return countsByDate;
};

export async function GET(request) {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return NextResponse.json(
      {
        error: "Missing GITHUB_USERNAME. Add it in .env.local.",
      },
      { status: 400 }
    );
  }

  let from;
  let to;

  try {
    ({ from, to } = buildDateRange(request));
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Invalid date range.",
      },
      { status: 400 }
    );
  }

  try {
    let countsByDate;
    let source = "public-events";

    if (token) {
      try {
        countsByDate = await fetchContributionCalendar(username, token, from, to);
        source = "graphql";
      } catch {
        countsByDate = await fetchPublicPushEvents(username);
        source = "public-events-fallback";
      }
    } else {
      countsByDate = await fetchPublicPushEvents(username);
    }

    const contributions = mapCountsToHeatmapData(countsByDate, from, to);

    return NextResponse.json(
      {
        username,
        source,
        from: from.toISOString(),
        to: to.toISOString(),
        contributions,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=900, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to fetch GitHub contributions.",
      },
      { status: 500 }
    );
  }
}