import type { Metadata } from 'next';
import { CompanyConstants } from '@constants';

export const aboutMetadata: Metadata = {
  title: 'About Rowad - Our Story, Mission & Core Values | Software Development Company',
  description:
    'Discover Rowad for Software Development - your trusted partner in digital transformation. Learn about our mission, vision, core values, and the team behind our innovative software solutions in Alexandria, Egypt.',
  keywords: [
    'about rowad',
    'rowad company',
    'rowad story',
    'software company alexandria',
    'software development team',
    'digital transformation egypt',
    'rowad mission',
    'rowad values',
    'tech company egypt',
    'software developers alexandria',
  ],
  openGraph: {
    title: 'About Rowad - Our Story, Mission & Core Values',
    description:
      'Discover Rowad for Software Development - your trusted partner in digital transformation. Learn about our mission, vision, and core values.',
    url: 'https://rowad.com/about',
    siteName: 'Rowad for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/RowadLogo/Rowad_Logo_Main.png',
        width: 1200,
        height: 630,
        alt: 'About Rowad - Software Development Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Rowad - Our Story & Mission',
    description:
      'Discover Rowad for Software Development - your trusted partner in digital transformation.',
    images: ['/images/RowadLogo/Rowad_Logo_Main.png'],
  },
  alternates: {
    canonical: 'https://rowad.com/about',
  },
};
