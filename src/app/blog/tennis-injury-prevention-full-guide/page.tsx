import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 부상 예방 루틴 | 10분 워밍업·가동성·쿨다운 완전 정리',
  description: '어깨·팔꿈치·무릎 보호를 위한 워밍업·가동성·쿨다운 3단계 루틴과 지역별 기후 대응, 부상 징후별 대처법까지.',
  keywords: ['테니스 부상 예방', '워밍업', '가동성', '쿨다운', '스트레칭', '팔꿈치 통증', '어깨 통증', '무릎 통증'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-injury-prevention-full-guide',
  },
  openGraph: {
    title: '테니스 부상 예방 루틴 | 10분 워밍업·가동성·쿨다운 완전 정리',
    description: '어깨·팔꿈치·무릎 보호를 위한 워밍업·가동성·쿨다운 3단계 루틴과 지역별 기후 대응, 부상 징후별 대처법까지.',
    url: 'https://www.tennisfrens.com/blog/tennis-injury-prevention-full-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 부상 예방 루틴 | 10분 워밍업·가동성·쿨다운 완전 정리',
    description: '어깨·팔꿈치·무릎 보호를 위한 워밍업·가동성·쿨다운 3단계 루틴과 지역별 기후 대응, 부상 징후별 대처법까지.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'warmup-4-minutes', text: '1단계 — 워밍업 4분 (혈류와 신경 활성화)', depth: 2 },
  { id: 'mobility-4-minutes', text: '2단계 — 가동성 4분 (움직임 범위 확장)', depth: 2 },
  { id: 'cooldown-5-minutes', text: '3단계 — 쿨다운 5분 (근막 이완과 회복)', depth: 2 },
  { id: 'regional-climate-adaptation', text: 'GEO별 기후 대응 루틴', depth: 2 },
  { id: 'injury-signs-and-treatment', text: '부상 신호와 대처법', depth: 2 },
  { id: 'conclusion-routine-is-skill', text: '결론 — 루틴은 기술이다', depth: 2 },
];

const faqs = [
  {
    q: '워밍업은 몇 분이 적당할까요?',
    a: '최소 8~10분을 권장합니다. 기온이 낮을수록 2분 추가하세요.'
  },
  {
    q: '팔꿈치 통증이 생겼어요.',
    a: '폼 교정보다 휴식이 우선입니다. 전완 근막이완 + 얼음찜질을 병행하세요.'
  },
  {
    q: '정적 스트레칭은 경기 전에 하면 안 되나요?',
    a: '경기 전엔 동적 스트레칭 위주로. 정적은 경기 후 쿨다운에서.'
  },
  {
    q: '기구가 꼭 필요할까요?',
    a: '밴드 하나와 폼롤러면 충분합니다. 없다면 수건과 물병으로 대체 가능합니다.'
  },
  {
    q: '매일 해도 괜찮나요?',
    a: '네. 가벼운 루틴은 매일, 강도 높은 드릴은 격일로 수행하면 좋습니다.'
  }
];

