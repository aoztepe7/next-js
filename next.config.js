/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    outputStandalone: true
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en'
      },
      {
        source: '/products',
        destination: '/en/products'
      },
      {
        source: '/products/:slug*',
        destination: '/en/products/:slug*'
      },
    ];
  },
}

module.exports = nextConfig
