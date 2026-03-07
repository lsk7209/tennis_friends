import JsonLd from "@/components/JsonLd";
import {
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_LANGUAGE,
  SITE_NAME,
  getSiteIconUrl,
  getSiteSearchUrlTemplate,
  getSiteUrl,
} from "@/lib/site";

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
  searchUrl?: string;
}

export default function WebSiteSchema({
  name = SITE_NAME,
  url,
  description = DEFAULT_SITE_DESCRIPTION,
  searchUrl,
}: WebSiteSchemaProps) {
  const siteUrl = getSiteUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url: url || siteUrl,
    description,
    inLanguage: DEFAULT_SITE_LANGUAGE,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: searchUrl || getSiteSearchUrlTemplate(),
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: getSiteIconUrl(),
        width: 32,
        height: 32,
      },
    },
  };

  return <JsonLd data={schema} />;
}
