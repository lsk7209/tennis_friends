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
    title: '마테오 아르날디 — 이탈리아의 새로운 엔진 | 플레이스타일·명장면·최근 경기력',
    description: "마테오 아르날디 (Matteo Arnaldi) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['마테오 아르날디', 'Matteo Arnaldi', '테니스', 'ATP', '플레이스타일', '이탈리아 유망주', '데이비스컵 우승', '체력'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/matteo-arnaldi',
    },
    openGraph: {
        title: '마테오 아르날디 — 이탈리아의 새로운 엔진 | 플레이스타일·명장면·최근 경기력',
        description: '마테오 아르날디의 지칠 줄 모르는 체력과 끈기, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/matteo-arnaldi',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '마테오 아르날디 — 이탈리아의 새로운 엔진 | 플레이스타일·명장면·최근 경기력',
        description: '마테오 아르날디의 지칠 줄 모르는 체력과 끈기, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
    { id: 'why-again-notable', text: '마테오 아르날디, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '마테오 아르날디는 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 마테오 아르날디의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '마테오 아르날디, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '마테오 아르날디의 경기 스타일은 어떤가요?',
        a: '지칠 줄 모르는 체력을 바탕으로 한 베이스라인 플레이가 특징입니다. 끈질긴 수비 후 역습을 노리는 카운터 펀처 성향이 강합니다.',
    },
    {
        q: '아르날디의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '2024년 30위권에 진입하며 꾸준히 상승세를 타고 있습니다. 이탈리아 테니스의 황금기를 이끄는 주역 중 한 명입니다.',
    },
    {
        q: '아르날디의 강점은 무엇인가요?',
        a: '코트 전체를 커버하는 스피드와 체력, 그리고 어떤 공도 포기하지 않는 투지가 강점입니다. 양손 백핸드 또한 매우 안정적입니다.',
    },
    {
        q: '아르날디의 약점은 무엇인가요?',
        a: '서브의 파워가 다소 부족하여 손쉬운 포인트를 따내는 능력이 아쉽습니다. 결정구의 위력을 더 키울 필요가 있습니다.',
    },
    {
        q: '아르날디를 한 문장으로 설명하면?',
        a: '페라리 같은 스피드와 탱크 같은 체력으로 상대를 질식시키는 이탈리아의 새로운 엔진입니다.',
    },
];

const keyTakeaways = [
    "2023년 데이비스 컵 우승의 주역으로 활약하며 이탈리아 테니스의 영웅 등극",
    "코트 전체를 누비는 엄청난 활동량과 끈질긴 수비력",
    "페라리를 연상시키는 폭발적인 스피드와 가속력"
];

