"use client";

import Image from "next/image";
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
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
          <div className="relative aspect-[4/5] w-full max-w-[280px] shrink-0 overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-sm md:max-w-[260px]">
            <Image
              src="/about-foto.jpeg"
              alt="Frander Carrillo"
              fill
              className="object-cover object-[center_15%]"
              sizes="(max-width: 768px) 100vw, 260px"
              priority={false}
            />
          </div>
          <div className="min-w-0 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground md:flex-1">
            {t.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-balance">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
