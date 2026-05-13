import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '테니스 코트 매너와 10가지 불문율 — 실력보다 빛나는 품격의 기술 | 진짜 고수들의 커뮤니티 생존 전략',
  description: '테니스 코트에서 환영받는 사람이 되는 법. 라인콜, 볼 공급, 복식 파트너십 등 10가지 불문율과 지역별 클럽 문화 완벽 정리.',
  keywords: ['테니스 예절', '테니스 매너', '코트 불문율', '라인콜', '테니스 동호회', '클럽 매너', '스포츠맨십'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-etiquette-and-manners',
  },
  openGraph: {
    title: '테니스 코트 매너와 10가지 불문율 — 실력보다 빛나는 품격의 기술 | 진짜 고수들의 커뮤니티 생존 전략',
    description: '테니스 코트에서 환영받는 사람이 되는 법. 라인콜, 볼 공급, 복식 파트너십 등 10가지 불문율과 지역별 클럽 문화 완벽 정리.',
    url: 'https://www.tennisfrens.com/blog/tennis-etiquette-and-manners',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 코트 매너와 10가지 불문율 — 실력보다 빛나는 품격의 기술',
    description: '테니스의 품격은 스윙보다 태도에서 드러난다. 매너 있는 플레이가 실력을 완성한다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'ten-unwritten-rules', text: "1. 테니스 친구들의 '10가지 불문율'", depth: 2 },
  { id: 'community-psychology', text: '2. 커뮤니티 심리학: 환영받는 파트너의 특징', depth: 2 },
  { id: 'legal-vs-etiquette', text: '3. 규칙 vs 매너: 애매한 상황의 정답', depth: 2 },
  { id: 'doubles-synergy', text: '4. 복식 시너지: 파트너의 실력을 120% 끌어올리는 매너', depth: 2 },
  { id: 'geo-culture-depth', text: '5. 로컬 클럽 문화: 지역별 고유 예절 분석', depth: 2 },
  { id: 'court-exit-ritual', text: '6. 마무리 의식: 마지막 인사가 다음 매칭을 결정한다', depth: 2 },
  { id: 'conclusion', text: '7. 결론: 실력은 기술로, 품격은 태도로', depth: 2 },
];

const faqs = [
  {
    q: '파트너가 너무 못해서 화가 날 때는?',
    a: '기량 차이는 죄가 아닙니다. 격려하며 본인의 페이스를 유지하는 것이 진짜 실력자의 매너입니다.'
  },
  {
    q: '상대방이 계속 라인콜을 속이는 것 같아요.',
    a: '한두 번은 넘어가되, 반복되면 정중하게 "방금 공 혹시 다시 확인할 수 있을까요?"라고 물으세요. 논쟁은 피하는 게 상책입니다.'
  }
];

