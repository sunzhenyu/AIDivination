import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getStoryBySlug, stories } from "@/lib/stories";
import { StoryDetailClient } from "@/components/story-detail-client";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return stories.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  const en = story.content.en;

  return {
    title: en.title,
    description: en.subtitle,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: {
      title: `${en.title} | ${SITE_NAME}`,
      description: en.subtitle,
      url: absoluteUrl(`/stories/${story.slug}`),
      type: "article",
      siteName: SITE_NAME,
      publishedTime: story.publishedAt
    }
  };
}

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const en = story.content.en;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: en.title,
    description: en.subtitle,
    datePublished: story.publishedAt,
    inLanguage: ["en", "zh-CN"],
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: absoluteUrl(`/stories/${story.slug}`),
    isBasedOn: story.source.url
  };

  return (
    <>
      <StoryDetailClient story={story} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
