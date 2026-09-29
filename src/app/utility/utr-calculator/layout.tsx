import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UTR 레이팅 계산기 | 나의 테니스 실력 점수는?',
    description: '경기 결과를 입력하면 예상 UTR(Universal Tennis Rating)을 계산해드립니다. 전 세계 표준 테니스 레이팅 시스템으로 실력을 객관적으로 측정하세요.',
  alternates: { canonical: "https://tennisfrens.com/utility/utr-calculator" },
    openGraph: {
        title: 'UTR 레이팅 계산기 | 나의 테니스 실력 점수는?',
        description: '경기 결과를 입력하면 UTR 방식의 참고용 추정치를 계산합니다. 공식 UTR 레이팅이 아닙니다.',
        url: 'https://tennisfrens.com/utility/utr-calculator',
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
