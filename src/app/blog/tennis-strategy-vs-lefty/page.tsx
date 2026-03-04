import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';
import BlogPostSchema from '@/components/seo/BlogPostSchema';

export const metadata = {
  title: "왼손잡이 상대 공략법 (Lefty 대응 전술) - 테니스 필승 전략 및팁",
  description: "전체 선수의 10%에 불과한 왼손잡이와의 대결, 낯선 서브 궤적과 스핀에 당황하지 마세요. 왼손잡이의 장점을 무력화하고 승리할 수 있는 4가지 필승 전술을 공개합니다.",
  keywords: ["테니스 전술", "왼손잡이", "Lefty", "테니스", "공략법", "테니스 서브 리턴", "테니스 멘탈"],
  alternates: {
    canonical: 'https://tennisfrens.com/blog/tennis-strategy-vs-lefty',
  },
  openGraph: {
    title: "왼손잡이 상대 공략법 (Lefty 대응 전술) - 테니스 필승 전략 및 팁",
    description: "전체 선수의 10%에 불과한 왼손잡이와의 대결, 낯선 서브 궤적과 스핀에 당황하지 마세요. 왼손잡이의 장점을 무력화하는 필승 전술.",
    url: 'https://tennisfrens.com/blog/tennis-strategy-vs-lefty',
    siteName: 'Tennis Friends',
    locale: 'ko_KR',
    type: 'article',
    images: [
      {
        url: '/images/blog/lefty-tactic.jpg', // Placeholder or use default if available, but schema needs image if possible.
        width: 1200,
        height: 630,
        alt: '왼손잡이 테니스 선수 공략법',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "왼손잡이 상대 공략법 (Lefty 대응 전술) - 테니스 필승 전략",
    description: "전체 선수의 10%에 불과한 왼손잡이와의 대결, 낯선 서브 궤적과 스핀에 당황하지 마세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'section-1', text: '1. 주요 특징', depth: 2 },
  { id: 'section-2', text: '2. 플레이 스타일', depth: 2 },
  { id: 'conclusion', text: '결론', depth: 2 },
];

const faqs = [
  {
    "q": "왼손잡이랑 치면 왜 자꾸 빗맞을까요?",
    "a": "공의 회전 방향이 반대(Side spin)라서 라켓에 맞을 때 평소와 다르게 튀어나가기 때문입니다. 공을 좀 더 끝까지 보고, 스위트 스폿에 정확히 맞추는 집중력이 필요합니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <BlogPostSchema
        title="왼손잡이 상대 공략법 (Lefty 대응 전술)"
        description="전체 선수의 10% 불과한 왼손잡이와의 대결, 낯선 서브 궤적과 스핀에 당황하지 마세요. 왼손잡이의 장점을 무력화하는 필승 전술."
        slug="tennis-strategy-vs-lefty"
        date="2026-01-24"
        author="Tennis Friends"
        category="Strategy"
      />

      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스 전술", "왼손잡이", "Lefty", "테니스", "공략법"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            왼손잡이 상대 공략법 (Lefty 대응 전술)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            전체 선수의 10% 불과한 왼손잡이와의 대결, 낯선 서브 궤적과 스핀에 당황하지 마세요. 왼손잡이의 장점을 무력화하는 필승 전술.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h2>코트 위의 이단아, 'Lefty'를 잡아라</h2>
          <p>나달, 매켄로 등 전설적인 선수들 중에는 왼손잡이가 많습니다. 익숙하지 않은 궤적과 회전은 상대에게 큰 혼란을 줍니다. 하지만 원리를 알면 충분히 대처할 수 있습니다.</p>

          <h3>1. 서브의 궤적을 이해하라</h3>
          <p>왼손잡이의 슬라이스 서브는 오른손잡이와 반대 방향으로 휘어집니다. 듀스 코트에서는 바깥으로 흘러나가고, 애드 코트에서는 몸 쪽으로 파고듭니다. 이 궤적을 머릿속에 그리고 리턴 위치를 한 발짝 조정하세요.</p>

          <h3>2. 상대의 백핸드를 노려라 (Cross-Court)</h3>
          <p>오른손잡이끼리의 대결에서 주로 사용하는 '크로스 코트' 랠리는 왼손잡이에게는 강력한 포핸드 쪽입니다. 즉, 나의 포핸드 크로스가 상대의 포핸드로 가게 됩니다. 의식적으로 <strong>'다운더라인'</strong>이나 역크로스를 쳐서 상대의 백핸드(오른쪽 구석)를 공략해야 합니다.</p>

          <h3>3. 중요할 때는 '센터'를 지켜라</h3>
          <p>왼손잡이 선수들은 위기 상황에서 자신의 장기인 서브를 와이드로 넣으려는 경향이 있습니다. 하지만 리턴 시 센터를 너무 비우지 않도록 주의하세요. T존 서브도 강력할 수 있습니다.</p>

          <h3>4. 나의 백핸드를 강화하라</h3>
          <p>왼손잡이의 강력한 포핸드 역크로스는 나의 백핸드 쪽으로 깊게 들어옵니다. 백핸드 수비력이 약하다면 왼손잡이를 이기기 힘듭니다. 백핸드 슬라이스로 낮게 깔아 상대의 포핸드 공격을 무력화시키는 것도 좋은 전략입니다.</p>
        </article>

        <div className="mt-12">
          <FAQ items={faqs} />
        </div>

        <RelatedPosts
          currentSlug="tennis-strategy-vs-lefty"
          category="Strategy"
          tags={["테니스 전술", "왼손잡이", "Lefty", "테니스", "공략법"]}
        />

        <CTA />
      </div>
    </div>
  );
}
