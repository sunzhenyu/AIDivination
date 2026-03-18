import type { Metadata } from "next";
import { StoriesPageClient } from "@/components/stories-page-client";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Story Library",
  description: "Reader-perspective story library connected to tarot, career, face, and palm guidance.",
  alternates: { canonical: "/stories" },
  openGraph: {
    title: `Story Library | ${SITE_NAME}`,
    description: "Reader-perspective story library connected to tarot, career, face, and palm guidance.",
    url: absoluteUrl("/stories"),
    siteName: SITE_NAME,
    type: "website"
  }
};

export default async function StoriesPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams;
  const page = Number.parseInt(params.page || "1", 10);
  const initialPage = Number.isFinite(page) ? page : 1;
  return <StoriesPageClient initialPage={initialPage} />;
}
