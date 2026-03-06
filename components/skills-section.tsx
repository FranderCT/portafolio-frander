"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const SKILLS = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "Node.js",
] as const;

export function SkillsSection() {
  const { locale } = useLanguage();
  const t = translations[locale].skills;

  return (
    <section
      id="habilidades"
      className="px-6 py-24"
      aria-labelledby="titulo-habilidades"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="titulo-habilidades"
          className="mb-8 font-mono text-sm font-medium text-muted-foreground"
        >
          {t.title}
        </h2>
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <Button
              key={skill}
              variant="secondary"
              size="sm"
              className="rounded-full"
            >
              {skill}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
