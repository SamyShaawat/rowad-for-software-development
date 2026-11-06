import type { Metadata } from 'next';
import { localePath, type Locale } from './config';

export const SITE_URL = 'https://rowad.com';
export const AR_SITE_NAME = 'رواد لتطوير البرمجيات';
export const AR_OG_IMAGE = '/images/brand/og-image-ar.jpg';

/** Absolute URL of a page in a language: pageUrl('ar', '/about') -> https://rowad.com/ar/about */
export function pageUrl(locale: Locale, path: string): string {
  const p = localePath(locale, path);
  return p === '/' ? SITE_URL : `${SITE_URL}${p}`;
}

/**
 * Canonical (this page, this language) plus hreflang links to both languages and x-default.
 * Every page must link to its other-language version, and that page must link back.
 */
export function alternatesFor(path: string, locale: Locale): NonNullable<Metadata['alternates']> {
  return {
    canonical: pageUrl(locale, path),
    languages: {
      en: pageUrl('en', path),
      ar: pageUrl('ar', path),
      'x-default': pageUrl('en', path),
    },
  };
}

/** Full metadata for an Arabic page: written Arabic title and description, links, social tags. */
export function arabicPage(opts: {
  path: string;
  title: string;
  description: string;
  /** true = use the title as written (no "| رواد" suffix) */
  absolute?: boolean;
}): Metadata {
  const { path, title, description, absolute } = opts;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: alternatesFor(path, 'ar'),
    openGraph: {
      type: 'website',
      locale: 'ar_EG',
      url: pageUrl('ar', path),
      siteName: AR_SITE_NAME,
      title,
      description,
      images: [
        { url: AR_OG_IMAGE, width: 1200, height: 630, alt: AR_SITE_NAME, type: 'image/jpeg' },
      ],
    },
    twitter: { card: 'summary_large_image', title, description, images: [AR_OG_IMAGE] },
  };
}
