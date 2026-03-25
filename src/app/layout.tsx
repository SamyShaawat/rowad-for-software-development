import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { CompanyConstants } from '@/constants';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
  twitter: { card: 'summary_large_image', title: CompanyConstants.FULL_NAME, description: 'Transforming Ideas into Reality' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased text-primary-900 bg-white">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
