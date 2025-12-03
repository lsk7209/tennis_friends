import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 부상 예방과 회복 루틴 — 어깨·무릎·손목을 지키는 과학적 관리법 | 아마추어를 위한 부상 제로 실전 매뉴얼',
  description: '부상은 실력이 아니라 루틴의 문제다. 어깨·무릎·손목을 지키는 습관만 만들어도 경기력은 2배로 오래간다.',
  keywords: ['테니스 부상', '부상 예방', '어깨 통증', '무릎 부상', '손목 부상', '스트레칭', '회복 루틴', '테니스 건강 관리'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-injury-prevention-recovery',
  },
  openGraph: {
    title: '테니스 부상 예방과 회복 루틴 — 어깨·무릎·손목을 지키는 과학적 관리법 | 아마추어를 위한 부상 제로 실전 매뉴얼',
    description: '부상은 실력이 아니라 루틴의 문제다. 어깨·무릎·손목을 지키는 습관만 만들어도 경기력은 2배로 오래간다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-injury-prevention-recovery',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 부상 예방과 회복 루틴 — 어깨·무릎·손목을 지키는 과학적 관리법 | 아마추어를 위한 부상 제로 실전 매뉴얼',
    description: '부상은 실력이 아니라 루틴의 문제다. 어깨·무릎·손목을 지키는 습관만 만들어도 경기력은 2배로 오래간다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'shoulder-prevention', text: '1. 어깨 — 스윙의 중심이자 가장 취약한 관절', depth: 2 },
  { id: 'knee-prevention', text: '2. 무릎 — 풋워크와 체중 이동의 중심', depth: 2 },
  { id: 'wrist-prevention', text: '3. 손목 — 작은 차이가 큰 손상을 만든다', depth: 2 },
  { id: 'geo-injury-risk', text: '4. GEO별 부상 리스크 관리', depth: 2 },
  { id: 'recovery-science', text: '5. 회복의 과학 — 24시간 리커버리 사이클', depth: 2 },
  { id: 'injury-habits', text: '6. 부상 예방의 습관 — "Before & After"를 의식하라', depth: 2 },
  { id: 'conclusion-injury-free', text: '결론 — 부상 없는 테니스는 \'습관\'으로 완성된다', depth: 2 },
];

const faqs = [
  {
    q: '테니스 후 어깨가 아플 때는 어떻게 해야 하나요?',
    a: '즉시 냉찜질 10분 후 휴식을 취하세요. 다음날까지 통증이 지속되면 회전근개 염증일 가능성이 있으니 병원 진단을 받으세요.'
  },
  {
    q: '무릎이 자주 아픈데 테니스를 계속해도 될까요?',
    a: '통증이 가벼운 경우는 쿠션 좋은 신발과 무릎 보호대 사용을 추천합니다. 통증이 심하면 2~3일간 휴식하세요.'
  },
  {
    q: '손목 부상을 방지하려면?',
    a: '손목을 과도하게 사용하지 말고, 라켓을 가볍게 잡으세요. 서브와 발리 시 손목은 고정 상태가 이상적입니다.'
  },
  {
    q: '운동 후 냉찜질과 온찜질 순서가 헷갈립니다.',
    a: '경기 직후는 냉찜질, 24시간 이후는 온찜질로 바꾸세요. 초기 염증을 막고 회복을 촉진합니다.'
  },
  {
    q: '하드코트에서 가장 조심해야 할 부상은?',
    a: '무릎과 발목입니다. 충격이 크기 때문에 신발 쿠션과 준비운동이 필수입니다.'
  }
];

