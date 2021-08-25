const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  responseStrictMode: false,
};

module.exports = withPlugins([[withImages]], nextConfig);
