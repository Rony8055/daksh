/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["sfo3.digitaloceanspaces.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-daksh.sfo3.digitaloceanspaces.com",
      },
    ],

  },
};

module.exports = nextConfig;
