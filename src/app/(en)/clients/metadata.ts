import type { Metadata } from 'next';
import { alternatesFor } from '@/i18n/seo';
import { CompanyConstants } from '@constants';

export const clientsMetadata: Metadata = {
  title: 'Our Clients: Companies That Trust Rowad',
  description:
    'Logistics, maritime, legal, real estate and more: the companies in Egypt and the Gulf that run on software built by Rowad.',
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
    title: 'Our Clients: Companies That Trust Rowad',
    description:
      'See the businesses and industry leaders that trust Rowad for Software Development for web development, mobile apps, and digital solutions.',
    url: 'https://rowad.com/clients',
    siteName: 'Rowad for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rowad Clients and Success Stories',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients: Companies That Trust Rowad',
    description: 'Discover the industry leaders that trust Rowad for their digital transformation.',
    images: ['/images/brand/og-image.jpg'],
  },
  alternates: alternatesFor('/clients', 'en'),
};
