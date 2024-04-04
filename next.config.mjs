/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mms-delivery.sitecorecloud.io",
        port: "",
        pathname: "/api/media/v2/delivery/**",
      },
    ],
  },
};

export default nextConfig;
