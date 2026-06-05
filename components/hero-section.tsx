"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

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
      <div className="relative z-10 flex flex-col items-center text-foreground">
        <Image
          src="/IMG_5923.jpg"
          alt="Frander Carrillo"
          width={208}
          height={208}
          className="mb-8 size-40 rounded-full object-cover ring-4 ring-white/50 sm:size-52"
          priority
        />
        <p className="mb-4 font-mono text-sm text-white/90">{t.greeting}</p>
        <h1 className="text-center text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Frander Carrillo
        </h1>
        <p className="mt-6 max-w-xl text-center text-lg text-white/85">
          {t.tagline}
        </p>
        <div className="mt-10 flex gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <Link href="#proyectos">{t.viewProjects}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/80 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="#contacto">{t.contact}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
