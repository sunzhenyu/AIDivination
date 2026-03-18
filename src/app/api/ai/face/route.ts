import { NextRequest, NextResponse } from "next/server";
import { chatJson, hasAiConfig, outputLanguage } from "@/lib/ai";
import { fallbackFace } from "@/lib/fallback";

export async function POST(req: NextRequest) {
  let lang = "en";
  try {
    const contentType = req.headers.get("content-type") || "";
    let hint = "";

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      hint = String(form.get("hint") || "");
      lang = String(form.get("lang") || "en");
    } else {
      const payload = await req.json();
      hint = String(payload?.hint || "");
      lang = String(payload?.lang || "en");
    }

    const output = outputLanguage(lang);
    if (!hasAiConfig()) {
      return NextResponse.json(fallbackFace(lang === "zh" ? "zh" : "en"));
    }
    const data = await chatJson(
      `You are a face-reading storyteller and structured guidance writer.
Write in ${output} and keep the tone light, reflective, and supportive.
Return strict JSON only.`,
      `${hint || "Analyze a clear front-facing portrait."}
Return JSON:
{
  "features": {"forehead": string, "eyes": string, "nose": string, "mouth": string, "chin": string},
  "career": string[],
  "future": string[],
  "advice": string[],
  "narrativeSummary": string,
  "confidence": number,
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
1. All fields in ${output}.
2. Keep personality-led, non-deterministic wording.
3. Lists should contain 2-4 detailed items.
4. narrativeSummary should be 70-120 words.
5. historicalFigure.story should be 60-120 words with concrete life context.
6. Return JSON only.`
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ ...fallbackFace(lang === "zh" ? "zh" : "en"), upstreamError: String(error) }, { status: 200 });
  }
}
