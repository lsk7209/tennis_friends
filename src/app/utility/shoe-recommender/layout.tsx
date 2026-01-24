import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI 테니스화 추천기 | 나에게 딱 맞는 신발 찾기',
    description: '발볼 너비, 플레이 스타일, 선호 기능을 분석하여 당신에게 최적화된 테니스화를 추천해드립니다. 아식스, 나이키, 아디다스 등 주요 브랜드 비교.',
    openGraph: {
        title: 'AI 테니스화 추천기 | 나에게 딱 맞는 신발 찾기',
        description: '발볼 너비, 플레이 스타일, 선호 기능을 분석하여 당신에게 최적화된 테니스화를 추천해드립니다.',
        url: 'https://tennisfriends.co.kr/utility/shoe-recommender',
        type: 'website',
    },
};

export default function ShoeRecommenderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
