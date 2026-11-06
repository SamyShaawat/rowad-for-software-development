import type { Metadata } from 'next';
import '../globals.css';
import { CompanyConstants } from '@constants';
import { RootDocument } from '@/components/layout/RootDocument';
import { englishJsonLd } from '../structured-data';
import { plexSans, plexMono } from '../fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://rowad.com'),
  title: {
    default: 'Rowad - Software Development Company | Web, Mobile, ERP & AI',
    template: `%s | ${CompanyConstants.NAME}`,
  },
  description:
    'Rowad for Software Development is a software company in Alexandria, Egypt. We design, build and run custom software for businesses, from idea to production.',
  keywords: [
    'rowad',
    'rowad software',
    'rowad for software development',
    'software development company',
    'software development egypt',
    'software development alexandria',
    'web development',
    'web development egypt',
    'web development alexandria',
    'mobile app development',
    'mobile app development egypt',
    'AI chatbot',
    'AI chatbot development',
    'AI agents',
    'AI agent development',
    'WhatsApp chatbot',
    'ERP system',
    'ERP implementation',
    'ERP egypt',
    'Odoo development',
    'web hosting',
    'web hosting egypt',
    'managed hosting',
    'cloud hosting',
    'software company egypt',
    'software company alexandria',
    'custom software development',
    'responsive website design',
    'e-commerce development',
    'DevOps services',
    'cloud deployment',
    'UI/UX design',
    'progressive web apps',
    'PWA development',
  ],
  authors: [{ name: 'Rowad Team', url: 'https://rowad.com' }],
  creator: 'Rowad For Software Development',
  publisher: 'Rowad For Software Development',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rowad.com',
    siteName: 'Rowad for Software Development',
    title: 'Rowad - Software Development Company | Web, Mobile, ERP & AI',
    description:
      'Software company in Alexandria, Egypt designing, building and running custom software, from idea to production.',
    images: [
      {
        url: '/images/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rowad For Software Development',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rowad - Software Development Company',
    description:
      'Software company in Alexandria, Egypt designing, building and running custom software, from idea to production.',
    images: ['/images/brand/og-image.jpg'],
    creator: '@rowad',
    site: '@rowad',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/images/brand/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/images/brand/icon-180.png',
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Software Development',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Rowad',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument
      locale="en"
      fontClass={`${plexSans.variable} ${plexMono.variable}`}
      jsonLd={englishJsonLd}
    >
      {children}
    </RootDocument>
  );
}
