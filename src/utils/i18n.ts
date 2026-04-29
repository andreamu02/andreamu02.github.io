import type { Locale } from '../data/site';

export const isLocale = (value: string): value is Locale => value === 'it' || value === 'en';

export function otherLocale(locale: Locale): Locale {
  return locale === 'it' ? 'en' : 'it';
}

export function swapLocale(pathname: string, locale: Locale) {
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 0) return `/${locale}/`;

  if (parts[0] === 'it' || parts[0] === 'en') {
    parts[0] = locale;
    return `/${parts.join('/')}/`;
  }

  return `/${locale}/${parts.join('/')}/`;
}
