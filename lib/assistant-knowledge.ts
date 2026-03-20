import type { Locale } from "@/lib/translations";

type KnowledgeItem = {
  id: string;
  keywords: string[];
  answer: Record<Locale, string>;
};

const knowledgeBase: KnowledgeItem[] = [
  {
    id: "who-is-frander",
    keywords: [
      "Quien es frander",
      "Quién es frander",
      "Quien es",
      "Quién es",
      "Frander quien es",
      "Frander",
      "Quien eres",
      "Quién eres",
      "Sobre ti",
      "Hablame de frander",
      "Háblame de frander",
      "Who is frander",
      "Who are you",
      "Tell me about frander",
      "Who are you",
      "Tell me about frander",
    ],
    answer: {
      es: "Frander Carrillo es desarrollador de sistemas web. Construye aplicaciones y plataformas digitales que resuelven problemas reales y trabaja con empresas para implementar soluciones innovadoras adaptadas a sus necesidades.",
      en: "Frander Carrillo is a web systems developer. He builds applications and digital platforms that solve real problems and works with companies to deliver innovative solutions tailored to their needs.",
    },
  },
  {
    id: "education",
    keywords: [
      "que estudia",
      "qué estudia",
      "que estudias",
      "qué estudias",
      "educacion",
      "educación",
      "universidad",
      "what does he study",
      "what does frander study",
      "education",
      "university",
    ],
    answer: {
      es: "Frander estudia Ingeniería en Sistemas en la Universidad Nacional de Costa Rica y además cuenta con un Diplomado en Programación de Aplicaciones Web.",
      en: "Frander is studying Systems Engineering at the National University of Costa Rica and also holds a Diploma in Web Application Programming.",
    },
  },
  {
    id: "projects",
    keywords: [
      "que proyectos ha hecho",
      "qué proyectos ha hecho",
      "proyectos",
      "trabajos",
      "portfolio",
      "what projects has he built",
      "projects",
      "work",
    ],
    answer: {
      es: "Ha desarrollado proyectos como Sámara Fisiowellness, un sistema de gestión para una clínica de fisioterapia; Venta de Buses Padilla, una plataforma para venta de buses y control de cartera; y Transportes Padilla, un sistema integral para control de viajes, agenda digital e ingresos por viaje.",
      en: "He has built projects such as Samara Fisiowellness, a management system for a physiotherapy clinic; Venta de Buses Padilla, a platform for bus sales and receivables tracking; and Transportes Padilla, an integrated system for trip management, digital scheduling, and trip income tracking.",
    },
  },
  {
    id: "contact",
    keywords: [
      "como lo contacto",
      "cómo lo contacto",
      "contacto",
      "como contactar",
      "cómo contactar",
      "whatsapp",
      "email",
      "correo",
      "how can i contact him",
      "contact",
      "how do i reach him",
    ],
    answer: {
      es: "Puedes contactar a Frander por correo en frandercarrillo2@gmail.com, por WhatsApp al +506 8650 5959, o también por LinkedIn desde la sección de contacto del portafolio.",
      en: "You can contact Frander by email at frandercarrillo2@gmail.com, by WhatsApp at +506 8650 5959, or through LinkedIn in the portfolio contact section.",
    },
  },
];

const fallbackAnswer: Record<Locale, string> = {
  es: "Todavía no tengo esa información sobre Frander. Prueba preguntando quién es, qué estudia, qué proyectos ha hecho o cómo contactarlo.",
  en: "I do not have that information about Frander yet. Try asking who he is, what he studies, what projects he has built, or how to contact him.",
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^\p{Letter}\p{Number}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getAssistantReply(input: string, locale: Locale) {
  const normalizedInput = normalizeText(input);

  if (normalizedInput.includes("frander")) {
    const whoIsFrander = knowledgeBase.find(({ id }) => id === "who-is-frander");
    if (whoIsFrander) {
      return whoIsFrander.answer[locale];
    }
  }

  const item = knowledgeBase.find(({ keywords }) =>
    keywords.some((keyword) => normalizedInput.includes(normalizeText(keyword)))
  );

  return item?.answer[locale] ?? fallbackAnswer[locale];
}
