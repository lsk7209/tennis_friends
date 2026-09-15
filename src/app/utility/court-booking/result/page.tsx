import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {CheckCircle, CreditCard, Home, CalendarIcon} from 'lucide-react';

export default function CourtBookingResult() {
  const bookingData = {
    id: 'DEMO-BOOKING',
    court: '실내 하드코트 A',
    location: '서울 강남점',
    date: '2025-01-15',
    time: '14:00',
    duration: '1시간',
    price: 50000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="h-12 w-12" />
            <h1 className="text-4xl font-bold">예약 흐름 시뮬레이션 완료</h1>
          </div>
          <p className="text-xl opacity-90">
            아래 내용은 화면 확인용 예시입니다.<br />
            실제 예약이나 결제는 이루어지지 않았습니다.
          </p>
        </div>
      </div>

      {/* Booking Details */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                예약 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">예시 식별자</span>
                <Badge variant="secondary" className="font-mono">
                  {bookingData.id}
                </Badge>
              </div>
              <p className="text-xs text-gray-500">실제 예약 번호가 아닙니다.</p>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">코트</span>
                <span className="font-medium">{bookingData.court}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">장소</span>
                <span className="font-medium">{bookingData.location}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">날짜</span>
                <span className="font-medium">{bookingData.date}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">시간</span>
                <span className="font-medium">{bookingData.time} ({bookingData.duration})</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">상태</span>
                <Badge className="bg-green-100 text-green-800">
                  데모 결과
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                결제 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">결제 금액</span>
                  <span className="text-2xl font-bold text-green-600">
                    ₩{bookingData.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  실내 하드코트 A (1시간)
                </p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">결제 방법</span>
                <span className="font-medium">신용카드</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">결제 상태</span>
                <Badge className="bg-green-100 text-green-800">
                  결제되지 않음
                </Badge>
              </div>

              <p className="pt-4 border-t text-sm text-gray-600">
                실제 결제는 이루어지지 않았습니다.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild variant="outline" className="w-full"><Link href="/" className="flex-1">
              <Home className="h-4 w-4 mr-2" />
              홈으로 가기
            </Link></Button>

          <Button asChild variant="outline" className="w-full"><Link href="/utility" className="flex-1">
              다른 유틸리티 보기
            </Link></Button>

        </div>
      </div>
    </div>
  );
}
