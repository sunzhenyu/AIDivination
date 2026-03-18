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
      if (next === "en" || next === "zh") {
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
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent<Lang>("aidivination:lang-sync", { detail: next }));
    }
  };

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "zh" : "en";
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
