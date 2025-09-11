// scripts/generate-pdf-list.js
const { readdirSync, statSync, writeFileSync, existsSync, mkdirSync } = require('fs');
const path = require('path');

function getAllRelativeFiles(dirPath, basePath, arrayOfFiles = []) {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.join(basePath, file);

    if (statSync(fullPath).isDirectory()) {
      getAllRelativeFiles(fullPath, relativePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(relativePath.replace(/\\/g, '/')); // Ensure forward slashes for URLs
    }
  });

  return arrayOfFiles;
}

const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');
const outputDir = path.join(process.cwd(), 'src', 'data'); // Where to save the generated file
const outputFile = path.join(outputDir, 'pdfList.json'); // The name of the generated file

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

try {
  const allFiles = getAllRelativeFiles(publicAssetsDir, '');
  const pdfFiles = allFiles.filter(file => file.endsWith('.pdf'));

  writeFileSync(outputFile, JSON.stringify(pdfFiles, null, 2), 'utf-8');
  console.log(`Successfully generated ${pdfFiles.length} PDF paths to ${outputFile}`);
} catch (error) {
  console.error('Error generating PDF list:', error);
  process.exit(1); // Exit with an error code
}