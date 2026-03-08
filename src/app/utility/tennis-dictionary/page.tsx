"use client";

import { useMemo, useState } from 'react';
import { BookOpen, Search, Star, StarOff, Volume2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import RelatedUtilitiesSection from '@/components/RelatedUtilitiesSection';
import { tennisTerms } from '@/data/tennis-terms';

export default function TennisDictionaryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('전체');
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = useMemo(() => ['전체', ...Array.from(new Set(tennisTerms.map((term) => term.category)))], []);

  const filteredTerms = useMemo(() => {
    return tennisTerms.filter((term) => {
      const matchQuery =
        query.trim() === '' ||
        term.term.toLowerCase().includes(query.toLowerCase()) ||
        term.definition.toLowerCase().includes(query.toLowerCase());
      const matchCategory = category === '전체' || term.category === category;
      return matchQuery && matchCategory;
    });
  }, [category, query]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#ecfdf5_0%,_#ffffff_34%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-emerald-600 to-green-500 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">테니스 용어 사전</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">자주 헷갈리는 테니스 용어를 빠르게 찾기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">
            경기 중 자주 듣는 표현과 기술 용어를 검색하고, 카테고리별로 정리해 볼 수 있습니다.
            입문자도 의미를 바로 이해할 수 있도록 정의와 예시를 함께 보여줍니다.
          </p>
        </section>

        <Card className="mt-8 border-slate-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="용어 또는 설명 검색" className="pl-10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <Button key={item} variant={category === item ? 'default' : 'outline'} size="sm" onClick={() => setCategory(item)}>
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">총 {tennisTerms.length}개 용어 중 {filteredTerms.length}개 표시</p>
          </CardContent>
        </Card>

        <div className="mt-8 space-y-4">
          {filteredTerms.length === 0 ? (
            <Card className="border-dashed border-slate-300 bg-white">
              <CardContent className="p-10 text-center text-slate-600">
                검색 결과가 없습니다. 다른 키워드나 카테고리를 시도해 보세요.
              </CardContent>
            </Card>
          ) : (
            filteredTerms.map((term) => (
              <Card key={term.id} className="border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-semibold text-slate-900">{term.term}</h2>
                        <Badge variant="outline">{term.category}</Badge>
                        <Badge variant="outline">{term.difficulty}</Badge>
                      </div>
                      <p className="mt-3 leading-7 text-slate-600">{term.definition}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {term.pronunciation && (
                        <Button variant="ghost" size="icon" onClick={() => speak(term.term)}>
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" onClick={() => toggleFavorite(term.id)}>
                        {favorites.includes(term.id) ? <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> : <StarOff className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {term.examples.length > 0 && (
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-slate-900">예시</p>
                      <div className="mt-2 space-y-2">
                        {term.examples.map((example) => (
                          <div key={example} className="rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {term.relatedTerms.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {term.relatedTerms.map((related) => (
                        <Badge key={related} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                          {related}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {favorites.length > 0 && (
          <Card className="mt-8 border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-amber-600" />
                <p className="font-semibold text-amber-900">즐겨찾기 용어</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {favorites.map((id) => {
                  const term = tennisTerms.find((item) => item.id === id);
                  return term ? <Badge key={id} variant="outline">{term.term}</Badge> : null;
                })}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-10">
          <RelatedUtilitiesSection currentUtilityId="tennis-dictionary" />
        </div>
      </div>
    </div>
  );
}
