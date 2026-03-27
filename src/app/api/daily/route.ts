import { NextRequest, NextResponse } from "next/server";
import { Lunar } from "lunar-javascript";
import { chatJson, hasAiConfig, outputLanguage } from "@/lib/ai";
import { getDailyReading, saveDailyReading } from "@/lib/db";

function getTodayStr(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getSolarDate(lang: string, d: Date): string {
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  if (lang === "zh") {
    return `${y}年${m}月${day}日`;
  }
  if (lang === "ja") {
    return `${y}年${m}月${day}日`;
  }
  const months: Record<string, string> = {
    fr: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"][m-1],
    en: ["January","February","March","April","May","June","July","August","September","October","November","December"][m-1],
  };
  if (lang === "fr") return `${day} ${months.fr} ${y}`;
  return `${months.en} ${day}, ${y}`;
}

function getLunarDate(lang: string, d: Date): string {
  const lunar = Lunar.fromDate(d);
  const monthStr = lunar.getMonthInChinese();
  const dayStr = lunar.getDayInChinese();
  if (lang === "zh") {
    return `农历${monthStr}月${dayStr}`;
  }
  if (lang === "ja") {
    return `旧暦${monthStr}月${dayStr}`;
  }
  const dayNum = lunar.getDay();
  const monthNum = lunar.getMonth();
  const ordinals: Record<number, string> = {};
  for (let i = 1; i <= 31; i++) {
    const s = i === 1 ? "1st" : i === 2 ? "2nd" : i === 3 ? "3rd" : `${i}th`;
    ordinals[i] = s;
  }
  const monthOrd = ordinals[monthNum] || `${monthNum}th`;
  const dayOrd = ordinals[dayNum] || `${dayNum}th`;
  if (lang === "fr") {
    return `${dayOrd} jour, ${monthOrd} mois lunaire`;
  }
  return `${dayOrd} day, ${monthOrd} lunar month`;
}

function fallbackReading(date: string, lang: string, solarDate: string, lunarDate: string) {
  const content: Record<string, { yi: string[]; ji: string[]; proseTitle: string; proseAuthor: string; prose: string }> = {
    zh: {
      yi: ["宜静思", "宜阅读", "宜整理"],
      ji: ["忌争执", "忌冲动"],
      proseTitle: "晨光",
      proseAuthor: "",
      prose: "清晨的光，总是悄悄地来。\n\n不必急着追赶什么，日子自有它的节奏。一杯茶，一本书，或只是坐在窗边，看光影在墙上慢慢移动。\n\n今日，愿你心中有一片安静的地方。"
    },
    en: {
      yi: ["Read", "Reflect", "Tidy your space"],
      ji: ["Avoid arguments", "Avoid rushing"],
      proseTitle: "Morning Light",
      proseAuthor: "",
      prose: "The morning light arrives without announcement.\n\nThere is no need to hurry. Days have their own rhythm. A cup of tea, a book, or simply sitting by the window watching shadows move slowly across the wall.\n\nMay you carry a quiet place within you today."
    },
    fr: {
      yi: ["Lire", "Méditer", "Ranger"],
      ji: ["Éviter les disputes", "Éviter la précipitation"],
      proseTitle: "Lumière du Matin",
      proseAuthor: "",
      prose: "La lumière du matin arrive sans prévenir.\n\nIl n'est pas nécessaire de se presser. Les jours ont leur propre rythme. Une tasse de thé, un livre, ou simplement s'asseoir près de la fenêtre à regarder les ombres glisser lentement sur le mur.\n\nQue tu portes en toi un endroit calme aujourd'hui."
    },
    ja: {
      yi: ["読書", "瞑想", "整理整頓"],
      ji: ["争いを避ける", "焦りを避ける"],
      proseTitle: "朝の光",
      proseAuthor: "",
      prose: "朝の光は、静かにやってくる。\n\n急ぐことはない。日々には自分のリズムがある。お茶を一杯、本を一冊、あるいはただ窓辺に座って、壁をゆっくりと移動する光と影を眺める。\n\n今日、あなたの心の中に静かな場所がありますように。"
    }
  };

  const c = content[lang] ?? content["en"];
  return {
    date,
    lang,
    solarDate,
    lunarDate,
    yi: c.yi,
    ji: c.ji,
    proseTitle: c.proseTitle,
    proseAuthor: c.proseAuthor,
    prose: c.prose,
    createdAt: new Date().toISOString(),
  };
}

export async function GET(req: NextRequest) {
  const lang = req.nextUrl.searchParams.get("lang") || "en";
  const today = getTodayStr();
  const rawDate = req.nextUrl.searchParams.get("date") || today;
  // clamp to today — never allow future dates
  const date = rawDate > today ? today : rawDate;
  const d = new Date(date + "T12:00:00");
  const solarDate = getSolarDate(lang, d);
  const lunarDate = getLunarDate(lang, d);

  const cached = getDailyReading(date, lang);
  if (cached) {
    return NextResponse.json({ ...cached, cached: true });
  }

  try {
    if (!hasAiConfig()) {
      const fallback = fallbackReading(date, lang, solarDate, lunarDate);
      saveDailyReading(fallback);
      return NextResponse.json({ ...fallback, cached: false });
    }

    const output = outputLanguage(lang);
    const dayNum = parseInt(date.split('-')[2], 10);
    const themeMap: Record<number, string> = {
      1: "loneliness", 2: "city at night", 3: "memory", 4: "waiting", 5: "hands and labor",
      6: "rain", 7: "nature", 8: "childhood", 9: "departure", 10: "light",
      11: "silence", 12: "hunger", 13: "maps and journeys", 14: "mirrors", 15: "letters",
      16: "insomnia", 17: "windows", 18: "strangers", 19: "clocks and time", 20: "dust",
      21: "bridges", 22: "voices", 23: "shadows", 24: "seasons changing", 25: "doors",
      26: "names", 27: "rivers", 28: "fire", 29: "sleep and dreams", 30: "distance", 31: "return"
    };
    const theme = themeMap[dayNum] || themeMap[(dayNum % 31) + 1];

    const data = await chatJson(
      `You are a literary writer creating original daily reading content. You MUST write every single word in ${output} only. Return strict JSON only.`,
      `The date is ${solarDate} (${lunarDate}). Today's theme: "${theme}".

Generate a daily reading entry. Return JSON:
{
  "yi": string[],
  "ji": string[],
  "proseTitle": string,
  "proseAuthor": string,
  "prose": string
}

CRITICAL: Every string in the JSON must be written ONLY in ${output}. Do NOT mix languages.

Requirements:
1. yi: 2-4 short auspicious activities, each a short phrase in ${output}. Examples by language — zh: "宜读书", en: "Read", fr: "Lire", ja: "読書" (NOT "宜読書"). Keep brief. IMPORTANT for Japanese: do NOT prefix items with 宜 or 忌 characters.
2. ji: 2-3 short inauspicious things to avoid, each in ${output}. Examples — zh: "忌争执", en: "Avoid arguments", fr: "Éviter les disputes", ja: "争いを避ける" (NOT "忌争い"). Same brevity. IMPORTANT for Japanese: do NOT prefix items with 宜 or 忌 characters.
3. proseTitle: a title for the piece you write, in ${output}. Make it specific and evocative.
4. proseAuthor: set to "" (empty string).
5. prose: write an ORIGINAL literary piece in ${output} on the theme "${theme}". Choose form by day number ${dayNum}:
   - Day 1-10: write an original poem (15-30 lines). Full complete poem, not a fragment or stanza.
   - Day 11-20: write an original prose poem or lyric essay (250-400 words). Complete piece.
   - Day 21-31: write an original short prose meditation or vignette (300-500 words). Complete piece.
   Style: literary, emotionally resonant, specific concrete imagery. Avoid clichés, avoid generic inspirational language, avoid spring/flower imagery unless the theme calls for it.
   Paragraphs separated by \\n\\n, poem line breaks with \\n.
6. Return JSON only, no markdown.`
    );

    const reading = {
      date,
      lang,
      solarDate,
      lunarDate,
      yi: Array.isArray(data.yi) ? data.yi : [],
      ji: Array.isArray(data.ji) ? data.ji : [],
      proseTitle: String(data.proseTitle || ""),
      proseAuthor: String(data.proseAuthor || ""),
      prose: String(data.prose || ""),
      createdAt: new Date().toISOString(),
    };

    saveDailyReading(reading);
    return NextResponse.json({ ...reading, cached: false });
  } catch (error) {
    const fallback = fallbackReading(date, lang, solarDate, lunarDate);
    return NextResponse.json({ ...fallback, cached: false, upstreamError: String(error) });
  }
}
