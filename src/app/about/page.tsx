import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Target, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TennisFriends 소개 | 테니스 실력 향상을 위한 종합 플랫폼',
  description: 'TennisFriends는 데이터 기반의 정확한 분석과 전문적인 정보로 테니스 실력 향상을 돕는 종합 플랫폼입니다. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 위험도 평가 등 다양한 도구를 제공합니다.',
  keywords: ['TennisFriends', '테니스 플랫폼', '테니스 커뮤니티', '테니스 실력 향상', 'NTRP', '테니스 도구'],
  alternates: {
    canonical: 'https://tennisfrens.com/about',
  },
  openGraph: {
    title: 'TennisFriends 소개 | 테니스 실력 향상을 위한 종합 플랫폼',
    description: '데이터 기반의 정확한 분석과 전문적인 정보로 테니스 실력 향상을 돕는 종합 플랫폼입니다.',
    url: 'https://tennisfrens.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: '테니스 코칭팀',
      role: '프로 테니스 코치진',
      experience: '다년간 코칭 경력',
      specialty: 'NTRP 레벨별 맞춤 코칭'
    },
    {
      name: '장비 분석팀',
      role: '장비 전문가 그룹',
      experience: '현장 장비 테스트',
      specialty: '라켓 & 스트링 심층 분석'
    },
    {
      name: '스포츠 의학팀',
      role: '스포츠 의학 자문단',
      experience: '운동 과학 기반',
      specialty: '부상 예방 & 재활 가이드'
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
            <Link href="/contact">
              <button className="bg-primary text-background-dark px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                문의하기
              </button>
            </Link>
            <Link href="/blog/">
              <button className="bg-content-dark text-text-light px-6 py-2 rounded-lg font-medium hover:bg-content-dark/80 transition-colors border border-white/10">
                블로그 보기
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
