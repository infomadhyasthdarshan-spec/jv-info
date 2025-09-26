"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const page = () => {
    return (
       
            <div className="bg-gray-100 justify-center lg:max-w-5xl 2xl:max-w-5xl mx-auto py-8">
                <h1 className="page-heading">Jeevan Vidya Shivir Schedule</h1>
                {/* <p className="font-bold page-content mt-10">Please see the <a className="text-[#b2917a] " href="/workshop/schedule/" target="_blank">MD App</a> for Schedule & More</p> */}

                <div className="space-y-6 mt-10">
                    <div className="border-2 border-gray-200 rounded-[16px] overflow-hidden">
                        <ul className="divide-y divide-gray-300 bg-white">
                            <a href="https://app.madhyasth.org/schedule" target="_blank">
                                <li className="flex items-center justify-between px-5 py-4 cursor-pointer" >
                                    <span className="page-collapse-link  ">Please see the MD App for Schedule & More</span>
                                    <img src="/icon/link.svg" alt="Download Icon" className="w-6 h-6 object-contain" />
                                </li>
                            </a>
                        </ul>
                    </div>

                </div>
            </div>
        
    )
}

export default page