import {
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_LANGUAGE,
  SITE_NAME,
  getAbsoluteUrl,
  getSiteSearchUrlTemplate,
} from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>${escapeXml(SITE_NAME)}</ShortName>
  <Description>${escapeXml(DEFAULT_SITE_DESCRIPTION)}</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Language>${DEFAULT_SITE_LANGUAGE}</Language>
  <Image height="32" width="32" type="image/x-icon">${escapeXml(getAbsoluteUrl("/favicon.ico"))}</Image>
  <Url type="text/html" method="get" template="${escapeXml(getSiteSearchUrlTemplate())}" />
</OpenSearchDescription>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/opensearchdescription+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
