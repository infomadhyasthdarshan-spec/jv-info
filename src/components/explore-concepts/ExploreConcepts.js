'use client'

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FaArrowRight } from "react-icons/fa6";
const ExploreConcepts = () => {
  const { text } = useLanguage();
  const sections = [
    {
      title: text.philosophyPage6.Introductory.subtitle,
      items: text.philosophyPage6.Introductory.rows,
    },
  ];

  const Students = [
    {
      title: text.philosophyPage6.ByStudents.row1.subtitle,
      items: text.philosophyPage6.ByStudents.row1.rows,
    },
    {
      title: text.philosophyPage6.ByStudents.row2.subtitle1,
      items: text.philosophyPage6.ByStudents.row2.rows,
    },
    {
      title: text.philosophyPage6.ByStudents.row3.subtitle,
      items: text.philosophyPage6.ByStudents.row3.rows,
    },
    {
      title: text.philosophyPage6.ByStudents.row4.subtitle,
      items: text.philosophyPage6.ByStudents.row4.rows,
    },
    {
      title: text.philosophyPage6.ByStudents.row5.subtitle,
      items: text.philosophyPage6.ByStudents.row5.rows,
    },
    {
      title: text.philosophyPage6.ByStudents.row6.subtitle,
      items: text.philosophyPage6.ByStudents.row6.rows,
    },
    {
      title: text.philosophyPage6.ByStudents.row7.subtitle,
      items: text.philosophyPage6.ByStudents.row7.rows,
    },
    {
      title: text.philosophyPage6.ByStudents.row8.subtitle,
      items: text.philosophyPage6.ByStudents.row8.rows,
    },
    {
      title: text.philosophyPage6.ByStudents.row9.subtitle,
      items: text.philosophyPage6.ByStudents.row9.rows,
    },

  ];

  const [openSections, setOpenSections] = useState({});
  const [openStudents, setOpenStudents] = useState({});

  const toggleSection = (index, type) => {
    if (type === "section") {
      setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
    } else {
      setOpenStudents((prev) => ({ ...prev, [index]: !prev[index] }));
    }
  };

  return (
    <>
      <div className="bg-gray-100 max-w-5xl mx-auto">
        <h2 className="page-heading text-black mb-10 ">
          {text.philosophyPage6.title}
        </h2>
        {/* <p className="py-5">
        {text.philosophyPage6.subTitle}
        </p> */}

        {/* <ul className="divide-y divide-gray-300 bg-white rounded-[16px] border border-[#F2F4F8] mb-6">
          <li className="flex items-center justify-between px-5 py-4">
            <span className="text-[15px] font-[700]  ">
             {text.philosophyPage6.button}
            </span>
            <img
              src="/arrow-forward.png"
              alt="Download Icon"
              className="w-5 h-5 object-contain"
            />
            <FaArrowRight size={20} />

          </li>
        </ul> */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 sm:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-0">
            {text.philosophyPage6.Introductory.title}
          </h2>
          <a
            className="page-common-md-pera text-[#b2917a] hover:underline cursor-pointer break-words"
            href="https://megascale.cloud/JV//folder/explorecon/A.Nagraj Intro Arcticles.zip"
          >
            Download Shri Nagraj intro articles in zip file
          </a>
        </div>



        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
            >
              <button
                onClick={() => toggleSection(index, "section")}
                className="w-full text-left bg-[#C1B6A3] page-collapse-title px-5 py-4 font-semibold border-b border-[#F2F4F8] flex justify-between items-center"
              >
                {section.title}
                <span className="text-xl font-bold">
                  {openSections[index] ? "−" : "+"}
                </span>
              </button>
              {openSections[index] && (
                <ul className="divide-y divide-gray-300 bg-white">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between px-5 py-4 cursor-pointer"
                      onClick={() =>
                        window.location.href = item.link
                      }
                    >
                      <span className="page-collapse-link  ">
                        {item.name}
                      </span>
                      <FaArrowRight size={20} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* by student */}
      <div className="bg-gray-100 py-8 max-w-5xl mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 sm:mb-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-0">
            {text.philosophyPage6.ByStudents.title}
          </h2>
          <a
            className="page-common-md-pera text-[#b2917a] hover:underline cursor-pointer break-words"
            href="https://megascale.cloud/JV//folder/explorecon/Students Intro Articles.zip"
          >
            Download Student intro articles in zip file
          </a>
        </div>
        <div className="space-y-6">
          {Students.map((sec, index) => (
            <div
              key={index}
              className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
            >
              <button
                onClick={() => toggleSection(index, "student")}
                className="w-full text-left bg-[#C1B6A3] text-white px-5 py-4 page-collapse-title border-b border-[#F2F4F8] flex justify-between items-center"
              >
                {sec.title}
                <span className="text-xl font-bold">
                  {openStudents[index] ? "−" : "+"}
                </span>
              </button>
              {openStudents[index] && (
                <ul className="divide-y divide-gray-300 bg-white">
                  {sec.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between px-5 py-4 cursor-pointer"
                      onClick={() =>
                        window.location.href = item.link
                      }
                    >
                      <span className="page-collapse-link font-[500]  ">
                        {item.name}
                      </span>
                      <FaArrowRight size={20} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreConcepts;
