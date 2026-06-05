"use client";

import { useRef, useEffect } from "react";
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
    <div className="relative inline-flex shrink-0 select-none items-center gap-2.5 overflow-hidden rounded-full border border-border/60 bg-card/90 px-4 py-2.5 text-sm font-medium text-foreground/80 shadow-md backdrop-blur-sm">
      {/* Glass shine top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent)" }}
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

const RADIUS = 320;

function Ring3DRow({
  items,
  speed,
  direction = 1,
  initialAngle = 0,
}: {
  items: readonly { icon: SimpleIcon; name: string }[];
  speed: number;
  direction?: 1 | -1;
  initialAngle?: number;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(initialAngle);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const N = items.length;

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const chips = Array.from(scene.querySelectorAll<HTMLElement>("[data-ring-chip]"));
    const angleStep = (2 * Math.PI) / N;

    function tick() {
      if (!pausedRef.current) angleRef.current += direction * speed;

      for (let i = 0; i < N; i++) {
        const θ = angleRef.current + i * angleStep;
        const sinθ = Math.sin(θ);
        const cosθ = Math.cos(θ);

        const x = RADIUS * sinθ;
        // cosθ in [-1,1]: 1 = front, -1 = back
        // scale: front=1.0, back=0.52
        const t = (cosθ + 1) / 2; // 0..1
        const scale = 0.52 + 0.48 * t;
        // opacity: fully visible front half, fade to 0 at back
        const opacity = cosθ >= 0 ? 1 : Math.max(0, 1 + cosθ);

        const chip = chips[i];
        if (!chip) continue;
        chip.style.transform = `translate(calc(-50% + ${x.toFixed(2)}px), -50%) scale(${scale.toFixed(4)})`;
        chip.style.opacity = opacity.toFixed(4);
        chip.style.zIndex = String(Math.round(t * 100));
        // Subtle shadow deepens on front items
        const shadow = `0 ${(4 * t).toFixed(1)}px ${(16 * t).toFixed(1)}px rgba(0,0,0,${(0.18 * t).toFixed(3)})`;
        chip.style.boxShadow = shadow;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [N, speed, direction]);

  return (
    <div
      className="relative h-14"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* Fade edge masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-28 bg-gradient-to-r from-background to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-28 bg-gradient-to-l from-background to-transparent" aria-hidden />

      <div ref={sceneRef} className="relative h-full w-full">
        {items.map((item) => (
          <div
            key={item.name}
            data-ring-chip
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{ transformOrigin: "center center" }}
          >
            <SkillChip icon={item.icon} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

const ALL_SKILLS = [
  { icon: siHtml5, name: "HTML5" },
  { icon: siCss, name: "CSS" },
  { icon: siJavascript, name: "JavaScript" },
  { icon: siTypescript, name: "TypeScript" },
  { icon: siReact, name: "React" },
  { icon: siNextdotjs, name: "Next.js" },
  { icon: siTailwindcss, name: "Tailwind CSS" },
  { icon: siNodedotjs, name: "Node.js" },
  { icon: siNestjs, name: "Nest.js" },
  { icon: siPostgresql, name: "PostgreSQL" },
  { icon: siSupabase, name: "Supabase" },
  { icon: siGit, name: "Git" },
  { icon: siGithub, name: "GitHub" },
  { icon: siFigma, name: "Figma" },
] as const;

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

        <Ring3DRow items={ALL_SKILLS} speed={0.002} direction={1} initialAngle={0} />
      </div>
    </section>
  );
}
