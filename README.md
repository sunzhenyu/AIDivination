# AI Divination

AI Divination is a multilingual Next.js platform for tarot, career, face, and palm AI readings, with story-driven guidance, rich result pages, and SEO-first architecture.

## Live Demo

- Production: [https://aidivination.net](https://aidivination.net)

## Project Overview

AI Divination combines four interactive reading modes and a story content system:

- Tarot AI Divination
- Career AI Divination
- Face AI Divination
- Palm AI Divination
- Story Library with detail pages and SEO-friendly routing

This project is designed for global deployment on Vercel and supports clean SSR metadata, structured data, sitemap, robots, and social sharing previews.

## Tech Stack

- Framework: Next.js 15 (App Router)
- UI: React 19 + TypeScript
- AI Integration: OpenAI-compatible API (`/api/ai/*`)
- Deployment: Vercel
- SEO: metadata API, JSON-LD, `sitemap.xml`, `robots.txt`, `llms.txt`, canonical/hreflang
- Analytics: Google tag (`gtag.js`)

## Key Features

- Multilingual UI with language switcher (currently EN/ZH)
- Unified top navigation and modern responsive layout
- Story pages with pagination and mode-aware reading inspiration
- Result pages with download image and share (X/Facebook)
- 404 page with SEO-safe indexing rules
- Static verification support (Google Search Console HTML file)

## Routes

- `/` Home
- `/tarot` and `/tarot/result`
- `/career` and `/career/result`
- `/face` and `/face/result`
- `/palm` and `/palm/result`
- `/stories` and `/stories/[slug]`
- `/help`, `/privacy`, `/terms`

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Create local env file

```bash
cp .env.example .env.local
```

3. Configure `.env.local`

```env
OPENAI_BASE_URL=https://yunwu.ai/v1
OPENAI_API_KEY=your_api_key
OPENAI_MODEL=gpt-5.2
NEXT_PUBLIC_SITE_URL=https://aidivination.net
```

4. Run development server

```bash
npm run dev
```

5. Open

```text
http://localhost:3000
```

## Environment Variables

- `OPENAI_BASE_URL`: OpenAI-compatible API base URL
- `OPENAI_API_KEY`: API key used by server routes
- `OPENAI_MODEL`: Model name, e.g. `gpt-5.2`
- `NEXT_PUBLIC_SITE_URL`: Canonical site URL for SEO metadata

## Deployment (Vercel)

1. Import this repository in Vercel
2. Set Root Directory to `/` (repository root)
3. Add environment variables from `.env.example`
4. Deploy

Recommended domain setup:

- Primary domain: `https://aidivination.net`
- Redirect all `*.vercel.app` traffic to your primary domain

## SEO and Search Console

Built-in SEO resources:

- `https://aidivination.net/robots.txt`
- `https://aidivination.net/sitemap.xml`
- `https://aidivination.net/llms.txt`

Google Search Console HTML verification:

- Place file under `public/`, e.g.
  `public/google8f0aa6fab7c86891.html`
- Verify:
  `https://aidivination.net/google8f0aa6fab7c86891.html`

## Project Structure

```text
src/
  app/              # App Router pages, API routes, metadata routes
  components/       # Reusable UI blocks
  lib/              # AI client, i18n, SEO utils, content data
public/             # Static assets (icons, verification files)
```

## Search-Friendly Project Summary

AI Divination is an SEO-ready, multilingual AI reading platform built with Next.js. It provides tarot, career, face, and palm divination experiences, story-driven interpretation pages, social sharing, and production deployment on Vercel.

Suggested discovery keywords:
`AI divination`, `AI tarot reading`, `career AI reading`, `face reading AI`, `palm reading AI`, `Next.js SEO`, `multilingual AI app`.

## License

This repository is currently maintained as a private/commercial project by the owner.
