import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com';

export const metadata: Metadata = {
    title: '테니스 칼로리 계산기 | 나만의 맞춤 소모량 확인',
    description: '단식/복식 여부, 플레이 시간, 운동 강도를 고려하여 테니스 경기 중 소모한 정확한 칼로리를 계산해드립니다. 다이어트와 체력 관리를 위한 필수 도구.',
    keywords: ['테니스 칼로리', '테니스 다이어트', '운동 칼로리 계산', '테니스 운동효과', '칼로리 소모량'],
    alternates: {
        canonical: `${siteUrl}/utility/calorie-calculator`,
    },
    openGraph: {
        title: '테니스 칼로리 계산기 | 나만의 맞춤 소모량 확인',
        description: '단식/복식 여부, 플레이 시간, 운동 강도를 고려하여 테니스 경기 중 소모한 정확한 칼로리를 계산해드립니다.',
        url: `${siteUrl}/utility/calorie-calculator`,
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '테니스 칼로리 계산기 | TennisFriends',
        description: '단식/복식 여부, 플레이 시간, 운동 강도를 고려하여 테니스 경기 중 소모한 정확한 칼로리를 계산해드립니다.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CalorieCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
