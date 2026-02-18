'use client';

// ============================================================================
// Internationalization Context Provider
// Demonstrates: React Context API, useContext, useCallback, useMemo, localStorage
// ============================================================================

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  type ReactNode,
} from 'react';
import type { Locale, TranslationKeys } from './types';
import { SUPPORTED_LOCALES, LOCALE_NAMES } from './types';
import translations from './translations';

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
  locales: typeof SUPPORTED_LOCALES;
  localeNames: typeof LOCALE_NAMES;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

// Custom hook with proper error boundary
export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Helper function to get nested translation value
export function getNestedValue<T>(obj: T, path: string): string {
  return path.split('.').reduce((acc: unknown, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return path;
  }, obj) as string;
}

interface I18nProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

export function I18nProvider({
  children,
  defaultLocale = 'en',
}: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    const stored = localStorage.getItem('portfolio-locale') as Locale | null;
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      setLocaleState(stored);
    }
    setIsHydrated(true);
  }, []);

  // Memoized locale setter with localStorage persistence
  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('portfolio-locale', newLocale);
    // Update document lang attribute for accessibility
    document.documentElement.lang = newLocale;
  }, []);

  // Memoized translation object
  const t = useMemo(() => translations[locale], [locale]);

  // RTL support (for potential Arabic/Hebrew additions)
  const isRTL = useMemo(() => false, []); // None of current locales are RTL

  // Memoized context value to prevent unnecessary re-renders
  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      locales: SUPPORTED_LOCALES,
      localeNames: LOCALE_NAMES,
      isRTL,
    }),
    [locale, setLocale, t, isRTL]
  );

  // Prevent hydration mismatch by rendering children only after hydration
  if (!isHydrated) {
    return null;
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
