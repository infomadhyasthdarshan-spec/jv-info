'use client';

import React, { useEffect, useState } from 'react';
import { wrapHindiWords } from '@/utils/fontInjector';

export default function DownloadsPage() {
  const [files, setFiles] = useState([]);
  const [folderOptions, setFolderOptions] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('');

  useEffect(() => {
    fetch('/api/files')
      .then((res) => res.json())
      .then((data) => {
        setFiles(data.files);

        // Extract unique folder paths for dropdown
        const folders = new Set();
        data.files.forEach((file) => {
          const parts = file.split('/');
          if (parts.length > 1) {
            folders.add(parts.slice(0, 2).join('/')); // e.g., 'pdf/abc'
          }
        });
        setFolderOptions(Array.from(folders));
      })
      .catch((err) => console.error('Failed to fetch files:', err));
  }, []);

  useEffect(() => {
    wrapHindiWords();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Download Files</h1>

      {files.length === 0 ? (
        <p>Loading files...</p>
      ) : (
        <>
          <ul className="mb-6 list-disc list-inside">
            {files.map((file, idx) => (
              <li key={idx}>
                <a
                  href={`/${file}`}
                  download
                  className="text-blue-600 underline"
                >
                  Download {file}
                </a>
              </li>
            ))}
          </ul>

          <div className="mb-4">
            {console.log(folderOptions)}
            <label className="block mb-2 font-semibold">
              Select Folder to Download as ZIP:
            </label>
            <select
              className="border p-2 rounded"
              value={selectedFolder}
              onChange={(e) => setSelectedFolder(e.target.value)}
            >
              <option value="">-- Select Folder --</option>
              {folderOptions.map((folder, idx) => (
                <option key={idx} value={folder}>
                  {folder}
                </option>
              ))}
            </select>
          </div>

          {selectedFolder && (
            <a
              href={`/api/download-zip?folder=${selectedFolder}`}
              className="bg-green-500 text-white px-4 py-2 rounded"
              download
            >
              Download Selected Folder as ZIP
            </a>
          )}
        </>
      )}

      <div className="mt-6">
        <a
          href="/api/download-zip"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download All as ZIP
        </a>
      </div>
    </div>
  );
}









// 'use client';

// import React, { useEffect, useState } from 'react';

// export default function DownloadsPage() {
//   const [pdfFiles, setPdfFiles] = useState([]);

//   useEffect(() => {
//     fetch('/api/pdf-files')
//       .then((res) => res.json())
//       .then((data) => setPdfFiles(data.files))
//       .catch((err) => console.error('Failed to fetch files:', err));
//   }, []);

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Download PDFs</h1>

//       {pdfFiles.length === 0 ? (
//         <p>Loading files...</p>
//       ) : (
//         <ul className="mb-6 list-disc list-inside">
//           {pdfFiles.map((file, idx) => (
//             <li key={idx}>
//               <a
//                 href={`/pdf/${file}`}
//                 download
//                 className="text-blue-600 underline"
//               >
//                 Download {file}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}

//       <a
//         href="/api/download-zip"
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Download All as ZIP
//       </a>
//     </div>
//   );
// }










// 'use client'
// import React , { useEffect } from 'react';
// import { wrapHindiWords } from '@/utils/fontInjector';

// export default function Page() {
//     // const token = 'vercel_blob_rw_iJ49nOXrmXSvCJX8_rAXScobXKrnmaBwefkFsmyDO0bvj2f';
//     // const response = await list({ token });

//     useEffect(() => {
//         wrapHindiWords();
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-100 p-8">
//             <p>This is English and यह हिंदी टेक्स्ट mixed.</p>
//         </div>
//     );
// }
