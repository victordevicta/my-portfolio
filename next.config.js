/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Works around a known Windows issue where webpack's persistent
      // filesystem cache intermittently fails to rename its temp pack
      // files (ENOENT), spamming the terminal with harmless errors.
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig
