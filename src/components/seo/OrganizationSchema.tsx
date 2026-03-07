import JsonLd from "@/components/JsonLd";
import {
  DEFAULT_CONTACT_EMAIL,
  DEFAULT_COUNTRY_NAME,
  DEFAULT_SITE_DESCRIPTION,
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
  description = DEFAULT_SITE_DESCRIPTION,
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
    description,
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
      "Tennis",
      "Tennis coaching",
      "Tennis equipment",
      "Tennis analytics",
      "Tennis training plans",
    ],
  };

  return <JsonLd data={schema} />;
}
