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
    "Explore AI tarot, career, face, and palm readings with story-based insights, multilingual support, and shareable guidance for reflection and better decisions.",
  keywords: [
    "AI divination",
    "tarot reading",
    "career guidance",
    "face reading",
    "palm reading",
    "AI tarot",
    "占卜",
    "塔罗",
    "职业分析"
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/?lang=en",
      "zh-CN": "/?lang=zh"
    }
  },
  openGraph: {
    title: "AI Divination - Tarot, Career, Face & Palm Readings",
    description:
      "Explore AI tarot, career, face, and palm readings with story-based insights, multilingual support, and shareable guidance for reflection and better decisions.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    images: [{ url: SOCIAL_IMAGE_URL }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Divination - Tarot, Career, Face & Palm Readings",
    site: "@DanDan344479",
    images: [TWITTER_IMAGE_URL],
    description:
      "Explore AI tarot, career, face, and palm readings with story-based insights, multilingual support, and shareable guidance for reflection and better decisions."
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
    inLanguage: ["en", "zh-CN"],
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
