const fs = require('fs');
const path = require('path');

// 검색할 디렉토리
const appDir = path.join(__dirname, '..', 'src', 'app');

function findPageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findPageFiles(filePath, fileList);
        } else if (file === 'page.tsx') {
            fileList.push(filePath);
        }
    });

    return fileList;
}

const pageFiles = findPageFiles(appDir);
let issues = [];

console.log(`총 ${pageFiles.length}개의 페이지 파일 분석 중...\n`);

pageFiles.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8');

    // metadata 객체 찾기
    const metadataMatch = content.match(/export const metadata = \{([\s\S]*?)\};/);

    if (metadataMatch) {
        const metadataBody = metadataMatch[1];
        const descriptionMatch = metadataBody.match(/description:\s*['"`](.*?)['"`],/);

        if (descriptionMatch) {
            const description = descriptionMatch[1];
            const length = description.length;
            const relativePath = path.relative(appDir, filePath);

            if (length < 50) {
                issues.push({ path: relativePath, type: 'TOO_SHORT', length, description });
            } else if (length > 160) {
                issues.push({ path: relativePath, type: 'TOO_LONG', length, description });
            }
        }
    }
});

console.log('📊 Meta Description 분석 결과:');
if (issues.length === 0) {
    console.log('✅ 모든 페이지의 Meta Description 길이가 적절합니다 (50-160자).');
} else {
    console.log(`⚠️ 총 ${issues.length}개의 이슈 발견:\n`);
    issues.forEach(issue => {
        console.log(`[${issue.type}] ${issue.path} (${issue.length}자)`);
        console.log(`"${issue.description}"\n`);
    });
}
