/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/jaimin",
        destination: "https://t.me/jaimin_building",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
