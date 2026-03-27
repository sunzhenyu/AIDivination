"use client";

import Link from "next/link";
import { useState } from "react";
import { copy } from "@/lib/i18n";
import { useLang } from "@/lib/client";

export function TopNav({ active }: { active: "home" | "tarot" | "career" | "face" | "palm" | "dream" | "fortune" | "stories" | "insights" | "daily" }) {
  const { lang, setLang } = useLang();
  const t = copy[lang];
  const aiActive = active === "tarot" || active === "career" || active === "face" || active === "palm";
  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const aiCurrentLabel = active === "tarot"
    ? t.nav.tarot
    : active === "career"
      ? t.nav.career
      : active === "face"
        ? t.nav.face
        : active === "palm"
          ? t.nav.palm
          : t.nav.ai;

  return (
    <header className="topNav">
      <Link href="/" className="brand" title={lang === "zh" ? "返回 AI Divination 首页" : "Go to AI Divination home page"}>{t.brand}</Link>
      <nav className="navLinks">
        <Link href="/" title={lang === "zh" ? "进入首页" : "Go to Home"} className={active === "home" ? "navLink active" : "navLink"}>{t.nav.home}</Link>
        <div
          className={aiActive ? "navDropdown active" : "navDropdown"}
          onMouseEnter={() => setAiMenuOpen(true)}
          onMouseLeave={() => setAiMenuOpen(false)}
        >
          <button
            type="button"
            className={aiActive ? "navLink active navDropdownTrigger" : "navLink navDropdownTrigger"}
            aria-haspopup="menu"
            aria-expanded={aiMenuOpen}
            onClick={() => setAiMenuOpen((prev) => !prev)}
          >
            {aiCurrentLabel}
          </button>
          <div className={aiMenuOpen ? "navDropdownMenu open" : "navDropdownMenu"}>
            <Link onClick={() => setAiMenuOpen(false)} href="/tarot" title={lang === "zh" ? "进入塔罗 AI 占卜页面" : "Open Tarot AI divination page"} className={active === "tarot" ? "navDropdownItem active" : "navDropdownItem"}>{t.nav.tarot}</Link>
            <Link onClick={() => setAiMenuOpen(false)} href="/career" title={lang === "zh" ? "进入职业 AI 占卜页面" : "Open Career AI divination page"} className={active === "career" ? "navDropdownItem active" : "navDropdownItem"}>{t.nav.career}</Link>
            <Link onClick={() => setAiMenuOpen(false)} href="/face" title={lang === "zh" ? "进入面相 AI 占卜页面" : "Open Face AI divination page"} className={active === "face" ? "navDropdownItem active" : "navDropdownItem"}>{t.nav.face}</Link>
            <Link onClick={() => setAiMenuOpen(false)} href="/palm" title={lang === "zh" ? "进入手相 AI 占卜页面" : "Open Palm AI divination page"} className={active === "palm" ? "navDropdownItem active" : "navDropdownItem"}>{t.nav.palm}</Link>
          </div>
        </div>
        <Link href="/dream" title={lang === "zh" ? "进入 AI 解梦页面" : "Open AI dream interpretation page"} className={active === "dream" ? "navLink active" : "navLink"}>{t.nav.dream}</Link>
        <Link href="/fortune" title={lang === "zh" ? "进入每日一签页面" : "Open daily fortune page"} className={active === "fortune" ? "navLink active" : "navLink"}>{t.nav.fortune}</Link>
        <Link href="/daily" title={lang === "zh" ? "进入每日一读页面" : "Open daily reading page"} className={active === "daily" ? "navLink active" : "navLink"}>{t.nav.daily}</Link>
        <Link href="/stories" title={lang === "zh" ? "进入故事专栏" : "Open story library"} className={active === "stories" || active === "insights" ? "navLink active" : "navLink"}>{t.nav.stories}</Link>
      </nav>
      <div className="langSelectWrap">
        <label htmlFor="language-select" className="srOnly">{lang === "zh" ? "语言" : "Language"}</label>
        <select
          id="language-select"
          className="langSelect"
          value={lang}
          onChange={(event) => setLang(event.target.value as "en" | "zh" | "fr" | "ja")}
        >
          <option value="en">{lang === "zh" ? "英文" : lang === "ja" ? "英語" : lang === "fr" ? "Anglais" : "English"}</option>
          <option value="zh">{lang === "zh" ? "中文" : lang === "ja" ? "中国語" : lang === "fr" ? "Chinois" : "Chinese"}</option>
          <option value="fr">{lang === "zh" ? "法语" : lang === "ja" ? "フランス語" : lang === "fr" ? "Français" : "French"}</option>
          <option value="ja">{lang === "zh" ? "日语" : lang === "ja" ? "日本語" : lang === "fr" ? "Japonais" : "Japanese"}</option>
        </select>
      </div>
    </header>
  );
}
