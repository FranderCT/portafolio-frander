"use client";

import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siNestjs,
  siPostgresql,
  siSupabase,
  siGit,
  siGithub,
  siFigma,
} from "simple-icons";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

type SimpleIcon = { title: string; hex: string; path: string };

function isHexDark(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 < 100;
}

function SkillChip({ icon, name }: { icon: SimpleIcon; name: string }) {
  const dark = isHexDark(icon.hex);
  const brandColor = `#${icon.hex}`;

  return (
    <div className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border/60 bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground/80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-card hover:text-foreground hover:shadow-md">
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full ${dark ? "p-[3px]" : ""}`}
        style={dark ? { background: brandColor } : undefined}
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="size-full"
          fill={dark ? "white" : brandColor}
          aria-label={icon.title}
        >
          <path d={icon.path} />
        </svg>
      </span>
      {name}
    </div>
  );
}

const ROW_1 = [
  { icon: siHtml5, name: "HTML5" },
  { icon: siCss, name: "CSS" },
  { icon: siJavascript, name: "JavaScript" },
  { icon: siTypescript, name: "TypeScript" },
  { icon: siReact, name: "React" },
  { icon: siNextdotjs, name: "Next.js" },
  { icon: siTailwindcss, name: "Tailwind CSS" },
] as const;

const ROW_2 = [
  { icon: siNodedotjs, name: "Node.js" },
  { icon: siNestjs, name: "Nest.js" },
  { icon: siPostgresql, name: "PostgreSQL" },
  { icon: siSupabase, name: "Supabase" },
  { icon: siGit, name: "Git" },
  { icon: siGithub, name: "GitHub" },
  { icon: siFigma, name: "Figma" },
] as const;

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: readonly { icon: SimpleIcon; name: string }[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-3 ${reverse ? "animate-skills-marquee-reverse" : "animate-skills-marquee"}`}
      >
        {doubled.map((item, i) => (
          <SkillChip key={`${item.name}-${i}`} icon={item.icon} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { locale } = useLanguage();
  const t = translations[locale].skills;

  return (
    <section
      id="habilidades"
      className="overflow-hidden px-6 py-24"
      aria-labelledby="titulo-habilidades"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="titulo-habilidades"
          className="mb-3 flex items-center gap-3 font-mono text-sm font-medium text-muted-foreground"
        >
          <span className="h-px w-8 bg-border" />
          {t.title}
        </h2>
        <p className="mb-12 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.heading}
        </p>

        <div className="flex flex-col gap-4">
          <MarqueeRow items={ROW_1} />
          <MarqueeRow items={ROW_2} reverse />
        </div>
      </div>
    </section>
  );
}
