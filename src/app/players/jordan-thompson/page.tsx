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
    title: '조던 톰슨 — 호주의 콧수염 파이터 | 플레이스타일·명장면·최근 경기력',
    description: "조던 톰슨 (Jordan Thompson) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['조던 톰슨', 'Jordan Thompson', '테니스', 'ATP', '플레이스타일', '호주 테니스', '콧수염', '근성'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/jordan-thompson',
    },
    openGraph: {
        title: '조던 톰슨 — 호주의 콧수염 파이터 | 플레이스타일·명장면·최근 경기력',
        description: '조던 톰슨의 끈질긴 수비와 투지, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/jordan-thompson',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '조던 톰슨 — 호주의 콧수염 파이터 | 플레이스타일·명장면·최근 경기력',
        description: '조던 톰슨의 끈질긴 수비와 투지, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
    { id: 'why-again-notable', text: '조던 톰슨, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '조던 톰슨은 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 조던 톰슨의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '조던 톰슨, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '조던 톰슨의 경기 스타일은 어떤가요?',
        a: '끈질긴 수비와 빠른 발을 이용한 카운터 어택이 주무기입니다. 네트 플레이에도 능하며, 끝까지 포기하지 않는 근성이 돋보입니다.',
    },
    {
        q: '톰슨의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '2024년 생애 첫 투어 우승과 함께 랭킹 30위권에 진입하며 커리어 하이를 기록 중입니다.',
    },
    {
        q: '톰슨의 강점은 무엇인가요?',
        a: '지치지 않는 체력과 어떤 공이든 받아내는 수비력, 그리고 복식 경기 경험에서 나오는 발리 감각이 강점입니다.',
    },
    {
        q: '톰슨의 약점은 무엇인가요?',
        a: '결정적인 한 방(위너)을 만들어내는 파워가 부족하여, 랠리가 길어지는 경우가 많습니다.',
    },
    {
        q: '톰슨을 한 문장으로 설명하면?',
        a: '호주 테니스의 투혼을 상징하는 선수이자, 콧수염 휘날리며 코트를 누비는 불굴의 파이터입니다.',
    },
];

const keyTakeaways = [
    "트레이드마크인 콧수염과 모자, 그리고 포기를 모르는 근성",
    "2024년 로스 카보스 오픈 우승으로 생애 첫 투어 타이틀 획득",
    "단식과 복식 모두에서 활약하는 다재다능한 올라운더"
];

