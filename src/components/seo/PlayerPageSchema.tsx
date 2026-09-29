import JsonLd from '@/components/JsonLd';
import { getSiteUrl } from '@/lib/site';

interface PlayerPageSchemaProps {
    /** Canonical absolute URL of the player page. */
    url: string;
    name: string;
    description: string;
    /** Only a real player photo; placeholders must not be passed (TF-15). */
    image?: string;
    dateModified?: string;
    person: {
        name: string;
        alternateName?: string;
        nationality?: string;
        sameAs?: string[];
    };
}

function toAbsoluteUrl(siteUrl: string, value: string): string {
    return value.startsWith('http') ? value : `${siteUrl}${value}`;
}

/**
 * Editorial page about a professional player.
 *
 * Google's ProfilePage feature targets profiles of people affiliated with the site
 * (creators, members). Player pages are third-party informational articles, so they
 * are modeled as a WebPage `about` a Person. Breadcrumbs are emitted once by
 * BreadcrumbSchema and are intentionally not duplicated here.
 */
export default function PlayerPageSchema({
    url,
    name,
    description,
    image,
    dateModified,
    person,
}: PlayerPageSchemaProps) {
    const siteUrl = getSiteUrl();
    const imageUrl = image ? toAbsoluteUrl(siteUrl, image) : undefined;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: 'ko-KR',
        isPartOf: { '@id': `${siteUrl}/#website` },
        publisher: { '@id': `${siteUrl}/#organization` },
        ...(dateModified && { dateModified }),
        ...(imageUrl && { primaryImageOfPage: imageUrl }),
        about: {
            '@type': 'Person',
            '@id': `${url}#person`,
            name: person.name,
            ...(person.alternateName && { alternateName: person.alternateName }),
            ...(imageUrl && { image: imageUrl }),
            ...(person.nationality && {
                nationality: { '@type': 'Country', name: person.nationality },
            }),
            jobTitle: 'Professional Tennis Player',
            ...(person.sameAs?.length && { sameAs: person.sameAs }),
        },
    };

    return <JsonLd data={schema} />;
}
