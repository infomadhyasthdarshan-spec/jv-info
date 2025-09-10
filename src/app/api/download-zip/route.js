// app/api/download-zip/route.js
import { PassThrough } from 'stream';
import { readdirSync, statSync, createReadStream } from 'fs';
import path from 'path';
import archiver from 'archiver';

const ALLOWED_FOLDERS = ['pdf', 'folder'];

function getAllFiles(dirPath, arrayOfFiles = [], basePath = '') {
  const files = readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const relativePath = path.join(basePath, file);

    if (statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles, relativePath);
    } else {
      arrayOfFiles.push({
        fullPath,
        relativePath,
      });
    }
  });

  return arrayOfFiles;
}

export async function GET(req) {
  const url = new URL(req.url);
  const folderParam = url.searchParams.get('folder'); // e.g., "pdf/abc"
  const publicDirectory = path.join(process.cwd(), 'public');

  // Validate folder
  if (folderParam) {
    const topLevelFolder = folderParam.split('/')[0];
    if (!ALLOWED_FOLDERS.includes(topLevelFolder)) {
      return new Response('Forbidden folder', { status: 403 });
    }

    const targetFolderPath = path.join(publicDirectory, folderParam);
    if (!statSync(targetFolderPath).isDirectory()) {
      return new Response('Folder not found', { status: 404 });
    }

    const files = getAllFiles(targetFolderPath, [], folderParam);

    const stream = new PassThrough();
    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(stream);

    files.forEach(({ fullPath, relativePath }) => {
      archive.append(createReadStream(fullPath), { name: relativePath });
    });

    archive.finalize();

    return new Response(stream, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${folderParam.replace(/\//g, '_')}.zip"`,
      },
    });
  } else {
    // If no folderParam, zip all allowed folders
    const allFiles = [];
    ALLOWED_FOLDERS.forEach((folder) => {
      const folderPath = path.join(publicDirectory, folder);
      if (statSync(folderPath).isDirectory()) {
        const files = getAllFiles(folderPath, [], folder);
        allFiles.push(...files);
      }
    });

    const stream = new PassThrough();
    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(stream);

    allFiles.forEach(({ fullPath, relativePath }) => {
      archive.append(createReadStream(fullPath), { name: relativePath });
    });

    archive.finalize();

    return new Response(stream, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="all-files.zip"',
      },
    });
  }
}
