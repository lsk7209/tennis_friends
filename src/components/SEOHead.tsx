import React from 'react';
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  keywords?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "TennisFriends - 당신의 테니스 파트너",
  description = "데이터로 똑똑하게, 테니스를 즐겁게. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것.",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  structuredData,
  keywords = ["테니스", "NTRP", "실력테스트", "스트링텐션", "부상예방", "테니스커뮤니티"]
}) => {
  const fullTitle = title.includes("TennisFriends") ? title : `${title} | TennisFriends`;
  const fullCanonical = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="TennisFriends" />
      <meta property="og:locale" content="ko_KR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="TennisFriends" />
      <meta name="theme-color" content="#34D399" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Default Structured Data for Website */}
      {!structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "TennisFriends",
              "description": description,
              "url": "https://tennisfriends.co.kr",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://tennisfriends.co.kr/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead;
