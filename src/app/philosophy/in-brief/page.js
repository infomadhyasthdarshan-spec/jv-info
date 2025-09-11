"use client"
import React from "react";
import { useLanguage } from "@/context/LanguageContext"
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
  const { text } = useLanguage();
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto bg-[#f2f4f8]   px-3 py-8">
      {/* Header */}
      <div className=" mb-8">
        <h1 className="page-heading mb-2 ssr-hading">
          {text.philosophyPage1.title}
        </h1>

        {/* Four Key Points Box */}
        <div className="p-6 rounded-lg mb-8 text-left -ml-5">
          <h2 className="page-small-heading font-bold mb-6   italic">
            {text.philosophyPage1.content.fourkey.title}
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed page-content">
            <li className="flex">
              <span className="mr-2">•</span>
              <span>
                {text.philosophyPage1.content.fourkey.content[0]}
              </span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>
                {text.philosophyPage1.content.fourkey.content[1]}
              </span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>
                {text.philosophyPage1.content.fourkey.content[2]}
              </span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>
                {text.philosophyPage1.content.fourkey.content[3]}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Background Section */}
      <div className="mb-8">
        <h2 className="page-heading mb-4 ssr-hading">{text.philosophyPage1.content.background.title}</h2>
        <p className="page-content leading-relaxed mb-4">
          {text.philosophyPage1.content.background.content[0]}
        </p>
        <p className="page-content leading-relaxed">
          {text.philosophyPage1.content.background.content[1]}
        </p>
      </div>

      {/* Salient Points */}
      <div className="bg-white rounded-2xl p-6 md:p-10 shadow-md border border-gray-200 max-w-6xl mx-auto mt-10 mb-10">
        <h2 className="page-heading text-center mb-4 ssr-hading">
          {text.philosophyPage1.Section1.title}
        </h2>
        <p className="text-center page-accordion-pera1   mb-8" dangerouslySetInnerHTML={{ __html: text.philosophyPage1.Section1.subtitle }}>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {/* Intellectual */}
          <div className="bg-[#FFF7ED] border border-[#FFE4C7] p-4 md:p-5 rounded-2xl">
            <div className="page-xsmall-hading  mb-1">
              {text.philosophyPage1.Section1.buttton.b1.title}
            </div>
            <div className="page-common-md-pera   ">
              {text.philosophyPage1.Section1.buttton.b1.content}
            </div>
          </div>
          {/* Spiritual */}
          <div className="bg-[#FFF7ED] border border-[#FFE4C7] p-4 md:p-5 rounded-2xl">
            <div className="page-xsmall-hading  mb-1">{text.philosophyPage1.Section1.buttton.b2.title}</div>
            <div className="page-common-md-pera   ">
              {text.philosophyPage1.Section1.buttton.b2.content}
            </div>
          </div>
          {/* Behavioral */}
          <div className="bg-[#FFF7ED] border border-[#FFE4C7] p-4 md:p-5 rounded-2xl">
            <div className="page-xsmall-hading  mb-1">
              {text.philosophyPage1.Section1.buttton.b3.title}
            </div>
            <div className="page-common-md-pera   ">{text.philosophyPage1.Section1.buttton.b3.content}</div>
          </div>
          {/* Material */}
          <div className="bg-[#FFF7ED] border border-[#FFE4C7] p-4 md:p-5 rounded-2xl">
            <div className="page-xsmall-hading  mb-1">{text.philosophyPage1.Section1.buttton.b4.title}</div>
            <div className="page-common-md-pera   " dangerouslySetInnerHTML={{ __html: text.philosophyPage1.Section1.buttton.b4.content }}>
              
             
            </div>
          </div>
        </div>
      </div>

      {/* It does not */}
      <div className="mb-6">
        <h2 className="page-heading text-black mb-3 italic">{text.philosophyPage1.lists.li1.title}</h2>
        <ul className=" space-y-2 page-content">
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li1.content[0]}
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li1.content[1]}
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li1.content[2]}
            </span>
          </li>
        </ul>
      </div>

      {/* It enables freedom */}
      <div className="mb-6">
        <h2 className="page-heading   mb-3 italic">
          {text.philosophyPage1.lists.li2.title}
        </h2>
        <ul className="space-y-2 page-content">
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li2.content[0]}
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>{text.philosophyPage1.lists.li2.content[1]}</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li2.content[2]}
            </span>
          </li>
        </ul>
      </div>

      {/* It is practiceable */}
      <div className="mb-6">
        <h2 className="page-heading   mb-3 italic">
          {text.philosophyPage1.lists.li3.title}
        </h2>
        <ul className=" space-y-2 page-content">
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li3.content[0]}
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li3.content[1]}
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li3.content[2]}
            </span>
          </li>
        </ul>
      </div>

      {/* It covers in living */}
      <div className="mb-8">
        <h2 className="page-heading   mb-3 italic">
          {text.philosophyPage1.lists.li4.title}
        </h2>
        <ul className=" space-y-2 page-content">
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li4.content[0]}
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li4.content[1]}
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl leading-5">•</span>
            <span>
              {text.philosophyPage1.lists.li4.content[2]}
            </span>
          </li>
        </ul>
      </div>

      {/* All-round solutions & Basic Message section */}
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-12 mt-12 border border-gray-100 ">
        <p className="text-center page-heading mb-6 " dangerouslySetInnerHTML={{ __html: text.philosophyPage1.Section2.title }}></p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10 md:p-12 ">
          <div className="bg-[#fff5e6] p-4 rounded-lg">
            <div className="page-xsmall-hading  mb-1">{text.philosophyPage1.Section2.buttons.b1.title}</div>
            <div className="page-common-md-pera   ">{text.philosophyPage1.Section2.buttons.b1.content}</div>
          </div>
          <div className="bg-[#fff5e6] p-4 rounded-lg">
            <div className="page-xsmall-hading  mb-1">{text.philosophyPage1.Section2.buttons.b2.title}</div>
            <div className="page-common-md-pera   ">
              {text.philosophyPage1.Section2.buttons.b2.content}
            </div>
          </div>
          <div className="bg-[#fff5e6] p-4 rounded-lg">
            <div className="page-xsmall-hading  mb-1">{text.philosophyPage1.Section2.buttons.b3.title}</div>
            <div className="page-common-md-pera   ">{text.philosophyPage1.Section2.buttons.b3.content}</div>
          </div>
          <div className="bg-[#fff5e6] p-4 rounded-lg">
            <div className="page-xsmall-hading  mb-1">{text.philosophyPage1.Section2.buttons.b4.title}</div>
            <div className="page-common-md-pera   ">{text.philosophyPage1.Section2.buttons.b4.content}</div>
          </div>
        </div>

        {/* Basic Message - seamlessly merged section */}
        <div className="bg-[#f4e7d3] -m-6 md:-m-10 mt-0 pt-6">
          <h2 className="text-center page-heading mb-4 ssr-hading">
            {text.philosophyPage1.Section2.BasicMessage.title}
          </h2>
          <div className="text-center page-accordion-pera space-y-8 px-6 md:px-10 pb-6">
            <p>
              {text.philosophyPage1.Section2.BasicMessage.content[0]}
            </p>
            <p>
              {text.philosophyPage1.Section2.BasicMessage.content[1]}
            </p>
            <p>
              {text.philosophyPage1.Section2.BasicMessage.content[2]}
            </p>
            <p>
              {text.philosophyPage1.Section2.BasicMessage.content[3]}
            </p>
          </div>
        </div>
      </div>

      {/* Books Image */}
      <div className="max-w-6xl mx-auto py-10">
        {/* Image at the Top */}
        <div className="flex justify-center mb-10 relative ">
          <img
            src="/images/philosophy/philosophy1.png" // replace with your actual image path
            alt="Book Stack"
            className="rounded shadow-md max-w-full w-full"
          />
        </div>

        {/* Content Container */}
        <div className="bg-white md:py-4 md:px-4 md:mx-4 rounded-2xl shadow-md space-y-5 py-5 -mt-20 md:-mt-44 z-10 relative px-3">
          {/* Section: The Literature */}
          <section className=" w-full z-30 mt-5">
            <h2 className="text-3xl font-bold text-center mb-4 ssr-hading">
              {text.philosophyPage1.TheLiterature.title}
            </h2>
            <p className="text-[20px] text-center max-w-2xl mx-auto mb-6" dangerouslySetInnerHTML={{ __html: text.philosophyPage1.TheLiterature.subTitle }}>
            </p>
            <div className="bg-orange-50 p-5 rounded-xl max-w-3xl mx-auto space-y-4 text-sm">
              <ul className="list-disc list-outside space-y-4 pl-5 page-common-md-pera">
                <li>{text.philosophyPage1.TheLiterature.list[0]}</li>
                <li>{text.philosophyPage1.TheLiterature.list[1]}</li>
                <li>{text.philosophyPage1.TheLiterature.list[2]}</li>
                <li>
                  {text.philosophyPage1.TheLiterature.list[3]}
                </li>
                <li>
                  {text.philosophyPage1.TheLiterature.list[4]}
                </li>
                <li>
                  {text.philosophyPage1.TheLiterature.list[5]}
                </li>
              </ul>
              <p className="font-semibold mt-2 mb-2 pl-3 page-common-md-pera">
                {text.philosophyPage1.TheLiterature.list[6]}
              </p>
            </div>
          </section>

          {/* Section: New Darshan */}
          <section>
            <div className="bg-[#59524e] px-6 text-white text-center py-3 rounded-t-2xl">
              <h3 className="text-lg font-semibold page-common-hading">
                {text.philosophyPage1.TheLiterature.NewDrashan.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 p-2 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 sm:py-8 md:py-9 px-4 sm:px-6 md:px-9 bg-[#fff5e6] rounded-b-md">
              {[
                {
                  title: text.philosophyPage1.TheLiterature.NewDrashan.buttons.b1.title,
                  subtitle: text.philosophyPage1.TheLiterature.NewDrashan.buttons.b1.content,
                },
                {
                  title: text.philosophyPage1.TheLiterature.NewDrashan.buttons.b2.title,
                  subtitle: text.philosophyPage1.TheLiterature.NewDrashan.buttons.b2.content,
                },
                {
                  title: text.philosophyPage1.TheLiterature.NewDrashan.buttons.b3.title,
                  subtitle: text.philosophyPage1.TheLiterature.NewDrashan.buttons.b3.content,
                },
                {
                  title: text.philosophyPage1.TheLiterature.NewDrashan.buttons.b4.title,
                  subtitle: text.philosophyPage1.TheLiterature.NewDrashan.buttons.b4.content,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 min-h-[100px] flex flex-col justify-center text-xs font-semibold text-center rounded-2xl shadow-sm"
                >
                  <div className="text-sm mb-1 page-common-md-pera">{item.title}</div>
                  <div
                    className="text-[13px] font-normal italic   page-common-pera"
                    dangerouslySetInnerHTML={{ __html: item.subtitle }}
                  />
                </div>
              ))}
            </div>
          </section>


          {/* Section: Alternative Dialectics */}
          <section>
            <div className="bg-[#59524e] text-white text-center py-3 rounded-t-2xl">
             <h3
  className="text-lg font-semibold page-common-hading"
  dangerouslySetInnerHTML={{
    __html: text.philosophyPage1.TheLiterature['Alternative Dialectics'].title
  }}
></h3>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-9 px-9 bg-[#fff5e6] rounded-b-md">
              {[
                {
                  title: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b1.title,
                  subtitle1: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b1.subTitle,
                  subtitle2: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b1.content
                },
                {
                  title: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b2.title,
                  subtitle1: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b2.subTitle,
                  subtitle2: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b2.content
                },
                {
                  title: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b2.title,
                  subtitle1: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b3.subTitle,
                  subtitle2: text.philosophyPage1.TheLiterature['Alternative Dialectics'].buttons.b3.content,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 min-h-[120px] flex flex-col justify-center text-xs font-semibold text-center rounded-2xl shadow-sm"
                >
                  <div className="text-sm mb-2 page-common-md-pera">{item.title}</div>
                  <div
                    className="font-normal italic   page-common-pera"
                    dangerouslySetInnerHTML={{ __html: item.subtitle1 }}
                  />
                  <div className="italic font-normal   mt-3 page-common-pera">
                    {item.subtitle2}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Alternative Codes for Living */}
          <section>
            <div className="bg-[#59524e] text-white text-center py-3 rounded-t-2xl">
             <h3
  className="text-lg font-semibold page-common-hading"
  dangerouslySetInnerHTML={{
    __html: text.philosophyPage1.TheLiterature['Alternative Codes'].title
  }}
></h3>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-9 px-9 bg-[#fff5e6] rounded-b-md">
              {[
                {
                  title: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b1.title,
                  subtitle1: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b1.subTitle,
                  subtitle2: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b1.content,
                },
                {
                  title: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b2.title,
                  subtitle1: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b2.subTitle,
                  subtitle2: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b2.content,
                },
                {
                  title: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b3.title,
                  subtitle1: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b3.subTitle,
                  subtitle2: text.philosophyPage1.TheLiterature['Alternative Codes'].buttons.b3.content,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 min-h-[120px] flex flex-col justify-center text-xs font-semibold text-center rounded-2xl shadow-sm"
                >
                  <div className="text-sm mb-2 page-common-md-pera">{item.title}</div>
                  <div
                    className="text-[13px] italic font-normal   page-common-pera"
                    dangerouslySetInnerHTML={{ __html: item.subtitle1 }}
                  />
                  <div className="text-[13px] italic font-normal   mt-3 page-common-pera">
                    {item.subtitle2}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Proposal Section */}
      <div className="  p-6 ">

        <h2 className="mb-4 ssr-hading  page-small-hading">{text.philosophyPage1.content1.title}</h2>
        <div className="text-sm space-y-4 page-quotes">
          <p className="page-content">
            {text.philosophyPage1.content1.content[0]}
          </p>
          <p className="page-content">
            {text.philosophyPage1.content1.content[1]}
          </p>

          <div className="bg-[#ede2d1] p-4 rounded-2xl page-quotes mt-6 space-y-5 ">
            <p className='text-center py-2 text-xl font-bold font-th'>~</p>
            <p className="text-center  ">
              {text.philosophyPage1.section3.content[0]}
            </p>
            <div className="text-center space-y-5 page-quotes ">
              <p className="page-quotes">
                {text.philosophyPage1.section3.content[1]}
              </p>
              <p className="page-quotes">{text.philosophyPage1.section3.content[2]}</p>
              <p className=" page-quotes">
                {text.philosophyPage1.section3.content[3]}
                
                <span className=" page-quotes">{text.philosophyPage1.section3.content[4]}</span>
              </p>
              <p className="page-quotes">
                सुदूर विगत से भारत से जो ‘ज्ञान’ की अपेक्षा रही, वो पूरी हो चुकी है
              </p>
            </div>
            <p className='text-center py-2 text-xl font-bold font-th'>~</p>
          </div>

          <p className="page-content  mt-4 italic
          "  dangerouslySetInnerHTML={{ __html: text.philosophyPage1.section3.line }}>
          </p>
          <h1 className="page-heading pt-5" dangerouslySetInnerHTML={{ __html: text.philosophyPage1.terms.title }} />
          <ul className="page-content list-disc pl-5 space-y-2">
            <li dangerouslySetInnerHTML={{ __html: text.philosophyPage1.terms.content[0] }} />
            <li dangerouslySetInnerHTML={{ __html: text.philosophyPage1.terms.content[1] }} />
            <li dangerouslySetInnerHTML={{ __html: text.philosophyPage1.terms.content[2] }} />
            <li dangerouslySetInnerHTML={{ __html: text.philosophyPage1.terms.content[3] }} />
            <li dangerouslySetInnerHTML={{ __html: text.philosophyPage1.terms.content[4] }} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
