import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import Tracking from "@/components/Tracking";
import AdSense from "@/components/AdSense";

// 폰트 최적화 - Inter만 next/font로 로드, Pretendard는 CSS에서 로드
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "TennisFriends - 당신의 테니스 파트너",
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
  metadataBase: new URL("https://www.tennisfrens.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TennisFriends - 당신의 테니스 파트너",
    description: "데이터로 똑똑하게, 테니스를 즐겁게. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것.",
    url: "https://tennisfriends.co.kr",
    siteName: "TennisFriends",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TennisFriends - 당신의 테니스 파트너",
    description: "데이터로 똑똑하게, 테니스를 즐겁게. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것.",
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
      </head>
      <body className={`bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black font-display text-gray-900 dark:text-gray-100 antialiased`}>
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
