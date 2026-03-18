export const SITE_NAME = "AI Divination";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.aidivination.app";

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
