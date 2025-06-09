import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // carga archivos desde /locales
  .use(LanguageDetector) // detecta idioma del navegador
  .use(initReactI18next) // conecta con React
  .init({
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // ruta donde están los json en public
    },
  });

export default i18n;
