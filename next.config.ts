import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 환경에서는 기본값(serverless) 사용
  // GitHub Pages 배포 시에만 export 사용
  ...(process.env.GITHUB_ACTIONS && process.env.GITHUB_PAGES === 'true' ? {
    output: 'export',
    distDir: 'out',
    basePath: '/tennis_friends',
    assetPrefix: '/tennis_friends',
    images: {
      unoptimized: true,
    }
  } : {
    // Vercel/General Optimization
    images: {
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  }),

  trailingSlash: false, // Vercel 기본값 권장
  
  // 성능 최적화
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      'recharts',
    ],
  },
  
  // 컴파일러 옵션
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // 압축
  compress: true,
  
  // 보안 헤더
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;