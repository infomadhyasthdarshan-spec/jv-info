"use client"
import { useLanguage } from '@/context/LanguageContext';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const benefitsList = [
  'Cuts through the clutter. Comprehensive, Integrated view of Reality, Myself and all aspects of my Living.',
  'Move away from mysticism & blind belief. Better understand true meaning of ‘spirituality’, meditation, etc.',
  'Ascertain the ‘ultimate human purpose’ behind all the current Goals we have.',
  'Helps focus on ignored areas of Living: Behavioural, Intellectual, Spiritual and Health. Sharpens Mind, logic & intellect.',
  'Better understand other humans & inherent relationships; Find place and purpose of family life. Be a better Parent, a better Spouse, a better Brother, a better Child, a better Friend.',
  'Clarify your Relationship with Material things and money.',
  'Expand your living: Find role & meaningful participation in Society.',
  'Place yourself in the grander evolution, in the Cosmos.'
];

const page = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { text } = useLanguage()
  const accordionData = [
    {
      title: text.workshopPage3['for Student'].title,
      content:
        <>
          <p className=" mb-2">{text.workshopPage3['for Student'].subtitle}</p>
          <ul className="list-disc list-outside ml-5 space-y-1 page-common-md-pera  ">
            {
              text.workshopPage3['for Student'].content.map((item, inx) => {
                return <li key={inx}>{item}</li>
              })
            }
          </ul>
        </>
      ,
    },
    {
      title: text.workshopPage3['for Adults/Parents'].title,
      content:
        <>
          <ul className="list-disc list-outside ml-5 space-y-1 page-common-md-pera  ">
            {
              text.workshopPage3['for Adults/Parents'].content.map((item, inx) => {
                return <li key={inx}>{item}</li>
              })
            }
          </ul>
        </>
      ,
    },
    {
      title: text.workshopPage3['For Thinkers, Activists'].title,
      content:
        <>
          <ul className="list-disc list-outside ml-5 space-y-1 page-common-md-pera  ">
            {
              text.workshopPage3['For Thinkers, Activists'].content.map((item, inx) => {
                return <li key={inx}>{item}</li>
              })
            }
          </ul>
        </>
      ,
    },
    {
      title: text.workshopPage3['Natural Scientists'].title,
      content:
        <>
          <ul className="list-disc list-outside ml-5 space-y-1 page-common-md-pera  ">
            {
              text.workshopPage3['Natural Scientists'].content.map((item, inx) => {
                return <li key={inx}>{item}</li>
              })
            }
          </ul>
        </>
      ,
    },
    {
      title: text.workshopPage3['For Spiritualists, Philosophers'].title,
      content:
        <>
          <ul className="list-disc list-outside ml-5 space-y-1 page-common-md-pera  ">
            {
              text.workshopPage3['For Spiritualists, Philosophers'].content.map((item, inx) => {
                return <li key={inx}>{item}</li>
              })
            }
          </ul>
        </>
      ,
    },
    {
      title: text.workshopPage3['For Psychology, Cognitive Sciences'].title,
      content:
        <>
          <ul className="list-disc list-outside ml-5 space-y-1 page-common-md-pera  ">
            {
              text.workshopPage3['For Psychology, Cognitive Sciences'].content.map((item, inx) => {
                return <li key={inx}>{item}</li>
              })
            }
          </ul>
        </>
      ,
    },
    {
      title: text.workshopPage3['For Social, Economic Sciences'].title,
      content:
        <>
          <ul className="list-disc list-outside ml-5 space-y-1 page-common-md-pera  ">
            {
              text.workshopPage3['For Social, Economic Sciences'].content.map((item, inx) => {
                return <li key={inx}>{item}</li>
              })
            }
          </ul>
        </>
      ,
    },

    {
      title: text.workshopPage3['For Religionists'].title,
      content:
        <>
          <p className="font-semibold mb-2">{text.workshopPage3['For Religionists'].subtitle}</p>
          <ul className="list-disc list-outside ml-5 space-y-1 page-common-md-pera  ">
            {
              text.workshopPage3['For Religionists'].content.map((item, inx) => {
                return <li key={inx}>{item}</li>
              })
            }
          </ul>
        </>
      ,
    },
  ];
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
     useEffect(() => {
    wrapHindiWords ();
  }, []);

  return (
    <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto md:mx-auto py-8">
      <div className="">
        <h1 className="page-heading pb-5 font-ssb px-3 ssr-hading">
          {text.workshopPage3['workshop-benifits'].benifits}
        </h1>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
          {text.workshopPage3['workshop-benifits'].content.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4   leading-relaxed font-th h-full flex flex-col justify-start"
            >
              <h3 className="page-xsmall-hading font-bold mb-2 text-black">{benefit.title}</h3>
              <p className="page-common-md-pera   ">{benefit.description}</p>
            </div>
          ))}
        </div> */}
      </div>
      {/* collapsible row started */}
      <div className="py-5">
        {/* <h2 className="page-heading mb-4 font-ssr px-3 ssr-hading">{text.workshopPage3['More Benifits']}</h2> */}
        <div className="space-y-4 px-3">
          {accordionData.map((item, index) => (
            <div key={index} className=" rounded-[16px] overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex page-common-hading justify-between items-center px-4 py-4 text-left text-white ${openIndex === index ? 'bg-[#C1B6A3] ' : 'bg-[#C1B6A3]'
                  }`}
              >
                {item.title}
                <span className="text-xl  text-white">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && item.content && (
                <div className="bg-white px-5 py-6 text-[20px] ">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
