"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function EducationSection() {
  const { locale } = useLanguage();
  const t = translations[locale].education;

  return (
    <section
      id="educacion"
      className="px-6 py-24"
      aria-labelledby="titulo-educacion"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="titulo-educacion"
          className="mb-8 font-mono text-sm font-medium text-muted-foreground"
        >
          {t.title}
        </h2>
        <ul className="flex flex-col gap-6 sm:gap-8" role="list">
          <li className="flex gap-4 rounded-xl border border-border/60 bg-card/50 p-5 transition-colors hover:bg-muted/30 sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden>
              <GraduationCap className="size-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground">{t.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.degreeDetail}</p>
            </div>
          </li>
          <li className="flex gap-4 rounded-xl border border-border/60 bg-card/50 p-5 transition-colors hover:bg-muted/30 sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden>
              <GraduationCap className="size-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground">{t.diploma}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.diplomaDetail}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
