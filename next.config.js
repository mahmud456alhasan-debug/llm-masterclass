/** @type {import('next').NextConfig} */
const nextConfig = {
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
