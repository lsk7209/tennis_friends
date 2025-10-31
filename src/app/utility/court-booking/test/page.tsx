'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Users,
  CreditCard,
  ArrowLeft,
  CheckCircle,
  CalendarIcon,
  ClockIcon
} from 'lucide-react';

export default function CourtBookingTest() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    duration: '1',
    players: '1',
    notes: '',
    payment: 'card',
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('이용약관에 동의해주세요.');
      return;
    }
    // 실제로는 API 호출 후 결과 페이지로 이동
    router.push('/utility/court-booking/result');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-4xl px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/utility/court-booking">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                뒤로가기
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">코트 예약하기</h1>
              <p className="text-gray-600">실내 하드코트 A - 서울 강남점</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="text-sm font-medium">코트 선택</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm font-medium text-blue-600">예약 정보</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="text-sm text-gray-500">완료</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                개인 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">이름 *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="홍길동"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">휴대폰 번호 *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="010-1234-5678"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="example@email.com"
                />
              </div>
            </CardContent>
          </Card>

          {/* Reservation Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                예약 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="date">예약 날짜 *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="time">시작 시간 *</Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="시간 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 18 }, (_, i) => {
                        const hour = Math.floor(i / 2) + 6;
                        const minute = i % 2 === 0 ? '00' : '30';
                        return (
                          <SelectItem key={`${hour}:${minute}`} value={`${hour}:${minute}`}>
                            {`${hour}:${minute}`}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">이용 시간 *</Label>
                  <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.5">30분</SelectItem>
                      <SelectItem value="1">1시간</SelectItem>
                      <SelectItem value="1.5">1시간 30분</SelectItem>
                      <SelectItem value="2">2시간</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="players">인원 수</Label>
                <Select value={formData.players} onValueChange={(value) => handleInputChange('players', value)}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1명</SelectItem>
                    <SelectItem value="2">2명</SelectItem>
                    <SelectItem value="3">3명</SelectItem>
                    <SelectItem value="4">4명</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes">특별 요청사항</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="코치 요청, 특별 준비사항 등..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                결제 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">예약 금액</span>
                  <span className="text-2xl font-bold text-blue-600">₩50,000</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">실내 하드코트 A (1시간)</p>
              </div>

              <div>
                <Label>결제 방법</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      formData.payment === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => handleInputChange('payment', 'card')}
                  >
                    <div className="text-center">
                      <CreditCard className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                      <span className="text-sm font-medium">신용카드</span>
                    </div>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      formData.payment === 'kakao' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => handleInputChange('payment', 'kakao')}
                  >
                    <div className="text-center">
                      <div className="h-8 w-8 mx-auto mb-2 bg-yellow-400 rounded"></div>
                      <span className="text-sm font-medium">카카오페이</span>
                    </div>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      formData.payment === 'naver' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                    onClick={() => handleInputChange('payment', 'naver')}
                  >
                    <div className="text-center">
                      <div className="h-8 w-8 mx-auto mb-2 bg-green-500 rounded"></div>
                      <span className="text-sm font-medium">네이버페이</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeTerms', !!checked)}
                />
                <div>
                  <Label htmlFor="terms" className="text-sm font-medium">
                    이용약관 및 취소 정책에 동의합니다 *
                  </Label>
                  <p className="text-xs text-gray-500 mt-1">
                    예약 24시간 전까지 무료 취소 가능합니다. 자세한 내용은 이용약관을 확인해주세요.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-4">
            <Link href="/utility/court-booking" className="flex-1">
              <Button variant="outline" className="w-full">
                이전으로
              </Button>
            </Link>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              예약 완료하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
