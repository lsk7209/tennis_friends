'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function AdSense() {
  const pathname = usePathname();
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-3050601904412736';

  // 관리자 페이지에서는 광고를 로드하지 않음
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}