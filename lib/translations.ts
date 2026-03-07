export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      education: "Educación",
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
    education: {
      title: "Educación",
      degree: "Ingeniería en Sistemas",
      degreeDetail: "Estudiante de 4.º año — Universidad Nacional de Costa Rica (UNA), en curso.",
      diploma: "Diplomado en Programación de Aplicaciones Web",
      diplomaDetail: "Formación en desarrollo web y aplicaciones.",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy Frander Carrillo y me apasiona la tecnología. Me encanta trabajar con empresas para brindar soluciones innovadoras e implementar sistemas de información adaptados a sus necesidades reales.",
        "Fuera del código, soy un aficionado al fútbol, sigo al Barcelona y al Saprissa. También fui futbolista de segunda división con Municipal Liberia — una etapa que me enseñó disciplina, trabajo en equipo y a perseguir metas. Si quieres conocerme mejor o sumar esfuerzos, escríbeme.",
      ],
    },
    skills: {
      title: "Habilidades",
    },
    projects: {
      title: "Proyectos",
      moreDetails: "Más detalles",
      visitWebsite: "Visitar sitio web",
      items: [
        {
          title: "Sámara Fisiowellness",
          desc: "Sistema de gestión para clínica de fisioterapia: expedientes digitales de pacientes, registro y seguimiento, y recordatorios de cita por correo electrónico. Desarrollado con enfoque en usabilidad y seguridad de la información.",
          image: "/samarafisio.png",
          href: "https://www.samarafisiowellness.com/",
        },
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
      education: "Education",
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
    education: {
      title: "Education",
      degree: "Systems Engineering",
      degreeDetail: "4th year student — National University of Costa Rica (UNA), in progress.",
      diploma: "Diploma in Web Application Programming",
      diplomaDetail: "Training in web development and applications.",
    },
    about: {
      title: "About me",
      paragraphs: [
        "I'm Frander Carrillo and I'm passionate about technology. I love working with companies to deliver innovative solutions and implement information systems tailored to their real needs.",
        "Away from code, I'm a football fan, I support Barcelona and Saprissa. I also played in the second division with Municipal Liberia — a chapter that taught me discipline, teamwork, and chasing goals. If you'd like to get to know me better or work together, get in touch.",
      ],
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projects",
      moreDetails: "More details",
      visitWebsite: "Visit website",
      items: [
        {
          title: "Sámara Fisiowellness",
          desc: "Management system for a physiotherapy clinic: digital patient records, registration and follow-up, and email appointment reminders. Built with a focus on usability and data security.",
          image: "/samarafisio.png",
          href: "https://www.samarafisiowellness.com/",
        },
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
