# 블로그 글 템플릿 (심플 버전)

## 핵심 원칙

- **심플한 바탕**: 흰색/연한 회색 배경
- **Pretendard 폰트**: 전역 폰트 적용
- **가독성 높은 본문**: 72ch 폭, 17px 폰트, 1.8 행간
- **노출 잘 되는 FAQ**: SEO 최적화 FAQ 컴포넌트 사용

## 사용 컴포넌트

```tsx
import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
```

## 기본 구조

```tsx
export default function BlogPostPage() {
  const title = "제목";
  const excerpt = "요약 문장";

  const toc = [
    { id: "section1", text: "섹션 1", depth: 2 as const },
    { id: "section2", text: "섹션 2", depth: 2 as const },
  ];

  const faqs = [
    { q: "질문 1", a: "답변 1" },
    { q: "질문 2", a: "답변 2" },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: [요약 내용]
      </blockquote>

      <TOC items={toc} />

      <h2 id="section1">섹션 1</h2>
      <p>본문 내용...</p>

      <h2 id="section2">섹션 2</h2>
      <p>본문 내용...</p>

      <FAQ items={faqs} />
    </Article>
  );
}
```

## 스타일 가이드

- 배경: `bg-white` 또는 `bg-gray-50`
- 텍스트: `text-gray-900` (제목), `text-gray-700` (본문)
- 링크: 자동으로 `var(--accent)` 색상 적용
- 이미지/이모티콘: 사용하지 않음

## FAQ 작성 규칙

- 질문: 자연스러운 검색어 기반 (10-20자)
- 답변: 구체적이고 실용적 (50-100자)
- 지역 맥락 자연스럽게 포함
- 관련 유틸리티 링크 포함
