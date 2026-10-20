"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { flushAnalyticsQueue, getSafeCampaignParams, trackPageView } from "@/lib/analytics";

/**
 * GA4 공식 gtag.js 로더 + SPA 라우트 전환 시 페이지뷰 자동 전송.
 *
 * 환경변수 NEXT_PUBLIC_GA_MEASUREMENT_ID 가 비어있으면 렌더링하지 않음 (no-op).
 * 관리자 페이지에서는 트래킹 제외.
 */
type GAProviderProps = {
  measurementId?: string;
};

export default function GAProvider({ measurementId = "" }: GAProviderProps) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady || !measurementId || !pathname) return;
    if (pathname.startsWith("/admin")) return;
    trackPageView(pathname, measurementId);
    // Events fired before gtag.js was ready follow the page_view they belong to.
    flushAnalyticsQueue();
  }, [isReady, measurementId, pathname]);

  // 환경변수 없거나 관리자 페이지면 스크립트 자체를 로드하지 않음
  if (!measurementId) return null;
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        onReady={() => setIsReady(true)}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          var pageReferrer = '';
          try {
            var referrer = new URL(document.referrer);
            if (referrer.protocol === 'http:' || referrer.protocol === 'https:') {
              pageReferrer = referrer.origin + referrer.pathname;
            }
          } catch (_) {}
          var pageDefaults = {
            page_location: location.origin + location.pathname,
            page_referrer: pageReferrer,
            page_title: location.pathname === '/search' ? '사이트 검색' : document.title
          };
          gtag('set', pageDefaults);
          gtag('config', '${measurementId}', {
            ...pageDefaults,
            ...(${getSafeCampaignParams.toString()})(location.search),
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
