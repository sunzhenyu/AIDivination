import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/client";
import { SiteFooter } from "@/components/site-footer";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL, TWITTER_IMAGE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  // Keep homepage/default description within 140-160 chars for SEO snippets.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Divination - Tarot, Career, Face & Palm Readings",
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Free AI-powered tarot card reading, career guidance, face reading, palm reading, and dream interpretation. Get instant personalized insights in English, Chinese, French, and Japanese.",
  keywords: [
    "AI divination",
    "free tarot reading online",
    "AI tarot card reading",
    "career guidance AI",
    "face reading online",
    "palm reading AI",
    "dream interpretation",
    "daily fortune",
    "AI占卜",
    "在线塔罗牌",
    "免费塔罗占卜",
    "AI职业分析",
    "面相分析",
    "手相解读",
    "解梦",
    "每日运势"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/?lang=en",
      "zh-CN": "/?lang=zh",
      "fr-FR": "/?lang=fr",
      "ja-JP": "/?lang=ja"
    }
  },
  openGraph: {
    title: "AI Divination - Free Tarot, Career & Dream Readings",
    description:
      "Free AI-powered tarot card reading, career guidance, face reading, palm reading, and dream interpretation. Get instant personalized insights in English, Chinese, French, and Japanese.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    images: [{ url: SOCIAL_IMAGE_URL }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Divination - Free Tarot, Career & Dream Readings",
    site: "@DanDan344479",
    images: [TWITTER_IMAGE_URL],
    description:
      "Free AI-powered tarot card reading, career guidance, face reading, palm reading, and dream interpretation. Get instant personalized insights in English, Chinese, French, and Japanese."
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const rootJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "zh-CN", "fr-FR", "ja-JP"],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    }
  };

  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q89M15NCLE" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q89M15NCLE');
            `
          }}
        />
      </head>
      <body className="appBody">
        <LangProvider>
          {process.env.NODE_ENV === "development" ? (
            <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
          ) : null}
          <div className="ambientBg" aria-hidden="true">
            <span className="orb orbA" />
            <span className="orb orbB" />
            <span className="orb orbC" />
            <span className="dust d1" />
            <span className="dust d2" />
            <span className="dust d3" />
            <span className="dust d4" />
          </div>
          {children}
          <SiteFooter />
        </LangProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }} />
      </body>
    </html>
  );
}
