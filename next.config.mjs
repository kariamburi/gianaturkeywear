const nextConfig = {
  images: {
    domains: [
      "utfs.io",
      "img.clerk.com",
      "firebasestorage.googleapis.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;