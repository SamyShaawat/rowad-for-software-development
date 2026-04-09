/**
 * Image Paths Enum
 * All image paths - NEVER hardcode image paths
 */
export const ImagePaths = {
  GRID_PATTERN: '/images/grid-pattern.svg',
  HERO_BACKGROUND: '/images/hero-bg.jpg',
  LOGO: '/images/logo.svg',
  LOGO_WHITE: '/images/logo-white.svg',
  ICON_PLACEHOLDER: '/images/icon-placeholder.svg',
  TEAM_PLACEHOLDER: '/images/team-placeholder.jpg',
  CLIENT_LOGO_PLACEHOLDER: '/images/client-logo-placeholder.svg',
} as const;

export type ImageKey = keyof typeof ImagePaths;
