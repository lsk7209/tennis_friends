const fs = require('fs');
const path = require('path');

function addCTAtoBlogFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // 이미 CTA가 추가되었는지 확인
    if (content.includes('import CTA from')) {
      console.log(`Already has CTA: ${filePath}`);
      return;
    }

    // CTA import 추가
    const importPattern = /import Article from '@\/components\/blog\/Article';\nimport TOC from '@\/components\/blog\/TOC';\nimport \{ FAQ \} from '@\/components\/blog\/FAQ';/;
    const importReplacement = `import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';`;

    content = content.replace(importPattern, importReplacement);

    // CTA 컴포넌트 추가 (FAQ 앞에)
    const ctaPattern = /      <\/div>\n\n      <FAQ items=\{faqs\} \/>/;
    const ctaReplacement = `      </div>

      <CTA />

      <FAQ items={faqs} />`;

    content = content.replace(ctaPattern, ctaReplacement);

    // 파일 저장
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added CTA to: ${filePath}`);

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processBlogDirectories() {
  const blogDir = './src/app/blog';
  const directories = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== '[slug]')
    .map(dirent => dirent.name);

  console.log(`Found ${directories.length} blog directories`);

  directories.forEach(dir => {
    const pagePath = path.join(blogDir, dir, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      addCTAtoBlogFile(pagePath);
    }
  });

  console.log('CTA addition completed!');
}

processBlogDirectories();
