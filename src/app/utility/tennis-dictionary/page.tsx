"use client"

import React, { useState } from 'react';
import { Search, BookOpen, Volume2, Star, StarOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import RelatedUtilitiesSection from '@/components/RelatedUtilitiesSection';

// 메타데이터는 layout.tsx에서 처리

interface Term {
  id: string;
  term: string;
  category: string;
  definition: string;
  pronunciation?: string;
  examples: string[];
  relatedTerms: string[];
  difficulty: '초급' | '중급' | '고급';
}

const tennisTerms: Term[] = [
  {
    id: 'ace',
    term: '에이스 (Ace)',
    category: '서브',
    definition: '상대가 공을 터치하지 못한 서브. 서브 에이스는 테니스에서 가장 짜릿한 순간 중 하나입니다.',
    pronunciation: '에이스',
    examples: ['연속 3개의 에이스로 경기를 주도했다.', '첫 서브 에이스로 포인트를 가져갔다.'],
    relatedTerms: ['서브', '첫 서브', '두 번째 서브'],
    difficulty: '초급'
  },
  {
    id: 'backhand',
    term: '백핸드 (Backhand)',
    category: '타격 기술',
    definition: '라켓을 반대 손으로 쥐고 치는 타격. 한손 백핸드와 양손 백핸드로 나뉩니다.',
    pronunciation: '백핸드',
    examples: ['강력한 백핸드로 크로스코트 위너를 만들었다.', '백핸드 슬라이스로 공의 회전을 주었다.'],
    relatedTerms: ['포핸드', '슬라이스', '토핑'],
    difficulty: '초급'
  },
  {
    id: 'forehand',
    term: '포핸드 (Forehand)',
    category: '타격 기술',
    definition: '라켓을 잡은 손과 같은 방향으로 치는 타격. 테니스 타격의 기본 중의 기본입니다.',
    pronunciation: '포핸드',
    examples: ['깊은 포핸드로 상대를 베이스라인 뒤로 밀어냈다.', '포핸드 드라이브로 안정적인 랠리를 이어갔다.'],
    relatedTerms: ['백핸드', '크로스코트', '다운 더 라인'],
    difficulty: '초급'
  },
  {
    id: 'volley',
    term: '발리 (Volley)',
    category: '네트 플레이',
    definition: '공이 바운스되기 전에 네트 앞에서 타격하는 기술. 빠르고 정확한 반사 신경이 필요합니다.',
    pronunciation: '발리',
    examples: ['강력한 발리로 포인트를 마무리했다.', '드롭 발리로 상대를 네트로 끌어들였다.'],
    relatedTerms: ['하프 발리', '드롭 발리', '스매시'],
    difficulty: '중급'
  },
  {
    id: 'baseline',
    term: '베이스라인 (Baseline)',
    category: '코트',
    definition: '코트의 끝부분을 가로지르는 선. 베이스라인 플레이어들은 코트 뒤쪽에서 강력한 타격을 구사합니다.',
    pronunciation: '베이스라인',
    examples: ['베이스라인에서 강력한 포핸드를 구사했다.', '베이스라인 랠리가 20번을 넘었다.'],
    relatedTerms: ['네트', '서브 라인', '센터 라인'],
    difficulty: '초급'
  },
  {
    id: 'deuce',
    term: '듀스 (Deuce)',
    category: '점수',
    definition: '40-40 상황. 듀스부터는 포인트당 승패가 결정되며, 먼저 2포인트 차로 이기는 팀이 승리합니다.',
    pronunciation: '듀스',
    examples: ['듀스 상황에서 집중력을 발휘했다.', '듀스 코트에서 경기를 이어갔다.'],
    relatedTerms: ['애드', '브레이크 포인트', '세트 포인트'],
    difficulty: '초급'
  },
  {
    id: 'love',
    term: '러브 (Love)',
    category: '점수',
    definition: '0점을 의미하는 영어 단어. "러브 올"은 0-0을 의미합니다.',
    pronunciation: '러브',
    examples: ['러브에서 시작하는 게임이었다.', '러브 피프틴에서 포인트를 내주었다.'],
    relatedTerms: ['피프틴', '써티', '포티'],
    difficulty: '초급'
  },
  {
    id: 'slice',
    term: '슬라이스 (Slice)',
    category: '타격 기술',
    definition: '공의 아랫부분을 스치듯 타격하여 회전을 주는 기술. 공이 낮게 바운스됩니다.',
    pronunciation: '슬라이스',
    examples: ['슬라이스 백핸드로 변화를 주었다.', '슬라이스 서브로 상대의 리턴을 어렵게 만들었다.'],
    relatedTerms: ['토핑', '플랫', '드라이브'],
    difficulty: '중급'
  },
  {
    id: 'topspin',
    term: '톱스핀 (Topspin)',
    category: '타격 기술',
    definition: '공의 윗부분을 스치듯 타격하여 앞으로 회전시키는 기술. 공이 높게 튀어오릅니다.',
    pronunciation: '톱스핀',
    examples: ['강한 톱스핀으로 공을 코트 안쪽으로 보냈다.', '톱스핀 포핸드가 그의 주무기였다.'],
    relatedTerms: ['백스핀', '사이드스핀', '플랫'],
    difficulty: '중급'
  },
  {
    id: 'approach-shot',
    term: '어프로치 샷 (Approach Shot)',
    category: '전략',
    definition: '네트로 다가가기 위해 치는 타격. 상대를 네트 뒤로 물러나게 만드는 전략적 타격입니다.',
    pronunciation: '어프로치 샷',
    examples: ['깊은 어프로치 샷으로 네트로 올라갔다.', '드롭 샷으로 이어지는 어프로치 샷을 구사했다.'],
    relatedTerms: ['네트 어프로치', '다운 더 라인', '크로스코트'],
    difficulty: '고급'
  }
];

export default function TennisDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const categories = ['전체', ...Array.from(new Set(tennisTerms.map(term => term.category)))];

  const filteredTerms = tennisTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '전체' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (termId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(termId)) {
      newFavorites.delete(termId);
    } else {
      newFavorites.add(termId);
    }
    setFavorites(newFavorites);
  };

  const speakTerm = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR'; // 한국어로 설정
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              테니스 용어 사전
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              200개 이상의 테니스 용어를 검색하고 자세한 설명을 확인하세요.
              초보자도 쉽게 이해할 수 있는 쉬운 설명과 예시를 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* 검색 및 필터 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="용어를 검색하세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-600">
            총 {tennisTerms.length}개의 용어 • 검색 결과: {filteredTerms.length}개
          </div>
        </div>

        {/* 용어 목록 */}
        <div className="space-y-6">
          {filteredTerms.map(term => (
            <Card key={term.id} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-gray-900">{term.term}</h3>
                    <Badge variant="outline" className="text-xs">
                      {term.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        term.difficulty === '초급' ? 'border-green-500 text-green-700' :
                        term.difficulty === '중급' ? 'border-yellow-500 text-yellow-700' :
                        'border-red-500 text-red-700'
                      }`}
                    >
                      {term.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {term.pronunciation && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => speakTerm(term.term)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(term.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {favorites.has(term.id) ? (
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ) : (
                        <StarOff className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {term.definition}
                </p>

                {term.examples.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">예시:</h4>
                    <ul className="space-y-1">
                      {term.examples.map((example, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {term.relatedTerms.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-semibold text-gray-700">관련 용어:</span>
                    {term.relatedTerms.map((relatedTerm, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {relatedTerm}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">검색 결과가 없습니다.</p>
            <p className="text-sm text-gray-500 mt-2">다른 검색어로 시도해보세요.</p>
          </div>
        )}

        {/* 즐겨찾기 섹션 */}
        {favorites.size > 0 && (
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              즐겨찾기한 용어 ({favorites.size}개)
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(favorites).map(favId => {
                const term = tennisTerms.find(t => t.id === favId);
                return term ? (
                  <Badge
                    key={favId}
                    variant="outline"
                    className="cursor-pointer hover:bg-yellow-100"
                    onClick={() => setSearchTerm(term.term)}
                  >
                    {term.term}
                  </Badge>
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* 관련 유틸리티 추천 */}
        <RelatedUtilitiesSection currentUtilityId="tennis-dictionary" />
      </div>
    </div>
  );
}
