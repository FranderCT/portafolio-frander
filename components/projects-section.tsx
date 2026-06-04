"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const COMPANY_GRADIENTS = [
  "from-cyan-400 to-emerald-400", // Sámara Fisiowellness
  "from-amber-400 to-orange-500", // Venta de Buses Padilla
  "from-blue-400 to-indigo-500",  // Transportes Padilla
  "from-green-400 to-lime-400",    // Rogo Tours
];

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
          className="mb-8 font-mono text-sm font-medium text-muted-foreground"
        >
          {t.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.items.map((project, i) => {
            const gradient = COMPANY_GRADIENTS[i] || "from-zinc-400 to-zinc-500";
            return (
              <div
                key={project.title + i}
                className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/40 backdrop-blur-md p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]"
              >
                {/* Borde superior de color degradado */}
                <div className={cn("absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r", gradient)} />

                {"image" in project && project.image && (
                  <div className="relative mt-2 h-16 w-full max-w-[160px] shrink-0 overflow-hidden rounded-xl bg-white p-2 flex items-center justify-center shadow-md">
                    <div className="relative size-full">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="160px"
                      />
                    </div>
                  </div>
                )}

                <h3 className="mt-4 font-semibold text-lg text-foreground tracking-tight transition-colors group-hover:text-foreground/90">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
                  {project.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
