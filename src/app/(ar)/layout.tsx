import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google';
import '../globals.css';
import { RootDocument } from '@/components/layout/RootDocument';

// Same CSS variable names as the English layout, so Tailwind's font-sans needs no change.
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-plex',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
  weight: ['400', '500'],
});

// Arabic is hidden until the owner approves it: not indexed, not linked, not in the sitemap.
export const metadata: Metadata = {
  metadataBase: new URL('https://rowad.com'),
  title: { default: 'رواد لتطوير البرمجيات', template: '%s | رواد' },
  robots: { index: false, follow: false },
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument locale="ar" fontClass={`${plexArabic.variable} ${plexMono.variable}`}>
      {children}
    </RootDocument>
  );
}
