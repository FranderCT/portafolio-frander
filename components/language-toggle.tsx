"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

type LanguageToggleProps = {
  variant?: "default" | "compact";
  className?: string;
};

const FLAGS = {
  es: (
    <svg viewBox="0 0 512 512" className="size-4 shrink-0 rounded-full overflow-hidden" aria-hidden="true">
      <rect width="512" height="128" fill="#AD1519"/>
      <rect y="128" width="512" height="256" fill="#FABD00"/>
      <rect y="384" width="512" height="128" fill="#AD1519"/>
    </svg>
  ),
  en: (
    <svg viewBox="0 0 512 512" className="size-4 shrink-0 rounded-full overflow-hidden" aria-hidden="true">
      <rect width="512" height="512" fill="#012169"/>
      <path d="M0 0l512 512M512 0L0 512" stroke="#fff" strokeWidth="60"/>
      <path d="M0 0l512 512M512 0L0 512" stroke="#C8102E" strokeWidth="40"/>
      <path d="M256 0v512M0 256h512" stroke="#fff" strokeWidth="100"/>
      <path d="M256 0v512M0 256h512" stroke="#C8102E" strokeWidth="60"/>
    </svg>
  ),
};

export function LanguageToggle({ variant = "default", className }: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();
  const ariaLabel = translations[locale].language;

  if (variant === "compact") {
    return (
      <div
        className={cn("flex rounded-md border border-border bg-muted/30 p-0.5", className)}
        role="group"
        aria-label={ariaLabel}
      >
        {(["es", "en"] as const).map((lang) => (
          <Button
            key={lang}
            variant={locale === lang ? "secondary" : "ghost"}
            size="sm"
            className="inline-flex items-center gap-1.5 min-w-12 rounded px-2 font-medium"
            onClick={() => setLocale(lang)}
            aria-pressed={locale === lang}
          >
            {FLAGS[lang]}
            <span className="text-xs uppercase">{lang}</span>
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-1.5", className)} role="group" aria-label={ariaLabel}>
      <div className="flex rounded-md border border-border bg-muted/30 p-0.5">
        {(["es", "en"] as const).map((lang) => (
          <Button
            key={lang}
            variant={locale === lang ? "secondary" : "ghost"}
            size="sm"
            className="inline-flex items-center gap-1.5 min-w-12 rounded px-2 font-medium"
            onClick={() => setLocale(lang)}
            aria-pressed={locale === lang}
          >
            {FLAGS[lang]}
            <span className="text-xs uppercase">{lang}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
