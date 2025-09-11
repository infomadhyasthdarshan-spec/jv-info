// utils/fileDownloader.js
import JSZip from 'jszip';

/**
 * Downloads a file or a zip archive on the client side.
 *
 * @param {('file'|'zip')} type - The type of download ('file' or 'zip').
 * @param {string} pathOrFolder - If type is 'file', this is the full URL to the file.
 *                                If type is 'zip', this is the relative path to the folder
 *                                within the 'public' directory (e.g., '/data').
 * @param {string | string[]} [fileNameOrNames] - If type is 'file', the name for the downloaded file.
 *                                               If type is 'zip', an array of specific file names to include.
 *                                               If type is 'zip' and this is omitted, all files in the folder will be zipped.
 */
export const downloadClientFile = async (type, pathOrFolder, fileNameOrNames) => {
  if (type === 'file') {
    const link = document.createElement('a');
    link.href = pathOrFolder;
    link.download = fileNameOrNames || pathOrFolder.split('/').pop(); // Use provided name or infer from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (type === 'zip') {
    const zip = new JSZip();
    let fileNamesToZip = fileNameOrNames;

    // If fileNameOrNames is not provided or is empty, fetch all files from the folder
    if (!fileNamesToZip || (Array.isArray(fileNamesToZip) && fileNamesToZip.length === 0)) {
      try {
        const listFilesResponse = await fetch(`/api/list-files?folderPath=${encodeURIComponent(pathOrFolder)}`);
        if (!listFilesResponse.ok) {
          throw new Error(`Failed to list files: ${listFilesResponse.statusText}`);
        }
        const data = await listFilesResponse.json();
        if (data.error) {
          throw new Error(data.error);
        }
        fileNamesToZip = data.files;
        if (!fileNamesToZip || fileNamesToZip.length === 0) {
          alert(`No files found in folder: ${pathOrFolder}`);
          return;
        }
      } catch (error) {
        console.error('Error fetching file list:', error);
        alert(`Could not get file list for zipping: ${error.message}`);
        return;
      }
    } else if (!Array.isArray(fileNamesToZip)) {
        console.error("For 'zip' type, fileNameOrNames must be an array of strings or omitted.");
        return;
    }


    const filesToFetch = fileNamesToZip.map(name => ({
      name: name,
      // Construct the full client-side accessible URL for each file
      url: `${pathOrFolder.startsWith('/') ? '' : '/'}${pathOrFolder}/${name}`
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
      // Generate a more meaningful default zip file name
      const defaultZipName = `${pathOrFolder.split('/').pop() || 'download'}.zip`;
      link.download = defaultZipName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
      console.log('Zip generated and download initiated.');

    } catch (error) {
      console.error('Error creating or downloading zip:', error);
      alert(`Error downloading files: ${error.message}`);
    }
  } else {
    console.error('Invalid file type provided. Must be "file" or "zip".');
  }
};