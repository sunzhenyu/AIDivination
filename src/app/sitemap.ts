import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { stories } from "@/lib/stories";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/tarot",
    "/career",
    "/face",
    "/palm",
    "/dream",
    "/fortune",
    "/daily",
    "/help",
    "/privacy",
    "/terms",
    "/stories",
    "/insights",
    "/llms.txt"
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "daily" : path === "/daily" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path === "/daily" || path === "/fortune" ? 0.9 : 0.8
  }));

  const articleEntries: MetadataRoute.Sitemap = insights.map((item) => ({
    url: `${SITE_URL}/insights/${item.slug}`,
    lastModified: new Date(item.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const storyEntries: MetadataRoute.Sitemap = stories.map((item) => ({
    url: `${SITE_URL}/stories/${item.slug}`,
    lastModified: new Date(item.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75
  }));

  return [...staticEntries, ...storyEntries, ...articleEntries];
}
