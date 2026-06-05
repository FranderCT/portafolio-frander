"use client";

import { GraduationCap, MapPin, Calendar } from "lucide-react";
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
          className="mb-3 flex items-center gap-3 font-mono text-sm font-medium text-muted-foreground"
        >
          <span className="h-px w-8 bg-border" />
          {t.sectionLabel}
        </h2>

        <p className="mb-12 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.title}
        </p>

        <div className="relative">
          {/* Línea vertical del timeline */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border/60 to-transparent"
            aria-hidden
          />

          <ol className="flex flex-col gap-10">
            {t.items.map((item) => (
              <li key={item.degree} className="relative flex gap-6 pl-14">
                {/* Dot del timeline */}
                <span
                  className={`absolute left-0 flex size-10 shrink-0 items-center justify-center rounded-full border-2 ${
                    item.active
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_4px_var(--color-background),0_0_0_6px_var(--color-primary)/30]"
                      : "border-border bg-card text-muted-foreground"
                  }`}
                  aria-hidden
                >
                  <GraduationCap className="size-4" />
                </span>

                {/* Tarjeta */}
                <div
                  className={`group w-full rounded-2xl border p-6 transition-all duration-300 ${
                    item.active
                      ? "border-primary/20 bg-primary/[0.03] hover:border-primary/40 hover:bg-primary/[0.06]"
                      : "border-border/60 bg-card/50 hover:bg-muted/30"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                        {item.degree}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5 shrink-0" />
                          {item.institution}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="size-3.5 shrink-0" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Badge de estado */}
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                        item.active
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
