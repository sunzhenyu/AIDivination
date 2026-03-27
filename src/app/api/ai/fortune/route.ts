import { NextRequest, NextResponse } from "next/server";
import { chatJson, hasAiConfig, outputLanguage } from "@/lib/ai";

function fallbackFortune(number: number, lang: string) {
  const level = number <= 25 ? "poor" : number <= 50 ? "fair" : number <= 80 ? "good" : "excellent";

  const content: Record<string, Record<string, { interpretation: string[]; todayAdvice: string[]; poem: string }>> = {
    fr: {
      poor: {
        interpretation: [
          "Ce tirage signale une période de résistance et d'obstacles. Comme ramer à contre-courant, un effort supplémentaire est nécessaire pour avancer.",
          "La sagesse bouddhiste enseigne que l'adversité forge l'âme. Restez attentif et patient — la transformation est proche."
        ],
        todayAdvice: [
          "Faire : Réfléchir intérieurement et identifier les axes de croissance",
          "Faire : Garder un profil bas et conserver votre énergie",
          "Éviter : Les actions impulsives et les conflits inutiles",
          "Éviter : Les grandes décisions ou les investissements risqués aujourd'hui"
        ],
        poem: "Les nuages sombres cachent le soleil pour l'instant\nRestez calme et tenez bon\nL'adversité affine le vrai or\nDe meilleurs jours viendront"
      },
      fair: {
        interpretation: [
          "Ce tirage apporte une fortune stable et douce — comme une pluie de printemps qui nourrit sans bruit.",
          "Le progrès vient par la patience et la constance. Construisez régulièrement, et vos efforts se transformeront en récompense."
        ],
        todayAdvice: [
          "Faire : Avancer avec des pas pratiques et ancrés",
          "Faire : Entretenir les relations avec bienveillance",
          "Éviter : Viser trop haut ou fixer des attentes irréalistes",
          "Éviter : Agir précipitamment sur des informations incomplètes"
        ],
        poem: "Les eaux calmes reflètent le ciel ouvert\nMarchez d'un pas sûr, la tête haute\nLa vertu semée apporte une grâce durable\nLa bonne fortune trouve sa place"
      },
      good: {
        interpretation: [
          "Ce tirage rayonne d'énergie positive — comme le soleil levant, votre chemin est illuminé et des aides apparaissent.",
          "Saisissez l'élan. Vos efforts s'alignent avec des conditions favorables. Restez reconnaissant et continuez d'avancer."
        ],
        todayAdvice: [
          "Faire : Agir avec audace et saisir les opportunités",
          "Faire : Élargir votre réseau et collaborer",
          "Faire : Investir dans l'apprentissage et l'amélioration de soi",
          "Éviter : La complaisance ou négliger les détails importants"
        ],
        poem: "Des vents propices soufflent de l'est\nLa fortune monte, les soucis cessent\nCultivez votre champ avec un cœur reconnaissant\nL'abondance coule de toutes parts"
      },
      excellent: {
        interpretation: [
          "C'est la plus haute bénédiction — un tirage rare et radieux. Les cieux s'alignent en votre faveur et toutes les entreprises sont propices.",
          "Cette fortune exceptionnelle appelle à l'action audacieuse et à l'esprit généreux. Ce que vous cherchez est à portée. Partagez vos bénédictions librement."
        ],
        todayAdvice: [
          "Faire : Rêver grand et poursuivre vos objectifs les plus élevés",
          "Faire : Donner généreusement et répandre la bienveillance",
          "Faire : Prendre des décisions décisives avec confiance",
          "Éviter : L'arrogance ou tenir vos bénédictions pour acquises"
        ],
        poem: "Le cadeau du ciel brille aujourd'hui\nLe dragon et le phénix éclairent le chemin\nSaisissez ce moment, envolez-vous haut\nSuccès et joie remplissent la terre et le ciel"
      }
    },
    ja: {
      poor: {
        interpretation: [
          "このおみくじは困難と抵抗の時期を示しています。流れに逆らって漕ぐように、前進するには余分な努力が必要です。",
          "仏教の知恵は、苦難が魂の修練の場であると教えています。心を落ち着かせ、忍耐を持ちましょう — 変化は近くにあります。"
        ],
        todayAdvice: [
          "すること：内省して成長の領域を見つける",
          "すること：目立たず、エネルギーを蓄える",
          "避けること：衝動的な行動や不必要な争い",
          "避けること：今日は重大な決断やリスクの高い投資"
        ],
        poem: "暗雲が今は太陽を隠している\n落ち着いて踏みとどまれ\n逆境は真の金を磨く\nより良い日々がやってくる"
      },
      fair: {
        interpretation: [
          "このおみくじは穏やかで安定した運勢をもたらします — 静かに育む春の雨のように。",
          "進歩は忍耐と一貫性から生まれます。着実に積み上げれば、努力は意味ある報酬へと変わります。"
        ],
        todayAdvice: [
          "すること：実践的で地に足のついた一歩を踏み出す",
          "すること：優しさで人間関係を育む",
          "避けること：手を伸ばしすぎたり非現実的な期待を設定する",
          "避けること：不完全な情報で性急に行動する"
        ],
        poem: "静かな水が開いた空を映す\n頭を高く上げて着実に歩め\n徳を蒔けば永続する恵みをもたらす\n幸運はその場所を見つける"
      },
      good: {
        interpretation: [
          "このおみくじはポジティブなエネルギーで輝いています — 昇る太陽のように、あなたの道は照らされ、助けが現れます。",
          "勢いをつかんでください。あなたの努力は有利な条件と一致しています。感謝の気持ちを持ち、前進し続けましょう。"
        ],
        todayAdvice: [
          "すること：大胆に行動し、機会をつかむ",
          "すること：ネットワークを広げ、協力する",
          "すること：学習と自己改善に投資する",
          "避けること：慢心したり重要な詳細を見落とす"
        ],
        poem: "吉兆の風が東から吹く\n運勢が上がり、心配が消える\n感謝の心で畑を耕せ\n豊かさがあらゆる方向から流れ込む"
      },
      excellent: {
        interpretation: [
          "これは最高の祝福です — 稀で輝かしいおみくじです。天があなたに味方し、すべての取り組みが吉兆です。",
          "この並外れた運勢は大胆な行動と寛大な精神を求めています。求めているものは手の届くところにあります。惜しみなく祝福を分かち合いましょう。"
        ],
        todayAdvice: [
          "すること：大きな夢を持ち、最高の目標を追求する",
          "すること：惜しみなく与え、善意を広める",
          "すること：自信を持って決断的な行動をとる",
          "避けること：傲慢になったり祝福を当然と思う"
        ],
        poem: "天の贈り物が今日輝く\n龍と鳳凰が道を照らす\nこの瞬間をつかみ、高く舞い上がれ\n成功と喜びが天地に満ちる"
      }
    },
    zh: {
      poor: {
        interpretation: [
          "此签提示近期运势有所阻滞，如逆水行舟，需加倍努力方可前行。",
          "佛法云：苦为道场，逆境正是磨砺心性之良机。保持正念，静待转机。"
        ],
        todayAdvice: [
          "宜：静心反思，审视自身不足",
          "宜：低调行事，积蓄力量",
          "忌：冒进冲动，与人争执",
          "忌：重大决策，轻率投资"
        ],
        poem: "乌云遮日暂难明\n静守本心待天晴\n逆境磨砺真金现\n否极泰来自有时"
      },
      fair: {
        interpretation: [
          "此签运势平稳，如春风细雨，润物无声。平淡之中自有福祉。",
          "万事循序渐进，不急不躁，稳扎稳打方为上策。积累之功，终有厚报。"
        ],
        todayAdvice: [
          "宜：脚踏实地，稳步推进",
          "宜：广结善缘，与人为善",
          "忌：好高骛远，眼高手低",
          "忌：轻信他人，草率行事"
        ],
        poem: "平湖秋水映长天\n稳步前行自坦然\n积善之家有余庆\n守正待时福自来"
      },
      good: {
        interpretation: [
          "此签运势旺盛，如旭日东升，光芒四射。诸事顺遂，贵人相助。",
          "把握当下良机，积极进取，所谋之事多有成就。心存感恩，广结善缘。"
        ],
        todayAdvice: [
          "宜：大胆行动，把握机遇",
          "宜：拓展人脉，合作共赢",
          "宜：学习进修，提升自我",
          "忌：骄傲自满，忽视细节"
        ],
        poem: "紫气东来瑞气生\n鸿运当头万事兴\n把握良机勤耕耘\n福禄双全喜盈门"
      },
      excellent: {
        interpretation: [
          "此签乃上上大吉，天赐良机，龙凤呈祥。运势如日中天，万事皆宜。",
          "此乃难得之吉签，宜积极行动，广施善缘。所求之事，必有圆满结果。感恩惜福，回馈他人。"
        ],
        todayAdvice: [
          "宜：大展宏图，勇于突破",
          "宜：广结善缘，乐善好施",
          "宜：把握良机，果断决策",
          "忌：得意忘形，忘恩负义"
        ],
        poem: "大吉大利天赐福\n龙凤呈祥瑞气足\n把握良机展宏图\n功成名就福满屋"
      }
    },
    en: {
      poor: {
        interpretation: [
          "This draw signals a period of challenge and resistance. Like rowing against the current, extra effort is needed to move forward.",
          "Buddhist wisdom teaches that hardship is the training ground of the soul. Stay mindful and patient — transformation is near."
        ],
        todayAdvice: [
          "Do: Reflect inward and identify areas for growth",
          "Do: Keep a low profile and conserve your energy",
          "Avoid: Impulsive actions and unnecessary conflicts",
          "Avoid: Major decisions or risky investments today"
        ],
        poem: "Dark clouds may hide the sun for now\nStay calm and hold your ground\nAdversity refines the truest gold\nBetter days will come around"
      },
      fair: {
        interpretation: [
          "This draw brings steady, gentle fortune — like a soft spring rain that nourishes without fanfare.",
          "Progress comes through patience and consistency. Build steadily, and your efforts will compound into meaningful reward."
        ],
        todayAdvice: [
          "Do: Take practical, grounded steps forward",
          "Do: Nurture relationships with kindness",
          "Avoid: Overreaching or setting unrealistic expectations",
          "Avoid: Acting hastily on incomplete information"
        ],
        poem: "Still waters mirror the open sky\nWalk steady, head held high\nVirtue sown brings lasting grace\nGood fortune finds its place"
      },
      good: {
        interpretation: [
          "This draw shines with positive energy — like the rising sun, your path is illuminated and helpers appear.",
          "Seize the momentum. Your efforts are aligned with favorable conditions. Stay grateful and keep moving forward."
        ],
        todayAdvice: [
          "Do: Act boldly and seize opportunities",
          "Do: Expand your network and collaborate",
          "Do: Invest in learning and self-improvement",
          "Avoid: Complacency or overlooking important details"
        ],
        poem: "Auspicious winds blow from the east\nFortune rises, worries cease\nTend your field with grateful heart\nAbundance flows from every part"
      },
      excellent: {
        interpretation: [
          "This is the highest blessing — a rare and radiant draw. The heavens align in your favor and all endeavors are auspicious.",
          "This exceptional fortune calls for bold action and generous spirit. What you seek is within reach. Share your blessings freely."
        ],
        todayAdvice: [
          "Do: Dream big and pursue your highest goals",
          "Do: Give generously and spread goodwill",
          "Do: Make decisive moves with confidence",
          "Avoid: Arrogance or taking your blessings for granted"
        ],
        poem: "Heaven's gift shines bright today\nDragon and phoenix light the way\nSeize this moment, soar up high\nSuccess and joy fill earth and sky"
      }
    }
  };

  const langKey = (lang === "zh" || lang === "fr" || lang === "ja") ? lang : "en";
  const { interpretation, todayAdvice, poem } = (content[langKey] ?? content["en"])[level];

  return { fortuneLevel: level, interpretation, todayAdvice, poem };
}

