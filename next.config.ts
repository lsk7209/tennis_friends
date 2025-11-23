import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages 배포 설정
  // @cloudflare/next-on-pages 사용 시 output: 'export'는 제거
  // next-on-pages가 자체적으로 빌드 출력을 처리함
  ...(process.env.CF_PAGES !== 'true' && {
    output: 'export', // GitHub Pages 등 다른 배포용
    distDir: 'out',
  }),
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  // GitHub Pages 배포용 설정
  ...(process.env.GITHUB_ACTIONS && process.env.GITHUB_PAGES === 'true' && {
    basePath: '/tennis_friends',
    assetPrefix: '/tennis_friends',
  }),
  
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
  
  // 이미지 최적화 (정적 export에서는 제한적)
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 압축
  compress: true,
  
  // 번들 분석기 (개발 시에만)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer'))({
          enabled: true,
        })
      );
      return config;
    },
  }),
  
  // 보안 헤더 (정적 export에서는 제한적, Cloudflare Pages에서는 wrangler.toml 또는 _headers 파일 사용)
  // Cloudflare Pages에서는 Functions에서 헤더를 설정하거나 _headers 파일 사용
  ...(process.env.CF_PAGES !== 'true' && {
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
  }),
};

export default nextConfig;
