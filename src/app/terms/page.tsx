"use client";

import { TopNav } from "@/components/top-nav";
import { useLang } from "@/lib/client";

export default function TermsPage() {
  const { lang } = useLang();

  return (
    <main className="shell">
      <TopNav active="home" />
      <section className="panel sectionBlock stack">
        <div className="pageHeader">
          <span className="eyebrow">AI Divination</span>
          <h1 className="title" style={{ maxWidth: "none", marginInline: "auto" }}>
            {lang === "zh" ? "服务条款" : "Terms of Service"}
          </h1>
        </div>

        <div className="resultSection">
          <h4>{lang === "zh" ? "使用说明" : "Usage Scope"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "本产品提供的是娱乐和自我探索类信息，不构成医疗、法律、财务等专业意见。你应自行判断并承担相关决策责任。"
              : "This product provides entertainment and self-reflection content only. It is not medical, legal, or financial advice. You are responsible for your own decisions."}
          </p>
        </div>

        <div className="resultSection">
          <h4>{lang === "zh" ? "可用性" : "Service Availability"}</h4>
          <p className="muted">
            {lang === "zh"
              ? "我们会尽力保障服务稳定，但不承诺绝对无中断。若遇到第三方模型或网络问题，结果可能延迟或暂不可用。"
              : "We strive for stable service but cannot guarantee uninterrupted availability. Third-party model or network issues may cause delays or temporary outages."}
          </p>
        </div>
      </section>
    </main>
  );
}
