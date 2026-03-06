"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations, type Locale } from "@/lib/translations";
import { Languages } from "lucide-react";

type LanguageToggleProps = {
  variant?: "default" | "compact";
  className?: string;
};

export function LanguageToggle({ variant = "default", className }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();
  const ariaLabel = translations[locale].language;

  if (variant === "compact") {
    return (
      <div className="flex rounded-md border border-border bg-muted/30 p-0.5" role="group" aria-label={ariaLabel}>
        {(["es", "en"] as const).map((lang) => (
          <Button
            key={lang}
            variant={locale === lang ? "secondary" : "ghost"}
            size="sm"
            className="min-w-9 rounded px-2.5 font-medium"
            onClick={() => setLocale(lang)}
            aria-pressed={locale === lang}
          >
            {lang.toUpperCase()}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label={ariaLabel}>
      <Languages className="size-4 text-muted-foreground" aria-hidden />
      <div className="flex rounded-md border border-border bg-muted/30 p-0.5">
        {(["es", "en"] as Locale[]).map((lang) => (
          <Button
            key={lang}
            variant={locale === lang ? "secondary" : "ghost"}
            size="sm"
            className="min-w-9 rounded px-2.5 font-medium"
            onClick={() => setLocale(lang)}
            aria-pressed={locale === lang}
          >
            {lang.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  );
}
