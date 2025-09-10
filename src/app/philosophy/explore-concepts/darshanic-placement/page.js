"use client";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
import { useLanguage } from "@/context/LanguageContext";
const Darshanic = () => {
  const { text } = useLanguage();
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <>
      <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {text.darshan.title}
        </h1>

        <p className="text-lg md:text-xl mb-4 max-w-2xl">
          {text.darshan.description}
        </p>

        {/* Replace with actual image path */}
        <img
          src="/images/philosophy/darshan.png"
          alt="Darshanic Placement Diagram"
          className="w-full max-w-7xl mb-6 rounded"
        />

        <a
          href="/images/philosophy/darshan.png"
          download
          className="inline-block bg-[#b3927b] text-white px-6 py-2 rounded hover:bg-[#b3927b] transition"
        >
          {text.darshan.downloadText}
        </a>
      </div>
    </>
  );
};

export default Darshanic;
