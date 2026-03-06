"use client";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function AboutSection() {
  const { locale } = useLanguage();
  const t = translations[locale].about;

  return (
    <section
      id="sobre-mi"
      className="px-6 py-24"
      aria-labelledby="titulo-sobre-mi"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="titulo-sobre-mi"
          className="mb-8 font-mono text-sm font-medium text-muted-foreground"
        >
          {t.title}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t.body}
        </p>
      </div>
    </section>
  );
}
