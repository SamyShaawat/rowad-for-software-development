import type { Metadata } from 'next';
import { CompanyConstants } from '@constants';

export const clientsMetadata: Metadata = {
  title: 'Our Clients & Success Stories - Trusted by Industry Leaders | Rowad',
  description:
    'See the businesses and industry leaders that trust Rowad for Software Development. Discover how our web development, mobile apps, and digital solutions have driven success for clients across Egypt and the Middle East.',
  keywords: [
    'rowad clients',
    'rowad success stories',
    'rowad portfolio',
    'rowad case studies',
    'trusted software company',
    'software development testimonials',
    'client success egypt',
    'digital transformation success',
    'best software company egypt',
    'rowad partners',
  ],
  openGraph: {
    title: 'Our Clients & Success Stories - Trusted by Industry Leaders',
    description:
      'See the businesses and industry leaders that trust Rowad for Software Development for web development, mobile apps, and digital solutions.',
    url: 'https://rowad.com/clients',
    siteName: 'Rowad for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/RowadLogo/Rowad_Logo_Main.png',
        width: 1200,
        height: 630,
        alt: 'Rowad Clients and Success Stories',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients & Success Stories | Rowad',
    description:
      'Discover the industry leaders that trust Rowad for their digital transformation.',
    images: ['/images/RowadLogo/Rowad_Logo_Main.png'],
  },
  alternates: {
    canonical: 'https://rowad.com/clients',
  },
};
