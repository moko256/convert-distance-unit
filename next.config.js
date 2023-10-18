const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/convert-distance-unit" : undefined,
};

module.exports = nextConfig;
