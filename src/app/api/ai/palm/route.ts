import { NextRequest, NextResponse } from "next/server";
import { chatJson, hasAiConfig, outputLanguage } from "@/lib/ai";
import { fallbackPalm, toLang } from "@/lib/fallback";

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
      return NextResponse.json(fallbackPalm(toLang(lang)));
    }
    const data = await chatJson(
      `You are a palm-reading storyteller and structured guidance writer.
Write in ${output} with warm, lifestyle-friendly wording.
Return strict JSON only.`,
      `${hint || "Analyze a clear palm image with life/head/heart/career lines."}
Return JSON:
{
  "lines": {"life": string, "head": string, "heart": string, "career": string},
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
2. Keep reflective, supportive, non-deterministic tone.
3. Lists should contain 2-4 specific items.
4. narrativeSummary should be 70-120 words.
5. historicalFigure.story should be 60-120 words with concrete life context.
6. Return JSON only.`
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ ...fallbackPalm(toLang(lang)), upstreamError: String(error) }, { status: 200 });
  }
}
