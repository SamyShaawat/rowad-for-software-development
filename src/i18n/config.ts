/**
 * Locales. English keeps today's URLs (/about); Arabic lives under /ar (/ar/about).
 * ARABIC_PUBLIC shows the language button in the header. The Arabic pages are still noindex
 * until the SEO switch-on (hreflang, sitemap) is done.
 */
export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const ARABIC_PUBLIC = true;

export const isRtl = (locale: Locale) => locale === 'ar';
export const dirOf = (locale: Locale) => (isRtl(locale) ? 'rtl' : 'ltr');

/** Prefix a site path with the locale: localePath('ar', '/about') -> '/ar/about'. */
export function localePath(locale: Locale, path: string): string {
  if (locale === 'en') return path;
  return path === '/' ? '/ar' : `/ar${path}`;
}

/** Locale of a pathname: '/ar/about' -> 'ar', '/about' -> 'en'. */
export function localeOf(pathname: string): Locale {
  return pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en';
}

/** Remove the locale prefix: '/ar/about' -> '/about', '/ar' -> '/'. */
export function stripLocale(pathname: string): string {
  return localeOf(pathname) === 'ar' ? pathname.slice(3) || '/' : pathname;
}
