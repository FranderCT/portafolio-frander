export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    menu: {
      title: "Menú",
      open: "Abrir menú",
      contactQuick: "Contacto rápido",
      call: "Llamar",
      whatsapp: "WhatsApp",
    },
    hero: {
      greeting: "Hola, soy",
      tagline: "Desarrollador de sistemas web. Construyo aplicaciones y plataformas digitales que resuelven problemas reales.",
      viewProjects: "Ver proyectos",
      contact: "Contactar",
    },
    language: "Idioma",
    theme: "Tema",
  },
  en: {
    nav: {
      about: "About me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    menu: {
      title: "Menu",
      open: "Open menu",
      contactQuick: "Quick contact",
      call: "Call",
      whatsapp: "WhatsApp",
    },
    hero: {
      greeting: "Hi, I'm",
      tagline: "Web systems developer. I build applications and digital platforms that solve real problems.",
      viewProjects: "View projects",
      contact: "Contact",
    },
    language: "Language",
    theme: "Theme",
  },
} as const;
