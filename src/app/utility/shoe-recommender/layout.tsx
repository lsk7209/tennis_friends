import { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
    title: 'AI 테니스화 추천기 | 나에게 딱 맞는 신발 찾기',
    description: '발볼 너비, 플레이 스타일, 선호 기능을 분석하여 당신에게 최적화된 테니스화를 추천해드립니다. 아식스, 나이키, 아디다스 등 주요 브랜드 비교.',
    keywords: ['테니스화 추천', '테니스 신발', '발볼 넓은 테니스화', 'Asics 테니스화', 'Nike 테니스화', '테니스화 선택 가이드'],
    alternates: {
        canonical: `${siteUrl}/utility/shoe-recommender`,
    },
    openGraph: {
        title: 'AI 테니스화 추천기 | 나에게 딱 맞는 신발 찾기',
        description: '발볼 너비, 플레이 스타일, 선호 기능을 분석하여 당신에게 최적화된 테니스화를 추천해드립니다.',
        url: `${siteUrl}/utility/shoe-recommender`,
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI 테니스화 추천기 | TennisFriends',
        description: '발볼 너비, 플레이 스타일, 선호 기능을 분석하여 당신에게 최적화된 테니스화를 추천해드립니다.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ShoeRecommenderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
