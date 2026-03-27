"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { copy } from "@/lib/i18n";
import { useLang, readSession } from "@/lib/client";

type FortuneResult = {
  fortuneLevel: "poor" | "fair" | "good" | "excellent";
  interpretation: string[];
  todayAdvice: string[];
  poem?: string;
};

export default function FortuneResultPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const [result, setResult] = useState<FortuneResult | null>(null);
  const [fortuneNumber, setFortuneNumber] = useState<number | null>(null);

  useEffect(() => {
    const data = readSession<FortuneResult>("fortuneResult");
    const num = readSession<number>("fortuneNumber");
    setResult(data);
    setFortuneNumber(num);
  }, []);

  if (!result) {
    return (
      <main className="shell">
        <TopNav active="fortune" />
        <section className="panel sectionBlock stack">
          <p className="muted">{t.common.noData}</p>
          <Link href="/fortune" className="btn secondary">{t.common.backHome}</Link>
        </section>
      </main>
    );
  }

  const levelLabel = t.fortune.fortuneLevels[result.fortuneLevel];
  const levelClass = `fortuneLevel level-${result.fortuneLevel}`;

  return (
    <main className="shell">
      <TopNav active="fortune" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{t.result.title}</h1>
        </div>

        <div className="resultSection">
          <h4>{t.fortune.fortuneLevel}</h4>
          <div className={levelClass}>
            <strong>{levelLabel}</strong>
          </div>
        </div>

        {result.poem && (
          <div className="resultSection">
            <div className="fortunePoem">
              {result.poem.split('\n').map((line, i) => (
                <p key={i} className="poemLine">{line}</p>
              ))}
            </div>
          </div>
        )}

        <div className="resultSection">
          <h4>{t.fortune.interpretation}</h4>
          {result.interpretation.map((para, index) => (
            <p key={index} className="muted">{para}</p>
          ))}
        </div>

        <div className="resultSection">
          <h4>{t.fortune.todayAdvice}</h4>
          <ul className="adviceList">
            {result.todayAdvice.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resultActions">
          <Link href="/fortune" className="btn secondary">{lang === "zh" ? "再抽一签" : "Draw Again"}</Link>
          <Link href="/" className="btn">{t.common.backHome}</Link>
        </div>
      </section>
    </main>
  );
}
