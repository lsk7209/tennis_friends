import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react";
import CafeBanner from "@/components/blog/CafeBanner";
import RelatedContent, {
  type RelatedContentItem,
} from "@/components/RelatedContent";
import { AdSenseSlot } from "@/components/AdSense";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import EnhancedBlogPostSchema from "@/components/seo/EnhancedBlogPostSchema";
import FAQSection from "@/components/seo/FAQSection";
import { allBlogPosts } from "@/data/blog-posts";
import { blogContentMap } from "@/data/blog-content";
import { getBlogPublishDate, getPublishedBlogPosts } from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";
import { getRelatedUtilityLinks } from "@/lib/internal-linking";
import { getRelatedBlogPosts } from "@/lib/related-content";
import { DEFAULT_SITE_LOCALE, SITE_NAME, getSiteUrl } from "@/lib/site";
import type { BlogPostData } from "@/types/blog";

export const revalidate = 3600;

const ARTICLE_TOP_AD_SLOT =
  process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_TOP_SLOT || "5442683582";
const ARTICLE_MIDDLE_AD_SLOT =
  process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_MIDDLE_SLOT || "4809500982";
const ARTICLE_BOTTOM_AD_SLOT =
  process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_BOTTOM_SLOT || "8552062650";
const MIDDLE_AD_AFTER_HEADING_COUNT = 4;

interface EnrichedBlogPost extends BlogPostData {
  content?: string;
  summary?: string;
  highlight?: string;
}

type SeoDescriptionContent = {
  summary?: string;
  highlight?: string;
  tags?: string[];
};

type Props = {
  params: Promise<{ slug: string }>;
};

function splitContentForMiddleAd(content: string): [string, string] {
  if (!content) return ["", ""];

  const headingMatches = [...content.matchAll(/<h2[\s>]/g)];
  const targetHeading = headingMatches[MIDDLE_AD_AFTER_HEADING_COUNT];

  if (!targetHeading?.index) return [content, ""];

  return [
    content.slice(0, targetHeading.index),
    content.slice(targetHeading.index),
  ];
}

function normalizeArticleHtml(content: string) {
  return content
    .replace(/^<article\b[^>]*>/, "")
    .replace(/<\/article>\s*$/, "")
    .replace(/<table/g, '<div class="table-wrapper"><table')
    .replace(/<\/table>/g, "</table></div>");
}

function getPublishedPost(slug: string) {
  return getPublishedBlogPosts(allBlogPosts).find((item) => item.slug === slug);
}

function toRelatedItem(item: BlogPostData): RelatedContentItem {
  return {
    id: item.id,
    title: item.title,
    description: item.excerpt,
    excerpt: item.excerpt,
    category: item.category,
    tags: item.tags ?? [],
    href: `/blog/${item.slug}`,
    date: item.date,
    readTime: item.readTime,
    badge: item.badge,
  };
}

function buildSeoDescription(
  post: BlogPostData,
  contentData?: SeoDescriptionContent,
) {
  const candidates = [contentData?.summary, contentData?.highlight, post.excerpt]
    .filter((item): item is string => Boolean(item))
    .sort((a, b) => b.length - a.length);
  const description = candidates[0] ?? post.excerpt;

  if (description.length >= 60) return description;

  const focus = (contentData?.tags ?? post.tags ?? [])
    .slice(0, 3)
    .join(", ");

  return `${description} ${post.title}의 핵심 상황을 ${focus || post.category} 관점으로 나누고, 경기 중 바로 적용할 판단 순서를 정리합니다.`;
}

