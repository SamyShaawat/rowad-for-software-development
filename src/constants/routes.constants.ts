/**
 * Route Constants
 * All application routes - NEVER hardcode paths
 */
export const RouteConstants = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CLIENTS: '/clients',
  CONTACT: '/contact',
  ID_PARAM: ':id',
  SLUG_PARAM: ':slug',
  API: '/api',
  API_CONTACT: '/api/contact',
} as const;

export type RouteKey = keyof typeof RouteConstants;
