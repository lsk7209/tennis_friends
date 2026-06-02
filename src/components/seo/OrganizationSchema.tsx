import JsonLd from "@/components/JsonLd";
import {
  DEFAULT_CONTACT_EMAIL,
  DEFAULT_COUNTRY_NAME,
  SITE_NAME,
  getSiteIconUrl,
  getSiteUrl,
} from "@/lib/site";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  email?: string;
  sameAs?: string[];
}

export default function OrganizationSchema({
  name = SITE_NAME,
  url,
  logo,
  description,
  email = DEFAULT_CONTACT_EMAIL,
  sameAs = [],
}: OrganizationSchemaProps) {
  const siteUrl = getSiteUrl();
  const logoUrl = logo || getSiteIconUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url: url || siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 32,
      height: 32,
    },
    ...(description ? { description } : {}),
    ...(sameAs.length > 0 && { sameAs }),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email,
      availableLanguage: ["Korean", "English"],
    },
    areaServed: {
      "@type": "Country",
      name: DEFAULT_COUNTRY_NAME,
    },
    knowsAbout: [
      "테니스",
      "NTRP",
      "테니스 장비",
      "테니스 훈련",
      "스트링 텐션",
    ],
  };

  return <JsonLd data={schema} />;
}
