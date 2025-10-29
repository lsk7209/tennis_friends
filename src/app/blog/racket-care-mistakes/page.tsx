'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, CheckCircle, ArrowRight, RotateCcw, Share2, Download } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function RacketCareMistakes() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4 text-sm font-semibold">
              🎾 라켓 관리 가이드
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              테니스 초보가 라켓을 망치는 5가지 관리 습관 😬
            </h1>
            <p className="text-gray-600 text-lg">
              라켓은 당신의 손과 기억을 공유하는 도구입니다. 하지만 잘못된 습관 하나로 수명과 성능이 반토막 납니다.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">📋 목차</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="space-y-2">
                  <div><a href="#mistake-1" className="text-blue-600 hover:text-blue-800">1. 라켓을 차 안에 두고 다닌다</a></div>
                  <div><a href="#mistake-2" className="text-blue-600 hover:text-blue-800">2. 비 온 날 그대로 가방에 넣는다</a></div>
                  <div><a href="#mistake-3" className="text-blue-600 hover:text-blue-800">3. 스트링 텐션 점검을 하지 않는다</a></div>
                </div>
                <div className="space-y-2">
                  <div><a href="#mistake-4" className="text-blue-600 hover:text-blue-800">4. 그립 교체를 미룬다</a></div>
                  <div><a href="#mistake-5" className="text-blue-600 hover:text-blue-800">5. 라켓을 벽에 기대놓는다</a></div>
                  <div><a href="#geo-tips" className="text-blue-600 hover:text-blue-800">지역별 보관 환경 주의</a></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                테니스 라켓은 단순한 장비가 아닙니다. 매 스윙마다 당신의 리듬과 감각을 기억하는 도구입니다. 하지만 대부분의 초보는 라켓을 '사용'만 하지, '관리'하지 않습니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                오늘은 코치들이 실제로 가장 많이 본 <strong>라켓 관리 실수 TOP 5</strong>를 알려드릴게요.
              </p>
              <Alert className="bg-blue-50 border-blue-200 mb-8">
                <AlertTriangle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  "라켓은 당신의 손보다 더 솔직하다. 관리한 만큼 반응한다." — 코치 재훈
                </AlertDescription>
              </Alert>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mistake 1 */}
      <section id="mistake-1" className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌡️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">1. 라켓을 차 안에 두고 다닌다</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    테니스 끝나고 귀찮다고 라켓을 차 안에 방치하셨나요?
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>직사광선 + 온도 변화</strong>는 스트링 텐션을 급격히 낮추고, 프레임 변형의 원인이 됩니다.
                    특히 여름철 트렁크는 <strong>70도 이상</strong> 올라갑니다.
                  </p>
                  
                  <Alert className="bg-gray-50 border-gray-200 mb-6">
                    <CheckCircle className="h-4 w-4 text-gray-700" />
                    <AlertDescription className="text-gray-700">
                      <strong className="text-gray-900">코치 팁:</strong> 플레이 후엔 반드시 <strong>그늘진 실내</strong>나 <strong>라켓 백 안쪽 포켓</strong>에 보관하세요.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* Mistake 2 */}
      <section id="mistake-2" className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">2. 비 온 날 그대로 가방에 넣는다</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    젖은 라켓은 시간이 지나면 스트링 내부 섬유가 손상됩니다.
                    습기가 마르기 전 닫힌 가방에 넣으면, 곰팡이와 냄새가 납니다.
                  </p>
                  
                  <Alert className="bg-blue-50 border-blue-200 mb-6">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800">
                      <strong>관리법:</strong> 물기 닦기 → 30분 통풍 → 케이스 보관.<br />
                      습도 높은 여름엔 제습제를 함께 넣어두세요.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">📎 관련 가이드</p>
                    <Link href="/blog/tennis-ball-lifespan" className="text-blue-600 hover:text-blue-800 text-sm">
                      테니스공 수명 가이드 →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* Mistake 3 */}
      <section id="mistake-3" className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">3. 스트링 텐션 점검을 하지 않는다</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    라켓은 쓰지 않아도 텐션이 서서히 줄어듭니다.
                    <strong>한 달에 5~10% 감소</strong>하므로, 2개월 이상 그대로 두면 성능이 떨어집니다.
                  </p>
                  
                  <Alert className="bg-orange-50 border-orange-200 mb-6">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    <AlertDescription className="text-orange-800">
                      <strong>핵심 요약:</strong> 텐션은 부상과 직결됩니다. '느낌이 다르다'면 바로 점검하세요.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">📎 관련 도구</p>
                    <Link href="/utility/string-tension" className="text-blue-600 hover:text-blue-800 text-sm">
                      스트링 텐션 계산기 →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* Mistake 4 */}
      <section id="mistake-4" className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🪶</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">4. 그립 교체를 미룬다</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    그립은 라켓보다 빨리 닳습니다.
                    미끄러진 상태에서 스윙하면 손목에 힘이 과도하게 들어가 부상 위험이 커집니다.
                  </p>
                  
                  <Alert className="bg-gray-50 border-gray-200 mb-6">
                    <CheckCircle className="h-4 w-4 text-gray-700" />
                    <AlertDescription className="text-gray-700">
                      <strong className="text-gray-900">코치 팁:</strong> 2~3개월마다 오버그립을 교체하고, 땀 많은 체질은 더 자주 교체하세요.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">📎 관련 가이드</p>
                    <Link href="/blog/tennis-grip-replacement" className="text-blue-600 hover:text-blue-800 text-sm">
                      그립 교체 시기 가이드 →
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* Mistake 5 */}
      <section id="mistake-5" className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧳</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">5. 라켓을 벽에 기대놓는다</h2>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    생각보다 흔한 실수입니다. 프레임에 지속적인 하중이 걸리면서 <strong>라켓 헤드 변형</strong>이 생깁니다.
                  </p>
                  
                  <Alert className="bg-blue-50 border-blue-200 mb-6">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800">
                      <strong>관리법:</strong> 라켓은 항상 수평으로 눕혀두거나, 벽과 수직으로 세워두세요.<br />
                      라켓 2~3개를 함께 보관할 땐 헤드 위치를 번갈아 쌓는 게 좋습니다.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* GEO Section */}
      <section id="geo-tips" className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">📍 지역별 보관 환경 주의</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-bold text-blue-900 mb-2">서울/수도권</h3>
                    <p className="text-blue-800 text-sm">
                      실내 습도 낮음 → 제습보다 '충격 방지' 우선
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-bold text-green-900 mb-2">부산/여수/제주</h3>
                    <p className="text-green-800 text-sm">
                      해풍·염분 많음 → 라켓 백 내부에 <strong>실리카겔 + 방습 커버</strong> 필수
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h3 className="font-bold text-orange-900 mb-2">강원도</h3>
                    <p className="text-orange-800 text-sm">
                      겨울철 온도차 큼 → 실내 보관 시 온도 급변 피하기
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ 자주 묻는 질문</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Q. 라켓을 오래 안 써도 텐션이 줄어드나요?</h3>
                    <p className="text-gray-700">A. 네. 공을 치지 않아도 장력이 자연스럽게 감소합니다. 한 달에 5%씩 떨어진다고 생각하세요.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Q. 라켓을 세워두는 건 정말 안 좋은가요?</h3>
                    <p className="text-gray-700">A. 장시간 벽에 기댄 상태로 두면 프레임이 휘어집니다. 특히 알루미늄 프레임은 변형이 빠릅니다.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* Coach Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">💬 코치의 이야기</h2>
                <div className="prose prose-lg max-w-none">
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "레슨할 때마다 똑같은 라켓인데 반발이 다른 제자들이 있어요.<br />
                    비밀은 관리였어요. 어떤 제자는 매번 닦고, 어떤 제자는 그냥 가방에 던져 넣더군요.<br />
                    3개월 후, 결과는 극명했죠. 같은 모델이라도, 관리 습관이 실력을 갈랐습니다."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* Related Content */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <SlideUp>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/blog/court-type-comparison">
                    <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2">하드코트 vs 클레이코트</h3>
                        <p className="text-gray-600 text-sm">내 스타일에 맞는 코트는?</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link href="/blog/string-tension-feel-guide">
                    <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2">스트링 텐션 가이드</h3>
                        <p className="text-gray-600 text-sm">숫자보다 감각이 중요하다</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link href="/utility/injury-risk">
                    <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2">부상 위험 체크</h3>
                        <p className="text-gray-600 text-sm">안전한 플레이 가이드</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* Conclusion */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">🏁 마무리</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    라켓은 당신의 손, 스윙, 감각을 모두 기억합니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    오늘의 한 습관이 내일의 경기력을 만듭니다.
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    <strong>잘 쓰는 것보다, 잘 관리하는 사람이 강해집니다.</strong>
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link href="/blog/forehand-body-balance">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3">
                      다음 읽기: 포핸드 스윙이 흔들릴 때 →
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Share Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔗 친구에게 공유하기</h3>
            <Button 
              onClick={() => {
                navigator.clipboard.writeText('https://tennisfriends.kr/blog/racket-care-mistakes');
                alert('공유 링크가 복사되었습니다 📎');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
            >
              📤 링크 복사하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
