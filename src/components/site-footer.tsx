"use client";

import Link from "next/link";
import { copy } from "@/lib/i18n";
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
          <div className="footerCol">
            <h4>{t.supportTitle}</h4>
            <a href="mailto:kuyadan136@gmail.com" title={lang === "zh" ? "发送邮件联系我们" : "Send us an email"}>{t.contactEmail}</a>
            <a href="https://x.com/DanDan344479" title={lang === "zh" ? "打开 X 账号 @DanDan344479" : "Open X profile @DanDan344479"} target="_blank" rel="noreferrer">
              {t.contactX}
            </a>
          </div>
          <div className="footerCol">
            <h4>{t.helpTitle}</h4>
            <Link href="/help#getting-started" title={lang === "zh" ? "查看新手引导" : "View getting started guide"}>{t.guide}</Link>
            <Link href="/help#faq" title={lang === "zh" ? "查看常见问题" : "Open help center FAQ"}>{t.faq}</Link>
            <Link href="/stories" title={lang === "zh" ? "浏览故事专栏" : "Browse story library"}>{t.articles}</Link>
          </div>
          <div className="footerCol">
            <h4>{t.legalTitle}</h4>
            <Link href="/privacy" title={lang === "zh" ? "查看隐私政策" : "View privacy policy"}>{t.privacy}</Link>
            <Link href="/terms" title={lang === "zh" ? "查看服务条款" : "View terms of service"}>{t.terms}</Link>
          </div>
        </div>
      </div>
      <div className="footerBottom">{t.copyright}</div>
    </footer>
  );
}
