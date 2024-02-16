/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/jaimin",
        destination: "https://docs.farcaster.xyz/reference/frames/spec",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
