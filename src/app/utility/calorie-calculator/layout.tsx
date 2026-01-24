import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '테니스 칼로리 계산기 | 나만의 맞춤 소모량 확인',
    description: '단식/복식 여부, 플레이 시간, 운동 강도를 고려하여 테니스 경기 중 소모한 정확한 칼로리를 계산해드립니다.',
    openGraph: {
        title: '테니스 칼로리 계산기 | 나만의 맞춤 소모량 확인',
        description: '단식/복식 여부, 플레이 시간, 운동 강도를 고려하여 테니스 경기 중 소모한 정확한 칼로리를 계산해드립니다.',
        url: 'https://tennisfriends.co.kr/utility/calorie-calculator',
        type: 'website',
    },
};

export default function CalorieCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
