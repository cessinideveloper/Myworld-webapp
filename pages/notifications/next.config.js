const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    //config.experiments = { topLevelAwait: true, layers: false };
    config.plugins.push(
      new NextFederationPlugin({
        name: "notifications",

        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./notificationsIndex": "./pages/index.js",
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;