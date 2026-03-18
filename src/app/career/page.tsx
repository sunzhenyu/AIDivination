"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { TopNav } from "@/components/top-nav";
import { TransitionOverlay } from "@/components/transition-overlay";
import { copy } from "@/lib/i18n";
import { useLang, writeSession } from "@/lib/client";

export default function CareerPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const router = useRouter();
  const [name, setName] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTransition, setShowTransition] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !joinDate) return;
    setLoading(true);
    setError("");
    setShowTransition(true);
    writeSession("careerForm", { name, joinDate, lang });

    try {
      const started = Date.now();
      const res = await fetch("/api/ai/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, joinDate, lang })
      });
      const elapsed = Date.now() - started;
      if (elapsed < 2200) {
        await new Promise((resolve) => setTimeout(resolve, 2200 - elapsed));
      }
      if (!res.ok) throw new Error("request_failed");
      const data = await res.json();
      writeSession("careerResult", data);
      router.push("/career/result");
    } catch {
      setError(t.common.apiUnavailable);
      setShowTransition(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell">
      <TopNav active="career" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{t.career.title}</h1>
          <p className="subtitle">
            {lang === "zh"
              ? "把“职场命理”转成职业节奏、优势画像与成长建议。"
              : "Translate workplace destiny into timing, strengths, blind spots, and practical next moves."}
          </p>
        </div>

        <div className="resultSection" style={{ marginTop: 0 }}>
          <h4>{lang === "zh" ? "你将获得" : "What you will get"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "结果会包含职业关键词、未来 3-6 个月趋势、优势短板，以及一位与你气质接近的历史人物。"
              : "Your result includes key traits, 3-6 month trends, strengths, blind spots, and a matching historical archetype."}
          </p>
        </div>

        <div className="stack">
          <form className="stack" onSubmit={onSubmit}>
            <div>
              <label className="fieldLabel">{t.career.name}</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className="fieldLabel">{t.career.date}</label>
              <input type="date" value={joinDate} onChange={(e) => setJoinDate(e.target.value)} />
            </div>
            <button className="btn" disabled={loading || !name || !joinDate} type="submit">{loading ? t.common.loading : t.career.action}</button>
          </form>
        </div>

        {error ? <p className="muted">{error}</p> : null}
      </section>
      <TransitionOverlay show={showTransition} icon="⚡" text={t.career.transition} />
    </main>
  );
}
