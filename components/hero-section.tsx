import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 pt-16"
      style={{ backgroundImage: "url('/fondo.JPG')" }}
      aria-label="Presentación"
    >
      {/* Overlay oscuro para legibilidad del texto */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div className="relative z-10 flex flex-col items-center text-white">
        <Image
          src="/IMG_5923.jpg"
          alt="Frander Carrillo"
          width={208}
          height={208}
          className="mb-8 size-40 rounded-full object-cover ring-4 ring-white/50 sm:size-52"
          priority
        />
        <p className="mb-4 font-mono text-sm text-white/90">Hola, soy</p>
        <h1 className="text-center text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Frander Carrillo
        </h1>
        <p className="mt-6 max-w-xl text-center text-lg text-white/85">
          Desarrollador y creador digital. Construyo experiencias web y soluciones
          que importan.
        </p>
        <div className="mt-10 flex gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <Link href="#proyectos">Ver proyectos</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/80 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="#contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
