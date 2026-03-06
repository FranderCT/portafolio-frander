"use client"

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {NAV_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          onClick={onNavigate}
          className="text-muted-foreground transition hover:text-foreground"
        >
          {label}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="#" className="font-semibold tracking-tight text-foreground">
            FC
          </Link>

          {/* Desktop: enlaces + theme toggle */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex gap-6 text-sm">
              <NavLinks />
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile: menú hamburguesa */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menú">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader>
                  <SheetTitle>Menú</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6 text-lg">
                  <NavLinks onNavigate={() => setMenuOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
