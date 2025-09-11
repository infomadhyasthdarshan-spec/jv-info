import JSZip from 'jszip';

export function downloadAsset(type, path, filename, files = []) {
  const baseUrl = `/assets${path.startsWith('/') ? path : `/${path}`}`;

  if (type === 'file') {
    const url = `${baseUrl}/${filename}`;
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (type === 'zip') {
    const zip = new JSZip();
    const folder = zip.folder(filename.replace('.zip', ''));

    // Use the files array passed as an argument (empty by default)
    if (files.length === 0) {
      console.error('No files provided for ZIP creation');
      return;
    }

    Promise.all(
      files.map((file) =>
        fetch(`${baseUrl}/${file}`)
          .then((res) => {
            if (!res.ok) throw new Error(`Failed to fetch ${file}`);
            return res.blob();
          })
          .then((blob) => folder.file(file, blob))
      )
    )
      .then(() => zip.generateAsync({ type: 'blob' }))
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename.endsWith('.zip') ? filename : `${filename}.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error('ZIP creation failed:', error));
  }
}