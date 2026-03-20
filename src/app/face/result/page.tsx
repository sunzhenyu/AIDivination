"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TopNav } from "@/components/top-nav";
import { ResultActions } from "@/components/result-actions";
import { copy } from "@/lib/i18n";
import { readSession, useLang } from "@/lib/client";

type FaceResult = {
  features?: { forehead?: string; eyes?: string; nose?: string; mouth?: string; chin?: string };
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

export default function FaceResultPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const [data, setData] = useState<FaceResult | null>(null);
  const captureRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setData(readSession<FaceResult>("faceResult"));
  }, []);

  return (
    <main className="shell">
      <TopNav active="face" />
      <section className="panel sectionBlock resultCard" ref={captureRef}>
        <div className="resultHeader">
          <h2 className="resultTitle">{t.labels.faceResultTitle}</h2>
          <p className="resultSubtitle">{t.labels.faceResultSubtitle}</p>
        </div>
        {!data ? <p className="muted">{t.common.noData}</p> : (
          <>
            <div className="resultSection">
              <h3 className="sectionTitle">{t.labels.featureReading}</h3>
              <div className="featureGrid">
                {[
                  { key: "forehead", icon: "🪞", label: t.labels.forehead },
                  { key: "eyes", icon: "👁️", label: t.labels.eyes },
                  { key: "nose", icon: "👃", label: t.labels.nose },
                  { key: "mouth", icon: "👄", label: t.labels.mouth },
                  { key: "chin", icon: "🧭", label: t.labels.chin }
                ].map((item) => {
                  const value = data.features?.[item.key as keyof NonNullable<FaceResult["features"]>];
                  if (!value) return null;
                  return (
                    <article className="featureItem" key={item.key}>
                      <div className="featureIcon">{item.icon} {item.label}</div>
                      <p>{value}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            {data.narrativeSummary ? (
              <div className="resultSection">
                <h3 className="sectionTitle">{t.labels.narrativeSummary}</h3>
                <p>{data.narrativeSummary}</p>
              </div>
            ) : null}
            {data.historicalFigure ? (
              <div className="resultSection">
                <h3 className="sectionTitle">{t.labels.historicalMatch}</h3>
                <div className="historicalMatch">
                  <div className="historicalFigure">
                    <div className="historicalAvatar">{String(data.historicalFigure.name || "?").charAt(0)}</div>
                    <div>
                      <p className="historicalName">{data.historicalFigure.name}</p>
                      <span className="historicalRole">{data.historicalFigure.title}</span>
                      <p className="historicalDesc">{data.historicalFigure.description}</p>
                      {data.historicalFigure.story ? <p className="historicalDesc">{data.historicalFigure.story}</p> : null}
                      <p className="historicalReason">
                        <strong>{t.labels.matchReason}</strong> {data.historicalFigure.matchReason}
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
            <div className="resultSection"><h3 className="sectionTitle">{t.labels.careerCues}</h3><ul>{(data.career || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection"><h3 className="sectionTitle">{t.labels.futureTrends}</h3><ul>{(data.future || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection"><h3 className="sectionTitle">{t.labels.advice}</h3><ul>{(data.advice || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
          </>
        )}
        <ResultActions targetRef={captureRef} mode="face" />
        <Link href="/" className="btn secondary" style={{ marginTop: 16 }}>{t.common.backHome}</Link>
      </section>
    </main>
  );
}
