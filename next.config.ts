import type { NextConfig } from "next";

const isGitHubPages =
  process.env.GITHUB_ACTIONS && process.env.GITHUB_PAGES === "true";
const isStaticExport = isGitHubPages || process.env.STATIC_EXPORT === "true";
const repositoryBasePath =
  process.env.GITHUB_PAGES_BASE_PATH ||
  (process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
    : "/tennis_friends");

const nextConfig: NextConfig = {
  // Vercel 환경에서는 기본값(serverless) 사용
  // GitHub Pages 배포 시에만 export 사용
  ...(isStaticExport
    ? {
        output: "export",
        distDir: "out",
        // basePath는 환경 변수로 설정 가능, 기본값은 저장소 이름 기반
        ...(isGitHubPages
          ? {
              basePath: repositoryBasePath,
              assetPrefix: repositoryBasePath,
            }
          : {}),
        images: {
          unoptimized: true,
        },
        trailingSlash: true, // GitHub Pages에서 정적 파일 접근 최적화
      }
    : {
        // Vercel/General Optimization
        images: {
          formats: ["image/avif", "image/webp"],
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        },
        trailingSlash: false, // Vercel 기본값 권장
      }),

  // 성능 최적화
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-icons",
      "@radix-ui/react-avatar",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-select",
      "@radix-ui/react-tabs",
      "recharts",
    ],
  },

  // 컴파일러 옵션
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  // 압축
  compress: true,

  // URL 정규화 리다이렉트
  async redirects() {
    return [
      // GSC 데이터 기준 올바른 철자 "Rinderknech" 로 들어오는 트래픽을
      // 기존 색인된 URL(arthur-landercknech)로 이관
      {
        source: "/players/arthur-rinderknech",
        destination: "/players/arthur-landercknech",
        permanent: true,
      },
    ];
  },

  // 보안 헤더
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Clear-Site-Data",
            value: '"cache", "storage"',
          },
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // 크롤러 최적화 헤더
          {
            key: "X-Robots-Tag",
            value:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
          // AI 크롤러 허용, 불필요한 기기 접근 차단
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; font-src 'self' https://cdn.jsdelivr.net; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.supabase.co; frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com;",
          },
        ],
      },
      // 사이트맵과 RSS는 캐싱 최적화
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/sitemap-naver.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/rss.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
