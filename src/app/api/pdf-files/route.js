// app/api/pdf-files/route.js
import { readdirSync, statSync } from 'fs';
import path from 'path';

function getAllFiles(dirPath, arrayOfFiles = [], basePath = '') {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.join(basePath, file);
    if (statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles, relativePath);
    } else {
      arrayOfFiles.push(relativePath); // Send relative paths only
    }
  });

  return arrayOfFiles;
}

export async function GET(req) {
  const pdfDirectory = path.join(process.cwd(), 'public', 'pdf');
  const files = getAllFiles(pdfDirectory);

  return new Response(JSON.stringify({ files }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
