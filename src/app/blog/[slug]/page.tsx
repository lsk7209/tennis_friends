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

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 메타데이터 생성 함수
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // 해당 슬러그의 블로그 포스트 찾기
  const post = allBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: '블로그를 찾을 수 없습니다 | TennisFriends',
      description: '요청하신 블로그 글을 찾을 수 없습니다.',
    };
  }

  const description = post.excerpt || '';
  const tags = [post.category, '테니스', '블로그'];

  return {
    title: `${post.title} | TennisFriends`,
    description,
    keywords: tags,
    authors: [{ name: 'TennisFriends' }],
    creator: 'TennisFriends',
    publisher: 'TennisFriends',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `https://www.tennisfrens.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | TennisFriends`,
      description,
      url: `https://www.tennisfrens.com/blog/${slug}`,
      siteName: 'TennisFriends',
      locale: 'ko_KR',
      type: 'article',
      publishedTime: post.date,
      authors: ['TennisFriends'],
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | TennisFriends`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
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
    description: post.description,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
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

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Back Button */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-text-light transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        블로그로 돌아가기
      </Link>

      {/* Article Header */}
      <article className="prose prose-invert max-w-none">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary/20 text-primary">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-text-light mb-4">
            {post.title}
          </h1>
          
          <p className="text-lg text-text-muted mb-6">
            {post.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-muted">
              작성자: {post.author}
            </div>
            <Button variant="outline" size="sm" className="bg-content-dark border-white/10">
              <Share2 className="w-4 h-4 mr-2" />
              공유하기
            </Button>
          </div>
        </header>

        {/* Summary Box */}
        <div className="bg-content-dark border border-white/10 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-primary mb-3">요약</h2>
          <p className="text-text-light">{post.summary}</p>
        </div>

        {/* Highlight Box */}
        <div className="bg-primary/10 border-2 border-primary/80 rounded-lg p-6 mb-8">
          <p className="text-text-light font-medium">{post.highlight}</p>
        </div>

        {/* Table of Contents */}
        <details className="group rounded-lg border border-white/10 bg-content-dark mb-8">
          <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-text-light">
            <span>목차</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-open:rotate-90" />
          </summary>
          <div className="border-t border-white/10 p-4">
            <ul className="list-none space-y-2">
              <li><a href="#section1" className="font-medium hover:text-primary">두 영건의 만남</a></li>
              <li><a href="#section2" className="font-medium hover:text-primary">기술적 특징 비교</a></li>
              <li><a href="#section3" className="font-medium hover:text-primary">전술적 차이점</a></li>
              <li><a href="#section4" className="font-medium hover:text-primary">미래 전망</a></li>
            </ul>
          </div>
        </details>

        {/* Article Content */}
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-background-dark border-white/5">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </article>

      {/* Related Posts */}
      <RelatedContent 
        items={relatedPosts}
        title="관련 글 더보기"
        type="blog"
        maxItems={6}
      />

      {/* CTA Section */}
      <Card className="mt-16 bg-primary/10 border-primary/20">
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
    </div>
  );
}
