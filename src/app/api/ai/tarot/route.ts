import { NextRequest, NextResponse } from "next/server";
import { chatJson, hasAiConfig, outputLanguage } from "@/lib/ai";
import { fallbackTarot } from "@/lib/fallback";

export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => ({}));
  const cards = Array.isArray(payload?.cards) ? payload.cards.map(String) : [];
  const lang = String(payload?.lang || "en");
  try {
    const output = outputLanguage(lang);
    if (!hasAiConfig()) {
      return NextResponse.json(fallbackTarot(cards, lang === "zh" ? "zh" : "en"));
    }

    const data = await chatJson(
      `You are an expert tarot storyteller and guidance writer.
Write in ${output} with warm, emotionally supportive, reflective wording.
Avoid deterministic or fatalistic claims.
Return strict JSON only.`,
      `Create a tarot reading based on these three cards and match one historical archetype.
Selected cards: ${cards.join(", ")}.

Return JSON:
{
  "cards": [{"name": string, "meaning": string}],
  "overview": string[],
  "career": string[],
  "wealth": string[],
  "relationship": string[],
  "advice": string[],
  "predictions": string[],
  "historicalFigure": {
    "name": string,
    "title": string,
    "description": string,
    "story": string,
    "matchReason": string,
    "achievements": string[],
    "period": string
  }
}

Requirements:
1. Write every field in ${output}.
2. Fill each list with 2-4 specific items, not generic placeholders.
3. Keep tone shareable and practical.
4. historicalFigure.story should be 60-120 words with concrete life arc details.
5. Return JSON only.`
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { ...fallbackTarot(cards, lang === "zh" ? "zh" : "en"), upstreamError: String(error) },
      { status: 200 }
    );
  }
}
