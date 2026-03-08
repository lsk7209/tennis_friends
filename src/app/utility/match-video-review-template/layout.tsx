import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com';

export const metadata: Metadata = {
    title: '경기 영상 복기 템플릿 | 체계적 경기 분석 체크리스트',
    description: '서브, 리턴, 랠리, 네트 플레이, 멘탈까지 4가지 카테고리로 경기를 구조적으로 복기하는 인터랙티브 체크리스트입니다.',
    keywords: ['경기 영상 분석', '테니스 복기', '전술 분석', '경기 체크리스트', '테니스 리뷰'],
    alternates: {
        canonical: `${siteUrl}/utility/match-video-review-template`,
    },
    openGraph: {
        title: '경기 영상 복기 템플릿 | 체계적 경기 분석 체크리스트',
        description: '서브, 리턴, 랠리, 네트 플레이, 멘탈까지 4가지 카테고리로 경기를 구조적으로 복기하는 인터랙티브 체크리스트입니다.',
        url: `${siteUrl}/utility/match-video-review-template`,
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '경기 영상 복기 템플릿 | TennisFriends',
        description: '서브, 리턴, 랠리, 네트 플레이, 멘탈까지 4가지 카테고리로 경기를 구조적으로 복기합니다.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function MatchVideoReviewTemplateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
