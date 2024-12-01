const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [
      {
        hostname: "https:",
        hostname: "s3-us-west-2.amazonaws.com",
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
