import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stocknep.product-api.hamroyouthit.com",
        pathname: "/api/v1/**",
      },
    ],
  },
};

export default nextConfig;
