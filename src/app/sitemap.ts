import { MetadataRoute } from 'next';
import { RouteConstants } from '@constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rowad.com';

  return [
    {
      url: `${baseUrl}${RouteConstants.HOME}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}${RouteConstants.SERVICES}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}${RouteConstants.ABOUT}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}${RouteConstants.CLIENTS}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}${RouteConstants.CONTACT}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
