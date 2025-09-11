// src/utils/downloadUtils.js
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// Function to get the asset URL dynamically
// In a real application, you might use a more robust path resolution or a CDN URL
const getAssetUrl = (relativePath) => {
  // Assuming your assets are directly accessible via the public path
  // If your assets are in `src/assets` and your Next.js project serves `public`
  // you might need to move `assets` to `public` or adjust accordingly.
  // For client-side access, if `src/assets` is not directly exposed by Next.js
  // (which it isn't by default), you'd typically put these in the `public` folder.
  // For this example, let's assume assets are in `public/assets`.
  // So if path is `/pdf/my-doc.pdf`, the full URL would be `/assets/pdf/my-doc.pdf`
  return `/assets${relativePath}`;
};

export const downloadFileOrZip = async (type, path, filename) => {
  try {
    if (type === 'file') {
      const url = getAssetUrl(path);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      saveAs(blob, filename);
      console.log(`Downloaded single file: ${filename}`);

    } else if (type === 'zip') {
      const zip = new JSZip();

      // For a ZIP, `path` should ideally be a folder path, e.g., `/pdfs/literature`
      // We need to know the individual files inside that folder to add them to the zip.
      // Since we are client-side, we can't directly list files in a server folder.
      // You'll need to provide an array of file paths or fetch a manifest.
      // For this example, let's assume `path` is an array of relative file paths.
      // Example: path = ['/pdf/literature/doc1.pdf', '/pdf/literature/doc2.pdf']

      if (!Array.isArray(path) || path.length === 0) {
        throw new Error("For 'zip' type, 'path' must be an array of file paths.");
      }

      console.log(`Preparing to zip ${path.length} files...`);

      for (const filePath of path) {
        const url = getAssetUrl(filePath);
        const response = await fetch(url);

        if (!response.ok) {
          console.warn(`Could not fetch ${url}. Skipping.`);
          continue; // Skip files that can't be fetched
        }

        const fileBlob = await response.blob();
        // Extract filename from the path for the zip entry
        const fileNameInZip = filePath.substring(filePath.lastIndexOf('/') + 1);
        zip.file(fileNameInZip, fileBlob);
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, filename || 'download.zip');
      console.log(`Generated and downloaded zip file: ${filename || 'download.zip'}`);

    } else {
      console.error('Invalid download type. Must be "file" or "zip".');
    }
  } catch (error) {
    console.error('Error during download:', error);
    alert(`Failed to download: ${error.message}`);
  }
};