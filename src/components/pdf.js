// "use client";
// import { useEffect, useState } from "react";
// import { RPProvider, RPDefaultLayout, RPPages, RPConfig } from '@pdf-viewer/react'

// const PDFViewerComponent = ({ fileUrl, onClose }) => {
//     const [windowWidth, setWindowWidth] = useState(0);
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             setWindowWidth(window.innerWidth);
//             const handleResize = () => setWindowWidth(window.innerWidth);
//             window.addEventListener("resize", handleResize);
//             return () => window.removeEventListener("resize", handleResize);
//         }
//     }, []);

//     return (
//         <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center">
//             {/* Close Button */}
//             <button
//                 className="absolute top-4 right-4 text-white text-2xl bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
//                 onClick={onClose}
//             >
//                 ✕
//             </button>

//             {/* PDF Viewer */}
//             <div className="w-[95%] h-[90%] bg-white rounded-lg overflow-hidden shadow-xl">
//                 <RPConfig>
//                     <RPProvider src={fileUrl}>
//                         <RPDefaultLayout style={{ height: '660px' }}>
//                             <RPPages />
//                         </RPDefaultLayout>
//                     </RPProvider>
//                 </RPConfig>
//             </div>
//         </div>
//     );
// };

// export default PDFViewerComponent;