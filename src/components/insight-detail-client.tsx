"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import type { Insight } from "@/lib/insights";
import { useLang } from "@/lib/client";

export function InsightDetailClient({ article }: { article: Insight }) {
  const { lang } = useLang();
  const content = article.content[lang];

  return (
    <main className="shell">
      <TopNav active="insights" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{content.title}</h1>
          <p className="subtitle">{content.description}</p>
          <p className="muted">
            {article.publishedAt} · {article.readingMinutes} {lang === "zh" ? "分钟" : "min"} · {lang === "zh" ? "中文" : "EN"}
          </p>
        </div>

        <article className="insightBody">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>

        <div className="resultSection">
          <Link className="btn secondary" href="/insights">{lang === "zh" ? "返回洞察列表" : "Back to Stories"}</Link>
        </div>
      </section>
    </main>
  );
}
