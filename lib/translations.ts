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
    about: {
      title: "Sobre mí",
      body: "Soy Frander Carrillo, apasionado por la tecnología y el desarrollo web. Me gusta aprender, crear proyectos y aportar valor con código. Este portafolio es el espacio donde muestro mi trabajo y mi evolución. Si quieres conocerme mejor o trabajar juntos, escríbeme.",
    },
    skills: {
      title: "Habilidades",
    },
    projects: {
      title: "Proyectos",
      moreDetails: "Más detalles",
      items: [
        { title: "Proyecto 1", desc: "Descripción breve del proyecto. Tecnologías y objetivo." },
        { title: "Proyecto 2", desc: "Otro proyecto que demuestra tus habilidades." },
        { title: "Proyecto 3", desc: "Más ideas y resultados que hayas construido." },
      ],
    },
    contact: {
      title: "Contacto",
      intro: "¿Tienes una idea o quieres colaborar? Me encantaría saber de ti.",
      cardTitle: "Envíame un mensaje",
      cardDescription: "Completa el formulario y te responderé lo antes posible.",
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
    about: {
      title: "About me",
      body: "I'm Frander Carrillo, passionate about technology and web development. I enjoy learning, building projects, and adding value with code. This portfolio is where I showcase my work and growth. If you'd like to get to know me better or work together, get in touch.",
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projects",
      moreDetails: "More details",
      items: [
        { title: "Project 1", desc: "Brief project description. Technologies and goals." },
        { title: "Project 2", desc: "Another project that demonstrates your skills." },
        { title: "Project 3", desc: "More ideas and results you've built." },
      ],
    },
    contact: {
      title: "Contact",
      intro: "Have an idea or want to collaborate? I'd love to hear from you.",
      cardTitle: "Send me a message",
      cardDescription: "Fill out the form and I'll get back to you as soon as possible.",
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
