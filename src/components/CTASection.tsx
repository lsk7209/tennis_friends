import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Settings, Shield, Trophy, BookOpen, TrendingUp, Calculator, Target, Sparkles } from 'lucide-react';

const CTASection: React.FC = () => {
  const utilities = [
    {
      title: "테니스 플레이 스타일 진단",
      description: "7가지 플레이 스타일 중 당신의 고유한 테니스 성향을 발견하고 맞춤형 조언을 받으세요.",
      icon: Sparkles,
      href: "/utility/play-style-test",
      color: "text-primary",
      gradient: "from-purple/20 to-purple/40",
      features: ["7가지 스타일", "맞춤형 조언", "프로 선수 비교"]
    },
    {
      title: "NTRP 실력 테스트",
      description: "나의 객관적인 테니스 실력은? 간단한 테스트로 당신의 NTRP 등급을 확인해보세요.",
      icon: BarChart3,
      href: "/utility/ntrp-test",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/40",
      features: ["10개 질문", "정확한 분석", "개선 방향 제시"]
    },
    {
      title: "스트링 텐션 계산기",
      description: "플레이 스타일에 맞는 최적의 스트링 텐션을 찾아 퍼포먼스를 극대화하세요.",
      icon: Settings,
      href: "/utility/string-tension",
      color: "text-primary",
      gradient: "from-primary/15 to-primary/35",
      features: ["맞춤형 계산", "장비별 조정", "전문가 추천"]
    },
    {
      title: "테니스 규칙 퀴즈",
      description: "12문항 랜덤 퀴즈로 실전 규칙 감각을 점검하고 약점을 분석해보세요.",
      icon: BookOpen,
      href: "/tennis-rules-quiz",
      color: "text-primary",
      gradient: "from-emerald/20 to-emerald/40",
      features: ["즉시 해설", "약점 분석", "결과 카드"]
    },
    {
      title: "경기 분석 도구",
      description: "경기 데이터를 분석하여 전술적 개선점을 찾아보세요. 객관적 통계로 강점과 약점을 파악합니다.",
      icon: TrendingUp,
      href: "/utility/match-analyzer",
      color: "text-primary",
      gradient: "from-blue/20 to-blue/40",
      features: ["경기 분석", "전술 개선", "성과 추적"]
    },
    {
      title: "훈련 계획 수립",
      description: "개인 실력과 목표에 맞는 체계적인 훈련 계획을 세워보세요. 주간별 상세 계획으로 확실한 실력 향상을 경험하세요.",
      icon: Calculator,
      href: "/utility/training-planner",
      color: "text-primary",
      gradient: "from-indigo/20 to-indigo/40",
      features: ["개인별 계획", "목표 설정", "진도 추적"]
    },
        {
          title: "부상 위험 예측",
          description: "데이터 기반 분석으로 부상 위험도를 체크하고, 더 안전하게 테니스를 즐기세요.",
          icon: Shield,
          href: "/utility/injury-risk",
          color: "text-primary",
          gradient: "from-red/20 to-red/40",
          features: ["위험도 평가", "예방 가이드", "안전한 플레이"]
        },
        {
          title: "장비 추천 시스템",
          description: "플레이 스타일과 실력에 맞는 최적의 라켓과 스트링을 추천해드립니다.",
          icon: Target,
          href: "/utility/equipment-recommendation",
          color: "text-primary",
          gradient: "from-purple/20 to-purple/40",
          features: ["맞춤 추천", "브랜드별 비교", "가격대별 옵션"]
        },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {utilities.map((utility, index) => {
        const IconComponent = utility.icon;
        return (
          <Link key={index} href={utility.href}>
            <Card className="h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 card-hover group cursor-pointer overflow-hidden shadow-sm hover:shadow-lg">
              <CardContent className="p-6 flex flex-col h-full relative">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${utility.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="h-7 w-7 text-blue-600" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
                    {utility.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {utility.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {utility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="relative z-10 mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">무료 사용</span>
                    <span className="font-semibold text-blue-600 hover:text-blue-700 transition-colors text-sm group-hover:translate-x-1 transform duration-200">
                      시작하기 →
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default CTASection;
