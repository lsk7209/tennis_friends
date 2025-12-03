import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfilePageSchema from '@/components/seo/ProfilePageSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import KeyTakeaways from '@/components/blog/KeyTakeaways';
import { Metadata } from 'next';
import { Crown, Star, Target, Shield, Brain, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: '아르튀르 필스 — 프랑스의 차세대 폭격기 | 플레이스타일·명장면·최근 경기력',
    description: "아르튀르 필스 (Arthur Fils) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['아르튀르 필스', 'Arthur Fils', '테니스', 'ATP', '플레이스타일', '프랑스 유망주', '넥스트젠', '파워 테니스'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/arthur-fils',
    },
    openGraph: {
        title: '아르튀르 필스 — 프랑스의 차세대 폭격기 | 플레이스타일·명장면·최근 경기력',
        description: '아르튀르 필스의 폭발적인 피지컬과 포핸드, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/arthur-fils',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '아르튀르 필스 — 프랑스의 차세대 폭격기 | 플레이스타일·명장면·최근 경기력',
        description: '아르튀르 필스의 폭발적인 피지컬과 포핸드, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
    { id: 'why-again-notable', text: '아르튀르 필스, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '아르튀르 필스는 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 아르튀르 필스의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '아르튀르 필스, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '아르튀르 필스의 경기 스타일은 어떤가요?',
        a: '강력한 피지컬을 바탕으로 한 공격적인 베이스라이너입니다. 특히 묵직한 포핸드로 상대를 압박하는 플레이를 즐깁니다.',
    },
    {
        q: '필스의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '2024년 30위권에 진입하며 커리어 하이를 경신하고 있습니다. 프랑스 선수 중 가장 어린 나이에 높은 랭킹을 기록 중입니다.',
    },
    {
        q: '필스의 강점은 무엇인가요?',
        a: '탄탄한 하체에서 나오는 폭발적인 파워와 빠른 발, 그리고 나이답지 않은 두둑한 배짱이 강점입니다.',
    },
    {
        q: '필스의 약점은 무엇인가요?',
        a: '아직 경험이 부족하여 경기 운영에서 기복을 보일 때가 있으며, 네트 플레이의 정교함을 더 다듬어야 합니다.',
    },
    {
        q: '필스를 한 문장으로 설명하면?',
        a: '프랑스 테니스의 르네상스를 이끌 차세대 에이스이자, 파워와 스피드를 겸비한 완성형 유망주입니다.',
    },
];

const keyTakeaways = [
    "10대 때부터 완성형 피지컬로 주목받은 프랑스의 특급 유망주",
    "강력한 하체에서 나오는 묵직한 포핸드 스트로크와 폭발적인 에너지",
    "2023년 리옹 오픈 우승으로 ATP 투어 최연소 챔피언 등극"
];

