'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, Search, Star, TrendingDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  store: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  status: 'in-stock' | 'low-stock' | 'sold-out';
}

const products: Product[] = [
  { id: '1', name: 'Wilson Clash 100 V3', brand: 'Wilson', category: '라켓', store: '테니스프렌즈 스토어', price: 329000, originalPrice: 359000, rating: 4.8, reviews: 214, status: 'in-stock' },
  { id: '2', name: 'Wilson Clash 100 V3', brand: 'Wilson', category: '라켓', store: '라켓존', price: 339000, rating: 4.7, reviews: 168, status: 'low-stock' },
  { id: '3', name: 'Babolat Pure Drive', brand: 'Babolat', category: '라켓', store: '테니스허브', price: 315000, originalPrice: 345000, rating: 4.9, reviews: 301, status: 'in-stock' },
  { id: '4', name: 'Nike Vapor Pro 2', brand: 'Nike', category: '신발', store: '스포츠몰', price: 179000, originalPrice: 199000, rating: 4.6, reviews: 132, status: 'in-stock' },
  { id: '5', name: 'ASICS Gel Resolution', brand: 'ASICS', category: '신발', store: '코트기어', price: 189000, rating: 4.8, reviews: 97, status: 'low-stock' },
  { id: '6', name: 'Yonex Poly Tour Pro 1.25', brand: 'Yonex', category: '스트링', store: '스트링랩', price: 19000, originalPrice: 23000, rating: 4.7, reviews: 255, status: 'in-stock' },
];

export default function PriceComparisonPage() {
  const [category, setCategory] = useState('all');
  const [brand, setBrand] = useState('all');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('price-asc');

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      if (category !== 'all' && product.category !== category) return false;
      if (brand !== 'all' && product.brand !== brand) return false;
      if (query.trim()) {
        const lowerQuery = query.toLowerCase();
        return product.name.toLowerCase().includes(lowerQuery) || product.store.toLowerCase().includes(lowerQuery);
      }
      return true;
    });

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return a.price - b.price;
      }
    });
  }, [brand, category, query, sort]);

  const prices = visibleProducts.map((product) => product.price);
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 }).format(price);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f0fdf4_0%,_#ffffff_32%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-emerald-600 to-teal-500 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">가격 비교</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">테니스 장비 가격을 한 번에 비교하기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">
            가격만 보는 대신 할인율, 리뷰 수, 재고 상태까지 함께 보세요. 같은 제품도 판매처에 따라 체감 가치가 크게 달라집니다.
          </p>
        </section>

        <Card className="mt-8 border-slate-200 bg-white shadow-sm">
          <CardContent className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Label className="mb-2 block">카테고리</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="라켓">라켓</SelectItem>
                  <SelectItem value="신발">신발</SelectItem>
                  <SelectItem value="스트링">스트링</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">브랜드</Label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="Wilson">Wilson</SelectItem>
                  <SelectItem value="Babolat">Babolat</SelectItem>
                  <SelectItem value="Nike">Nike</SelectItem>
                  <SelectItem value="ASICS">ASICS</SelectItem>
                  <SelectItem value="Yonex">Yonex</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">검색</Label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="제품명 또는 스토어" className="pl-10" />
              </div>
            </div>

            <div>
              <Label className="mb-2 block">정렬</Label>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">낮은 가격순</SelectItem>
                  <SelectItem value="price-desc">높은 가격순</SelectItem>
                  <SelectItem value="rating">평점순</SelectItem>
                  <SelectItem value="reviews">리뷰 많은 순</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">최저가</p><p className="mt-2 text-2xl font-bold text-emerald-600">{formatPrice(minPrice)}</p></CardContent></Card>
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">최고가</p><p className="mt-2 text-2xl font-bold text-slate-900">{formatPrice(maxPrice)}</p></CardContent></Card>
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">검색 결과</p><p className="mt-2 text-2xl font-bold text-slate-900">{visibleProducts.length}개</p></CardContent></Card>
        </div>

        <Card className="mt-6 border-slate-200 bg-white shadow-sm">
          <CardHeader><CardTitle>비교 결과</CardTitle></CardHeader>
          <CardContent>
            {visibleProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-600">
                현재 조건에는 결과가 없습니다. 카테고리나 브랜드 조건을 조금 넓혀 보세요.
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>제품</TableHead>
                    <TableHead>가격</TableHead>
                    <TableHead>평점</TableHead>
                    <TableHead>스토어</TableHead>
                    <TableHead>재고</TableHead>
                    <TableHead>이동</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visibleProducts.map((product) => {
                    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : null;

                    return (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-slate-900">{product.name}</p>
                            <p className="text-sm text-slate-500">{product.brand} · {product.category}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-semibold text-slate-900">{formatPrice(product.price)}</p>
                            {discount !== null && (
                              <div className="mt-1 flex items-center gap-2">
                                <span className="text-xs text-slate-400 line-through">{formatPrice(product.originalPrice!)}</span>
                                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                                  <TrendingDown className="mr-1 h-3 w-3" />
                                  {discount}% 할인
                                </Badge>
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            {product.rating} ({product.reviews})
                          </div>
                        </TableCell>
                        <TableCell>{product.store}</TableCell>
                        <TableCell>
                          {product.status === 'in-stock' && <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">재고 충분</Badge>}
                          {product.status === 'low-stock' && <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">재고 적음</Badge>}
                          {product.status === 'sold-out' && <Badge className="bg-rose-100 text-rose-700 hover:bg-rose-100">품절</Badge>}
                        </TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">
                            <ExternalLink className="mr-1 h-4 w-4" />
                            보기
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>

        <Card className="mt-6 border-slate-200 bg-slate-50">
          <CardHeader><CardTitle>비교 팁</CardTitle></CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div><p className="font-semibold text-slate-900">할인율만 보지 않기</p><p className="mt-2 text-sm leading-6 text-slate-600">스트링이나 신발은 배송비, 묶음 할인, 사은품까지 포함해 최종가를 보는 편이 정확합니다.</p></div>
            <div><p className="font-semibold text-slate-900">리뷰 수 확인</p><p className="mt-2 text-sm leading-6 text-slate-600">평점이 높아도 리뷰가 적으면 편차가 클 수 있습니다. 최소 리뷰 수를 함께 보는 습관이 좋습니다.</p></div>
            <div><p className="font-semibold text-slate-900">재고 상태 확인</p><p className="mt-2 text-sm leading-6 text-slate-600">대회 직전 구매라면 최저가보다 당장 배송 가능한 판매처가 더 가치 있을 수 있습니다.</p></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