export default function TennisInjuryPreventionRecoveryPage() {
  const title = '테니스 부상 예방과 회복 루틴 — 어깨·무릎·손목을 지키는 과학적 관리법 | 아마추어를 위한 부상 제로 실전 매뉴얼';
  const excerpt = '부상은 실력이 아니라 루틴의 문제다. 어깨·무릎·손목을 지키는 습관만 만들어도 경기력은 2배로 오래간다.';

  return (
    <Article slug="tennis-injury-prevention-recovery" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            건강 관리
          </Badge>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
            부상 예방
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스는 '반복의 스포츠'입니다. 하지만 반복은 부상을 부릅니다. 아마추어들이 경기를 중단하는 이유 중 70%가 부상 때문이며, 그중 절반은 잘못된 루틴에서 비롯됩니다. 부상은 피할 수 없는 것이 아니라, 관리할 수 있는 것입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-injury-prevention-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 부상 예방 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-health-fitness.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 건강 관리 가이드</a></li>
        </ul>
      </div>

      <section id="shoulder-prevention" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          어깨 — 스윙의 중심이자 가장 취약한 관절
        </h2>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg mb-6 border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>원인:</strong> 과도한 스윙 반복, 회전근개(로테이터 커프) 근육 약화.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">예방 루틴 (운동 전 5분)</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• <strong>밴드 외회전 스트레칭</strong> — 팔꿈치 90도, 고무밴드 잡고 바깥으로 밀기 15회.</li>
            <li>• <strong>숄더 서클</strong> — 어깨를 크게 돌리며 10회 × 2세트.</li>
            <li>• <strong>라켓 들고 팔 벌리기</strong> — 회전근개 자극, 30초 유지.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">운동 후 회복 루틴</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 얼음찜질 10분 → 어깨 스트레칭 3세트.</li>
            <li>• 하루 2회 'Y-T-W' 어깨 강화 동작 10회씩.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>💡 팁:</strong> 어깨 통증이 있을 땐 스윙을 줄이고, 하체 회전으로 타이밍을 보완하세요. 팔로만 치면 회전근개가 쉽게 손상됩니다.
          </p>
        </div>
      </section>

      <section id="knee-prevention" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          무릎 — 풋워크와 체중 이동의 중심
        </h2>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg mb-6 border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>원인:</strong> 급정지, 방향 전환, 무릎 내측·외측 인대 부담.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">예방 루틴 (운동 전)</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• <strong>스텝 점프</strong> — 제자리 점프 10회 × 3세트.</li>
            <li>• <strong>런지 워킹</strong> — 좌우 10걸음, 허리 곧게 유지.</li>
            <li>• <strong>햄스트링 스트레칭</strong> — 허리를 굽히지 않고 다리 뒤 근육 늘리기 30초.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">운동 중 관리:</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 급격한 방향 전환 전 '스플릿 스텝'으로 충격 분산.</li>
            <li>• 코트 끝 라인에서 '감속 스텝' 2단계로 제동.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">회복 루틴:</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 경기 후 무릎 아이싱 15분.</li>
            <li>• 하루 1회 '벽 의자 자세' 1분 × 3세트.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>⚠️ 주의:</strong> 통증이 '찌릿'하게 느껴지면 인대 염좌 가능성이 있습니다. 즉시 휴식하고, 냉찜질 후 24시간 이내 병원 진단을 권장합니다.
          </p>
        </div>
      </section>

      <section id="wrist-prevention" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          손목 — 작은 차이가 큰 손상을 만든다
        </h2>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg mb-6 border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>원인:</strong> 잘못된 그립, 과한 회전, 무리한 서브·발리.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">예방 루틴</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• <strong>라켓 웨이브 드릴</strong> — 손목으로 라켓 좌우 흔들기 15회 × 2세트.</li>
            <li>• <strong>그립 압박 테스트</strong> — 라켓을 70% 힘으로 쥐기, 3초 유지 후 이완.</li>
            <li>• <strong>손목 회전 스트레칭</strong> — 반대손으로 손목을 부드럽게 젖히기.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">회복 루틴:</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 경기 후 10분 냉찜질 → 손목 스트랩 착용.</li>
            <li>• 통증 지속 시 2~3일간 서브 훈련 중단.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>💡 팁:</strong> 슬라이스나 발리 시 손목을 과도하게 꺾지 마세요. 임팩트는 팔 전체로, 손목은 고정 상태를 유지하는 게 원칙입니다.
          </p>
        </div>
      </section>

      <section id="geo-injury-risk" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          GEO별 부상 리스크 관리
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">충격 강함 → 무릎·발목 부담 ↑ → 신발 쿠션 중요.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습도 높음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">미끄러짐 주의 → 슬라이드 시 중심 낮추기.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">근육 탈수 위험 → 경기 전후 수분 보충 필수.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">스윙 보정 잦음 → 어깨 회전 과부하 주의.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>📍 GEO 팁:</strong> 지역별 기후와 코트 조건에 따라 부상 부위가 달라집니다. GEO 기반 루틴을 적용하면 부상 확률을 40% 이상 줄일 수 있습니다.
          </p>
        </div>
      </section>

      <section id="recovery-science" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          회복의 과학 — 24시간 리커버리 사이클
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">시간대</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">루틴</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">경기 직후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">냉찜질 10~15분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">염증 억제 및 근육 열 방출</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">3시간 후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">단백질·수분 보충</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">근섬유 회복, 피로물질 제거</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">12시간 후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">가벼운 스트레칭</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">혈류 순환 개선</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">24시간 후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">온찜질 전환</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">근육 이완 및 회복 가속</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>🔬 핵심:</strong> 냉찜질과 온찜질은 시간 순서를 지켜야 효과가 있습니다. 바로 온찜질을 하면 염증이 악화될 수 있습니다.
          </p>
        </div>
      </section>

      <section id="injury-habits" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          부상 예방의 습관 — "Before & After"를 의식하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스의 부상은 경기 중보다 <strong>경기 전·후 관리 부족</strong>에서 발생합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">경기 전: 10분 준비운동</h3>
            <p className="text-green-700 dark:text-green-300 text-sm">(근육 각성)</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">경기 후: 10분 정리운동</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">(근육 이완)</p>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            이 두 루틴을 지키면 부상 위험이 60% 이상 줄어듭니다.
          </p>
        </div>
      </section>

      <section id="conclusion-injury-free" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 부상 없는 테니스는 '습관'으로 완성된다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 완벽한 기술보다 '지속 가능한 몸'을 가진 사람이 이깁니다. 어깨는 회전으로, 무릎은 중심으로, 손목은 힘 조절로 지키세요. 매일 15분의 루틴이 1년의 테니스를 바꿉니다. 꾸준히 관리하는 선수만이 오래 즐길 수 있습니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        </div>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
