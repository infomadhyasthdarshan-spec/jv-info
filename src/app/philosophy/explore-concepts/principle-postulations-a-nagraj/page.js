"use client";
import Backjs from "@/components/Backjs";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const Principle = () => {
  const { text } = useLanguage();
  const sections = [
    {
      title: text.principle.title,
      content: text.principle.content,
    },
  ];
  useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      <Backjs />
      <h2 className="page-heading font-bold text-black mb-6">
        Principle Postulations – A.Nagraj
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
          >
            <h3 className="bg-[#C1B6A3] text-white px-5 py-4 font-semibold border-b border-[#F2F4F8] page-collapse-title">
              {section.title}
            </h3>
            <div className="bg-white px-5 py-4 space-y-4 page-collapse-link">
              {section.content.map((line, lineIndex) => (
                <p key={lineIndex} dangerouslySetInnerHTML={{ __html: line }} className={`${lineIndex === 1 ? 'text-end' : null}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principle;
