"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { stories } from "@/lib/stories";
import { useLang } from "@/lib/client";

const ITEMS_PER_PAGE = 10;
const modeTag = {
  en: { tarot: "Tarot AI Divination", career: "Career AI Divination", face: "Face AI Divination", palm: "Palm AI Divination" },
  zh: { tarot: "塔罗AI占卜", career: "职业AI占卜", face: "面相AI占卜", palm: "手相AI占卜" }
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
  const mixedStories = interleaveByMode();
  const totalPages = Math.max(1, Math.ceil(stories.length / ITEMS_PER_PAGE));
  const currentPage = Math.min(Math.max(initialPage, 1), totalPages);
  const pageItems = mixedStories.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <main className="shell">
      <TopNav active="stories" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>
            {lang === "zh" ? "故事专栏" : "Story Library"}
          </h1>
          <p className="subtitle">
            {lang === "zh"
              ? "精选神秘与经典叙事，帮助你把故事情节转化为现实判断与行动。"
              : "Curated classic and mystical stories that turn narrative tension into practical reflection and action."}
          </p>
        </div>
        <div className="insightList">
          {pageItems.map((item) => {
            const content = item.content[lang];
            return (
              <article className="insightCard" key={item.slug}>
                <span className="storyCardBadge">{modeTag[lang][item.mode]}</span>
                <h2>{content.title}</h2>
                <p>{content.teaser}</p>
                <Link className="btn" title={lang === "zh" ? `进入故事详情：${content.title}` : `Open story detail: ${content.title}`} href={`/stories/${item.slug}`}>
                  {lang === "zh" ? "进入故事" : "Read Story"}
                </Link>
              </article>
            );
          })}
        </div>
        <div className="paginationRow">
          <Link
            href={`/stories?page=${Math.max(1, currentPage - 1)}`}
            title={lang === "zh" ? "切换到上一页故事" : "Go to previous story page"}
            className={`btn secondary ${currentPage === 1 ? "isDisabled" : ""}`}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
          >
            {lang === "zh" ? "上一页" : "Previous"}
          </Link>
          <div className="paginationInfo">
            {lang === "zh" ? `第 ${currentPage} / ${totalPages} 页` : `Page ${currentPage} / ${totalPages}`}
          </div>
          <Link
            href={`/stories?page=${Math.min(totalPages, currentPage + 1)}`}
            title={lang === "zh" ? "切换到下一页故事" : "Go to next story page"}
            className={`btn secondary ${currentPage === totalPages ? "isDisabled" : ""}`}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
          >
            {lang === "zh" ? "下一页" : "Next"}
          </Link>
        </div>
      </section>
    </main>
  );
}
