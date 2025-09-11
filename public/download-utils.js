// utils/fileDownloader.js
import JSZip from 'jszip'; // Only if you're using JSZip for client-side zipping

/**
 * Downloads a file or a zip archive on the client side.
 *
 * @param {('file'|'zip')} type - The type of download ('file' or 'zip').
 * @param {string} path - The base path/URL for the file(s).
 *                       If type is 'file', this is the full URL to the file.
 *                       If type is 'zip', this is the base path where files in the zip are located.
 * @param {string | string[]} fileName - If type is 'file', the name for the downloaded file.
 *                                     If type is 'zip', an array of file names to include in the zip.
 */
export const downloadClientFile = async (type, path, fileName) => {
  if (type === 'file') {
    // For single file download, 'path' should be the direct URL to the file.
    // 'fileName' is just what the browser will suggest for the download name.
    const link = document.createElement('a');
    link.href = path; // The actual URL of the file
    link.download = fileName; // The name the user will see in the download dialog
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (type === 'zip') {
    if (!Array.isArray(fileName)) {
      console.error("For 'zip' type, fileName must be an array of strings.");
      return;
    }

    const zip = new JSZip();
    const filesToFetch = fileName.map(name => ({
      name: name,
      url: `${path}/${name}` // Construct full URL for each file
    }));

    try {
      console.log('Fetching files for zip...', filesToFetch);
      const fetchPromises = filesToFetch.map(async (file) => {
        const response = await fetch(file.url);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${file.url}: ${response.statusText}`);
        }
        const blob = await response.blob();
        zip.file(file.name, blob);
        console.log(`Added ${file.name} to zip.`);
      });

      await Promise.all(fetchPromises);

      console.log('Generating zip...');
      const content = await zip.generateAsync({ type: 'blob' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'download.zip'; // Default zip file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href); // Clean up the URL object
      console.log('Zip generated and download initiated.');

    } catch (error) {
      console.error('Error creating or downloading zip:', error);
      alert(`Error downloading files: ${error.message}`);
    }
  } else {
    console.error('Invalid file type provided. Must be "file" or "zip".');
  }
};

global.downloadClientFile = downloadClientFile;