/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/donate-now',
        destination: '/donate',
        permanent: true,
      },
      {
        source: '/apply-assistance',
        destination: '/guest-portal',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://www.google-analytics.com https://cdn.acsbapp.com https://widgets.givebutter.com https://givebutter.com https://*.givebutter.com https://givebuttercdn.com https://*.givebuttercdn.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://widgets.givebutter.com https://givebutter.com https://*.givebutter.com https://givebuttercdn.com https://*.givebuttercdn.com",
              "font-src 'self' https://fonts.gstatic.com data: https://givebuttercdn.com https://*.givebuttercdn.com",
              "img-src 'self' data: https: blob: https://cdn.sanity.io https://givebutter.com https://*.givebutter.com https://givebuttercdn.com",
              "connect-src 'self' https://www.google.com https://www.google-analytics.com https://vitals.vercel-insights.com https://*.vercel-scripts.com https://*.sanity.io https://*.api.sanity.io https://widgets.givebutter.com https://givebutter.com https://*.givebutter.com https://givebuttercdn.com https://*.givebuttercdn.com",
              "frame-src 'self' https://www.google.com https://givebutter.com https://*.givebutter.com",
              "worker-src 'self' blob: https://www.google.com",
            ].join('; '),
          },
        ],
      },
    ]
  },
};
