/**
 * 마크다운 파싱 및 변환 유틸리티
 */

// gray-matter 대신 간단한 파서 구현
function parseFrontmatter(markdown: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { data: {}, content: markdown };
  }

  const frontmatterText = match[1];
  const content = match[2];

  // 간단한 YAML 파싱 (기본적인 key: value 형식만 지원)
  const data: Record<string, any> = {};
  const lines = frontmatterText.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // 따옴표 제거
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // 배열 파싱 (간단한 형식)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(v => v.trim().replace(/["']/g, ''));
      }
      
      data[key] = value;
    }
  }

  return { data, content };
}

export interface ParsedMarkdown {
  frontmatter: Record<string, any>;
  content: string;
}

/**
 * 마크다운 파일 파싱
 */
export function parseMarkdown(markdown: string): ParsedMarkdown {
  const { data, content } = parseFrontmatter(markdown);
  return {
    frontmatter: data,
    content: content.trim(),
  };
}

/**
 * H2 헤딩 추출 (TOC 생성용)
 */
export function extractHeadings(markdown: string): Array<{ id: string; text: string; depth: 2 | 3 }> {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Array<{ id: string; text: string; depth: 2 | 3 }> = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const depth = match[1].length as 2 | 3;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    headings.push({ id, text, depth });
  }

  return headings;
}

/**
 * FAQ 섹션 추출
 */
export function extractFAQs(markdown: string): Array<{ question: string; answer: string }> {
  const faqRegex = /### (.+?)\n\n(.+?)(?=\n### |$)/gs;
  const faqs: Array<{ question: string; answer: string }> = [];
  let match;

  // "자주 묻는 질문" 섹션 찾기
  const faqSectionStart = markdown.indexOf('## 자주 묻는 질문');
  if (faqSectionStart === -1) return faqs;

  const faqSection = markdown.substring(faqSectionStart);
  const nextSection = faqSection.indexOf('\n## ', 1);
  const faqContent = nextSection !== -1 
    ? faqSection.substring(0, nextSection)
    : faqSection;

  while ((match = faqRegex.exec(faqContent)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim(),
    });
  }

  return faqs;
}

/**
 * 내부 링크 추출
 */
export function extractInternalLinks(markdown: string): string[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links: string[] = [];
  let match;

  while ((match = linkRegex.exec(markdown)) !== null) {
    const url = match[2];
    // 내부 링크만 추출 (http로 시작하지 않는 링크)
    if (!url.startsWith('http') && url.startsWith('/')) {
      links.push(url);
    }
  }

  return [...new Set(links)]; // 중복 제거
}

/**
 * 섹션별로 분리
 */
export function splitIntoSections(markdown: string): Array<{ id: string; title: string; content: string }> {
  const sections: Array<{ id: string; title: string; content: string }> = [];
  const headingRegex = /^## (.+)$/gm;
  let lastIndex = 0;
  let match;
  let lastHeading: { id: string; title: string; index: number } | null = null;

  while ((match = headingRegex.exec(markdown)) !== null) {
    if (lastHeading) {
      const content = markdown.substring(lastHeading.index, match.index).trim();
      sections.push({
        id: lastHeading.id,
        title: lastHeading.title,
        content: content.replace(/^## .+$/m, '').trim(), // H2 제목 제거
      });
    }

    const title = match[1].trim();
    const id = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    lastHeading = {
      id,
      title,
      index: match.index,
    };
    lastIndex = match.index + match[0].length;
  }

  // 마지막 섹션 처리
  if (lastHeading) {
    const content = markdown.substring(lastHeading.index).trim();
    sections.push({
      id: lastHeading.id,
      title: lastHeading.title,
      content: content.replace(/^## .+$/m, '').trim(),
    });
  }

  return sections;
}

