import type { ReactNode } from "react";
import JsonLd from "@/components/JsonLd";

interface ArticleProps {
  title: string;
  excerpt?: string;
  date?: string;
  author?: string;
  image?: string;
  slug?: string;
  children: ReactNode;
}

export default function Article({ title, excerpt, date, author = "TennisFriends", image, slug, children }: ArticleProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tennisfriends.co.kr";
  const url = slug ? `${siteUrl}/blog/${slug}` : siteUrl;
  const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/og-image.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": excerpt,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": author,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "TennisFriends",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "datePublished": date || new Date().toISOString(),
    "dateModified": date || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <article className="prose prose-lg dark:prose-invert max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <JsonLd data={jsonLd} />
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 !leading-tight">{title}</h1>
        {excerpt ? <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{excerpt}</p> : null}
        {date && <time className="block text-sm text-gray-500" dateTime={date}>{date}</time>}
        {image && (
          <div className="relative w-full h-[400px] md:h-[500px] mt-8 mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={image}
              alt={`${title} representative image`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
      </header>
      <div className="max-w-none">
        {children}
      </div>
    </article>
  );
}

