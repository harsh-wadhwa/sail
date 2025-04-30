import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // Replace with your image domain
  },
  env: {
    API_URL: process.env.API_URL || "http://localhost:3000/api", // Set your API URL
  },
};

export default nextConfig;
