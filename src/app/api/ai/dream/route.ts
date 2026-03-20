import { NextRequest, NextResponse } from "next/server";
import { chatJson, hasAiConfig, outputLanguage } from "@/lib/ai";
import { fallbackDream, toLang } from "@/lib/fallback";

export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => ({}));
  const dream = String(payload?.dream || "").trim();
  const lang = String(payload?.lang || "en");

  if (!dream) {
    return NextResponse.json({ error: "dream_required" }, { status: 400 });
  }

  try {
    const output = outputLanguage(lang);
    if (!hasAiConfig()) {
      return NextResponse.json(fallbackDream(dream, toLang(lang)));
    }

    const data = await chatJson(
      `You are an empathetic dream interpretation writer and strict JSON generator.
Write in ${output}.
Use symbolic interpretation plus practical, grounded reflection.
Do not use deterministic prophecy language.
Return strict JSON only.`,
      `Interpret the dream below.
Dream text: ${dream}

Return JSON:
{
  "dreamTitle": string,
  "coreTheme": string,
  "summary": string,
  "symbols": [{"symbol": string, "meaning": string}],
  "emotionalSignals": string[],
  "practicalAdvice": string[],
  "oneQuestion": string,
  "disclaimer": string
}

Requirements:
1. All fields must be written in ${output}.
2. summary should be 90-170 words with clear emotional context.
3. symbols must contain 3-5 concrete symbols from the dream text when possible.
4. emotionalSignals should contain 2-4 items.
5. practicalAdvice should contain 3-5 specific actions.
6. Tone: warm, clear, non-fatalistic, actionable.
7. Return JSON only.`
    );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { ...fallbackDream(dream, toLang(lang)), upstreamError: String(error) },
      { status: 200 }
    );
  }
}
