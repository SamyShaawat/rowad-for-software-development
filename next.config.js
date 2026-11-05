const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/**
 * The dev server and the production build used to share .next. A build deletes and rewrites it,
 * which broke a dev server running at the same time (ENOENT ... _buildManifest.js.tmp). The dev
 * server now has its own folder; the build keeps .next for its work and exports to build/.
 *
 * @param {string} phase
 * @returns {import('next').NextConfig}
 */
module.exports = (phase) => ({
  // Static export for cPanel deployment (generates build/ directory)
  // Note: API routes are NOT included in static export.
  output: 'export',
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : 'build',
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
});
