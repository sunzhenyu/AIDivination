"use client";

import Link from "next/link";
import { copy } from "@/lib/i18n";
import { useLang } from "@/lib/client";

export function TopNav({ active }: { active: "home" | "tarot" | "career" | "face" | "palm" | "stories" | "insights" }) {
  const { lang, setLang } = useLang();
  const t = copy[lang];

  return (
    <header className="topNav">
      <Link href="/" className="brand">{t.brand}</Link>
      <nav className="navLinks">
        <Link href="/" className={active === "home" ? "navLink active" : "navLink"}>{t.nav.home}</Link>
        <Link href="/tarot" className={active === "tarot" ? "navLink active" : "navLink"}>{t.nav.tarot}</Link>
        <Link href="/career" className={active === "career" ? "navLink active" : "navLink"}>{t.nav.career}</Link>
        <Link href="/face" className={active === "face" ? "navLink active" : "navLink"}>{t.nav.face}</Link>
        <Link href="/palm" className={active === "palm" ? "navLink active" : "navLink"}>{t.nav.palm}</Link>
        <Link href="/stories" className={active === "stories" || active === "insights" ? "navLink active" : "navLink"}>{t.nav.stories}</Link>
      </nav>
      <div className="langSelectWrap">
        <label htmlFor="language-select" className="srOnly">{lang === "zh" ? "语言" : "Language"}</label>
        <select
          id="language-select"
          className="langSelect"
          value={lang}
          onChange={(event) => setLang(event.target.value as "en" | "zh")}
        >
          <option value="zh">{lang === "zh" ? "中文" : "Chinese"}</option>
          <option value="en">{lang === "zh" ? "英文" : "English"}</option>
        </select>
      </div>
    </header>
  );
}
