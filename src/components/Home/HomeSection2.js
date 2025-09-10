"use client"
import { useLanguage } from '@/context/LanguageContext'
import React from 'react'
import { useRouter } from 'next/navigation'

const HomeSection2 = () => {
    const {text} = useLanguage()
    const router = useRouter()
    return (
        <div>
            <div className="flex-grow mx-[17px] md:mx-0">
                <div className="flex flex-col md:flex-row mx-auto bg-white rounded-xl overflow-hidden">
                    {/* Left side - Gray placeholder */}
                    <div className="w-full md:w-1/2 aspect-video flex-shrink-0 md:rounded-l-xl">
                        <img src='/images/Home3.jpg' alt='Home Image' className='bg-contain h-full w-full md:rounded-l-xl' />
                    </div>

                    {/* Right side - Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12 rounded-r-xl">
                        <div className="space-y-6 text-center">
                            <h2 className="text-black page-heading">
                                {/* First time here? */}
                                {text.home.section2.h1}
                            </h2>

                            <p className="  page-content">
                                {/* We invite you to explore every aspect of human living in an open, interactive dialogue. Make yourself and the world a better place. */}
                                {text.home.section2.p}
                            </p>

                            <button className="bg-[#59524E] hover:bg-[#7E746F] px-5 py-3 rounded-lg transition-colors duration-200 page-big-btn" onClick={() => router.push("/workshop")}>
                                {/* Attend Jeevan Vidya Workshop */}
                                {text.home.section2.button}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection2