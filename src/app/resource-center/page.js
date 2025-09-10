"use client"
import React from 'react'
import { useLanguage } from "@/context/LanguageContext"
import { FaArrowRight } from "react-icons/fa6";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';



const Adhyayan = () => {
    const { text } = useLanguage();
    const router=useRouter();
  const sections = [
    {
      title: "Steps after Parichay Shivir | परिचय शिविर के बाद क्या करें ?",
      items: [
        {title:"What to read, watch, practice (Eng)",link:"/resource-center/Start-Adhyayan/after-parichay-en"},
        {title:"क्या पढ़ें, देखें, अभ्यास करें. (Hin)",link:"/resource-center/Start-Adhyayan/after-parichay-hin"},
        
      ],
    }
                           
  ];
    const sections2 = [
    {
      title: "Start Adhyayan | अध्ययन प्रारंभ करें ",
      items: [
        {title:"Systematic Study Roadmap (Eng)",para:"Get structured stagewise guidance for all the Stages",link:"/resource-center/Start-Adhyayan/systematic-study-roadmap-(eng)"},
        {title:"विधिवत अध्ययन मार्गदर्शिका (Hin)",para:"सभी चरणों के लिए व्यवस्थित चरणवार मार्गदर्शन प्राप्त करें",link:"/resource-center/Start-Adhyayan/systematic-study-roadmap-(Hin)"}
      
      ],
    }
    
  ];
    const sections3 = [
    {
      title: "Method of Study | अध्ययन प्रक्रिया",
      items: [
        {title:"Overview & important distinctions from traditional approaches",para:"अवलोकन एवं पारंपरिक विधियों से महत्वपूर्ण अंतर",link:"/resource-center/Start-Adhyayan/method-of-study"},
       
      ],
    }
    
  ];
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-0 max-w-5xl mx-auto">
      <h2 className="page-heading font-bold text-black mb-6 ssr-hading">
       Adhyayan Guide
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <h3 className="bg-[#C1B6A3] page-collapse-title px-5 py-4 font-semibold border-b border-[#F2F4F8]">
              {section.title}
            </h3>
            <ul className="divide-y divide-gray-300 bg-white">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between px-5 py-4 cursor-pointer" 
                  onClick={()=>router.push(item.link)}
                >
                  <span className="page-collapse-link  ">{item.title}</span>
                   <FaArrowRight size={20} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* sectiom2 */}
            <div className="space-y-6 mt-6">
        {sections2.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <h3 className="bg-[#C1B6A3] page-collapse-title px-5 py-4 font-semibold border-b border-[#F2F4F8]">
              {section.title}
            </h3>
            <ul className="divide-y divide-gray-300 bg-white">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between px-5 py-4 cursor-pointer" 
                  onClick={()=>router.push(item.link)}
                >
                  <div className='flex flex-col'>
                     <span className="page-collapse-link mb-1 ">{item.title}</span>
                  <span className="text-[#697077] page-common-pera">{item.para}</span>
                  </div>
                 
                   <FaArrowRight size={20} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* sectiom2 */}
      {/* sectiom3 */}
            <div className="space-y-6 mt-6">
        {sections3.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <h3 className="bg-[#C1B6A3] page-collapse-title px-5 py-4 font-semibold border-b border-[#F2F4F8]">
              {section.title}
            </h3>
            <ul className="divide-y divide-gray-300 bg-white">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between px-5 py-4 cursor-pointer" 
                  onClick={()=>router.push(item.link)}
                >
                  <div className='flex flex-col'>
                     <span className="page-collapse-link mb-1 ">{item.title}</span>
                  <span className="text-[#697077] page-common-pera ">{item.para}</span>
                  </div>
                   <FaArrowRight size={20} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* sectiom3 */}

    </div>
  )
}

export default Adhyayan

