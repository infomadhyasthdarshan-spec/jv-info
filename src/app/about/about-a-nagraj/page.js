"use client";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from 'next/navigation';

const page = () => {
  const { text, language } = useLanguage();
  const router = useRouter();

  const Card = ({ title, link }) => (
    <div
      className="bg-white p-3 rounded-xl shadow hover:shadow-md transition flex items-center justify-between cursor-pointer"
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
    >
      <span className="page-nav-card-pera text-left">{title}</span>
      <span className="text-xl">
        <ArrowRight />
      </span>
    </div>
  );

  const Card2 = () => {
    const items = [
      {
        title: text.aboutPage5.section11.p1,
        description: text.links.des.d1,
        link: "/api/download/file/folder/02_divya_path_2017_ocr.pdf",
        status: true
      },
      {
        title: text.aboutPage5.section11.p2,
        description: text.links.des.d2,
        link: "/api/download/zip/public/folder/About A.Nagraj.zip",
        status: true

      },
      {
        title: text.aboutPage5.section11.p3,
        description: text.links.des.d3,
        link: "https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=24298539203",
        status: false

      },
    ];
    return (
      <div className="flex flex-col items-center w-full mb-[34px] px-3 md:px-0">
        <h2 className="page-small-hading mb-8 text-center">
          {text.aboutPage5.section11.h1}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start p-5 bg-white rounded-[16px] transition-all duration-300 border border-[#DDE1E6] cursor-pointer"
              onClick={() => router.push(item.link)}
            >
              <div>
                <h3 className="page-nav-card-heading">{item.title}</h3>
              </div>
              {/* Replace src with your icon */}
              {item.status ? <img src="/icon/install.svg" alt="link" /> : <img src="/icon/link.svg" alt="link" />}

            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto py-8 px-3 bg-gray-100   leading-relaxed">
      {/* In Brief */}
      <h2 className="page-heading mb-6 ssr-hading">{text.aboutPage5.section1.h1}</h2>
      <p className="mb-4 page-content">{text.aboutPage5.section1.p1}</p>
      <ul className="list-disc  mb-9 space-y-2 page-content">
        <li
          dangerouslySetInnerHTML={{ __html: text.aboutPage5.section1.l1 }}
        ></li>
        <li
          dangerouslySetInnerHTML={{ __html: text.aboutPage5.section1.l2 }}
        ></li>
        <li
          dangerouslySetInnerHTML={{ __html: text.aboutPage5.section1.l3 }}
        ></li>
      </ul>

      <div className="flex flex-col md:flex-row bg-[#FFF5E7] rounded-lg items-center mx-auto overflow-hidden">
        <img
          src={"/images/about/a-nagraj.png"}
          alt="Shri A Nagraj"
          className="w-full md:w-1/2 h-auto object-cover m-0 p-0"
        />
        <p className="w-full md:w-1/2 italic page-big-content p-6 md:p-14 text-center md:text-center drop-shadow-md">
          {text.aboutPage5.section2.p}
        </p>
      </div>

      {/* Early Life */}
      <h2 className="page-heading ssr-hading mt-10 mb-4">{text.aboutPage5.section2.h}</h2>
      <h2 className="page-heading italic mt-10 mb-4">
        {text.aboutPage5.section3.h1}
      </h2>
      <p className="mb-4 page-content">{text.aboutPage5.section3.p1}</p>
      <p className="mb-4 page-content">{text.aboutPage5.section3.p2}</p>

      <div className="bg-transparent w-full mx-auto my-6">
        <div className="md:relative w-full">
          <img
            src={"/images/about/1.png"}
            alt="Birthplace"
            className="w-full h-auto md:object-cover"
          />
          {/* <div className="md:absolute bottom-0 left-0 w-full px-2 py-1">
            <p className="page-content md:text-white italic text-center md:text-right drop-shadow-md">
              Shri A Nagraj’s birth place in Agrahar village
            </p>
          </div> */}
        </div>
      </div>

      <p className="mb-10 page-content">{text.aboutPage5.section3.p3}</p>

      {/* Questioning Period */}
      <h2 className="text-xl font-bold italic mb-6 font-th page-heading">
        {text.aboutPage5.section4.h1}
      </h2>
      <p className="mb-4 page-content">{text.aboutPage5.section4.p1}</p>
      <p className="mb-10 page-content">{text.aboutPage5.section4.p2}</p>
      <p className="mb-10 page-content">{text.aboutPage5.section4.p3}</p>

      {/* Sadhana - Spiritual Practice */}
      <h2 className="page-heading font-bold italic mb-8 font-th">
        {text.aboutPage5.section5.h1}
      </h2>
      <p className="mb-4 page-content">{text.aboutPage5.section5.p1}</p>

      <div className="bg-transparent w-full mx-auto my-6">
        <div className="md:relative w-full">
          <img
            src={"/images/about/2.png"}
            alt="Family Photo"
            className="w-full h-auto md:object-cover"
          />
          {/* <div className="md:absolute bottom-0 left-0 w-full px-2 py-1">
            <p className="md:text-black italic text-center md:text-right">
              Shri A Nagraj (at age ~27) with first son Hari, mataji and in-law
            </p>
          </div> */}
        </div>
      </div>

      {/* <div className="bg-white pb-1 mx-auto w-full mb-8">
                <img src={"/images/about/about2.png"} alt="Family Photo" className="w-full rounded mt-4" />
                <p className="text-xs   italic mt-1 text-center font-th">
                    Shri A Nagraj (at age ~27) with first son Hari, mataji and in-law
                </p>
            </div> */}

      {/* Realization Experience */}
      <p className="mb-8 page-content">{text.aboutPage5.section5.p2}</p>

      <div className="bg-transparent w-full mx-auto my-6">
        <div className="md:relative w-full">
          <img
            src={"/images/about/3.png"}
            alt="Family Photo"
            className="w-full h-auto md:object-cover"
          />
          {/* <div className="md:absolute bottom-0 left-0 w-full px-2 py-1">
            <p className="md:text-black italic text-center md:text-right">
              Shri A Nagraj tilling land with daughter Amba
            </p>
          </div> */}
        </div>
      </div>

      {/* In His Own Words */}
      <div className="bg-orange-100 p-8 mt-4 rounded-md shadow-md">
        <h3 className="page-heading text-center mb-4">
          {text.aboutPage5.section6.h1}
        </h3>
        <div className="flex justify-center items-center mb-4">
          <FaQuoteLeft className="text-2xl text-black" />
        </div>

        <p className="text-center max-w-3xl mx-auto page-content mb-6">
          {text.aboutPage5.section6.p1}
        </p>
        <p className="text-center max-w-3xl mx-auto page-content mb-6">
          {text.aboutPage5.section6.p2}
        </p>

        <div className="flex justify-center items-center">
          <FaQuoteRight className="text-2xl text-black" />
        </div>
      </div>

      <h2 className="page-heading italic mb-6 mt-8 font-th">
        {text.aboutPage5.section7.h1}
      </h2>
      <p
        className="mb-4 page-content"
        dangerouslySetInnerHTML={{ __html: text.aboutPage5.section7.p1 }}
      ></p>
      <p className="mb-6 page-content">{text.aboutPage5.section7.p2}</p>

      <h2 className="page-heading italic mt-10 mb-8 font-th">
        {text.aboutPage5.section8.h1}
      </h2>
      <p className="mb-8 page-content"> {text.aboutPage5.section8.p1}</p>

      <div className="bg-transparent w-full mx-auto my-6">
        <div className="md:relative w-full">
          <img
            src={"/images/about/4.png"}
            alt="Family Photo"
            className="w-full h-auto md:object-cover"
          />
          {/* <div className="md:absolute bottom-0 left-0 w-full px-2 py-1">
            <p className="md:text-white italic text-center md:text-right">
              Shri A Nagraj with Shri Rajan Sharma and others in Achoti
            </p>
          </div> */}
        </div>
      </div>

      <p className="mb-6 page-content">{text.aboutPage5.section8.p2}</p>
      <div className="bg-transparent w-full mx-auto my-6">
        <div className="md:relative w-full">
          <img
            src={"/images/about/5.png"}
            alt="Family Photo"
            className="w-full h-auto md:object-cover"
          />
          {/* <div className="md:absolute bottom-0 left-0 w-full px-2 py-1">
            <p className="md:text-white italic text-center md:text-right">
              Shri A Nagraj with daughter Amba and adhyayanarthi's in Achoti
            </p>
          </div> */}
        </div>
      </div>

      <div className="bg-orange-100 py-6 px-4 rounded-[16px] mt-5 max-w-5xl mx-auto">
        <p className="text-center py-3 text-xl font-bold font-th">~</p>
        <p
          className="text-center italic page-quotes max-w-2xl mx-auto "
          dangerouslySetInnerHTML={{ __html: text.aboutPage5.section8.p3 }}
        ></p>
        <p className="text-center py-3 text-xl font-bold font-th">~</p>
      </div>

      <h2 className="mb-6 mt-8 page-heading">{text.aboutPage5.section9.h1}</h2>
      <p className="mb-4 page-content">{text.aboutPage5.section9.p1}</p>

      <div className="bg-transparent w-full mx-auto my-6">
        <div className="md:relative w-full">
          <img
            src={"/images/about/6.png"}
            alt="Family Photo"
            className="w-full h-auto md:object-cover"
          />
          {/* <div className="md:absolute bottom-0 left-0 w-full px-2 py-1">
            <p className="md:text-white italic text-center md:text-right">
              Shri A.Nagraj with his family in Amarkantak
            </p>
          </div> */}
        </div>
      </div>

      <p className="mb-8 page-content">{text.aboutPage5.section9.p2}</p>

      <div className=" ">
        <h2 className="page-heading mb-8 ">{text.aboutPage5.section10.h1}</h2>
        <p className="mb-8 page-content">{text.aboutPage5.section10.p1}</p>

        <ul className="space-y-3 list-disc list-outside pl-5 page-content font-th">
          <li className="italic">   {text.aboutPage5.section10.h2}</li>
          <li>{text.aboutPage5.section10.l1}</li>
          <li>{text.aboutPage5.section10.l2}</li>
          <li>{text.aboutPage5.section10.l3}</li>
        </ul>
      </div>
      <div className="mb-8 mt-8 ">
        <Card2 />
      </div>

      {/* <div className="text-center">
        <h2 className="page-heading mb-8 mt-8 ">
          {text.aboutPage5.section11.h1}
        </h2>
        <div className="max-w-xl mx-auto flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col justify-between flex-1  gap-4">
            <Card title={text.aboutPage5.section11.p1} />
            <Card title={text.aboutPage5.section11.p2} />
            <Card
              title={text.aboutPage5.section11.p3}
              link={
                "https://u.pcloud.link/publink/show?code=XZQ1ksVZcvqUItYeGP7WYngnmDi4uuVHsuXV"
              }
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default page;
