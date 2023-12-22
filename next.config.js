const headers = require("./headers.ts");
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
};

module.exports = nextConfig;
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   nextConfig,
// });
