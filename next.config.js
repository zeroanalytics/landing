/** @type {import('next').NextConfig} */
const nextConfig = {
  // API routes enabled for Vercel serverless functions
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig