"use client";

import Link from "next/link";
import { TopNav } from "@/components/top-nav";
import { useLang } from "@/lib/client";

export function NotFoundPage() {
  const { lang } = useLang();

  return (
    <main className="shell">
      <TopNav active="home" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>
            {lang === "zh" ? "页面未找到" : "Page Not Found"}
          </h1>
          <p className="subtitle">
            {lang === "zh"
              ? "你访问的页面不存在或已被移动。你可以返回首页继续探索。"
              : "The page you requested does not exist or has moved. You can return home and continue exploring."}
          </p>
        </div>

        <div className="heroActions" style={{ marginTop: 0 }}>
          <Link href="/" className="btn primary">{lang === "zh" ? "返回首页" : "Back to Home"}</Link>
          <Link href="/help" className="btn secondary">{lang === "zh" ? "查看帮助" : "Open Help Center"}</Link>
        </div>
      </section>
    </main>
  );
}
