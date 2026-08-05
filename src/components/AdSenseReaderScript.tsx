import Script from "next/script";

const ADSENSE_ID =
  process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ||
  process.env.NEXT_PUBLIC_ADSENSE_ID ||
  "ca-pub-3050601904412736";

export default function AdSenseReaderScript() {
  return (
    <Script
      id="adsense-reader-loader"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
