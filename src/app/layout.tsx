import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CompanyConstants } from '@constants';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
  weight: ['400', '500'],
});

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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://rowad.com/#organization',
        name: 'Rowad for Software Development',
        alternateName: ['Rowad', 'Rowad Software', 'Rowad Tech'],
        url: 'https://rowad.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://rowad.com/images/brand/icon-512.png',
          width: 512,
          height: 512,
        },
        image: 'https://rowad.com/images/brand/og-image.jpg',
        description:
          'Rowad for Software Development is a software company in Alexandria, Egypt. We design, build and run custom software for businesses, from idea to production.',
        foundingDate: '2020',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          minValue: 10,
          maxValue: 50,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '584 El-Horreya Road, Gleem',
          addressLocality: 'Alexandria',
          addressCountry: 'EG',
          addressRegion: 'Alexandria Governorate',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 31.2391,
          longitude: 29.9598,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+20-109-1539-396',
          contactType: 'customer service',
          email: 'info@rowad.com',
          availableLanguage: ['English', 'Arabic'],
        },
        sameAs: [
          'https://www.linkedin.com/company/rowad-for-software-development',
          'https://facebook.com/rowad',
          'https://wa.me/201091539396',
        ],
        knowsAbout: [
          'Web Development',
          'Mobile App Development',
          'AI Chatbot Development',
          'ERP Systems',
          'AI Agents',
          'Web Hosting',
          'Cloud Computing',
          'DevOps',
          'UI/UX Design',
          'E-Commerce Development',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://rowad.com/#website',
        url: 'https://rowad.com',
        name: 'Rowad for Software Development',
        description:
          'Software company in Alexandria, Egypt designing, building and running custom software, from idea to production.',
        publisher: {
          '@id': 'https://rowad.com/#organization',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://rowad.com/#localbusiness',
        name: 'Rowad for Software Development',
        image: 'https://rowad.com/images/brand/og-image.jpg',
        url: 'https://rowad.com',
        telephone: '+20-109-1539-396',
        email: 'info@rowad.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '584 El-Horreya Road, Gleem',
          addressLocality: 'Alexandria',
          addressCountry: 'EG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 31.2391,
          longitude: 29.9598,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        areaServed: [
          { '@type': 'Country', name: 'Egypt' },
          { '@type': 'Country', name: 'Saudi Arabia' },
          { '@type': 'Country', name: 'UAE' },
          { '@type': 'Place', name: 'Middle East' },
          { '@type': 'Place', name: 'North Africa' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Development',
                description:
                  'Custom, responsive website development using modern frameworks like Next.js and React.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile App Development',
                description:
                  'Native and cross-platform mobile application development for iOS and Android.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Chatbot Development',
                description:
                  'Intelligent chatbot solutions powered by AI for customer engagement and automation.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'ERP Systems',
                description:
                  'ERP implementation, data migration, custom modules and integrations so sales, inventory, accounting, HR and production run on one system.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Agents',
                description:
                  'AI agents that read your data, use your tools and complete real tasks, with human approval and monitoring.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Hosting & Cloud',
                description:
                  'Managed web hosting solutions with 99.9% uptime, SSL, and 24/7 monitoring.',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://rowad.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://rowad.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Us',
            item: 'https://rowad.com/about',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Services',
            item: 'https://rowad.com/services',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Clients',
            item: 'https://rowad.com/clients',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: 'https://rowad.com/contact',
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${plex.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-dark-400 dark:text-slate-200 transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
