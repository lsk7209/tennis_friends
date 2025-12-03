import JsonLd from '@/components/JsonLd';

export interface FAQItem {
    q: string;
    a: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
            },
        })),
    };

    return <JsonLd data={schema} />;
}
