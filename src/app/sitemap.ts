import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/tarot",
    "/career",
    "/face",
    "/palm",
    "/help",
    "/privacy",
    "/terms",
    "/insights",
    "/llms.txt"
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : 0.8
  }));

  const articleEntries: MetadataRoute.Sitemap = insights.map((item) => ({
    url: `${SITE_URL}/insights/${item.slug}`,
    lastModified: new Date(item.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticEntries, ...articleEntries];
}
