export const LANGUAGE_STORAGE_KEY = "appLanguage";

export const LANGUAGES = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
  },
  {
    code: "ta",
    label: "Tamil",
    nativeLabel: "தமிழ்",
  },

];

export function getStoredLanguage(): string {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
}

export function setStoredLanguage(code: string): void {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, code);

  window.dispatchEvent(
    new CustomEvent("languagechange", {
      detail: { code },
    })
  );
}

export function getCurrentLanguageLabel(): string {
  const code = getStoredLanguage();

  const lang = LANGUAGES.find((l) => l.code === code);

  return lang ? lang.nativeLabel : "English";
}