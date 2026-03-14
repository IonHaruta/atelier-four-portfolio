import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import es from "./locales/es.json";
import it from "./locales/it.json";

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  es: { translation: es },
  it: { translation: it },
};

const savedLng =
  (typeof localStorage !== "undefined" && localStorage.getItem("atelier-four-lang")) || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLng,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  if (typeof localStorage !== "undefined") localStorage.setItem("atelier-four-lang", lng);
  if (typeof document !== "undefined") document.documentElement.lang = lng;
});
if (typeof document !== "undefined") document.documentElement.lang = i18n.language;

export default i18n;
