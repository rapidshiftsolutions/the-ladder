/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core settings
  reactStrictMode: true,
  
  // PWA Configuration
  headers: async () => [
    {
      source: '/sw.js',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, must-revalidate',
        },
        {
          key: 'Service-Worker-Allowed',
          value: '/',
        },
      ],
    },
    {
      source: '/site.webmanifest',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/manifest+json',
        },
      ],
    },
  ],
  
  // Development-specific optimizations
  ...(process.env.NODE_ENV === 'development' ? {
    // Improved development server settings
    experimental: {
      optimizeCss: true,
    },
    
    // Server external packages setting (moved from experimental)
    serverExternalPackages: [],
    
    // Enhanced memory management
    onDemandEntries: {
      maxInactiveAge: 60 * 1000, // Keep pages in memory longer (60s)
      pagesBufferLength: 10,     // More pages in buffer
    },
    
    // Better file handling for various content types
    async rewrites() {
      return [
        {
          source: '/documents/:path*',
          destination: '/api/serve-document/:path*',
        },
        {
          source: '/videos/:path*',
          destination: '/api/serve-video/:path*',
        },
      ];
    },
    
    // Better webpack config for file loading
    webpack: (config) => {
      // Handle file types that might cause issues in dev
      config.module.rules.push({
        test: /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|mp4|webm|mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      });
      return config;
    },
  } : {}),
  
  // Shared settings (dev and prod)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days for better caching
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1280, 1600],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', '@use-gesture/react', '@react-spring/web'],
  },
  
  // Better headers for development
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/documents/:path*',
        headers: [
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
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },
};

export default nextConfig;