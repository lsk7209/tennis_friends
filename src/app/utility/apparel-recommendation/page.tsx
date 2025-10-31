'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Shirt, Glasses, Thermometer, Sun, Cloud, Wind } from 'lucide-react';

interface ApparelRecommendation {
  category: string;
  item: string;
  description: string;
  price: string;
  brands: string[];
  features: string[];
  suitableFor: string[];
  icon: React.ReactNode;
}

const apparelData: ApparelRecommendation[] = [
  {
    category: '상의',
    item: '테니스 폴로 셔츠',
    description: '흡습속건 기능이 뛰어난 테니스 전용 폴로 셔츠',
    price: '₩50,000 - ₩150,000',
    brands: ['Wilson', 'Head', 'Babolat', 'Nike', 'Adidas'],
    features: ['흡습속건', 'UV 차단', '편안한 착용감', '스트레치 소재'],
    suitableFor: ['전체', '초보자', '중급자', '상급자'],
    icon: <Shirt className="w-5 h-5" />
  },
  {
    category: '상의',
    item: '테니스 탱크 탑',
    description: '통풍이 잘 되는 민소매 상의로 여름철에 최적',
    price: '₩30,000 - ₩80,000',
    brands: ['Nike', 'Adidas', 'Under Armour', 'New Balance'],
    features: ['최대 통풍', '가벼운 무게', '자외선 차단', '스트레치'],
    suitableFor: ['여름', '초보자', '중급자', '상급자'],
    icon: <Shirt className="w-5 h-5" />
  },
  {
    category: '하의',
    item: '테니스 스커트',
    description: '움직임이 자유로운 테니스 전용 스커트',
    price: '₩40,000 - ₩120,000',
    brands: ['Nike', 'Adidas', 'Wilson', 'Babolat', 'Fila'],
    features: ['편안한 착용감', '통풍성', 'UV 차단', '스트레치 소재'],
    suitableFor: ['여성', '전체', '초보자', '중급자', '상급자'],
    icon: <Shirt className="w-5 h-5" />
  },
  {
    category: '하의',
    item: '테니스 쇼츠',
    description: '가볍고 통풍이 좋은 테니스 전용 쇼츠',
    price: '₩35,000 - ₩90,000',
    brands: ['Nike', 'Adidas', 'Under Armour', 'Puma', 'ASICS'],
    features: ['가벼운 무게', '빠른 건조', '편안한 핏', '통풍 패널'],
    suitableFor: ['남성', '전체', '초보자', '중급자', '상급자'],
    icon: <Shirt className="w-5 h-5" />
  },
  {
    category: '신발',
    item: '하드코트 전용 신발',
    description: '하드코트 표면에 최적화된 쿠션과 그립력',
    price: '₩120,000 - ₩250,000',
    brands: ['Nike', 'Adidas', 'ASICS', 'New Balance', 'Puma'],
    features: ['쿠션 시스템', '내구성 아웃솔', '안정성', '통풍성'],
    suitableFor: ['하드코트', '전체', '초보자', '중급자', '상급자'],
    icon: <Shirt className="w-5 h-5" />
  },
  {
    category: '신발',
    item: '클레이코트 전용 신발',
    description: '클레이 코트의 미끄러운 표면에 특화된 디자인',
    price: '₩130,000 - ₩260,000',
    brands: ['ASICS', 'Babolat', 'Head', 'Wilson', 'K-Swiss'],
    features: ['미끄럼 방지', '내구성', '통풍성', '편안함'],
    suitableFor: ['클레이코트', '전체', '초보자', '중급자', '상급자'],
    icon: <Shirt className="w-5 h-5" />
  },
  {
    category: '액세서리',
    item: '테니스 선글라스',
    description: '자외선과 눈부심으로부터 눈을 보호하는 스포츠 선글라스',
    price: '₩80,000 - ₩200,000',
    brands: ['Oakley', 'Tifosi', 'Suncloud', 'Native', 'Goodr'],
    features: ['편광 렌즈', 'UV 차단', '가벼운 무게', '충격 흡수'],
    suitableFor: ['햇빛 강한 날', '전체', '초보자', '중급자', '상급자'],
    icon: <Glasses className="w-5 h-5" />
  },
  {
    category: '액세서리',
    item: '테니스 모자',
    description: '햇볕과 땀을 막아주는 기능성 테니스 모자',
    price: '₩25,000 - ₩60,000',
    brands: ['Nike', 'Adidas', 'New Era', 'Wilson', 'Babolat'],
    features: ['UV 차단', '흡습속건', '가벼운 무게', '조절 가능한 사이즈'],
    suitableFor: ['햇빛 강한 날', '전체', '초보자', '중급자', '상급자'],
    icon: <Sun className="w-5 h-5" />
  }
];

