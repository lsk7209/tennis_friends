import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

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
  metadataBase: new URL("https://tennisfriends.co.kr"),
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
        <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className={`bg-white dark:bg-slate-900 font-display text-gray-900 dark:text-slate-100 antialiased`}>
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
      </body>
    </html>
  );
}
