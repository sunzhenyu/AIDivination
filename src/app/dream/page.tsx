"use client";

import { FormEvent, useState } from "react";
import { TopNav } from "@/components/top-nav";
import { TransitionOverlay } from "@/components/transition-overlay";
import { copy } from "@/lib/i18n";
import { useLang } from "@/lib/client";

type DreamResult = {
  dreamTitle: string;
  coreTheme: string;
  summary: string;
  symbols: Array<{ symbol: string; meaning: string }>;
  emotionalSignals: string[];
  practicalAdvice: string[];
  oneQuestion: string;
  disclaimer: string;
};

export default function DreamPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const [dream, setDream] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<DreamResult | null>(null);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!dream.trim()) return;

    setLoading(true);
    setShowTransition(true);
    setError("");
    setResult(null);

    try {
      const started = Date.now();
      const res = await fetch("/api/ai/dream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dream, lang })
      });
      const elapsed = Date.now() - started;
      if (elapsed < 2200) {
        await new Promise((resolve) => setTimeout(resolve, 2200 - elapsed));
      }
      if (!res.ok) throw new Error("request_failed");
      const data = (await res.json()) as DreamResult;
      setResult(data);
      setShowTransition(false);
    } catch {
      setError(t.common.apiUnavailable);
      setShowTransition(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell">
      <TopNav active="dream" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          {t.eyebrow && <span className="eyebrow">{t.eyebrow}</span>}
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{t.dream.title}</h1>
          <p className="subtitle">{t.dream.subtitle}</p>
        </div>

        <div className="resultSection" style={{ marginTop: 0 }}>
          <h4>{t.dream.inputGuidance}</h4>
          <p className="muted">{t.dream.inputGuidanceDesc}</p>
        </div>

        <form className="stack" onSubmit={onSubmit}>
          <div>
            <label className="fieldLabel">{t.dream.dreamLabel}</label>
            <textarea
              rows={8}
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder={t.dream.placeholder}
            />
          </div>
          <button className="btn" disabled={loading || !dream.trim()} type="submit">
            {loading ? t.common.loading : t.dream.action}
          </button>
        </form>

        {error ? <p className="muted">{error}</p> : null}

        {result ? (
          <div className="stack">
            <section className="resultSection">
              <h4>{result.dreamTitle}</h4>
              <p><strong>{t.dream.coreTheme}</strong>{result.coreTheme}</p>
              <p>{result.summary}</p>
            </section>

            <section className="resultSection">
              <h4>{t.dream.symbolDecoding}</h4>
              <ul>
                {result.symbols.map((item) => (
                  <li key={`${item.symbol}-${item.meaning}`}>
                    <strong>{item.symbol}</strong>
                    <p>{item.meaning}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="resultSection">
              <h4>{t.dream.emotionalSignals}</h4>
              <ul>
                {result.emotionalSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="resultSection">
              <h4>{t.dream.practicalMoves}</h4>
              <ul>
                {result.practicalAdvice.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p><strong>{t.dream.reflectionPrompt}</strong>{result.oneQuestion}</p>
              <p className="muted">{result.disclaimer}</p>
            </section>
          </div>
        ) : null}
      </section>
      <TransitionOverlay show={showTransition} icon="🌙" text={t.dream.transition} />
    </main>
  );
}