export default function ApparelRecommendationPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedWeather, setSelectedWeather] = useState<string>('sunny');
  const [selectedSkill, setSelectedSkill] = useState<string>('intermediate');
  const [budget, setBudget] = useState<string>('medium');

  const categories = ['상의', '하의', '신발', '액세서리'];
  const weatherOptions = [
    { value: 'sunny', label: '화창함', icon: <Sun className="w-4 h-4" /> },
    { value: 'cloudy', label: '흐림', icon: <Cloud className="w-4 h-4" /> },
    { value: 'windy', label: '바람', icon: <Wind className="w-4 h-4" /> },
    { value: 'hot', label: '더움', icon: <Thermometer className="w-4 h-4" /> }
  ];

  const skillLevels = [
    { value: 'beginner', label: '초보자' },
    { value: 'intermediate', label: '중급자' },
    { value: 'advanced', label: '상급자' }
  ];

  const budgetOptions = [
    { value: 'low', label: '저예산 (₩100,000 이하)' },
    { value: 'medium', label: '중간 (₩100,000 - ₩200,000)' },
    { value: 'high', label: '고예산 (₩200,000 이상)' }
  ];

  const recommendations = useMemo(() => {
    let filtered = apparelData;

    // 카테고리 필터링
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item => selectedCategories.includes(item.category));
    }

    // 날씨 기반 필터링
    if (selectedWeather === 'hot') {
      filtered = filtered.filter(item =>
        item.features.includes('최대 통풍') ||
        item.features.includes('통풍성') ||
        item.category === '액세서리'
      );
    } else if (selectedWeather === 'sunny') {
      filtered = filtered.filter(item =>
        item.features.includes('UV 차단') ||
        item.category === '액세서리'
      );
    }

    // 실력 기반 필터링
    if (selectedSkill === 'beginner') {
      filtered = filtered.filter(item => item.suitableFor.includes('초보자'));
    } else if (selectedSkill === 'advanced') {
      filtered = filtered.filter(item => item.suitableFor.includes('상급자'));
    }

    // 예산 기반 필터링
    if (budget === 'low') {
      filtered = filtered.filter(item => {
        const maxPrice = parseInt(item.price.split(' - ')[1].replace(/[^\d]/g, ''));
        return maxPrice <= 100000;
      });
    } else if (budget === 'high') {
      filtered = filtered.filter(item => {
        const minPrice = parseInt(item.price.split(' - ')[0].replace(/[^\d]/g, ''));
        return minPrice >= 150000;
      });
    }

    return filtered;
  }, [selectedCategories, selectedWeather, selectedSkill, budget]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-light mb-4">테니스 의류 추천</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          플레이 스타일, 날씨, 예산에 맞는 최적의 테니스 의류를 추천해드립니다.
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8 bg-content-dark border-white/10">
        <CardHeader>
          <CardTitle className="text-text-light">추천 조건 설정</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Category Selection */}
          <div>
            <Label className="text-text-light font-medium mb-3 block">원하는 카테고리</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={category} className="text-text-muted cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Selection */}
          <div>
            <Label className="text-text-light font-medium mb-3 block">날씨 조건</Label>
            <RadioGroup value={selectedWeather} onValueChange={setSelectedWeather}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {weatherOptions.map(option => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="text-text-muted cursor-pointer flex items-center gap-2">
                      {option.icon}
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Skill Level */}
          <div>
            <Label className="text-text-light font-medium mb-3 block">실력 수준</Label>
            <RadioGroup value={selectedSkill} onValueChange={setSelectedSkill}>
              <div className="grid grid-cols-3 gap-3">
                {skillLevels.map(option => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`skill-${option.value}`} />
                    <Label htmlFor={`skill-${option.value}`} className="text-text-muted cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Budget */}
          <div>
            <Label className="text-text-light font-medium mb-3 block">예산 범위</Label>
            <RadioGroup value={budget} onValueChange={setBudget}>
              <div className="space-y-2">
                {budgetOptions.map(option => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`budget-${option.value}`} />
                    <Label htmlFor={`budget-${option.value}`} className="text-text-muted cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-light mb-4">
          추천 의류 ({recommendations.length}개)
        </h2>

        {recommendations.length === 0 ? (
          <Card className="bg-content-dark border-white/10">
            <CardContent className="p-8 text-center">
              <p className="text-text-muted">
                선택한 조건에 맞는 의류가 없습니다. 조건을 조정해 보세요.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((item, index) => (
              <Card key={index} className="bg-content-dark border-white/10 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-primary/20 text-primary mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-text-light mb-2">
                        {item.item}
                      </h3>
                      <p className="text-text-muted text-sm mb-3">
                        {item.description}
                      </p>
                      <p className="text-primary font-medium mb-3">
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-text-muted mb-1">추천 브랜드</p>
                      <div className="flex flex-wrap gap-1">
                        {item.brands.slice(0, 3).map(brand => (
                          <Badge key={brand} variant="outline" className="text-xs bg-background-dark border-white/5">
                            {brand}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-text-muted mb-1">주요 특징</p>
                      <div className="flex flex-wrap gap-1">
                        {item.features.slice(0, 3).map(feature => (
                          <Badge key={feature} variant="outline" className="text-xs bg-background-dark border-white/5">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-primary text-background-dark hover:bg-primary/90">
                    자세히 보기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Tips */}
      <Card className="bg-content-dark border-white/10">
        <CardHeader>
          <CardTitle className="text-text-light">테니스 의류 선택 팁</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">기능성 우선</h4>
              <p className="text-text-muted text-sm">
                테니스 의류는 패션보다 기능이 중요합니다. 흡습속건, UV 차단, 통풍성 등을 우선 고려하세요.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">코트별 선택</h4>
              <p className="text-text-muted text-sm">
                플레이하는 코트 표면에 맞는 의류를 선택하세요. 클레이 코트는 밝은 색, 하드 코트는 편안한 착용감을 우선하세요.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">계절 고려</h4>
              <p className="text-text-muted text-sm">
                여름에는 가벼운 소재, 겨울에는 보온성과 흡습속건 기능이 좋은 의류를 선택하세요.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">품질 확인</h4>
              <p className="text-text-muted text-sm">
                유명 브랜드나 검증된 품질의 제품을 선택하세요. 처음에는 저렴한 제품으로 시작해 점차 업그레이드하세요.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
