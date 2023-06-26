const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const basePath = '/landing-page';

const nextConfiguration = {
  basePath,
  assetPrefix: `${basePath}/`,
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
