"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("sk");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("prestige-language");

    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }

    setMounted(true);
  }, []);

  const setLanguage = (newLanguage) => {
    if (!translations[newLanguage]) {
      return;
    }

    setLanguageState(newLanguage);
    localStorage.setItem("prestige-language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const value = useMemo(
    () => ({
      language: mounted ? language : "sk",
      setLanguage,
      t: mounted
        ? translations[language] || translations.sk
        : translations.sk,
    }),
    [language, mounted]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage musí byť použitý vo vnútri LanguageProvider."
    );
  }

  return context;
}