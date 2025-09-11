"use client";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Backjs from "@/components/Backjs";
export default function SocietalPlanPage() {
  const { text } = useLanguage();
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
   <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
        <Backjs />
     
      {/* Page Title */}
      <h1 className=" text-2xl page-heading mb-4 text-[#5f3a02]">
        {text.OverView.title}
      </h1>
      <hr className="mb-5"></hr>

      {/* The Reasoning */}
      <section className="bg-[#dfdce2] rounded-[16px] p-6 shadow mb-8">
        <h2 className="text-center page-heading  mb-4">
          {" "}
          {text.OverView.section1.title}
        </h2>
        <p className="  page-content">
          {text.OverView.section1.content[0]}
        </p>
      </section>

      {/* For General Public Awareness */}
      <section className="bg-[#e8e8e8] rounded-[16px] p-6 shadow mb-8">
        <h2 className="mb-1 page-heading">
          {text.OverView.section2.title}
        </h2>
        <h3 className="   mb-4 page-common-hading font-semibold">
          {text.OverView.section2.subtitle}
        </h3>
        <p className=" text-center mb-4 page-content font-semibold">
          {text.OverView.section2.line}
        </p>
        <p className="  leading-relaxed page-content font-medium">
          {text.OverView.section2.content}
        </p>
      </section>

      {/* Humanization of Education */}
      <section className="bg-[#dddcc3] rounded-[16px] p-6 shadow mb-8">
        <h2 className="page-heading  mb-1 text-[24px]">
          {text.OverView.section3.title}
        </h2>
        <h3 className="   mb-4 page-common-hading font-semibold">
          {text.OverView.section3.subtitle}
        </h3>
        <p className=" text-center mb-4 page-content">
          {text.OverView.section2.line}
        </p>
        <p className="  leading-[32px] page-content font-medium">
          {text.OverView.section3.content[0]}
        </p>
        <ul className="list-disc list-outside pl-5 mt-4 space-y-2    text-[18px] font-medium">
          <li>{text.OverView.section3.content[1]} </li>
          <li>{text.OverView.section3.content[2]} </li>
          <li>{text.OverView.section3.content[3]} </li>
          <li>{text.OverView.section3.content[4]} </li>
        </ul>
      </section>

      {/* Self Governing Family based Organization */}
      <section className="bg-[#f9fafb] rounded-[16px] p-6 shadow">
        <h2 className="font-semibold   mb-1 page-heading">
         {text.OverView.section4.title}
        </h2>
        <h3 className="italic   mb-4 page-common-hading font-semibold">
          {text.OverView.section4.subtitle}
        </h3>
        <p className="italic text-center mb-4 page-common-hading font-semibold">
         {text.OverView.section4.line}
        </p>
        <p className="  leading-[32px] page-content font-medium">
        {text.OverView.section4.content[0]}
        </p>
        <p className=" mt-4  leading-[32px] page-content font-[600]">
          {text.OverView.section4.content[1]}
        </p>
        <ul className="list-disc list-outside pl-5 mt-4 space-y-2    text-[18px] font-medium">
        <li className="  leading-[32px] page-content font-medium ">
          {text.OverView.section4.content[2]}
        </li>
        </ul>
        <p className=" mt-4   leading-[32px] page-content font-[600]">
          {text.OverView.section4.content[3]}
        </p>
        <ul className="list-disc list-outside pl-5 mt-4 space-y-2    text-[18px] font-medium">
        <li className=" list-disc  leading-[32px] page-content font-medium">
    {text.OverView.section4.content[4]}
        </li>
        </ul>
         <p className="  leading-[32px] page-content font-medium">
    {text.OverView.section4.content[5]}
        </p>
      </section>
    </div>
  );
}
