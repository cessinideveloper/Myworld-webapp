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
        name: "app",

        filename: "static/chunks/remoteEntry.js",
        remotes: {
          explore: `explore@http://localhost:3002/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          home: `home@http://localhost:3003/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          notifications: `notifications@http://localhost:3004/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          profile: `profile@http://localhost:3005/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          search: `search@http://localhost:3006/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          setting: `setting@http://localhost:3007/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
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