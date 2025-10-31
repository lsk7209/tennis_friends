'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingDown, TrendingUp, Star, ExternalLink, Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  store: string;
  image: string;
  url: string;
  inStock: boolean;
  features: string[];
}

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wilson Pro Staff RF97 Autograph',
    brand: 'Wilson',
    category: '라켓',
    price: 350000,
    originalPrice: 380000,
    rating: 4.8,
    reviews: 1247,
    store: '테니스프렌즈',
    image: '/images/racket-wilson.jpg',
    url: '#',
    inStock: true,
    features: ['프로급', '컨트롤 지향', '가벼운 무게']
  },
  {
    id: '2',
    name: 'Wilson Pro Staff RF97 Autograph',
    brand: 'Wilson',
    category: '라켓',
    price: 365000,
    rating: 4.7,
    reviews: 892,
    store: '테니스365',
    image: '/images/racket-wilson.jpg',
    url: '#',
    inStock: true,
    features: ['프로급', '컨트롤 지향', '가벼운 무게']
  },
  {
    id: '3',
    name: 'Wilson Pro Staff RF97 Autograph',
    brand: 'Wilson',
    category: '라켓',
    price: 340000,
    originalPrice: 360000,
    rating: 4.9,
    reviews: 2156,
    store: '스포츠몰',
    image: '/images/racket-wilson.jpg',
    url: '#',
    inStock: false,
    features: ['프로급', '컨트롤 지향', '가벼운 무게']
  },
  {
    id: '4',
    name: 'Nike Air Zoom Vapor Pro',
    brand: 'Nike',
    category: '신발',
    price: 189000,
    rating: 4.6,
    reviews: 756,
    store: '테니스프렌즈',
    image: '/images/shoes-nike.jpg',
    url: '#',
    inStock: true,
    features: ['쿠션성', '반응성', '통풍성']
  },
  {
    id: '5',
    name: 'Nike Air Zoom Vapor Pro',
    brand: 'Nike',
    category: '신발',
    price: 195000,
    originalPrice: 210000,
    rating: 4.5,
    reviews: 623,
    store: '나이키스토어',
    image: '/images/shoes-nike.jpg',
    url: '#',
    inStock: true,
    features: ['쿠션성', '반응성', '통풍성']
  },
  {
    id: '6',
    name: 'Babolat Boost Drive',
    brand: 'Babolat',
    category: '라켓',
    price: 280000,
    rating: 4.4,
    reviews: 445,
    store: '테니스프렌즈',
    image: '/images/racket-babolat.jpg',
    url: '#',
    inStock: true,
    features: ['파워 지향', '편안함', '내구성']
  },
  {
    id: '7',
    name: 'Babolat Boost Drive',
    brand: 'Babolat',
    category: '라켓',
    price: 275000,
    originalPrice: 290000,
    rating: 4.3,
    reviews: 387,
    store: '바볼랏코리아',
    image: '/images/racket-babolat.jpg',
    url: '#',
    inStock: true,
    features: ['파워 지향', '편안함', '내구성']
  }
];

