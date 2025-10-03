import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com",'lh3.googleusercontent.com','res.cloudinary.com'],
  },
  eslint: {
  ignoreDuringBuilds: true,
},
};



export default nextConfig;
