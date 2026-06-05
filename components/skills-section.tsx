"use client";

import { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const dark = isHexDark(icon.hex);
  const brandColor = `#${icon.hex}`;

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(300px) rotateX(${-y * 18}deg) rotateY(${x * 18}deg) scale(1.12) translateZ(8px)`;
    el.style.boxShadow = `${-x * 12}px ${-y * 12}px 28px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.12)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.boxShadow = "";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative inline-flex shrink-0 cursor-default items-center gap-2.5 overflow-hidden rounded-full border border-border/60 bg-card/80 px-4 py-2.5 text-sm font-medium text-foreground/80 backdrop-blur-sm select-none"
      style={{ transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out", transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Glass shine */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full opacity-60"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent)" }}
        aria-hidden
      />
      {/* Bottom edge shadow for depth */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-40"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)" }}
        aria-hidden
      />

      <span
        className="flex size-5 shrink-0 items-center justify-center rounded-full"
        style={dark ? { background: brandColor, padding: "3px" } : undefined}
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

      <span className="relative">{name}</span>
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
    <div
      className="group/row relative overflow-hidden"
    >
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" aria-hidden />

      <div
        className={`flex w-max gap-3 py-2 ${
          reverse ? "animate-skills-marquee-reverse" : "animate-skills-marquee"
        } group-hover/row:[animation-play-state:paused]`}
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
