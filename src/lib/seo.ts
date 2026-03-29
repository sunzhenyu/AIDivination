export const SITE_NAME = "AI Divination";
export const SITE_URL = "https://aidivination.net";

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export const SOCIAL_IMAGE_URL = absoluteUrl("/icon.svg");
export const TWITTER_IMAGE_URL = absoluteUrl("/icon.svg");
