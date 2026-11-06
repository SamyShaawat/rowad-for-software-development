import localFont from 'next/font/local';

/**
 * IBM Plex, served from this repo (src/app/fonts) instead of Google Fonts.
 * The build used to download the fonts from Google, and when that download failed on the CI
 * runner ("An error occurred in next/font") no release could be built. Files: @fontsource
 * packages (ibm-plex-sans 5.2.8, ibm-plex-mono 5.2.7, ibm-plex-sans-arabic 5.2.9), woff2.
 *
 * next/font needs literal arguments, so the Latin face is listed twice: once for English pages
 * (--font-plex) and once as the Latin fallback behind the Arabic face on /ar (--font-plex-latin).
 */
export const plexSans = localFont({
  src: [
    { path: './fonts/ibm-plex-sans-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-plex',
  display: 'swap',
});

export const plexSansLatin = localFont({
  src: [
    { path: './fonts/ibm-plex-sans-latin-300-normal.woff2', weight: '300', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-plex-latin',
  display: 'swap',
});

export const plexMono = localFont({
  src: [
    { path: './fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const plexArabic = localFont({
  src: [
    {
      path: './fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ibm-plex-sans-arabic-arabic-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-plex-arabic',
  display: 'swap',
});
