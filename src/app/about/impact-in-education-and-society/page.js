"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Users, GraduationCap, ArrowRight, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
export default function EducationImpactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isWeblinksOpen, setIsWeblinksOpen] = useState(false); // State for Weblinks section toggle

  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    wrapHindiWords ();
  }, []);
  const { text, language } = useLanguage();

  const accordionData = [
    {
      title: text.weblinks.title,
      content: [
        {
          title: text.weblinks.content[0].title,
          content: text.weblinks.content[0].contents,
        },
        {
          title: text.weblinks.content[1].title,
          content: text.weblinks.content[1].contents,
        },
        {
          title: text.weblinks.content[2].title,
          content: text.weblinks.content[2].contents,
        },
        {
          title: text.weblinks.content[3].title,
          content: text.weblinks.content[3].contents,
        },
      ],
    },
  ];

  return (
    <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto bg-[#f2f4f8] py-8 px-3">
      <div className="">
        {/* Header */}
        <h1 className="page-heading text-left mb-12 ssr-hading">
          {text.aboutPage4.title}
        </h1>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 1 lakh+ People */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="page-small-heading text-[#B47447] mb-1 font-th">
                  {text.aboutPage4.cards.card1.title}
                </h2>
                <p className="text-[#B47447] page-content mb-3">
                  {text.aboutPage4.cards.card1.subTitle}
                </p>
                <p className="page-common-md-pera">
                  {text.aboutPage4.cards.card1.content}
                </p>
              </div>
              <div className="bg-[#B47447] p-3 rounded-lg flex-shrink-0">
                <img
                  src={"/images/about/aboutImp1.png"}
                  width={30}
                  height={30}
                  alt="image"
                />
              </div>
            </div>
          </div>

          {/* 1000 People */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="page-small-heading text-[#B47447] mb-1 font-th">
                  {text.aboutPage4.cards.card2.title}
                </h2>
                <p className="text-[#B47447] page-content mb-3">
                  {text.aboutPage4.cards.card2.subTitle}
                </p>
                <p className="page-common-md-pera">
                  {text.aboutPage4.cards.card2.content}
                </p>
              </div>
              <div className="bg-[#B47447] p-3 rounded-lg flex-shrink-0">
                <img
                  src={"/images/about/aboutImp2.svg"}
                  width={28}
                  height={28}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 1 lakh+ People */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="page-small-heading text-[#B47447] mb-1 font-th">
                  {text.aboutPage4.cards.card3.title}
                </h2>
                <p className="text-[#B47447] page-content mb-3">
                  {text.aboutPage4.cards.card3.subTitle}
                </p>
                <p className="page-common-md-pera">
                  {text.aboutPage4.cards.card3.content}
                </p>
              </div>
              <div className="bg-[#B47447] p-3 rounded-lg flex-shrink-0">
                <img
                  src={"/images/about/aboutImp3.svg"}
                  width={30}
                  height={30}
                  alt="image"
                />
              </div>
            </div>
          </div>

          {/* 1000 People */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="page-small-heading text-[#B47447] mb-1 font-th">
                  {text.aboutPage4.cards.card4.title}
                </h2>
                <p className="text-[#B47447] page-content mb-3">
                  {text.aboutPage4.cards.card4.subTitle}
                </p>
                <p className="page-common-md-pera">
                  {text.aboutPage4.cards.card4.content}
                </p>
              </div>
              <div className="bg-[#B47447] p-3 rounded-lg flex-shrink-0">
                <img
                  src={"/images/about/aboutImp4.svg"}
                  width={28}
                  height={28}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* 1 lakh+ People */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="page-small-heading text-[#B47447] mb-1 font-th">
                  {text.aboutPage4.cards.card5.title}
                </h2>
                <p className="text-[#B47447] page-content mb-3">
                  {text.aboutPage4.cards.card5.subTitle}
                </p>
                <p className="page-common-md-pera">
                  {text.aboutPage4.cards.card5.content}
                </p>
              </div>
              <div className="bg-[#B47447] p-3 rounded-lg flex-shrink-0">
                <img
                  src={"/images/about/aboutImp5.svg"}
                  width={30}
                  height={30}
                  alt="image"
                />
              </div>
            </div>
          </div>

          {/* 1000 People */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="page-small-heading text-[#B47447] mb-1 font-th">
                  {text.aboutPage4.cards.card6.title}
                </h2>
                <p className="text-[#B47447] page-content mb-3">
                  {text.aboutPage4.cards.card6.subTitle}
                </p>
                <p className="page-common-md-pera">
                  {text.aboutPage4.cards.card6.content}
                </p>
              </div>
              <div className="bg-[#B47447] p-3 rounded-lg flex-shrink-0">
                <img
                  src={"/images/about/aboutImp6.svg"}
                  width={28}
                  height={28}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Rationale Section */}
        <section className="mb-12">
          <h2 className="page-heading mb-6 mt-12 ssr-hading">
            {text.aboutPage4.rational.title}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <p className="page-content">
                {text.aboutPage4.rational.content[0]}
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
              <p className="page-content">
                {text.aboutPage4.rational.content[1]}
              </p>
            </li>
          </ul>
        </section>

        {/* In Education / Academics Section */}
        <section className="mb-12">
          <h2 className="page-heading mb-8 ssr-hading">
            {text.aboutPage4.InEducation.title}
          </h2>

          {/* Alternative Schools */}
          <div className="mb-8">
            <h3 className="page-small-heading mb-4 italic">
              {text.aboutPage4.InEducation.alternative.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: text.aboutPage4.InEducation.alternative.content[0],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: text.aboutPage4.InEducation.alternative.content[1],
                  }}
                ></p>
              </li>
            </ul>
          </div>

          {/* Interventions in the current Education System - First */}
          <div className="mb-8">
            <h3 className="page-small-heading mb-4 italic">
              {text.aboutPage4.InEducation.intervation.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: text.aboutPage4.InEducation.intervation.content[0],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: text.aboutPage4.InEducation.intervation.content[1],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: text.aboutPage4.InEducation.intervation.content[2],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: text.aboutPage4.InEducation.intervation.content[3],
                  }}
                ></p>
              </li>
            </ul>
          </div>
          {/* inhigher education */}
          <div className="mb-8">
            <h3 className="page-small-heading mb-4 italic">
              {text.aboutPage4.InEducation.higherEducation.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html:
                      text.aboutPage4.InEducation.higherEducation.content[0],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html:
                      text.aboutPage4.InEducation.higherEducation.content[1],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html:
                      text.aboutPage4.InEducation.higherEducation.content[2],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html:
                      text.aboutPage4.InEducation.higherEducation.content[3],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html:
                      text.aboutPage4.InEducation.higherEducation.content[4],
                  }}
                ></p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html:
                      text.aboutPage4.InEducation.higherEducation.content[5],
                  }}
                ></p>
              </li>
            </ul>
          </div>
          {/* In Reasearch */}
          <div className="mb-8">
            <h3 className="page-small-heading mb-4 italic">
              {text.aboutPage4.InEducation.InResearch.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: text.aboutPage4.InEducation.InResearch.content[0],
                  }}
                ></p>
              </li>
            </ul>
          </div>

          {/* Interventions in the current Education System - Second */}
          {/* <div className="mb-12">
                        <h3 className="text-xl font-bold   mb-4 italic font-th">
                            Interventions in the current Education System
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm   font-th">
                                    Started a{" "}
                                    <span className="text-[#b37446] text-medium">
                                        new alternative school
                                    </span>{" "}
                                    in Raipur based on this understanding.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm   font-th">
                                    Prerana Vidyalaya, Bemetara, CG.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm  ">
                                    Prerana Vidyalaya, Bemetara, CG.
                                </p>
                            </li>
                            <li className="flex items-start gap-3 font-th">
                                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm  ">Prerana Visame, CG.</p>
                            </li>
                        </ul>
                    </div> */}
        </section>

        {/* Video Section */}
       <section className="mb-12">
  <div className="bg-[#59524e] rounded-2xl p-6 md:p-12">
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* First Video (YouTube → iframe styled like video) */}
      <div>
        <div className="rounded-lg overflow-hidden aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ZnV7ghNf2Io"
            title="President Kalam Independence Day Speech"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p
          className="text-white mt-3 page-common-pera"
          dangerouslySetInnerHTML={{
            __html: text.aboutPage4.youtube.content[0],
          }}
        ></p>
      </div>

      {/* Second Video (Local MP4 styled same way) */}
      <div>
        <div className="rounded-lg overflow-hidden aspect-video bg-black">
          <video
            className="w-full h-full"
            controls
            src="/video/Address at the national convention on human values at IIT Delhi by the president Dr. APJ Abdul Kalam.mp4"
            title="President Kalam Independence Day Speech"
          ></video>
        </div>
        <p
          className="text-white mt-3 page-common-pera"
          dangerouslySetInnerHTML={{
            __html: text.aboutPage4.youtube.content[1],
          }}
        ></p>
      </div>

    </div>
  </div>
