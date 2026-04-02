"use client";

import Link from "next/link";
import { copy, getLocalizedPath } from "@/lib/i18n";
import { useLang } from "@/lib/client";

export function SiteFooter() {
  const { lang } = useLang();
  const t = copy[lang].footer;

  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="footerBrandBlock">
          <strong>{copy[lang].brand}</strong>
          <p>{t.tagline}</p>
        </div>
        <div className="footerCols">
          <div className="footerCol contactCol">
            <h4>{t.supportTitle}</h4>
            <div className="footerIconLinks">
              <a
                href="mailto:kuyadan136@gmail.com"
                title={lang === "zh" ? "发送邮件联系我们" : "Send us an email"}
                aria-label={lang === "zh" ? "发送邮件联系我们" : "Send us an email"}
                className="footerIconLink"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.75 6.75h16.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m4 8 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://x.com/DanDan344479"
                title={lang === "zh" ? "打开 X 账号 @DanDan344479" : "Open X profile @DanDan344479"}
                aria-label={lang === "zh" ? "打开 X 账号 @DanDan344479" : "Open X profile @DanDan344479"}
                target="_blank"
                rel="noreferrer"
                className="footerIconLink"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4l16 16M20 4 4 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footerCol">
            <h4>{t.helpTitle}</h4>
            <Link href={getLocalizedPath("/help", lang) + "#getting-started"} title={lang === "zh" ? "查看新手引导" : "View getting started guide"}>{t.guide}</Link>
            <Link href={getLocalizedPath("/help", lang) + "#faq"} title={lang === "zh" ? "查看常见问题" : "Open help center FAQ"}>{t.faq}</Link>
            <Link href={getLocalizedPath("/stories", lang)} title={lang === "zh" ? "浏览故事专栏" : "Browse story library"}>{t.articles}</Link>
          </div>
          <div className="footerCol">
            <h4>{t.legalTitle}</h4>
            <Link href={getLocalizedPath("/privacy", lang)} title={lang === "zh" ? "查看隐私政策" : "View privacy policy"}>{t.privacy}</Link>
            <Link href={getLocalizedPath("/terms", lang)} title={lang === "zh" ? "查看服务条款" : "View terms of service"}>{t.terms}</Link>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <span>{t.copyright}</span>
        <a href="https://www.producthunt.com/products/ai-divination?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-ai-divination" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", marginLeft: "16px" }}>
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1110525&theme=light&t=1774786440755" alt="AI Divination - Free AI tarot, career &amp; dream readings | Product Hunt" style={{ height: "28px", width: "auto" }} />
        </a>
        <a href="https://www.tooljunction.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", marginLeft: "16px" }}>
          <img src="https://ik.imagekit.io/or8e5hp54/tj/badge.svg" alt="Featured on ToolJunction" style={{ height: "28px" }} />
        </a>
      </div>
    </footer>
  );
}
