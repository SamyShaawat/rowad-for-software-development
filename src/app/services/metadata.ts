import type { Metadata } from 'next';
import { CompanyConstants } from '@constants';

export const servicesMetadata: Metadata = {
  title: 'Our Services - Web, Mobile Apps, ERP Systems, AI Agents & Chatbots',
  description:
    "Explore Rowad's comprehensive software development services: custom web development, mobile app development, AI chatbot solutions, digital marketing strategies, DevOps & deployment, and managed web hosting with 99.9% uptime guarantee.",
  keywords: [
    'rowad services',
    'web development services',
    'mobile app development services',
    'AI chatbot development',
    'digital marketing services',
    'web hosting services',
    'DevOps services egypt',
    'cloud hosting egypt',
    'custom software development',
    'responsive web design',
    'e-commerce development',
    'PWA development',
    'managed hosting',
    'software solutions egypt',
    'CI/CD pipeline',
    'deployment automation',
  ],
  openGraph: {
    title: 'Our Services - Web, Mobile Apps, ERP Systems, AI Agents & Chatbots',
    description:
      "Explore Rowad's comprehensive software development services: custom web development, mobile apps, AI chatbots, digital marketing, DevOps, and managed web hosting.",
    url: 'https://rowad.com/services',
    siteName: 'Rowad for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rowad Software Development Services',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Web, Mobile, AI & Hosting Solutions',
    description:
      "Explore Rowad's comprehensive software development services and digital solutions.",
    images: ['/images/brand/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://rowad.com/services',
  },
};