export default function PriceComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('price-low');

  const categories = [
    { value: 'all', label: '전체' },
    { value: '라켓', label: '라켓' },
    { value: '신발', label: '신발' },
    { value: '의류', label: '의류' },
    { value: '스트링', label: '스트링' },
    { value: '액세서리', label: '액세서리' }
  ];

  const brands = [
    { value: 'all', label: '전체 브랜드' },
    { value: 'Wilson', label: 'Wilson' },
    { value: 'Babolat', label: 'Babolat' },
    { value: 'Nike', label: 'Nike' },
    { value: 'Head', label: 'Head' },
    { value: 'Yonex', label: 'Yonex' }
  ];

  const sortOptions = [
    { value: 'price-low', label: '가격 낮은 순' },
    { value: 'price-high', label: '가격 높은 순' },
    { value: 'rating', label: '평점 높은 순' },
    { value: 'reviews', label: '리뷰 많은 순' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = sampleProducts;

    // 카테고리 필터링
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // 브랜드 필터링
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // 검색 필터링
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 정렬
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  const priceRange = useMemo(() => {
    if (filteredAndSortedProducts.length === 0) return { min: 0, max: 0 };

    const prices = filteredAndSortedProducts.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  }, [filteredAndSortedProducts]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getPriceChange = (product: Product) => {
    if (!product.originalPrice) return null;
    const change = ((product.originalPrice - product.price) / product.originalPrice) * 100;
    return change;
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-light mb-4">테니스 용품 가격 비교</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          다양한 온라인 스토어의 테니스 용품 가격을 비교하고 최저가로 구매하세요.
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8 bg-content-dark border-white/10">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Category Filter */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">카테고리</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Brand Filter */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">브랜드</Label>
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {brands.map(brand => (
                    <SelectItem key={brand.value} value={brand.value}>
                      {brand.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">상품 검색</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                <Input
                  placeholder="상품명 또는 브랜드"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background-dark border-white/10"
                />
              </div>
            </div>

            {/* Sort */}
            <div>
              <Label className="text-text-light font-medium mb-2 block">정렬</Label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-background-dark border-white/10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price Range Info */}
          {filteredAndSortedProducts.length > 0 && (
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>가격 범위: {formatPrice(priceRange.min)} - {formatPrice(priceRange.max)}</span>
              <span>총 {filteredAndSortedProducts.length}개 상품</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      {filteredAndSortedProducts.length === 0 ? (
        <Card className="bg-content-dark border-white/10">
          <CardContent className="p-12 text-center">
            <Search className="w-16 h-16 text-text-muted mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-light mb-2">검색 결과가 없습니다</h3>
            <p className="text-text-muted">
              다른 검색어로 시도하거나 필터 조건을 조정해 보세요.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-content-dark border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-muted text-sm">최저가</p>
                    <p className="text-2xl font-bold text-green-400">{formatPrice(priceRange.min)}</p>
                  </div>
                  <TrendingDown className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-content-dark border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-muted text-sm">평균 가격</p>
                    <p className="text-2xl font-bold text-text-light">
                      {formatPrice(Math.round(filteredAndSortedProducts.reduce((sum, p) => sum + p.price, 0) / filteredAndSortedProducts.length))}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-content-dark border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-muted text-sm">최고 평점</p>
                    <p className="text-2xl font-bold text-yellow-400">
                      {Math.max(...filteredAndSortedProducts.map(p => p.rating)).toFixed(1)}
                    </p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Table */}
          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">가격 비교 결과</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-text-light">상품</TableHead>
                    <TableHead className="text-text-light">가격</TableHead>
                    <TableHead className="text-text-light">평점</TableHead>
                    <TableHead className="text-text-light">스토어</TableHead>
                    <TableHead className="text-text-light">상태</TableHead>
                    <TableHead className="text-text-light">구매</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAndSortedProducts.map((product) => {
                    const priceChange = getPriceChange(product);
                    return (
                      <TableRow key={product.id} className="border-white/5">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-background-dark rounded-lg flex items-center justify-center">
                              <span className="text-xs text-text-muted">IMG</span>
                            </div>
                            <div>
                              <p className="font-medium text-text-light">{product.name}</p>
                              <p className="text-sm text-text-muted">{product.brand}</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {product.features.slice(0, 2).map(feature => (
                                  <Badge key={feature} variant="outline" className="text-xs bg-background-dark border-white/5">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-bold text-text-light">{formatPrice(product.price)}</span>
                            {product.originalPrice && (
                              <div className="flex items-center gap-1">
                                <span className="text-sm text-text-muted line-through">
                                  {formatPrice(product.originalPrice)}
                                </span>
                                {priceChange && (
                                  <Badge className="bg-green-500/20 text-green-400 text-xs">
                                    <TrendingDown className="w-3 h-3 mr-1" />
                                    {priceChange.toFixed(0)}%
                                  </Badge>
                                )}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-text-muted">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-background-dark border-white/5">
                            {product.store}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={product.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                            {product.inStock ? '재고 있음' : '품절'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            className="bg-primary text-background-dark hover:bg-primary/90"
                            disabled={!product.inStock}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            구매하기
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tips */}
      <Card className="mt-8 bg-content-dark border-white/10">
        <CardHeader>
          <CardTitle className="text-text-light">가격 비교 팁</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">시즌 세일 활용</h4>
              <p className="text-text-muted text-sm">
                봄/가을 시즌이나 연말 세일 기간에 큰 폭의 할인을 받을 수 있습니다.
                정기적으로 가격을 확인하세요.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">리뷰 확인</h4>
              <p className="text-text-muted text-sm">
                가격만 보고 구매하지 말고 실제 사용자들의 리뷰를 확인하세요.
                특히 내 플레이 스타일에 맞는지 확인하는 것이 중요합니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">배송비 고려</h4>
              <p className="text-text-muted text-sm">
                상품 가격만 비교하지 말고 배송비, 반품 정책, A/S 조건까지
                종합적으로 고려하세요.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-light mb-2">신뢰할 수 있는 스토어</h4>
              <p className="text-text-muted text-sm">
                검증된 스토어에서 구매하세요. 특히 테니스 전문 스토어는
                품질 보증과 전문 상담을 제공합니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

