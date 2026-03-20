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
          {t.eyebrow && <span className="eyebrow">{t.eyebrow}</span>}
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{t.career.title}</h1>
          <p className="subtitle">{t.career.subtitle}</p>
        </div>

        <div className="resultSection" style={{ marginTop: 0 }}>
          <h4>{t.career.whatYouGet}</h4>
          <p className="muted">{t.career.whatYouGetDesc}</p>
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
