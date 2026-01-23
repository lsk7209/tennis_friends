import JsonLd from '@/components/JsonLd';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  sameAs?: string[];
}

export default function OrganizationSchema({
  name = 'TennisFriends',
  url,
  logo,
  description = '데이터로 똑똑하게, 테니스를 즐겁게. 테니스 실력 향상을 위한 모든 것을 제공합니다.',
  email = 'tennisfriends@tennisfriends.co.kr',
  sameAs = [],
}: OrganizationSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com';
  const logoUrl = logo || `${siteUrl}/logo.png`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: name,
    url: url || siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 512,
      height: 512,
    },
    description: description,
    ...(sameAs.length > 0 && { sameAs: sameAs }),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: email,
      availableLanguage: ['Korean', 'English'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Korea',
    },
  };

  return <JsonLd data={schema} />;
}

