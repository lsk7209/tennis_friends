import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
    title: '서울 테니스 성지 TOP 5 — 코트 예약 명당과 지역별 클럽 특징 | 송파·강남·서초·마포·노원 완전 분석',
    description: '서울에서 테니스 치기 좋은 자치구 TOP 5 선정. 올림픽공원, 봉은테니스장 등 주요 코트 예약 팁과 지역별 동호회 분위기 정리.',
    keywords: ['서울 테니스장', '테니스 코트 예약', '송파 테니스', '강남 테니스', '테니스 동호회 추천', '서울 실내 테니스'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/blog/top-5-tennis-districts-seoul',
    },
    openGraph: {
        title: '서울 테니스 성지 TOP 5 — 코트 예약 명당과 지역별 클럽 특징',
        description: '서울에서 테니스 치기 좋은 자치구 TOP 5 선정. 올림픽공원, 봉은테니스장 등 주요 코트 예약 팁과 지역별 동호회 분위기 정리.',
        url: 'https://tennisfriends.co.kr/blog/top-5-tennis-districts-seoul',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '서울 테니스 성지 TOP 5 — 코트 예약 명당과 지역별 클럽 특징',
        description: '서울에서 테니스 치기 좋은 자치구 TOP 5 선정.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'district-rank-1', text: '1. 송파구: 테니스의 메카, 올림픽공원의 자부심', depth: 2 },
    { id: 'district-rank-2', text: '2. 강남구: 프리미엄 레슨과 도심 속 오아시스', depth: 2 },
    { id: 'district-rank-3', text: '3. 서초구: 전통의 강자, 반포와 양재 클러스터', depth: 2 },
    { id: 'district-rank-4', text: '4. 마포구: 서부권의 중심, 상암 월드컵 파크', depth: 2 },
    { id: 'district-rank-5', text: '5. 노원구/성북구: 공공 코트의 보고, 가성비 끝판왕', depth: 2 },
    { id: 'booking-tips', text: '6. 서울 테니스장 예약 성공을 위한 3계명', depth: 2 },
    { id: 'conclusion', text: '7. 결론: 당신의 거주지 근처가 최고의 코트다', depth: 2 },
];

const faqs = [
    {
        q: '서울 공공 테니스장 예약은 언제 열리나요?',
        a: '보통 매월 25일 또는 1일 오전 9시에 열립니다. 자치구별로 상이하니 공공서비스예약 시스템을 미리 확인하세요.'
    },
    {
        q: '외국인도 서울 테니스장을 이용할 수 있나요?',
        a: '네, 서울시 공공서비스예약 외국인 회원가입 후 동일하게 이용 가능합니다.'
    }
];