export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => ({}));
  const number = Number(payload?.number) || 1;
  const lang = String(payload?.lang || "en");

  try {
    const output = outputLanguage(lang);
    if (!hasAiConfig()) {
      return NextResponse.json(fallbackFortune(number, lang));
    }

    const data = await chatJson(
      `You are a Buddhist fortune teller and spiritual guide.
Write in ${output} with warm, supportive, and reflective wording.
Use traditional Buddhist wisdom but keep it practical and modern.
Return strict JSON only.`,
      `Create a daily fortune reading based on fortune stick number ${number}.

Return JSON:
{
  "fortuneLevel": "poor" | "fair" | "good" | "excellent",
  "interpretation": string[],
  "todayAdvice": string[],
  "poem": string
}

Requirements:
1. Write every field in ${output}.
2. fortuneLevel should be based on the number: 1-25 = poor, 26-50 = fair, 51-80 = good, 81-100 = excellent.
3. interpretation should be 2-3 paragraphs explaining the fortune level with Buddhist wisdom.
4. todayAdvice should be 3-4 practical items for today. Use natural format in ${output} — no Chinese characters like "宜：" or "忌：" unless the output language is Chinese.
5. poem should be a 4-line traditional fortune poem (use \\n for line breaks).
6. Keep tone encouraging and actionable.
7. Return JSON only.`
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { ...fallbackFortune(number, lang), upstreamError: String(error) },
      { status: 200 }
    );
  }
}
