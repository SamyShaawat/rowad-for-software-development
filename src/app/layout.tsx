import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { CompanyConstants } from '@/constants';

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
  title: `${CompanyConstants.FULL_NAME} | Transforming Ideas into Reality`,
  description: CompanyConstants.DESCRIPTION,
  keywords: ['software development', 'website development', 'web hosting', 'digital solutions', 'Rowad'],
  authors: [{ name: 'Rowad Team' }],
  openGraph: {
    title: CompanyConstants.FULL_NAME,
    description: 'Transforming Ideas into Reality',
    type: 'website',
    locale: 'en_US',
    siteName: CompanyConstants.NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: CompanyConstants.FULL_NAME,
    description: 'Transforming Ideas into Reality',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased bg-dark-400 text-slate-200">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
