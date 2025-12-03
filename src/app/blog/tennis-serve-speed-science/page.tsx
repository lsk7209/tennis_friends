import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 서브 속도의 과학 — 파워보다 타이밍이 만든다 | 빠른 서브의 비밀은 근력이 아니라 리듬이다',
  description: '서브는 힘이 아니라 타이밍이다. 근육의 순서, 무게 이동, 호흡의 리듬이 속도를 결정한다.',
  keywords: ['테니스 서브', '서브 속도', '타이밍', '리듬', '토스', '기술'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-serve-speed-science',
  },
  openGraph: {
    title: '테니스 서브 속도의 과학 — 파워보다 타이밍이 만든다 | 빠른 서브의 비밀은 근력이 아니라 리듬이다',
    description: '서브는 힘이 아니라 타이밍이다. 근육의 순서, 무게 이동, 호흡의 리듬이 속도를 결정한다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-serve-speed-science',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 서브 속도의 과학 — 파워보다 타이밍이 만든다 | 빠른 서브의 비밀은 근력이 아니라 리듬이다',
    description: '서브는 힘이 아니라 타이밍이다. 근육의 순서, 무게 이동, 호흡의 리듬이 속도를 결정한다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'serve-speed-essence-muscle-connection', text: '1. 서브 속도의 본질 — 근육보다 연결', depth: 2 },
  { id: 'timing-creation-3step-routine', text: '2. 타이밍을 만드는 3단계 루틴', depth: 2 },
  { id: 'power-vs-control-serve-comparison', text: '3. 파워 서브 vs 컨트롤 서브 비교', depth: 2 },
  { id: 'toss-science-accuracy-consistency-over-height', text: '4. 토스의 과학 — 정확도는 \'높이\'보다 \'일관성\'', depth: 2 },
  { id: 'regional-serve-rhythm-adjustment', text: '5. 지역별 서브 리듬 조정법', depth: 2 },
  { id: 'fast-serve-training-routine-15min', text: '6. 빠른 서브를 만드는 훈련 루틴 (15분)', depth: 2 },
  { id: 'serve-mistake-reduction-3second-routine', text: '7. 서브 실패를 줄이는 3초 루틴', depth: 2 },
  { id: 'conclusion-serve-true-speed-from-harmony', text: '결론 — 서브의 진짜 속도는 \'조화\'에서 나온다', depth: 2 },
];

const faqs = [
  {
    q: '서브 속도를 높이려면 어떻게 해야 하나요?',
    a: '근육보다 타이밍을 맞추세요. 하체→허리→어깨→팔→손목 순으로 에너지를 전달하면 자연스럽게 속도가 붙습니다.'
  },
  {
    q: '토스가 자꾸 흔들립니다.',
    a: '손가락이 아니라 팔 전체로 던지세요. 팔꿈치 고정, 손목 이완이 핵심입니다.'
  },
  {
    q: '서브 실수가 많을 때 대처법은?',
    a: '호흡 루틴으로 긴장을 풀고, 임팩트 타이밍을 늦추세요. 급할수록 천천히입니다.'
  },
  {
    q: '지역별 환경이 서브에 영향을 주나요?',
    a: '네. 온도와 습도에 따라 공의 반발력과 회전이 달라집니다. 환경에 맞게 토스 높이와 템포를 조정하세요.'
  },
  {
    q: '스피드건 없이 속도 향상을 확인하려면?',
    a: '영상으로 스윙 리듬을 비교하세요. 라켓 끝이 부드럽게 흐르면 속도는 이미 올라가고 있습니다.'
  }
];

