
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

const siteUrl = SITE_URL;

export const metadata: Metadata = {
    title: '테니스 용어 사전 | 50+ 필수 용어 완벽 정리',
    description: '러브, 듀스, 에이스부터 서브 앤 발리까지. 초보자가 꼭 알아야 할 테니스 용어 50가지를 쉽고 자세하게 설명해드립니다.',
    alternates: {
        canonical: `${siteUrl}/utility/tennis-dictionary`,
    },
    openGraph: {
        title: '테니스 용어 사전 | 50+ 필수 용어 완벽 정리',
        description: '러브, 듀스, 에이스부터 서브 앤 발리까지. 초보자가 꼭 알아야 할 테니스 용어 50가지를 쉽고 자세하게 설명해드립니다.',
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
