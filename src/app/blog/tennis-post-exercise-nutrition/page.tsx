import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
    title: '테니스 영양학: 경기 후 45분, 기적의 회복 골든타임 | 글리코겐 합성·근육 재생을 위한 최적의 식단 가이드',
    description: '테니스 경기 후 근육 회복과 피로 해소를 위한 영양 섭취 전략. 탄수화물/단백질 비율, 전해질 조절, 관절 건강을 위한 영양소까지 완벽 정리.',
    keywords: ['테니스 영양', '포스트 워크아웃 식단', '글리코겐 회복', '테니스 단백질', '전해질 보충', '염증 완화 음식'],
    alternates: {
        canonical: 'https://tennisfrens.com/blog/tennis-post-exercise-nutrition',
    },
    openGraph: {
        title: '테니스 영양학: 경기 후 45분, 기적의 회복 골든타임',
        description: '테니스 경기 후 근육 회복과 피로 해소를 위한 영양 섭취 전략. 탄수화물/단백질 비율, 전해질 조절, 관절 건강을 위한 영양소까지 완벽 정리.',
        url: 'https://tennisfrens.com/blog/tennis-post-exercise-nutrition',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '테니스 영양학: 경기 후 45분, 기적의 회복 골든타임',
        description: '테니스 경기 후 근육 회복과 피로 해소를 위한 영양 섭취 전략.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'anabolic-window', text: '1. 아나볼릭 윈도우(Anabolic Window): 45분의 법칙', depth: 2 },
    { id: 'glycogen-resynthesis', text: '2. 글리코겐 재합성: 탄수화물과 단백질의 3:1 비율', depth: 2 },
    { id: 'hydration-osmolarity', text: '3. 수분 보충의 과학: 삼투압과 전해질 균형', depth: 2 },
    { id: 'joint-health-nutrients', text: '4. 관절과 인대를 위한 마이크로 영양소', depth: 2 },
    { id: 'anti-inflammatory-foods', text: '5. 천연 항염증 식품: "테니스 엘보" 예방 식단', depth: 2 },
    { id: 'sample-meal-plans', text: '6. 테니스 플레이어 추천 회복 식단 (상황별)', depth: 2 },
    { id: 'conclusion', text: '7. 결론: 음식도 테니스 장비다', depth: 2 },
];

const faqs = [
    {
        q: '경기 직후 탄수화물은 어떤 종류가 좋은가요?',
        a: '흡수가 빠른 바나나, 스포츠 음료, 흰 쌀밥 등이 글리코겐 회복에 유리합니다.'
    },
    {
        q: '운동 후 맥주 한 잔은 회복에 어떤가요?',
        a: '알코올은 근육 합성을 방해하고 탈수를 유발하므로 최소 3시간 이후에 가벼운 섭취를 권장합니다.'
    }
];

