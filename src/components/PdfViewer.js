"use client";
import React from "react";

export default function PdfViewer({ fileUrl }) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <iframe
        src={fileUrl}
        className="w-11/12 h-[90vh] border rounded-lg shadow"
        title="PDF Viewer"
      />
    </div>
  );
}
