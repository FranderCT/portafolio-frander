import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PROJECTS = [
  {
    title: "Proyecto 1",
    desc: "Descripción breve del proyecto. Tecnologías y objetivo.",
    href: "#",
  },
  {
    title: "Proyecto 2",
    desc: "Otro proyecto que demuestra tus habilidades.",
    href: "#",
  },
  {
    title: "Proyecto 3",
    desc: "Más ideas y resultados que hayas construido.",
    href: "#",
  },
] as const;

export function ProjectsSection() {
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
          Proyectos
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.desc}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <Link href={project.href}>Más detalles</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
