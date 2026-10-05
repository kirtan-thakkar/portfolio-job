# Kirtan Thakkar — Portfolio Website

This repository contains my personal portfolio website, built with [Next.js](https://nextjs.org). It showcases my skills, projects, experience, and background as a developer.

The website also includes a GitHub contribution graph that displays my recent activity and development journey.

## Features

- Personal introduction and developer profile
- Skills and technologies overview
- Selected projects and work
- GitHub contribution graph
- Responsive design for desktop and mobile devices
- Fast and modern Next.js application

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## GitHub Contribution Graph Setup

To display GitHub contribution data, create a `.env.local` file in the project root:

```bash
GITHUB_USERNAME=your-github-username
# Optional but recommended for accurate yearly data via GraphQL
GITHUB_TOKEN=your-github-personal-access-token
```

`GITHUB_TOKEN` is optional. If it is missing or invalid, the application falls back to public GitHub push events. Using a token provides better coverage and more accurate contribution data.

## Built With

- [Next.js](https://nextjs.org)
- React
- JavaScript
- GitHub API
- Vercel

## Deployment

This portfolio can be deployed easily using [Vercel](https://vercel.com), the platform created by the team behind Next.js.

## Author

**Kirtan Thakkar**

This portfolio website was created to share my work, skills, and experience with potential collaborators and employers.
