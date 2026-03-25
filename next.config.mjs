/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   //<-- COMENTA ESTO
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;