/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  basePath: '/Pau-Website',
  assetPrefix: '/Pau-Website/',
}

module.exports = nextConfig