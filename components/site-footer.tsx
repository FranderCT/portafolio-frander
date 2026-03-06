"use client";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function SiteFooter() {
  const { locale } = useLanguage();
  const t = translations[locale].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
      {t.copyright.replace("{year}", String(year))}
    </footer>
  );
}
