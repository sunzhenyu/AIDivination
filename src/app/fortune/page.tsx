"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TopNav } from "@/components/top-nav";
import { TransitionOverlay } from "@/components/transition-overlay";
import { copy } from "@/lib/i18n";
import { useLang, writeSession } from "@/lib/client";
import { getFortuneStick } from "@/lib/fortune-sticks";

export default function FortunePage() {
  const { lang } = useLang();
  const t = copy[lang];
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [fortuneNumber, setFortuneNumber] = useState<number | null>(null);

  async function drawFortune() {
    if (loading || spinning) return;

    setSpinning(true);
    setFortuneNumber(null);

    let count = 0;
    const maxCount = 30;
    const interval = setInterval(() => {
      setFortuneNumber(Math.floor(Math.random() * 100) + 1);
      count++;
      if (count >= maxCount) {
        clearInterval(interval);
        const finalNumber = Math.floor(Math.random() * 100) + 1;
        setFortuneNumber(finalNumber);
        setSpinning(false);
        generateReading(finalNumber);
      }
    }, 80);
  }

  async function generateReading(number: number) {
    setLoading(true);
    setShowTransition(true);
    try {
      const started = Date.now();
      writeSession("fortuneNumber", number);
      const res = await fetch("/api/ai/fortune", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number, lang })
      });
      const elapsed = Date.now() - started;
      if (elapsed < 2200) {
        await new Promise((resolve) => setTimeout(resolve, 2200 - elapsed));
      }
      if (!res.ok) throw new Error("request_failed");
      const data = await res.json();
      writeSession("fortuneResult", data);
      router.push("/fortune/result");
    } catch {
      setShowTransition(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell">
      <TopNav active="fortune" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          {t.eyebrow && <span className="eyebrow">{t.eyebrow}</span>}
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{t.fortune.title}</h1>
          <p className="subtitle">{t.fortune.subtitle}</p>
        </div>

        <div className="resultSection" style={{ marginTop: 0 }}>
          <h4>{t.fortune.drawGuidance}</h4>
          <p className="muted">{t.fortune.drawGuidanceDesc}</p>
        </div>

        <div className="fortuneWheel">
          <div className={spinning ? "fortuneDisplay spinning" : "fortuneDisplay"}>
            {fortuneNumber !== null ? (
              <div style={{ textAlign: "center", padding: "0 20px" }}>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#f8be6a", marginBottom: "8px" }}>
                  {t.fortune.fortuneLevels[getFortuneStick(fortuneNumber).level as keyof typeof t.fortune.fortuneLevels]}
                </div>
                {lang === "zh" && (
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff" }}>
                    {getFortuneStick(fortuneNumber).text}
                  </div>
                )}
              </div>
            ) : (
              <span className="fortunePlaceholder">?</span>
            )}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
          <button
            type="button"
            className="btn"
            onClick={drawFortune}
            disabled={loading || spinning}
            style={{ maxWidth: "400px" }}
          >
            {loading ? t.common.loading : spinning ? t.fortune.action : t.fortune.action}
          </button>
        </div>
      </section>
      <TransitionOverlay show={showTransition} icon="🎋" text={t.fortune.transition} />
    </main>
  );
}
