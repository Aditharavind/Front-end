import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://backend-m-evpd.onrender.com/api/:path*",
      },
      {
        source: "/uploads/:path*",
        destination: "https://backend-m-evpd.onrender.com/uploads/:path*",
      },
      {
        source: "/admin1448",
        destination: "https://backend-m-evpd.onrender.com/admin1448",
      },
      {
        source: "/admin1448/:path*",
        destination: "https://backend-m-evpd.onrender.com/admin1448/:path*",
      },
    ];
  },
};

export default nextConfig;
