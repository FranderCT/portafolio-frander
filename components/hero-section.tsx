"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const socials = [
  {
    href: "https://www.linkedin.com/in/frander-carrillo-7a52b8338/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/fran_ct05/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "#contacto",
    label: "Email",
    icon: Mail,
  },
] as const;

export function HeroSection() {
  const { locale } = useLanguage();
  const t = translations[locale].hero;

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 pt-16"
      aria-label="Presentación"
    >
      {/* Fondo de cuadrícula y luces degradadas puras con CSS */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 100% 100%, 48px 48px, 48px 48px",
          backgroundPosition: "0 0, 0 0, 0 0, center center, center center",
        }}
      />
      {/* Difuminado superior/inferior para fundir con secciones contiguas */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-foreground">
        {/* Insignia de disponibilidad */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-white/80">
            {t.available}
          </span>
        </div>

        {/* Avatar con halo degradado */}
        <div className="animate-fade-in-up animate-fade-in-up-delay-1 relative mb-8">
          <div
            className="absolute -inset-2 -z-10 rounded-full opacity-60 blur-2xl"
            style={{
              background:
                "conic-gradient(from 180deg, #6366f1, #0ea5e9, #10b981, #6366f1)",
            }}
            aria-hidden
          />
          <Image
            src="/IMG_5923.jpg"
            alt="Frander Carrillo"
            width={208}
            height={208}
            className="size-40 rounded-full object-cover ring-2 ring-white/20 sm:size-52"
            priority
          />
        </div>

        <p className="animate-fade-in-up animate-fade-in-up-delay-2 mb-3 font-mono text-sm text-white/70">
          {t.greeting}
        </p>
        <h1 className="animate-fade-in-up animate-fade-in-up-delay-2 bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Frander Carrillo
        </h1>
        <p className="animate-fade-in-up animate-fade-in-up-delay-3 mt-6 max-w-xl text-center text-lg text-balance text-white/70">
          {t.tagline}
        </p>

        <div className="animate-fade-in-up animate-fade-in-up-delay-4 mt-10 flex  items-center gap-4 flex-row">
          <Button
            asChild
            size="lg"
            className="group bg-white text-black hover:bg-white/90"
          >
            <Link href="#proyectos">
              {t.viewProjects}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="#contacto">{t.contact}</Link>
          </Button>
        </div>

        {/* Enlaces sociales */}
        <div className="animate-fade-in-up animate-fade-in-up-delay-5 mt-10 flex items-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              <Icon className="size-4" />
            </Link>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <Link
        href="#sobre-mi"
        aria-label={t.scroll}
        className="animate-fade-in-up animate-fade-in-up-delay-5 absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70 sm:flex"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">
          {t.scroll}
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1">
          <span className="animate-scroll-hint size-1 rounded-full bg-white/60" />
        </span>
      </Link>
    </section>
  );
}
