import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { allBlogPosts } from "@/data/blog-posts";
import type { BlogPostData } from "@/types/blog";
import RelatedContent from "@/components/RelatedContent";
import { getRelatedBlogPosts } from "@/lib/related-content";
import type { RelatedContentItem } from "@/components/RelatedContent";
import EnhancedBlogPostSchema from "@/components/seo/EnhancedBlogPostSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSection from "@/components/seo/FAQSection";
import { AdSenseSlot } from "@/components/AdSense";
import CafeBanner from "@/components/blog/CafeBanner";
import { blogContentMap } from "@/data/blog-content";
import { DEFAULT_SITE_LOCALE, SITE_NAME, getSiteUrl } from "@/lib/site";
import { getBlogPublishDate, getPublishedBlogPosts } from "@/lib/blog-publish";
import { isIndexableBlogSlug } from "@/lib/blog-quality";

export const revalidate = 3600;

const ARTICLE_TOP_AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_TOP_SLOT;
const ARTICLE_MIDDLE_AD_SLOT =
  process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_MIDDLE_SLOT;
const ARTICLE_BOTTOM_AD_SLOT =
  process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_BOTTOM_SLOT;
const MIDDLE_AD_AFTER_HEADING_COUNT = 4;

const toolMap = [
  {
    keywords: ["서브", "serve", "서빙"],
    emoji: "🎯",
    name: "NTRP 실력 테스트",
    href: "/utility/ntrp-test",
    desc: "나의 테니스 레벨 확인",
  },
  {
    keywords: ["스트링", "string", "텐션", "라켓"],
    emoji: "⚙️",
    name: "스트링 텐션 계산기",
    href: "/utility/string-tension",
    desc: "최적 텐션 찾기",
  },
  {
    keywords: ["부상", "통증", "엘보", "재활", "예방"],
    emoji: "🛡️",
    name: "부상 위험 점검",
    href: "/utility/injury-risk",
    desc: "부상 위험도 체크",
  },
  {
    keywords: ["훈련", "연습", "계획", "training"],
    emoji: "📋",
    name: "훈련 계획 수립",
    href: "/utility/training-planner",
    desc: "맞춤 훈련 플랜",
  },
  {
    keywords: ["영양", "식단", "수분", "음식"],
    emoji: "🥗",
    name: "테니스 영양 가이드",
    href: "/utility/nutrition-guide",
    desc: "경기력 영양 관리",
  },
  {
    keywords: ["장비", "라켓", "추천", "선택"],
    emoji: "🏸",
    name: "장비 추천 시스템",
    href: "/utility/equipment-recommendation",
    desc: "맞춤 장비 추천",
  },
  {
    keywords: ["스타일", "플레이", "유형", "성향"],
    emoji: "✨",
    name: "플레이 스타일 진단",
    href: "/utility/play-style-test",
    desc: "나의 플레이 스타일",
  },
  {
    keywords: ["복식", "더블", "파트너"],
    emoji: "👥",
    name: "복식 궁합 테스트",
    href: "/utility/doubles-chemistry-test",
    desc: "파트너 궁합 점검",
  },
  {
    keywords: ["경기", "분석", "전술", "전략"],
    emoji: "📊",
    name: "경기 분석 도구",
    href: "/utility/match-analyzer",
    desc: "경기 데이터 분석",
  },
  {
    keywords: ["멘탈", "집중", "심리", "루틴"],
    emoji: "🧠",
    name: "멘탈 트레이닝",
    href: "/utility/mental-training",
    desc: "경기 중 멘탈 강화",
  },
];

// BlogPostData에 blogContentMap에서 병합되는 필드를 추가한 확장 타입
interface EnrichedBlogPost extends BlogPostData {
  content?: string;
  summary?: string;
  highlight?: string;
}

