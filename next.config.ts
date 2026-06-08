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
      "date-fns",
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
  staticPageGenerationTimeout: 180,

  // URL 정규화 리다이렉트
  async redirects() {
    return [
      // no-www → www 정규화 (GSC 카니발리제이션 방지: 동일 URL이 두 호스트로 분산 인덱싱되는 문제)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tennisfrens.com" }],
        destination: "https://tennisfrens.com/:path*",
        permanent: true,
      },
      // Canonicalize the old misspelled Arthur Rinderknech slug.
      {
        source: "/players/arthur-landercknech",
        destination: "/players/arthur-rinderknech",
        permanent: true,
      },
    ];
  },

  // 보안 헤더
  async headers() {
    return [
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
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
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
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://www.googletagmanager.com https://www.google-analytics.com https://www.googletagservices.com https://www.googleadservices.com https://adservice.google.com https://adservice.google.co.kr; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; font-src 'self' https://cdn.jsdelivr.net https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://csi.gstatic.com https://cdn.jsdelivr.net https://*.supabase.co; frame-src https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://www.google.com;",
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
            value: "public, max-age=0, s-maxage=60, must-revalidate",
          },
        ],
      },
      {
        source: "/feed",
        headers: [
          {
            key: "Content-Type",
            value: "application/rss+xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=60, must-revalidate",
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
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/ai-index.json",
        headers: [
          {
            key: "Content-Type",
            value: "application/json; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600",
          },
        ],
      },
      {
        source: "/opensearch.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/opensearchdescription+xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=86400",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, s-maxage=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
