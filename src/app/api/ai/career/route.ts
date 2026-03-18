import { NextRequest, NextResponse } from "next/server";
import { chatJson, hasAiConfig, outputLanguage } from "@/lib/ai";
import { fallbackCareer } from "@/lib/fallback";

export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => ({}));
  const name = String(payload?.name || "Anonymous");
  const joinDate = String(payload?.joinDate || "");
  const lang = String(payload?.lang || "en");
  try {
    const output = outputLanguage(lang);
    if (!hasAiConfig()) {
      return NextResponse.json(fallbackCareer(name, joinDate, lang === "zh" ? "zh" : "en"));
    }

    const data = await chatJson(
      `You are a senior career guidance writer and structured JSON generator.
Write in ${output}, using concrete, encouraging, globally understandable career language.
Return strict JSON only.`,
      `Generate a personalized career guidance profile and matching historical archetype.
Input: name=${name}, start date=${joinDate}.

Return JSON:
{
  "name": string,
  "joinDate": string,
  "keywords": string,
  "trends": string[],
  "strengths": string[],
  "weaknesses": string[],
  "careerAdvice": string[],
  "advice": string[],
  "narrativeSummary": string,
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
1. Write all fields in ${output}.
2. Use specific non-generic career language and time-aware observations linked to joinDate.
3. Lists should have 2-4 meaningful items.
4. narrativeSummary should be 80-140 words and read like a practical story arc.
5. historicalFigure.story should be 60-120 words with concrete events.
6. Return JSON only.`
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { ...fallbackCareer(name, joinDate, lang === "zh" ? "zh" : "en"), upstreamError: String(error) },
      { status: 200 }
    );
  }
}