export function generateStaticParams() {
  return getPublishedBlogPosts(allBlogPosts).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);

  if (!post) notFound();

  const publishedTime = getBlogPublishDate(post).toISOString();
  const indexable = isIndexableBlogSlug(post.slug);
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/blog/${post.slug}`;
  const contentData = blogContentMap[post.slug] || blogContentMap[post.id];
  const description = buildSeoDescription(post, contentData);
  const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(
    post.title,
  )}&sub=${encodeURIComponent(post.category ?? "테니스 가이드")}`;

  return {
    title: post.title,
    description,
    robots: {
      index: indexable,
      follow: true,
      googleBot: {
        index: indexable,
        follow: true,
      },
    },
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      siteName: SITE_NAME,
      locale: DEFAULT_SITE_LOCALE,
      publishedTime,
      authors: ["TennisFriends"],
      tags: post.category ? [post.category] : [],
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const publishedBlogPosts = getPublishedBlogPosts(allBlogPosts);
  const post = publishedBlogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const publishedTime = getBlogPublishDate(post).toISOString();
  const contentData = blogContentMap[post.slug] || blogContentMap[post.id];
  const processedContent = normalizeArticleHtml(contentData?.content ?? "");
  const [contentBeforeMiddleAd, contentAfterMiddleAd] =
    splitContentForMiddleAd(processedContent);

  const enrichedPost: EnrichedBlogPost = {
    ...post,
    content: processedContent,
    tags: contentData?.tags ?? post.tags ?? [],
    summary: contentData?.summary ?? post.excerpt,
    highlight: contentData?.highlight ?? post.excerpt,
  };

  const allPostsForRelated = publishedBlogPosts.map(toRelatedItem);
  const currentRelatedItem = toRelatedItem({
    ...post,
    tags: enrichedPost.tags,
  });
  const relatedPosts = getRelatedBlogPosts(
    currentRelatedItem,
    allPostsForRelated,
    6,
  );
  const relatedTools = getRelatedUtilityLinks(
    {
      title: post.title,
      category: post.category,
      tags: enrichedPost.tags,
      content: enrichedPost.content,
    },
    3,
  );

  const faqItems =
    contentData?.faq?.map((item: { question: string; answer: string }) => ({
      question: item.question,
      answer: item.answer,
    })) ?? [];

  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/blog/${post.slug}`;
  const breadcrumbItems = [
    { name: "Home", item: siteUrl },
    { name: "Blog", item: `${siteUrl}/blog` },
    { name: post.title, item: canonical },
  ];

  return (
    <main className="container mx-auto max-w-4xl px-4 py-10 sm:py-12">
      <BreadcrumbSchema items={breadcrumbItems} />
      <EnhancedBlogPostSchema
        title={post.title}
        description={post.excerpt || ""}
        slug={post.slug}
        date={publishedTime}
        dateModified={publishedTime}
        author="TennisFriends"
        category={post.category}
        readingTime={post.readTime}
        keywords={enrichedPost.tags ?? []}
        articleBody={enrichedPost.content ?? ""}
      />

      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Back to blog list"
        >
          <ArrowLeft className="h-4 w-4" />
          블로그로 돌아가기
        </Link>
      </nav>

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        className="prose max-w-none dark:prose-invert"
      >
        <header className="mb-8">
          <section
            className="mb-4 flex flex-wrap items-center gap-3"
            aria-label="Post metadata"
          >
            <Badge
              className="border-none bg-accent-volt font-semibold text-court-ink"
              itemProp="articleSection"
            >
              {post.category}
            </Badge>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <time
                dateTime={post.date}
                itemProp="datePublished"
                className="flex items-center gap-1"
              >
                <Calendar className="h-4 w-4" />
                {post.date}
              </time>
              {post.readTime && (
                <span className="flex items-center gap-1" itemProp="timeRequired">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              )}
            </div>
          </section>

          <h1
            className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl"
            itemProp="headline"
          >
            {post.title}
          </h1>

          <p className="mb-6 text-lg text-muted-foreground" itemProp="description">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground">
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">작성자 TennisFriends</span>
              </span>
            </div>
            <Button variant="outline" size="sm" className="border-white/10 bg-card">
              <Share2 className="mr-2 h-4 w-4" />
              공유하기
            </Button>
          </div>
        </header>

        <section
          className="mb-8 rounded-lg border border-white/10 bg-card p-5 sm:p-6"
          aria-labelledby="summary-heading"
        >
          <h2 id="summary-heading" className="mb-3 text-lg font-bold text-primary">
            요약
          </h2>
          <p className="text-foreground">{enrichedPost.summary}</p>
        </section>

        <section
          className="mb-8 rounded-lg border-2 border-primary/80 bg-primary/10 p-5 sm:p-6"
          aria-label="Key point"
        >
          <p className="font-medium text-foreground">{enrichedPost.highlight}</p>
        </section>

        {ARTICLE_TOP_AD_SLOT && (
          <AdSenseSlot slot={ARTICLE_TOP_AD_SLOT} label="본문 상단 광고" />
        )}

        <nav aria-label="Table of contents" className="mb-8">
          <details className="group rounded-lg border border-white/10 bg-card">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-foreground">
              <span>목차</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-open:rotate-90" />
            </summary>
            <div className="border-t border-white/10 p-4">
              <ul className="list-none space-y-2 pl-0">
                <li>
                  <a href="#summary-heading" className="no-underline">
                    요약
                  </a>
                </li>
                <li>
                  <a href="#article-content" className="no-underline">
                    본문
                  </a>
                </li>
                {faqItems.length > 0 && (
                  <li>
                    <a href="#faq" className="no-underline">
                      자주 묻는 질문
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </details>
        </nav>

        <section
          id="article-content"
          className="prose blog-article-content aw-article max-w-none dark:prose-invert"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: contentBeforeMiddleAd }}
        />

        {contentAfterMiddleAd ? (
          <>
            {ARTICLE_MIDDLE_AD_SLOT && (
              <AdSenseSlot
                slot={ARTICLE_MIDDLE_AD_SLOT}
                label="본문 중간 광고"
                minHeight={260}
                minHeightMobile={200}
              />
            )}
            <section
              className="prose blog-article-content aw-article max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: contentAfterMiddleAd }}
            />
          </>
        ) : ARTICLE_MIDDLE_AD_SLOT ? (
          <AdSenseSlot
            slot={ARTICLE_MIDDLE_AD_SLOT}
            label="본문 중간 광고"
            minHeight={260}
            minHeightMobile={200}
          />
        ) : null}

        {ARTICLE_BOTTOM_AD_SLOT && (
          <AdSenseSlot slot={ARTICLE_BOTTOM_AD_SLOT} label="본문 하단 광고" />
        )}

        <CafeBanner />

        {enrichedPost.tags && enrichedPost.tags.length > 0 && (
          <section aria-label="Tags" className="mt-8 flex flex-wrap gap-2">
            {enrichedPost.tags.map((tag: string, index: number) => (
              <Badge
                key={`${tag}-${index}`}
                variant="outline"
                className="border-white/5 bg-background"
                itemProp="keywords"
              >
                {tag}
              </Badge>
            ))}
          </section>
        )}
      </article>

      {faqItems.length > 0 && (
        <FAQSection
          items={faqItems}
          id="faq"
          title="자주 묻는 질문"
          className="mt-12"
        />
      )}

      <RelatedContent
        items={relatedPosts}
        title="관련 글 더보기"
        type="blog"
        maxItems={6}
      />

      <section aria-label="Related tools" className="mt-12">
        <Card className="border-blue-200 bg-gradient-to-r from-blue-50 via-white to-indigo-50 dark:border-gray-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          <CardContent className="p-6 sm:p-8">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              이 글과 함께 쓰기 좋은 도구
            </h3>
            <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
              글에서 다룬 기준을 직접 테스트하고 기록해 볼 수 있습니다.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {relatedTools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="group">
                  <div className="h-full rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                    <div className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white">
                      {tool.title}
                    </div>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
