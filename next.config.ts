import type { NextConfig } from "next";


const RECLAMOS_APP_URL = "https://sugerencias-cantera.vercel.app";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/reclamos",
        destination: `${RECLAMOS_APP_URL}/reclamos`,
      },
      {
        source: "/reclamos/:path*",
        destination: `${RECLAMOS_APP_URL}/reclamos/:path*`,
      },
    ];
  },
};

export default nextConfig;
