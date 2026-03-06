import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="#" className="font-semibold tracking-tight text-foreground">
            FC
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex gap-6 text-sm text-muted-foreground">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="transition hover:text-foreground"
                >
                  {label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
