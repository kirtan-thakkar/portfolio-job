"use client";
import { useEffect, useState } from "react";
import Container from "./Container";
import { Gitmap } from "./ui/gitmap";

const CONTRIBUTION_FROM = "2026-01-01";
const CONTRIBUTION_TO = "2026-12-31";
const FIXED_FROM_DATE = new Date(`${CONTRIBUTION_FROM}T00:00:00.000Z`);
const FIXED_TO_DATE = new Date(`${CONTRIBUTION_TO}T23:59:59.999Z`);

const colors = {
  empty: "#ababab",
  level1: "#0e4429",
  level2: "#006d32",
  level3: "#26a641",
  level4: "#39d353",
};

const GitContribution = () => {
  const [contributions, setContributions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchContributions = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          `/api/github/contributions?from=${CONTRIBUTION_FROM}&to=${CONTRIBUTION_TO}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          const fallbackError = "Unable to load GitHub contributions.";
          const payload = await response.json().catch(() => ({}));
          throw new Error(payload?.error || fallbackError);
        }

        const payload = await response.json();

        if (!isMounted) {
          return;
        }

        setContributions(payload?.contributions || []);
      } catch (err) {
        if (!isMounted) {
          return;
        }

        setError(err instanceof Error ? err.message : "Unable to load GitHub contributions.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchContributions();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="py-8">
      <Container className="shadow-section-inset border-y border-neutral-100 py-5">
        <p
          className={`max-w-lg pt-4 text-sm md:text-base ${
            error ? "text-red-400" : "text-secondary"
          }`}
        >
          {isLoading && "Loading GitHub contributions..."}
          {!isLoading && !error && "GitHub contributions for 2026."}
          {!isLoading && error && `GitHub sync issue: ${error}`}
        </p>

        <div className="shadow-aceternity mx-auto mt-4 max-w-3xl p-4">
          {!error && (
            <Gitmap
              contributions={contributions}
              colors={colors}
              from={FIXED_FROM_DATE}
              to={FIXED_TO_DATE}
              className="rounded-lg p-4 "
            />
          )}
        </div>
      </Container>
    </div>
  );
};
export default GitContribution;
