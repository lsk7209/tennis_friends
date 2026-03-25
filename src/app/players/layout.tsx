import { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
    title: '테니스 선수 프로필 및 랭킹 분석 | Tennis Friends',
    description: 'ATP 및 WTA 테니스 선수들의 상세 프로필, 경기 스타일, 최신 랭킹 및 전적 정보를 확인하세요.',
    alternates: {
        canonical: `${getSiteUrl()}/players`,
    },
    openGraph: {
        title: '테니스 선수 프로필 및 랭킹 분석 | Tennis Friends',
        description: 'ATP 및 WTA 테니스 선수들의 상세 프로필, 경기 스타일, 최신 랭킹 및 전적 정보를 확인하세요.',
        url: `${getSiteUrl()}/players`,
        images: [{
            url: `${getSiteUrl()}/opengraph-image`,
            width: 1200,
            height: 630,
            alt: '테니스 선수 프로필 - TennisFriends',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: '테니스 선수 프로필 및 랭킹 분석 | Tennis Friends',
        description: 'ATP 및 WTA 테니스 선수들의 상세 프로필, 경기 스타일, 최신 랭킹 및 전적 정보.',
        images: [`${getSiteUrl()}/opengraph-image`],
    },
};

export default function PlayersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
