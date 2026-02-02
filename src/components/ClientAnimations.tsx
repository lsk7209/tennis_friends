'use client';

import dynamic from 'next/dynamic';

// 애니메이션 컴포넌트는 클라이언트 사이드에서만 로드 (SSR 최적화)
export const FadeIn = dynamic(
    () => import('@/components/ScrollAnimation').then(mod => mod.FadeIn),
    { ssr: false }
);

export const SlideUp = dynamic(
    () => import('@/components/ScrollAnimation').then(mod => mod.SlideUp),
    { ssr: false }
);

export const StaggeredAnimation = dynamic(
    () => import('@/components/ScrollAnimation').then(mod => mod.StaggeredAnimation),
    { ssr: false }
);

export const StaggeredItem = dynamic(
    () => import('@/components/ScrollAnimation').then(mod => mod.StaggeredItem),
    { ssr: false }
);
