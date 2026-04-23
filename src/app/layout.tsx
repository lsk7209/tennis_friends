import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import { Toaster } from "@/components/ui/sonner";
import Tracking from "@/components/Tracking";
import AdSense from "@/components/AdSense";
import GAProvider from "@/components/analytics/GAProvider";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";
import {
  DEFAULT_CONTACT_EMAIL,
  DEFAULT_PLACENAME,
  DEFAULT_REGION,
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_LANGUAGE,
  DEFAULT_SITE_LOCALE,
  SITE_NAME,
  getAbsoluteUrl,
  getSiteUrl,
} from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#34D399",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - 테니스 실력 향상 플랫폼`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_SITE_DESCRIPTION,
  keywords: [
    "테니스",
    "NTRP",
    "테니스 테스트",
    "테니스 전략",
    "테니스 훈련",
    "테니스 장비",
    "테니스 블로그",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(getSiteUrl()),
  alternates: {
    canonical: getAbsoluteUrl("/"),
    languages: {
      "ko-KR": getAbsoluteUrl("/"),
    },
    types: {
      "application/rss+xml": "/rss.xml",
    },
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
    title: `${SITE_NAME} - 테니스 실력 향상 플랫폼`,
    description: DEFAULT_SITE_DESCRIPTION,
    url: getAbsoluteUrl("/"),
    siteName: SITE_NAME,
    locale: DEFAULT_SITE_LOCALE,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} 대표 이미지`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - 테니스 실력 향상 플랫폼`,
    description: DEFAULT_SITE_DESCRIPTION,
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": DEFAULT_REGION,
    "geo.placename": DEFAULT_PLACENAME,
    "geo.position": "37.5665;126.9780",
    ICBM: "37.5665, 126.9780",
    language: DEFAULT_SITE_LANGUAGE,
    "contact:email": DEFAULT_CONTACT_EMAIL,
    NaverBot: "index, follow, all",
    Yeti: "index, follow, all",
    DaumBot: "index, follow, all",
    Daumoa: "index, follow, all",
    GPTBot: "index, follow",
    "ChatGPT-User": "index, follow",
    "Google-Extended": "index, follow",
    "anthropic-ai": "index, follow",
    "Claude-Web": "index, follow",
    PerplexityBot: "index, follow",
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
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
          media="print"
          // @ts-expect-error onload attr for non-blocking font load
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body className="bg-gradient-to-br from-gray-50 via-white to-gray-100 font-display text-gray-900 antialiased dark:from-gray-950 dark:via-gray-900 dark:to-black dark:text-gray-100">
        <OrganizationSchema />
        <WebSiteSchema />
        <div className="group/design-root relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            <main className="flex-1 pb-16 md:pb-0">{children}</main>
            <Footer />
            <MobileNav />
          </div>
        </div>
        <Toaster />
        <GAProvider />
        <Tracking />
        <AdSense />
      </body>
    </html>
  );
}
