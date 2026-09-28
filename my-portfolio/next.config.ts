/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Generates static HTML/CSS/JS export
  images: {
    unoptimized: true, // Required for static exports on GitHub Pages
  },
};

export default nextConfig;