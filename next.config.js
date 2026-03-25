/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  distDir: process.env.NODE_ENV === 'production' ? 'build' : '.next',
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
  trailingSlash: process.env.NODE_ENV === 'production',
  poweredByHeader: false,
};

module.exports = nextConfig;
