import React from 'react';

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const breadcrumbList = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items
            .filter(item => item.name && item.name.trim() !== '' && item.item) // 빈 값 필터링
            .map((item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name.trim(), // 공백 제거
                item: item.item, // URL 문자열
            })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />
    );
}
