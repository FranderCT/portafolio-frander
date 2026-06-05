"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { WHATSAPP_URL } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.949h.004c4.368 0 7.927-3.558 7.93-7.93a7.9 7.9 0 0 0-2.327-5.592zM7.994 14.52a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.618-4.984c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.354 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}

const socials = [
  {
    href: WHATSAPP_URL,
    label: "WhatsApp",
    icon: WhatsAppIcon,
    hoverColor: "hover:border-[#25D366]/60 hover:bg-[#25D366]/10 hover:text-[#25D366]",
  },
  {
    href: "mailto:info@frandercarrillo.com",
    label: "Email",
    icon: Mail,
    hoverColor: "hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400",
  },
  {
    href: "https://www.linkedin.com/in/frander-carrillo-7a52b8338/",
    label: "LinkedIn",
    icon: Linkedin,
    hoverColor: "hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com/fran_ct05/",
    label: "Instagram",
    icon: Instagram,
    hoverColor: "hover:border-pink-500/60 hover:bg-pink-500/10 hover:text-pink-400",
  },
  {
    href: "https://www.facebook.com/frander.carrillotorres/",
    label: "Facebook",
    icon: Facebook,
    hoverColor: "hover:border-blue-600/60 hover:bg-blue-600/10 hover:text-blue-500",
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background to-transparent" />

      <div className="relative z-10 flex flex-col items-center pb-20 text-foreground sm:pb-0">
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
            alt="Frander Carrillo, desarrollador web en Costa Rica"
            width={208}
            height={208}
            className="size-40 rounded-full object-cover ring-2 ring-white/20 sm:size-52"
            priority
          />
        </div>

        <p className="animate-fade-in-up animate-fade-in-up-delay-2 mb-3 font-mono text-sm text-white/70">
          {t.greeting}
        </p>
        <h1 className="animate-fade-in-up animate-fade-in-up-delay-2 bg-linear-to-br from-white via-white to-white/50 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
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
          {socials.map(({ href, label, icon: Icon, hoverColor }) => {
            const external = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                title={label}
                className={`flex size-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:scale-105 ${hoverColor}`}
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Indicador de scroll */}
      <Link
        href="#sobre-mi"
        aria-label={t.scroll}
        className="animate-fade-in-up animate-fade-in-up-delay-5 absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70 sm:bottom-8"
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
