
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

/**
 * BreadcrumbList 스키마 컴포넌트
 * 검색 결과에 탐색 경로(Breadcrumb)를 표시하도록 돕습니다.
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const siteUrl = SITE_URL;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.item.startsWith('http') ? item.item : `${siteUrl}${item.item}`,
        })),
    };

    return <JsonLd data={schema} />;
}
