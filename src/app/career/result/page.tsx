"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TopNav } from "@/components/top-nav";
import { ResultActions } from "@/components/result-actions";
import { copy } from "@/lib/i18n";
import { readSession, useLang, writeSession } from "@/lib/client";

type CareerResult = {
  name?: string;
  joinDate?: string;
  keywords?: string;
  trends?: string[];
  strengths?: string[];
  weaknesses?: string[];
  careerAdvice?: string[];
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

export default function CareerResultPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const [data, setData] = useState<CareerResult | null>(null);
  const [error, setError] = useState("");
  const captureRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cached = readSession<CareerResult>("careerResult");
    if (cached) {
      setData(cached);
      return;
    }
    const form = readSession<{ name: string; joinDate: string; lang: string }>("careerForm");
    if (!form) return;

    fetch("/api/ai/career", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
      .then((res) => {
        if (!res.ok) throw new Error("request_failed");
        return res.json();
      })
      .then((json) => {
        setData(json);
        writeSession("careerResult", json);
      })
      .catch(() => setError(t.common.apiUnavailable));
  }, [t.common.apiUnavailable]);

  if (!data && !error) {
    return (
      <main className="shell">
        <TopNav active="career" />
        <section className="panel">{t.common.loading}</section>
      </main>
    );
  }

  return (
    <main className="shell">
      <TopNav active="career" />
      <section className="panel sectionBlock resultCard" ref={captureRef}>
        <div className="resultHeader">
          <h2 className="resultTitle">{t.labels.careerResultTitle}</h2>
          <p className="resultSubtitle">{t.labels.careerResultSubtitle}</p>
        </div>
        {error ? <p className="muted">{error}</p> : null}
        {!data ? <p className="muted">{t.common.noData}</p> : (
          <>
            <div className="resultSection">
              <h3 className="sectionTitle">{t.labels.basicInfo}</h3>
              <div className="splitMeta">
                <p><strong>{t.career.name}:</strong> {data.name}</p>
                <p><strong>{t.career.date}:</strong> {data.joinDate}</p>
              </div>
            </div>
            <div className="resultSection">
              <h3 className="sectionTitle">{t.labels.careerKeywords}</h3>
              <div className="keyValue">{data.keywords}</div>
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
            <div className="resultSection"><h3 className="sectionTitle">{t.labels.trends}</h3><ul>{(data.trends || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
            <div className="resultSection">
              <h3 className="sectionTitle">{t.labels.strengthsWeaknesses}</h3>
              <p><strong>{t.labels.strengths}</strong> {Array.isArray(data.strengths) ? data.strengths.join(" · ") : data.strengths}</p>
              <p><strong>{t.labels.weaknesses}</strong> {Array.isArray(data.weaknesses) ? data.weaknesses.join(" · ") : data.weaknesses}</p>
              <ul>{(data.careerAdvice || []).map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="resultSection"><h3 className="sectionTitle">{t.labels.actionAdvice}</h3><ul>{(data.advice || []).map((x) => <li key={x}>{x}</li>)}</ul></div>
          </>
        )}
        <ResultActions targetRef={captureRef} mode="career" />
        <Link href="/" className="btn secondary" style={{ marginTop: 16 }}>{t.common.backHome}</Link>
      </section>
    </main>
  );
}
