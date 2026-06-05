export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      education: "Educación",
      skills: "Habilidades",
      projects: "Empresas",
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
      available: "Disponible para nuevos proyectos",
      tagline: "Tu socio tecnológico. Diseño y desarrollo soluciones web a medida que resuelven problemas reales de negocio.",
      viewProjects: "Ver empresas",
      contact: "Contactar",
      scroll: "Desliza para explorar",
    },
    education: {
      title: "Formación",
      sectionLabel: "Educación",
      items: [
        {
          degree: "Ingeniería en Sistemas",
          institution: "Universidad Nacional de Costa Rica",
          period: "2023 — Presente",
          status: "En curso",
          detail: "4.º año · Énfasis en desarrollo de software y sistemas de información.",
          active: true,
        },
        {
          degree: "Diplomado en Programación de Aplicaciones Web",
          institution: "Universidad Nacional de Costa Rica",
          period: "2023 — 2025",
          status: "Completado",
          detail: "Fundamentos de desarrollo web, bases de datos y aplicaciones cliente-servidor.",
          active: false,
        },
      ],
    },
    about: {
      title: "Sobre mí",
      heading: "Tecnología que impulsa el crecimiento de tu negocio.",
      paragraphs: [
        "Soy Frander Carrillo y me apasiona impulsar el crecimiento de los negocios a través de la tecnología. Me enfoco en brindar asesoría tecnológica integral y en desarrollar sistemas de información y soluciones digitales a medida adaptadas a las necesidades reales de cada empresa.",
        "Fuera del código, soy un aficionado al fútbol, sigo al Barcelona y al Saprissa. También fui futbolista de segunda división con Municipal Liberia — una etapa que me enseñó disciplina, trabajo en equipo y a perseguir metas. Si quieres conocerme mejor o sumar esfuerzos, escríbeme.",
      ],
      facts: [
        "Asesoría tecnológica integral",
        "Sistemas y soluciones a medida",
        "Ex-jugador de 2da división",
      ],
    },
    skills: {
      title: "Habilidades",
    },
    projects: {
      title: "Empresas con las que trabajo",
      items: [
        {
          title: "Sámara Fisiowellness",
          desc: "Sistema de gestión para clínica de fisioterapia: expedientes digitales de pacientes, registro y seguimiento, y recordatorios de cita por correo electrónico. Desarrollado con enfoque en usabilidad y seguridad de la información.",
          image: "/samarafisio.png",
        },
        {
          title: "Venta de Buses Padilla",
          desc: "Sistema para la venta de buses importados y control de cartera: gestión de clientes, registro de deudas y seguimiento de pagos. Plataforma a medida para el negocio de comercialización de buses.",
          image: "/logo-venta-de-buses%20padilla.png",
        },
        {
          title: "Transportes Padilla",
          desc: "Refactorización de la página actual y desarrollo de sistema integral: control de viajes, agenda digital y registro de ingresos por viaje. Solución para operación y administración del transporte.",
          image: "/Transportes-Padilla.png",
        },
        {
          title: "Transportes Turísticos y Corporativo Rogotours",
          desc: "Sistema de gestión integral para la empresa turística y de transporte: control de clientes, registro de gastos operativos y administración de la flota de unidades de transporte.",
          image: "/rogotours-logo.png",
        },
      ],
    },
    contact: {
      title: "Contacto",
      intro: "¿Tienes una idea o quieres colaborar? Me encantaría saber de ti.",
      cardTitle: "Envíame un mensaje",
      cardDescription: "Completa el formulario y te responderé lo antes posible.",
      whatsappCta: "Chatear por WhatsApp",
    },
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      nameRequired: "El nombre es obligatorio",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      emailRequired: "El email es obligatorio",
      emailInvalid: "Introduce un email válido",
      message: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje...",
      messageRequired: "El mensaje es obligatorio",
      submit: "Enviar",
      success: "¡Mensaje enviado! Te responderé lo antes posible.",
    },
    footer: {
      copyright: "© {year} Frander Carrillo",
    },
    language: "Idioma",
    theme: "Tema",
  },
  en: {
    nav: {
      about: "About me",
      education: "Education",
      skills: "Skills",
      projects: "Companies",
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
      available: "Available for new projects",
      tagline: "Your technology partner. I design and build custom web solutions that solve real business problems.",
      viewProjects: "View companies",
      contact: "Contact",
      scroll: "Scroll to explore",
    },
    education: {
      title: "Education",
      sectionLabel: "Education",
      items: [
        {
          degree: "Systems Engineering",
          institution: "National University of Costa Rica",
          period: "2023 — Present",
          status: "In Progress",
          detail: "4th year · Focus on software development and information systems.",
          active: true,
        },
        {
          degree: "Diploma in Web Application Programming",
          institution: "National University of Costa Rica",
          period: "2023 — 2025",
          status: "Completed",
          detail: "Fundamentals of web development, databases, and client-server applications.",
          active: false,
        },
      ],
    },
    about: {
      title: "About me",
      heading: "Technology that drives your business growth.",
      paragraphs: [
        "I'm Frander Carrillo and I'm passionate about driving business growth through technology. I focus on providing comprehensive technological advisory and developing custom information systems and digital solutions tailored to the real needs of each company.",
        "Away from code, I'm a football fan, I support Barcelona and Saprissa. I also played in the second division with Municipal Liberia — a chapter that taught me discipline, teamwork, and chasing goals. If you'd like to get to know me better or work together, get in touch.",
      ],
      facts: [
        "Comprehensive tech advisory",
        "Custom systems & solutions",
        "Former 2nd-division player",
      ],
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Companies I work with",
      items: [
        {
          title: "Sámara Fisiowellness",
          desc: "Management system for a physiotherapy clinic: digital patient records, registration and follow-up, and email appointment reminders. Built with a focus on usability and data security.",
          image: "/samarafisio.png",
        },
        {
          title: "Venta de Buses Padilla",
          desc: "System for selling imported buses and receivables management: client management, debt tracking, and payment follow-up. Custom platform for the bus sales business.",
          image: "/logo-venta-de-buses%20padilla.png",
        },
        {
          title: "Transportes Padilla",
          desc: "Refactoring of the current site and development of an integrated system: trip management, digital agenda, and income tracking per trip. Solution for transport operations and administration.",
          image: "/Transportes-Padilla.png",
        },
        {
          title: "Transportes Turísticos y Corporativo Rogotours",
          desc: "Comprehensive management system for the tourism and transport company: client management, tracking of operational expenses, and administration of the fleet of transport units.",
          image: "/rogotours-logo.png",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro: "Have an idea or want to collaborate? I'd love to hear from you.",
      cardTitle: "Send me a message",
      cardDescription: "Fill out the form and I'll get back to you as soon as possible.",
      whatsappCta: "Chat on WhatsApp",
    },
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      nameRequired: "Name is required",
      email: "Email",
      emailPlaceholder: "you@email.com",
      emailRequired: "Email is required",
      emailInvalid: "Enter a valid email",
      message: "Message",
      messagePlaceholder: "Write your message...",
      messageRequired: "Message is required",
      submit: "Send",
      success: "Message sent! I'll get back to you as soon as possible.",
    },
    footer: {
      copyright: "© {year} Frander Carrillo",
    },
    language: "Language",
    theme: "Theme",
  },
} as const;
