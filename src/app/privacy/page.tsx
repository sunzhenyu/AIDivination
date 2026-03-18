"use client";

import { TopNav } from "@/components/top-nav";
import { useLang } from "@/lib/client";

export default function PrivacyPage() {
  const { lang } = useLang();

  return (
    <main className="shell">
      <TopNav active="home" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>
            {lang === "zh" ? "隐私政策" : "Privacy Policy"}
          </h1>
        </div>

        <div className="resultSection">
          <h4>{lang === "zh" ? "信息说明" : "Data Notice"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "我们仅处理生成解读所需的必要信息。上传的图片和表单数据仅用于当次分析，不用于出售或广告定向。"
              : "We only process the minimum information required to generate readings. Uploaded images and form data are used for the current analysis and not sold for ads."}
          </p>
        </div>

        <div className="resultSection">
          <h4>{lang === "zh" ? "安全与保留" : "Security and Retention"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "我们采取合理的技术措施保护数据传输安全。你可随时清空浏览器缓存与本地存储以移除本地会话数据。"
              : "Reasonable technical safeguards are used for data transmission. You can clear browser cache and local storage at any time to remove local session data."}
          </p>
        </div>
      </section>
    </main>
  );
}
