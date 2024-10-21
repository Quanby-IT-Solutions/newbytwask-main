/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.builder.io', 's3-alpha-sig.figma.com'],  // Add the external domain here
  },
};



export default nextConfig;
