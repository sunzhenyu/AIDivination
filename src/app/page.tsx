import type { Metadata } from "next";
import { HomePageClient } from "@/components/home-page-client";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Divination - Tarot, Career, Face & Palm Readings",
  description:
    "Explore AI tarot, career, face, and palm readings with story-driven insights, multilingual support, and shareable guidance for daily reflection and smarter decisions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `AI Divination - Tarot, Career, Face & Palm Readings | ${SITE_NAME}`,
    description:
      "Explore AI tarot, career, face, and palm readings with story-driven insights, multilingual support, and shareable guidance for daily reflection and smarter decisions.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Divination - Tarot, Career, Face & Palm Readings",
    description:
      "Explore AI tarot, career, face, and palm readings with story-driven insights, multilingual support, and shareable guidance for daily reflection and smarter decisions."
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
