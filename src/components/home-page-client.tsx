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
            <Link href="/career" title={lang === "zh" ? "开始职业 AI 占卜分析" : "Start Career AI reading"} className="btn primary">{t.common.start}</Link>
            <a href="#modes" title={lang === "zh" ? "查看五种 AI 占卜体验模式" : "Explore all five AI divination modes"} className="btn secondary">{lang === "zh" ? "查看五种体验" : "Explore all five modes"}</a>
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
          <p>{lang === "zh" ? "五种入口覆盖高频探索路径：卡牌、职业、面部画像、手相叙事与梦境符号。" : "Five entry points cover tarot, career, face, palm, and dream-symbol interpretation in one flow."}</p>
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
            <Link href="/tarot" title={lang === "zh" ? "进入塔罗 AI 占卜" : "Open Tarot AI divination"} className="btn">{lang === "zh" ? "开启塔罗" : "Open tarot"}</Link>
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
            <Link href="/career" title={lang === "zh" ? "进入职业 AI 占卜" : "Open Career AI divination"} className="btn">{lang === "zh" ? "生成分析" : "Generate reading"}</Link>
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
            <Link href="/face" title={lang === "zh" ? "进入面相 AI 占卜" : "Open Face AI divination"} className="btn">{lang === "zh" ? "开始识别" : "Start reading"}</Link>
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
            <Link href="/palm" title={lang === "zh" ? "进入手相 AI 占卜" : "Open Palm AI divination"} className="btn">{lang === "zh" ? "查看手相" : "Read your palm"}</Link>
          </article>
          <article className="card">
            <div className="cardHeader">
              <span className="cardIcon">🌙</span>
              <div>
                <h3>{lang === "zh" ? "解梦AI占卜" : "Dream AI Divination"}</h3>
                <div className="cardTag">{lang === "zh" ? "梦境符号解码" : "Dream symbol decoding"}</div>
              </div>
            </div>
            <p>{t.home.dreamDesc}</p>
            <Link href="/dream" title={lang === "zh" ? "进入解梦 AI 占卜" : "Open Dream AI divination"} className="btn">{lang === "zh" ? "开始解梦" : "Decode dream"}</Link>
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
                <Link href={`/stories/${story.slug}`} title={lang === "zh" ? `阅读故事：${content.title}` : `Read story: ${content.title}`} className="storyMiniLink">
                  {lang === "zh" ? "查看故事" : "Read story"}
                </Link>
              </article>
            );
          })}
        </div>
        <div className="heroActions" style={{ marginTop: 0 }}>
          <Link href="/stories" title={lang === "zh" ? "浏览完整故事列表" : "Browse full story list"} className="btn primary">{lang === "zh" ? "浏览故事列表" : "Browse Story List"}</Link>
        </div>
      </section>
    </main>
  );
}
