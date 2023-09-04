/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dl.airtable.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.zigsapages.com",
        port: "",
      },
      { protocol: "https", hostname: "dl.airtable.com", port: "" },
    ],
  },
};

module.exports = nextConfig;
