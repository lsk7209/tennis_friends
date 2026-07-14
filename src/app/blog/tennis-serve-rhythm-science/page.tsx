import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '서브 리듬의 과학 — 토스·회전·체중이동으로 완성하는 파워와 안정성 | 첫 서브 성공률 70% 만드는 방법',
  description: '토스 높이, 회전축, 체중이동 타이밍으로 서브 파워와 안정성을 동시에 높이는 실전 루틴과 지역별 조정법 완전 정리.',
  keywords: ['테니스 서브', '토스', '체중이동', '회전', '리듬', '서브 타이밍', '플랫 서브', '슬라이스 서브', '킥 서브'],
  alternates: {
    canonical: 'https://tennisfrens.com/blog/tennis-serve-rhythm-science',
  },
  openGraph: {
    title: '서브 리듬의 과학 — 토스·회전·체중이동으로 완성하는 파워와 안정성 | 첫 서브 성공률 70% 만드는 방법',
    description: '토스 높이, 회전축, 체중이동 타이밍으로 서브 파워와 안정성을 동시에 높이는 실전 루틴과 지역별 조정법 완전 정리.',
    url: 'https://tennisfrens.com/blog/tennis-serve-rhythm-science',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '서브 리듬의 과학 — 토스·회전·체중이동으로 완성하는 파워와 안정성 | 첫 서브 성공률 70% 만드는 방법',
    description: '토스 높이, 회전축, 체중이동 타이밍으로 서브 파워와 안정성을 동시에 높이는 실전 루틴과 지역별 조정법 완전 정리.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'trophy-position', text: '1. 트로피 포지션: 파워의 저장소 (The Power L)', depth: 2 },
  { id: 'pronation-science', text: '2. 내전(Pronation)의 과학: 채찍질의 마법', depth: 2 },
  { id: 'kinetic-chain-serve', text: '3. 서브의 4단계 운동 사슬: Load to Land', depth: 2 },
  { id: 'toss-accuracy', text: '4. 토스 정확도: 시계면(Clock Face) 조절법', depth: 2 },
  { id: 'regional-serve-strategy', text: '5. 코트별/지역별 서브 적응 전략', depth: 2 },
  { id: 'serve-ritual-pro', text: '6. 프로의 서브 리추얼(Ritual) 따라하기', depth: 2 },
  { id: 'conclusion', text: '7. 결론: 서브는 기술이 아닌 박자다', depth: 2 },
];

const faqs = [
  {
    q: '첫 서브 성공률을 높이려면?',
    a: '리듬을 10% 낮추고 정확한 타점(Impact Point)에 집중하세요. 속도보다 일관된 토스가 핵심입니다.'
  },
  {
    q: '어깨 통증이 심합니다.',
    a: '팔의 힘으로만 휘두르기 때문입니다. 하체의 반발력을 상체로 전달하는 리듬을 점검하세요.'
  }
];

