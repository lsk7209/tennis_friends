import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  "title": "손목·무릎 통증 예방과 관리",
  "description": "테니스 엘보부터 점퍼스 니까지. 흔한 부상 예방법과 통증 발생 시 대처법.",
  "keywords": [
    "테니스 건강",
    "부상 예방",
    "손목",
    "무릎",
    "관리"
  ],
  "alternates": {
    "canonical": "https://tennisfriends.co.kr/blog/tennis-wrist-knee-pain-care"
  },
  "openGraph": {
    "title": "손목·무릎 통증 예방과 관리",
    "description": "테니스 엘보부터 점퍼스 니까지. 흔한 부상 예방법과 통증 발생 시 대처법.",
    "url": "https://tennisfriends.co.kr/blog/tennis-wrist-knee-pain-care",
    "siteName": "TennisFriends",
    "locale": "ko_KR",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "손목·무릎 통증 예방과 관리",
    "description": "테니스 엘보부터 점퍼스 니까지. 흔한 부상 예방법과 통증 발생 시 대처법."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};
const tocItems = [
  {
    "id": "wrist",
    "text": "손목 관리",
    "depth": 2
  },
  {
    "id": "knee",
    "text": "무릎 관리",
    "depth": 2
  }
];
const faqs = [
  {
    "q": "테니스 엘보는 어떻게 예방하나요?",
    "a": "적절한 라켓 무게, 낮은 스트링 텐션, 올바른 타법으로 예방할 수 있습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30">테니스 건강</Badge>
            <Badge className="bg-white/20 text-white border-white/30">부상 예방</Badge>
            <Badge className="bg-white/20 text-white border-white/30">손목</Badge>
            <Badge className="bg-white/20 text-white border-white/30">무릎</Badge>
            <Badge className="bg-white/20 text-white border-white/30">관리</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">손목·무릎 통증 예방과 관리</h1>
          <p className="text-xl text-blue-100 mb-8">테니스 엘보부터 점퍼스 니까지. 흔한 부상 예방법과 통증 발생 시 대처법.</p>
        </div>
      </div>
      <Article slug="tennis-wrist-knee-pain-care" date="2026-01-24" title="손목·무릎 통증 예방과 관리" excerpt="테니스 엘보부터 점퍼스 니까지. 흔한 부상 예방법과 통증 발생 시 대처법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <TOC items={tocItems} />
          <div className="prose prose-lg dark:prose-invert max-w-none mt-12"><h2 id="wrist">손목 관리</h2><p>손목 보호대를 착용하고, 운동 전후 스트레칭을 충분히 하세요. 통증이 지속되면 병원을 방문하세요.</p><h2 id="knee">무릎 관리</h2><p>적절한 신발과 올바른 풋워크로 무릎 부담을 줄이세요. 급정지를 피하고 부드럽게 움직입니다.</p></div>
          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}