import type { Metadata } from 'next';
import '../globals.css';
import { RootDocument } from '@/components/layout/RootDocument';
import { plexArabic, plexSansLatin, plexMono } from '../fonts';
import { arabicJsonLd } from '../structured-data';

// Arabic is indexed like English. Per-page title, description, canonical, hreflang and social
// tags come from arabicPage() in src/i18n/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL('https://rowad.com'),
  title: { default: 'رواد لتطوير البرمجيات', template: '%s | رواد' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/images/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/images/brand/icon-180.png',
  },
  manifest: '/manifest.json',
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument
      locale="ar"
      jsonLd={arabicJsonLd}
      fontClass={`${plexArabic.variable} ${plexSansLatin.variable} ${plexMono.variable}`}
    >
      {children}
    </RootDocument>
  );
}
