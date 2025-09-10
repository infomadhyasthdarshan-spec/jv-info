// app/api/files/route.js
import { readdirSync, statSync } from 'fs';
import path from 'path';

const ALLOWED_FOLDERS = ['pdf', 'folder'];

function getAllFiles(dirPath, arrayOfFiles = [], basePath = '') {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.join(basePath, file);

    if (statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles, relativePath);
    } else {
      arrayOfFiles.push(relativePath);
    }
  });

  return arrayOfFiles;
}

export async function GET(req) {
  const publicDirectory = path.join(process.cwd(), 'public');

  const allFiles = [];
  ALLOWED_FOLDERS.forEach((folder) => {
    const folderPath = path.join(publicDirectory, folder);
    if (statSync(folderPath).isDirectory()) {
      const files = getAllFiles(folderPath, [], folder);
      allFiles.push(...files);
    }
  });

  return new Response(JSON.stringify({ files: allFiles }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
