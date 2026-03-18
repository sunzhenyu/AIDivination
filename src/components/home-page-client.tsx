"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { useLang } from "@/lib/client";
import { copy } from "@/lib/i18n";
import { stories } from "@/lib/stories";

export function HomePageClient() {
  const { lang } = useLang();
  const t = copy[lang];
  const insightRows = lang === "zh"
    ? [
        { label: "体验定位", value: "娱乐体验 + 自我复盘" },
        { label: "使用场景", value: "职业、社交、内容分享、自我探索" },
        { label: "产品风格", value: "轻松、温和、可持续使用" }
      ]
    : [
        { label: "Positioning", value: "Entertainment + reflection" },
        { label: "Use cases", value: "Career, social, content, self-discovery" },
        { label: "Experience style", value: "Lightweight, warm, and repeatable" }
      ];
  const featuredStories = stories.slice(0, 4);

  return (
    <main className="shell">
      <TopNav active="home" />
      <section className="panel heroPanel">
        <div className="heroTitleWrap">
          <span className="eyebrow">{lang === "zh" ? "AI 灵感探索体验" : "AI guidance playground"}</span>
          <h1 className="title">
            {lang === "zh"
              ? "把塔罗、职业洞察与自我探索，做成更好用的日常体验"
              : "Turn tarot, career reflection, and self-discovery into a daily, delightful experience"}
          </h1>
          <p className="subtitle">{t.home.subtitle}</p>
          <div className="heroActions">
            <Link href="/career" className="btn primary">{t.common.start}</Link>
            <a href="#modes" className="btn secondary">{lang === "zh" ? "查看四种体验" : "Explore all four modes"}</a>
          </div>
          <div className="heroBadges">
            <span className="badgeChip">{lang === "zh" ? "轻松探索优先" : "Fun-first guidance"}</span>
            <span className="badgeChip">{lang === "zh" ? "适合社交分享" : "Built for social sharing"}</span>
            <span className="badgeChip">{lang === "zh" ? "即时反馈体验" : "Instant feedback"}</span>
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
          <p>{lang === "zh" ? "四种入口覆盖最容易理解的探索路径：卡牌、职业、面部画像与手相叙事。" : "Four entry points designed around the ways users understand tarot, personality guidance, and light career reflection."}</p>
        </div>
        <div className="grid">
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🔮</span>
              <div>
                <h3>{lang === "zh" ? "塔罗AI占卜" : "Tarot AI Divination"}</h3>
                <div className="cardTag">{lang === "zh" ? "故事化解读" : "Story-led ritual"}</div>
              </div>
            </div>
            <p>{t.home.tarotDesc}</p>
            <Link href="/tarot" className="btn">{lang === "zh" ? "开启塔罗" : "Open tarot"}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">⚡</span>
              <div>
                <h3>{lang === "zh" ? "职业AI占卜" : "Career AI Divination"}</h3>
                <div className="cardTag">{lang === "zh" ? "现代职业建议" : "Modern work guidance"}</div>
              </div>
            </div>
            <p>{t.home.careerDesc}</p>
            <Link href="/career" className="btn">{lang === "zh" ? "生成分析" : "Generate reading"}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🪞</span>
              <div>
                <h3>{lang === "zh" ? "面相AI占卜" : "Face AI Divination"}</h3>
                <div className="cardTag">{lang === "zh" ? "人格特征洞察" : "Personality-led reading"}</div>
              </div>
            </div>
            <p>{t.home.faceDesc}</p>
            <Link href="/face" className="btn">{lang === "zh" ? "开始识别" : "Start reading"}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🖐️</span>
              <div>
                <h3>{lang === "zh" ? "手相AI占卜" : "Palm AI Divination"}</h3>
                <div className="cardTag">{lang === "zh" ? "阶段趋势叙事" : "Narrative future cues"}</div>
              </div>
            </div>
            <p>{t.home.palmDesc}</p>
            <Link href="/palm" className="btn">{lang === "zh" ? "查看手相" : "Read your palm"}</Link>
          </article>
        </div>
      </section>

      <section className="panel sectionBlock">
        <div className="sectionHeading">
          <h2>{lang === "zh" ? "神秘故事集" : "Mystic Storybook"}</h2>
          <p>{lang === "zh" ? "精选神秘与经典叙事，帮助你把故事情节转化为现实判断与行动。" : "Curated classic and mystical stories that turn narrative tension into practical reflection and action."}</p>
        </div>
        <div className="storyStrip">
          {featuredStories.map((story) => {
            const content = story.content[lang];
            return (
              <article key={story.slug} className="storyMiniCard">
                <h3>{content.title}</h3>
                <p>{content.teaser}</p>
                <Link href={`/stories/${story.slug}`} className="storyMiniLink">
                  {lang === "zh" ? "查看故事" : "Read story"}
                </Link>
              </article>
            );
          })}
        </div>
        <div className="heroActions" style={{ marginTop: 0 }}>
          <Link href="/stories" className="btn primary">{lang === "zh" ? "浏览故事列表" : "Browse Story List"}</Link>
        </div>
      </section>
    </main>
  );
}
