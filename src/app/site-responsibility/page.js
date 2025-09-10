"use client";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
import {
  FaGavel,
  FaBookOpen,
  FaUserShield,
  FaEnvelope,
  FaCopyright,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
const SiteTerms = () => {
  const { text } = useLanguage();
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="min-h-screen  text-white py-10 px-4">
      <div className="max-w-5xl mx-auto bg-[#c2b6a3] backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-10 text-white">
        {/* Title */}
        <div className="border-b border-white pb-4 flex items-center gap-3">
          <FaGavel className="text-2xl" />
          <h1 className="page-heading">{text.siteResponsibility.title}</h1>
        </div>

        {/* Section 1: Purpose */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <FaBookOpen className="text-xl" />
            <h2 className="page-heading">
              {text.siteResponsibility.section1.title}
            </h2>
          </div>
          <p className="page-content">
            {text.siteResponsibility.section1.content[0]}{" "}
          </p>
          <p className="page-content">
            {text.siteResponsibility.section1.content[1]}{" "}
          </p>
          <p className="page-content">
            {text.siteResponsibility.section1.content[2]}{" "}
          </p>
        </section>

        {/* Divider */}
        <hr className="border-t border-white/30" />

        {/* Section 2: Responsibilities */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <FaUserShield className="text-xl" />
            <h2 className="page-heading">
              {text.siteResponsibility.section2.title}{" "}
            </h2>
          </div>
          <p className="page-content">
            <span className="page-small-heading">
              {text.siteResponsibility.section2.content[0]}{" "}
            </span>
            <br />
            {text.siteResponsibility.section2.content[1]}
          </p>
          <p className="page-content">
            <span className="page-small-heading">
              {text.siteResponsibility.section2.content[2]}{" "}
            </span>
            <br />
            {text.siteResponsibility.section2.content[3]}
          </p>
             <h2 className="page-heading">
              {text.siteResponsibility.section2.content[6]}{" "}
            </h2>
         
          <p className="leading-relaxed text-lg">
            {text.siteResponsibility.section2.content[7]}{" "}
          </p>
            <h2 className="page-heading">
              {text.siteResponsibility.section2.content[8]}{" "}
            </h2>
         
          <p className="leading-relaxed text-lg">
            {text.siteResponsibility.section2.content[9]}{" "}
          </p>
              <h2 className="page-heading">
              {text.siteResponsibility.section2.content[10]}{" "}
            </h2>
         
          <p className="leading-relaxed text-lg">
            {text.siteResponsibility.section2.content[11]}{" "}
          </p>
        </section>

        {/* Divider */}
        <hr className="border-t border-white/30" />

        {/* Contact */}
        <section className="space-y-2">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xl" />
            <h2 className="page-heading">
              {text.siteResponsibility.section2.content[4]}{" "}
            </h2>
          </div>
          <p className="leading-relaxed text-lg">
            {text.siteResponsibility.section2.content[5]}{" "}
          </p>
         
          
        </section>

        {/* Divider */}
        <hr className="border-t border-white/30" />

        {/* Copyright */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <FaCopyright className="text-xl" />
            <h2 className="page-heading">
              {text.siteResponsibility.section3.title}{" "}
            </h2>
          </div>
          <p className="leading-relaxed text-lg">
            {text.siteResponsibility.section3.content[0]}{" "}
          </p>
          <p className="leading-relaxed text-lg">
            {text.siteResponsibility.section3.content[1]}{" "}
          </p>
          <p className="leading-relaxed text-lg">
            {text.siteResponsibility.section3.content[2]}{" "}
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-6 text-center page-content text-white/80 border-t border-white/30">
          {text.siteResponsibility.section3
          .content[3]}{" "}
        </footer>
      </div>
    </div>
  );
};

export default SiteTerms;
