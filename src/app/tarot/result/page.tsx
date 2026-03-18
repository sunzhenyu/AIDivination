"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TopNav } from "@/components/top-nav";
import { ResultActions } from "@/components/result-actions";
import { copy } from "@/lib/i18n";
import { readSession, useLang, writeSession } from "@/lib/client";

type TarotResult = {
  cards?: Array<{ name?: string; meaning?: string }>;
  overview?: string[];
  career?: string[];
  wealth?: string[];
  relationship?: string[];
  advice?: string[];
  predictions?: string[];
  historicalFigure?: {
    name?: string;
    title?: string;
    description?: string;
    story?: string;
    matchReason?: string;
    achievements?: string[];
    period?: string;
  };
};

const TAROT_NAME_ZH: Record<string, string> = {
  "The Fool": "愚者",
  "The Magician": "魔术师",
  "The High Priestess": "女祭司",
  "The Empress": "皇后",
  "The Emperor": "皇帝",
  "The Hierophant": "教皇",
  "The Lovers": "恋人",
  "The Chariot": "战车",
  Strength: "力量",
  "The Hermit": "隐者",
  "Wheel of Fortune": "命运之轮",
  Justice: "正义",
  "The Hanged Man": "倒吊人",
  Death: "死神",
  Temperance: "节制",
  "The Devil": "恶魔",
  "The Tower": "高塔",
  "The Star": "星星",
  "The Moon": "月亮",
  "The Sun": "太阳",
  Judgement: "审判",
  "The World": "世界"
};

export default function TarotResultPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const [data, setData] = useState<TarotResult | null>(null);
  const [error, setError] = useState("");
  const captureRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cached = readSession<TarotResult>("tarotResult");
    if (cached) {
      setData(cached);
      return;
    }
    const cards = readSession<string[]>("tarotCards");
    if (!cards || !cards.length) return;
    fetch("/api/ai/tarot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cards, lang })
    })
      .then((res) => {
        if (!res.ok) throw new Error("request_failed");
        return res.json();
      })
      .then((json) => {
        setData(json);
        writeSession("tarotResult", json);
      })
      .catch(() => setError(t.common.apiUnavailable));
  }, [lang, t.common.apiUnavailable]);

  return (
    <main className="shell">
      <TopNav active="tarot" />
      <section className="panel sectionBlock resultCard" ref={captureRef}>
        <div className="resultHeader">
          <h2 className="resultTitle">{lang === "zh" ? "塔罗牌占卜结果" : "Tarot Reading Result"}</h2>
          <p className="resultSubtitle">
            {lang === "zh"
              ? "基于三张牌的阶段性解读，供你参考与复盘。"
              : "A structured phase reading based on your three-card spread."}
          </p>
        </div>
        {error ? <p className="muted">{error}</p> : null}
        {!data ? <p className="muted">{t.common.noData}</p> : (
          <>
            <div className="resultSection">
              <h3 className="sectionTitle">{lang === "zh" ? "牌面信息" : "Cards"}</h3>
              <div className="tarotCardsGrid">
                {(data.cards || []).map((x, i) => (
                  <article className="resultTarotCard" key={`${x.name}-${i}`}>
                    <div className="cardName">{lang === "zh" ? (x.name ? TAROT_NAME_ZH[x.name] || x.name : "") : x.name}</div>
                    <div className="cardMeaning">{x.meaning}</div>
                  </article>
                ))}
              </div>
            </div>
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "整体趋势" : "Overview"}</h3><ul>{(data.overview || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            {data.historicalFigure ? (
              <div className="resultSection">
                <h3 className="sectionTitle">{lang === "zh" ? "历史人物匹配" : "Historical Match"}</h3>
                <div className="historicalMatch">
                  <div className="historicalFigure">
                    <div className="historicalAvatar">{String(data.historicalFigure.name || "?").charAt(0)}</div>
                    <div>
                      <p className="historicalName">{data.historicalFigure.name}</p>
                      <span className="historicalRole">{data.historicalFigure.title}</span>
                      <p className="historicalDesc">{data.historicalFigure.description}</p>
                      {data.historicalFigure.story ? <p className="historicalDesc">{data.historicalFigure.story}</p> : null}
                      <p className="historicalReason">
                        <strong>{lang === "zh" ? "匹配理由：" : "Reason:"}</strong> {data.historicalFigure.matchReason}
                      </p>
                      {Array.isArray(data.historicalFigure.achievements) && data.historicalFigure.achievements.length ? (
                        <div className="achievementList">
                          {data.historicalFigure.achievements.map((item) => (
                            <span className="achievementTag" key={item}>{item}</span>
                          ))}
                        </div>
                      ) : null}
                      {data.historicalFigure.period ? <p className="historicalPeriod">{data.historicalFigure.period}</p> : null}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "职业方向" : "Career"}</h3><ul>{(data.career || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "财务节奏" : "Wealth"}</h3><ul>{(data.wealth || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "关系互动" : "Relationship"}</h3><ul>{(data.relationship || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "近期预测" : "Predictions"}</h3><ul>{(data.predictions || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "行动建议" : "Advice"}</h3><ul>{(data.advice || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
          </>
        )}
        <ResultActions targetRef={captureRef} mode="tarot" />
        <Link href="/" className="btn secondary" style={{ marginTop: 16 }}>{t.common.backHome}</Link>
      </section>
    </main>
  );
}
