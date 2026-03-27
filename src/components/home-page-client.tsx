"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { useLang } from "@/lib/client";
import { copy } from "@/lib/i18n";
import { stories } from "@/lib/stories";

export function HomePageClient() {
  const { lang } = useLang();
  const t = copy[lang];
  const insightRows = [
    { label: t.home.insightLabel1, value: t.home.insightValue1 },
    { label: t.home.insightLabel2, value: t.home.insightValue2 },
    { label: t.home.insightLabel3, value: t.home.insightValue3 }
  ];
  const featuredStories = stories.slice(0, 4);

  return (
    <main className="shell">
      <TopNav active="home" />
      <section className="panel heroPanel">
        <div className="heroTitleWrap">
          <span className="eyebrow">{t.home.eyebrow}</span>
          <h1 className="title">{t.home.heroTitle}</h1>
          <p className="subtitle">{t.home.subtitle}</p>
          <div className="heroActions">
            <Link href="/career" title={t.career.title} className="btn primary">{t.common.start}</Link>
            <a href="#modes" className="btn secondary">{t.home.exploreAll}</a>
          </div>
          <div className="heroBadges">
            <span className="badgeChip">{t.home.badgeFun}</span>
            <span className="badgeChip">{t.home.badgeSocial}</span>
            <span className="badgeChip">{t.home.badgeInstant}</span>
          </div>
        </div>
        <div className="heroInsightCard">
          <span className="orbitalRing orbitalRingA" />
          <span className="orbitalRing orbitalRingB" />
          <div className="insightGrid">
            {insightRows.map((row) => (
              <div className="insightItem" key={row.label}>
                <span className="insightLabel">{row.label}</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel sectionBlock" id="modes">
        <div className="sectionHeading">
          <h2>{t.home.cardsTitle}</h2>
          <p>{t.home.modesDesc}</p>
        </div>
        <div className="grid">
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🔮</span>
              <div>
                <h3>{t.home.tarotName}</h3>
                <div className="cardTag">{t.home.tarotTag}</div>
              </div>
            </div>
            <p>{t.home.tarotDesc}</p>
            <Link href="/tarot" className="btn">{t.home.tarotCta}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">⚡</span>
              <div>
                <h3>{t.home.careerName}</h3>
                <div className="cardTag">{t.home.careerTag}</div>
              </div>
            </div>
            <p>{t.home.careerDesc}</p>
            <Link href="/career" className="btn">{t.home.careerCta}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🪞</span>
              <div>
                <h3>{t.home.faceName}</h3>
                <div className="cardTag">{t.home.faceTag}</div>
              </div>
            </div>
            <p>{t.home.faceDesc}</p>
            <Link href="/face" className="btn">{t.home.faceCta}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🖐️</span>
              <div>
                <h3>{t.home.palmName}</h3>
                <div className="cardTag">{t.home.palmTag}</div>
              </div>
            </div>
            <p>{t.home.palmDesc}</p>
            <Link href="/palm" className="btn">{t.home.palmCta}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🌙</span>
              <div>
                <h3>{t.home.dreamName}</h3>
                <div className="cardTag">{t.home.dreamTag}</div>
              </div>
            </div>
            <p>{t.home.dreamDesc}</p>
            <Link href="/dream" className="btn">{t.home.dreamCta}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🎋</span>
              <div>
                <h3>{t.home.fortuneName}</h3>
                <div className="cardTag">{t.home.fortuneTag}</div>
              </div>
            </div>
            <p>{lang === "zh" ? "每日抽签获得佛家风格的运势解读与今日宜忌建议。" : "Draw a daily fortune stick and receive Buddhist-style guidance with practical advice."}</p>
            <Link href="/fortune" className="btn">{t.home.fortuneCta}</Link>
          </article>
        </div>
      </section>

      <section className="panel sectionBlock">
        <div className="sectionHeading">
          <h2>{t.home.storyTitle}</h2>
          <p>{t.home.storyDesc}</p>
        </div>
        <div className="storyStrip">
          {featuredStories.map((story) => {
            const content = story.content[lang];
            return (
              <article key={story.slug} className="storyMiniCard">
                <h3>{content.title}</h3>
                <p>{content.teaser}</p>
                <Link href={`/stories/${story.slug}`} className="storyMiniLink">
                  {t.home.storyRead}
                </Link>
              </article>
            );
          })}
        </div>
        <div className="heroActions" style={{ marginTop: 0 }}>
          <Link href="/stories" className="btn primary">{t.home.storyBrowse}</Link>
        </div>
      </section>
    </main>
  );
}
