"use client"
import { useLanguage } from '@/context/LanguageContext';
import React from 'react'


const HomeSection6 = () => {
    const { language, text } = useLanguage();
    return (
        <div className="bg-[#EDE2D1]  mt-14 md:rounded-[16px] w-full mb-16">
            <p className='text-center py-6 text-xl font-bold font-th'>~</p> 
            <p className="page-quotes text-center" dangerouslySetInnerHTML={{ __html: text.home.section6.h1 }}></p>
             <p className='text-center py-6 text-xl font-bold font-th'>~</p> 
        </div>
    )
}

export default HomeSection6