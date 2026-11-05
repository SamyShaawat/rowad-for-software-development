import type { Metadata } from 'next';
import { CompanyConstants } from '@constants';

export const aboutMetadata: Metadata = {
  title: 'About Rowad - A Software Team for Web, Mobile, ERP & AI',
  description:
    'Meet Rowad for Software Development, a software team in Alexandria, Egypt. We build and run websites, mobile apps, ERP systems, AI agents and chatbots for companies across the region.',
  keywords: [
    'about rowad',
    'rowad company',
    'rowad story',
    'software company alexandria',
    'software development team',
    'digital transformation egypt',
    'erp and ai software company egypt',
    'rowad mission',
    'rowad values',
    'tech company egypt',
    'software developers alexandria',
  ],
  openGraph: {
    title: 'About Rowad - A Software Team for Web, Mobile, ERP & AI',
    description:
      'Meet the Alexandria software team behind websites, mobile apps, ERP systems, AI agents and chatbots.',
    url: 'https://rowad.com/about',
    siteName: 'Rowad for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Rowad - Software Development Company',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Rowad - Our Story & Mission',
    description:
      'Discover Rowad for Software Development - your trusted partner in digital transformation.',
    images: ['/images/brand/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rowad.com/about',
  },
};
