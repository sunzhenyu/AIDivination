"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import type { Story } from "@/lib/stories";
import { useLang } from "@/lib/client";
const modeTitle = {
  en: {
    tarot: "Insight Cards AI Divination Insight",
    career: "Growth Path AI Divination Insight",
    face: "Personality Lens AI Divination Insight",
    palm: "Life Rhythm AI Divination Insight"
  },
  zh: {
    tarot: "灵感卡图 AI占卜解读",
    career: "成长轨迹 AI占卜解读",
    face: "性格映像 AI占卜解读",
    palm: "人生节律 AI占卜解读"
  }
} as const;

export function StoryDetailClient({ story }: { story: Story }) {
  const { lang } = useLang();
  const content = story.content[lang];

  return (
    <main className="shell">
      <TopNav active="stories" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{content.title}</h1>
          <p className="subtitle">
            {content.subtitle}
            {lang === "zh" ? "（AI占卜故事视角）" : " (AI Divination story perspective)"}
          </p>
        </div>

        <article className="insightBody">
          <section>
            <h2>{lang === "zh" ? "故事引子" : "Story Opening"}</h2>
            <p>{content.teaser}</p>
          </section>
          {content.plot.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <section className="storyTakeaway">
            <h2>{lang === "zh" ? "主题启示" : "Theme Takeaway"}</h2>
            <p>{content.themeTakeaway}</p>
          </section>
          <section>
            <h2>{modeTitle[lang][story.mode]}</h2>
            <p>{content.modeInsight}</p>
          </section>
          <section>
            <h2>{lang === "zh" ? "参考来源" : "Source"}</h2>
            <p className="muted">
              <a href={story.source.url} target="_blank" rel="noreferrer">
                {story.source.title}
              </a>
            </p>
          </section>
        </article>

        <div className="resultSection">
          <Link className="btn secondary" href="/stories">
            {lang === "zh" ? "返回故事列表" : "Back to Story List"}
          </Link>
        </div>
      </section>
    </main>
  );
}
