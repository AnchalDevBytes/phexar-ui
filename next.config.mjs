import { createMDX } from "fumadocs-mdx/next";

const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
