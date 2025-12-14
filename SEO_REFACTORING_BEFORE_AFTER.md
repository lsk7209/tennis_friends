# SEO/AEO 리팩토링 Before & After

## 📊 Step 1: 분석 완료

### 현재 상태 요약
- ✅ 기본 메타데이터 API 사용 중
- ✅ 일부 구조화된 데이터 구현됨
- ⚠️ Naver 최적화 부족
- ❌ 시맨틱 HTML 구조 개선 필요
- ❌ FAQ 섹션 부족

---

## 🔧 Step 2: 기반 설정 완료

### 2.1 개선된 JsonLd 컴포넌트

**Before:**
```tsx
// src/components/JsonLd.tsx
export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
```

**After:**
```tsx
// src/components/JsonLd.tsx
export default function JsonLd({ data, id, validate = false }: JsonLdProps) {
    // Development validation
    if (validate && !validateSchema(data as Record<string, any>)) {
        console.warn('[JsonLd] Schema validation failed:', data);
    }
    
    return (
        <script
            type="application/ld+json"
            id={id}
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 0) }}
        />
    );
}
```

**개선 사항:**
- ✅ 타입 안정성 강화
- ✅ 개발 모드 유효성 검증
- ✅ ID 지원 (다중 스키마)
- ✅ 자동 포맷팅

### 2.2 SEO 헬퍼 함수 생성

**새 파일:** `src/lib/seo/metadata-helpers.ts`

**주요 기능:**
- `truncateForNaver()`: Naver 80자 제한 최적화
- `generateTitle()`: 일관된 Title 형식
- `generatePageMetadata()`: 통합 메타데이터 생성
- `generateFAQSchema()`: FAQ 스키마 생성
- `generateBreadcrumbSchema()`: Breadcrumb 스키마 생성

### 2.3 layout.tsx 최적화

**Before:**
```tsx
export const metadata: Metadata = {
  title: "TennisFriends - 당신의 테니스 파트너",
  // ...
};
```

**After:**
```tsx
export const metadata: Metadata = {
  title: {
    default: "TennisFriends - 당신의 테니스 파트너",
    template: "%s | TennisFriends", // 일관된 형식 보장
  },
  // ...
};
```

**개선 사항:**
- ✅ Title 템플릿으로 일관성 보장
- ✅ Naver 최적화 메타 태그 유지
- ✅ AI 크롤러 최적화 유지

---

## 🎯 Step 3: 블로그 포스트 페이지 리팩토링

### 3.1 메타데이터 개선

**Before:**
```tsx
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = allBlogPosts.find(p => p.slug === slug);
  const description = post.excerpt || '';
  
  return {
    title: `${post.title} | TennisFriends`,
    description, // Naver 80자 제한 미고려
    // ...
  };
}
```

**After:**
```tsx
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = allBlogPosts.find(p => p.slug === slug);
  
  // Enhanced metadata helper 사용
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt || '', // 자동으로 Naver/Google 최적화
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.date,
    authors: [post.author || 'TennisFriends'],
    tags: [post.category, '테니스', '블로그'],
  });
}
```

**개선 사항:**
- ✅ Naver 80자 제한 자동 처리
- ✅ 일관된 메타데이터 형식
- ✅ 통합 헬퍼 함수 사용

### 3.2 구조화된 데이터 개선

**Before:**
```tsx
<BlogPostSchema
  title={post.title}
  description={post.description}
  slug={post.slug}
  date={post.date}
  // ...
/>
```

**After:**
```tsx
<EnhancedBlogPostSchema
  title={post.title}
  description={post.description}
  slug={post.slug}
  date={post.date}
  keywords={post.tags}
  articleBody={post.content}
  // @graph 구조로 Organization, Person, BlogPosting, BreadcrumbList 통합
/>
```

**개선 사항:**
- ✅ `@graph` 구조로 다중 스키마 통합
- ✅ Organization, Person 스키마 포함
- ✅ BreadcrumbList 자동 생성
- ✅ 더 풍부한 메타데이터

### 3.3 시맨틱 HTML 개선

