"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, trackPageView } from "@/lib/analytics";

/**
 * GA4 공식 gtag.js 로더 + SPA 라우트 전환 시 페이지뷰 자동 전송.
 *
 * 환경변수 NEXT_PUBLIC_GA_MEASUREMENT_ID 가 비어있으면 렌더링하지 않음 (no-op).
 * 관리자 페이지에서는 트래킹 제외.
 */
export default function GAProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !pathname) return;
    if (pathname.startsWith("/admin")) return;
    trackPageView(pathname);
  }, [pathname]);

  // 환경변수 없거나 관리자 페이지면 스크립트 자체를 로드하지 않음
  if (!GA_MEASUREMENT_ID) return null;
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
