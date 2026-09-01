import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";
import ru from "./locales/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ru: { translation: ru },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "es", "ru"],
    // A propósito solo miramos localStorage, no el idioma del navegador:
    // la mayoría de los huéspedes entiende inglés, así que ese es el
    // idioma por defecto en la primera visita. Una vez que alguien elige
    // un idioma con el selector, se recuerda para las próximas visitas.
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
