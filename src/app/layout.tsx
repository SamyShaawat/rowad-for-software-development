import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
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
    default: `${CompanyConstants.FULL_NAME} | Transforming Ideas into Reality`,
    template: `%s | ${CompanyConstants.NAME}`,
  },
  description: CompanyConstants.DESCRIPTION,
  keywords: [
    'Rowad',
    'Rowad For Software Development',
    'rowad software',
    'rowad egypt',
    'software development company egypt',
    'alexandria software',
    'web development rowad',
    'rowad hosting',
    'digital solutions rowad',
    'Rowad tech',
  ],
  authors: [{ name: 'Rowad Team', url: 'https://rowad.com' }],
  creator: 'Rowad For Software Development',
  publisher: 'Rowad For Software Development',
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
    title: CompanyConstants.FULL_NAME,
    description: CompanyConstants.DESCRIPTION,
    url: 'https://rowad.com',
    siteName: CompanyConstants.NAME,
    images: [
      {
        url: '/images/RowadLogo/Rowad_Logo_Main.png',
        width: 800,
        height: 600,
        alt: 'Rowad For Software Development Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: CompanyConstants.FULL_NAME,
    description: CompanyConstants.DESCRIPTION,
    images: ['/images/RowadLogo/Rowad_Logo_Main.png'],
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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
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