export default function MatteoArnaldiPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="마테오 아르날디"
                excerpt="지칠 줄 모르는 체력과 끈기로 상대를 질식시키는 파이터"
                image="/images/players/matteo-arnaldi.svg"
            >
                <ProfilePageSchema
                    name="마테오 아르날디 — 이탈리아의 새로운 엔진 | 플레이스타일·명장면·최근 경기력"
                    description="마테오 아르날디 (Matteo Arnaldi) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/matteo-arnaldi.svg"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Matteo Arnaldi',
                        alternateName: '마테오 아르날디',
                        description: '이탈리아 출신의 테니스 선수. 뛰어난 체력과 수비력이 특징.',
                        image: '/images/players/matteo-arnaldi.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'Italy' },
                        birthDate: '2001-02-22',
                        height: { '@type': 'QuantitativeValue', value: '185', unitText: 'cm' },
                        award: ['Davis Cup Champion (2023)', 'Next Gen ATP Finals Participant'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Matteo_Arnaldi',
                            'https://www.atptour.com/en/players/matteo-arnaldi/a0e8/overview',
                            'https://www.instagram.com/matteoarnalditennis/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '마테오 아르날디', item: 'https://tennisfriends.co.kr/players/matteo-arnaldi' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Matteo Arnaldi"
                        country="Italy"
                        age={23}
                        height="185cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2019}
                        grandSlams={0}
                        ranking={35}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            이탈리아의 새로운 엔진. <strong className="text-blue-600 dark:text-blue-400">지치지 않는 체력</strong>과 끈질긴 승부 근성으로 코트를 지배하는 파이터.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            마테오 아르날디, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    2023년 데이비스 컵 우승의 주역으로 활약하며 이탈리아 테니스의 영웅 등극
                                </p>
                            </div>
                        </blockquote>
                        <p>마테오 아르날디는 야닉 시너, 로렌조 무세티와 함께 이탈리아 테니스의 황금 세대를 이끄는 주역이다. 특히 2023년 데이비스 컵 결승에서 알렉세이 포피린을 꺾고 이탈리아의 우승에 결정적인 기여를 하며 국민 영웅으로 떠올랐다. 화려하진 않지만 실속 있는 플레이로 꾸준히 성적을 내고 있다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"끈질긴 베이스라이너 (Gritty Baseliner)"</strong></p>
                        <p>아르날디는 상대의 실수를 유도하고, 긴 랠리 끝에 포인트를 따내는 체력전의 대가다.</p>

                        <PlayerHexagonStats
                            playerName="마테오 아르날디"
                            attributes={[
                                { name: '체력 (Stamina)', score: 9.5, description: '5세트 경기도 문제없다. 경기 후반으로 갈수록 더 강해진다.' },
                                { name: '수비 (Defense)', score: 9.0, description: '빠른 발과 유연성으로 거의 모든 공을 받아낸다.' },
                                { name: '스피드 (Speed)', score: 9.0, description: '코트 커버력이 매우 좋다. 드롭샷 수비에도 능하다.' },
                                { name: '백핸드 (Backhand)', score: 8.0, description: '안정적이고 견고하다. 랠리 싸움에서 밀리지 않는다.' },
                                { name: '포핸드 (Forehand)', score: 8.0, description: '스핀이 많이 걸린 포핸드로 상대를 뒤로 밀어낸다.' },
                            ]}
                        />

                        <p>그는 베이스라인 뒤에서 끈질기게 버티며 상대의 체력을 갉아먹는다. 하지만 단순히 수비만 하는 것은 아니다. 기회가 오면 빠른 발을 이용해 네트로 대시하거나, 각도 깊은 샷으로 위너를 만들어낸다. 특히 클레이 코트에서의 움직임이 매우 좋다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>185cm의 적당한 키에 탄탄한 근육질 몸매를 가졌다. 폭발적인 스피드와 방향 전환 능력이 뛰어나다. F1 드라이버를 꿈꿨을 정도로 스피드를 즐기며, 이는 코트 위에서의 움직임에도 반영된다.</p>

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
                                2023 데이비스 컵 우승 · US 오픈 16강 진출 · <strong className="text-green-700 dark:text-green-400 text-base">강심장</strong>
                            </p>
                        </div>
                        <p>어떤 상황에서도 포기하지 않는 투지가 돋보인다. 데이비스 컵 결승이라는 큰 무대에서도 주눅 들지 않고 자신의 기량을 발휘한 강심장의 소유자다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">마테오 아르날디는 어떻게 여기까지 왔을까?</h2>
                        <p>이탈리아 산레모에서 태어난 아르날디는 수영, 유도, 스키, 축구 등 다양한 스포츠를 섭렵한 만능 스포츠맨이었다. 12살 때 테니스에 전념하기로 결심했고, 꾸준한 성장세를 보이며 프로에 데뷔했다. 2023년은 그의 커리어에 있어 도약의 해였다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>2023년 데이비스 컵 결승 1단식이다.</p>

                        <h3>2023년 데이비스 컵 결승</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">조국을 위한 승리</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                호주의 알렉세이 포피린을 상대로 3세트 접전 끝에 승리하며 이탈리아에 귀중한 첫 승점을 안겼다. 이 승리는 이탈리아가 47년 만에 데이비스 컵을 들어 올리는 발판이 되었다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>잘생긴 외모와 열정적인 플레이 스타일이 팬들을 사로잡는다. 또한 SNS를 통해 팬들과 활발하게 소통하며 친근한 이미지를 구축하고 있다. 여자친구와의 달달한 모습도 화제가 되곤 한다.</p>

                        <h2 id="recent-form">요즘 마테오 아르날디의 경기력 흐름은 어떤가?</h2>
                        <p>2024년에도 상승세를 이어가고 있다. 호주 오픈 2회전, 마이애미 오픈 16강 등 꾸준히 성적을 내며 랭킹을 끌어올리고 있다.</p>

                        <h3>최근 성적</h3>
                        <p>프랑스 오픈 16강에 진출하며 그랜드 슬램에서도 경쟁력을 입증했다. 클레이 시즌뿐만 아니라 하드 코트에서도 좋은 모습을 보여주고 있어 앞으로가 더욱 기대된다.</p>

                        <h2 id="one-sentence-summary">마테오 아르날디, 한 문장으로 정리하면?</h2>
                        <p>마테오 아르날디는 페라리 같은 스피드와 탱크 같은 체력으로 상대를 질식시키는 이탈리아의 새로운 엔진이다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}
