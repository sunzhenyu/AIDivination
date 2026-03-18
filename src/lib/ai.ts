const BASE_URL = process.env.OPENAI_BASE_URL || "https://yunwu.ai/v1";
const API_KEY = process.env.OPENAI_API_KEY || "";
const MODEL = process.env.OPENAI_MODEL || "gpt-5.2";

export function hasAiConfig() {
  return Boolean(API_KEY && BASE_URL);
}

function stripJsonFence(input: string) {
  return input.replace(/```json/gi, "").replace(/```/g, "").trim();
}

export async function chatJson(systemPrompt: string, userPrompt: string) {
  if (!hasAiConfig()) {
    throw new Error("OPENAI_API_KEY is missing");
  }

  const res = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.7,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ]
    })
  });

  if (!res.ok) {
    throw new Error(`upstream ${res.status}`);
  }

  const payload = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = payload.choices?.[0]?.message?.content || "{}";
  const normalized = stripJsonFence(content);
  return JSON.parse(normalized);
}

export function outputLanguage(lang: string | null | undefined) {
  return lang === "zh" ? "Chinese" : "English";
}
