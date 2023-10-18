const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/convert-distance-unit" : undefined,
};

const withPWA = require("next-pwa")({
  dest: "public",
  reloadOnOnline: false,
});

module.exports = withPWA(nextConfig);
