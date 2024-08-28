const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx',"md", 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  basePath: '/istenith.github.io',
  assetPrefix: '/istenith.github.io/',
}
 
module.exports = withMDX(nextConfig)