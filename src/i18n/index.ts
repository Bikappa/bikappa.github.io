import en from './en';
import it from './it';

export const languages = {
  en: 'English',
  it: 'Italiano',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

const translations = { en, it } as const;

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getAlternateLocale(lang: Lang): Lang {
  return lang === 'en' ? 'it' : 'en';
}