export default function TennisPostExerciseNutritionPage() {
    const title = '테니스 영양학: 경기 직후 45분을 잡아라';
    const excerpt = '스윙만큼 중요한 것이 먹는 것입니다. 테니스 코트에서 소진된 에너지를 어떻게 채우느냐가 내일의 경기력을 결정합니다.';

    return (
        <Article ymylTopic="nutrition"
      slug="tennis-post-exercise-nutrition" date="2024-01-01" title={title} excerpt={excerpt}>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-lg mb-8 text-center text-sm">
                <div className="flex justify-center gap-2 mb-3">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">스포츠 영양</Badge>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">회복 에너지</Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-bold">
                    "테니스 선수는 코트 안이 아니라 식탁 위에서 만들어집니다."
                </p>
            </div>

            <TOC items={tocItems} />

            <section id="anabolic-window" className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 아나볼릭 윈도우(Anabolic Window): 45분의 법칙</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">운동 직후 근육은 영양소를 스펀지처럼 흡수할 준비가 되어 있는 최적의 상태입니다.</p>
                <div className="bg-slate-900 text-white p-6 rounded-2xl mb-6 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                        <div>
                            <h4 className="text-amber-400 font-bold text-lg">00:45:00</h4>
                            <p className="text-[10px] text-slate-400">Golden Time for Recovery</p>
                        </div>
                        <p className="text-xs leading-relaxed max-w-[60%]">
                            이 시간 내에 영양공급이 이뤄지지 않으면 몸은 근육을 분해해 에너지를 보충하는 '카타볼릭(Catabolic)' 상태로 진입합니다.
                        </p>
                    </div>
                </div>
            </section>

            <section id="glycogen-resynthesis" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 글리코겐 재합성: 탄수화물과 단백질의 3:1 비율</h2>
                <p className="mb-6">테니스는 폭발적인 유산소+무산소 결합 운동입니다. 고갈된 <strong>근 글리코겐</strong>을 채우는 최적의 공식이 있습니다.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card>
                        <CardContent className="p-5">
                            <h4 className="font-bold text-sm mb-2 text-orange-600">Complex Carbs (탄수화물 3)</h4>
                            <p className="text-xs">바나나, 고구마, 오트밀. 인슐린 수치를 조절하여 포도당을 근육으로 빠르게 전달합니다.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-5">
                            <h4 className="font-bold text-sm mb-2 text-blue-600">Lean Protein (단백질 1)</h4>
                            <p className="text-xs">유청 단백질, 닭가슴살, 달걀. 미세하게 손상된 근섬유를 복구하고 합성을 촉진합니다.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="hydration-osmolarity" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 수분 보충의 과학: 삼투압과 전해질 균형</h2>
                <p className="mb-4">땀으로 잃는 것은 물뿐만이 아닙니다. 나트륨, 칼륨, 마그네슘의 손실은 <strong>근육 경련(Cramps)</strong>의 주원인입니다.</p>
                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300">
                    <ul className="space-y-3 text-xs">
                        <li>• <strong>저장성(Hypotonic) 음료:</strong> 빠른 수분 흡수에 특화. 경기 직후 추천.</li>
                        <li>• <strong>등장성(Isotonic) 음료:</strong> 에너지와 전해질의 균형 보충.</li>
                        <li>• <strong>Tip:</strong> 물 500ml에 소금 조금과 레몬즙을 섞으면 훌륭한 천연 이온음료가 됩니다.</li>
                    </ul>
                </div>
            </section>

            <section id="joint-health-nutrients" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 관절과 인대를 위한 마이크로 영양소</h2>
                <p className="mb-6">테니스는 관절 소모가 큰 운동입니다. 장기적인 커리어를 위해 다음 성분을 챙기세요.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg">
                        <h5 className="font-bold text-xs mb-1">오메가-3</h5>
                        <p className="text-[10px]">천연 항염증제. 혈류를 개선하고 관절 통증을 완화합니다.</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg">
                        <h5 className="font-bold text-xs mb-1">비타민 C</h5>
                        <p className="text-[10px]">콜라겐 합성에 필수. 힘줄(Tendon)의 결합 조직을 강화합니다.</p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg">
                        <h5 className="font-bold text-xs mb-1">마그네슘</h5>
                        <p className="text-[10px]">근육 이완과 신경 안정. 숙면을 유도하여 회복을 돕습니다.</p>
                    </div>
                </div>
            </section>

            <section id="sample-meal-plans" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 테니스 플레이어 추천 회복 식단</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl">
                        <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200">🥗 Option A: Standard Recovery</h5>
                        <p className="text-xs text-slate-500">구운 닭가슴살 150g + 고구마 1~2개 + 브로콜리 듬뿍</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200">🌯 Option B: Quick & Easy (On-court)</h5>
                        <p className="text-xs text-slate-500">단백질 쉐이크 1잔 + 바나나 1개 + 아몬드 한 줌</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200">🍣 Option C: High-Intensity Day</h5>
                        <p className="text-xs text-slate-500">연어 스테이크 또는 회 + 아보카도 샐러드 + 현미밥</p>
                    </div>
                </div>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 결론: 음식도 테니스 장비다</h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    비싼 라켓과 신발만큼 당신의 <strong>회복 식단</strong>에 투자하세요. 체계적인 영양 섭취는 부상을 막고, 당신의 구력 성장을 2배 더 빠르게 만들어 줄 것입니다. 잘 먹는 것이 곧 잘 치는 것의 시작입니다.
                </p>
            </section>

            <FAQ items={faqs} />
        </Article>
    );
}
