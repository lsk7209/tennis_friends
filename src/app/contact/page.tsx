'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 API 호출
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: '이메일',
      content: 'contact@tennisfriends.co.kr',
      description: '24시간 내 답변 드립니다'
    },
    {
      icon: Phone,
      title: '전화',
      content: '02-1234-5678',
      description: '평일 09:00-18:00'
    },
    {
      icon: MapPin,
      title: '주소',
      content: '서울특별시 강남구 테니스로 123',
      description: 'TennisFriends 본사'
    }
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-text-light mb-4">문의하기</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          TennisFriends에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락주세요. 
          빠른 시일 내에 답변드리겠습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="bg-content-dark border-white/10">
          <CardHeader>
            <CardTitle className="text-text-light flex items-center gap-2">
              <Send className="w-5 h-5" />
              문의 양식
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-light mb-2">문의가 접수되었습니다!</h3>
                <p className="text-text-muted">빠른 시일 내에 답변드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-light">이름 *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="bg-background-dark border-white/10"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text-light">이메일 *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="bg-background-dark border-white/10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-text-light">문의 유형</Label>
                  <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                    <SelectTrigger className="bg-background-dark border-white/10">
                      <SelectValue placeholder="문의 유형을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">일반 문의</SelectItem>
                      <SelectItem value="technical">기술적 문제</SelectItem>
                      <SelectItem value="feature">기능 제안</SelectItem>
                      <SelectItem value="bug">버그 신고</SelectItem>
                      <SelectItem value="partnership">제휴 문의</SelectItem>
                      <SelectItem value="other">기타</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-text-light">제목 *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="bg-background-dark border-white/10"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-text-light">메시지 *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="bg-background-dark border-white/10 min-h-[120px]"
                    placeholder="문의사항을 자세히 적어주세요..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-background-dark"
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
                >
                  <Send className="w-4 h-4 mr-2" />
                  문의 보내기
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">연락처 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-light">{info.title}</h3>
                      <p className="text-text-light">{info.content}</p>
                      <p className="text-text-muted text-sm">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">자주 묻는 질문</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-text-light mb-2">NTRP 테스트는 얼마나 정확한가요?</h4>
                <p className="text-text-muted text-sm">
                  우리의 NTRP 테스트는 전문 코치들과 함께 개발된 알고리즘을 사용하여 
                  높은 정확도를 제공합니다. 다만 참고용으로 사용하시기 바랍니다.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light mb-2">스트링 텐션 계산기는 무료인가요?</h4>
                <p className="text-text-muted text-sm">
                  네, 모든 유틸리티 도구는 완전히 무료로 제공됩니다. 
                  언제든지 자유롭게 사용하실 수 있습니다.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-text-light mb-2">부상 위험도 평가 결과를 신뢰할 수 있나요?</h4>
                <p className="text-text-muted text-sm">
                  평가 결과는 참고용이며, 실제 부상이 의심되면 반드시 전문의와 상담하시기 바랍니다.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-text-light mb-2">
                빠른 답변이 필요하신가요?
              </h3>
              <p className="text-text-muted text-sm mb-4">
                긴급한 문의사항이 있으시면 전화로 연락주세요
              </p>
              <Button variant="outline" className="bg-content-dark border-white/10">
                <Phone className="w-4 h-4 mr-2" />
                02-1234-5678
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
