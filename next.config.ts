import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'd3ltv46wqgpi1m.cloudfront.net',
      port: '',
      pathname: '/**'
    }]
  },
};

export default nextConfig;