export default function Top5TennisDistrictsSeoulPage() {
    const title = '서울 테니스 성지 TOP 5: 어디서 쳐야 할까?';
    const excerpt = '서울은 전 세계적으로도 테니스 열기가 뜨거운 도시입니다. 예약 전쟁을 뚫고 즐길 수 있는 지역별 명당과 클럽의 특색을 분석했습니다.';

    return (
        <Article slug="top-5-tennis-districts-seoul" date="2024-01-01" title={title} excerpt={excerpt}>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">서울 테니스 지도</Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">지역별 분석</Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    서울에는 수백 개의 테니스장이 있지만, 지역마다 동호회의 성격과 예약 난이도가 천차만별입니다. 실력 키우기 좋은 곳부터 커뮤니티가 활발한 곳까지, <strong>테니스 친구들</strong>이 직접 선정한 TOP 5 자치구를 소개합니다.
                </p>
            </div>

            <TOC items={tocItems} />

            <section id="district-rank-1" className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. 송파구: 테니스의 메카, 올림픽공원</h2>
                <Card className="mb-6 overflow-hidden border-none shadow-md">
                    <div className="bg-blue-600 p-4 text-white">
                        <h4 className="font-bold">Key Statistics</h4>
                    </div>
                    <CardContent className="p-5 grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] text-slate-400">코트 밀도</p>
                            <p className="text-sm font-bold">★★★★★</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400">예약 난이도</p>
                            <p className="text-sm font-bold text-red-500">최상 (Hell)</p>
                        </div>
                    </CardContent>
                </Card>
                <p className="text-sm leading-relaxed mb-4">올림픽공원 테니스장은 24면이 넘는 대규모 코트를 보유하고 있어 전국 대회의 단골 장소입니다. 가락동, 문정동 일대에 대형 실내 레슨장이 밀집해 있어 입문자부터 고수까지 가장 활발한 커뮤니티를 형성하고 있습니다.</p>
            </section>

            <section id="district-rank-2" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. 강남구: 프리미엄 레슨과 명품 코트</h2>
                <p className="text-sm leading-relaxed mb-4">봉은테니스장과 잠원스포츠파크는 강남의 자존심입니다. 관리가 매우 잘 되어 있으며, 도심 한복판에서 즐길 수 있다는 장점이 있습니다. 야간 조명 시설이 훌륭하여 직장인들의 야간 매치가 가장 활발합니다.</p>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border-l-4 border-slate-300 italic text-[11px]">
                    "강남구 테니스 클럽은 전통을 중시하며 매너와 기본기를 매우 강조하는 분위기가 특징입니다."
                </div>
            </section>

            <section id="district-rank-3" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. 서초구: 전통의 강자, 반포와 양재</h2>
                <p className="text-sm leading-relaxed mb-4">반포종합운동장과 양재 시민의 숲 코트는 서초구 테니스인들의 중심지입니다. 대기업 동호회와 오랜 수십 년 역사를 가진 명문 클럽들이 다수 포진해 있어 실력 향상을 노리는 '빡테(빡센 테니스)'인들에게 인기가 높습니다.</p>
            </section>

            <section id="district-rank-4" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. 마포구: 서부권의 중심, 상암 월드컵 파크</h2>
                <p className="text-sm leading-relaxed mb-4">상암동에 위치한 월드컵공원 테니스장은 넓은 주차 공간과 쾌적한 환경을 자랑합니다. 서대문, 은평, 마포를 잇는 서부 테니스 벨트의 핵심이며, 젊은 테니스 유입 인구(테린이) 비중이 가장 높은 곳 중 하나입니다.</p>
            </section>

            <section id="district-rank-5" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. 노원구/성북구: 가성비와 환경의 조화</h2>
                <p className="text-sm leading-relaxed mb-4">불암산, 정릉테니스장 등 하드코트와 인조잔디가 골고루 섞여 있으며 타 지역에 비해 공공 코트 이용료가 상대적으로 저렴하고 예약 경쟁이 (상대적으로) 덜 치열합니다. 실력을 쌓으며 오래 운동하기에 최적의 장소입니다.</p>
            </section>

            <section id="booking-tips" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. 서울 테니스장 예약 성공을 위한 3계명</h2>
                <div className="space-y-4">
                    <div className="p-5 bg-blue-50 dark:bg-blue-900/10 rounded-2xl flex gap-4">
                        <span className="text-2xl">⚡</span>
                        <div>
                            <h5 className="font-bold text-sm">빛의 속도로 광클 (09:00:00)</h5>
                            <p className="text-[10px] text-slate-500">네이비즘 등 서버 시간 확인기를 사용해 정각에 접속하세요.</p>
                        </div>
                    </div>
                    <div className="p-5 bg-green-50 dark:bg-green-900/10 rounded-2xl flex gap-4">
                        <span className="text-2xl">📱</span>
                        <div>
                            <h5 className="font-bold text-sm">사용자 정보 미리 저장</h5>
                            <p className="text-[10px] text-slate-500">결제 단계에서 시간을 뺏기지 않도록 간편결제와 주소를 등록해두세요.</p>
                        </div>
                    </div>
                    <div className="p-5 bg-amber-50 dark:bg-amber-900/10 rounded-2xl flex gap-4">
                        <span className="text-2xl">🔄</span>
                        <div>
                            <h5 className="font-bold text-sm">취소 표 사냥 (새벽 시간)</h5>
                            <p className="text-[10px] text-slate-500">경기 72시간 전 무료 취소 기한인 경우가 많아 이때 취소 표가 대거 풀립니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. 결론: 당신의 거주지 근처가 최고의 코트다</h2>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    유명한 코트도 좋지만, 테니스에서 가장 중요한 건 <strong>'지속성'</strong>입니다. 왕복 2시간이 걸리는 명당보다 집 앞의 낡은 코트에서 매일 30분씩 벽치기를 하는 것이 더 큰 성장을 이끕니다. 서울의 풍부한 테니스 인프라를 활용하되, 본인에게 가장 편한 베이스캠프를 먼저 만드세요.
                </p>
            </section>

            <FAQ items={faqs} />
        </Article>
    );
}
