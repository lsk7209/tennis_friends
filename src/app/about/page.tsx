import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: '김테니스',
      role: '프로 테니스 코치',
      experience: '15년 경력',
      specialty: 'NTRP 레벨별 코칭'
    },
    {
      name: '이스트링',
      role: '장비 전문가',
      experience: '10년 경력',
      specialty: '라켓 & 스트링 분석'
    },
    {
      name: '박헬스',
      role: '스포츠 의학 전문가',
      experience: '12년 경력',
      specialty: '부상 예방 & 재활'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: '열정',
      description: '테니스에 대한 진정한 사랑과 열정으로 모든 서비스를 제공합니다.'
    },
    {
      icon: Target,
      title: '정확성',
      description: '데이터 기반의 정확한 분석과 신뢰할 수 있는 정보를 제공합니다.'
    },
    {
      icon: Users,
      title: '커뮤니티',
      description: '테니스 동호인들이 함께 성장할 수 있는 커뮤니티를 만들어갑니다.'
    },
    {
      icon: Award,
      title: '전문성',
      description: '테니스 전문가들의 깊이 있는 지식과 경험을 바탕으로 합니다.'
    }
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-text-light mb-4">TennisFriends 소개</h1>
        <p className="text-text-muted text-lg max-w-3xl mx-auto">
          테니스 실력 향상을 위한 모든 것을 한 곳에서 제공하는 종합 플랫폼입니다. 
          데이터 기반의 정확한 분석과 전문적인 정보로 당신의 테니스 여정을 함께합니다.
        </p>
      </div>

      {/* Mission Section */}
      <Card className="bg-content-dark border-white/10 mb-16">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-text-light mb-6 text-center">우리의 미션</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">데이터로 똑똑하게</h3>
              <p className="text-text-muted">
                NTRP 실력 테스트, 스트링 텐션 계산기, 부상 위험도 평가 등 
                과학적이고 객관적인 데이터를 바탕으로 당신의 테니스 실력을 정확히 측정하고 
                개선 방향을 제시합니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">함께 성장하는 커뮤니티</h3>
              <p className="text-text-muted">
                테니스는 혼자보다 함께할 때 더욱 즐겁고 의미있습니다. 
                동호인들과의 소통과 경험 공유를 통해 서로가 서로의 성장을 돕는 
                따뜻한 커뮤니티를 만들어갑니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-text-light mb-8 text-center">핵심 가치</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="bg-content-dark border-white/10 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-light mb-2">{value.title}</h3>
                  <p className="text-text-muted text-sm">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-text-light mb-8 text-center">전문가 팀</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-content-dark border-white/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-light mb-2">{member.name}</h3>
                <Badge className="bg-primary/20 text-primary mb-2">{member.role}</Badge>
                <p className="text-text-muted text-sm mb-2">{member.experience}</p>
                <p className="text-text-muted text-xs">{member.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <Card className="bg-content-dark border-white/10 mb-16">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-text-light mb-8 text-center">TennisFriends 현황</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-text-muted">실력 테스트 완료</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-text-muted">텐션 계산 사용</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3,000+</div>
              <div className="text-text-muted">부상 위험도 평가</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-text-muted">전문 블로그 포스트</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact CTA */}
      <Card className="bg-primary/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-text-light mb-4">
            함께 만들어가는 TennisFriends
          </h2>
          <p className="text-text-muted mb-6">
            여러분의 피드백과 제안이 TennisFriends를 더욱 발전시킵니다. 
            언제든지 연락주세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-primary text-background-dark px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                문의하기
              </button>
            </a>
            <a href="/blog">
              <button className="bg-content-dark text-text-light px-6 py-2 rounded-lg font-medium hover:bg-content-dark/80 transition-colors border border-white/10">
                블로그 보기
              </button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
