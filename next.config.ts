import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project images live in /public/projects. Add a host here if real
    // screenshots are served from a CDN or image service instead.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
