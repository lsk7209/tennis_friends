import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '겨울 테니스 실내 훈련 루틴 | 스피드·감각 유지법 완전정리',
  description: '겨울 테니스 실내 코트에서 스윙 감각과 스피드를 유지하는 7가지 루틴. 장비, 워밍업, 리듬 훈련, 컨디션 관리까지 완벽 가이드.',
  keywords: ['겨울 테니스', '실내 코트', '테니스 루틴', '스피드 유지', '감각 훈련', '겨울 훈련'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/winter-indoor-tennis-training-routine',
  },
  openGraph: {
    title: '겨울 테니스 실내 훈련 루틴 | 스피드·감각 유지법 완전정리',
    description: '겨울 테니스 실내 코트에서 스윙 감각과 스피드를 유지하는 7가지 루틴. 장비, 워밍업, 리듬 훈련, 컨디션 관리까지 완벽 가이드.',
    url: 'https://tennisfriends.co.kr/blog/winter-indoor-tennis-training-routine',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '겨울 테니스 실내 훈련 루틴 | 스피드·감각 유지법 완전정리',
    description: '겨울 테니스 실내 코트에서 스윙 감각과 스피드를 유지하는 7가지 루틴.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'indoor-court-characteristics', text: '실내 코트의 특성을 이해하라', depth: 2 },
  { id: 'joint-mobility-warmup', text: '워밍업의 핵심은 \'관절 가동성\'', depth: 2 },
  { id: 'indoor-lighting-adaptation', text: '실내 조명에 맞는 \'시야 적응\' 훈련', depth: 2 },
  { id: 'mini-tennis-rhythm-maintenance', text: '리듬 감각을 유지하는 \'미니 테니스 루틴\'', depth: 2 },
  { id: 'winter-equipment-setup', text: '겨울용 라켓 세팅과 의류 체크', depth: 2 },
  { id: 'winter-season-training-points', text: '겨울 시즌만의 훈련 포인트', depth: 2 },
  { id: 'mental-routine-strength', text: '멘탈과 루틴이 실력을 만든다', depth: 2 },
  { id: 'winter-tennis-checklist', text: '겨울 테니스 체크리스트', depth: 2 },
];

const faqs = [
  {
    q: '겨울에 실내 코트에서도 손이 시린 이유는?',
    a: '라켓을 잡는 동안 혈액순환이 느려져 감각이 떨어지기 때문입니다. 얇은 스포츠 장갑이나 따뜻한 그립을 사용하는 것이 좋습니다.'
  },
  {
    q: '실내 코트와 야외 코트의 가장 큰 차이는?',
    a: '실내 코트는 바람이 없어 궤적이 일정하지만 반발력이 낮습니다. 대신 정확한 타점 훈련에 유리합니다.'
  },
  {
    q: '겨울에도 스피드를 유지하는 법은?',
    a: '미니 테니스로 리듬 훈련을 꾸준히 하면 반사신경이 유지되어 스윙 속도가 떨어지지 않습니다.'
  },
  {
    q: '겨울용 스트링 세팅은 어떻게 하나요?',
    a: '기존보다 텐션을 2파운드 낮추고 반발력이 높은 멀티필라멘트 스트링으로 교체하면 안정적입니다.'
  },
  {
    q: '겨울 시즌 테니스 루틴의 핵심은?',
    a: '\'꾸준함\'과 \'정확도\'입니다. 매주 같은 시간대에 같은 루틴을 반복하면 감각이 유지됩니다.'
  }
];

