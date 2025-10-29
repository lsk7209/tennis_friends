import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  content: string;
  author: string;
  summary: string;
  highlight: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '알카라즈 vs 시너: 차세대 라이벌전 심층 분석',
    category: '경기 분석',
    description: '두 영건의 기술적, 전술적 차이를 비교하고 앞으로의 테니스계를 이끌어갈 이들의 미래를 전망합니다.',
    date: '2024-10-22',
    readTime: '7분',
    slug: 'alcaraz-vs-sinner-analysis',
    tags: ['경기분석', '프로테니스', '알카라즈', '시너'],
    author: 'TennisFriends 편집팀',
    summary: '이번 분석에서는 알카라즈와 시너의 최근 경기를 바탕으로 두 선수의 기술적 특징과 전술적 차이점을 심층 분석합니다.',
    highlight: '알카라즈의 강력한 포핸드와 시너의 정교한 백핸드가 만나 펼치는 차세대 테니스의 새로운 패러다임을 확인할 수 있습니다.',
    content: `
      <h2>두 영건의 만남</h2>
      <p>2024년 테니스계를 뜨겁게 달구고 있는 두 젊은 천재, 카를로스 알카라즈와 야닉 시너의 경기는 단순한 경기를 넘어서 차세대 테니스의 방향을 제시하고 있습니다.</p>
      
      <h2>기술적 특징 비교</h2>
      <h3>알카라즈의 강점</h3>
      <ul>
        <li>강력한 포핸드 스트로크</li>
        <li>탁월한 네트 플레이</li>
        <li>다양한 스핀 활용</li>
        <li>놀라운 순간 속도</li>
      </ul>
      
      <h3>시너의 강점</h3>
      <ul>
        <li>정교한 백핸드</li>
        <li>일관성 있는 플레이</li>
        <li>뛰어난 멘탈</li>
        <li>효율적인 움직임</li>
      </ul>
      
      <h2>전술적 차이점</h2>
      <p>알카라즈는 공격적인 플레이를 통해 상대를 압박하는 반면, 시너는 안정적인 플레이로 상대의 실수를 유도하는 전술을 사용합니다.</p>
      
      <h2>미래 전망</h2>
      <p>두 선수 모두 아직 20대 초반의 젊은 나이로, 앞으로 10년 이상 테니스계를 이끌어갈 것으로 예상됩니다. 이들의 경쟁은 테니스 팬들에게 지속적인 즐거움을 선사할 것입니다.</p>
    `
  },
  {
    id: '2',
    title: '2024년 최고의 테니스 라켓 TOP 5',
    category: '장비 리뷰',
    description: '초보자부터 상급자까지, 당신에게 꼭 맞는 인생 라켓을 찾을 수 있도록 상세한 리뷰와 추천 가이드를 제공합니다.',
    date: '2024-10-20',
    readTime: '5분',
    slug: 'best-tennis-rackets-2024',
    tags: ['라켓리뷰', '장비추천', '2024신제품'],
    author: 'TennisFriends 편집팀',
    summary: '2024년 출시된 최고의 테니스 라켓들을 성능, 가격, 적합한 플레이어 레벨별로 분석하여 추천합니다.',
    highlight: '각 라켓의 특성을 정확히 파악하고 자신의 플레이 스타일에 맞는 라켓을 선택하는 것이 중요합니다.',
    content: `
      <h2>2024년 테니스 라켓 트렌드</h2>
      <p>올해는 특히 라켓 기술의 발전으로 인해 더욱 정교하고 강력한 라켓들이 출시되었습니다.</p>
      
      <h2>TOP 5 라켓 리뷰</h2>
      <h3>1. Wilson Pro Staff 97</h3>
      <p>고급 플레이어를 위한 정밀한 컨트롤과 파워를 제공하는 라켓입니다.</p>
      
      <h3>2. Babolat Pure Drive 2024</h3>
      <p>올라운드 플레이어에게 적합한 균형잡힌 성능을 제공합니다.</p>
      
      <h3>3. Head Speed Pro</h3>
      <p>빠른 스윙 스피드를 원하는 플레이어에게 최적화된 라켓입니다.</p>
      
      <h3>4. Yonex EZONE 98</h3>
      <p>편안한 타구감과 뛰어난 파워를 동시에 제공하는 라켓입니다.</p>
      
      <h3>5. Tecnifibre TFight 305</h3>
      <p>가성비가 뛰어난 중급자용 라켓으로 추천합니다.</p>
      
      <h2>라켓 선택 가이드</h2>
      <p>자신의 플레이 스타일과 레벨에 맞는 라켓을 선택하는 것이 가장 중요합니다.</p>
    `
  }
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
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

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-background-dark border-white/5">
              {tag}
            </Badge>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-text-light mb-6">관련 글 더보기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <Card className="h-full bg-content-dark border-white/10 hover:border-primary/50 transition-all group cursor-pointer">
                  <CardContent className="p-4">
                    <Badge className="bg-primary/20 text-primary mb-2">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-bold text-text-light group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

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
