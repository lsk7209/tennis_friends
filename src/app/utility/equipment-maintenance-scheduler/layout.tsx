import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com';

export const metadata: Metadata = {
    title: '장비 관리 스케줄러 | 맞춤 교체 주기 자동 계산',
    description: '라켓, 스트링, 오버그립, 테니스화의 사용 빈도에 따른 맞춤 관리 스케줄을 자동으로 생성합니다. 장비 컨디션을 최적으로 유지하세요.',
    keywords: ['테니스 장비 관리', '스트링 교체 주기', '오버그립 교체', '테니스화 관리', '라켓 점검'],
    alternates: {
        canonical: `${siteUrl}/utility/equipment-maintenance-scheduler`,
    },
    openGraph: {
        title: '장비 관리 스케줄러 | 맞춤 교체 주기 자동 계산',
        description: '라켓, 스트링, 오버그립, 테니스화의 사용 빈도에 따른 맞춤 관리 스케줄을 자동으로 생성합니다.',
        url: `${siteUrl}/utility/equipment-maintenance-scheduler`,
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '장비 관리 스케줄러 | TennisFriends',
        description: '라켓, 스트링, 오버그립, 테니스화의 사용 빈도에 따른 맞춤 관리 스케줄을 자동으로 생성합니다.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function EquipmentMaintenanceSchedulerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
