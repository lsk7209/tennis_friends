import JsonLd from '@/components/JsonLd';

interface PersonSchemaProps {
    name: string;
    nameKo: string;
    description: string;
    image: string;
    nationality: string;
    birthDate?: string;
    height?: string;
    weight?: string;
    jobTitle: string; // "Professional Tennis Player"
    sameAs?: string[]; // Social media profiles, ATP profile URL, etc.
    award?: string[]; // Grand Slam titles, awards, etc.
    url: string; // Canonical URL of this page
}

export default function PersonSchema({
    name,
    nameKo,
    description,
    image,
    nationality,
    birthDate,
    height,
    weight,
    jobTitle,
    sameAs,
    award,
    url,
}: PersonSchemaProps) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfriends.co.kr';
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: name,
        alternateName: nameKo,
        description: description,
        image: imageUrl,
        nationality: {
            '@type': 'Country',
            name: nationality,
        },
        ...(birthDate && { birthDate }),
        ...(height && { height: { '@type': 'QuantitativeValue', value: height, unitText: 'cm' } }),
        ...(weight && { weight: { '@type': 'QuantitativeValue', value: weight, unitText: 'kg' } }),
        jobTitle: jobTitle,
        ...(sameAs && { sameAs }),
        ...(award && { award }),
        url: url,
    };

    return <JsonLd data={schema} />;
}
