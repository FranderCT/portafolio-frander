"use client";

import Image from "next/image";
import { Lightbulb, Code2, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const FACT_ICONS = [Lightbulb, Code2, Trophy] as const;

export function AboutSection() {
  const { locale } = useLanguage();
  const t = translations[locale].about;

  return (
    <section
      id="sobre-mi"
      className="relative px-6 py-24"
      aria-labelledby="titulo-sobre-mi"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 flex items-center gap-3 font-mono text-sm font-medium text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          {t.title}
        </p>
        <h2
          id="titulo-sobre-mi"
          className="mb-12 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
        >
          {t.heading}
        </h2>

        <div className="flex flex-col gap-10 md:flex-row md:gap-14">
          {/* Foto con halo */}
          <div className="relative mx-auto w-full max-w-[280px] shrink-0 md:mx-0 md:max-w-[300px]">
            <div
              className="absolute -inset-3 -z-10 rounded-3xl opacity-40 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 140deg, #6366f1, #0ea5e9, #10b981, #6366f1)",
              }}
              aria-hidden
            />
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-lg">
              <Image
                src="/about-foto.jpeg"
                alt="Frander Carrillo, desarrollador web y asesor tecnológico en Costa Rica"
                fill
                className="object-cover object-[center_15%] transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 300px"
                priority={false}
              />
            </div>
          </div>

          <div className="min-w-0 md:flex-1">
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-balance">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Chips de datos clave */}
            <ul className="mt-8 flex flex-wrap gap-3">
              {t.facts.map((fact, i) => {
                const Icon = FACT_ICONS[i % FACT_ICONS.length];
                return (
                  <li
                    key={fact}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    <Icon className="size-4 text-accent-dim" />
                    {fact}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
