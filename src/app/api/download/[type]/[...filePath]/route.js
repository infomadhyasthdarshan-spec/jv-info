import { readdirSync, statSync, createReadStream } from 'fs';
import path from 'path';
import archiver from 'archiver';
import { PassThrough } from 'stream';

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

export async function GET(req, { params }) {
  const { type, filePath } = await params;

  if (filePath.length < 2) {
    return new Response('Invalid file path', { status: 400 });
  }

  const publicDirectory = path.join(process.cwd(), 'public');

  if (type === 'file') {
    const fullFilePath = filePath.join('/');
    const fileName = filePath[filePath.length - 1];
    const fileFullPath = path.join(publicDirectory, fullFilePath);

    if (!statSync(fileFullPath).isFile()) {
      return new Response('File not found', { status: 404 });
    }

    const stream = createReadStream(fileFullPath);

    return new Response(stream, {
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  }

  if (type === 'zip') {
    const folderPathParts = filePath.slice(0, filePath.length - 1);
    const folderPath = folderPathParts.join('/');
    const zipFileName = filePath[filePath.length - 1];

    const targetFolderFullPath = path.join(publicDirectory, folderPath);

    if (!statSync(targetFolderFullPath).isDirectory()) {
      return new Response('Folder not found', { status: 404 });
    }

    const files = getAllFiles(targetFolderFullPath, [], '');

    const archive = archiver('zip', { zlib: { level: 9 } });
    const passthrough = new PassThrough();

    // Important: Pipe the archive to the PassThrough stream BEFORE adding files
    archive.pipe(passthrough);

    files.forEach(({ fullPath, relativePath }) => {
      archive.append(createReadStream(fullPath), { name: relativePath });
    });

    // Finalize archive after appending files
    archive.finalize();

    return new Response(passthrough, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="download.zip"; filename*=UTF-8''${encodeURIComponent(zipFileName)}`,
      },
    });
  }

  return new Response('Invalid type', { status: 400 });
};
