import Link from 'next/link';
import { Metadata } from 'next';
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
import FAQSection from '@/components/seo/FAQSection';
import { generatePageMetadata, truncateForNaver } from '@/lib/seo/metadata-helpers';

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Enhanced Metadata Generation with Naver & AI Optimization
 * 
 * Improvements:
 * - Naver-optimized description (80 chars)
 * - Consistent title format
 * - Enhanced Open Graph data
 * - AI-friendly metadata
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // 해당 슬러그의 블로그 포스트 찾기
  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: '블로그를 찾을 수 없습니다',
      description: '요청하신 블로그 글을 찾을 수 없습니다.',
    };
  }

  const description = post.excerpt || '';
  const tags = [post.category, '테니스', '블로그'];

  // Use enhanced metadata helper for consistency
  return generatePageMetadata({
    title: post.title,
    description, // Will be optimized for Google (longer) and Naver (80 chars) automatically
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.date,
    authors: [post.author || 'TennisFriends'],
    tags,
    image: post.image,
  });
}

// 로컬 blogPosts 배열 제거 - allBlogPosts 사용
const blogPosts: BlogPost[] = allBlogPosts.map(post => ({
  ...post,
  description: post.excerpt || '',
  tags: [post.category, '테니스', '블로그'],
  content: `<h2>${post.title}</h2><p>${post.excerpt || ''}</p>`,
  author: 'TennisFriends',
  summary: post.excerpt || '',
  highlight: post.excerpt || '',
}));

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-text-light mb-4">포스트를 찾을 수 없습니다</h1>
        <Link href="/blog">
          <Button variant="outline" className="bg-content-dark border-white/10">
            블로그로 돌아가기
          </Button>
        </Link>
      </div>
    );
  }

  // 개선된 관련글 추천 알고리즘 사용
  const currentPostItem: RelatedContentItem = {
    id: post.id,
    title: post.title,
    description: post.excerpt,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags || [],
    href: `/blog/${post.slug}`,
    date: post.date,
    readTime: post.readTime,
  };
  
  const allPostsItems: RelatedContentItem[] = blogPosts.map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    excerpt: p.excerpt,
    category: p.category,
    tags: p.tags,
    href: `/blog/${p.slug}`,
    date: p.date,
    readTime: p.readTime,
  }));
  
  const relatedPosts = getRelatedBlogPosts(currentPostItem, allPostsItems, 6);

  // Generate FAQ items based on post content (AI snippet optimization)
  const faqItems = [
    {
      question: `${post.title}에 대해 자세히 알고 싶습니다.`,
      answer: post.excerpt || `${post.title}에 대한 상세 정보를 제공합니다.`,
    },
    {
      question: `${post.category} 카테고리의 다른 글도 있나요?`,
      answer: `네, TennisFriends 블로그에서 ${post.category} 관련 다양한 글을 확인하실 수 있습니다.`,
    },
    {
      question: '이 글과 관련된 테니스 도구를 사용할 수 있나요?',
      answer: '네, TennisFriends에서 제공하는 NTRP 실력 테스트, 스트링 텐션 계산기 등 다양한 도구를 무료로 이용하실 수 있습니다.',
    },
  ];

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      {/* Enhanced Structured Data */}
      <EnhancedBlogPostSchema
        title={post.title}
        description={post.excerpt || ''}
        slug={post.slug}
        date={post.date}
        author={post.author}
        category={post.category}
        readingTime={post.readTime}
        keywords={post.tags}
        articleBody={post.content}
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
                <span itemProp="name">작성자: {post.author}</span>
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
          <p className="text-text-light">{post.summary || post.excerpt}</p>
        </section>

        {/* Highlight Section */}
        <section 
          className="bg-primary/10 border-2 border-primary/80 rounded-lg p-6 mb-8"
          aria-label="핵심 포인트"
        >
          <p className="text-text-light font-medium">{post.highlight || post.excerpt}</p>
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
                <li><a href="#faq" className="font-medium hover:text-primary">자주 묻는 질문</a></li>
              </ul>
            </div>
          </details>
        </nav>

        {/* Article Content */}
        <section 
          id="article-content"
          className="prose prose-invert max-w-none"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <section aria-label="태그" className="flex flex-wrap gap-2 mt-8">
            {post.tags.map((tag, index) => (
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
      <FAQSection 
        items={faqItems}
        id="faq"
        title="자주 묻는 질문"
        className="mt-12"
      />

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
