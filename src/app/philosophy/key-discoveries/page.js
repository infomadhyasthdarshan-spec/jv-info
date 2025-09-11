"use client"
import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
// Main Page Component
export default function PhilosophyPage() {
      useEffect(() => {
    wrapHindiWords ();
  }, []);
    const [openIndex, setOpenIndex] = useState(null);
    const { text } = useLanguage();

    // Key Philosophical Points
    const philosophicalPoints = text.philosophyPage4.content;

    // Implications of this Discovery for us Humans
    const implicationsRows = [
        [
            {
                title: text.philosophyPage4.row.cards.c1.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c1.content[0]}
                        </p>
                        <p className="mt-2">
                            {text.philosophyPage4.row.cards.c1.content[1]}
                        </p>
                    </>
                ),
            },
            {
                title: text.philosophyPage4.row.cards.c2.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c2.content[0]}
                        </p>
                        <p className="mt-2">
                            {text.philosophyPage4.row.cards.c2.content[1]}
                        </p>
                        <p className="mt-2">
                            {text.philosophyPage4.row.cards.c2.content[2]}
                        </p>
                    </>
                ),
            },
        ],
        [
            {
                title: text.philosophyPage4.row.cards.c3.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c3.content[0]}
                        </p>
                    </>
                ),
            },
            {
                title: text.philosophyPage4.row.cards.c4.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c4.content[0]}
                        </p>
                    </>
                ),
            },
        ],
        [
            {
                title: text.philosophyPage4.row.cards.c5.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c5.content[0]}
                        </p>
                    </>
                ),
            },
            {
                title: text.philosophyPage4.row.cards.c6.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c6.content[0]}
                        </p>
                    </>
                ),
            },
        ],
        [
            {
                title: text.philosophyPage4.row.cards.c7.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c7.content[0]}
                        </p>
                    </>
                ),
            },
            {
                title: text.philosophyPage4.row.cards.c8.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c8.content[0]}
                        </p>
                    </>
                ),
            },
        ],
        [
            {
                title: text.philosophyPage4.row.cards.c9.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c9.content[0]}
                        </p>
                    </>
                ),
            },
            {
                title: text.philosophyPage4.row.cards.c10.title,
                content: (
                    <>
                        <p>
                            {text.philosophyPage4.row.cards.c10.content[0]}
                        </p>
                        <ul className="list-disc list-outside pl-5 mt-2 page-common-md-pera  ">
                            <li>
                                {text.philosophyPage4.row.cards.c10.content[1]}
                            </li>
                            <li>
                                {text.philosophyPage4.row.cards.c10.content[2]}
                            </li>
                            <li>
                                {text.philosophyPage4.row.cards.c10.content[3]}
                            </li>
                        </ul>
                    </>
                ),
            },
        ],
    ];
    const implicationsRows1 = [
  [
    {
      title: text.philosophyPage4.row1.content.c1.title,
      content: text.philosophyPage4.row1.content.c1.content,
    },
    {
      title: text.philosophyPage4.row1.content.c2.title,
      content: (
        <div>
          <p>{text.philosophyPage4.row1.content.c2.content[0]}</p>
          <ul className="list-disc list-outside pl-5 space-y-1">
            <li className="pt-5">{text.philosophyPage4.row1.content.c2.content[1]}</li>
            <li className="pt-5">{text.philosophyPage4.row1.content.c2.content[2]}</li>
            <li className="pt-5">{text.philosophyPage4.row1.content.c2.content[3]}</li>
          </ul>
        </div>
      ),
    },
  ],
  [
    {
      title: text.philosophyPage4.row1.content.c3.title,
      content: text.philosophyPage4.row1.content.c3.content,
    },
    {
      title: text.philosophyPage4.row1.content.c4.heading,
      content: (
        <div>
          <h3 className="page-common-pera font-[600] mb-4">
            {text.philosophyPage4.row1.content.c4.subheading}
          </h3>
          <h3 className="page-common-pera font-[600]  mb-4 ">
            {text.philosophyPage4.row1.content.c4.title}
          </h3>
          <p>{text.philosophyPage4.row1.content.c4.content}</p>
        </div>
      ),
    },
  ],
  [
    {
      title: text.philosophyPage4.row1.content.c5.title,
      content: (
        <>
          <p>{text.philosophyPage4.row1.content.c5.content[0]}</p>
          <p>{text.philosophyPage4.row1.content.c5.content[1]}</p>
        </>
      ),
    },
  ],
];

    // Updated accordionData without Related Articles
    const accordionData = [
        {
            title: text.philosophyPage4.row.title,
            content: (
                <div className="w-full">
                    {implicationsRows.map((row, rowIdx) => (
                        <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {row.map((card, cardIdx) => (
                                <div
                                    key={cardIdx}
                                    className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200"
                                >
                                    <h3 className="page-xsmall-hading mb-3 ">
                                        {card.title}
                                    </h3>
                                    <div className="  page-common-md-pera pt-10">
                                        {card.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: text.philosophyPage4.row1.title,
            content: (
              <div className="w-full">
    {implicationsRows1.map((row, rowIdx) => (
      <div
        key={rowIdx}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
      >
        {row.map((card, cardIdx) => (
          <div
            key={cardIdx}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="page-xsmall-hading mb-2">
              {card.title}
            </h3>
            <div className="page-common-md-pera">{card.content}</div>
          </div>
        ))}
      </div>
    ))}
  </div>
                // <div className="bg-white px-5 py-6">
                //     <div>
                //         <h3 className="page-heading text-black mb-4">
                //             {text.philosophyPage4.row1.content.c1.title}
                //         </h3>
                //         <p className="text-black text-lg mb-8 page-content">
                //             {text.philosophyPage4.row1.content.c1.content}
                //         </p>
                //     </div>
                //     <div>
                //         <h4 className="page-heading      mb-4">
                //             {text.philosophyPage4.row1.content.c2.title}
                //         </h4>
                //         <p className="text-black mb-4 page-content">
                //             {text.philosophyPage4.row1.content.c2.content[0]}
                //         </p>
                //         <ul className="list-disc list-inside text-black mb-4 space-y-1 page-content">
                //             <li>
                //                 {text.philosophyPage4.row1.content.c2.content[1]}
                //             </li>
                //             <li>
                //                 {text.philosophyPage4.row1.content.c2.content[2]}
                //             </li>
                //             <li>
                //                 {text.philosophyPage4.row1.content.c2.content[3]}
                //             </li>
                //         </ul>
                //         <h4 className="page-heading     mb-4">
                //             {text.philosophyPage4.row1.content.c3.title}
                //         </h4>
                //         <p className="text-black mb-4 page-content">
                //             {text.philosophyPage4.row1.content.c3.content}
                //         </p>
                //         <h4 className="page-heading     mb-4">
                //             {text.philosophyPage4.row1.content.c4.heading}
                //         </h4>
                //         <h3 className="page-small-heading    mb-4">
                //             {text.philosophyPage4.row1.content.c4.subheading}
                //         </h3>
                //         <h3 className="page-small-heading    mb-4">
                //             {text.philosophyPage4.row1.content.c4.title}
                //         </h3>
                //         <p className="text-black mb-4 page-content">
                //             {text.philosophyPage4.row1.content.c4.content}
                //         </p>
                //         <h4 className="page-heading   mb-4">
                //             {text.philosophyPage4.row1.content.c5.title}
                //         </h4>
                //         <p className="text-black mb-4 page-content">
                //             {text.philosophyPage4.row1.content.c5.content[0]}
                //         </p>
                //         <p className="text-black mb-4 page-content">
                //             {text.philosophyPage4.row1.content.c5.content[1]}
                //         </p>
                //     </div>
                // </div>
            ),
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen px-3 py-8">
            {/* Key Philosophical Points Section */}
            <section className="w-full px-4 pb-10 bg-[#F2F4F8]">
                <h2 className="page-heading  mb-6   text-center ssr-hading  ">
                    {text.philosophyPage4.title}
                </h2>
                <ol className="list-decimal list-outside pl-5
                  0
                  
                  
                  
                  
                  space-y-4    page-content max-w-5xl mx-auto">
                    {philosophicalPoints.map((point, idx) => (
                        <li key={idx} className="pl-2" dangerouslySetInnerHTML={{ __html:point }} />
                    ))}
                </ol>
            </section>

            {/* See More Benefits Accordion */}
            <section className="lg:max-w-5xl 2xl:max-w-5xl mx-auto py-10">
                <h2 className="page-heading  mb-4   text-center ssr-hading">{text.philosophyPage4.heading}</h2>
                <div className="space-y-4 max-w-6xl mx-auto">
                    {accordionData.map((item, index) => (
                        <div key={index} className="rounded-[16px] overflow-hidden shadow">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between page-common-hading items-center px-4 py-4 text-left text-white bg-[#C1B6A3] transition-colors duration-200"
                            >
                                {item.title}
                                <span className="text-xl text-white">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="bg-white px-5 py-6">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Articles Section */}
            {/* <section className="w-full px-4 pt-1">
                <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto">
                    <h2 className="page-heading mb-4 text-black ssr-hading">{text.philosophyPage4.related.title}</h2>
                    <ul className="list-disc list-inside   page-content mb-4 space-y-1 ">
                        <li dangerouslySetInnerHTML={{ __html: text.philosophyPage4.related.content[0] }} />
                        <li dangerouslySetInnerHTML={{ __html: text.philosophyPage4.related.content[1] }} />

                    </ul>
                    <div className="border-t-[1px]  pt-4 pl-4 mt-6">
                        <p className="  page-content">{text.philosophyPage4.related.content[2]}</p>
                    </div>
                </div>
            </section> */}

        </div>
    );
}