// Internationalization Type Definitions
// TypeScript advanced types, const assertions, template literals

export const SUPPORTED_LOCALES = ['en', 'fr', 'ne'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  ne: 'नेपाली',
};

// Translation keys with nested structure for type safety
export interface TranslationKeys {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    certifications: string;
    contact: string;
    search: string;
    toggleTheme: string;
    switchLanguage: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    resumeBtn: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  experience: {
    title: string;
    present: string;
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
    technologies: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
    soft: string;
  };
  certifications: {
    title: string;
    viewCredential: string;
    issuedBy: string;
    skills: string;
  };
  cv: {
    title: string;
    subtitle: string;
    downloadBtn: string;
    description: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    linkedin: string;
    github: string;
    cta: string;
  };
  accessibility: {
    skipToMain: string;
    menuToggle: string;
    closeMenu: string;
  };
  search: {
    placeholder: string;
    noResults: string;
    sections: string;
  };
}

// Utility type for getting nested keys
export type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends object
    ? `${K}.${NestedKeyOf<T[K]>}`
    : K;
}[keyof T & string];

export type TranslationKey = NestedKeyOf<TranslationKeys>;
