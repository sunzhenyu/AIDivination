import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getInsightBySlug, insights } from "@/lib/insights";
import { InsightDetailClient } from "@/components/insight-detail-client";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};
  const en = article.content.en;
  return {
    title: en.title,
    description: en.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: `${en.title} | ${SITE_NAME}`,
      description: en.description,
      url: absoluteUrl(`/insights/${article.slug}`),
      type: "article",
      siteName: SITE_NAME,
      publishedTime: article.publishedAt
    }
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();
  const en = article.content.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: en.title,
    description: en.description,
    datePublished: article.publishedAt,
    inLanguage: ["en", "zh-CN"],
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`)
  };

  return (
    <>
      <InsightDetailClient article={article} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
