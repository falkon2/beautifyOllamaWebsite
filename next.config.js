/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic React settings
  reactStrictMode: true,
  swcMinify: true,
  
  // Remove server-side headers
  poweredByHeader: false,
  
  // Client-side image optimization
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
    unoptimized: true,
  },
  
  // Disable server-side features
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Client-side optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Ensure client-side rendering
  experimental: {
    // Modern client-side features
    optimizePackageImports: ['@/components'],
  },
};


module.exports = nextConfig;
