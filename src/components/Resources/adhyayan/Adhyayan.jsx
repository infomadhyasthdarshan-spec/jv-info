import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Adhyayan = () => {
  const sections = [
    {
      title: 'अध्ययन प्रारंभ करें',
      items: [
        'Steps after Parichay Shivir - परिचय शिविर के बाद क्या करें?',
        'Systematic Study Roadmap (Eng)',
        'विधिवत अध्ययन मार्गदर्शिका (Hin)',
        'Method of Study - अध्ययन प्रक्रिया'
      ],
    }

  ];
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto p-4">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
        Start Adhyayan
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <h3 className="bg-[#C1B6A3] text-white px-5 py-4 font-semibold border-b border-[#F2F4F8]">
              {section.title}
            </h3>
            <ul className="divide-y divide-gray-300 bg-white">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <span className="text-[15px] font-[500]  ">{item}</span>
                  {/* Replace below with your icon */}
                  {/* <img src="/arrow-forward.png" alt="Download Icon" className="w-5 h-5 object-contain" /> */}
                  <FaArrowRight size={20} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Adhyayan

