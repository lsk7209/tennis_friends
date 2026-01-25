import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "바람 부는 날 테니스 잘 치는 법 (강풍 대응 가이드)",
  description: "강풍은 테니스에서 가장 까다로운 변수입니다. 바람을 등지거나 안고 칠 때의 타점 조절, 풋워크 변화, 그리고 멘탈 관리까지 완벽하게 정리했습니다.",
  keywords: ["테니스","바람","강풍","테니스 꿀팁","야외 테니스"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-windy-condition-tips',
  },
  openGraph: {
    title: "바람 부는 날 테니스 잘 치는 법 (강풍 대응 가이드)",
    description: "강풍은 테니스에서 가장 까다로운 변수입니다. 바람을 등지거나 안고 칠 때의 타점 조절, 풋워크 변화, 그리고 멘탈 관리까지 완벽하게 정리했습니다.",
    url: 'https://tennisfriends.co.kr/blog/tennis-windy-condition-tips',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "바람 부는 날 테니스 잘 치는 법 (강풍 대응 가이드)",
    description: "강풍은 테니스에서 가장 까다로운 변수입니다. 바람을 등지거나 안고 칠 때의 타점 조절, 풋워크 변화, 그리고 멘탈 관리까지 완벽하게 정리했습니다.",
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
    "q": "바람 부는 날 서브는 어떻게 해야 하나요?",
    "a": "토스를 평소보다 낮게 하세요. 공이 공중에 머무는 시간을 줄여야 바람의 영향을 덜 받습니다. 스핀 서브나 슬라이스 서브를 주로 활용하여 확률을 높이는 것이 좋습니다."
  },
  {
    "q": "상대가 로브만 띄우는데 바람 때문에 힘들어요.",
    "a": "바람 부는 날 로브는 매우 위협적입니다. 무리해서 스매싱을 하기보다는, 바운드된 공을 안전하게 오버헤드나 포핸드로 처리하는 것이 낫습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","바람","강풍","테니스 꿀팁","야외 테니스"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            바람 부는 날 테니스 잘 치는 법 (강풍 대응 가이드)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            강풍은 테니스에서 가장 까다로운 변수입니다. 바람을 등지거나 안고 칠 때의 타점 조절, 풋워크 변화, 그리고 멘탈 관리까지 완벽하게 정리했습니다.
          </p>
        </div>
      </div>

      <Article slug="tennis-windy-condition-tips" date="2026-01-24" title="바람 부는 날 테니스 잘 치는 법 (강풍 대응 가이드)" excerpt="강풍은 테니스에서 가장 까다로운 변수입니다. 바람을 등지거나 안고 칠 때의 타점 조절, 풋워크 변화, 그리고 멘탈 관리까지 완벽하게 정리했습니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>바람, 피할 수 없다면 이용하라</h2>
      <p>야외 코트에서 테니스를 치다 보면 강풍을 만나는 경우가 많습니다. 많은 동호인들이 바람이 불면 짜증부터 내지만, 고수는 이를 기회로 삼습니다. 바람은 누구에게나 공평하게 불기 때문입니다.</p>

      <h3>1. 바람의 방향 읽기 (Head vs Tail)</h3>
      <p>코트에 들어서면 가장 먼저 바람의 방향을 체크하세요. 깃발이나 나무의 흔들림을 보면 알 수 있습니다.</p>
      <ul>
        <li><strong>맞바람 (Headwind):</strong> 공이 날아오다가 급격히 떨어지거나 멈춥니다. 평소보다 20~30% 더 길게 스윙하고, 네트 마진을 높게 가져가야 합니다. 드롭샷이 매우 효과적입니다.</li>
        <li><strong>뒷바람 (Tailwind):</strong> 공이 평소보다 훨씬 멀리 나갑니다. 파워보다는 회전(탑스핀)을 많이 걸어 공을 코트 안으로 떨어뜨리는 데 집중해야 합니다. 서브 시 토스를 조금 더 앞쪽에 두는 것이 좋습니다.</li>
        <li><strong>옆바람 (Crosswind):</strong> 공이 휘어집니다. 바람이 불어오는 쪽을 더 겨냥하고 에이밍(Aiming)을 수정해야 합니다.</li>
      </ul>

      <h3>2. 풋워크: 10cm의 싸움</h3>
      <p>바람 부는 날 가장 중요한 것은 '잔발'입니다. 공이 마지막 순간에 흔들리기 때문에, 임팩트 직전까지 발을 멈추지 말고 미세하게 위치를 조정해야 합니다. 평소보다 무릎을 더 낮추고 스탠스를 넓게 벌려 안정감을 확보하세요.</p>

      <h3>3. 타점과 스윙의 변화</h3>
      <p>바람이 불 때는 큰 백스윙보다는 간결한 컴팩트 스윙이 유리합니다. 타점을 평소보다 조금 더 앞에서 잡고, 임팩트에 집중하세요. 풀 스윙으로 강타를 날리기보다는, 70~80%의 힘으로 정확하게 맞추는 것이 핵심입니다.</p>

      <h3>4. 멘탈리티: "나만 힘든 게 아니다"</h3>
      <p>상대방도 똑같이 힘듭니다. 바람 탓을 하며 멘탈이 무너지는 순간 경기에서 집니다. "바람은 내 편"이라고 최면을 걸고, 실수하더라도 날씨 탓을 하지 말고 다음 포인트에 집중하는 것이 승리의 지름길입니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="tennis-windy-condition-tips" 
            category="Strategy" 
            tags={["테니스","바람","강풍","테니스 꿀팁","야외 테니스"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
