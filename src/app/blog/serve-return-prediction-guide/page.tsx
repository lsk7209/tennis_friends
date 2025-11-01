import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 서브 리턴 완전정복 | 토스 읽기·첫 스텝 타이밍·라켓 각도',
  description: '서브 리턴은 예측의 기술이다. 토스 패턴, 발 리듬, 라켓 준비각, 코트별 리턴 전략과 훈련 루틴까지 완전 정리.',
  keywords: ['서브 리턴', '테니스 리턴', '토스 읽기', '스텝 타이밍', '라켓 준비각', '예측 기술'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/serve-return-prediction-guide',
  },
  openGraph: {
    title: '테니스 서브 리턴 완전정복 | 토스 읽기·첫 스텝 타이밍·라켓 각도',
    description: '서브 리턴은 예측의 기술이다. 토스 패턴, 발 리듬, 라켓 준비각, 코트별 리턴 전략과 훈련 루틴까지 완전 정리.',
    url: 'https://tennisfriends.co.kr/blog/serve-return-prediction-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 서브 리턴 완전정복 | 토스 읽기·첫 스텝 타이밍·라켓 각도',
    description: '서브 리턴은 예측의 기술이다. 토스 패턴, 발 리듬, 라켓 준비각, 코트별 리턴 전략과 훈련 루틴까지 완전 정리.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'return-starts-from-toss', text: '리턴의 출발점은 토스다', depth: 2 },
  { id: 'first-step-half-beat-fast', text: '첫 스텝은 \'반 박자 빠르게\'', depth: 2 },
  { id: 'racket-preparation-angle-minimize-backswing', text: '라켓 준비각과 백스윙 최소화', depth: 2 },
  { id: 'court-specific-return-strategy', text: '코트별 리턴 전략 (GEO 최적화)', depth: 2 },
  { id: 'return-routine-training', text: '20분 리턴 루틴 훈련법', depth: 2 },
  { id: 'common-return-errors', text: '실전에서 가장 흔한 리턴 오류 3가지', depth: 2 },
  { id: 'return-is-psychological-battle', text: '리턴은 심리전이다', depth: 2 },
];

const faqs = [
  {
    q: '강한 서브를 리턴할 때 무조건 막아야 하나요?',
    a: '아니요. 공의 에너지를 흡수해 블록 리턴하는 게 더 효율적입니다. 스윙을 줄이고 라켓면 각도만 유지하세요.'
  },
  {
    q: '세컨드 서브 공략은 어떻게 하나요?',
    a: '토스가 뒤로 넘어가면 킥 서브입니다. 타점을 높이고 위에서 눌러 공격적인 리턴을 시도하세요.'
  },
  {
    q: '리턴할 때 발이 자꾸 늦습니다.',
    a: '스플릿 스텝을 한 박자 빨리. 공이 나오기 전 이미 무릎을 굽혀 준비하세요.'
  },
  {
    q: '시선이 흔들려 공이 잘 안 보여요.',
    a: '토스–어깨–라켓 패스 세 지점만 스캔하는 시야 루틴을 익히세요.'
  },
  {
    q: '왼손 서버는 다르게 대응해야 하나요?',
    a: '네. 슬라이스가 백핸드로 휘어지므로 스탠스를 반 발 안쪽으로 두고 미리 준비하세요.'
  }
];

