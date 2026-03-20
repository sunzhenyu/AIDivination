"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { stories } from "@/lib/stories";
import { useLang } from "@/lib/client";
import { copy } from "@/lib/i18n";

const ITEMS_PER_PAGE = 10;
const modeTag = {
  en: {
    tarot: "Insight Cards · AI Divination",
    career: "Growth Path · AI Divination",
    face: "Personality Lens · AI Divination",
    palm: "Life Rhythm · AI Divination"
  },
  zh: {
    tarot: "灵感卡图 · AI占卜",
    career: "成长轨迹 · AI占卜",
    face: "性格映像 · AI占卜",
    palm: "人生节律 · AI占卜"
  },
  fr: {
    tarot: "Cartes Intuitives · AI Divination",
    career: "Trajectoire · AI Divination",
    face: "Profil Perso. · AI Divination",
    palm: "Rythme de Vie · AI Divination"
  },
  ja: {
    tarot: "インサイトカード · AI占い",
    career: "成長の軌跡 · AI占い",
    face: "パーソナリティ · AI占い",
    palm: "人生のリズム · AI占い"
  }
} as const;

function interleaveByMode() {
  const modeOrder: Array<"tarot" | "career" | "face" | "palm"> = ["tarot", "career", "face", "palm"];
  const buckets = {
    tarot: stories.filter((item) => item.mode === "tarot"),
    career: stories.filter((item) => item.mode === "career"),
    face: stories.filter((item) => item.mode === "face"),
    palm: stories.filter((item) => item.mode === "palm")
  };

  const result: typeof stories = [];
  let index = 0;
  while (result.length < stories.length) {
    for (const mode of modeOrder) {
      const candidate = buckets[mode][index];
      if (candidate) result.push(candidate);
    }
    index += 1;
  }
  return result;
}

export function StoriesPageClient({ initialPage }: { initialPage: number }) {
  const { lang } = useLang();
  const t = copy[lang];
  const mixedStories = interleaveByMode();
  const totalPages = Math.max(1, Math.ceil(stories.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(Math.max(initialPage, 1), totalPages);
  const pageItems = mixedStories.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <main className="shell">
      <TopNav active="stories" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          {t.eyebrow && <span className="eyebrow">{t.eyebrow}</span>}
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>
            {t.stories.title}
          </h1>
          <p className="subtitle">{t.stories.subtitle}</p>
        </div>
        <div className="insightList">
          {pageItems.map((item) => {
            const content = item.content[lang];
            return (
              <article className="insightCard" key={item.slug}>
                <span className="storyCardBadge">{modeTag[lang][item.mode]}</span>
                <h2>{content.title}</h2>
                <p>{content.teaser}</p>
                <Link className="btn" href={`/stories/${item.slug}`}>
                  {t.stories.readStory}
                </Link>
              </article>
            );
          })}
        </div>
        <div className="paginationRow">
          <Link
            href={`/stories?page=${Math.max(1, currentPage - 1)}`}
            className={`btn secondary ${currentPage === 1 ? "isDisabled" : ""}`}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
          >
            {t.stories.prevPage}
          </Link>
          <div className="paginationInfo">
            {t.stories.pageOf} {currentPage} {t.stories.of} {totalPages}
          </div>
          <Link
            href={`/stories?page=${Math.min(totalPages, currentPage + 1)}`}
            className={`btn secondary ${currentPage === totalPages ? "isDisabled" : ""}`}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
          >
            {t.stories.nextPage}
          </Link>
        </div>
      </section>
    </main>
  );
}
