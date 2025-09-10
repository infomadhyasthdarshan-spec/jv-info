"use client";
import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CollapsibleRow = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto mb-6 group">
      {/* Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center bg-white p-6 text-left rounded-t-2xl  ${
          isOpen ? " bg-white" : "border-gray-300  "
        } ${!isOpen ? "rounded-b-2xl" : ""}`}
      >
        <span
          className={`page-accordion-heading transition-colors duration-300 ${
            isOpen ? "text-black" : "text-black"
          }`}
        >
          {title}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "text-black rotate-180" : "  "
          }`}
        >
          <span className="text-3xl font-semibold">{isOpen ? "−" : "+"}</span>
        </div>
      </button>

      {/* Collapsible Content with smooth animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white h-full p-8 page-accordion-pera rounded-b-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

const HomeSection5 = () => {
  const { text } = useLanguage();
  const router = useRouter();
  return (
    <div className="bg-gradient-to-br px-3 md:px-0">
      <div className="w-full md:mx-auto">
        {/* FAQ Items */}
        <div className="space-y-2">
          <CollapsibleRow title={text.home.section5.ColRow1.q1}>
            <div className="prose prose-lg max-w-none space-y-4 h-full">
              <p className="font-th text-[20px] leading-[32px] ">
                {/* Madhyasth Darshan (Jeevan Vidya) or 'Coexistential Philosophy' is a new discovery, a 'darshan' (vision, philosophy), by A.Nagraj of India, via the method of meditative 'sadhana-samadhi-sanyama'. It propounds that 'Existence is fundamentally in the form of Coexistence'? */}
                {text.home.section5.ColRow1.ans1[0]}
              </p>
              <p className="">
                {/* Madhyasth Darshan sets forth the pursuit? of human purpose & happiness through logical and systematic exposition of existential truths. Comprehensive & permanent Happiness (material, behavioural, intellectual & spiritual well-being) is achieved via Self-realization & knowledge of fundamental-Reality. This is 'all round resolution'? */}
                {text.home.section5.ColRow1.ans1[1]}
              </p>
              <p className="">
                {/* Living with such understanding results in an Undivided Human Society & Universal Human Order. This is achieved via education for consciousness transformation & awakening? */}
                {text.home.section5.ColRow1.ans1[2]}
              </p>
              <p className="">
                {/* The 'hard problem of consciousness' has been solved. The expectation of 'knowledge' from India (Bharat) has now been completed. */}
                {text.home.section5.ColRow1.ans1[3]}
              </p>
              <button
                className="bg-[#59524e] hover:bg-[#7E746F] page-small-btn p-2 rounded-[8px]"
                onClick={() => router.push("/about")}
              >
                Read More
              </button>
            </div>
          </CollapsibleRow>

          <CollapsibleRow title={text.home.section5.ColRow2.q2}>
            <div className="prose prose-lg max-w-none space-y-4 h-full">
              <p className="">{text.home.section5.ColRow2.ans2[0]}</p>
              <p className="">{text.home.section5.ColRow2.ans2[1]}</p>
              <p className="">{text.home.section5.ColRow2.ans2[2]}</p>
              <p className="">{text.home.section5.ColRow2.ans2[3]}</p>
              <p className="">{text.home.section5.ColRow2.ans2[4]}</p>
              <p className="">{text.home.section5.ColRow2.ans2[5]}</p>
              <p className="">{text.home.section5.ColRow2.ans2[6]}</p>
              <p>
                {text.home.section5.ColRow2.ans2[7].replace(/<[^>]+>/g, "")}
              </p>

              
              <button
                className="bg-[#59524e] hover:bg-[#7E746F] page-small-btn p-2 rounded-[8px]"
                onClick={() => router.push("/about/authors-testimony")}
              >
                Read More
              </button>
            </div>
          </CollapsibleRow>
        </div>
      </div>
    </div>
  );
};

export default HomeSection5;

// 'use client'
// import React, { useState } from 'react';

// const CollapsibleRow = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="w-full max-w-4xl mx-auto mb-4">
//       {/* Toggle Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex justify-between items-center bg-white p-4 text-left rounded-[16px]"
//       >
//         <span className="font-semibold">{title}</span>
//         <span className="text-xl">{isOpen ? '−' : '+'}</span>
//       </button>

//       {/* Collapsible Content */}
//       {isOpen && (
//         <div className="bg-white p-5   space-y-4 rounded-b-[16px]">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// const HomeSection5 = () => {
//   return (
//     <div className="p-4 bg-gray-100 rounded-[16px] flex flex-col items-center">
//       <CollapsibleRow title="What is Madhyasth Darshan?">
// <p>
//   Madhyasth Darshan (Jeevan Vidya) or Coexistential &apos;Philosophy&apos; is a new discovery...
// </p>
// <p>
//   Madhyasth Darshan sets forth the pursuit of human purpose...
// </p>
// <p>
//   Living with such understanding results in an Undivided Human Society...
// </p>
// <p>
//   The &apos;hard problem of consciousness&apos; has been solved...
// </p>
// <button className='bg-[#59524e] text-white font-bold p-2 rounded-[8px]'>Read More</button>
//       </CollapsibleRow>

//       <CollapsibleRow title='The Need for this “Alternative”'>
//         <p>The study of the Human Being and study of Existence/reality is still incomplete...</p>
//         <p>Neither the paths of 'Renunciation' nor of 'Consumption' have worked...</p>
//         <p>As of the end of the 20th century, Humans continue to live in fractured identities...</p>
//         <p>For humans to continue living on this planet, reconsidering our way of life is imperative.</p>
//         <p>
//           Humans shall have to adopt this 'existence based human centric contemplation'...
//         </p>
//         <p>The possibility for humans to be imbued with 'humanness' & wisdom...</p>
//         <p>Human Race is One. Human Religion(dharma) is Universal.</p>
//         <p className='font-bold text-[12px]'>A.Nagraj, 2009</p>
//       </CollapsibleRow>
//     </div>
//   );
// };

// export default HomeSection5;
