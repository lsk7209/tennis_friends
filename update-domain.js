const fs = require('fs');
const path = require('path');

function updateDomain(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(/tennisfriends\.co\.kr/g, 'www.tennisfrens.com');
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
}

function updateFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && file !== 'node_modules') {
      updateFilesInDirectory(fullPath);
    } else if (file === 'page.tsx') {
      updateDomain(fullPath);
    }
  });
}

// 블로그 디렉토리의 파일들 업데이트
updateFilesInDirectory('./src/app/blog');

console.log('Domain update completed!');
