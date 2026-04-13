import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CompanyConstants } from '@constants';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rowad.com'),
  title: {
    default: 'Rowad - Leading Software Development Company | Web, Mobile & AI Solutions',
    template: `%s | ${CompanyConstants.NAME}`,
  },
  description:
    'Rowad for Software Development is a premier software company specializing in web development, mobile app development, AI chatbots, digital marketing, and web hosting. Based in Alexandria, Egypt, we deliver innovative digital solutions that drive business growth.',
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
    'digital marketing',
    'digital marketing egypt',
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
    title: 'Rowad - Leading Software Development Company | Web, Mobile & AI Solutions',
    description:
      'Premier software development company in Alexandria, Egypt. Specializing in web development, mobile apps, AI chatbots, digital marketing, and cloud hosting solutions.',
    images: [
      {
        url: '/images/RowadLogo/Rowad_Logo_Main.png',
        width: 1200,
        height: 630,
        alt: 'Rowad For Software Development Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rowad - Leading Software Development Company',
    description:
      'Premier software development company specializing in web, mobile, AI chatbots, digital marketing & cloud hosting.',
    images: ['/images/RowadLogo/Rowad_Logo_Main.png'],
    creator: '@rowad',
    site: '@rowad',
  },
  verification: {
    google: 'enter-google-verification-code',
  },
  alternates: {
    canonical: 'https://rowad.com',
  },
  icons: {
    icon: '/images/RowadLogo/Rowad_Icon_Round.png',
    apple: '/images/RowadLogo/Rowad_Icon_Round.png',
    shortcut: '/images/RowadLogo/Rowad_Icon_Round.png',
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
          url: 'https://rowad.com/images/RowadLogo/Rowad_Logo_Main.png',
          width: 1200,
          height: 630,
        },
        image: 'https://rowad.com/images/RowadLogo/Rowad_Logo_Main.png',
        description:
          'Rowad for Software Development is a premier software company specializing in web development, mobile app development, AI chatbots, digital marketing, and web hosting.',
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
          'Digital Marketing',
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
          'Premier software development company specializing in web development, mobile apps, AI chatbots, digital marketing, and cloud hosting.',
        publisher: {
          '@id': 'https://rowad.com/#organization',
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://rowad.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://rowad.com/#localbusiness',
        name: 'Rowad for Software Development',
        image: 'https://rowad.com/images/RowadLogo/Rowad_Logo_Main.png',
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
                name: 'Digital Marketing',
                description:
                  'Comprehensive digital marketing strategies including SEO, social media, and content marketing.',
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
    <html lang="en" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
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
