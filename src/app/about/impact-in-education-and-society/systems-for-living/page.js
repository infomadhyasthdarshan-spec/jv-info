"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Backjs from "@/components/Backjs";
import { useEffect } from 'react';
import { wrapHindiWords } from '@/utils/fontInjector';
export default function SystemsForLivingPage() {
    const { text } = useLanguage();
    useEffect(() => {
        wrapHindiWords();
    }, []);
    return (
        <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
            <Backjs />

            {/* Title */}
            <h1 className="page-heading text-[#5f3a02] font-medium mb-4">
                {text.studentForLiving.title}</h1>
            <hr className="mb-5"></hr>

            {/* Hindi subtitle */}
            <p className="mb-6 page-small-heading">
                {text.studentForLiving.subtitle}
            </p>

            {/* Vision */}
            <h2 className="page-common-hading mb-4">{text.studentForLiving.section1.title}   </h2>
            <p className="mb-4 page-content">
                {text.studentForLiving.section1.content[0]}       </p>
            <ul className="list-disc list-outside space-y-2 mb-6 pl-5 page-content">
                <li>{text.studentForLiving.section1.content[1]}</li>
                <li>{text.studentForLiving.section1.content[2]}</li>
                <li>{text.studentForLiving.section1.content[3]}</li>
                <li>{text.studentForLiving.section1.content[4]}</li>
            </ul>

            <p className="mb-4 page-common-hading">
                {text.studentForLiving.section1.content[5]}
            </p>
            <ul className="list-disc list-outside pl-5 mb-6 space-y-2 page-content">
                <li>{text.studentForLiving.section1.content[6]}</li>
                <li>{text.studentForLiving.section1.content[7]}</li>
                <li>{text.studentForLiving.section1.content[8]}</li>
                <li>{text.studentForLiving.section1.content[9]}</li>
                <li>{text.studentForLiving.section1.content[10]}</li>
                <li>{text.studentForLiving.section1.content[11]}</li>
                <li>{text.studentForLiving.section1.content[12]}</li>
                <li>{text.studentForLiving.section1.content[13]}</li>
                <li>{text.studentForLiving.section1.content[14]}</li>
                <li>{text.studentForLiving.section1.content[15]}</li>
            </ul>

            <p className="mb-6 page-content">
                {text.studentForLiving.section1.content[16]}
            </p>

            {/* Implementation */}
            <h2 className="text-[24px] font-bold mb-4 mt-12">{text.studentForLiving.section2.title} </h2>
            <p className="mb-4 text-[18px] leading-[32px] font-medium">
                {text.studentForLiving.section2.content[0]}</p>

            <ul className="list-disc list-outside mb-6 pl-5 space-y-5 page-content">
                
                <li>{text.studentForLiving.section2.content[1]}</li>
                <li>{text.studentForLiving.section2.content[2]}</li>
                <li>{text.studentForLiving.section2.content[3]}</li>
                <li>{text.studentForLiving.section2.content[4]}</li>
                <li>{text.studentForLiving.section2.content[5]}</li>
                <li>{text.studentForLiving.section2.content[6]}</li>
            </ul>

            <p className="mb-6 page-content">
                {text.studentForLiving.section2.content[7]}
            </p>

            {/* More */}
            {/* <h2 className="text-[24px] font-bold mb-4">More</h2>
            <ul className="list-disc list-inside space-y-2 mb-6 text-[18px] leading-[32px] font-medium">
                <li>
                    <span to="/basic-concept" className=" underline text-red-800">
                        {text.studentForLiving.more[0]}
                    </span>
                </li>
                <li>
                    <span to="/list-of-locations" className=" underline text-red-800">
                        {text.studentForLiving.more[1]}
                    </span>
                </li>
            </ul> */}

            <hr className="mb-8"></hr>

            {/* Footer */}
            <p className="italic mt-6 page-content">
                {text.studentForLiving.more[2]}
            </p>
        </div>
    );
}
