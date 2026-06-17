"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { fr, type Dictionary } from "./dictionaries/fr";
import { ar } from "./dictionaries/ar";

export type Locale = "fr" | "ar";
export type Direction = "ltr" | "rtl";

const STORAGE_KEY = "renault-dacia-safi-locale";

const dictionaries: Record<Locale, Dictionary> = { fr, ar };

type LocaleContextValue = {
  locale: Locale;
  direction: Direction;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
  pick: <T>(value: { fr: T; ar: T }) => T;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "fr" || saved === "ar") {
        setLocaleState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const direction: Direction = locale === "ar" ? "rtl" : "ltr";
  const pick = useCallback(
    <T,>(value: { fr: T; ar: T }): T => value[locale],
    [locale]
  );

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = direction;
  }, [locale, direction]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "fr" ? "ar" : "fr";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      direction,
      setLocale,
      toggleLocale,
      t: dictionaries[locale],
      pick,
    }),
    [locale, direction, setLocale, toggleLocale, pick]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}

export function useDirection(): Direction {
  return useLocale().direction;
}

export function useTranslations(): Dictionary {
  return useLocale().t;
}
