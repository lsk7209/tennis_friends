import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
    title: '테니스 스트링 완전 가이드 — 폴리 vs 인조쉽 vs 천연쉽 및 텐션 선택법 2026',
    description: '라켓 성능의 50%는 스트링이 결정합니다. 폴리에스터, 인조쉽, 멀티필라멘트, 천연쉽의 장단점을 비교하고 나에게 맞는 텐션(Tension) 찾는 법을 알려드립니다.',
    keywords: ['테니스 스트링 추천', '테니스 줄 종류', '테니스 텐션 추천', '폴리 스트링', '인조쉽', '천연쉽', '하이브리드 스트링', '테니스 줄 교체 주기'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/blog/tennis-string-guide',
    },
    openGraph: {
        title: '테니스 스트링 완전 가이드 — 폴리 vs 인조쉽 vs 천연쉽 및 텐션 선택법 2026',
        description: '라켓 성능의 50%는 스트링이 결정합니다. 재질별 특징과 2026년 트렌드 텐션 가이드.',
        url: 'https://tennisfriends.co.kr/blog/tennis-string-guide',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: '테니스 스트링 완전 가이드 — 폴리 vs 인조쉽 vs 천연쉽 및 텐션 선택법 2026',
        description: '라켓 성능의 50%는 스트링이 결정합니다. 재질별 특징과 2026년 트렌드 텐션 가이드.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'string-importance', text: '1. 스트링의 세계: 라켓이 엔진이라면 스트링은 타이어', depth: 2 },
    { id: 'material-types', text: '2. 재질별 특징 비교 (폴리, 인조, 멀티, 천연)', depth: 2 },
    { id: 'tension-science', text: '3. 텐션(Tension)의 과학: 48 vs 52 vs 55', depth: 2 },
    { id: 'hybrid-setup', text: '4. 하이브리드 세팅 (페더러 스타일)', depth: 2 },
    { id: 'replacement-cycle', text: '5. 교체 주기: "줄이 안 끊어져도 갈아야 하나요?"', depth: 2 },
    { id: 'conclusion', text: '결론 — 나만의 조합 찾기', depth: 2 },
];

const faqs = [
    {
        q: '텐션을 낮추면 컨트롤이 안 좋아지나요?',
        a: '일반적으로 텐션이 낮으면 반발력(파워)이 좋아져 공이 멀리 나가고, 텐션이 높으면 공이 덜 나가서 컨트롤이 좋아진다고 합니다. 최근에는 스핀으로 컨트롤을 잡는 추세라 낮은 텐션(40후반~50초반)을 선호합니다.'
    },
    {
        q: '초보자는 어떤 줄을 써야 하나요?',
        a: '처음에는 저렴하고 내구성이 무난한 "인조쉽(Synthetic Gut)"이나 부드러운 "멀티필라멘트"를 추천합니다. 스윙 스피드가 빠르지 않은데 딱딱한 폴리 줄을 쓰면 팔에 무리가 갈 수 있습니다.'
    },
    {
        q: '줄이 안 끊어졌는데 얼마나 자주 갈아야 하나요?',
        a: '줄은 매는 순간부터 장력(Tension)이 떨어지기 시작합니다. 주 2~3회 운동 기준, 2~3개월에 한 번은 교체해주는 것이 좋습니다. 탄성을 잃은 줄은 엘보의 원인이 됩니다.'
    },
    {
        q: '하이브리드 스트링이 뭔가요?',
        a: '세로줄(메인)과 가로줄(크로스)에 서로 다른 종류의 줄을 매는 것입니다. 보통 내구성이 좋은 폴리를 메인에, 부드러운 십(Gut)을 크로스에 섞어 성능과 타구감을 동시에 잡습니다.'
    }
];

