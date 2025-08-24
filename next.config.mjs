/** @type {import('next').NextConfig} */
import imageConfig from './image-config.js';

const nextConfig = {
  // Image optimization
  images: {
    ...imageConfig.images,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Core optimizations
  compress: true,
  reactStrictMode: true,
  
  // Support for PDFs, videos, and other document types
  async rewrites() {
    return [
      {
        source: '/documents/:path*',
        destination: '/api/serve-document/:path*',
      },
    ];
  },
  
  // Allow PDFs and other file types
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/OptimizedImages/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800',
          },
        ],
      },
      {
        source: '/documents/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Content-Disposition',
            value: 'inline',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    largePageDataBytes: 128 * 1000, // Increase page data size limit
  },
  
  // Prevent false prefetching
  skipTrailingSlashRedirect: false,
  
  // Security headers with PDF/media support
  poweredByHeader: false,
  
  // Fix development
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://localhost:8888',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8888',
  ],
  
  // Build optimization
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
    tsconfigPath: 'jsconfig.json',
  },
  
  staticPageGenerationTimeout: 180,
  
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;