export default function JordanThompsonPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="조던 톰슨"
                excerpt="끈질긴 수비와 투지로 상대를 괴롭히는 근성의 사나이"
                image="/images/players/jordan-thompson.svg"
            >
                <ProfilePageSchema
                    name="조던 톰슨 — 호주의 콧수염 파이터 | 플레이스타일·명장면·최근 경기력"
                    description="조던 톰슨 (Jordan Thompson) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/jordan-thompson.svg"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Jordan Thompson',
                        alternateName: '조던 톰슨',
                        description: '호주 출신의 테니스 선수. 끈질긴 수비와 콧수염이 특징.',
                        image: '/images/players/jordan-thompson.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'Australia' },
                        birthDate: '1994-04-20',
                        height: { '@type': 'QuantitativeValue', value: '183', unitText: 'cm' },
                        award: ['ATP Tour Title (Los Cabos 2024)', 'US Open Doubles Champion (2024)'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Jordan_Thompson_(tennis)',
                            'https://www.atptour.com/en/players/jordan-thompson/ta46/overview',
                            'https://www.instagram.com/jordanthompson2004/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '조던 톰슨', item: 'https://tennisfriends.co.kr/players/jordan-thompson' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Jordan Thompson"
                        country="Australia"
                        age={30}
                        height="183cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2013}
                        grandSlams={0}
                        ranking={32}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            호주의 콧수염 파이터. <strong className="text-blue-600 dark:text-blue-400">포기를 모르는 근성</strong>으로 상대를 끝까지 물고 늘어지는 집념의 승부사.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            조던 톰슨, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    2024년 로스 카보스 오픈 우승으로 생애 첫 투어 타이틀 획득
                                </p>
                            </div>
                        </blockquote>
                        <p>조던 톰슨은 레이튼 휴이트의 계보를 잇는 호주의 파이터다. 화려한 기술보다는 땀과 노력으로 승리를 쟁취하는 스타일이다. 2024년 로스 카보스 오픈에서 즈베레프, 루드 등 탑 랭커들을 연파하고 우승하며 '노력은 배신하지 않는다'는 것을 증명했다. 또한 US 오픈 복식 우승까지 차지하며 최고의 시즌을 보내고 있다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"올라운드 파이터 (All-Round Fighter)"</strong></p>
                        <p>톰슨은 코트 어디에서든 플레이할 수 있는 다재다능함과 끈질긴 수비력을 갖춘 선수다.</p>

                        <PlayerHexagonStats
                            playerName="조던 톰슨"
                            attributes={[
                                { name: '투지 (Fighting Spirit)', score: 10, description: '그의 가장 큰 무기. 어떤 상황에서도 포기하지 않고 공을 쫓아간다.' },
                                { name: '수비 (Defense)', score: 9.0, description: '빠른 발과 예측 능력으로 상대의 위너성 타구를 받아낸다.' },
                                { name: '발리 (Volley)', score: 8.5, description: '복식 우승자답게 네트 앞에서의 처리가 깔끔하고 과감하다.' },
                                { name: '움직임 (Movement)', score: 8.5, description: '코트 커버력이 매우 좋다. 체력도 뛰어나다.' },
                                { name: '포핸드 (Forehand)', score: 7.5, description: '안정적이지만 폭발력은 다소 부족하다. 주로 코스를 공략한다.' },
                            ]}
                        />

                        <p>그는 상대의 실수를 유도하는 플레이에 능하다. 깊숙한 스트로크로 상대를 뒤로 밀어내고, 짧은 공이 오면 네트로 대시하여 마무리한다. 서브 앤 발리도 즐겨 사용하며, 특히 잔디 코트에서 강한 면모를 보인다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>183cm의 키에 탄탄한 체격을 가졌다. 엄청난 활동량을 자랑하며, 3시간이 넘는 혈투 후에도 지친 기색을 보이지 않는다. 콧수염과 뒤로 쓴 모자는 그의 트레이드마크가 되었다.</p>

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
                                2024 로스 카보스 단식 우승 · US 오픈 복식 우승 · <strong className="text-green-700 dark:text-green-400 text-base">커리어 하이 시즌</strong>
                            </p>
                        </div>
                        <p>승부욕이 매우 강하다. 때로는 라켓을 던지거나 소리를 지르며 감정을 표출하기도 하지만, 이는 경기에 대한 열정의 반증이다. 중요한 순간에 집중력을 잃지 않고 자신의 플레이를 해내는 담력도 갖췄다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">조던 톰슨은 어떻게 여기까지 왔을까?</h2>
                        <p>호주 시드니에서 태어난 톰슨은 4살 때 테니스를 시작했다. 2013년 프로 데뷔 후 챌린저 투어에서 꾸준히 성적을 내며 랭킹을 올렸다. 오랫동안 투어 우승이 없었으나, 2024년 30세의 나이에 첫 우승을 차지하며 대기만성형 선수의 표본이 되었다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>2024년 로스 카보스 오픈 준결승전이다.</p>

                        <h3>2024년 로스 카보스 오픈 준결승</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">마라톤 매치의 승자</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                알렉산더 즈베레프를 상대로 3시간 40분의 혈투 끝에 승리했다. 체력적으로나 정신적으로나 극한의 상황이었지만, 끝까지 포기하지 않고 승리를 쟁취해냈다. 이 경기는 톰슨의 근성을 가장 잘 보여주는 명승부였다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>투박하지만 진정성 있는 플레이, 그리고 독특한 외모(콧수염)가 팬들에게 친근함을 준다. '일하는 노동자' 같은 성실함으로 묵묵히 자신의 길을 가는 모습에 많은 팬들이 응원을 보낸다.</p>

                        <h2 id="recent-form">요즘 조던 톰슨의 경기력 흐름은 어떤가?</h2>
                        <p>단식과 복식 모두에서 최고의 성적을 내고 있다. US 오픈 복식 우승으로 자신감이 더욱 상승했으며, 단식 랭킹도 30위권에 안착했다.</p>

                        <h3>최근 성적</h3>
                        <p>하드 코트 시즌에서 특히 강세를 보이고 있으며, 다가오는 시즌에서도 꾸준한 활약이 기대된다.</p>

                        <h2 id="one-sentence-summary">조던 톰슨, 한 문장으로 정리하면?</h2>
                        <p>조던 톰슨은 호주 테니스의 투혼을 상징하는 선수이자, 콧수염 휘날리며 코트를 누비는 불굴의 파이터다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}
