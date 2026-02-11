import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-robots-tag',
            value: 'noindex',
          },
        ],
        has: [
          {
            type: 'host',
            value: 'api.proofio.app',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  // Optimize for Vercel
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
