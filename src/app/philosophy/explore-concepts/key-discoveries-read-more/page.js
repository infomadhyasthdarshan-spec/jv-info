"use client"
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Backjs from "@/components/Backjs";
 import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const DiscoveriesExplained = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  const { text } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const sections = [
    {
      title: text.postulations.sections[0].title,
      items: text.postulations.sections[0].items,
    },
    {
      title: text.postulations.sections[1].title,
      items: text.postulations.sections[1].items,
    },
    {
      title: text.postulations.sections[2].title,
      items: text.postulations.sections[2].items,
    },
    {
      title: text.postulations.sections[3].title,
      items: text.postulations.sections[3].items,
    },
    {
      title: text.postulations.sections[4].title,
      items: text.postulations.sections[4].items,
    },
    {
      title: text.postulations.sections[5].title,
      items: text.postulations.sections[5].items,
    },
  ];

  const explanationSections = [
    {
      title: text.postulations.explanationSections[0].title,
      items: text.postulations.explanationSections[0].items,
    },
    {
      title: text.postulations.explanationSections[1].title,
      items: text.postulations.explanationSections[1].items,
    },
    {
      title: text.postulations.explanationSections[2].title,
      items: text.postulations.explanationSections[2].items,
    },
    {
      title: text.postulations.explanationSections[3].title,
      items: text.postulations.explanationSections[3].items,
    },
    {
      title: text.postulations.explanationSections[4].title,
      items: text.postulations.explanationSections[4].items,
      t1: text.postulations.explanationSections[4].t1,
    },
    {
      title: text.postulations.explanationSections[5].title,
      items: text.postulations.explanationSections[5].items,
    },
  ];

  const additionalDistinctions = [
    {
      title: text.postulations.additionalDistinctions[0].title,
      content: text.postulations.additionalDistinctions[0].content,
    },
    {
      title: text.postulations.additionalDistinctions[1].title,
      content: text.postulations.additionalDistinctions[1].content,
    },
    {
      title: text.postulations.additionalDistinctions[2].title,
      content: text.postulations.additionalDistinctions[2].content,
    },
    {
      title: text.postulations.additionalDistinctions[3].title,
      content: text.postulations.additionalDistinctions[3].content,
    },
    {
      title: text.postulations.additionalDistinctions[4].title,
      content: text.postulations.additionalDistinctions[4].content,
    },
    {
      title: text.postulations.additionalDistinctions[5].title,
      content: text.postulations.additionalDistinctions[5].content,
    },
    {
      title: text.postulations.additionalDistinctions[6].title,
      content: text.postulations.additionalDistinctions[6].content,
    },
    {
      title: text.postulations.additionalDistinctions[7].title,
      content: text.postulations.additionalDistinctions[7].content,
    },
    {
      title: text.postulations.additionalDistinctions[8].title,
      content: text.postulations.additionalDistinctions[8].content,
    },
    {
      title: text.postulations.additionalDistinctions[9].title,
      content: text.postulations.additionalDistinctions[9].content,
    },
    {
      title: text.postulations.additionalDistinctions[10].title,
      content: text.postulations.additionalDistinctions[10].content,
    },
    {
      title: text.postulations.additionalDistinctions[11].title,
      content: text.postulations.additionalDistinctions[11].content,
    },
    {
      title: text.postulations.additionalDistinctions[12].title,
      content: text.postulations.additionalDistinctions[12].content,
    },
  ];

  // Extra headings between rows
  const sectionHeadings = {
    // show after index 2 in sections
   
   // show after index 4 in sections
  };

  const explanationHeadings = {
     3:"Epistemology",
    4: "Axiology", // show after index 3 in explanationSections
  };

  const distinctionHeadings = {
    5: text.postulations.extraHeading2, // show after index 5 in additionalDistinctions
  };

  const renderSection = (section, index, baseIndex = 0) => (
    <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden mb-6">
      <button
        onClick={() => toggleSection(baseIndex + index)}
        className="w-full bg-[#C1B6A3] text-white px-5 py-4 font-semibold border-b border-[#F2F4F8] flex justify-between items-center"
      >
        <span className="page-collapse-title">{section.title}</span>
        <span className="text-lg">{openIndex === baseIndex + index ? "−" : "+"}</span>
      </button>
      {openIndex === baseIndex + index && (
        <div className="bg-white px-5 py-4 space-y-3">
          <ul className="list-disc pl-6 page-collapse-link leading-relaxed">
            {section.items.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderDistinction = (distinction, index, baseIndex) => (
    <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden mb-6">
      <button
        onClick={() => toggleSection(baseIndex + index)}
        className="w-full bg-[#C1B6A3] text-white px-5 py-4 font-semibold border-b border-[#F2F4F8] flex justify-between items-center"
      >
        <span className="page-collapse-title">{distinction.title}</span>
        <span className="text-lg">{openIndex === baseIndex + index ? "−" : "+"}</span>
      </button>
      {openIndex === baseIndex + index && (
        <div className="bg-white px-5 py-4 space-y-3 page-collapse-link leading-relaxed">
          <ul className="list-disc pl-6">
            {distinction.content.map((item, contentIdx) => (
              <li key={contentIdx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 py-8 px-3 md:px-0 max-w-5xl mx-auto">
      <Backjs />
      <h2 className="page-heading mb-6">{text.postulations.h1}</h2>

      <div className="space-y-6">
        {/* Sections with extra headings */}
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {renderSection(section, index)}
            {sectionHeadings[index] && (
              <h2 className="page-small-heading my-6">
                {sectionHeadings[index]}
              </h2>
            )}
          </React.Fragment>
        ))}

        <div className="mt-12 pb-6">
          <h2 className="page-heading text-center mb-16">{text.postulations.h11}</h2>
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
            {text.postulations.h2}
          </h2>

          {/* Explanation sections with extra headings */}
          {explanationSections.map((section, index) => (
            <React.Fragment key={index}>
              {renderSection(section, index, sections.length)}
              {explanationHeadings[index] && (
                <h2 className="page-small-heading my-6">
                  {explanationHeadings[index]}
                </h2>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
            {text.postulations.title2}
          </h2>

          {/* Additional distinctions with extra headings */}
          {additionalDistinctions.map((distinction, index) => (
            <React.Fragment key={index}>
              {renderDistinction(
                distinction,
                index,
                sections.length + explanationSections.length
              )}
              {distinctionHeadings[index] && (
                <h2 className="page-small-heading my-6">
                  {distinctionHeadings[index]}
                </h2>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <p className="page-common-pera italic">
        shriram narasimhan | student | jan 2023
      </p>
    </div>
  );
};

export default DiscoveriesExplained;