export default function TennisInjuryPreventionFullGuidePage() {
  const title = '부상 예방은 워밍업이 끝이 아니다 — 어깨·팔꿈치·무릎을 지키는 10분 가동성 루틴과 경기 후 회복까지 완전 설계';
  const excerpt = '테니스 부상의 80%는 준비 부족 때문이다. 워밍업-가동성-쿨다운 루틴을 구조화하면 매 경기 부상 없이 성장할 수 있다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            건강 가이드
          </Badge>
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
            부상 예방
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          "오늘은 몸이 좀 뻣뻣한데…" 하고 그냥 라켓을 잡는 순간, 부상의 확률은 두 배로 올라갑니다. 테니스는 '순간 가속과 회전의 스포츠'이기 때문에 관절과 근육을 예열하지 않으면 피로가 누적되고, 결국 통증으로 되돌아옵니다. 대부분의 팔꿈치·어깨·무릎 통증은 잘못된 기술보다 '준비 부족'에서 시작됩니다. 부상을 막는 가장 확실한 방법은 워밍업·가동성·쿨다운을 루틴화하는 것입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-injury-prevention-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 부상 예방 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/training/tennis-injury-prevention.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 부상 예방 가이드</a></li>
        </ul>
      </div>

      <section id="warmup-4-minutes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          1단계 — 워밍업 4분 (혈류와 신경 활성화)
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스 전 워밍업의 목적은 '온도 상승'이 아니라 '신경 연결'입니다. 팔과 다리에 명령을 보내는 회로를 켜야 합니다. 다음 순서를 따라 하세요.
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">1. 어깨 서클 10회 × 2세트</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">견갑 움직임 확보.</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">2. 팔꿈치 굴신 15회</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">전완 근육 활성화.</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">3. 손목 회전 20회</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">라켓 스윙 충격 흡수 대비.</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">4. 고관절 오픈/클로즈 10회씩</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">중심 안정화.</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">5. 라이트 스킵 60초</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">체온 + 신경 활성화.</p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 핵심:</strong> 이 루틴은 단순하지만, 수행하면 어깨의 피로감이 눈에 띄게 줄어듭니다. 정적 스트레칭(쭉 버티는 동작)은 이때 피하세요. 힘을 빼는 게 아니라, 리듬을 만드는 단계입니다.
          </p>
        </div>
      </section>

      <section id="mobility-4-minutes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          2단계 — 가동성 4분 (움직임 범위 확장)
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 어깨 회전각, 고관절 회전, 발목 가동성이 중요합니다. 이를 위해 '동적 가동성 드릴'을 추천합니다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">밴드 풀어파트 15회</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">등 상부 근육을 깨워 백핸드 시 어깨 부하 감소.</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">월슬라이드 10회</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">어깨 관절과 견갑골 동시 조정.</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">힙 힌지 & 토르소 회전 10회</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">체간 연결 활성화.</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">발목 도어징크 10회</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">풋워크 중심이동 안정화.</p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>💡 효과:</strong> 이 네 가지는 하루 5분으로도 충분히 수행 가능하며, 지속하면 체간 회전 속도가 부드러워지고, '갑자기 찌릿한 통증'이 사라집니다.
          </p>
        </div>
      </section>

      <section id="cooldown-5-minutes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          3단계 — 쿨다운 5분 (근막 이완과 회복)
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          경기 후 바로 정지하면 근육이 짧아지고 젖산이 남습니다. 쿨다운은 회복의 시작이자 다음날 통증 예방의 핵심입니다.
        </p>

        <div className="space-y-3 mb-6">
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">1. 심박 안정화 2분</h3>
            <p className="text-green-700 dark:text-green-300 text-sm">복식호흡으로 맥박을 천천히 낮춥니다.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">2. 정적 스트레칭</h3>
            <p className="text-green-700 dark:text-green-300 text-sm">햄스트링·대퇴사두·장요근·종아리 각 30초.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">3. 폼롤러 이완</h3>
            <p className="text-green-700 dark:text-green-300 text-sm">전완·광배근·둔근·종아리 각 30초씩.</p>
          </div>
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">4. 마무리</h3>
            <p className="text-green-700 dark:text-green-300 text-sm">손목·팔꿈치 부위를 원형으로 부드럽게 마사지.</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 효과:</strong> 이 과정을 생략하면 다음날 근육이 뻣뻣해지고, 관절이 무거워집니다. 매 경기 후 단 5분만 투자해도 '누적 피로'가 절반 이하로 줄어듭니다.
          </p>
        </div>
      </section>

      <section id="regional-climate-adaptation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          GEO별 기후 대응 루틴
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 지역별 기후와 코트 조건에 따라 부상 예방 루틴도 달라집니다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·수도권 (건조하고 바람 적음)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">워밍업 2분 추가, 어깨·손목 중심.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산·남해 지역 (습도 높고 미끄러움)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">발목·무릎 중심, 가동성 루틴 필수.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구·내륙 지역 (고온)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">워밍업 강도 낮추고, 쿨다운·수분 보충 강화.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주·해안 지역 (바람과 온도 변화 큼)</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">긴팔 레이어링 + 근막이완 루틴 필수.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>👉 GEO 팁:</strong> 이처럼 지역별 환경에 맞춰 루틴을 조정하면 '날씨 피로'까지 줄일 수 있습니다. GEO 기반 루틴은 단순한 SEO가 아니라, 실제 생리학적 적응 전략이기도 합니다.
          </p>
        </div>
      </section>

      <section id="injury-signs-and-treatment" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          부상 신호와 대처법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">팔꿈치에 찌릿한 통증</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">
              스윙 직후라면 '테니스엘보' 초기. 그립 압을 줄이고, 폼롤러로 전완을 1분 이완 후 얼음찜질.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">무릎 통증</h3>
            <p className="text-orange-700 dark:text-orange-300 text-sm">
              풋워크 과도 시 무릎 정렬이 틀어짐. 무릎 밑에 수건을 대고 다리 들기 운동으로 근막 정렬 회복.
            </p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">어깨 묵직함</h3>
            <p className="text-purple-700 dark:text-purple-300 text-sm">
              스트레칭보다 '밴드 리트랙션'으로 견갑을 제자리로 복귀.
            </p>
          </div>
        </div>
      </section>

      <section id="conclusion-routine-is-skill" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          결론 — 루틴은 기술이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          부상 예방은 선택이 아니라 기술입니다. 워밍업과 가동성, 쿨다운은 몸을 '사용 전 세팅'하고 '사용 후 리셋'하는 과정입니다. 꾸준히 하면 스윙의 속도와 안정성이 동시에 올라가고, 40대 이후에도 통증 없는 테니스를 즐길 수 있습니다. 단 하루라도 루틴을 빼먹었다면, 그날은 '준비되지 않은 경기'입니다. 몸이 말해줄 겁니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/rainy-day-tennis-tips-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  날씨 대응
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  비 오는 날에도 테니스는 계속된다, 감각 유지법 6가지
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  비가 와도 테니스 감각은 잃지 않는다. 실내 대체 루틴부터 장비 관리, 리듬 유지 훈련까지, 날씨에 구애받지 않는 플레이어의 비밀을 공개한다.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-shoes-balance-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-stone-100 text-stone-700 dark:bg-stone-900 dark:text-stone-300 mb-2">
                  장비 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스화 선택은 '접지·지지·쿠션'의 균형이다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스 실력의 절반은 신발에서 시작된다. 표면·발형·지지·사이징을 이해하면 부상은 줄고, 스텝 속도는 오른다.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
