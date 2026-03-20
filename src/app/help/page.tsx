"use client";

import { TopNav } from "@/components/top-nav";
import { useLang } from "@/lib/client";

export default function HelpPage() {
  const { lang } = useLang();

  return (
    <main className="shell">
      <TopNav active="home" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>
            {lang === "zh" ? "帮助中心" : "Help Center"}
          </h1>
          <p className="subtitle">
            {lang === "zh"
              ? "这里包含快速上手说明、流程指引和常见问题。"
              : "Find onboarding tips, flow guidance, and common troubleshooting notes."}
          </p>
        </div>

        <div className="resultSection" id="getting-started">
          <h4>{lang === "zh" ? "新手引导" : "Getting Started"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "在首页选择模式后，按页面提示输入信息或上传照片，点击「分析/生成」即可。系统会先展示过渡动画，再进入结果页。"
              : "Choose a mode on Home, fill in your inputs or upload/take a photo, then click analyze. You will see a transition animation before the result page appears."}
          </p>
        </div>

        <div className="resultSection" id="faq">
          <h4>{lang === "zh" ? "常见问题" : "FAQ"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "1) 如果没有结果，请检查网络和模型配置。2) 如果图片上传失败，建议更换网络或压缩图片后重试。3) 中英文切换位于页面顶部导航右侧。"
              : "1) If no result appears, verify network and model settings. 2) If upload fails, retry with a smaller image. 3) Language switch is at the top navigation right side."}
          </p>
        </div>

        <div className="resultSection">
          <h4>{lang === "zh" ? "联系支持" : "Support Contact"}</h4>
          <p className="muted">
            Email: <a href="mailto:kuyadan136@gmail.com">kuyadan136@gmail.com</a>
            <br />
            X: <a href="https://x.com/DanDan344479" target="_blank" rel="noreferrer">@DanDan344479</a>
          </p>
        </div>
      </section>
    </main>
  );
}
