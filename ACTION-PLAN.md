# SEO ACTION PLAN

Date: 2026-03-18  
Scope: Production launch readiness for AI Divination

## Critical (Do now)

1. Set production domain in env:
   - `NEXT_PUBLIC_SITE_URL=https://<your-real-domain>`
2. Deploy latest code including:
   - result-page `noindex`
   - security headers
   - `llms.txt`
3. Verify live endpoints:
   - `/robots.txt`
   - `/sitemap.xml`
   - `/llms.txt`

## High (This week)

1. Submit sitemap to Google Search Console:
   - `https://<your-real-domain>/sitemap.xml`
2. Request indexing for:
   - `/`, `/tarot`, `/career`, `/face`, `/palm`, `/insights`
3. Add locale URL strategy decision:
   - preferred: `/en/*` + `/zh/*` + hreflang + x-default

## Medium (This month)

1. Strengthen E-E-A-T on story pages:
   - add author/editor attribution
   - add “last updated” labels
2. Build authority signals:
   - publish story links on X, Reddit, YouTube, LinkedIn
3. Add external citations to high-quality references where claims are factual.

## Low (Backlog)

1. Remove sitemap `<priority>` and `<changefreq>` for cleaner modern format.
2. Add OG images per page type (home, modes, stories).
3. Add lightweight analytics events for:
   - mode start
   - analysis completion
   - story click-through

