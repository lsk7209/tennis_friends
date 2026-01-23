import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { allBlogPosts } from '@/data/blog-posts';
import type { BlogPost } from '@/types/blog';
import RelatedContent from '@/components/RelatedContent';
import { getRelatedBlogPosts } from '@/lib/related-content';
import type { RelatedContentItem } from '@/components/RelatedContent';
import EnhancedBlogPostSchema from '@/components/seo/EnhancedBlogPostSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQSection from '@/components/seo/FAQSection';
import { blogContentMap } from '@/data/blog-content';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = allBlogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['TennisFriends'],
      tags: post.category ? [post.category] : [],
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/${post.slug}`,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisfrens.com'}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = allBlogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Type assertion since blog posts from JS might not strictly match TS interface
  const typedPost: any = post;

  // Merge content from blogContentMap if available
  const contentData = blogContentMap[post.slug] || blogContentMap[post.id];
  if (contentData) {
    typedPost.content = contentData.content;
    typedPost.tags = contentData.tags;
    typedPost.summary = contentData.summary;
    typedPost.highlight = contentData.highlight;
    if (contentData.faq) {
      // We'll handle FAQ merging later in the component
    }
  }

  // Transform blog posts to RelatedItem type with safe fallbacks
  const allPostsForRelated: RelatedContentItem[] = allBlogPosts.map(p => ({
    id: p.id,
    title: p.title,
    description: p.excerpt,
    excerpt: p.excerpt,
    category: p.category,
    tags: (p as any).tags || [], // tags might be missing in JS data
    href: `/blog/${p.slug}`,
    date: p.date,
    readTime: p.readTime,
    badge: p.badge
  }));

  const currentRelatedItem: RelatedContentItem = {
    id: post.id,
    title: post.title,
    description: post.excerpt,
    excerpt: post.excerpt,
    category: post.category,
    tags: (post as any).tags || [],
    href: `/blog/${post.slug}`,
    date: post.date,
    readTime: post.readTime,
    badge: post.badge
  };

  const relatedPosts = getRelatedBlogPosts(currentRelatedItem, allPostsForRelated, 6);

  // FAQ Items
  const faqItems: any[] = contentData?.faq ? contentData.faq.map(item => ({
    question: item.question,
    acceptedAnswer: { text: item.answer }
  })) : [];

  const breadcrumbItems = [
    { name: 'Home', item: 'https://tennisfriends.co.kr' },
    { name: 'Blog', item: 'https://tennisfriends.co.kr/blog' },
    { name: post.title, item: `https://tennisfriends.co.kr/blog/${post.slug}` }
  ];

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Enhanced Structured Data */}
      <EnhancedBlogPostSchema
        title={post.title}
        description={post.excerpt || ''}
        slug={post.slug}
        date={post.date}
        author="TennisFriends"
        category={post.category}
        readingTime={post.readTime}
        keywords={(post as any).tags || []} // Cast to any for now
        articleBody={(post as any).content || ''}
      />

      {/* Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-light transition-colors"
          aria-label="블로그 목록으로 돌아가기"
        >
          <ArrowLeft className="w-4 h-4" />
          블로그로 돌아가기
        </Link>
      </nav>

      {/* Main Article */}
      <article itemScope itemType="https://schema.org/BlogPosting" className="prose prose-invert max-w-none">
        {/* Article Header */}
        <header className="mb-8">
          <section className="flex items-center gap-2 mb-4" aria-label="게시글 메타 정보">
            <Badge className="bg-primary/20 text-primary" itemProp="articleSection">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <time
                dateTime={post.date}
                itemProp="datePublished"
                className="flex items-center gap-1"
              >
                <Calendar className="w-4 h-4" />
                {post.date}
              </time>
              {post.readTime && (
                <span className="flex items-center gap-1" itemProp="timeRequired">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              )}
            </div>
          </section>

          <h1 className="text-4xl font-bold text-text-light mb-4" itemProp="headline">
            {post.title}
          </h1>

          <p className="text-lg text-text-muted mb-6" itemProp="description">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="text-sm text-text-muted">
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">작성자: TennisFriends</span>
              </span>
            </div>
            <Button variant="outline" size="sm" className="bg-content-dark border-white/10">
              <Share2 className="w-4 h-4 mr-2" />
              공유하기
            </Button>
          </div>
        </header>

        {/* Summary Section */}
        <section
          className="bg-content-dark border border-white/10 rounded-lg p-6 mb-8"
          aria-labelledby="summary-heading"
        >
          <h2 id="summary-heading" className="text-lg font-bold text-primary mb-3">
            요약
          </h2>
          <p className="text-text-light">{(post as any).summary || post.excerpt}</p>
        </section>

        {/* Highlight Section */}
        <section
          className="bg-primary/10 border-2 border-primary/80 rounded-lg p-6 mb-8"
          aria-label="핵심 포인트"
        >
          <p className="text-text-light font-medium">{(post as any).highlight || post.excerpt}</p>
        </section>

        {/* Table of Contents */}
        <nav aria-label="목차" className="mb-8">
          <details className="group rounded-lg border border-white/10 bg-content-dark">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-text-light">
              <span>목차</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-open:rotate-90" />
            </summary>
            <div className="border-t border-white/10 p-4">
              <ul className="list-none space-y-2">
                <li><a href="#summary-heading" className="font-medium hover:text-primary">요약</a></li>
                <li><a href="#article-content" className="font-medium hover:text-primary">본문</a></li>
                {faqItems.length > 0 && (
                  <li><a href="#faq" className="font-medium hover:text-primary">자주 묻는 질문</a></li>
                )}
              </ul>
            </div>
          </details>
        </nav>

        {/* Article Content */}
        <section
          id="article-content"
          className="prose prose-invert max-w-none"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: (post as any).content || '' }}
        />

        {/* Tags Section */}
        {(post as any).tags && (post as any).tags.length > 0 && (
          <section aria-label="태그" className="flex flex-wrap gap-2 mt-8">
            {(post as any).tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-background-dark border-white/5"
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

      {/* CTA Section */}
      <section aria-label="추가 액션" className="mt-16">
        <Card className="bg-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold text-text-light mb-4">
              더 많은 테니스 정보가 필요하신가요?
            </h3>
            <p className="text-text-muted mb-6">
              TennisFriends의 다양한 도구와 정보를 확인해보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/ntrp-test">
                <Button className="bg-primary text-background-dark">
                  NTRP 실력 테스트
                </Button>
              </Link>
              <Link href="/utility/string-tension">
                <Button variant="outline" className="bg-content-dark border-white/10">
                  스트링 텐션 계산기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
