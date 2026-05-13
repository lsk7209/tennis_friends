import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "테일러 프리츠: 미국 테니스의 자존심",
  description: "강력한 화력으로 상대를 찍어 누르는 하드 히터. 인디언 웰스 우승으로 증명한 프리츠의 저력.",
  keywords: ["테니스","테일러 프리츠","Taylor Fritz","미국","하드 히터"],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/taylor-fritz',
  },
  openGraph: {
    title: "테일러 프리츠: 미국 테니스의 자존심",
    description: "강력한 화력으로 상대를 찍어 누르는 하드 히터. 인디언 웰스 우승으로 증명한 프리츠의 저력.",
    url: 'https://www.tennisfrens.com/blog/taylor-fritz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "테일러 프리츠: 미국 테니스의 자존심",
    description: "강력한 화력으로 상대를 찍어 누르는 하드 히터. 인디언 웰스 우승으로 증명한 프리츠의 저력.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "프리츠는 결혼했나요?",
    "a": "네, 일찍 결혼하여 아들이 있으며, 현재는 인플루언서 모건 리들과 교제 중입니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","테일러 프리츠","Taylor Fritz","미국","하드 히터"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            테일러 프리츠: 미국 테니스의 자존심
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            강력한 화력으로 상대를 찍어 누르는 하드 히터. 인디언 웰스 우승으로 증명한 프리츠의 저력.
          </p>
        </div>
      </div>

      <Article showHeader={false} slug="taylor-fritz" date="2026-01-24" title="테일러 프리츠: 미국 테니스의 자존심" excerpt="강력한 화력으로 상대를 찍어 누르는 하드 히터. 인디언 웰스 우승으로 증명한 프리츠의 저력.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>캘리포니아의 별, 테일러 프리츠</h2>
      <p>프리츠는 테니스 명문가 출신으로, 어머니가 톱10 플레이어였습니다. 타고난 재능에 노력까지 더해졌습니다.</p>
      <h3>1. 베이스라인의 지배자</h3>
      <p>그는 뒤로 물러서지 않습니다. 강력한 양쪽 스트로크로 베이스라인에서 상대를 압도합니다.</p>
      <h3>2. 부상 투혼</h3>
      <p>발목 부상에도 불구하고 붕대를 감고 출전하여 우승을 차지하는 등 강인한 정신력을 보여주었습니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="taylor-fritz" 
            category="Player" 
            tags={["테니스","테일러 프리츠","Taylor Fritz","미국","하드 히터"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
