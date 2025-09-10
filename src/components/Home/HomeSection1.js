"use client"
import { useLanguage } from '@/context/LanguageContext';
import React from 'react'


const HomeSection1 = () => {
    const {  language ,text } = useLanguage();
    console.log(language)
    return (
        <div>
            <section className="text-center py-10">
                <h1 className={`text-[32px] sm:text-[42px] md:text-[42px] lg:text-[42px] font-bold  mb-2 `}>{text.home.section1.h1}</h1>
                <p className={`text-[20px] sm:text-[22px] font-th px-10 ${language === "en" ? "font-th" : "font-th"}`}>{text.home.section1.p}</p>
            </section>
        </div>
    )
}

export default HomeSection1