export default function TennisEtiquetteAndMannersPage() {
  const title = '실력만큼 중요한 코트 위 \'보이지 않는 기술\'';
  const excerpt = '테니스는 상대와의 경쟁 이전에 나 자신과의 싸움이며, 동료와의 조화입니다. 코트 위에서 가장 환영받는 사람이 되는 10가지 비밀을 공개합니다.';

  return (
    <Article slug="tennis-etiquette-and-manners" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-neutral-50 to-stone-50 dark:from-neutral-950 dark:to-stone-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
            신사의 스포츠
          </Badge>
          <Badge className="bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-300">
            품격 가이드
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-center italic">
          "테니스 라켓을 든 순간, 당신의 인격이 코트 위에 그려진다."
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="ten-unwritten-rules" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 테니스 친구들의 '10가지 불문율'</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="bg-slate-50 dark:bg-slate-900 shadow-sm border-none">
            <CardContent className="p-4">
              <ul className="space-y-3 text-xs">
                <li><span className="text-blue-500 font-bold">01.</span> 서브 전 상대의 준비 상태를 반드시 확인하라.</li>
                <li><span className="text-blue-500 font-bold">02.</span> 볼 공급 시 상대가 받기 편한 속도와 높이로 던져라.</li>
                <li><span className="text-blue-500 font-bold">03.</span> 네트 터치나 럭키 샷(Net Cord) 시에는 미안함을 표시하라.</li>
                <li><span className="text-blue-500 font-bold">04.</span> 라인콜은 100% 확신이 없을 때 상대의 득점으로 인정하라.</li>
                <li><span className="text-blue-500 font-bold">05.</span> 옆 코트에서 공이 넘어오면 즉시 경기를 멈추고 공을 돌려줘라.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-slate-50 dark:bg-slate-900 shadow-sm border-none">
            <CardContent className="p-4">
              <ul className="space-y-3 text-xs">
                <li><span className="text-red-500 font-bold">06.</span> 경기 중 파트너를 비난하거나 가르치려 들지 마라.</li>
                <li><span className="text-red-500 font-bold">07.</span> 상대방의 실수에 박수치거나 환호하지 마라.</li>
                <li><span className="text-red-500 font-bold">08.</span> 코트 교체(Changeover) 시 네트를 가로지르지 마라.</li>
                <li><span className="text-red-500 font-bold">09.</span> 서브권이 없는 사람은 미리 공을 주워 서버에게 전달하라.</li>
                <li><span className="text-red-500 font-bold">10.</span> 끝난 후에는 결과와 상관없이 정중히 악수하며 인사하라.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="community-psychology" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 커뮤니티 심리학: 환영받는 파트너의 특징</h2>
        <p className="mb-6">동호회에서 '다시 경기하고 싶은 사람'은 실력이 좋은 사람보다 <strong>리듬감이 좋은 사람</strong>입니다.</p>
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border-l-4 border-blue-500">
          <h4 className="font-bold text-sm mb-3">The "Most Wanted" Checklist</h4>
          <ul className="text-xs space-y-2">
            <li>• <strong>공정함:</strong> 나에게 엄격하고 상대에게 관대한 판정.</li>
            <li>• <strong>격려:</strong> 파트너의 실수 후 1초 내에 짧은 박수나 "마이볼" 선언.</li>
            <li>• <strong>에너지:</strong> 점수와 상관없이 끝까지 공을 쫓는 태도.</li>
          </ul>
        </div>
      </section>

      <section id="legal-vs-etiquette" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 규칙 vs 매너: 애매한 상황의 정답</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-xl bg-white dark:bg-slate-900">
            <h5 className="font-bold text-sm mb-1 text-slate-800 dark:text-slate-200">Q. 공이 내 주머니에서 떨어졌다면?</h5>
            <p className="text-xs text-slate-500 leading-relaxed">첫 번째는 레트(Let), 두 번째부터는 실점입니다. 하지만 매너 있는 플레이어라면 "미안합니다, 제 실점입니다"라고 먼저 말하는 경우도 많습니다.</p>
          </div>
          <div className="p-4 border rounded-xl bg-white dark:bg-slate-900">
            <h5 className="font-bold text-sm mb-1 text-slate-800 dark:text-slate-200">Q. 상대 서브가 폴트(Fault)인 게 확실할 때?</h5>
            <p className="text-xs text-slate-500 leading-relaxed">리턴을 하지 말고 즉시 콜을 하세요. 폴트인 공을 굳이 세게 쳐서 넘기는 것은 불필요한 체력 소모와 상대에 대한 결례입니다.</p>
          </div>
        </div>
      </section>

      <section id="geo-culture-depth" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 로컬 클럽 문화: 지역별 고유 예절 분석</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <h5 className="font-bold text-xs text-indigo-600">수도권 클럽</h5>
            <p className="text-[10px] mt-1 italic">질서와 시간 준수 엄격. 서열보다 실력과 매너의 균형 중시.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <h5 className="font-bold text-xs text-blue-600">남부 연맹 (부산/창원)</h5>
            <p className="text-[10px] mt-1 italic">유대감과 네트워킹 강조. 경기 후 함께하는 식사나 차 한 잔이 매너의 연장선.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <h5 className="font-bold text-xs text-orange-600">내륙 클럽 (대구/경북)</h5>
            <p className="text-[10px] mt-1 italic">진지한 경기 분위기. 불필요한 농담보다 코트 위 집중력을 매너로 간주.</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <h5 className="font-bold text-xs text-teal-600">아카데미/레슨 코트</h5>
            <p className="text-[10px] mt-1 italic">코치에 대한 존중, 다음 대기자를 위한 신속한 코트 정리 최우선.</p>
          </div>
        </div>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 결론: 실력은 기술로, 품격은 태도로</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          테니스는 매너가 실력을 앞서는 유일한 스포츠일지도 모릅니다. 폼이 예쁜 사람보다 마음이 예쁜 사람이 코트에서 더 오래 살아남습니다. 당신의 매너가 곧 당신의 <strong>테니스 브랜드</strong>임을 잊지 마세요.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}
