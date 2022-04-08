import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLanguageFromPath } from "../cms";
import { en } from "./english";
import { de } from "./german";

// "Inline" English and German translations.
// We can localize to any language and any number of languages.
const languageInPath = getLanguageFromPath(window.location.pathname);

const resources = {
  en: en,
  de: de,
};
i18next.use(initReactI18next).init({
  resources,
  lng: languageInPath,
  fallbackLng: "de",
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
