"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_LANG, detectLang, Lang, setStoredLang } from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    setLangState(detectLang());
    const onStorage = () => {
      setLangState(detectLang());
    };
    const onLangChange = (event: Event) => {
      const next = (event as CustomEvent<Lang>).detail;
      if (next === "en" || next === "zh" || next === "fr" || next === "ja") {
        setLangState(next);
      }
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener("aidivination:lang-sync", onLangChange);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("aidivination:lang-sync", onLangChange);
    };
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    setStoredLang(next);

    // 更新URL路径以反映新语言
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const pathSegments = currentPath.split("/").filter(Boolean);
      const firstSegment = pathSegments[0];

      let newPath: string;
      // 如果当前路径有语言前缀，替换它
      if (firstSegment === "zh" || firstSegment === "fr" || firstSegment === "ja") {
        const restPath = "/" + pathSegments.slice(1).join("/");
        newPath = next === "en" ? restPath : `/${next}${restPath}`;
      } else {
        // 当前是英文路径，添加语言前缀（如果不是英文）
        newPath = next === "en" ? currentPath : `/${next}${currentPath}`;
      }

      // 保留查询参数和hash
      const search = window.location.search;
      const hash = window.location.hash;
      window.history.pushState({}, "", newPath + search + hash);

      // 触发语言同步事件
      window.dispatchEvent(new CustomEvent<Lang>("aidivination:lang-sync", { detail: next }));

      // 刷新页面以应用新语言
      window.location.reload();
    }
  };

  const toggleLang = () => {
    const langs: Lang[] = ["en", "zh", "fr", "ja"];
    const next = langs[(langs.indexOf(lang) + 1) % langs.length];
    setLang(next);
  };

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    return {
      lang: DEFAULT_LANG,
      setLang: () => undefined,
      toggleLang: () => undefined
    };
  }
  return context;
}

export function readSession<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function writeSession(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(key, JSON.stringify(value));
}
