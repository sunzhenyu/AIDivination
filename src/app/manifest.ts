import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI Divination",
    short_name: "AI Divination",
    description: "AI readings for tarot, career, face and palm.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#0f1d31",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
