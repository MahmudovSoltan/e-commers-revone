import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['revonedemo.myshopify.com',"revone-demo.myshopify.com"],
    // və ya yeni format:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'revonedemo.myshopify.com',
        port: '',
        pathname: '/cdn/shop/files/**',
      },
    ],
  },
};

export default nextConfig;
