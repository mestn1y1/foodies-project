/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wzvuqmhpytzalrjmhwfd.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/meals/**",
      },
    ],
  },
};

module.exports = nextConfig;
