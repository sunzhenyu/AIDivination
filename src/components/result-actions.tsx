"use client";

import { RefObject, useState } from "react";
import { useLang } from "@/lib/client";

type Props = {
  targetRef: RefObject<HTMLElement | null>;
  mode: "tarot" | "career" | "face" | "palm";
};

export function ResultActions({ targetRef, mode }: Props) {
  const { lang } = useLang();
  const [busy, setBusy] = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = lang === "zh"
    ? "我在 AI Divination 的占卜结果，来看看你的解读。"
    : "I got my reading result on AI Divination. Check your own result.";

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
        {busy ? (lang === "zh" ? "生成中..." : "Generating...") : (lang === "zh" ? "下载图片" : "Download Image")}
      </button>
      <button className="btn secondary" type="button" onClick={shareOnX}>
        {lang === "zh" ? "分享到 X" : "Share on X"}
      </button>
      <button className="btn secondary" type="button" onClick={shareOnFacebook}>
        {lang === "zh" ? "分享到 Facebook" : "Share on Facebook"}
      </button>
    </div>
  );
}
