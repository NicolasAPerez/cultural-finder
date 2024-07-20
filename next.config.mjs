/** @type {import('next').NextConfig} */
const path = import("path")

const nextConfig = {
  reactStrictMode: true,
  compress: false,
  output: 'standalone',
  experimental: {
    esmExternals: false, // optional
    externalDir: true, // optional
  }
};



export default nextConfig;