function getRelatedTools(post: EnrichedBlogPost) {
  const text =
    `${post.title || ""} ${post.category || ""} ${(post.tags || []).join(" ")} ${post.content || ""}`.toLowerCase();
  const scored = toolMap.map((tool) => ({
    ...tool,
    score: tool.keywords.reduce((s, kw) => s + (text.includes(kw) ? 1 : 0), 0),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

type Props = {
  params: Promise<{ slug: string }>;
};

function splitContentForMiddleAd(content: string): [string, string] {
  if (!content) return ["", ""];

  const headingMatches = [...content.matchAll(/<h2[\s>]/g)];
  const targetHeading = headingMatches[MIDDLE_AD_AFTER_HEADING_COUNT];

  if (!targetHeading?.index) {
    return [content, ""];
  }

  return [
    content.slice(0, targetHeading.index),
    content.slice(targetHeading.index),
  ];
}

export function generateStaticParams() {
  return getPublishedBlogPosts(allBlogPosts).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPublishedBlogPosts(allBlogPosts).find(
    (p) => p.slug === resolvedParams.slug,
  );

  if (!post) {
    notFound();
  }

  const publishedTime = getBlogPublishDate(post).toISOString();
  const indexable = isIndexableBlogSlug(post.slug);
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/blog/${post.slug}`;
  const ogImage = `${siteUrl}/api/og?title=${encodeURIComponent(post.title)}&sub=${encodeURIComponent(post.category ?? "테니스 가이드")}`;

  return {
    title: post.title,
    description: post.excerpt,
    robots: {
      index: indexable,
      follow: true,
      googleBot: {
        index: indexable,
        follow: true,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
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
      description: post.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const publishedBlogPosts = getPublishedBlogPosts(allBlogPosts);
  const post = publishedBlogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const publishedTime = getBlogPublishDate(post).toISOString();

  // Merge content from blogContentMap if available
  const contentData = blogContentMap[post.slug] || blogContentMap[post.id];
  const rawContent = contentData?.content ?? "";
  // 테이블을 overflow-x: auto 래퍼로 감싸 모바일 CLS 방지
  const processedContent = rawContent
    .replace(/^<article\b[^>]*>/, "")
    .replace(/<\/article>\s*$/, "")
    .replace(/<table/g, '<div class="table-wrapper"><table')
    .replace(/<\/table>/g, "</table></div>");
  const [contentBeforeMiddleAd, contentAfterMiddleAd] =
    splitContentForMiddleAd(processedContent);
  const enrichedPost: EnrichedBlogPost = {
    ...post,
    content: processedContent,
    tags: contentData?.tags ?? post.tags ?? [],
    summary: contentData?.summary ?? post.excerpt,
    highlight: contentData?.highlight ?? post.excerpt,
  };

  // Transform blog posts to RelatedItem type with safe fallbacks
  const allPostsForRelated: RelatedContentItem[] = publishedBlogPosts.map(
    (p) => ({
      id: p.id,
      title: p.title,
      description: p.excerpt,
      excerpt: p.excerpt,
      category: p.category,
      tags: p.tags ?? [],
      href: `/blog/${p.slug}`,
      date: p.date,
      readTime: p.readTime,
      badge: p.badge,
    }),
  );

  const currentRelatedItem: RelatedContentItem = {
    id: post.id,
    title: post.title,
    description: post.excerpt,
    excerpt: post.excerpt,
    category: post.category,
    tags: enrichedPost.tags ?? [],
    href: `/blog/${post.slug}`,
    date: post.date,
    readTime: post.readTime,
    badge: post.badge,
  };

  const relatedPosts = getRelatedBlogPosts(
    currentRelatedItem,
    allPostsForRelated,
    6,
  );

  // FAQ Items
  const faqItems = contentData?.faq
    ? contentData.faq.map((item: { question: string; answer: string }) => ({
        question: item.question,
        answer: item.answer,
      }))
    : [];

  const breadcrumbItems = [
    { name: "Home", item: getSiteUrl() },
    { name: "Blog", item: `${getSiteUrl()}/blog` },
    { name: post.title, item: `${getSiteUrl()}/blog/${post.slug}` },
  ];

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Enhanced Structured Data */}
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

      {/* Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="블로그 목록으로 돌아가기"
        >
          <ArrowLeft className="w-4 h-4" />
          블로그로 돌아가기
        </Link>
      </nav>

      {/* Main Article */}
      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        className="prose dark:prose-invert max-w-none"
      >
        {/* Article Header */}
        <header className="mb-8">
          <section
            className="flex items-center gap-2 mb-4"
            aria-label="게시글 메타 정보"
          >
            <Badge
              className="bg-accent-volt text-court-ink font-semibold border-none"
              itemProp="articleSection"
            >
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time
                dateTime={post.date}
                itemProp="datePublished"
                className="flex items-center gap-1"
              >
                <Calendar className="w-4 h-4" />
                {post.date}
              </time>
              {post.readTime && (
                <span
                  className="flex items-center gap-1"
                  itemProp="timeRequired"
                >
                  <Clock className="w-4 h-4" />
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

          <p
            className="text-lg text-muted-foreground mb-6"
            itemProp="description"
          >
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <span
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name">작성자: TennisFriends</span>
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-card border-white/10"
            >
              <Share2 className="w-4 h-4 mr-2" />
              공유하기
            </Button>
          </div>
        </header>

        {/* Summary Section */}
        <section
          className="bg-card border border-white/10 rounded-lg p-6 mb-8"
          aria-labelledby="summary-heading"
        >
          <h2
            id="summary-heading"
            className="text-lg font-bold text-primary mb-3"
          >
            요약
          </h2>
          <p className="text-foreground">{enrichedPost.summary}</p>
        </section>

        {/* Highlight Section */}
        <section
          className="bg-primary/10 border-2 border-primary/80 rounded-lg p-6 mb-8"
          aria-label="핵심 포인트"
        >
          <p className="text-foreground font-medium">
            {enrichedPost.highlight}
          </p>
        </section>

        {ARTICLE_TOP_AD_SLOT && (
          <AdSenseSlot slot={ARTICLE_TOP_AD_SLOT} label="본문 상단 광고" />
        )}

        {/* Table of Contents */}
        <nav aria-label="목차" className="mb-8">
          <details className="group rounded-lg border border-white/10 bg-card">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-foreground">
              <span>목차</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-open:rotate-90" />
            </summary>
            <div className="border-t border-white/10 p-4">
              <ul className="list-none space-y-2">
                <li>
                  <a
                    href="#summary-heading"
                    className="!text-white hover:!text-primary transition-colors no-underline block"
                    style={{ color: "white" }}
                  >
                    요약
                  </a>
                </li>
                <li>
                  <a
                    href="#article-content"
                    className="!text-white hover:!text-primary transition-colors no-underline block"
                    style={{ color: "white" }}
                  >
                    본문
                  </a>
                </li>
                {faqItems.length > 0 && (
                  <li>
                    <a
                      href="#faq"
                      className="!text-white hover:!text-primary transition-colors no-underline block"
                      style={{ color: "white" }}
                    >
                      자주 묻는 질문
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </details>
        </nav>

        {/* Article Content */}
        <section
          id="article-content"
          className="prose blog-article-content aw-article dark:prose-invert max-w-none"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: contentBeforeMiddleAd }}
        />

        {contentAfterMiddleAd && (
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
              className="prose blog-article-content aw-article dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: contentAfterMiddleAd }}
            />
          </>
        )}

        {ARTICLE_BOTTOM_AD_SLOT && (
          <AdSenseSlot slot={ARTICLE_BOTTOM_AD_SLOT} label="본문 하단 광고" />
        )}

        <CafeBanner />

        {/* Tags Section */}
        {enrichedPost.tags && enrichedPost.tags.length > 0 && (
          <section aria-label="태그" className="flex flex-wrap gap-2 mt-8">
            {enrichedPost.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-background border-white/5"
                itemProp="keywords"
              >
                {tag}
              </Badge>
            ))}
          </section>
        )}
      </article>

      {/* FAQ Section - AI Snippet Optimization */}
      {faqItems.length > 0 && (
        <FAQSection
          items={faqItems}
          id="faq"
          title="자주 묻는 질문"
          className="mt-12"
        />
      )}

      {/* Related Posts Section */}
      <section aria-labelledby="related-posts-heading" className="mt-12">
        <RelatedContent
          items={relatedPosts}
          title="관련 글 더보기"
          type="blog"
          maxItems={6}
        />
      </section>

      {/* 관련 유틸리티 추천 */}
      <section aria-label="관련 도구" className="mt-12">
        <Card className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border-blue-200 dark:border-gray-700">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              🎯 이 글과 관련된 도구
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              직접 테스트하고 분석해보세요
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {getRelatedTools(enrichedPost).map((tool) => (
                <Link key={tool.href} href={tool.href} className="group">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">{tool.emoji}</div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {tool.desc}
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