</section>



        {/* Our Thinking Section */}
        <section className="mb-6">
          <div className="rounded-2xl overflow-hidden">
            {/* Header */}
            <div
              className="bg-[#c1b6a3] p-6 cursor-pointer flex items-center justify-between"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2 className="page-collapse-title">
                {text.aboutPage4.row1.title}
              </h2>
              <span className="text-white text-xl font-bold">
                {isOpen ? "−" : "+"}
              </span>
            </div>

            {/* Collapsible Content */}
            {isOpen && (
              <div className="bg-white rounded-b-2xl">
                {text.aboutPage4.row1.content.map((title, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between p-4 bg-white border-b border-gray-200 last:border-b-0 ml-2"
                  >
                    <span className="page-collapse-link" dangerouslySetInnerHTML={{ __html: title }}></span>
                    <ArrowRight className="w-5 h-5   group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
          {/*links to education work*/}
        <section className="mb-6">
          <div className="rounded-2xl overflow-hidden">
            {/* Header */}
            <div
              className="bg-[#c1b6a3] p-6 cursor-pointer flex items-center justify-between"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <h2 className="page-collapse-title">
                {text.aboutPage4.row2.title}
              </h2>
              <span className="text-white text-xl font-bold">
                {isOpen1 ? "−" : "+"}
              </span>
            </div>

            {/* Collapsible Content */}
            {isOpen1 && (
              <div className="bg-white rounded-b-2xl">
                {text.aboutPage4.row2.content.map((title, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between p-4 bg-white border-b border-gray-200 last:border-b-0 ml-2"
                  >
                    <span className="page-collapse-link" dangerouslySetInnerHTML={{ __html: title }}></span>
                    <img src="/icon/link.svg" alt="arrow-right" className='h-6 w-6' />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
          {/* courses & experiments */}
        <section className="mb-12">
          <div className="rounded-2xl overflow-hidden">
            {/* Header */}
            <div
              className="bg-[#c1b6a3] p-6 cursor-pointer flex items-center justify-between"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <h2 className="page-collapse-title">
                {text.aboutPage4.row3.title}
              </h2>
              <span className="text-white text-xl font-bold">
                {isOpen2 ? "−" : "+"}
              </span>
            </div>

            {/* Collapsible Content */}
            {isOpen2 && (
              <div className="bg-white rounded-b-2xl">
                {text.aboutPage4.row3.content.map((title, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between p-4 bg-white border-b border-gray-200 last:border-b-0 ml-2"
                  >
                    <span className="page-collapse-link" dangerouslySetInnerHTML={{ __html: title }}></span>
                    <ArrowRight className="w-5 h-5   group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Weblinks Section new */}
        {/* <div className="mb-12 ">
          <div className="space-y-2">
            {accordionData.map((item, index) => (
              <div key={index} className="rounded-[16px] overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center px-4 py-6 text-left text-white text-xl font-[700] bg-[#c2b6a3]`}
                >
                  {item.title}
                  <span className="page-collapse-title">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="bg-white px-5 py-6 space-y-6">
                    {item.content.map((section, secIdx) => (
                      <div key={secIdx}>
                        <h3
                          className="page-small-heading mb-2"
                          dangerouslySetInnerHTML={{ __html: section.title }}
                        />
                        {section.line && (
                          <p
                            className="page-content italic mb-2"
                            dangerouslySetInnerHTML={{ __html: section.line }}
                          />
                        )}
                        <ul className="list-disc pl-5 space-y-1 page-content">
                          {section.content.map((link, linkIdx) => (
                            <li
                              key={linkIdx}
                              dangerouslySetInnerHTML={{ __html: link }}
                            />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}
        {/* Weblinks Section new */}
        {/* Weblinks Section */}
        {/* <section className="mb-12">
                    <div className="rounded-2xl overflow-hidden">
                        <div
                            className="flex items-center justify-between cursor-pointer bg-[#c1b6a3] p-6"
                            onClick={toggleWeblinks}
                        >
                            <h2 className="text-xl font-bold text-white font-th">
                                Weblinks to Internet References
                            </h2>
                            {isWeblinksOpen ? (
                                <Minus className="w-6 h-6 text-white hover:scale-110 transition-transform" />
                            ) : (
                                <Plus className="w-6 h-6 text-white hover:scale-110 transition-transform" />
                            )}
                        </div>

                        {isWeblinksOpen && (
                            <div className="bg-white rounded-b-2xl transition-all duration-300 ">
                                {[
                                    'Understand our Rationale for long-term Social Change',
                                    'Coexistential Education Approach',
                                    'Coexistential Educational Philosophy',
                                    'Experiments in Humane Living Systems',
                                ].map((title, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-between p-4 bg-white border-b border-gray-200 last:border-b-0 ml-2"
                                    >
                                        <span className="text-sm font-medium   font-th">
                                            {title}
                                        </span>
                                        <ArrowRight className="w-5 h-5   transition-transform" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section> */}
      </div>
    </div>
  );
}
