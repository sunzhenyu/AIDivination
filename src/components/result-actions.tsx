"use client";

import { RefObject, useState } from "react";
import { useLang } from "@/lib/client";
import { copy } from "@/lib/i18n";

type Props = {
  targetRef: RefObject<HTMLElement | null>;
  mode: "tarot" | "career" | "face" | "palm";
};

export function ResultActions({ targetRef, mode }: Props) {
  const { lang } = useLang();
  const t = copy[lang];
  const [busy, setBusy] = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = t.ui.shareText;

  async function downloadImage() {
    if (!targetRef.current || busy) return;
    setBusy(true);
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(targetRef.current, {
        backgroundColor: "#0b1630",
        useCORS: true,
        scale: 2
      });
      const link = document.createElement("a");
      const date = new Date().toISOString().slice(0, 10);
      link.download = `aidivination-${mode}-${date}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setBusy(false);
    }
  }

  function shareOnX() {
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="resultActions">
      <button className="btn" type="button" onClick={downloadImage} disabled={busy}>
        {busy ? t.ui.generating : t.ui.downloadImage}
      </button>
      <button className="btn secondary" type="button" onClick={shareOnX}>
        {t.ui.shareOnX}
      </button>
      <button className="btn secondary" type="button" onClick={shareOnFacebook}>
        {t.ui.shareOnFacebook}
      </button>
    </div>
  );
}
