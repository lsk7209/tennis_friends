import JsonLd from '@/components/JsonLd';

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
  featureList?: string[];
}

export default function SoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory = 'WebApplication',
  operatingSystem = 'Web',
  offers,
  aggregateRating,
  featureList = [],
}: SoftwareApplicationSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfriends.co.kr';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    url: url,
    applicationCategory: applicationCategory,
    operatingSystem: operatingSystem,
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    softwareVersion: '1.0',
    releaseNotes: '테니스 실력 향상을 위한 웹 애플리케이션',
    author: {
      '@type': 'Organization',
      name: 'TennisFriends',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TennisFriends',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price || '0',
        priceCurrency: offers.priceCurrency || 'KRW',
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        ratingCount: aggregateRating.ratingCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    ...(featureList.length > 0 && {
      featureList: featureList,
    }),
  };

  return <JsonLd data={schema} />;
}

