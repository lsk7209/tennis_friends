"use client"

import React, { useState } from 'react';
import { Search, BookOpen, Volume2, Star, StarOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import RelatedUtilitiesSection from '@/components/RelatedUtilitiesSection';
import { tennisTerms } from '@/data/tennis-terms';
import { Metadata } from 'next';

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
                      className={`text-xs ${term.difficulty === '초급' ? 'border-green-500 text-green-700' :
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
