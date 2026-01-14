import { notFound } from 'next/navigation';

export const locales = ['en', 'de', 'fr', 'es', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && isValidLocale(firstSegment)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  
  // Root path
  if (pathWithoutLocale === '/') {
    return locale === defaultLocale ? '/' : `/${locale}`;
  }
  
  return locale === defaultLocale 
    ? pathWithoutLocale 
    : `/${locale}${pathWithoutLocale}`;
}
