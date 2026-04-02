import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { stories } from "@/lib/stories";
import { SITE_URL } from "@/lib/seo";

const locales = ["en", "zh", "fr", "ja"] as const;

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
    "/insights"
  ];

  const entries: MetadataRoute.Sitemap = [];

  // 为每个静态路由生成所有语言版本
  for (const route of staticRoutes) {
    // 构建所有语言的 alternates
    const languages: Record<string, string> = {};
    for (const altLocale of locales) {
      const altPath = altLocale === "en" ? route : `/${altLocale}${route}`;
      languages[altLocale] = `${SITE_URL}${altPath}`;
    }
    // 添加 x-default 指向英文版本
    languages["x-default"] = `${SITE_URL}${route}`;

    // 只为英文版本创建一个条目，包含所有语言的 alternates
    entries.push({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "daily" : route === "/daily" ? "daily" : "weekly",
      priority: route === "/" ? 1 : route === "/daily" || route === "/fortune" ? 0.9 : 0.8,
      alternates: {
        languages
      }
    });
  }

  // 文章和故事（仅英文）
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

  return [...entries, ...storyEntries, ...articleEntries];
}
