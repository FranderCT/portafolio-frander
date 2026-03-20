"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { getAssistantReply } from "@/lib/assistant-knowledge";
import { cn } from "@/lib/utils";

type SpeechRecognitionResultLike = {
  isFinal: boolean;
  0: {
    transcript: string;
  };
};

type SpeechRecognitionEventLike = Event & {
  results: ArrayLike<SpeechRecognitionResultLike>;
};

type SpeechRecognitionLike = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

const assistantUiCopy = {
  es: {
    title: "Asistente de voz",
    idle: "Pregúntame quién es Frander, qué estudia, qué proyectos ha hecho o cómo contactarlo.",
    listening: "Escuchando...",
    unsupported: "Tu navegador no soporta reconocimiento de voz.",
    permissionDenied: "No tengo permiso para usar el micrófono. Revisa los permisos del navegador.",
    noSpeech: "No detecté una pregunta. Intenta hablar más cerca del micrófono o escribe la pregunta abajo.",
    startError: "No pude iniciar el micrófono desde el navegador.",
    cta: "Hablar con el asistente",
    stop: "Detener asistente",
    submit: "Preguntar",
    placeholder: "Escribe una pregunta sobre Frander",
    quickQuestions: [
      "¿Quién es Frander?",
      "¿Qué estudia?",
      "¿Qué proyectos ha hecho?",
      "¿Cómo lo contacto?",
    ],
    heard: "Escuché:",
    answered: "Respuesta:",
  },
  en: {
    title: "Voice assistant",
    idle: "Ask me who Frander is, what he studies, what projects he has built, or how to contact him.",
    listening: "Listening...",
    unsupported: "Your browser does not support speech recognition.",
    permissionDenied: "I do not have permission to use the microphone. Please check browser permissions.",
    noSpeech: "I could not detect a question. Try speaking closer to the microphone or type the question below.",
    startError: "I could not start the microphone from the browser.",
    cta: "Talk to the assistant",
    stop: "Stop assistant",
    submit: "Ask",
    placeholder: "Type a question about Frander",
    quickQuestions: [
      "Who is Frander?",
      "What does he study?",
      "What projects has he built?",
      "How can I contact him?",
    ],
    heard: "I heard:",
    answered: "Answer:",
  },
} as const;

export function VoiceAssistant() {
  const { locale } = useLanguage();
  const copy = assistantUiCopy[locale];
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const [supported, setSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const processQuestion = useCallback((question: string) => {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;

    const nextAnswer = getAssistantReply(cleanQuestion, locale);

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(nextAnswer);
      utterance.lang = locale === "es" ? "es-MX" : "en-US";
      window.speechSynthesis.speak(utterance);
    }
  }, [locale]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition ?? window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      queueMicrotask(() => setSupported(false));
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = locale === "es" ? "es-MX" : "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript?.trim();
      if (!transcript) {
        return;
      }

      processQuestion(transcript);
    };

    recognition.onerror = (event) => {
      if (
        event.error !== "not-allowed" &&
        event.error !== "service-not-allowed" &&
        event.error !== "no-speech"
      ) {
        window.speechSynthesis?.cancel();
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    queueMicrotask(() => setSupported(true));

    return () => {
      recognition.stop();
      window.speechSynthesis?.cancel();
    };
  }, [copy.noSpeech, copy.permissionDenied, copy.startError, locale, processQuestion]);

  function toggleListening() {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch {
      setIsListening(false);
    }
  }

  return (
    <div className="fixed right-6 bottom-24 z-40 flex flex-col items-end gap-3">
      <Button
        type="button"
        size="icon-lg"
        onClick={toggleListening}
        disabled={!supported}
        aria-label={isListening ? copy.stop : copy.cta}
        className={cn(
          "size-16 rounded-full shadow-xl transition-transform hover:scale-105",
          isListening
            ? "bg-red-500 text-white hover:bg-red-500/90"
            : "bg-accent-dim text-white hover:bg-accent-dim/90"
        )}
      >
        {isListening ? <MicOff className="size-7" /> : <Mic className="size-7" />}
      </Button>
    </div>
  );
}
