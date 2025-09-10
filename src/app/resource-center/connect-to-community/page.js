"use client";
import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const ConnectCommunity = () => {
  const { text } = useLanguage();

  const sections = [
    {
      title: text.Resourcepage.connect.row1.title,
      items: text.Resourcepage.connect.row1.content,
    },
    {
      title: text.Resourcepage.connect.row2.title,
      items: text.Resourcepage.connect.row2.content,
    },
    {
      title: text.Resourcepage.connect.row3.title,
      items: text.Resourcepage.connect.row3.content,
    },
    {
      title: text.Resourcepage.connect.row4.title,
      items: text.Resourcepage.connect.row4.content,
    },
    {
      title: text.Resourcepage.connect.row5.title,
      items: text.Resourcepage.connect.row5.content,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
   useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-0 max-w-5xl mx-auto">
      <h2 className="page-heading font-bold text-black mb-6 ssr-hading">
        Connect To Community
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full bg-[#C1B6A3] text-white px-5 py-4 page-collapse-title border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span>{section.title}</span>
              <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="bg-white">
                {/* Items list */}
                {section.items?.length > 0 && (
                  <ul className="divide-y divide-gray-300 list-outside">
                    {section.items.map((item, idx) => {
                      // Support both { text, status } and plain string
                      const content =
                        typeof item === "string" ? item : item.text;
                      const status =
                        typeof item === "string" ? false : item.status;

                      return (
                        <li
                          key={idx}
                          className="flex items-center justify-between px-5 py-4"
                        >
                          <span
                            className="page-collapse-link"
                            dangerouslySetInnerHTML={{ __html: content }}
                          />
                          {status && (
                            <img src="/icon/link.svg" alt="link icon" />
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* About section */}
                {section.about && (
                  <>
                    <h1 className="px-5 py-4 space-y-3 font-bold text-[26px]">
                      {text.Resourcepage.connect.row4.center.title}
                    </h1>
                    <h1 className="px-5 py-4 space-y-3 text-red-400 text-[16px] text-center">
                      {text.Resourcepage.connect.row4.center.subtitle}
                    </h1>
                    <div className="px-5 py-4 space-y-3">
                      {section.about.map((para, idx) => {
                        const content =
                          typeof para === "string" ? para : para.text;
                        return (
                          <p
                            key={idx}
                            className="text-[15px] leading-relaxed"
                          >
                            {content}
                          </p>
                        );
                      })}
                    </div>
                    <h1 className="px-5 py-2 space-y-1 font-bold text-red-400 text-[16px]">
                      {text.Resourcepage.connect.row4.center.line}
                    </h1>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectCommunity;
