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
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{t.dream.title}</h1>
          <p className="subtitle">
            {lang === "zh"
              ? "输入你记得的梦境片段，获得象征解码、情绪线索与可执行启发。"
              : "Describe your dream and receive symbol decoding, emotional cues, and practical life hints."}
          </p>
        </div>

        <div className="resultSection" style={{ marginTop: 0 }}>
          <h4>{lang === "zh" ? "输入建议" : "Input guidance"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "尽量写下关键角色、场景、反复出现的符号，以及你醒来后的第一情绪。"
              : "Include key people, places, repeated symbols, and your first emotion after waking up."}
          </p>
        </div>

        <form className="stack" onSubmit={onSubmit}>
          <div>
            <label className="fieldLabel">{lang === "zh" ? "梦境内容" : "Dream details"}</label>
            <textarea
              rows={8}
              value={dream}
              onChange={(e) => setDream(e.target.value)}
              placeholder={
                lang === "zh"
                  ? "例如：我梦见自己在夜里赶路，走到一座桥上，桥对面有灯，但我一直找不到过去的路……"
                  : "Example: I was walking at night and reached a bridge. There were lights on the other side, but I could not find the path across..."
              }
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
              <p><strong>{lang === "zh" ? "核心主题：" : "Core theme: "}</strong>{result.coreTheme}</p>
              <p>{result.summary}</p>
            </section>

            <section className="resultSection">
              <h4>{lang === "zh" ? "梦境符号解码" : "Symbol decoding"}</h4>
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
              <h4>{lang === "zh" ? "情绪线索" : "Emotional signals"}</h4>
              <ul>
                {result.emotionalSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="resultSection">
              <h4>{lang === "zh" ? "现实启发行动" : "Practical next moves"}</h4>
              <ul>
                {result.practicalAdvice.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p><strong>{lang === "zh" ? "反思提问：" : "Reflection prompt: "}</strong>{result.oneQuestion}</p>
              <p className="muted">{result.disclaimer}</p>
            </section>
          </div>
        ) : null}
      </section>
      <TransitionOverlay show={showTransition} icon="🌙" text={t.dream.transition} />
    </main>
  );
}
