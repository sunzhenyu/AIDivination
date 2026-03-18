"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TopNav } from "@/components/top-nav";
import { copy } from "@/lib/i18n";
import { readSession, useLang } from "@/lib/client";

type PalmResult = {
  lines?: { life?: string; head?: string; heart?: string; career?: string };
  career?: string[];
  future?: string[];
  advice?: string[];
  narrativeSummary?: string;
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

export default function PalmResultPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const [data, setData] = useState<PalmResult | null>(null);

  useEffect(() => {
    setData(readSession<PalmResult>("palmResult"));
  }, []);

  return (
    <main className="shell">
      <TopNav active="palm" />
      <section className="panel sectionBlock resultCard">
        <div className="resultHeader">
          <h2 className="resultTitle">{lang === "zh" ? "手相占卜结果" : "Palm Reading Result"}</h2>
          <p className="resultSubtitle">
            {lang === "zh"
              ? "基于掌纹线索的阶段性参考，帮助你形成行动节奏。"
              : "A phase-based palm reading to support your personal rhythm and planning."}
          </p>
        </div>
        {!data ? <p className="muted">{t.common.noData}</p> : (
          <>
            <div className="resultSection">
              <h3 className="sectionTitle">{lang === "zh" ? "掌纹解读" : "Palm Lines"}</h3>
              <div className="featureGrid">
                {[
                  { key: "life", icon: "🌱", labelZh: "生命线", labelEn: "Life Line" },
                  { key: "head", icon: "🧠", labelZh: "智慧线", labelEn: "Head Line" },
                  { key: "heart", icon: "💗", labelZh: "感情线", labelEn: "Heart Line" },
                  { key: "career", icon: "📈", labelZh: "事业线", labelEn: "Career Line" }
                ].map((item) => {
                  const value = data.lines?.[item.key as keyof NonNullable<PalmResult["lines"]>];
                  if (!value) return null;
                  return (
                    <article className="featureItem" key={item.key}>
                      <div className="featureIcon">{item.icon} {lang === "zh" ? item.labelZh : item.labelEn}</div>
                      <p>{value}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            {data.narrativeSummary ? (
              <div className="resultSection">
                <h3 className="sectionTitle">{lang === "zh" ? "阶段故事线" : "Narrative Summary"}</h3>
                <p>{data.narrativeSummary}</p>
              </div>
            ) : null}
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
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "职业提示" : "Career Cues"}</h3><ul>{(data.career || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "未来节奏" : "Future Rhythm"}</h3><ul>{(data.future || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection"><h3 className="sectionTitle">{lang === "zh" ? "建议" : "Advice"}</h3><ul>{(data.advice || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
          </>
        )}
        <Link href="/" className="btn secondary" style={{ marginTop: 16 }}>{t.common.backHome}</Link>
      </section>
    </main>
  );
}