export default function TennisStringGuidePage() {
    const title = '테니스 스트링 완전 가이드 — 폴리 vs 인조쉽 vs 천연쉽 및 텐션 선택법 2026';
    const excerpt = '좋은 라켓을 샀는데 공이 잘 안 맞나요? 문제는 줄(String)일 수 있습니다. 재질별 특징부터 나에게 딱 맞는 텐션 설정까지, 스트링의 모든 것을 파헤칩니다.';

    return (
        <Article
            title={title}
            excerpt={excerpt}
            date="2026-01-27"
            slug="tennis-string-guide"
            author="TennisFriends"
            image="/images/blog/tennis-string-guide.png"
        >
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        필수 지식
                    </Badge>
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                        실력 향상
                    </Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    많은 동호인들이 라켓에는 30만 원을 투자하지만, 정작 공이 닿는 '스트링'에는 무관심합니다. 자동차로 치면 엔진(라켓)만 좋고 타이어(스트링)는 펑크 난 상태로 달리는 것과 같습니다. 라켓 성능의 50% 이상을 좌우하는 스트링, 이제 알고 씁시다.
                </p>
            </div>

            <TOC items={tocItems} />

            <section id="string-importance" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    스트링의 세계: 라켓이 엔진이라면 스트링은 타이어
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    아무리 좋은 스포츠카도 타이어가 나쁘면 코너를 돌 수 없듯, 최고급 라켓도 스트링 세팅이 엉망이면 제 기능을 못 합니다.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg border-l-4 border-yellow-500">
                    <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                        <li>✅ <strong>파워:</strong> 공을 튕겨내는 반발력</li>
                        <li>✅ <strong>컨트롤:</strong> 내가 원하는 곳으로 공을 보내는 정확성</li>
                        <li>✅ <strong>스핀:</strong> 공에 회전을 거는 능력 (바이트감)</li>
                        <li>✅ <strong>타구감(Comfort):</strong> 충격 흡수와 손에 전달되는 느낌</li>
                    </ul>
                </div>
            </section>

            <section id="material-types" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    재질별 특징 비교 (폴리, 인조, 멀티, 천연)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-5">
                            <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">1. 폴리에스터 (Polyester)</h3>
                            <Badge variant="outline" className="mb-2">선수/상급자용</Badge>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                단단하고 내구성이 좋으며 스핀이 잘 걸립니다. 하지만 타구감이 딱딱해 팔에 충격이 많이 갑니다. 스윙 스피드가 빠른 분들에게 적합합니다. (예: RPM 블라스트, 알루파워)
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-5">
                            <h3 className="text-lg font-bold mb-2 text-green-600 dark:text-green-400">2. 인조쉽 (Synthetic Gut)</h3>
                            <Badge variant="outline" className="mb-2">입문자/가성비</Badge>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                나일론 소재로 만든 가장 기본적인 줄입니다. 가격이 저렴하고 성능이 무난합니다. 라켓 구매 시 기본으로 매주는 하얀색 줄이 대부분 이것입니다.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-5">
                            <h3 className="text-lg font-bold mb-2 text-pink-600 dark:text-pink-400">3. 멀티필라멘트 (Multifilament)</h3>
                            <Badge variant="outline" className="mb-2">엘보 방지/여성</Badge>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                수천 가닥의 미세 섬유를 꼬아 만들어 천연쉽과 유사한 부드러움을 냅니다. 충격 흡수가 좋아 테니스 엘보가 걱정되는 분들에게 강추합니다. 단, 내구성은 약합니다.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-5">
                            <h3 className="text-lg font-bold mb-2 text-yellow-600 dark:text-yellow-400">4. 천연쉽 (Natural Gut)</h3>
                            <Badge variant="outline" className="mb-2">최고급/비쌈</Badge>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                실제 소의 창자로 만듭니다. 타구감과 텐션 유지력이 넘사벽이지만, 가격이 매우 비싸고 습기에 취약해 관리가 어렵습니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="tension-science" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    텐션(Tension)의 과학: 48 vs 52 vs 55
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    텐션은 줄을 당기는 장력(단위: lbs)을 말합니다.
                </p>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center">
                        <div className="flex-1">
                            <div className="text-2xl font-bold text-blue-500 mb-2">Low Tension</div>
                            <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">40 ~ 48 lbs</div>
                            <p className="text-sm text-gray-500">줄이 헐렁함 → 트램폴린 효과 ↑</p>
                            <p className="text-sm font-bold text-blue-600 mt-2">파워 증가, 팔 편안함</p>
                        </div>
                        <div className="text-2xl text-gray-300">VS</div>
                        <div className="flex-1">
                            <div className="text-2xl font-bold text-red-500 mb-2">High Tension</div>
                            <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">52 ~ 60 lbs</div>
                            <p className="text-sm text-gray-500">줄이 팽팽함 → 공이 덜 튕김</p>
                            <p className="text-sm font-bold text-red-600 mt-2">컨트롤 증가, 정확성</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">💡 2026 추천 국민 텐션</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li><strong>남성 (오픈 패턴 라켓):</strong> 48 ~ 52 lbs (과거보다 낮아지는 추세)</li>
                        <li><strong>여성:</strong> 44 ~ 48 lbs</li>
                        <li><strong>테니스 엘보 환자:</strong> 40 ~ 44 lbs (과감하게 낮추세요!)</li>
                    </ul>
                </div>
            </section>

            <section id="hybrid-setup" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                    하이브리드 세팅 (페더러 스타일)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    서로 다른 두 종류의 줄을 섞어 쓰는 방식입니다. 로저 페더러가 사용하여 대중화되었습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">메인(세로) 폴리 + 크로스(가로) 인조/천연</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">가장 흔한 조합. 폴리의 스핀/내구성과 인조쉽의 부드러움을 챙깁니다. 동호인에게 가장 추천합니다.</p>
                    </div>
                    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">메인(세로) 천연 + 크로스(가로) 폴리</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">페더러 세팅. 타구감이 극대화되지만 내구성이 떨어져 돈이 많이 듭니다.</p>
                    </div>
                </div>
            </section>

            <section id="replacement-cycle" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                    교체 주기: "줄이 안 끊어져도 갈아야 하나요?"
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    네, 무조건 갈아야 합니다. 줄은 매는 순간부터 늘어나기 시작해 탄성(Elasticity)을 잃습니다. 탄성을 잃은 줄(Dead String)로 치면 팔에 진동이 그대로 전달되어 부상을 유발합니다.
                </p>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-700 dark:text-teal-300 mb-2">📅 권장 교체 주기</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                        <li><strong>주 3회 이상 플레이:</strong> 1~2개월마다</li>
                        <li><strong>주 1~2회 플레이:</strong> 3개월마다</li>
                        <li><strong>잘 안 쳐도:</strong> 최소 6개월에 한 번은 교체 (고무줄 삭는 것과 비슷함)</li>
                    </ul>
                </div>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-gray-800 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                    결론 — 나만의 조합 찾기
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    스트링은 정답이 없습니다. 라켓, 스윙 스타일, 근력에 따라 최적의 조합이 다릅니다. '폴리 50/48' 같은 국민 세팅에서 시작해, 내 느낌에 따라 조금씩 조절해보세요. 그 과정 자체가 테니스의 또 다른 재미입니다.
                </p>

                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <Link href="/blog/tennis-racket-recommendation-guide-2026" className="inline-block bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-full transition">
                        라켓 추천 가이드 보기
                    </Link>
                    <Link href="/blog/tennis-lesson-cost-guide" className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                        레슨 비용 확인하기
                    </Link>
                </div>
            </section>

            <FAQ items={faqs} />
        </Article>
    );
}
