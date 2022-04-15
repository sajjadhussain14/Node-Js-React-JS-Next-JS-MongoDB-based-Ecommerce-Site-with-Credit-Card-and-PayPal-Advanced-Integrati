/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};

module.exports = {
  swcMinify: true,

  generateBuildId: async () => {
    let BID = Array.from(Array(20), () =>
      Math.floor(Math.random() * 20).toString(20)
    ).join("");

    // You can, for example, get the latest git commit hash here
    return BID;
  },

  nextConfig,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,
  env: {
    URL: process.env.URL,
    COMPANY: process.env.COMPANY,
    PAYPAL_API_CLIENT: process.env.PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET: process.env.PAYPAL_API_SECRET,
    PAYPAL_API: process.env.PAYPAL_API,
    HOST: process.env.HOST,
  },

  images: {
    domains: [
      "cdn-cumulusdata.celerantwebservices.com",
      "template1.cumulusbetasites.com",
      "localhost",
      "localhost:3000",
      "cdn.jsdelivr.net",

      "celerantcms-com.server-icumulusdataserver9-vps.vps.ezhostingserver.com",
    ],
    formats: ["image/avif", "image/webp"],

    imageSizes: [16, 32],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=9999999999, must-revalidate stale-while-revalidate=9999999999'",
          },
        ],
      },
    ];
  },
};
