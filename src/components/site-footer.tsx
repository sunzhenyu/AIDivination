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
            <a href="mailto:kuyadan136@gmail.com">{t.contactEmail}</a>
            <a href="https://x.com/DanDan344479" target="_blank" rel="noreferrer">
              {t.contactX}
            </a>
          </div>
          <div className="footerCol">
            <h4>{t.helpTitle}</h4>
            <Link href="/help#getting-started">{t.guide}</Link>
            <Link href="/help#faq">{t.faq}</Link>
            <Link href="/stories">{t.articles}</Link>
          </div>
          <div className="footerCol">
            <h4>{t.legalTitle}</h4>
            <Link href="/privacy">{t.privacy}</Link>
            <Link href="/terms">{t.terms}</Link>
          </div>
        </div>
      </div>
      <div className="footerBottom">{t.copyright}</div>
    </footer>
  );
}
