/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
 
module.exports = require('next-optimized-classnames')({
  reactStrictMode: true,
  swcMinify: true,
})