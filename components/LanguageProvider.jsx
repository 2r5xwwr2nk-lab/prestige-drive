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

const DEFAULT_LANGUAGE = "sk";
const STORAGE_KEY = "prestige-language";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    const initialLanguage =
      savedLanguage && translations[savedLanguage]
        ? savedLanguage
        : DEFAULT_LANGUAGE;

    setLanguageState(initialLanguage);
    document.documentElement.lang = initialLanguage;
    setMounted(true);
  }, []);

  function setLanguage(newLanguage) {
    if (!translations[newLanguage]) {
      return;
    }

    setLanguageState(newLanguage);
    localStorage.setItem(STORAGE_KEY, newLanguage);
    document.documentElement.lang = newLanguage;
  }

  const activeLanguage = mounted ? language : DEFAULT_LANGUAGE;

  const value = useMemo(
    () => ({
      language: activeLanguage,
      setLanguage,
      t: translations[activeLanguage] ?? translations[DEFAULT_LANGUAGE],
    }),
    [activeLanguage]
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