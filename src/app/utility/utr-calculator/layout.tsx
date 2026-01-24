import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UTR 레이팅 계산기 | 나의 테니스 실력 점수는?',
    description: '경기 결과를 입력하면 예상 UTR(Universal Tennis Rating)을 계산해드립니다. 전 세계 표준 테니스 레이팅 시스템으로 실력을 객관적으로 측정하세요.',
    openGraph: {
        title: 'UTR 레이팅 계산기 | 나의 테니스 실력 점수는?',
        description: '경기 결과를 입력하면 예상 UTR을 계산해드립니다. 전 세계 500만+ 선수가 사용하는 표준 레이팅 시스템.',
        url: 'https://tennisfriends.co.kr/utility/utr-calculator',
        type: 'website',
    },
};

export default function UTRCalculatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
