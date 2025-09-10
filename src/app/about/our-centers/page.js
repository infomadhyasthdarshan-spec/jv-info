"use client"
import { useLanguage } from "@/context/LanguageContext"
import { ArrowRight, User, Phone, Mail } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
export default function page() {
    const { text } = useLanguage()
    const router = useRouter()
      useEffect(() => {
    wrapHindiWords ();
  }, []);
    return (
        <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto bg-gray-100 px-3 font-th py-8">
            <div className="space-y-8">
                {/* Header Caution Note */}
                <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm" onClick={() => router.push('/about/our-centers/important-note/adhyayan-center-indore-mp')}>
                    <span className="text-[#ff2929] page-content">{text.aboutPage7.section1.h}</span>
                    <ArrowRight className="w-5 h-5  " />
                </div>
                     <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm cursor-pointer" onClick={() => router.push('/about/our-centers/important-note')}>
                    <span className="text-[#32373b] page-content font-bold">{text.aboutPage7.section6.h1}</span>
                    <ArrowRight className="w-5 h-5  " />
                </div>

                {/* Introduction Paragraph */}
                <div className="rounded-xl">
                    <p className="text-[#32373b]  page-content">
                        {text.aboutPage7.section1.p1}
                    </p>
                </div>

                {/* Two Cards Section */}
                <div className="bg-[#fff5e6] py-8 px-4 sm:px-10 rounded-none sm:rounded-xl">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm mx-2 sm:mx-0">
                            <h3 className="font-bold page-xsmall-hading   mb-4">{text.aboutPage7.section1.card1.h1}</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="  mr-2 page-common-hading">•</span>
                                    <span className="text-[#32373b] page-content max-w-94">
                                        {text.aboutPage7.section1.card1.p}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm mx-2 sm:mx-0">
                            <h3 className="font-bold page-xsmall-hading   mb-4">{text.aboutPage7.section1.card2.h1}</h3>
                            <ul className="space-y-2 page-content">
                                <li className="flex items-start">
                                    <span className="  mr-2">•</span>
                                    <span className="text-[#32373b] max-w-94">
                                        {text.aboutPage7.section1.card2.p1}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                {/* Self-funded locations paragraph */}
                <div className="mt-4 rounded-xl">
                    <p className="text-[#32373b] page-content ">
                       {text.aboutPage7.section1.card2.p2}
                    </p>
                </div>

                {/* Centered Quote */}
                <div className="bg-white  text-center sm:py-3 sm:rounded-xl" >
                 <p className='text-center py-3 text-xl font-bold font-th'>~</p> 
                    <p className="page-quotes "dangerouslySetInnerHTML={{__html: text.aboutPage7.section2.p1}}/>
                     <p className='text-center py-3 text-xl font-bold font-th'>~</p> 
                </div>


                {/* Individual Contacts */}
                <div className="rounded-xl mt-12">
                    <p className="text-[#32373b] page-content" dangerouslySetInnerHTML={{__html: text.aboutPage7.section2.p2}}>
                    </p>
                </div>

                {/* Our Centres Heading */}
                <h2 className="page-heading   mb-12 ssr-hading">{text.aboutPage7.section3.h1}</h2>

                {/* Centres Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Achoti, Raipur */}
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                        <h3 className="page-xsmall-hading   ">{text.aboutPage7.section3.card1.p1}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">{text.aboutPage7.section3.card1.p2}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4  " />
                                <span className="text-[#32373b] page-common-md-pera">98930-25307</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4  " />
                                <span className="text-[#32373b] page-common-md-pera">rathore.civil@gmail.com</span>
                            </div>
                        </div>
                        <a target="_blank" href="https://www.facebook.com/JeevanVidyaConnectAchhoti?mibextid=ZbWKwL"  className="inline-block mx-auto md:mx-0 bg-[#59524f] hover:bg-[#7E746F] page-small-btn  px-4 py-2 rounded-xl font-medium transition-colors">
                            {text.aboutPage7.section3.card1.button}
                        </a>

                    </div>

                    {/* Bemetara, CG */}
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                        <h3 className="page-xsmall-hading  ">{text.aboutPage7.section3.card2.p1}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4 page-common-md-pera  " />
                                <span className="text-[#32373b] page-common-md-pera">{text.aboutPage7.section3.card2.p2}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 page-common-md-pera  " />
                                <span className="text-[#32373b] page-common-md-pera">8458838377</span>
                            </div>
                        </div>
                        <a href="http://manavteerth.info/" target="_blank" className="inline-block mx-auto md:mx-0 bg-[#59524f] hover:bg-[#7E746F] page-small-btn  px-4 py-2 rounded-xl font-medium transition-colors">
                            {text.aboutPage7.section3.card1.button}
                        </a>

                    </div>

                    {/* Bemetara, CG (Manav Teerth) - Second instance
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                        <h3 className="page-xsmall-hading  ">Bemetara, CG (Manav Teerth)</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4 page-common-md-pera  " />
                                <span className="text-[#32373b] page-common-md-pera">Vinayak</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">88269-39310</span>
                            </div>
                        </div>
                        <button className="inline-block mx-auto md:mx-0 bg-[#59524f] hover:bg-[#7E746F] page-small-btn  px-4 py-2 rounded-xl font-medium transition-colors">
                            Visit Website
                        </button>

                    </div> */}

                    {/* Hapud, NCR Delhi */}
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                        <h3 className="page-xsmall-hading  ">Hapud, NCR Delhi (Abhyuday Sansthan)</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">Sanjeev</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">88826-27096</span>
                            </div>
                        </div>
                        <a href="https://jvhapur.in/" target="_blank" className="inline-block mx-auto md:mx-0 bg-[#59524f] hover:bg-[#7E746F] page-small-btn px-4 py-2 rounded-xl font-medium transition-colors">
                            Visit Website
                        </a>
                    </div>

                    {/* Bijnor, UP */}
                    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
                        <h3 className="page-xsmall-hading  ">{text.aboutPage7.section3.card5.p1}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 page-common-md-pera">
                                <User className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">{text.aboutPage7.section3.card5.p2}</span>
                            </div>
                            <div className="flex items-center gap-3 page-common-md-pera">
                                <Phone className="w-4 h-4  " />
                                <span className="text-[#32373b]">94122-18178</span>
                            </div>
                        </div>
                       

                    </div>

                    {/* Raipur School */}
                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <h3 className="page-xsmall-hading  ">{text.aboutPage7.section3.card6.p1}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">{text.aboutPage7.section3.card6.p2}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">90097-78000</span>
                            </div>
                        </div>
                        <a href="https://www.facebook.com/abhibhavakvidyalay/"  target="_blank"  className="inline-block mx-auto md:mx-0 bg-[#59524f] hover:bg-[#7E746F] page-small-btn  px-4 py-2 rounded-xl font-medium transition-colors">
                            {text.aboutPage7.section3.card1.button}
                        </a>

                    </div>
                          {/*parda buldhana*/}
                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <h3 className="page-xsmall-hading  ">{text.aboutPage7.section3.card7.p1}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">{text.aboutPage7.section3.card7.p2}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">94045-08107</span>
                            </div>
                        </div>
                        {/* <button className="inline-block mx-auto md:mx-0 bg-[#59524f] hover:bg-[#7E746F] page-small-btn  px-4 py-2 rounded-xl font-medium transition-colors">
                            {text.aboutPage7.section3.card1.button}
                        </button> */}

                    </div>
                          {/*Vishnagar Gujrat*/}
                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <h3 className="page-xsmall-hading  ">{text.aboutPage7.section3.card8.p1}</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">{text.aboutPage7.section3.card8.p2}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4   page-common-md-pera" />
                                <span className="text-[#32373b] page-common-md-pera">88661-19272</span>
                            </div>
                        </div>
                        {/* <button className="inline-block mx-auto md:mx-0 bg-[#59524f] hover:bg-[#7E746F] page-small-btn  px-4 py-2 rounded-xl font-medium transition-colors">
                            {text.aboutPage7.section3.card1.button}
                        </button> */}

                    </div>
                </div>

                {/* Bottom Section */}
                {/* Desktop View: Visible on sm and above */}
                <div className="hidden sm:flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#fff5e6] p-4 rounded-xl shadow-sm">
                    <span className="text-[#32373b] page-content">{text.aboutPage7.section4.h1}</span>
                    <button className="bg-[#59524E] hover:bg-[#7E746F] px-5 py-3 rounded-lg transition-colors duration-200 page-small-btn"
                    onClick={() => {
                        router.push('/about/contact-us?location=1')
                    }}>
                        {text.aboutPage7.section4.button}
                    </button>
                </div>

                {/* Mobile View: Visible below sm */}
                <div className="sm:hidden">
                    <h2 className="text-3xl font-extrabold   mb-8 pl-10">{text.aboutPage7.section4.button}</h2>

                    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm" onClick={() => {
                        router.push('/about/contact-us?location=1')
                    }}>
                        <span className="text-[#32373b] font-medium max-w-56">{text.aboutPage7.section4.h1}</span>
                        <ArrowRight className="w-5 h-5  " />
                    </div>

                    {/* Solid line below, visible only on mobile */}
                    {/* <hr className="border-t border-gray-500 mt-8" /> */}
                </div>


                {/* Footer Note */}
           
            </div>
        </div>
    )
}
