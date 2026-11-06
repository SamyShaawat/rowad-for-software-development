import type { Metadata } from 'next';
import '../globals.css';
import { RootDocument } from '@/components/layout/RootDocument';
import { plexArabic, plexSansLatin, plexMono } from '../fonts';

// Arabic is hidden until the owner approves it: not indexed, not linked, not in the sitemap.
export const metadata: Metadata = {
  metadataBase: new URL('https://rowad.com'),
  title: { default: 'رواد لتطوير البرمجيات', template: '%s | رواد' },
  robots: { index: false, follow: false },
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument
      locale="ar"
      fontClass={`${plexArabic.variable} ${plexSansLatin.variable} ${plexMono.variable}`}
    >
      {children}
    </RootDocument>
  );
}
