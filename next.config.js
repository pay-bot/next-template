// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/en',
        destination: '/en/index',
      },
      {
        source: '/id',
        destination: '/id/index',
      },
    ]
  },
}

module.exports = nextConfig
