import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost:3001", "another-allowed-domain.com", "dummyjson.com"],
  },
};

export default nextConfig;
