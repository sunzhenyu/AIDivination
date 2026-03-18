import type { Metadata } from "next";
import { InsightsPageClient } from "@/components/insights-page-client";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mode Stories",
  description: "Behind-the-scenes stories for tarot, career, face, and palm modes.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: `Mode Stories | ${SITE_NAME}`,
    description: "Behind-the-scenes stories for tarot, career, face, and palm modes.",
    url: absoluteUrl("/insights"),
    siteName: SITE_NAME,
    type: "website"
  }
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
