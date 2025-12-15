import { createMDX } from "fumadocs-mdx/next";

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx", "md"],
  outputFileTracingIncludes: {
    "/**" : ["components/phexarui/**/**"],
  },

  async headers() {
    return [
      {
        source: "/r/:path*",
        headers: [
          {
            key: "Cache-control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
       {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
