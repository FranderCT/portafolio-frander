"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function ProjectsSection() {
  const { locale } = useLanguage();
  const t = translations[locale].projects;

  return (
    <section
      id="proyectos"
      className="px-6 py-24"
      aria-labelledby="titulo-proyectos"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="titulo-proyectos"
          className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {t.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.items.map((project, i) => (
            <div
              key={project.title + i}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/25"
            >
              <div>
                {"image" in project && project.image && (
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-white p-2 flex items-center justify-center shadow-sm mb-4">
                    <div className="relative size-full">
                      <Image
                        src={project.image}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  </div>
                )}
                <h3 className="font-semibold text-lg text-foreground tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
