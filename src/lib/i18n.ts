export type Lang = "en" | "zh";

export const DEFAULT_LANG: Lang = "en";
export const STORAGE_KEY = "aidivination-language";

export const copy = {
  en: {
    brand: "AI Divination",
    nav: { home: "Home", tarot: "Tarot", career: "Career", face: "Face", palm: "Palm", dream: "Dream", stories: "Stories", insights: "Stories" },
    common: {
      start: "Start",
      backHome: "Back to Home",
      loading: "Generating your reading...",
      noData: "No reading found. Complete the flow first.",
      apiUnavailable: "Analysis service is unavailable right now. Please try again later."
    },
    home: {
      title: "AI guidance for tarot, career, face and palm journeys",
      subtitle: "Choose a mode and get a shareable, low-pressure reading.",
      cardsTitle: "Choose Your Mode",
      tarotDesc: "Three-card reading with career, wealth and relationship cues.",
      careerDesc: "Generate a structured career profile and practical suggestions.",
      faceDesc: "Upload a photo to receive personality-led face guidance.",
      palmDesc: "Analyze palm lines and get near-term rhythm suggestions.",
      dreamDesc: "Type your dream and decode symbols, emotions, and practical life hints."
    },
    career: { title: "Career Compass", name: "Name", date: "Start date", action: "Generate Reading", transition: "Mapping your career pattern..." },
    face: { title: "Face Reading", action: "Analyze Face", transition: "Decoding your face profile..." },
    palm: { title: "Palm Reading", action: "Analyze Palm", transition: "Reading your palm rhythm..." },
    dream: { title: "Dream Decoder", action: "Decode Dream", transition: "Unfolding your dream symbols..." },
    tarot: { title: "Tarot Reading", action: "Generate Reading", shuffle: "Shuffle cards", reveal: "Generate reading", transition: "Reading your symbolic patterns..." },
    result: { title: "Reading Result" },
    footer: {
      tagline: "Reflective rituals and practical guidance, all in one place.",
      supportTitle: "Contact",
      contactEmail: "Email: kuyadan136@gmail.com",
      contactX: "X: @DanDan344479",
      helpTitle: "Help",
      guide: "Getting started",
      faq: "Help center",
      articles: "Stories",
      legalTitle: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      copyright: "© AI Divination. All rights reserved."
    }
  },
  zh: {
    brand: "AI Divination",
    nav: { home: "首页", tarot: "塔罗", career: "职业", face: "面相", palm: "手相", dream: "解梦", stories: "故事", insights: "故事" },
    common: {
      start: "开始",
      backHome: "返回首页",
      loading: "正在生成分析结果...",
      noData: "暂无结果，请先完成测算流程。",
      apiUnavailable: "分析服务暂时不可用，请稍后再试。"
    },
    home: {
      title: "用 AI 探索塔罗、职业、面相与手相",
      subtitle: "选择一个模式，获取可分享、低压力的解读结果。",
      cardsTitle: "选择探索模式",
      tarotDesc: "三张牌结构化解读，覆盖职业、财务与关系维度。",
      careerDesc: "生成职业画像、趋势与可执行建议。",
      faceDesc: "上传照片后获得人格导向的面相解读。",
      palmDesc: "掌纹分析结合阶段节奏建议，适合日常复盘。",
      dreamDesc: "输入你的梦境内容，解码象征、情绪线索与现实启发。"
    },
    tarot: { title: "塔罗占卜", action: "生成解读", shuffle: "洗牌", reveal: "生成解读", transition: "正在解析命运线索..." },
    career: { title: "职业罗盘", name: "姓名", date: "入职日期", action: "生成命盘", transition: "正在计算职业画像..." },
    face: { title: "面相解读", action: "开始分析", transition: "正在解析气质密码..." },
    palm: { title: "手相解读", action: "开始分析", transition: "正在解析掌纹节奏..." },
    dream: { title: "梦境解读", action: "开始解梦", transition: "正在解析梦境符号..." },
    result: { title: "分析结果" },
    footer: {
      tagline: "把仪式感探索与可执行建议整合在同一体验里。",
      supportTitle: "联系我们",
      contactEmail: "邮箱：kuyadan136@gmail.com",
      contactX: "X：@DanDan344479",
      helpTitle: "帮助中心",
      guide: "新手引导",
      faq: "常见问题",
      articles: "故事专栏",
      legalTitle: "法律信息",
      privacy: "隐私政策",
      terms: "服务条款",
      copyright: "© AI Divination 版权所有"
    }
  }
} as const;

export function detectLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const queryLang = new URLSearchParams(window.location.search).get("lang");
  if (queryLang === "zh" || queryLang === "en") return queryLang;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "zh" || stored === "en") return stored;
  return DEFAULT_LANG;
}

export function setStoredLang(lang: Lang) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, lang);
}
