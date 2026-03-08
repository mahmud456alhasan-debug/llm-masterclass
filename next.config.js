/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable static optimization for the home page
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig
