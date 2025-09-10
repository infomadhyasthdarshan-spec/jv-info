"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa6";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const WatchVideoAudio = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  const { text } = useLanguage();
  const [openSection, setOpenSection] = useState(null);
  const [openCourse, setOpenCourse] = useState(null);
  const [openSection1, setOpenSection1] = useState(null);

  const toggle = (section, setSection, index) => {
    setSection(prev => (prev === index ? null : index));
  };

  const sections = [
    {
      title: text.studentPage2.row1.title,
      items: [
        text.studentPage2.row1.content[0],
        text.studentPage2.row1.content[1],
      ],
    },
  ];

  const sections1 = [
    {
      title: text.studentPage2.row3.title,
      items: [
        text.studentPage2.row3.content[0],
       
      ],
    },
  ];

  const courses = [
    {
      title: text.studentPage2.row2.content.c1.title,
      items: text.studentPage2.row2.content.c1.content,
      status:false
    },
    {
      title: text.studentPage2.row2.content.c2.title,
      items: text.studentPage2.row2.content.c2.content,
            status:false

    },
    {
      title: text.studentPage2.row2.content.c3.title,
      items: text.studentPage2.row2.content.c3.content,
            status:false

    },
    {
      title: text.studentPage2.row2.content.c4.title,
      items: [text.studentPage2.row2.content.c4.content],
            status:false

    },
    {
      title: text.studentPage2.row2.content.c5.title,
      items: text.studentPage2.row2.content.c5.content,
            status:false

    },
  ];

  return (
    <div className="bg-[#f1f2f5] py-8 px-4 md:px-0 max-w-5xl mx-auto">
      {/* Collapsible Section 1 */}
      <div className="">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <button
              onClick={() => toggle(openSection, setOpenSection, index)}
              className="w-full text-left bg-[#C1B6A3] page-collapse-title px-5 py-4 border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span>{section.title}</span>
              {openSection === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
            </button>
            {openSection === index && (
              <ul className="divide-y divide-[#F2F4F8] bg-white">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    <span className="page-collapse-link  " dangerouslySetInnerHTML={{ __html: item }}></span>
                    {}
                    <img src="/icon/link.svg" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {/* Collapsible Section 2 (Courses) */}
      <div className="space-y-6 mt-7">
        <div className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
          <button
            onClick={() => toggle(openCourse, setOpenCourse, 0)}
            className="w-full text-left bg-[#C1B6A3] page-collapse-title px-5 py-4  border-b border-[#F2F4F8] flex justify-between items-center"
          >
            <span>{text.studentPage2.row2.title}</span>
            {openCourse === 0 ? <FaMinus size={16} /> : <FaPlus size={16} />}
          </button>
          {openCourse === 0 && (
            <div className="bg-white">
              <div className="px-5 pt-4 text-sm  ">
                <p className="mb-1 page-collapse-link">{text.studentPage2.row2.sub}</p>
                <p className="text-[11px] italic   mb-3 page-collapse-link">
                  {text.studentPage2.row2.sub2}
                </p>
              </div>
              <ul className="divide-y divide-[#F2F4F8]">
                {courses.map((course, index) => (
                  <li key={index} className="">
                    <h4 className="font-bold text-[18px] text-[#333] px-8 py-3 mb-2 bg-[#FFF5E7]">{course.title}</h4>
                    <ul className="divide-y divide-[#F2F4F8]">
                     {course.items.map((item, idx) => {
  // Extract href and text from the <a> in JSON
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = item;
  const anchor = tempDiv.querySelector("a");
  const href = anchor?.getAttribute("href");
  const text = anchor?.innerHTML;

  return (
    <li key={idx} className="divide-y divide-[#F2F4F8]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between py-3 px-8 cursor-pointer hover:bg-gray-50"
      >
        <span className="page-collapse-link">{text}</span>
        {course.status ? (
          <img src="/icon/arrow.svg" alt="arrow" />
        ) : (
          <img src="/icon/link.svg" alt="link" />
        )}
      </a>
    </li>
  );
})}

                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Collapsible Section 3 */}
        {sections1.map((sec, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <button
              onClick={() => toggle(openSection1, setOpenSection1, index)}
              className="w-full text-left bg-[#C1B6A3] page-collapse-title px-5 py-4 font-bold border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span>{sec.title}</span>
              {openSection1 === index ? <FaMinus size={16} /> : <FaPlus size={16} />}
            </button>
            {openSection1 === index && (
              <ul className="divide-y divide-[#F2F4F8] bg-white">
                {sec.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between px-5 py-4"
                  >
                   <span
              className="page-collapse-link"
              dangerouslySetInnerHTML={{ __html: item }}
            />
                    <img src="/icon/link.svg" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchVideoAudio;
