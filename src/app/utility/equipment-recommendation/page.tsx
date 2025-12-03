import { Metadata } from 'next';
import EquipmentRecommendationClient from './EquipmentRecommendationClient';

export const metadata: Metadata = {
    title: '테니스 라켓 & 스트링 추천 - 나에게 딱 맞는 장비 찾기 | TennisFriends',
    description: '내 실력과 플레이 스타일에 최적화된 테니스 라켓과 스트링을 추천해드립니다. 윌슨, 바볼랏, 헤드 등 주요 브랜드 장비 비교 분석.',
    keywords: ['테니스 라켓 추천', '테니스 스트링 추천', '테니스 장비', '테니스 라켓 고르는 법', '초보자 테니스 라켓', '윌슨 라켓', '바볼랏 라켓'],
    openGraph: {
        title: '테니스 라켓 & 스트링 추천 - 나에게 딱 맞는 장비 찾기',
        description: '아직도 아무 라켓이나 쓰시나요? 내 스타일과 실력에 딱 맞는 인생 라켓을 찾아드립니다.',
        type: 'website',
        url: 'https://tennisfriends.co.kr/utility/equipment-recommendation',
    },
};

export default function EquipmentRecommendationPage() {
    return <EquipmentRecommendationClient />;
}
