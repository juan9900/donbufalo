/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/bufalo",
        destination: "/",
        permanent: true,
      },
    ];
  },

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