export default function TennisServeRhythmSciencePage() {
  const title = '서브 리듬의 과학 — 성공률 70%를 만드는 임계점';
  const excerpt = '서브는 힘이 아니라 리듬의 예술입니다. 트로피 포지션의 각도, 전완의 내전, 그리고 0.1초의 체중 이동이 승패를 가릅니다.';

  return (
    <Article slug="tennis-serve-rhythm-science" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            서브 바이오메카닉스
          </Badge>
          <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            고급 기술 가이드
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-center">
          "서브는 테니스에서 본인이 완벽하게 통제할 수 있는 유일한 샷입니다."
        </p>
      </div>

      <TOC items={tocItems} />

      <section id="trophy-position" className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 트로피 포지션: 파워의 저장소 (The Power L)</h2>
        <p className="mb-4">서브의 파워는 테이크백이 아닌 <strong>'도약 전 정지 상태'</strong>인 트로피 포지션에서 결정됩니다.</p>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 mb-6">
          <ul className="space-y-3 text-sm">
            <li>• <strong>오른쪽 어깨 하강:</strong> 왼쪽 어깨는 높게, 오른쪽 어깨는 낮게 하여 '어깨 축의 경사'를 만듭니다.</li>
            <li>• <strong>90도 엘보우 (The L):</strong> 팔꿈치 각도가 90도를 유지해야 어깨 회전근개에 무리가 가지 않고 토크를 극대화할 수 있습니다.</li>
            <li>• <strong>힙 드라이브:</strong> 골반이 코트 안쪽으로 살짝 밀려 나오며 활처럼 휘어지는 'C-자형' 몸통을 유지합니다.</li>
          </ul>
        </div>
      </section>

      <section id="pronation-science" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 내전(Pronation)의 과학: 채찍질의 마법</h2>
        <p className="mb-4">서브 속도의 비밀은 어깨가 아니라 <strong>전완(Forearm)의 회전</strong>에 있습니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-amber-50 dark:bg-amber-900/10 border-amber-100">
            <CardContent className="p-5">
              <h4 className="font-bold text-amber-800 mb-2">Internal Rotation</h4>
              <p className="text-xs">임팩트 직전 라켓 면이 공을 향해 급격히 회전하며 손바닥이 바깥쪽을 향하게 되는 과정입니다. 이 운동이 공에 엄청난 가속도를 붙입니다.</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 dark:bg-blue-900/10 border-blue-100">
            <CardContent className="p-5">
              <h4 className="font-bold text-blue-800 mb-2">Snap Finish</h4>
              <p className="text-xs">내전 후 라켓 헤드가 지면을 향해 떨어지며 어깨 뒤가 아닌 왼쪽 옆구리 쪽으로 흐르게 해야 부상을 방지할 수 있습니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="kinetic-chain-serve" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 서브의 4단계 운동 사슬: Load to Land</h2>
        <div className="relative border-l-2 border-orange-500 ml-4 pl-8 space-y-8">
          <div className="relative">
            <span className="absolute -left-11 top-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">01</span>
            <h4 className="font-bold text-sm">LOADING (장전)</h4>
            <p className="text-xs text-slate-600">무릎을 굽히고 지면의 에너지를 하체에 모으는 단계.</p>
          </div>
          <div className="relative">
            <span className="absolute -left-11 top-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">02</span>
            <h4 className="font-bold text-sm">EXPLODE (폭발)</h4>
            <p className="text-xs text-slate-600">지면을 박차고 위로 솟구치며 하체의 힘을 상체로 전달.</p>
          </div>
          <div className="relative">
            <span className="absolute -left-11 top-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">03</span>
            <h4 className="font-bold text-sm">CONTACT (임팩트)</h4>
            <p className="text-xs text-slate-600">내 팔의 최대 길이 지점에서 공을 타격 (가장 높은 지점 아님).</p>
          </div>
          <div className="relative">
            <span className="absolute -left-11 top-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">04</span>
            <h4 className="font-bold text-sm">LANDING (착지)</h4>
            <p className="text-xs text-slate-600">왼발로 코트 안을 밟으며 다음 동작을 위해 밸런스 유지.</p>
          </div>
        </div>
      </section>

      <section id="toss-accuracy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 토스 정확도: 시계면(Clock Face) 조절법</h2>
        <p className="mb-4">토스 위치는 서브의 구질을 결정하는 내비게이션입니다.</p>
        <div className="p-6 bg-slate-900 text-white rounded-2xl">
          <div className="grid grid-cols-3 text-center gap-2">
            <div className="p-3 border border-slate-700 rounded-lg">
              <span className="text-[10px] block opacity-50">11:00</span>
              <span className="text-xs font-bold">KICK SERVE</span>
            </div>
            <div className="p-3 border border-slate-700 rounded-lg bg-orange-500/20 border-orange-500">
              <span className="text-[10px] block opacity-50">12:30</span>
              <span className="text-xs font-bold">FLAT SERVE</span>
            </div>
            <div className="p-3 border border-slate-700 rounded-lg">
              <span className="text-[10px] block opacity-50">01:30</span>
              <span className="text-xs font-bold">SLICE SERVE</span>
            </div>
          </div>
          <p className="mt-4 text-[10px] text-slate-400 text-center">*오른손잡이 기준 / 몸 전방 30cm 기준</p>
        </div>
      </section>

      <section id="serve-ritual-pro" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 프로의 서브 리추얼(Ritual) 따라하기</h2>
        <p className="mb-4">서브 직전의 일정한 습관은 긴장되는 순간 뇌를 '경기 모드'로 고정시킵니다.</p>
        <Card className="border-dashed border-2">
          <CardContent className="p-6">
            <p className="text-sm font-bold mb-3">🏅 Recommended Ritual:</p>
            <ol className="text-xs space-y-2 text-slate-600 list-decimal pl-4">
              <li>베이스라인 뒤에서 타겟 지점 3초 주시.</li>
              <li>공 바운스 3~5회 (심박수 안정).</li>
              <li>호흡을 깊게 내뱉으며 어깨 긴장 완화.</li>
              <li>루틴 시작 시 라켓 끝을 타겟 방향으로 고정.</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section id="conclusion" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 결론: 서브는 기술이 아닌 박자다</h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          모든 최첨단 바이오메카닉스도 <strong>일정한 박자</strong>가 없다면 무너집니다. 자신의 서브를 비디오로 찍어 '1-2-3-타'의 리듬이 깨지는 구간을 찾으세요. 그 구간을 수정하는 것만으로도 당신의 첫 서브는 상대를 두렵게 만드는 무기가 될 것입니다.
        </p>
      </section>

      <FAQ items={faqs} />
    </Article>
  );
}
