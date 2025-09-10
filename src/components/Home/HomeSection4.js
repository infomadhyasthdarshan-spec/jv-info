"use client";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
const HomeSection4 = () => {
  const { text } = useLanguage();
  return (
    <section className="text-center py-14 md:py-16 w-full">
      <h2 className=" mb-4 md:px-0 px-6 page-image-heading">
        {text.home.section4.h1}
      </h2>
      <p className="mb-4 md:px-0 px-6 page-image-subheading italic">
        {text.home.section4.p1}
      </p>
      <p
        className="mb-8 max-w-3xl mx-auto md:px-0 px-6 font-[600] page-image-pera"
        dangerouslySetInnerHTML={{ __html: text.home.section4.p2 }}
      ></p>
      <img
        src="/images/hm2.png"
        alt="Coexistence illustration"
        className="w-full rounded-lg h-auto px-4"
      />
    </section>
  );
};

export default HomeSection4;
