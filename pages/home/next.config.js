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
        name: "home",

        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./homeIndex": "./pages/index.js"
        },
        extraOptions: {
          exposePages: true,
        },
        remotes: {
          header: `header@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;