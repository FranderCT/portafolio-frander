"use client";

import Image from "next/image";
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
              className="flex overflow-hidden transition-shadow hover:shadow-md"
            >
              {"image" in project && project.image && (
                <div className="flex justify-center pt-4 pb-0">
                  <div className="relative size-36 overflow-hidden rounded-full sm:size-40">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 144px, 160px"
                    />
                  </div>
                </div>
              )}
              <CardHeader className={"image" in project && project.image ? "-mt-4 flex-1 pt-0" : "flex-1"}>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.desc}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild variant="outline" size="sm">
                  {"href" in project && project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.visitWebsite}
                    </a>
                  ) : (
                    <Link href="#">{t.moreDetails}</Link>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
