"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 md:px-8">
      <nav className="relative mx-auto max-w-4xl rounded-full border border-border/50 bg-background/60 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          <Link href="/" className="font-semibold tracking-tight text-foreground" aria-label="Frander Carrillo — Inicio">
            FC
          </Link>

          {/* Desktop: enlaces (centrados) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm">
            <NavLinks />
          </div>

          {/* Desktop: selector de idioma */}
          <div className="hidden md:block">
            <LanguageToggle variant="compact" />
          </div>

          {/* Mobile: menú hamburguesa */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle variant="compact" />
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label={t.menu.open}>
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[min(90vw,340px)] flex-col gap-0 p-6">
                <SheetHeader className="shrink-0 border-b border-border pb-4 p-0">
                  <SheetTitle className="text-left text-lg font-semibold text-foreground">
                    {t.menu.title}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex shrink-0 flex-col gap-1 pt-6 items-start" aria-label="Navegación principal">
                  {NAV_IDS.map(({ href, key }) => (
                    <SheetClose asChild key={href}>
                      <Link
                        href={href}
                        className="w-full rounded-lg py-2.5 text-base font-medium text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
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
                        <svg
                          viewBox="0 0 16 16"
                          className="size-4 shrink-0"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.592zM7.994 14.52a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.618-4.984c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.354 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
