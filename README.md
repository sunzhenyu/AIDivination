# AI Divination (Next.js)

AI Divination is a bilingual (EN/ZH) web app for tarot, career, face, and palm AI readings, with story-driven UX and SEO-ready architecture for Vercel deployment.

## What this is
- Next.js App Router project for `AI Divination`
- Clean routes: `/`, `/tarot`, `/career`, `/face`, `/palm` and each `/result`
- SEO content routes: `/insights`, `/insights/[slug]`, `/help`, `/privacy`, `/terms`
- Bilingual switch (EN default, ZH toggle)
- Server-side API routes: `/api/ai/*` (OpenAI-compatible endpoint)
- Built-in SEO assets: `robots.txt`, `sitemap.xml`, `llms.txt`, metadata + schema

## Local run
1. Copy env file
```bash
cp .env.example .env.local
```
2. Fill `.env.local`
```env
OPENAI_BASE_URL=https://yunwu.ai/v1
OPENAI_API_KEY=your_key
OPENAI_MODEL=gpt-5.2
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
3. Install and run
```bash
npm install
npm run dev
```

## Vercel deployment
1. Import this repo in Vercel.
2. Set **Root Directory** to:
`aidivination-next`
3. Add environment variables:
- `OPENAI_BASE_URL`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`
- `NEXT_PUBLIC_SITE_URL` (your production domain, e.g. `https://aidivination.com`)
4. Deploy.

## Notes
- Do not expose API key in client code.
- API calls are made from Next.js server routes.
- If you want geo-latency optimization later, you can add region config per route.

## SEO checklist after deployment
1. Visit and verify:
   - `/robots.txt`
   - `/sitemap.xml`
2. Add your domain property in Google Search Console.
3. Submit `https://your-domain.com/sitemap.xml`.
4. Request indexing for:
   - `/`
   - `/tarot`, `/career`, `/face`, `/palm`
   - `/insights` and several `/insights/[slug]` pages
5. Keep publishing insights content weekly to build long-tail keyword coverage.
