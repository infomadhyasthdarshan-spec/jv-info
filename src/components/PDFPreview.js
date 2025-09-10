import { X } from "lucide-react";

const PDFModal = ({ show, onClose, fileUrl }) => {
  if (!show) return null;

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div className="bg-white w-full h-full max-w-7xl max-h-[95vh] sm:max-h-[90vh] rounded-none sm:rounded-xl shadow-2xl overflow-hidden relative animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
          <h2 
            id="pdf-modal-title" 
            className="text-lg sm:text-xl font-semibold   truncate mr-4"
          >
            PDF Viewer
          </h2>
          
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 hover:bg-red-100   hover:text-red-600 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Close PDF viewer"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* PDF Content */}
        <div className="relative w-full" style={{ height: 'calc(100% - 60px)' }}>
          {fileUrl ? (
            <iframe
              src={fileUrl}
              title="PDF Document"
              className="w-full h-full border-0"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-8 h-8  " 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium   mb-2">No PDF to display</h3>
                <p className=" ">Please provide a valid PDF URL</p>
              </div>
            </div>
          )}
        </div>

        {/* Loading overlay (optional) */}
        <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center hidden" id="pdf-loading">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4  ">Loading PDF...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFModal;

// const PDFModal = ({ show, onClose, fileUrl }) => {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white w-[90vw] h-[90vh] rounded-lg shadow-lg overflow-hidden relative">
//         <button
//           className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>

//         <iframe
//           src={fileUrl}
//           title="PDF Viewer"
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default PDFModal;









// // components/PDFPreview.tsx
// "use client";
// import { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// type Props = {
//   pdfPath: string;
// };

// export default function PDFPreview({ pdfPath }: Props) {
//   const [numPages, setNumPages] = useState(0);

//   return (
//     <div className="mt-4 border rounded p-2 bg-[#f9f9f9]">
//       <Document file={pdfPath} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// }
