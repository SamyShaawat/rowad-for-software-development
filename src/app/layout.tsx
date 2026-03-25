import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { CompanyConstants } from '@/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins', display: 'swap' });

export const metadata: Metadata = {
  title: `${CompanyConstants.FULL_NAME} | ${CompanyConstants.TAGLINE}`,
  description: CompanyConstants.DESCRIPTION,
  keywords: ['software development', 'website development', 'web hosting', 'digital solutions', 'Rowad'],
  authors: [{ name: 'Rowad Team' }],
  openGraph: {
    title: CompanyConstants.FULL_NAME,
    description: 'Your trusted partner for digital transformation',
    type: 'website',
    locale: 'en_US',
    siteName: CompanyConstants.NAME,
  },
  twitter: { card: 'summary_large_image', title: CompanyConstants.FULL_NAME, description: 'Your trusted partner for digital transformation' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased text-secondary-900 bg-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
