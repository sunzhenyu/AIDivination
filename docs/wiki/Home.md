# AI Divination Wiki

Welcome to the AI Divination project wiki.

This wiki documents product goals, architecture, content strategy, deployment flow, and SEO operations for the current Next.js implementation.

## 1. Product Positioning

AI Divination is a story-driven AI guidance website that combines:

- Tarot AI Divination
- Career AI Divination
- Face AI Divination
- Palm AI Divination

The product focuses on lightweight reflection, practical suggestions, and shareable result experiences.

## 2. Core Capabilities

- Multilingual interface (EN/ZH currently)
- Four interactive reading flows
- Result pages with richer narratives and action-oriented guidance
- Story hub with 50+ stories, pagination, and detail pages
- Download/share entry points for result cards
- SEO-first metadata and structured data support

## 3. Technical Architecture

- Framework: Next.js 15 (App Router) + React 19 + TypeScript
- Runtime: Server routes for AI requests (`/api/ai/*`)
- AI Provider: OpenAI-compatible endpoint (configured via environment variables)
- Static assets: `public/`
- Deployment target: Vercel

Key folders:

- `src/app/` route files, metadata routes, API routes
- `src/components/` UI components
- `src/lib/` i18n, SEO utils, AI client, story data
- `public/` icons and verification files

## 4. Environment Variables

Required runtime variables:

- `OPENAI_BASE_URL`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `NEXT_PUBLIC_SITE_URL`

Example:

```env
OPENAI_BASE_URL=https://yunwu.ai/v1
OPENAI_API_KEY=your_key
OPENAI_MODEL=gpt-5.2
NEXT_PUBLIC_SITE_URL=https://aidivination.net
```

## 5. SEO Strategy

Implemented:

- SSR metadata on primary pages
- Canonical and hreflang links
- Open Graph and Twitter cards
- `robots.txt`, `sitemap.xml`, `llms.txt`
- JSON-LD schema
- SEO-friendly route naming (`/tarot`, `/career`, `/face`, `/palm`, `/stories`)

Operations checklist:

1. Keep homepage and mode pages internally linked from nav/footer.
2. Publish or refresh story/insight content consistently.
3. Validate metadata and social tags using SEO tools.
4. Keep one canonical domain only (redirect `vercel.app` to custom domain).

## 6. Google Integrations

- Google Analytics tag is injected globally in root layout.
- Google Search Console file verification is supported via `public/google*.html`.

Verification sample URL:

- `https://aidivination.net/google8f0aa6fab7c86891.html`

## 7. Deployment and Release

Recommended release flow:

1. Commit changes to `main`.
2. Push to remote and deploy via Vercel.
3. Validate pages and API responses in production.
4. Re-run SEO checks (metadata, links, social cards, hreflang, sitemap).

## 8. Content Guidelines

For story pages:

- Each list card should include a unique summary tied to that specific story.
- Mode tag should rotate across Tarot/Career/Face/Palm based on story theme.
- Detail page should include one mode-specific interpretation, not four generic ones.
- Avoid repeated boilerplate intros in multiple stories.

## 9. External Links

- Production: [https://aidivination.net](https://aidivination.net)
- Repository: [https://github.com/sunzhenyu/AIDivination](https://github.com/sunzhenyu/AIDivination)

---

If you want, this wiki can be split into multiple pages next:

- `Architecture`
- `SEO Playbook`
- `Content Operations`
- `Deployment Runbook`
