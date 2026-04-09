/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for cPanel deployment (generates ./out directory)
  // Note: API routes are NOT included in static export.
  // Contact form uses client-side email service via EmailJS/Formspree or similar.
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? 'build' : '.next',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for static export
  },
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
