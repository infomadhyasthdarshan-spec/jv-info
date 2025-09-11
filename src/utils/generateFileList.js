const fs = require('fs/promises');
const path = require('path');

async function generateFileList() {
  const assetsDir = path.join(process.cwd(), 'public/assets');
  const fileMap = {};

  async function walkDir(dir, relativePath = '') {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = relativePath ? `${relativePath}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        await walkDir(fullPath, relPath);
      } else if (entry.isFile()) {
        const key = `/${relPath.split('/').slice(0, -1).join('/')}` || '/';
        if (!fileMap[key]) fileMap[key] = [];
        fileMap[key].push(entry.name);
      }
    }
  }

  await walkDir(assetsDir);
  for (const key in fileMap) {
    fileMap[key].sort();
  }

  const outputPath = path.join(process.cwd(), 'src/utils/fileMap.json');
  await fs.writeFile(outputPath, JSON.stringify(fileMap, null, 2), 'utf8');
  console.log(`Generated fileMap at ${outputPath}`);
}

generateFileList().catch(console.error);