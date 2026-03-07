"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const PHONE = "+50686505959";
const PHONE_RAW = "50686505959"; // sin + para WhatsApp

const NAV_IDS = [
  { href: "#sobre-mi", key: "about" as const },
  { href: "#educacion", key: "education" as const },
  { href: "#habilidades", key: "skills" as const },
  { href: "#proyectos", key: "projects" as const },
  { href: "#contacto", key: "contact" as const },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { locale } = useLanguage();
  const t = translations[locale].nav;

  return (
    <>
      {NAV_IDS.map(({ href, key }) => (
        <Link
          key={href}
          href={href}
          onClick={onNavigate}
          className="text-muted-foreground transition hover:text-foreground"
        >
          {t[key]}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale } = useLanguage();
  const t = translations[locale];

  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="#" className="font-semibold tracking-tight text-foreground">
            FC
          </Link>

          {/* Desktop: enlaces + theme + idioma */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex gap-6 text-sm">
              <NavLinks />
            </div>
            <LanguageToggle variant="compact" />
            <ThemeToggle />
          </div>

          {/* Mobile: menú hamburguesa */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle variant="compact" />
            <ThemeToggle />
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t.menu.open}>
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[min(90vw,340px)] flex-col gap-0">
                <SheetHeader className="shrink-0 border-b border-border pb-4">
                  <SheetTitle className="text-left text-lg font-semibold text-foreground">
                    {t.menu.title}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex shrink-0 flex-col gap-0 pt-4 items-center justify-center" aria-label="Navegación principal">
                  {NAV_IDS.map(({ href, key }) => (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className="rounded-lg px-3 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-muted/60 active:bg-muted"
                      >
                        {t.nav[key]}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-6 shrink-0 space-y-3 border-t border-border pt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t.menu.contactQuick}
                  </p>
                  <div className="flex flex-col gap-2">
                    <SheetClose asChild>
                      <a
                        href={`tel:${PHONE}`}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/60 active:bg-muted"
                      >
                        <Phone className="size-4 shrink-0" aria-hidden />
                        {t.menu.call}
                      </a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a
                        href={`https://wa.me/${PHONE_RAW}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#20bd5a] active:bg-[#1da851]"
                      >
                        <MessageCircle className="size-4 shrink-0" aria-hidden />
                        {t.menu.whatsapp}
                      </a>
                    </SheetClose>
                  </div>
                </div>
                <div className="mt-auto space-y-4 border-t border-border pt-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-muted-foreground">{t.language}</span>
                    <LanguageToggle variant="compact" />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {t.theme}
                    </span>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
