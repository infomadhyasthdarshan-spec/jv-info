"use client";
import Backjs from "@/components/Backjs";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
       useEffect(() => {
    wrapHindiWords ();
  }, []);
    const { text } = useLanguage();
    const cards = [
        {
            title: text.philosophyPage3.cards.card1.title,
            content: text.philosophyPage3.cards.card1.content,
        },
        {
            title: text.philosophyPage3.cards.card2.title,
            content: text.philosophyPage3.cards.card2.content,
        },
        {
            title: text.philosophyPage3.cards.card3.title,
            content: text.philosophyPage3.cards.card3.content,
        },
        {
            title: text.philosophyPage3.cards.card4.title,
            content: text.philosophyPage3.cards.card4.content,
        },
        {
            title: text.philosophyPage3.cards.card5.title,
            content: text.philosophyPage3.cards.card5.content,
        }
    ];
    const points = [
        {
            title: text.philosophyPage3.c2[0],
            content: text.philosophyPage3.c2[1]
        },
        {
            title: text.philosophyPage3.c2[2],
            content:
                text.philosophyPage3.c2[3]
        },
        {
            title: text.philosophyPage3.c2[4],
            content: text.philosophyPage3.c2[5],
        },
        {
            title: text.philosophyPage3.c2[6],
            content: text.philosophyPage3.c2[7],
        },
        {
            title: text.philosophyPage3.c2[8],
            content:
                text.philosophyPage3.c2[9],
        },
        {
            title: text.philosophyPage3.c2[10],
            content: text.philosophyPage3.c2[11],
        },
        {
            title: text.philosophyPage3.c2[12],
            content: text.philosophyPage3.c2[13],
        },
        {
            title: text.philosophyPage3.c2[14],
            content: text.philosophyPage3.c2[15],
        },
        {
            title: text.philosophyPage3.c2[16],
            content: text.philosophyPage3.c2[17],
        },
        {
            title: text.philosophyPage3.c2[18],
            content: text.philosophyPage3.c2[19],
        },
    ];
    return (
        <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
            <Backjs />
            {/* background */}
            {/* 1. Background Section */}
            <section className="mb-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 font-ssr">
                    {text.philosophyPage2.title}
                </h1>
                <div>
                    <div className="bg-[#b2a38c] page-common-hading text-white text-center py-4 rounded-t-xl">
                        {text.philosophyPage3.title}
                    </div>
                    <div className="p-4 sm:p-6   bg-white rounded-b-xl page-content">
                        <p className="mb-4">
                            {text.philosophyPage3.description[0]}
                        </p>
                        <p className="mb-4">
                            {text.philosophyPage3.description[1]}
                        </p>
                    </div>
                </div>
            </section>

            {/* background */}

            {/* yellow section */}
            <div className="w-full bg-[#EDE2D1] rounded-xl ">
                <p className='text-center py-6 text-xl font-bold font-th'>~</p> 
                <h1 className=" text-center  py-4 page-quotes">
                    {text.philosophyPage3.section1[0]}
                </h1>
                <div className=" text-center  py-4 page-quotes">
                    <span dangerouslySetInnerHTML={{ __html: text.philosophyPage3.section1[1] }}></span>
                    <h1 className=" text-center text-[e human-being has been understood21px] py-4" dangerouslySetInnerHTML={{ __html: text.philosophyPage3.section1[2] }}>
                    </h1>
                </div>
                <p className='text-center py-6 text-xl font-bold font-th'>~</p> 
            </div>
            {/* yellow section */}


            {/*Finding */}
            <section className="mb-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 font-ssr">

                </h1>
                <div>
                    <div className="bg-[#b2a38c] text-white text-center py-4 rounded-t-xl page-common-hading">
                        {text.philosophyPage3.finding.heading}
                    </div>
                    <div className="p-4 sm:p-6   bg-white rounded-b-xl page-content">
                        <p className="mb-4 text-center">
                            {text.philosophyPage3.finding.head}
                        </p>
                        <p className="mb-4 text-center page-common-hading">
                            {text.philosophyPage3.finding.subHeading}
                        </p>
                        <p className="mb-4">
                            {text.philosophyPage3.finding.para}
                        </p>
                    </div>
                </div>
            </section>

            {/* Finding */}

            {/* card */}

            <div className="min-h-auto bg-gray-100 py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col"
                        >
                            <h2 className="page-xsmall-hading   mb-4">
                                {card.title}
                            </h2>
                            <p className="  page-common-pera whitespace-pre-line">
                                {card.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* card */}

            {/* natural human */}
            <div className="bg-white p-5 rounded-[16px]  mt-4">
                <h1 className=" text-center page-common-hading py-4">
                    {text.philosophyPage3["The Nature"].title}
                </h1>
                <p className="page-common-md-pera">
                    {text.philosophyPage3["The Nature"].content[0]}
                </p>
                <p className="page-common-md-pera">
                    {text.philosophyPage3["The Nature"].content[1]}
                </p>
                <p className="page-common-md-pera">
                    {text.philosophyPage3["The Nature"].content[2]}
                </p>
            </div>
            {/* natural human */}

            {/* yellow section */}

            <div className="w-full bg-[#fbfaf3] p-5 rounded-[16px] mt-4">
                <h1 className="page-common-hading">
                    {text.philosophyPage3.c1[0]}
                </h1>
                <ul className="list-disc list-inside space-y-3 py-5    page-common-md-pera">
                    <li>{text.philosophyPage3.c1[1]}</li>
                    <li>{text.philosophyPage3.c1[2]}</li>
                    <li>{text.philosophyPage3.c1[3]}</li>
                </ul>
               
            </div>
            {/* yellow section */}

            {/* section */}

            <div className="mt-5 mb-10">
                <div className="bg-white rounded-[16px] p-8">
                    <h2 className="page-common-hading   mb-6">
                        {text.philosophyPage3.section2.title}
                    </h2>

                    <p className="  page-common-md-pera mb-4">
                        {text.philosophyPage3.section2.content[0]}
                    </p>

                    <p className="  page-common-md-pera mb-4">
                        {text.philosophyPage3.section2.content[1]}
                    </p>

                    <ul className="list-disc list-inside space-y-2   page-common-md-pera mb-6">
                        <li dangerouslySetInnerHTML={{ __html: text.philosophyPage3.section2.content[2] }}></li>
                        <li dangerouslySetInnerHTML={{ __html: text.philosophyPage3.section2.content[3] }}></li>
                        <li dangerouslySetInnerHTML={{ __html: text.philosophyPage3.section2.content[4] }}></li>
                        <li dangerouslySetInnerHTML={{ __html: text.philosophyPage3.section2.content[5] }}></li>
                    </ul>

                    <p className="  page-common-md-pera">
                        {text.philosophyPage3.section2.content[6]}
                    </p>
                </div>
            </div>
            {/* section */}


            {/* summary */}

            <div className="">
                <div className="bg-white shadow-md rounded-2xl p-8">
                    <h2 className="page-common-hading   mb-6">{text.philosophyPage3.summary[0]}</h2>

                    <ol className="list-decimal list-inside space-y-4   page-common-md-pera">
                        <li>
                            {text.philosophyPage3.summary[1]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[2]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[3]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[4]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[5]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[6]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[7]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[8]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[9]}
                        </li>
                        <li>
                            {text.philosophyPage3.summary[10]}
                        </li>
                    </ol>
                </div>
            </div>
            {/*       summary */}

            {/* CARD */}
            <div className="bg-[#FFF5E7] py-10 px-4 sm:px-6 lg:px-16 rounded-xl mt-5">
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                        <h2 className="page-small-heading   mb-4">
                            {text.philosophyPage3.cards2.c1.title}
                        </h2>
                        <ul className="list-disc list-inside   space-y-2 page-content">
                            <li>{text.philosophyPage3.cards2.c1.content[0]}</li>
                            <li>{text.philosophyPage3.cards2.c1.content[1]}</li>
                            <li>{text.philosophyPage3.cards2.c1.content[2]}</li>
                            <li>{text.philosophyPage3.cards2.c1.content[3]}</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                        <h2 className="page-small-heading   mb-4">
                        {text.philosophyPage3.cards2.c2.title}
                        </h2>
                        <ul className="list-disc list-inside   space-y-2 page-content">
                            <li>{text.philosophyPage3.cards2.c2.content[0]}</li>
                            <li>{text.philosophyPage3.cards2.c2.content[1]}</li>
                            <li>{text.philosophyPage3.cards2.c2.content[2]}</li>
                            <li>{text.philosophyPage3.cards2.c2.content[3]}</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* CARD */}

            {/* UL */}
            <div className="   bg-white  mt-8 mx-3 md:mx-0">
                <div className="bg-[#b2a38c] text-white text-center py-4 rounded-t-xl page-common-hading">
                    {text.philosophyPage3.heading}
                </div>
                <ul className="space-y-4 p-10 list-disc">
                    {points.map((point, index) => (
                        <div key={index}>
                            <h3 className="page-content font-bold">{point.title}</h3>
                            <ul className="list-outside list-disc pl-8">
                             <li  className="pb-5 pl-1">
                            <p className="page-content ">{point.content}</p>
                        </li></ul>
                        </div>
                       
                    ))}
                </ul>
            </div>
            {/* UL */}
            {/* li */}
            <div className="mt-10 mx-3 md:mx-0">

                <h2 className="page-content  mb-6">{text.philosophyPage3.c3[0]}</h2>
                <h2 className="page-content font-bold  mb-6 ">{text.philosophyPage3.c3[1]}</h2>
                <h2 className="page-content  mb-6 ">{text.philosophyPage3.c3[2]}</h2>
                <h2 className="page-content  mb-6 ">{text.philosophyPage3.c3[3]}</h2>
                <h2 className="page-content  mb-6 ">{text.philosophyPage3.c3[4]}</h2>
                <h2 className="page-content font-bold mb-6">{text.philosophyPage3.c3[5]}</h2>
            </div>
            {/* li */}
            {/* container*/}
            <hr className="  m-10 w-full" />
            <div className="mx-3 md:mx-0">
                <h2 className="font-bold page-content mb-6 ">{text.philosophyPage3['sadhana-samadhi-sanyam'][0]}
                </h2>
                <ul className="list-disc list-inside space-y-2 page-content">
                    <li>{text.philosophyPage3['sadhana-samadhi-sanyam'][1]}</li>
                    <li>{text.philosophyPage3['sadhana-samadhi-sanyam'][2]}</li>
                    <li>{text.philosophyPage3['sadhana-samadhi-sanyam'][3]}</li>

                </ul>
                <hr className="  m-10 w-full" />
                <h2 className="page-content font-bold mb-6 ">{text.philosophyPage3['sadhana-samadhi-sanyam'][4]}</h2>
            </div>
            {/* container*/}
        </div>
    );
};

export default page;