**Before:**
```tsx
<div className="container mx-auto max-w-4xl px-4 py-12">
  <div className="bg-content-dark border border-white/10 rounded-lg p-6 mb-8">
    <h2 className="text-lg font-bold text-primary mb-3">요약</h2>
    <p className="text-text-light">{post.summary}</p>
  </div>
  
  <div className="prose prose-invert max-w-none">
    {/* content */}
  </div>
</div>
```

**After:**
```tsx
<main className="container mx-auto max-w-4xl px-4 py-12">
  <article itemScope itemType="https://schema.org/BlogPosting">
    <header>
      {/* Article header with semantic markup */}
    </header>
    
    <section 
      aria-labelledby="summary-heading"
      className="bg-content-dark border border-white/10 rounded-lg p-6 mb-8"
    >
      <h2 id="summary-heading">요약</h2>
      <p>{post.summary}</p>
    </section>
    
    <section 
      id="article-content"
      itemProp="articleBody"
      className="prose prose-invert max-w-none"
    >
      {/* content */}
    </section>
  </article>
  
  <FAQSection items={faqItems} />
</main>
```

**개선 사항:**
- ✅ `<main>` 태그로 메인 콘텐츠 명시
- ✅ `<article>` 태그로 블로그 포스트 구조화
- ✅ `<section>` 태그로 논리적 섹션 구분
- ✅ `<header>`, `<nav>` 태그 사용
- ✅ `itemScope`, `itemProp`으로 마이크로데이터 추가
- ✅ `aria-label`, `aria-labelledby`로 접근성 향상

### 3.4 FAQ 섹션 추가

**Before:**
```tsx
// FAQ 섹션 없음
```

**After:**
```tsx
<FAQSection 
  items={faqItems}
  id="faq"
  title="자주 묻는 질문"
  className="mt-12"
/>
```

**FAQ 아이템 예시:**
```tsx
const faqItems = [
  {
    question: `${post.title}에 대해 자세히 알고 싶습니다.`,
    answer: post.description || `${post.title}에 대한 상세 정보를 제공합니다.`,
  },
  {
    question: `${post.category} 카테고리의 다른 글도 있나요?`,
    answer: `네, TennisFriends 블로그에서 ${post.category} 관련 다양한 글을 확인하실 수 있습니다.`,
  },
  {
    question: '이 글과 관련된 테니스 도구를 사용할 수 있나요?',
    answer: '네, TennisFriends에서 제공하는 NTRP 실력 테스트, 스트링 텐션 계산기 등 다양한 도구를 무료로 이용하실 수 있습니다.',
  },
];
```

**개선 사항:**
- ✅ `<details>` 태그로 AI 친화적 구조
- ✅ FAQPage JSON-LD 스키마 자동 생성
- ✅ Google Featured Snippets 최적화
- ✅ Naver Knowledge Graph 최적화

---

## 📈 예상 SEO/AEO 개선 효과

### 검색 엔진 최적화
- ✅ **Google**: Rich Snippets 표시 가능성 증가 (Article, FAQPage)
- ✅ **Naver**: 80자 제한 준수로 검색 결과 최적화
- ✅ **Bing**: 구조화된 데이터로 인덱싱 개선

### AI 검색 엔진 최적화
- ✅ **ChatGPT/Perplexity**: FAQ 섹션으로 정확한 답변 생성
- ✅ **시맨틱 HTML**: AI가 콘텐츠 구조를 더 잘 이해
- ✅ **구조화된 데이터**: AI가 페이지 내용을 정확히 파싱

### 사용자 경험
- ✅ **접근성**: ARIA 레이블로 스크린 리더 지원
- ✅ **SEO 가시성**: 검색 결과에서 더 많은 정보 표시
- ✅ **클릭률**: Rich Snippets로 CTR 향상

---

## 🔄 다음 단계

### Phase 2: 유틸리티 페이지 리팩토링
- NTRP Test 페이지에 Quiz 스키마 추가
- FAQ 섹션 추가
- 시맨틱 HTML 개선

### Phase 3: 동적 OG 이미지
- `app/api/og/route.tsx` 구현
- 페이지별 맞춤 OG 이미지 생성

### Phase 4: 공개 데이터 페이지
- Dataset 스키마 적용
- Server Component로 변환

