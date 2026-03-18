import type { Metadata } from "next";
import { NotFoundPage } from "@/components/not-found-page";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return <NotFoundPage />;
}