export default function TennisServeSpeedSciencePage() {
  const title = '테니스 서브 속도의 과학 — 파워보다 타이밍이 만든다 | 빠른 서브의 비밀은 근력이 아니라 리듬이다';
  const excerpt = '서브는 힘이 아니라 타이밍이다. 근육의 순서, 무게 이동, 호흡의 리듬이 속도를 결정한다.';

  return (
    <Article slug="tennis-serve-speed-science" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            서브 속도
          </Badge>
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            타이밍 과학
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스에서 서브는 경기의 첫인상이자 가장 복잡한 기술입니다. 많은 아마추어가 팔 힘으로만 서브를 치려 하지만, 진짜 속도는 '타이밍의 합'에서 나옵니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/serve-speed-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 서브 속도 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-basics/serve-technique.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 서브 기술 가이드</a></li>
        </ul>
      </div>

      <section id="serve-speed-essence-muscle-connection" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          서브 속도의 본질 — 근육보다 연결
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          서브는 전신이 하나의 파동처럼 움직이는 기술입니다. 어깨, 허리, 다리, 손목이 각각 따로가 아니라 순차적으로 이어져야 합니다.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">에너지 전달 순서:</h3>
          <p className="text-yellow-800 dark:text-yellow-200 mb-3">발 → 무릎 → 허리 회전 → 어깨 회전 → 팔꿈치 → 손목 스냅.</p>
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>💡 핵심:</strong> 팔의 속도보다 '몸의 회전이 공에 전달되는 순서'가 서브 속도를 결정합니다.
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>과학적 근거:</strong> 스포츠 생체역학 연구에 따르면, 상체 회전 속도가 하체 에너지 전달과 0.03초 차이로 이어질 때 최고 속도가 발생합니다.
          </p>
        </div>
      </section>

      <section id="timing-creation-3step-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          타이밍을 만드는 3단계 루틴
        </h2>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-orange-800 dark:text-orange-200">리듬 세팅:</strong> 토스 전 숨 고르기, 복식호흡 2회.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-orange-800 dark:text-orange-200">체중 이동:</strong> 왼발→오른발→왼발 순으로 리듬감 있게 전환.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-orange-800 dark:text-orange-200">임팩트 순간:</strong> 공이 최고점에 도달하는 순간 '팔이 아니라 몸 전체'로 밀어올리기.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>💡 팁:</strong> 서브를 세게 치려는 순간 리듬이 깨집니다. '부드럽게 빠르게'가 서브의 본질입니다.
          </p>
        </div>
      </section>

      <section id="power-vs-control-serve-comparison" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          파워 서브 vs 컨트롤 서브 비교
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">구분</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">장점</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">단점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">파워 서브</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">강한 임팩트, 낮은 스핀</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">위력적, 빠른 득점</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">실수 확률 높음</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">컨트롤 서브</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">회전 중심, 안정적 타점</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">일관성, 세트 후반 유리</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">속도 약함</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 결론:</strong> 초중급자는 컨트롤 서브부터 완성해야 파워 서브로 넘어갈 수 있습니다.
          </p>
        </div>
      </section>

      <section id="toss-science-accuracy-consistency-over-height" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          토스의 과학 — 정확도는 '높이'보다 '일관성'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          토스는 서브의 모든 것을 결정합니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">이상적인 토스 위치:</h3>
          <p className="text-blue-800 dark:text-blue-200 mb-3">이마 앞 30cm, 살짝 오른쪽 (오른손 기준).</p>
          <p className="text-blue-800 dark:text-blue-200 text-sm">공이 최고점에 있을 때 몸의 중심이 앞으로 이동해야 임팩트 타이밍이 맞습니다.</p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
          <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">훈련법:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-purple-800 dark:text-purple-200">벽 앞에서 10회 토스 후 그대로 떨어지는 위치 확인.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">•</span>
              <div>
                <strong className="text-purple-800 dark:text-purple-200">공이 항상 같은 지점에 떨어지면 일관성 성공.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>💡 팁:</strong> 공이 흔들리면 팔이 아닌 손가락으로 던지고 있다는 증거입니다. 팔 전체로 올려야 합니다.
          </p>
        </div>
      </section>

      <section id="regional-serve-rhythm-adjustment" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          지역별 서브 리듬 조정법
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 템포 빠르게, 낮은 토스.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습한 환경):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무거움 → 토스 높이 +5cm, 회전 강화.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 가벼움 → 스핀 줄이고 임팩트 강도 ↑.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람 따라 방향 조정, 서브 전 호흡 루틴 필수.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            환경에 따라 서브 리듬을 조정하면 일관된 속도를 유지할 수 있습니다.
          </p>
        </div>
      </section>

      <section id="fast-serve-training-routine-15min" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          빠른 서브를 만드는 훈련 루틴 (15분)
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">구간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">시간</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">0~5분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">토스 정확도 훈련</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">공이 일정한 위치에 떨어지는지 확인</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">5~10분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">체중 이동 훈련</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">스텝 + 회전 감각 익히기</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">10~15분</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">타이밍 서브</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">'힘 금지, 리듬 중심'으로 20회 반복</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <p className="text-pink-800 dark:text-pink-200 text-sm">
            <strong>💡 보조 팁:</strong> 스피드건보다 느린 영상 촬영이 더 효과적입니다. 눈보다 프레임이 정확합니다.
          </p>
        </div>
      </section>

      <section id="serve-mistake-reduction-3second-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          서브 실패를 줄이는 3초 루틴
        </h2>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">실수 인식:</strong> '왜'보다 '언제'를 먼저 본다. (타이밍 문제 중심).
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">복식호흡:</strong> 긴장 완화, 근육 이완.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-teal-800 dark:text-teal-200">루틴 워드:</strong> "부드럽게" 한마디로 리듬 리셋.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>💡 멘탈 포인트:</strong> 서브 실수는 기술이 아니라 감정에서 시작됩니다.
          </p>
        </div>
      </section>

      <section id="conclusion-serve-true-speed-from-harmony" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 서브의 진짜 속도는 '조화'에서 나온다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          빠른 서브는 힘으로 밀어붙이는 것이 아닙니다. 발끝에서 손끝까지의 리듬, 체중 이동의 타이밍, 그리고 감정의 안정감이 어우러질 때 비로소 속도가 만들어집니다. 서브는 근육이 아니라 <strong>리듬의 과학</strong>입니다. 당신의 몸이 하나로 연결되는 순간, 속도는 자연스럽게 따라옵니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-mental-focus-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  멘탈 루틴
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  실수 후 3초 회복 루틴으로 멘탈을 회복하고 경기 흐름을 되찾는 법. 감정 제어·집중 루틴·효과적인 멘탈 관리 전략.
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
