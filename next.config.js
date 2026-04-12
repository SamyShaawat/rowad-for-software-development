/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for cPanel deployment (generates build/ directory)
  // Note: API routes are NOT included in static export.
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
};

module.exports = nextConfig;
