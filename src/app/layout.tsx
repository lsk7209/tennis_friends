import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import Tracking from "@/components/Tracking";
import AdSense from "@/components/AdSense";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";

// 폰트 최적화 - Inter만 next/font로 로드, Pretendard는 CSS에서 로드
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
});

// Enhanced metadata with Naver and AI optimization
export const metadata: Metadata = {
  title: {
    default: "TennisFriends - 당신의 테니스 파트너",
    template: "%s | TennisFriends", // Ensures consistent title format
  },
  description: "데이터로 똑똑하게, 테니스를 즐겁게. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것.",
  keywords: ["테니스", "NTRP", "실력테스트", "스트링텐션", "부상예방", "테니스커뮤니티"],
  authors: [{ name: "TennisFriends" }],
  creator: "TennisFriends",
  publisher: "TennisFriends",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.tennisfrens.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
    other: {
      "naver-site-verification": process.env.NAVER_SITE_VERIFICATION || "",
      "daum-site-verification": process.env.DAUM_SITE_VERIFICATION || "",
      "msvalidate.01": process.env.BING_SITE_VERIFICATION || "",
    },
  },
  openGraph: {
    title: "TennisFriends - 당신의 테니스 파트너",
    description: "데이터로 똑똑하게, 테니스를 즐겁게. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.tennisfrens.com",
    siteName: "TennisFriends",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tennis Friends - 테니스 친구들",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TennisFriends - 당신의 테니스 파트너",
    description: "데이터로 똑똑하게, 테니스를 즐겁게. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        {/* Pretendard 폰트 최적화 로드 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
        {/* RSS 피드 - 구글, 네이버, 다음 모두 지원 */}
        <link rel="alternate" type="application/rss+xml" title="TennisFriends RSS Feed" href="/rss.xml" />
        
        {/* 검색 엔진 사이트 인증 */}
        {/* 네이버 서치어드바이저 인증 */}
        {process.env.NAVER_SITE_VERIFICATION && (
          <meta name="naver-site-verification" content={process.env.NAVER_SITE_VERIFICATION} />
        )}
        {/* 다음 검색 등록 인증 */}
        {process.env.DAUM_SITE_VERIFICATION && (
          <meta name="daum-site-verification" content={process.env.DAUM_SITE_VERIFICATION} />
        )}
        {/* Bing 웹마스터 도구 인증 */}
        {process.env.BING_SITE_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.BING_SITE_VERIFICATION} />
        )}
        
        {/* 네이버 검색 최적화 - 크롤러 허용 */}
        <meta name="NaverBot" content="index, follow, all" />
        <meta name="Yeti" content="index, follow, all" />
        
        {/* 다음 검색 최적화 - 크롤러 허용 */}
        <meta name="DaumBot" content="index, follow, all" />
        <meta name="Daumoa" content="index, follow, all" />
        {/* 모바일 최적화 */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* AI 크롤러 최적화 */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* AI 크롤러 허용 메타 태그 */}
        <meta name="GPTBot" content="index, follow" />
        <meta name="ChatGPT-User" content="index, follow" />
        <meta name="Google-Extended" content="index, follow" />
        <meta name="anthropic-ai" content="index, follow" />
        <meta name="Claude-Web" content="index, follow" />
        <meta name="PerplexityBot" content="index, follow" />
        {/* 구조화된 데이터 최적화 */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#34D399" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black font-display text-gray-900 dark:text-gray-100 antialiased`}>
        {/* 전역 구조화된 데이터 */}
        <OrganizationSchema />
        <WebSiteSchema />
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
        <Toaster />
        <Tracking />
        <AdSense />
      </body>
    </html>
  );
}
