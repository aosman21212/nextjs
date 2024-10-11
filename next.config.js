/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  images: {
    domains: ["localhost", "https://img.clerk.com", "img.clerk.com"],
  },
  i18n,  // Add this line
};

module.exports = nextConfig;
