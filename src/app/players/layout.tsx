import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '테니스 선수 프로필 및 랭킹 분석 | Tennis Friends',
    description: 'ATP 및 WTA 테니스 선수들의 상세 프로필, 경기 스타일, 최신 랭킹 및 전적 정보를 확인하세요.',
    alternates: {
        canonical: 'https://www.tennisfrens.com/players',
    },
    openGraph: {
        title: '테니스 선수 프로필 및 랭킹 분석 | Tennis Friends',
        description: 'ATP 및 WTA 테니스 선수들의 상세 프로필, 경기 스타일, 최신 랭킹 및 전적 정보를 확인하세요.',
        url: 'https://www.tennisfrens.com/players',
    }
};

export default function PlayersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
