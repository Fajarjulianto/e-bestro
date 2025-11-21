import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dzgtfooivmtjsteqttrn.supabase.co",
        pathname: "/storage/v1/object/sign/profile-picture/avatars/**",
      },
    ],
  },
  // images: {
  //   domains: ["dzgtfooivmtjsteqttrn.supabase.co"],
  // },
  webpack: (config) => {
    /**
     * Configure Webpack to ignore the 'canvas' module.
     * This is necessary because pdfjs-dist (used by @react-pdf-viewer)
     * includes a server-side dependency 'canvas' which contains binary files (.node).
     * These binaries cannot be bundled for the client-side, causing build errors.
     */
    config.resolve.alias.canvas = false;

    // Return the modified config
    return config;
  },
};

export default nextConfig;
