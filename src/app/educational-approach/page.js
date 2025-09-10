"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Backjs from "@/components/Backjs";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';

export default function EducationalApproachPage() {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
    const { text } = useLanguage();
  const curriculumPoints = [
    {
      main: text.educationalApproach.section2.content[0],
    
    },
    {
      main: text.educationalApproach.section2.content[1],
      subpoints: [
             text.educationalApproach.section2.content[2],
             text.educationalApproach.section2.content[3]

      ]
    },
    {
main: text.educationalApproach.section2.content[4],    },
    {
main: text.educationalApproach.section2.content[5],    },
    {
main: text.educationalApproach.section2.content[6],    },
    {
main: text.educationalApproach.section2.content[7],    }
  ];

  const pedagogyMethods = [
 text.educationalApproach.section3.subcontent[1],
    text.educationalApproach.section3.subcontent[2],
    text.educationalApproach.section3.subcontent[3],
    text.educationalApproach.section3.subcontent[4],
    text.educationalApproach.section3.subcontent[5],
    text.educationalApproach.section3.subcontent[6],
    text.educationalApproach.section3.subcontent[7],
    text.educationalApproach.section3.subcontent[8],
    text.educationalApproach.section3.subcontent[9],
    text.educationalApproach.section3.subcontent[10],
    text.educationalApproach.section3.subcontent[11],

  ];

  const assessmentAreas = [
    {
      title: text.educationalApproach.section4.subcontent1.title,
      points: 
        text.educationalApproach.section4.subcontent1.content,
      
    },
    {
     title: text.educationalApproach.section4.subcontent2.title,
      points: 
        text.educationalApproach.section4.subcontent2.content,
    },
    {
  title: text.educationalApproach.section4.subcontent3.title,
      points: 
        text.educationalApproach.section4.subcontent3.content,
    },
    {
   title: text.educationalApproach.section4.subcontent4.title,
      points: 
        text.educationalApproach.section4.subcontent4.content,
    }
  ];
    
  return (
    <div className="max-w-5xl mx-auto px-4 py-10   leading-[28px]">
      {/* Title */}
      <h1 className="text-[28px] font-semibold mb-4 text-[#5f3a02]">{text.educationalApproach.title}</h1>
      <hr className="mb-5" />
      <p className="font-medium text-[18px] mb-4">
       {text.educationalApproach.subtitle}
      </p>

      {/* Link to Philosophy */}
      <p className="mb-6">
      {text.educationalApproach.line}
      </p>

      {/* Approach */}
      <h2 className="font-bold text-[24px] mb-4 leading-[32px]">{text.educationalApproach.section1.title}</h2>
      <ul className="list-disc list-inside space-y-1 mb-6 leading-[32px] text-[18px] font-medium">
       <li>{text.educationalApproach.section1.content[0]}</li>
       <li>{text.educationalApproach.section1.content[1]}</li>
       <li>{text.educationalApproach.section1.content[2]}</li>
      </ul>

      {/* Curriculum */}
      <h2 className="font-bold text-[24px] mb-4 leading-[32px]">{text.educationalApproach.section2.title}</h2>
      <ul className="list-disc list-inside space-y-3 mb-6 text-[18px] leading-[30px] font-medium">
        {curriculumPoints.map((item, idx) => (
          <li key={idx}>
            {item.main}
            {item.subpoints && (
              <ul className="list-[circle] list-inside mt-2 ml-5 space-y-2 text-[17px] font-medium leading-[28px]">
                {item.subpoints.map((subpoint, subIdx) => (
                  <li key={subIdx}>{subpoint}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Pedagogy */}
      <h2 className="font-bold text-[24px] mb-4 leading-[32px]">{text.educationalApproach.section3.title}</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-[18px] leading-[30px] font-medium">
        <li>{text.educationalApproach.section3.content[0]}</li>
        <li>{text.educationalApproach.section3.content[1]}</li>
        <li>{text.educationalApproach.section3.content[2]}</li>
        <li>{text.educationalApproach.section3.content[3]}</li>
        <li>{text.educationalApproach.section3.content[4]}</li>
        <li>{text.educationalApproach.section3.content[5]}</li>
        <li>{text.educationalApproach.section3.content[6]}</li>
        <li>{text.educationalApproach.section3.content[7]}</li>
        <li>{text.educationalApproach.section3.content[8]}</li>
        <li>{text.educationalApproach.section3.content[9]}</li>
      </ul>

      <p className="font-semibold mb-2">{text.educationalApproach.section3.subcontent[0]}</p>
      <ul className="list-[circle] list-inside space-y-2 mb-6 ml-5 text-[18px] leading-[32px] font-medium">
        {pedagogyMethods.map((method, idx) => (
          <li key={idx}>{method}</li>
        ))}
      </ul>

      <p className="mb-6 text-[18px] leading-[32px] font-medium">
{text.educationalApproach.section3.subcontent[13]}      </p>

      {/* Assessment */}
      <h2 className="font-bold text-[24px] mb-4 leading-[32px]">{text.educationalApproach.section4.title}</h2>
      <ul className="list-disc list-inside space-y-2 mb-4 text-[18px] leading-[30px] font-medium">
        <li>{text.educationalApproach.section4.content[0]}</li>
        <li>{text.educationalApproach.section4.content[1]}</li>
        <li>{text.educationalApproach.section4.content[2]}</li>
    
      </ul>

      {assessmentAreas.map((area, idx) => (
        <div key={idx} className="mb-6">
          <p className="font-bold text-[19px] mb-2">{area.title}</p>
          <ul className="list-[circle] list-inside space-y-2 ml-5 text-[17px] font-medium leading-[32px]">
            {area.points.map((point, pIdx) => (
              <li key={pIdx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="text-center text-2xl mt-6 mb-2">***</div>
      <hr className="mb-5"></hr>

      <p className="mt-6 text-[18px] leading-[32px] font-medium">
     {text.educationalApproach.line1[0]}
      </p>

      <p className="mt-4 mb-5 text-[18px] leading-[32px] font-medium">
      {text.educationalApproach.line1[1]}
      </p>

      <hr className="mb-5"></hr>

      <p className="text-sm  mt-6 italic text-[18px] leading-[32px] font-medium">
        {text.educationalApproach.line1[3]}
      </p>
    </div>
  );
}
