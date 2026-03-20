"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { insights } from "@/lib/insights";
import { useLang } from "@/lib/client";
import { copy } from "@/lib/i18n";

export function InsightsPageClient() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <main className="shell">
      <TopNav active="insights" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          {t.eyebrow && <span className="eyebrow">{t.eyebrow}</span>}
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>
            {lang === "zh" ? "模式洞察" : "Mode Stories"}
          </h1>
          <p className="subtitle">
            {lang === "zh"
              ? "四种模式的背景逻辑与使用方法，帮助你把结果转化为实际行动。"
              : "Behind-the-scenes stories for all four modes, with practical ways to apply each reading."}
          </p>
        </div>
        <div className="insightList">
          {insights.map((item) => {
            const content = item.content[lang];
            return (
              <article className="insightCard" key={item.slug}>
                <div className="insightCardTop">
                  <span className="insightLang">{lang === "zh" ? "中文" : "EN"}</span>
                  <span className="insightMeta">
                    {item.publishedAt} · {item.readingMinutes} {lang === "zh" ? "分钟" : "min"}
                  </span>
                </div>
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <div className="insightTags">
                  {content.tags.map((tag) => (
                    <span key={`${item.slug}-${tag}`}>{tag}</span>
                  ))}
                </div>
                <Link className="btn" href={`/insights/${item.slug}`}>
                  {lang === "zh" ? "阅读洞察" : "Read story"}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
