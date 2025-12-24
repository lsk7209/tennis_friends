import React from 'react';

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    // 유효한 항목만 필터링 (name이 비어있지 않고, item URL도 있어야 함)
    const validItems = items.filter(item => {
        const name = item.name?.trim();
        const itemUrl = item.item?.trim();
        return name && name.length > 0 && itemUrl && itemUrl.length > 0;
    });

    // 필터링 후 position 재조정
    const breadcrumbList = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: validItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name.trim(), // 공백 제거
            item: item.item.trim(), // URL 문자열
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />
    );
}
