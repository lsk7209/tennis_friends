'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AdSense() {
  const pathname = usePathname();

  useEffect(() => {
    // 관리자 페이지에서는 광고를 로드하지 않음
    if (pathname?.startsWith('/admin')) {
      return;
    }

    // 이미 스크립트가 로드되었는지 확인
    if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
      return;
    }

    // Google AdSense 스크립트 동적 로드
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3050601904412736';
    script.crossOrigin = 'anonymous';

    // 스크립트를 head에 추가
    document.head.appendChild(script);

    // cleanup 함수
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [pathname]);

  // 관리자 페이지에서는 아무것도 렌더링하지 않음
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return null; // 실제 광고는 페이지 내에서 구현
}
