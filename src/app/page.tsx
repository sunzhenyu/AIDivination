import type { Metadata } from "next";
import { HomePageClient } from "@/components/home-page-client";
import { SITE_NAME, SOCIAL_IMAGE_URL, TWITTER_IMAGE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Divination - Tarot, Career, Face & Palm Readings",
  description:
    "Explore AI tarot, career, face, and palm readings with story-based insights, multilingual support, and shareable guidance for reflection and better decisions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `AI Divination - Tarot, Career, Face & Palm Readings | ${SITE_NAME}`,
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
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
