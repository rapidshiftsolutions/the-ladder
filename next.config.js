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
};
