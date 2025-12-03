const fs = require('fs');
const path = require('path');

// 블로그 페이지 디렉토리
const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');

// 블로그 디렉토리 읽기
const blogDirs = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

let updatedCount = 0;
let skippedCount = 0;

console.log(`총 ${blogDirs.length}개의 블로그 디렉토리 발견\n`);

blogDirs.forEach(blogSlug => {
    const pagePath = path.join(blogDir, blogSlug, 'page.tsx');

    if (!fs.existsSync(pagePath)) {
        console.log(`⏭️  ${blogSlug}: page.tsx 파일 없음`);
        skippedCount++;
        return;
    }

    let content = fs.readFileSync(pagePath, 'utf-8');

    // FAQ 컴포넌트가 있는지 확인
    if (!content.includes('<FAQ items={faqs} />')) {
        console.log(`⏭️  ${blogSlug}: FAQ 컴포넌트 없음`);
        skippedCount++;
        return;
    }

    // 이미 올바른 위치에 있는지 확인 (관련 글 더보기 앞에 FAQ가 있는지)
    // 간단한 체크: FAQ가 "관련 글 더보기" 문자열보다 앞에 나오는지 확인
    const faqIndex = content.indexOf('<FAQ items={faqs} />');
    const relatedPostsIndex = content.indexOf('관련 글 더보기');

    if (relatedPostsIndex !== -1 && faqIndex < relatedPostsIndex) {
        console.log(`✅ ${blogSlug}: 이미 올바른 위치`);
        skippedCount++;
        return;
    }

    // FAQ 컴포넌트 제거
    content = content.replace(/\s*<FAQ items=\{faqs\} \/>/g, '');

    // FAQ 컴포넌트 삽입 위치 찾기
    // 1. "관련 글 더보기" 섹션 앞
    // 2. 만약 "관련 글 더보기"가 없다면 CTA 앞
    // 3. CTA도 없다면 Article 닫는 태그 앞

    const relatedPostsDiv = '<div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">';
    const ctaComponent = '<CTA />';

    if (content.includes(relatedPostsDiv)) {
        content = content.replace(
            relatedPostsDiv,
            `\n      {/* FAQ Section */}\n      <FAQ items={faqs} />\n\n      ${relatedPostsDiv}`
        );
    } else if (content.includes(ctaComponent)) {
        content = content.replace(
            ctaComponent,
            `\n      {/* FAQ Section */}\n      <FAQ items={faqs} />\n\n      ${ctaComponent}`
        );
    } else {
        // 마지막 수단: Article 닫는 태그 앞
        content = content.replace(
            '</Article>',
            `\n      {/* FAQ Section */}\n      <FAQ items={faqs} />\n    </Article>`
        );
    }

    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`📝 ${blogSlug}: FAQ 위치 이동 완료`);
    updatedCount++;
});

console.log(`\n📊 작업 완료!`);
console.log(`✅ 업데이트: ${updatedCount}개`);
console.log(`⏭️  스킵: ${skippedCount}개`);
