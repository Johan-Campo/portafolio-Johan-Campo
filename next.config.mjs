/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 🔥 CLAVE
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
