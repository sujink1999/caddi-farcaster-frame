/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/jaimin",
        destination: "https://warpcast.com/jaimin",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