export default function ServeReturnPredictionGuidePage() {
  const title = '리턴은 반응이 아니라 \'예측\'의 기술이다 — 토스 읽기, 첫 스텝 타이밍, 라켓 준비각으로 퍼스트 서브도 되돌리는 서브 리턴 완전 정복';
  const excerpt = '서브 리턴은 반응이 아니라 예측의 경기다. 토스와 스텝 타이밍, 라켓 각도를 조정하면 180km 서브도 되돌릴 수 있다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            리턴 마스터
          </Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
            예측 기술
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          서브 리턴은 단순한 반사 신경의 싸움이 아닙니다. 프로 선수들은 '예측'을 통해 반응 시간을 벌고, 미리 스텝을 준비합니다. 공이 라켓에 맞는 순간은 0.1초 남짓이지만, 토스와 어깨 각도를 읽는다면 이미 0.2초 앞서 움직일 수 있습니다. 서브 리턴의 본질은 '정보 처리 속도'를 기술로 바꾸는 것입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/serve-return-technique-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">서브 리턴 테크닉 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/return-of-serve-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 서브 리턴 기초 가이드</a></li>
        </ul>
      </div>

      <section id="return-starts-from-toss" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          리턴의 출발점은 토스다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          서버의 토스 높이와 방향을 보면 구질의 70%를 미리 읽을 수 있습니다. 토스가 정면 위로 곧게 올라가면 플랫, 왼쪽(오른손잡이 기준)으로 이동하면 슬라이스, 뒤로 넘어가면 킥 서브입니다. 고수일수록 토스의 위치와 스윙 궤적이 일관돼서 예측이 어렵지만, 초중급에서는 토스가 곧 구질의 힌트입니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">토스 관찰 훈련법</h3>
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            연습 중 상대의 서브를 보며 눈으로 '토스의 최고점'만 추적하세요. 공이 올라갔다 떨어질 때까지 머리를 고정하고, 어깨와 허리 각도로 스윙 방향을 예측합니다.
          </p>
        </div>
      </section>

      <section id="first-step-half-beat-fast" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          첫 스텝은 '반 박자 빠르게'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          리턴 성공률은 스텝 타이밍에서 갈립니다. 대부분은 공이 이미 네트를 넘은 뒤에 움직이지만, 이상적인 타이밍은 서버 임팩트 '직전'입니다. 서버가 공을 치는 순간, 양발이 바닥에 닿으며 반발력으로 전진 준비가 되어 있어야 합니다. 이때 체중이 살짝 앞으로 기울면 반응 속도가 0.05초 단축됩니다.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">리듬 패턴: "탁-딱-톡"</h3>
          <p className="text-indigo-700 dark:text-indigo-300 text-sm">
            '탁'은 서버 토스, '딱'은 스플릿 스텝, '톡'은 라켓이 공에 닿는 순간입니다. 이 리듬을 익히면 리턴 감각이 일정해집니다.
          </p>
        </div>
      </section>

      <section id="racket-preparation-angle-minimize-backswing" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          라켓 준비각과 백스윙 최소화
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          서브 리턴에서 가장 많은 실수는 '큰 스윙'입니다. 강한 서브일수록 라켓을 크게 돌릴 여유가 없습니다. 리턴은 '짧고 단단한 블록'이 정답입니다. 라켓면을 1~2도 닫아 임팩트 순간 공이 살짝 아래로 눌리게 만드세요. 이는 플랫 서브의 반발을 흡수하고, 네트 여유를 확보하는 효과가 있습니다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">왼손의 역할 (투핸드 리턴)</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">왼손이 방향을 제어합니다. 라켓을 몸 앞 20cm 지점에서 맞추고, 임팩트 후 10cm 이내에 라켓면을 닫는 감각을 유지하세요.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">원핸드의 핵심</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">타점을 앞당기고 손목 고정이 핵심입니다.</p>
          </div>
        </div>
      </section>

      <section id="court-specific-return-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          코트별 리턴 전략 (GEO 최적화)
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 코트 환경은 지역별로 다르다. 리턴 전략도 그에 맞춰 조정해야 한다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 하드코트</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공의 반발이 빠르므로 스플릿 스텝 타이밍을 반 박자 빠르게. 라켓면을 살짝 닫아 컨트롤 중심.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산·남해 지역</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">습도가 높아 공이 무거워지므로 임팩트를 약간 늦추고, 스윙을 길게 가져가며 회전을 추가하세요.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구·내륙 지역</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">건조해 공이 가볍게 튀므로, 라켓면을 열지 말고 플랫 리턴 중심으로 공격적인 첫 볼.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주·서해안</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람이 많은 날은 토스가 흔들리므로, 예측보단 반응형 리턴. 짧은 백스윙으로 중심 낮추기.</p>
          </div>
        </div>
      </section>

      <section id="return-routine-training" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          20분 리턴 루틴 훈련법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">1. 3분 – 시각 훈련</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">영상으로 토스-임팩트 패턴 관찰. 상대의 토스 좌표와 스윙 궤적을 구분합니다.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2. 5분 – 그림자 리턴</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">공 없이 스텝과 백스윙 타이밍 훈련. '탁-딱-톡' 리듬 유지.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">3. 7분 – 콘 타깃 리턴</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">좌우 2m 콘 목표로 블록 리턴 20구 반복.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">4. 5분 – 호흡·리셋 루틴</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">복식호흡 3초 흡기, 4초 호기. 포인트 간 긴장 완화.</p>
          </div>
        </div>
      </section>

      <section id="common-return-errors" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-rose-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          실전에서 가장 흔한 리턴 오류 3가지
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">① 스윙이 너무 큼</h3>
            <p className="text-red-700 dark:text-red-300 text-sm">
              라켓 백스윙을 어깨 뒤로 넘기면 타이밍이 늦습니다. 라켓을 몸 앞에 유지하세요.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
            <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">② 중심이 뒤로 남음</h3>
            <p className="text-orange-700 dark:text-orange-300 text-sm">
              리턴 직전 상체가 뒤로 기울면 네트 미스 증가. 무릎을 굽히고 체중을 앞으로.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">③ 시선 흔들림</h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              공이 네트 근처일 때 눈을 돌리면 라켓면이 열립니다. 임팩트 후 0.2초까지 시선을 유지하세요.
            </p>
          </div>
        </div>
      </section>

      <section id="return-is-psychological-battle" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          리턴은 심리전이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          리턴은 '두려움을 줄이는 기술'입니다. 강서브를 막는 게 아니라, 상대보다 0.1초 먼저 움직이는 연습을 하는 것입니다. 토스의 패턴을 읽고, 스텝의 타이밍을 조정하며, 라켓 각도를 기억하세요. 리턴은 '예측 → 준비 → 단순화'의 순환입니다. 이 세 단계를 몸에 새기면, 상대의 퍼스트 서브가 더 이상 위협이 아니라 기회로 느껴질 겁니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-serve-timing-and-spin-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 mb-2">
                  서브 마스터
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 서브 완전 정복, 힘이 아닌 타이밍으로 승부하라
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  강한 서브는 팔힘이 아니라 리듬에서 나온다. 아마추어가 프로처럼 보이게 만드는 서브 타이밍과 스핀 컨트롤의 모든 것을 정리했다.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-mental-routine-control-guide">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 mb-2">
                  멘탈 마스터
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 멘탈 루틴, 승부를 결정짓는 건 결국 마음이다
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  포핸드보다 어려운 게 멘탈이다. 경기 중 흔들리지 않고 집중력을 유지하는 루틴 5단계, 프로 선수들의 심리 컨트롤법을 해석한다.
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
