import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata("en", "/en");

export default function EnglishHome() {
  return <HomePage />;
}