export default function ArthurFilsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="아르튀르 필스"
                excerpt="폭발적인 피지컬과 강력한 포핸드로 무장한 프랑스 테니스의 미래"
                image="/images/players/arthur-fils.png"
            >
                <ProfilePageSchema
                    name="아르튀르 필스 — 프랑스의 차세대 폭격기 | 플레이스타일·명장면·최근 경기력"
                    description="아르튀르 필스 (Arthur Fils) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/arthur-fils.png"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Arthur Fils',
                        alternateName: '아르튀르 필스',
                        description: '프랑스 출신의 차세대 테니스 스타. 강력한 피지컬과 포핸드가 특징.',
                        image: '/images/players/arthur-fils.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'France' },
                        birthDate: '2004-06-12',
                        height: { '@type': 'QuantitativeValue', value: '185', unitText: 'cm' },
                        award: ['ATP Tour Title (Lyon 2023)', 'Next Gen ATP Finals Runner-up'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Arthur_Fils',
                            'https://www.atptour.com/en/players/arthur-fils/f04y/overview',
                            'https://www.instagram.com/arthur.fils/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '아르튀르 필스', item: 'https://tennisfriends.co.kr/players/arthur-fils' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Arthur Fils"
                        country="France"
                        age={20}
                        height="185cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2021}
                        grandSlams={0}
                        ranking={30}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            프랑스의 차세대 폭격기. <strong className="text-blue-600 dark:text-blue-400">압도적인 피지컬</strong>과 거침없는 스윙으로 코트를 장악하는 무서운 신예.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            아르튀르 필스, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    폭발적인 피지컬과 강력한 포핸드로 무장한 프랑스 테니스의 미래
                                </p>
                            </div>
                        </blockquote>
                        <p>아르튀르 필스는 2004년생으로, 카를로스 알카라스, 홀거 루네와 함께 차세대 테니스를 이끌어갈 재목으로 평가받는다. 10대 시절부터 성인 선수 못지않은 근육질 몸매를 자랑했으며, 이를 바탕으로 한 파워풀한 테니스는 보는 이들을 압도한다. 프랑스 테니스의 오랜 침체기를 끝낼 구세주로 기대를 한 몸에 받고 있다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"피지컬 몬스터 & 파워 히터 (Physical Monster & Power Hitter)"</strong></p>
                        <p>필스는 뛰어난 신체 능력을 100% 활용하여 공에 무게를 싣는 파워 히터다.</p>

                        <PlayerHexagonStats
                            playerName="아르튀르 필스"
                            attributes={[
                                { name: '피지컬 (Physical)', score: 9.0, description: '탄탄한 하체와 코어 근육에서 나오는 힘이 엄청나다. 부상 위험이 적은 몸을 가졌다.' },
                                { name: '포핸드 (Forehand)', score: 9.0, description: '그의 가장 큰 무기. 스피드와 회전량 모두 최상급이다.' },
                                { name: '잠재력 (Potential)', score: 9.5, description: '아직 완성되지 않았음에도 투어 레벨에서 통한다. 성장 가능성이 무궁무진하다.' },
                                { name: '서브 (Serve)', score: 8.5, description: '최고 220km에 달하는 플랫 서브와 킥 서브를 적절히 섞어 구사한다.' },
                                { name: '백핸드 (Backhand)', score: 8.0, description: '안정적이며, 다운더라인 공격도 과감하게 시도한다.' },
                            ]}
                        />

                        <p>그는 베이스라인에서 물러나지 않고 적극적으로 공격을 주도한다. 특히 포핸드 역크로스 샷은 그의 트레이드마크다. 수비 상황에서도 빠른 발을 이용해 공을 쫓아가며, 기회가 생기면 바로 카운터 펀치를 날린다. 클레이 코트와 하드 코트 모두에서 강점을 보인다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>185cm, 83kg의 다부진 체격이다. 특히 허벅지 근육이 매우 발달해 있어 코트 커버력이 좋고 샷에 힘을 싣는 능력이 탁월하다. '황소' 같은 힘과 '치타' 같은 스피드를 동시에 지녔다.</p>

                        <h3 className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            멘탈 강점
                        </h3>
                        <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-4 h-4 text-green-700 dark:text-green-400" />
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                                    핵심 통계
                                </p>
                            </div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0">
                                2023 ATP 신인상 후보 · 프랑스 최연소 투어 우승자 중 한 명 · <strong className="text-green-700 dark:text-green-400 text-base">무서운 성장세</strong>
                            </p>
                        </div>
                        <p>어린 나이답지 않게 침착하면서도, 중요한 순간에는 관중의 호응을 유도하며 분위기를 가져오는 스타성을 갖췄다. 패배를 두려워하지 않고 과감하게 샷을 날리는 배짱이 있다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">아르튀르 필스는 어떻게 여기까지 왔을까?</h2>
                        <p>프랑스 르 퐁테에서 태어난 필스는 아버지의 권유로 테니스를 시작했다. 주니어 시절 롤랑가로스 주니어 단식 우승(2021)을 차지하며 두각을 나타냈다. 2023년 본격적으로 투어에 데뷔하자마자 리옹 오픈에서 우승하며 센세이션을 일으켰다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>2023년 리옹 오픈 결승전이다.</p>

                        <h3>2023년 리옹 오픈 결승</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">새로운 스타의 탄생</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                프란시스코 세룬돌로를 상대로 2-0 완승을 거두며 생애 첫 투어 타이틀을 획득했다. 홈 팬들의 열광적인 응원 속에서 보여준 압도적인 경기력은 그가 프랑스 테니스의 미래임을 확실히 각인시켰다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>시원시원한 파워 테니스와 에너지가 넘치는 세레머니가 매력적이다. 또한 인터뷰에서 보여주는 자신감 넘치는 태도와 영어를 유창하게 구사하는 모습도 글로벌 팬들에게 어필하는 요소다.</p>

                        <h2 id="recent-form">요즘 아르튀르 필스의 경기력 흐름은 어떤가?</h2>
                        <p>2024년에도 꾸준히 랭킹을 끌어올리며 탑 20 진입을 노리고 있다. 바르셀로나 오픈 등 클레이 시즌에서 좋은 모습을 보여주었다.</p>

                        <h3>최근 성적</h3>
                        <p>기복을 줄이고 경험을 쌓는다면, 조만간 마스터스 1000 시리즈나 그랜드 슬램에서도 4강 이상의 성적을 낼 수 있을 것으로 기대된다.</p>

                        <h2 id="one-sentence-summary">아르튀르 필스, 한 문장으로 정리하면?</h2>
                        <p>아르튀르 필스는 폭발적인 피지컬과 강력한 포핸드로 무장한 프랑스 테니스의 미래다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}