export default function WinterIndoorTennisTrainingRoutinePage() {
  const title = '겨울 테니스, 실내 코트에서 실력을 올리는 7가지 루틴';
  const excerpt = '겨울엔 테니스 감이 떨어진다고요? 실내 코트에서도 스피드와 감각을 유지할 수 있는 루틴이 있습니다. 시즌 오프를 성장기로 만드는 법, 지금 시작하세요.';

  return (
    <Article slug="winter-indoor-tennis-training-routine" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            겨울 훈련
          </Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
            실내 코트
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          겨울이 오면 테니스 동호인들의 가장 큰 고민은 '감각 유지'다. 차가운 공기 속에서는 손끝의 감각이 둔해지고, 실내 코트는 공의 반발감이 달라지기 때문에 타이밍이 흔들리기 쉽다. 하지만 이 시기를 잘 활용하면 봄 시즌엔 한 단계 성장한 자신을 만나게 된다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-footwork-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 풋워크 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/footwork-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 풋워크 기초 가이드</a></li>
        </ul>
      </div>

      <section id="indoor-court-characteristics" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          실내 코트의 특성을 이해하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          겨울 실내 코트는 바람이 없고 온도가 일정해 <strong>공의 궤적이 예측 가능</strong>하다. 대신 반발력이 낮아 공이 '묵직하게' 느껴진다. 이때 필요한 건 강한 스윙이 아니라 <strong>정확한 타점</strong>이다. 실내에서는 스윙 궤적보다 임팩트 타이밍이 중요하다. 공을 '세게 치기'보다 '정확히 맞히기'를 목표로 하자.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>👉 팁:</strong> 공의 반발이 약한 만큼, 스윙 템포를 10% 빠르게 가져가면 적응이 빠르다.
          </p>
        </div>
      </section>

      <section id="joint-mobility-warmup" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          워밍업의 핵심은 '관절 가동성'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          실내라도 겨울 공기는 몸을 뻣뻣하게 만든다. 단순히 스트레칭만으로는 부족하다. 어깨, 손목, 고관절을 중심으로 한 <strong>가동성 운동</strong>이 필수다.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">어깨: 팔을 원형으로 10회 돌리기</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">손목: 라켓 없이 위아래 회전 20회</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">고관절: 제자리 런지 스텝 10회씩</span>
          </li>
        </ul>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>👉 실천:</strong> "땀나기 전까지는 볼을 치지 않는다." 이것이 부상 방지의 기본 원칙이다.
          </p>
        </div>
      </section>

      <section id="indoor-lighting-adaptation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          실내 조명에 맞는 '시야 적응' 훈련
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          실내 코트의 조명은 바깥보다 밝고 그림자가 적다. 이 때문에 타점이 살짝 늦거나 공의 궤적이 과하게 보일 수 있다. 눈의 초점을 공에만 고정하지 말고 <strong>'시야 전체를 활용'</strong>하는 연습을 하자. 5분간 라켓 없이 공을 던지고 받는 연습만으로도 눈의 초점 적응력이 향상된다.
        </p>

        <blockquote className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-950 italic">
          <p className="text-purple-800 dark:text-purple-200">
            "눈으로 치는 테니스가 아니라, 리듬으로 맞추는 테니스다." — 시야 적응은 결국 리듬 감각과 연결된다.
          </p>
        </blockquote>
      </section>

      <section id="mini-tennis-rhythm-maintenance" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          리듬 감각을 유지하는 '미니 테니스 루틴'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          실내에서는 전 코트를 활용하기 어렵기 때문에 <strong>미니 테니스</strong>가 핵심 루틴이다. 네트 가까이에서 빠른 템포로 공을 주고받으면 반사신경과 리듬이 살아난다.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">네트 앞 2m 거리에서 10분 랠리</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">백핸드 중심의 짧은 리턴 훈련</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">라켓 대신 손바닥으로 공 컨트롤 연습</span>
          </li>
        </ul>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>👉 효과:</strong> 겨울 내내 미니 테니스만 해도 봄 시즌엔 공의 타점을 잃지 않는다.
          </p>
        </div>
      </section>

      <section id="winter-equipment-setup" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          겨울용 라켓 세팅과 의류 체크
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          기온이 낮으면 스트링이 수축되어 텐션이 강해진다. <strong>텐션을 2파운드 낮추는 것</strong>만으로도 반발력이 안정된다. 또한 장갑형 테니스 그립을 사용하는 것도 추천한다. 손의 온도를 유지해야 감각이 살아난다.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          의류는 '가벼운 보온'이 핵심이다. 두꺼운 점퍼 대신 <strong>기모 기능성 이너 + 얇은 윈드브레이커</strong> 조합이 가장 이상적이다.
        </p>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>👉 장비 팁:</strong> 신발 바닥의 먼지를 자주 닦아라. 실내 코트의 먼지는 접지력을 떨어뜨린다.
          </p>
        </div>
      </section>

      <section id="winter-season-training-points" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          겨울 시즌만의 훈련 포인트
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          겨울에는 공식 경기가 적기 때문에 <strong>폼 교정과 체력 강화</strong>에 집중하기 좋다.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">백스윙이 길다면, 짧고 컴팩트하게 조정</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">체중 이동 연습: 공 없이 그림자 스윙 30회</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">하체 근력: 제자리 스쿼트 20회 × 3세트</span>
          </li>
        </ul>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>👉 핵심:</strong> "속도를 줄이고 정확도를 높인다." 겨울은 기술 정비의 계절이다.
          </p>
        </div>
      </section>

      <section id="mental-routine-strength" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          멘탈과 루틴이 실력을 만든다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          겨울엔 운동량이 줄어 집중력도 떨어진다. 하지만 루틴을 정해두면 <strong>자동으로 훈련 흐름이 생긴다.</strong>
        </p>

        <blockquote className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 dark:bg-teal-950 italic mb-6">
          <p className="text-teal-800 dark:text-teal-200">
            💡 매주 한 번이라도 같은 시간, 같은 코트, 같은 루틴을 반복하라.
          </p>
          <p className="text-teal-700 dark:text-teal-300 text-sm mt-2">
            몸은 그 '리듬'을 기억한다.
          </p>
        </blockquote>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">주간 루틴 예시:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
              <div className="font-bold text-blue-600">월</div>
              <div className="text-gray-600 dark:text-gray-400">미니 테니스 20분</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
              <div className="font-bold text-green-600">수</div>
              <div className="text-gray-600 dark:text-gray-400">풋워크 + 스트로크 30분</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
              <div className="font-bold text-purple-600">금</div>
              <div className="text-gray-600 dark:text-gray-400">서비스 + 리턴 30분</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-3 rounded text-center">
              <div className="font-bold text-red-600">토</div>
              <div className="text-gray-600 dark:text-gray-400">실전 랠리 1세트</div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          겨울은 테니스가 느려지는 계절이 아니다. <strong>리듬을 세밀하게 조율하는 시기</strong>다.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          지금 리듬을 다듬어두면, 봄에는 코트 위에서 완전히 다른 자신을 만나게 될 것이다.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          지금 바로 <Link href="/blog/autumn-tennis-rhythm-guide" className="text-blue-600 hover:text-blue-800 underline">가을 리듬 회복 가이드</Link>를 읽고, 다음 시즌을 위한 연속 루틴을 완성해보자.
        </p>
      </section>

      <section id="winter-tennis-checklist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          겨울 테니스 체크리스트
        </h2>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-6 rounded-lg">
          <h3 className="font-bold text-cyan-800 dark:text-cyan-200 mb-4">👉 겨울 테니스 체크리스트</h3>
          <ul className="space-y-2 text-cyan-700 dark:text-cyan-300">
            <li>• 스트링 텐션: -2파운드 조정</li>
            <li>• 의류: 얇고 따뜻한 레이어링</li>
            <li>• 워밍업: 관절 중심 10분</li>
            <li>• 루틴: 미니 테니스 + 리듬 훈련</li>
            <li>• 장비: 접지력 유지, 손 온도 유지</li>
          </ul>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/guide/tennis-footwork-tips">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  기술 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 풋워크 리듬 훈련법
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  스플릿 스텝부터 크로스오버까지, 코트 지배의 핵심 이동 기술을 마스터하세요.
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
