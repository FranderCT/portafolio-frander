"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          className="mb-8 font-mono text-sm font-medium text-muted-foreground"
        >
          {t.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((project, i) => (
            <Card
              key={project.title + i}
              className="transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.desc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link href="#">{t.moreDetails}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
