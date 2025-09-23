import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// JSON translations import
import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

i18n
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    resources,
    lng: "en",            // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false }, // React already escapes
  });

export default i18n;
