/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.zigsapages.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
