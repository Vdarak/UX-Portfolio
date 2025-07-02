/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  // Required to ensure assets use relative paths
  assetPrefix: './',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
