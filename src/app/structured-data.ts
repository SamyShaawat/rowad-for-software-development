import { getDictionary } from '@/i18n';
import { AR_OG_IMAGE, AR_SITE_NAME, SITE_URL, pageUrl } from '@/i18n/seo';

/** English structured data, moved here unchanged from the English layout. */
export const englishJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://rowad.com/#organization',
      name: 'Rowad for Software Development',
      alternateName: ['Rowad', 'Rowad Software', 'Rowad Tech'],
      url: 'https://rowad.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rowad.com/images/brand/icon-512.png',
        width: 512,
        height: 512,
      },
      image: 'https://rowad.com/images/brand/og-image.jpg',
      description:
        'Rowad for Software Development is a software company in Alexandria, Egypt. We design, build and run custom software for businesses, from idea to production.',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 10,
        maxValue: 50,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '584 El-Horreya Road, Gleem',
        addressLocality: 'Alexandria',
        addressCountry: 'EG',
        addressRegion: 'Alexandria Governorate',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.2391,
        longitude: 29.9598,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+20-109-1539-396',
        contactType: 'customer service',
        email: 'info@rowad.com',
        availableLanguage: ['English', 'Arabic'],
      },
      sameAs: [
        'https://www.linkedin.com/company/rowad-for-software-development',
        'https://facebook.com/rowad',
        'https://wa.me/201091539396',
      ],
      knowsAbout: [
        'Web Development',
        'Mobile App Development',
        'AI Chatbot Development',
        'ERP Systems',
        'AI Agents',
        'Web Hosting',
        'Cloud Computing',
        'DevOps',
        'UI/UX Design',
        'E-Commerce Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rowad.com/#website',
      url: 'https://rowad.com',
      name: 'Rowad for Software Development',
      description:
        'Software company in Alexandria, Egypt designing, building and running custom software, from idea to production.',
      publisher: {
        '@id': 'https://rowad.com/#organization',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://rowad.com/#localbusiness',
      name: 'Rowad for Software Development',
      image: 'https://rowad.com/images/brand/og-image.jpg',
      url: 'https://rowad.com',
      telephone: '+20-109-1539-396',
      email: 'info@rowad.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '584 El-Horreya Road, Gleem',
        addressLocality: 'Alexandria',
        addressCountry: 'EG',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.2391,
        longitude: 29.9598,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'Egypt' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'UAE' },
        { '@type': 'Place', name: 'Middle East' },
        { '@type': 'Place', name: 'North Africa' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Development',
              description:
                'Custom, responsive website development using modern frameworks like Next.js and React.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development',
              description:
                'Native and cross-platform mobile application development for iOS and Android.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Chatbot Development',
              description:
                'Intelligent chatbot solutions powered by AI for customer engagement and automation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'ERP Systems',
              description:
                'ERP implementation, data migration, custom modules and integrations so sales, inventory, accounting, HR and production run on one system.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Agents',
              description:
                'AI agents that read your data, use your tools and complete real tasks, with human approval and monitoring.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web Hosting & Cloud',
              description:
                'Managed web hosting solutions with 99.9% uptime, SSL, and 24/7 monitoring.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://rowad.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://rowad.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About Us',
          item: 'https://rowad.com/about',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Services',
          item: 'https://rowad.com/services',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Clients',
          item: 'https://rowad.com/clients',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Contact',
          item: 'https://rowad.com/contact',
        },
      ],
    },
  ],
};

/**
 * Arabic structured data. Only facts that are on the site or confirmed by the owner:
 * name, address, phone, email, links, opening hours (Sun-Thu 09:00-17:00) and the six services
 * as described on the Arabic Services page. Founding year, staff size and price range are left
 * out because they are not confirmed.
 */
const arServices = getDictionary('ar').serviceItems;
const logo = {
  '@type': 'ImageObject',
  url: `${SITE_URL}/images/brand/icon-512.png`,
  width: 512,
  height: 512,
};
const arAddress = {
  '@type': 'PostalAddress',
  streetAddress: '584 طريق الحرية، جليم',
  addressLocality: 'الإسكندرية',
  addressRegion: 'محافظة الإسكندرية',
  addressCountry: 'EG',
};
const geo = { '@type': 'GeoCoordinates', latitude: 31.2391, longitude: 29.9598 };

export const arabicJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: AR_SITE_NAME,
      alternateName: ['Rowad for Software Development', 'Rowad', 'رواد'],
      url: pageUrl('ar', '/'),
      logo,
      image: `${SITE_URL}${AR_OG_IMAGE}`,
      description:
        'رواد لتطوير البرمجيات شركة برمجة في الإسكندرية، مصر. نصمم ونبني ونشغّل برمجيات مخصصة للشركات، من الفكرة حتى التشغيل.',
      address: arAddress,
      geo,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+20-109-1539-396',
        contactType: 'customer service',
        email: 'info@rowad.com',
        availableLanguage: ['Arabic', 'English'],
      },
      sameAs: [
        'https://www.linkedin.com/company/rowad-for-software-development',
        'https://facebook.com/rowad',
        'https://wa.me/201091539396',
      ],
      knowsAbout: [
        'تطوير المواقع',
        'تطبيقات الموبايل',
        'أنظمة ERP',
        'وكلاء الذكاء الاصطناعي',
        'الشات بوت',
        'الاستضافة وDevOps',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${pageUrl('ar', '/')}#website`,
      url: pageUrl('ar', '/'),
      name: AR_SITE_NAME,
      inLanguage: 'ar',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${pageUrl('ar', '/')}#localbusiness`,
      name: AR_SITE_NAME,
      image: `${SITE_URL}${AR_OG_IMAGE}`,
      url: pageUrl('ar', '/'),
      telephone: '+20-109-1539-396',
      email: 'info@rowad.com',
      address: arAddress,
      geo,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات رواد لتطوير البرمجيات',
        itemListElement: Object.values(arServices).map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name, description: s.text },
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl('ar', '/')}#breadcrumb`,
      itemListElement: [
        ['الرئيسية', '/'],
        ['من نحن', '/about'],
        ['خدماتنا', '/services'],
        ['عملاؤنا', '/clients'],
        ['تواصل معنا', '/contact'],
      ].map(([name, path], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: pageUrl('ar', path),
      })),
    },
  ],
};
