"use client"
import React, { useState } from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
import { Search, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from 'next/navigation'
// import a from "../img/abc.jpg";

function page() {
  const router = useRouter()
  const { text, language } = useLanguage();
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="min-h-screen">
      {/* Header */}
      <main className="lg:max-w-5xl 2xl:max-w-5xl mx-auto py-8 text-left">
        {/* Title */}
        <h2 className="page-heading mb-8 font-ssr px-3 ssr-hading">
          {text.aboutPage1.about.section1.h1}
        </h2>

        {/* Introduction */}
        <div className="mb-10">
          <p className="page-content px-3">
            {text.aboutPage1.about.section1.p}
          </p>
        </div>

        {/* Philosophy Card and Contemporary Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          {/* Philosophy Card */}
          <div className="flex justify-center">
            <img
              src="/images/about/aboutMain1.png"
              alt="Philosophy"
              className="w-full md:w-96 h-auto object-cover rounded-xl mb-4"
            />
          </div>

          {/* Contemporary Challenges */}
          <div>
            <h3 className="page-big-heading mb-6 px-3 ssr-hading">
              {text.aboutPage1.about.section3.h1}
            </h3>
            <p className="page-content px-3">
              {text.aboutPage1.about.section3.p}
            </p>

            {/* Solution Diagram */}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          {/* Image div */}
          <div className="order-1 lg:order-2 flex justify-start">
            <img
              src="/images/about/aboutmain2.png"
              alt="Philosophy"
              className="w-full md:w-96 h-auto object-cover rounded-xl mb-4"
            />
          </div>

          {/* Text div */}
          <div className="order-2 lg:order-1">
            <h3 className="page-big-heading mb-6 px-3 ssr-hading">
              {text.aboutPage1.about.section4.h1}
            </h3>
            <p className="page-content px-3">
              {text.aboutPage1.about.section4.p}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="page-heading mb-6 px-3 ssr-hading">
            {text.aboutPage1.about.section5.h1}
          </h3>
          <p className="page-content px-3">
            {text.aboutPage1.about.section5.p}
          </p>
        </div>

        {/* Biography Section */}
        <div className="p-1">
          <div className="max-w mx-auto ">
            {/* Main container with image */}
            <div className="relative">
              {/* Image section */}
              <div className="relative rounded-lg shadow-2xl overflow-hidden h-[500px]">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/about/aboutMain3.png')`,
                  }}
                ></div>
              </div>


              <div className="relative -mt-24 px-6 pb-6">
                <div className="bg-white backdrop-blur-sm p-6 rounded-lg shadow-xl pt-16 pb-16  flex flex-col md:flex-row   text-sm">
                  {/* Background */}
                  <div className="flex-1 px-5 text-center pb-4 md:pb-0 ">
                    <h4 className="page-common-hading mb-2 pb-2">
                      {text.aboutPage1.about.section6.h1}
                    </h4>
                    <p className="page-common-pera">
                      {text.aboutPage1.about.section6.p1}
                    </p>
                    <p className="italic page-common-pera mt-2">
                      {text.aboutPage1.about.section6.p2}
                    </p>
                  </div>

                  {/* Scope */}
                  <div className="flex-1 px-5 text-center  py-4 md:py-0 ">
                    <h4 className="page-common-hading mb-2 pb-2">{text.aboutPage1.about.section7.h1}</h4>
                    <p className="page-common-pera">
                      {text.aboutPage1.about.section7.p1}
                    </p>
                    <p className="italic page-common-pera md:mt-8">
                      {text.aboutPage1.about.section7.p2}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="flex-1 px-5 text-center pt-4 md:pt-0">
                    <h4 className="page-common-hading mb-2 pb-2">{text.aboutPage1.about.section8.h1}</h4>
                    <p className="page-common-pera">
                      {text.aboutPage1.about.section8.p1}
                    </p>
                    <p className="italic page-common-pera mt-2">
                      {text.aboutPage1.about.section8.p2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Living Section */}
        <div className="mb-10 ">
          <h3 className="page-heading mb-6 px-3 ssr-hading">
            {text.aboutPage1.about.section9.h1}
          </h3>
          <p className="page-content px-3">
            {text.aboutPage1.about.section9.p}
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="page-heading mb-4 ssr-hading">
            {text.aboutPage1.about.section10.h1}
          </h3>
          <p className="page-content mb-6 max-w-2xl mx-auto">
            {text.aboutPage1.about.section10.p}
          </p>
          <button className="bg-[#59524E] hover:bg-[#7E746F] px-5 py-3 rounded-lg transition-colors duration-200 page-big-btn" onClick={() => router.push('/workshop')}>
            {text.aboutPage1.about.section10.button}
          </button>
        </div>
      </main>
    </div>
  );
}

export default page;
