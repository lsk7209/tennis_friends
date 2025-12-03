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
    title: '마테오 베레티니 — 이탈리아의 망치 | 플레이스타일·명장면·최근 경기력',
    description: "마테오 베레티니 (Matteo Berrettini) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['마테오 베레티니', 'Matteo Berrettini', '테니스', 'ATP', '플레이스타일', '이탈리아 테니스', '강서브', '포핸드'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/matteo-berrettini',
    },
    openGraph: {
        title: '마테오 베레티니 — 이탈리아의 망치 | 플레이스타일·명장면·최근 경기력',
        description: '마테오 베레티니의 강력한 서브와 포핸드, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/matteo-berrettini',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '마테오 베레티니 — 이탈리아의 망치 | 플레이스타일·명장면·최근 경기력',
        description: '마테오 베레티니의 강력한 서브와 포핸드, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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

const tocItems = [
    { id: 'why-again-notable', text: '마테오 베레티니, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '마테오 베레티니는 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 마테오 베레티니의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '마테오 베레티니, 한 문장으로 정리하면?', depth: 2 },
] as const;

const faqs = [
    {
        q: '마테오 베레티니의 경기 스타일은 어떤가요?',
        a: '강력한 서브와 포핸드를 주무기로 하는 공격적인 베이스라이너입니다. 특히 포핸드는 투어에서 가장 강력한 무기 중 하나로 꼽힙니다.',
    },
    {
        q: '베레티니의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '최고 랭킹은 6위(2022년)이며, 잦은 부상으로 랭킹이 하락했다가 최근 다시 상승세를 타고 있습니다.',
    },
    {
        q: '베레티니의 강점은 무엇인가요?',
        a: '시속 220km를 넘나드는 서브와 "해머"라고 불리는 강력한 포핸드, 그리고 잔디 코트에서의 뛰어난 적응력이 강점입니다.',
    },
    {
        q: '베레티니의 약점은 무엇인가요?',
        a: '백핸드가 상대적으로 약점으로 지적되며, 이를 보완하기 위해 슬라이스를 자주 사용합니다. 또한 잦은 부상이 커리어의 발목을 잡고 있습니다.',
    },
    {
        q: '베레티니를 한 문장으로 설명하면?',
        a: '이탈리아 테니스의 부흥을 이끈 선구자이자, 파워 테니스의 정석을 보여주는 선수입니다.',
    },
];

const keyTakeaways = [
    "'The Hammer'라는 별명답게 투어에서 가장 강력한 포핸드 보유",
    "2021 윔블던 준우승으로 증명된 잔디 코트 강자",
    "잦은 부상을 극복하고 다시 정상에 도전하는 불굴의 의지"
];

export default function MatteoBerrettiniPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="마테오 베레티니"
                excerpt="강력한 서브와 포핸드로 무장한 이탈리아의 망치"
                image="/images/players/matteo-berrettini.png"
            >
                <ProfilePageSchema
                    name="마테오 베레티니 — 이탈리아의 망치 | 플레이스타일·명장면·최근 경기력"
                    description="마테오 베레티니 (Matteo Berrettini) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/matteo-berrettini.png"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Matteo Berrettini',
                        alternateName: '마테오 베레티니',
                        description: '이탈리아 출신의 파워 테니스 선수. 강력한 서브와 포핸드로 주목받는 선수.',
                        image: '/images/players/matteo-berrettini.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'Italy' },
                        birthDate: '1996-04-12',
                        height: { '@type': 'QuantitativeValue', value: '196', unitText: 'cm' },
                        award: ['Wimbledon Finalist (2021)', 'ATP 500 Champion'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Matteo_Berrettini',
                            'https://www.atptour.com/en/players/matteo-berrettini/bk40/overview',
                            'https://www.instagram.com/matberrettini/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '마테오 베레티니', item: 'https://tennisfriends.co.kr/players/matteo-berrettini' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Matteo Berrettini"
                        country="Italy"
                        age={28}
                        height="196cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2015}
                        grandSlams={0}
                        ranking={45} // 랭킹은 변동 가능하므로 대략적인 최근 랭킹
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            이탈리아의 망치. <strong className="text-blue-600 dark:text-blue-400">압도적인 파워</strong>로 코트를 지배하는 로마의 검투사.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            마테오 베레티니, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    강력한 서브와 포핸드로 무장한 이탈리아의 망치
                                </p>
                            </div>
                        </blockquote>
                        <p>마테오 베레티니는 이탈리아 남자 테니스 역사상 최초로 윔블던 결승에 진출한 선수다. 잘생긴 외모와 모델 같은 피지컬, 그리고 그에 걸맞은 시원시원한 플레이 스타일로 전 세계적인 인기를 끌고 있다. 잦은 부상으로 시련을 겪었지만, 건강할 때의 그는 누구도 쉽게 이길 수 없는 탑 클래스 선수다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"파워 베이스라이너 (Power Baseliner)"</strong></p>
                        <p>베레티니는 큰 키에서 나오는 강력한 서브와 포핸드로 경기를 주도하는 전형적인 파워 히터다.</p>

                        <PlayerHexagonStats
                            playerName="마테오 베레티니"
                            attributes={[
                                { name: '서브 (Serve)', score: 9.5, description: '투어 최고 수준의 서브. 속도와 각도 모두 위협적이다.' },
                                { name: '포핸드 (Forehand)', score: 9.5, description: "'The Hammer'라는 별명처럼 엄청난 파워와 스핀을 자랑한다." },
                                { name: '백핸드 (Backhand)', score: 7.5, description: '상대적으로 약하지만, 날카로운 슬라이스로 이를 보완한다.' },
                                { name: '멘탈 (Mental)', score: 8.5, description: '중요한 순간에 강한 서브로 위기를 탈출하는 담력이 있다.' },
                                { name: '체력 (Physical)', score: 8.0, description: '강한 근력을 가졌으나, 잦은 부상이 아쉽다.' },
                            ]}
                        />

                        <p>그의 전략은 단순하지만 명확하다. 강력한 서브로 상대를 흔들고, 짧아진 리턴을 포핸드 위너로 연결하는 '원-투 펀치'가 주무기다. 백핸드 쪽으로 공이 오면 무리하게 공격하기보다 낮고 깊은 슬라이스로 템포를 조절하며 포핸드 기회를 엿본다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>196cm, 95kg의 건장한 체격은 그의 파워 테니스의 원천이다. 특히 상체 근력이 좋아 스윙 스피드가 매우 빠르다. 다만 하체 부상이 잦아 풋워크의 지속성에 대한 우려가 있다.</p>

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
                                윔블던 준우승 · 잔디 코트 승률 <strong className="text-green-700 dark:text-green-400 text-base">80% 이상</strong>
                            </p>
                        </div>
                        <p>이탈리아 선수 특유의 열정과 긍정적인 에너지를 가지고 있다. 관중의 응원을 즐기며, 경기 중에도 스스로를 끊임없이 독려한다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">마테오 베레티니는 어떻게 여기까지 왔을까?</h2>
                        <p>로마에서 태어난 베레티니는 동생 야코포 베레티니와 함께 테니스를 시작했다. 2018년부터 투어 무대에서 두각을 나타내기 시작했고, 2019년 US 오픈 4강에 오르며 세계적인 스타로 발돋움했다. 2021년 윔블던 준우승은 그의 커리어 하이라이트다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>2021년 윔블던 결승전이다.</p>

                        <h3>2021년 윔블던 결승</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">역사를 쓴 도전</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                <strong>노박 조코비치</strong>를 상대로 첫 세트를 따내며 분전했으나 아쉽게 준우승에 머물렀다. 하지만 이탈리아 선수 최초의 윔블던 결승 진출이라는 역사를 썼고, 그의 강력한 서브와 포핸드가 잔디 코트에서 얼마나 위력적인지 전 세계에 증명했다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>화끈한 공격 테니스와 매력적인 외모, 그리고 코트 밖에서의 젠틀한 매너가 팬들을 사로잡는다. 보스(BOSS)의 모델로 활동할 만큼 패션 감각도 뛰어나다.</p>

                        <h2 id="recent-form">요즘 마테오 베레티니의 경기력 흐름은 어떤가?</h2>
                        <p>2023년은 부상으로 힘든 시기를 보냈지만, 2024년 마라케시 오픈 우승으로 부활의 신호탄을 쏘아 올렸다.</p>

                        <h3>최근 성적</h3>
                        <p>클레이 코트 대회인 마라케시 오픈에서 우승하며 건재함을 과시했다. 부상 관리만 잘 된다면 언제든지 탑 10에 복귀할 수 있는 저력을 가지고 있다.</p>

                        <h2 id="one-sentence-summary">마테오 베레티니, 한 문장으로 정리하면?</h2>
                        <p>마테오 베레티니는 강력한 서브와 포핸드로 무장한 이탈리아의 망치다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}
