"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
import React, { useState } from "react";
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa6";
const DownloadResources = () => {
  const { text } = useLanguage();

  const sections = [
    {
      title: text.Resourcepage.downloadResources.row1.title,
      items: text.Resourcepage.downloadResources.row1.content,
    },
    {
      title: text.Resourcepage.downloadResources.row2.title,
      items: text.Resourcepage.downloadResources.row2.content,
    },
    {
      title: text.Resourcepage.downloadResources.row3.title,
      items: text.Resourcepage.downloadResources.row3.content,
    },
    {
      title: text.Resourcepage.downloadResources.row4.title,
      items: text.Resourcepage.downloadResources.row4.content,
    },
    {
      title: text.Resourcepage.downloadResources.row5.title,
      items: text.Resourcepage.downloadResources.row5.content,
    },
    {
      title: text.Resourcepage.downloadResources.row6.title,
      items: text.Resourcepage.downloadResources.row6.content,
    },
    {
      title: text.Resourcepage.downloadResources.row7.title,
      items: text.Resourcepage.downloadResources.row7.content,
    }
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
        Download Resources
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full bg-[#C1B6A3] page-collapse-title px-3 py-4  border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span className="text-start">{section.title}</span>
              <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
            </button>
        {openIndex === index && (
          <ul className="divide-y divide-gray-300 bg-white">
    {console.log(sections)}
    {section.items.map((item, idx) => {
      // Extract href + text
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = item;
      const anchor = tempDiv.querySelector("a");
      const href = anchor?.getAttribute("href");
      const text = anchor?.innerHTML;

      return (
        <li key={idx} className="divide-y divide-gray-300">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-5 py-4 gap-4 cursor-pointer hover:bg-gray-50"
          >
            <span className="page-collapse-link flex-1">{text}</span>
            <img src="/icon/link.svg" alt="link" />
          </a>
        </li>
      );
    })}
  </ul>
)}

          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadResources;
