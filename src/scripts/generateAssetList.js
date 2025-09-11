const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles = [], basePath = '') {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles, path.join(basePath, file));
    } else {
      arrayOfFiles.push(path.join(basePath, file));
    }
  });

  return arrayOfFiles;
}

const assetsFolder = path.join(__dirname, '../public/assets/pdf'); // adjust folder
const outputPath = path.join(__dirname, '../public/assets/fileList.json');

const fileList = getAllFiles(assetsFolder, []).map((f) => f.replace(/\\/g, '/'));

fs.writeFileSync(outputPath, JSON.stringify(fileList, null, 2));

console.log(`Generated file list saved to ${outputPath}`);
