"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TopNav } from "@/components/top-nav";
import { TransitionOverlay } from "@/components/transition-overlay";
import { copy } from "@/lib/i18n";
import { useLang, writeSession } from "@/lib/client";
import { randomThreeCards, TAROT_DECK, TarotCard } from "@/lib/tarot-deck";

export default function TarotPage() {
  const { lang } = useLang();
  const t = copy[lang];
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [cards, setCards] = useState<TarotCard[]>(() => randomThreeCards(TAROT_DECK));
  const [flipped, setFlipped] = useState([false, false, false]);

  const allFlipped = flipped.every(Boolean);

  function flipAt(index: number) {
    setFlipped((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next as [boolean, boolean, boolean];
    });
  }

  function shuffleCards() {
    setCards(randomThreeCards(TAROT_DECK));
    setFlipped([false, false, false]);
  }

  async function generate() {
    if (!allFlipped) return;
    setLoading(true);
    setShowTransition(true);
    try {
      const started = Date.now();
      const picked = cards.map((card) => (lang === "zh" ? card.nameZh : card.nameEn));
      writeSession("tarotCards", picked);
      const res = await fetch("/api/ai/tarot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cards: picked, lang })
      });
      const elapsed = Date.now() - started;
      if (elapsed < 2200) {
        await new Promise((resolve) => setTimeout(resolve, 2200 - elapsed));
      }
      if (!res.ok) throw new Error("request_failed");
      const data = await res.json();
      writeSession("tarotResult", data);
      router.push("/tarot/result");
    } catch {
      setShowTransition(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell">
      <TopNav active="tarot" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          {t.eyebrow && <span className="eyebrow">{t.eyebrow}</span>}
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>{t.tarot.title}</h1>
          <p className="subtitle">{t.tarot.subtitle}</p>
        </div>

        <div className="resultSection" style={{ marginTop: 0 }}>
          <h4>{t.tarot.flipRules}</h4>
          <p className="muted">{t.tarot.flipRulesDesc}</p>
        </div>

        <div className="tarotFlipGrid">
          {cards.map((card, index) => (
            <button
              key={`${card.nameEn}-${index}`}
              type="button"
              onClick={() => flipAt(index)}
              className={flipped[index] ? "tarotFlipCard flipped" : "tarotFlipCard"}
            >
              <div className="tarotFlipInner">
                <div className="tarotFace tarotFront">
                  <span className="tarotQ">?</span>
                  <span className="tarotHint">{t.tarot.cardPrefix} {index + 1}</span>
                </div>
                <div className="tarotFace tarotBack">
                  <span className="tarotPicked">{t.tarot.revealedPrefix} {index + 1}</span>
                  <strong>{lang === "zh" ? card.nameZh : card.nameEn}</strong>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="tarotActions">
          <button type="button" className="btn secondary" onClick={shuffleCards} disabled={loading}>
            {t.tarot.shuffle}
          </button>
          <button type="button" className="btn" onClick={generate} disabled={!allFlipped || loading}>
            {loading ? t.common.loading : t.tarot.reveal}
          </button>
        </div>
      </section>
      <TransitionOverlay show={showTransition} icon="🔮" text={t.tarot.transition} />
    </main>
  );
}
