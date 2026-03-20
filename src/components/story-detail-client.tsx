"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import type { Story } from "@/lib/stories";
import { useLang } from "@/lib/client";
import { copy } from "@/lib/i18n";
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
  },
  fr: {
    tarot: "Cartes Intuitives · Lecture AI Divination",
    career: "Trajectoire · Lecture AI Divination",
    face: "Profil Perso. · Lecture AI Divination",
    palm: "Rythme de Vie · Lecture AI Divination"
  },
  ja: {
    tarot: "インサイトカード AI占いインサイト",
    career: "成長の軌跡 AI占いインサイト",
    face: "パーソナリティ AI占いインサイト",
    palm: "人生のリズム AI占いインサイト"
  }
} as const;

export function StoryDetailClient({ story }: { story: Story }) {
  const { lang } = useLang();
  const t = copy[lang];
  const content = story.content[lang];

  return (
    <main className="shell">
      <TopNav active="stories" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          {t.eyebrow && <span className="eyebrow">{t.eyebrow}</span>}
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{content.title}</h1>
          <p className="subtitle">
            {content.subtitle}{t.stories.perspective}
          </p>
        </div>

        <article className="insightBody">
          <section>
            <h2>{t.stories.storyOpening}</h2>
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
            <h2>{t.stories.themeTakeaway}</h2>
            <p>{content.themeTakeaway}</p>
          </section>
          <section>
            <h2>{modeTitle[lang][story.mode]}</h2>
            <p>{content.modeInsight}</p>
          </section>
          <section>
            <h2>{t.stories.source}</h2>
            <p className="muted">
              <a href={story.source.url} target="_blank" rel="noreferrer">
                {story.source.title}
              </a>
            </p>
          </section>
        </article>

        <div className="resultSection">
          <Link className="btn secondary" href="/stories">
            {t.stories.backToList}
          </Link>
        </div>
      </section>
    </main>
  );
}
