import JsonLd from '@/components/JsonLd';
import { getSiteUrl } from '@/lib/site';

type JsonObject = Record<string, unknown>;

interface ProfilePageSchemaProps {
    name: string;
    description: string;
    image: string;
    dateCreated?: string;
    dateModified?: string;
    mainEntity: {
        '@type': 'Person';
        name: string;
        alternateName?: string;
        description?: string;
        image?: string;
        jobTitle?: string;
        sameAs?: string[];
        [key: string]: unknown;
    };
    breadcrumb?: JsonObject | JsonObject[];
}

export default function ProfilePageSchema({
    name,
    description,
    image,
    dateCreated,
    dateModified,
    mainEntity,
    breadcrumb
}: ProfilePageSchemaProps) {
    const siteUrl = getSiteUrl();
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: name,
        description: description,
        image: imageUrl,
        ...(dateCreated && { dateCreated }),
        ...(dateModified && { dateModified }),
        mainEntity: {
            ...mainEntity,
            image: mainEntity.image?.startsWith('http') ? mainEntity.image : `${siteUrl}${mainEntity.image}`
        },
        ...(breadcrumb && { breadcrumb })
    };

    return <JsonLd data={schema} />;
}
