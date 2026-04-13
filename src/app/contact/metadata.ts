import type { Metadata } from 'next';
import { CompanyConstants } from '@constants';

export const contactMetadata: Metadata = {
  title: 'Contact Us - Get a Free Consultation | Rowad Software Development',
  description:
    'Get in touch with Rowad for Software Development. Request a free consultation for your web development, mobile app, AI chatbot, digital marketing, or web hosting project. Located in Alexandria, Egypt - serving clients worldwide.',
  keywords: [
    'contact rowad',
    'rowad consultation',
    'software development quote',
    'web development quote',
    'contact software company',
    'rowad alexandria',
    'software company contact',
    'get website quote',
    'mobile app development quote',
    'web hosting inquiry',
    'digital marketing consultation',
  ],
  openGraph: {
    title: 'Contact Us - Get a Free Consultation',
    description:
      'Get in touch with Rowad for Software Development. Request a free consultation for your next digital project.',
    url: 'https://rowad.com/contact',
    siteName: 'Rowad for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/RowadLogo/Rowad_Logo_Main.png',
        width: 1200,
        height: 630,
        alt: 'Contact Rowad for Software Development',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Rowad - Get a Free Consultation',
    description:
      'Get in touch with Rowad for your next web development, mobile app, or digital project.',
    images: ['/images/RowadLogo/Rowad_Logo_Main.png'],
  },
  alternates: {
    canonical: 'https://rowad.com/contact',
  },
};
