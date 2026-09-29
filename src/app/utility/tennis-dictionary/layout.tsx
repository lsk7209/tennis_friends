
import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com';

export const metadata: Metadata = {
    title: '테니스 용어 사전 | 필수 용어 완벽 정리',
    description: '러브, 듀스, 에이스부터 서브 앤 발리까지. 테니스 경기에서 자주 쓰는 용어를 쉽고 자세하게 설명해드립니다.',
    alternates: {
        canonical: `${siteUrl}/utility/tennis-dictionary`,
    },
    openGraph: {
        title: '테니스 용어 사전 | 필수 용어 완벽 정리',
        description: '러브, 듀스, 에이스부터 서브 앤 발리까지. 테니스 경기에서 자주 쓰는 용어를 쉽고 자세하게 설명해드립니다.',
        url: `${siteUrl}/utility/tennis-dictionary`,
        type: 'article',
    },
};

export default function TennisDictionaryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
