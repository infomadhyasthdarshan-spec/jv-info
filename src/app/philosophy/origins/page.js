"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
function ContentPage() {
    const [openSections, setOpenSections] = useState(["author-message"])

    const toggleSection = (sectionId) => {
        setOpenSections((prev) => (prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]))
    }
    const { text } = useLanguage();
      useEffect(() => {
    wrapHindiWords ();
  }, []);
    return (
        <div className=" bg-gray-100">
            <div className=" py-8 space-y-6">
                {/* "Vikalp" – Authors Testimony - HEADING ONLY (NOT DROPDOWN) */}
                <div className="mx-0">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold text-[#32373b] text-center mb-4">{text.philosophyPage2.jeevanvidya.title}</h2>
                        <p className="text-[#32373b] text-center">
                            {text.philosophyPage2.jeevanvidya.subtitle}
                        </p>
                    </div>
                </div>

                {/* 'Vikalp' – 'The Alternative' - DROPDOWN */}
                {/* 'Vikalp' – 'The Alternative' - DROPDOWN */}
                <div className="mx-0">
                    <div
                        className={`flex items-center justify-between bg-[#C4B59A] hover:bg-[#B8A888] text-white p-4  shadow-sm cursor-pointer transition-colors ${openSections.includes("vikalp-alternative") ? "rounded-t-xl" : "rounded-xl"}`}
                        onClick={() => toggleSection("vikalp-alternative")}
                    >
                        <span className="page-common-hading">{text.philosophyPage2.vikalp.title}</span>
                        {openSections.includes("vikalp-alternative") ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </div>
                    {openSections.includes("vikalp-alternative") && (
                        <div className="bg-white p-6 rounded-b-xl shadow-sm">
                            <h3 className=" text-[#32373b] mb-4 page-xsmall-hading">{text.philosophyPage2.Vikal.title}</h3>
                            <p className="page-xsmall-hading">
                                {text.philosophyPage2.Vikal.content.Tra.title}
                            </p>
                            <ul className="list-disc pl-5 space-y-3 text-[#32373b] mb-6 page-common-md-pera">

                                <li>
                                    {text.philosophyPage2.Vikal.content.Tra.list[0]}
                                </li>
                                <li>
                                    {text.philosophyPage2.Vikal.content.Tra.list[1]}
                                </li>
                                <li>
                                    {text.philosophyPage2.Vikal.content.Tra.list[2]}
                                </li>
                                <li>
                                    {text.philosophyPage2.Vikal.content.Tra.list[3]}
                                </li>
                                <li>
                                    {text.philosophyPage2.Vikal.content.Tra.list[4]}
                                </li>
                            </ul>

                            <h3 className=" text-[#32373b] page-xsmall-hading mb-4">{text.philosophyPage2.Vikal.content.preface.title}</h3>
                            {/* <p className="text-[#32373b] mb-4 page-common-md-pera">{text.philosophyPage2.Vikal.content.preface.content[0]}<a href="#" className="text-blue-600 underline">{text.philosophyPage2.Vikal.content.preface.content[1]}</a></p> */}
                            <p className="text-[#32373b] mb-4 page-common-md-pera">{text.philosophyPage2.Vikal.content.preface.content[2]}</p>

                            <div className="text-[#32373b] leading-relaxed space-y-4 page-common-md-pera">
                                <p>{text.philosophyPage2.Vikal.content.preface.content[3]}</p>

                                <p>{text.philosophyPage2.Vikal.content.preface.content[4]}</p>

                                <p>{text.philosophyPage2.Vikal.content.preface.content[5]}</p>

                                <p>{text.philosophyPage2.Vikal.content.preface.content[6]}</p>
                                <p>{text.philosophyPage2.Vikal.content.preface.content[7]}</p>

                                <div className="mt-4 page-common-md-pera">
                                    <p>{text.philosophyPage2.Vikal.content.preface.content[8]}</p>
                                    <p>{text.philosophyPage2.Vikal.content.preface.content[9]}</p>
                                    <p>{text.philosophyPage2.Vikal.content.preface.content[10]}</p>
                                    <p>{text.philosophyPage2.Vikal.content.preface.content[11]}</p>
                                    <p>{text.philosophyPage2.Vikal.content.preface.content[12]}</p>
                                </div>
                            </div>

                            <h3 className=" text-[#32373b] page-xsmall-hading mb-4 mt-8">{text.philosophyPage2.Vikal.content.theBackground.title}</h3>
                            <div className="text-[#32373b] leading-relaxed space-y-4 page-common-md-pera">
                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[0]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[1]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[2]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[3]}
                                </p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[4]}
                                </p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[5]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[6]}
                                </p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[7]}</p>
                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[8]}</p>
                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[9]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[10]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[11]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[12]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[13]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[14]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[15]}</p>

                                <p>{text.philosophyPage2.Vikal.content.theBackground.content[16]}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Continue Reading…My Testimony - DROPDOWN */}
                {/* Continue Reading…My Testimony - DROPDOWN */}
                <div className="mx-0">
                    <div
                        className={`flex items-center justify-between bg-[#C4B59A] hover:bg-[#B8A888] text-white p-4  shadow-sm cursor-pointer transition-colors ${openSections.includes("my-testimony") ? "rounded-t-xl" : "rounded-xl"}`}
                        onClick={() => toggleSection("my-testimony")}
                    >
                        <span className="page-common-hading">{text.philosophyPage2.Continue.title}</span>
                        {openSections.includes("my-testimony") ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </div>
                    {openSections.includes("my-testimony") && (
                        <div className="bg-white p-6 rounded-b-xl shadow-sm">
                            <h3 className="page-xsmall-hading  text-[#32373b] mb-4">{text.philosophyPage2.Continue.content.title}</h3>

                            <div className="text-[#32373b] page-common-md-pera space-y-4 mb-6">
                                <p>{text.philosophyPage2.Continue.content.p1[0]}</p>

                                <p>{text.philosophyPage2.Continue.content.p1[1]}</p>
                            </div>

                            {/* Question Boxes */}
                            <div className="space-y-4">
                                <div className="bg-[#ede2d1] p-4 rounded-xl">
                                    <h4 className="font-bold text-[#32373b] mb-2 page-xsmall-hading">{text.philosophyPage2.Continue.content.c1.title}</h4>
                                    <ul className="text-[#32373b] space-y-3 page-common-md-pera list-disc pl-5">
                                    <li className="text-[#32373b] page-common-md-pera">{text.philosophyPage2.Continue.content.c1.subtitle}</li>
                                    </ul>
                                </div>

                                <div className="bg-[#ede2d1] p-4 rounded-xl">
                                    <h4 className="font-bold text-[#32373b] mb-2 page-xsmall-hading">{text.philosophyPage2.Continue.content.c2.title}</h4>
                                    <ul className="text-[#32373b] space-y-3 page-common-md-pera list-disc pl-5">
                                    <li className="text-[#32373b] page-common-md-pera">{text.philosophyPage2.Continue.content.c2.subtitle}</li> </ul>
                                </div>

                                <div className="bg-[#ede2d1] p-4 rounded-xl">
                                    <h4 className="font-bold text-[#32373b] mb-2 page-xsmall-hading">{text.philosophyPage2.Continue.content.c3.title}</h4>
                                    <div className="text-[#32373b] space-y-2 page-common-md-pera">
                                        <ul className="text-[#32373b] space-y-3 page-common-md-pera list-disc pl-5">
                                        <li>{text.philosophyPage2.Continue.content.c3.subtitle[0]}</li>
                                        <li>{text.philosophyPage2.Continue.content.c3.subtitle[1]}</li>
                                        <li>{text.philosophyPage2.Continue.content.c3.subtitle[2]}</li> </ul>
                                    </div>
                                </div>

                                <div className="bg-[#ede2d1] p-4 rounded-xl">
                                    <h4 className="font-bold text-[#32373b] mb-2 page-xsmall-hading">{text.philosophyPage2.Continue.content.c4.title}</h4>
                                    <ul className="text-[#32373b] space-y-3 page-common-md-pera list-disc pl-5">

                                        <li>{text.philosophyPage2.Continue.content.c4.subtitle[0]}</li>
                                        <li>{text.philosophyPage2.Continue.content.c4.subtitle[1]}</li>
                                        <li>{text.philosophyPage2.Continue.content.c4.subtitle[2]}</li>
                                        <li>{text.philosophyPage2.Continue.content.c4.subtitle[3]}</li>
                                        <li>{text.philosophyPage2.Continue.content.c4.subtitle[4]}</li>
                                        <li>{text.philosophyPage2.Continue.content.c4.subtitle[5]}</li>

                                    </ul>
                                </div>
                                <div >
                                    <p className="page-common-md-pera">{text.philosophyPage2.Continue.content.ip[0]}</p>
                                    <p className="page-common-md-pera pt-2">{text.philosophyPage2.Continue.content.ip[1]}</p>
                                    <p className="page-common-md-pera pt-1">{text.philosophyPage2.Continue.content.ip[2]}</p>
                                    <p className="page-common-md-pera pt-1">{text.philosophyPage2.Continue.content.ip[3]}</p>
                                    <p className="page-common-md-pera pt-5">{text.philosophyPage2.Continue.content.ip[4]}</p>
                                </div>

                            </div>

                            <div className="text-[#32373b] page-common-md-pera space-y-4 mt-6">
                                <p>{text.philosophyPage2.Continue.content.p2[0]}</p>

                                <p>{text.philosophyPage2.Continue.content.p2[1]}</p>

                                <p>{text.philosophyPage2.Continue.content.p2[2]}</p>

                                <p>{text.philosophyPage2.Continue.content.p2[3]}</p>

                                <p>{text.philosophyPage2.Continue.content.p2[4]}</p>

                                <p>{text.philosophyPage2.Continue.content.p2[5]}</p>

                                <p>{text.philosophyPage2.Continue.content.p2[6]}</p>

                                <p>{text.philosophyPage2.Continue.content.p2[7]}</p>

                                <p>{text.philosophyPage2.Continue.content.p2[8]}</p>

                                <div className="bg-[#ede2d1] p-4 rounded-xl my-6">
                                    <h4 className="page-xsmall-hading text-[#32373b] mb-2">{text.philosophyPage2.Continue.content.c5[0]}</h4>
                                    <ul className="space-y-2 list-disc list-outside pl-5  text-[#32373b] page-common-md-pera">
                                        <li><strong>{text.philosophyPage2.Continue.content.c5[1]}</strong></li>
                                        <li><strong>{text.philosophyPage2.Continue.content.c5[2]}</strong></li>
                                        <li><strong>{text.philosophyPage2.Continue.content.c5[3]}</strong></li>
                                        <li><strong>{text.philosophyPage2.Continue.content.c5[4]}</strong> {text.philosophyPage2.Continue.content.c5[5]}</li>
                                    </ul>
                                </div>

                                <p>{text.philosophyPage2.Continue.content.p3[0]}</p>
                                <div className="bg-[#ede2d1] p-4 rounded-xl my-6">
                                    <ul className="space-y-2 list-disc list-outside pl-5  text-[#32373b] page-common-md-pera">
                                        <li><strong>{text.philosophyPage2.Continue.content.p3[1]}</strong> {text.philosophyPage2.Continue.content.p3[2]}</li>
                                        <li><strong>{text.philosophyPage2.Continue.content.p3[3]}</strong> {text.philosophyPage2.Continue.content.p3[4]}</li>
                                        <li><strong>{text.philosophyPage2.Continue.content.p3[5]}</strong> {text.philosophyPage2.Continue.content.p3[6]}</li>
                                        <li><strong>{text.philosophyPage2.Continue.content.p3[7]}</strong> {text.philosophyPage2.Continue.content.p3[8]}</li>
                                        <li><strong>{text.philosophyPage2.Continue.content.p3[9]}</strong> {text.philosophyPage2.Continue.content.p3[10]}</li>
                                        <li><strong>{text.philosophyPage2.Continue.content.p3[11]}</strong> {text.philosophyPage2.Continue.content.p3[12]}</li>
                                    </ul>
                                </div>

                                <p className="mt-6">{text.philosophyPage2.Continue.content.p3[13]}</p>

                                <div className="bg-[#ede2d1] p-4 rounded-xl my-6 text-center">
                                    <span dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue.content.c6.line }} />
                                    <p className="text-right text-[#32373b] page-common-md-pera">{text.philosophyPage2.Continue.content.c6.author}</p>
                                    <p className="text-sm text-[#32373b] mt-4 page-common-md-pera">{text.philosophyPage2.Continue.content.c6.Note}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Continue Reading…The Alternative in Practice -Work & Behavior - DROPDOWN */}
                {/* Continue Reading…The Alternative in Practice -Work & Behavior - DROPDOWN */}
                <div className="mx-0">
                    <div
                        className={`flex items-center justify-between bg-[#C4B59A] hover:bg-[#B8A888] text-white p-4  shadow-sm cursor-pointer transition-colors ${openSections.includes("alternative-practice") ? "rounded-t-xl" : "rounded-xl"}`}
                        onClick={() => toggleSection("alternative-practice")}
                    >
                        <span className=" page-common-hading">{text.philosophyPage2.Continue1.title}</span>
                        {openSections.includes("alternative-practice") ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </div>
                    {openSections.includes("alternative-practice") && (
                        <div className="bg-white p-6 rounded-b-xl shadow-sm">
                            <h3 className="font-bold text-[#32373b] page-xsmall-hading mb-4">{text.philosophyPage2.Continue1.content.c1[0]}</h3>

                            <div className="text-[#32373b] leading-relaxed space-y-4 mb-6 page-common-md-pera">
                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[1] }}></p>
                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[2] }}></p>
                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[3] }}></p>
                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[4] }}></p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[5] }}>
                                </p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[6] }}>
                                </p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[7] }}>
                                </p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[8] }}>
                                </p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[9] }}>
                                </p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[10] }}>
                                </p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[11] }}>
                                </p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[12] }}>
                                </p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[13] }}></p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[14] }}></p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[15] }}></p>

                                <p dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue1.content.c1[16] }}>
                                </p>
                            </div>

                            {/* 4 Cards in 2x2 Grid */}
                            <div className="bg-[#ede2d1] p-6 rounded-xl mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Knowledge Card */}
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-[#32373b] mb-3 text-center page-common-md-pera">{text.philosophyPage2.Continue1.content.Cards.card1.title}</h4>
                                        <ul className="space-y-2 text-[#32373b] page-common-md-pera list-disc pl-5">
                                            <li> {text.philosophyPage2.Continue1.content.Cards.card1.content[0]}</li>
                                            <li>{text.philosophyPage2.Continue1.content.Cards.card1.content[1]}</li>
                                            <li> {text.philosophyPage2.Continue1.content.Cards.card1.content[2]}</li>
                                        </ul>
                                    </div>

                                    {/* Wisdom Card */}
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-[#32373b] mb-3 text-center page-common-md-pera">{text.philosophyPage2.Continue1.content.Cards.card2.title}</h4>
                                        <ul className="space-y-2 text-[#32373b] page-common-md-pera list-disc pl-5">
                                            <li>{text.philosophyPage2.Continue1.content.Cards.card2.content[0]}</li>
                                            <li> {text.philosophyPage2.Continue1.content.Cards.card2.content[1]}</li>
                                            <li> {text.philosophyPage2.Continue1.content.Cards.card2.content[2]}</li>
                                        </ul>
                                    </div>

                                    {/* Conduct of Humanness Card */}
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-[#32373b] mb-3 text-center page-common-md-pera">{text.philosophyPage2.Continue1.content.Cards.card3.title}</h4>
                                        <ul className="space-y-2 text-[#32373b] page-common-md-pera list-disc pl-5">
                                            <li>{text.philosophyPage2.Continue1.content.Cards.card3.content[0]}</li>
                                            <li>{text.philosophyPage2.Continue1.content.Cards.card3.content[1]}</li>
                                            <li>{text.philosophyPage2.Continue1.content.Cards.card3.content[2]}</li>
                                        </ul>
                                    </div>

                                    {/* Science Card */}
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 className="font-bold text-[#32373b] mb-3 text-center page-common-md-pera">{text.philosophyPage2.Continue1.content.Cards.card4.title}</h4>
                                        <ul className="space-y-2 text-[#32373b] page-common-md-pera list-disc pl-5">
                                            <li>{text.philosophyPage2.Continue1.content.Cards.card4.content[0]}</li>
                                            <li>{text.philosophyPage2.Continue1.content.Cards.card4.content[1]}</li>
                                            <li>{text.philosophyPage2.Continue1.content.Cards.card4.content[2]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="text-[#32373b] leading-relaxed space-y-4  page-common-md-pera">
                                <p>{text.philosophyPage2.Continue1.content.c2[0]}</p>

                                <h4 className="page-xsmall-hading pt-6">{text.philosophyPage2.Continue1.content.c2[1]}</h4>

                                <p>
                                    {text.philosophyPage2.Continue1.content.c2[2]}
                                </p>

                                <p>{text.philosophyPage2.Continue1.content.c2[3]}</p>

                                <p>
                                    {text.philosophyPage2.Continue1.content.c2[4]}
                                </p>

                                <p>{text.philosophyPage2.Continue1.content.c2[5]}</p>

                                <p>{text.philosophyPage2.Continue1.content.c2[6]}
                                </p>

                                <p>{text.philosophyPage2.Continue1.content.c2[7]}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Continue Reading….Possibilities & Conclusion - DROPDOWN */}
                {/* Continue Reading….Possibilities & Conclusion - DROPDOWN */}
                <div className="mx-0">
                    <div
                        className={`flex items-center justify-between bg-[#C4B59A] hover:bg-[#B8A888] text-white p-4  shadow-sm cursor-pointer transition-colors ${openSections.includes("possibilities-conclusion") ? "rounded-t-xl" : "rounded-xl"}`}
                        onClick={() => toggleSection("possibilities-conclusion")}
                    >
                        <span className="page-common-hading">{text.philosophyPage2.Continue2.title}</span>
                        {openSections.includes("possibilities-conclusion") ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </div>
                    {openSections.includes("possibilities-conclusion") && (
                        <div className="bg-white p-6 rounded-b-xl shadow-sm">
                            <h3 className="font-bold text-[#32373b] mb-4 page-xsmall-hading">{text.philosophyPage2.Continue2.content.c1[0]}</h3>

                            <div className="text-[#32373b] leading-relaxed space-y-4 mb-6 page-common-md-pera">
                                <p>
                                    {text.philosophyPage2.Continue2.content.c1[1]}
                                </p>

                                <p>{text.philosophyPage2.Continue2.content.c1[2]}</p>

                                <p>{text.philosophyPage2.Continue2.content.c1[3]}</p>

                                <p>{text.philosophyPage2.Continue2.content.c1[4]}</p>

                                <p>{text.philosophyPage2.Continue2.content.c1[5]}</p>

                                <p className="page-xsmall-hading">
                                    <strong>{text.philosophyPage2.Continue2.content.Cards.card1.title}</strong>
                                </p>

                                <div className="bg-[#ede2d1] p-4 rounded-xl my-4">
                                    <ol className="space-y-2 text-[#32373b] page-common-md-pera">
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card1.content[0]}</li>
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card1.content[1]}</li>
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card1.content[2]}</li>
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card1.content[3]}</li>
                                    </ol>
                                </div>

                                <p className="page-xsmall-hading"><strong>{text.philosophyPage2.Continue2.content.Cards.card2.title}</strong></p>

                                <div className="bg-[#ede2d1] p-4 rounded-xl my-4">
                                    <ol className="space-y-2 text-[#32373b] page-common-md-pera">
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card2.content[0]}</li>
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card2.content[1]}</li>
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card2.content[2]}</li>
                                    </ol>
                                </div>

                                <p className="page-xsmall-hading"><strong>{text.philosophyPage2.Continue2.content.Cards.card3.title}</strong></p>

                                <div className="bg-[#ede2d1] p-4 rounded-xl my-4 page-common-md-pera">
                                    <ol className="space-y-2 text-[#32373b] page-common-md-pera">
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card3.content[0]}</li>
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card3.content[1]}</li>
                                        <li>{text.philosophyPage2.Continue2.content.Cards.card3.content[2]}</li>
                                    </ol>
                                </div>

                                <p>{text.philosophyPage2.Continue2.content.c2[0]}</p>

                                <p>{text.philosophyPage2.Continue2.content.c2[1]}</p>

                                <p>{text.philosophyPage2.Continue2.content.c2[2]}</p>

                                <p>{text.philosophyPage2.Continue2.content.c2[3]}</p>

                                <h4 className="page-xsmall-hading  pt-10 mb-4">{text.philosophyPage2.Continue2.content.c2[4]}</h4>

                                <p >{text.philosophyPage2.Continue2.content.c2[5]}</p>
                                <p >{text.philosophyPage2.Continue2.content.c2[6]}</p>
                                <p >{text.philosophyPage2.Continue2.content.c2[7]}</p>

                                <div className="mt-6 space-y-2" dangerouslySetInnerHTML={{ __html: text.philosophyPage2.Continue2.content.c2[8] }}></div>

                                <div className="mt-6 text-center">
                                    <p className="page-common-md-pera italic text-[#32373b]">
                                        {text.philosophyPage2.Continue2.content.c2[9]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-0">
                    <p className="text-sm  ">{text.philosophyPage2.Continue2.content.c2[10]}</p>
                </div>
            </div>
        </div>
    )
}


const page = () => {
    const { text } = useLanguage();
    return (
        <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto bg-[#f2f4f8]   px-3 py-8">
             <h2 className="page-heading text-black pt-[32px] mb-2 ">
          Origin - Message & Story
        </h2>
            <div className="space-y-12 sm:space-y-16">
                {/* 1. Background Section */}
                <section>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 font-ssr">
                        {text.philosophyPage2.title}
                    </h1>
                    <div>
                        <div className="bg-[#b2a38c] text-white text-center py-4 rounded-t-xl page-common-hading">
                            {text.philosophyPage2['A Proposal for Humanness'].title}
                        </div>
                        <div className="p-4 sm:p-6   bg-white rounded-b-xl page-content">
                            <p className="mb-4">
                                {text.philosophyPage2['A Proposal for Humanness'].content[0]}
                            </p>
                            <p className="mb-4">
                                {text.philosophyPage2['A Proposal for Humanness'].content[1]}
                            </p>
                            <p className="text-right font-medium italic">{text.philosophyPage2['A Proposal for Humanness'].content[2]}</p>
                        </div>
                    </div>
                </section>

                {/* 2. Message to Humankind */}
                <section>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center font-ssr">
                        {text.philosophyPage2.section1.title.tilte}
                    </h1>
                    <p className="text-center italic   mt-2 text-sm sm:text-base">
                        {text.philosophyPage2.section1.title.subTilte}
                    </p>
                    <div className="bg-[#fff4dc] text-center italic page-quotes px-4 sm:px-6 py-4 mt-4 sm:mt-6 rounded-[16px]">
                        <p className='text-center py-3 text-xl font-bold '>~</p>
                        {text.philosophyPage2.section1.line[0]}
                        <br />
                        {text.philosophyPage2.section1.line[1]}
                        <p className='text-center py-3 text-xl font-bold '>~</p>
                    </div>
                    <div className="mt-4 sm:mt-6   space-y-4 page-content">
                        <p>
                            {text.philosophyPage2.section1.content[0]}
                        </p>
                        <p>
                            {text.philosophyPage2.section1.content[1]}
                        </p>
                        <p>
                            {text.philosophyPage2.section1.content[2]}
                        </p>
                    </div>

                    {/* List of 4 Fundamentals */}
                    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-black page-content mb-5">
                        <div
                            className="bg-white p-4 rounded-xl shadow"
                            dangerouslySetInnerHTML={{
                                __html: text.philosophyPage2.section1.button.b1
                            }}
                        ></div>
                        <div
                            className="bg-white p-4 rounded-xl shadow"
                            dangerouslySetInnerHTML={{
                                __html: text.philosophyPage2.section1.button.b2
                            }}
                        ></div>
                        <div
                            className="bg-white p-4 rounded-xl shadow"
                            dangerouslySetInnerHTML={{
                                __html: text.philosophyPage2.section1.button.b3
                            }}
                        ></div>
                        <div
                            className="bg-white p-4 rounded-xl shadow"
                            dangerouslySetInnerHTML={{
                                __html: text.philosophyPage2.section1.button.b4
                            }}
                        ></div>

                    </div>
                </section>

                {/* 3. This Proposal */}
                <section>
                    <div className="page-content italic   mb-4">
                        {text.philosophyPage2.section1.note}
                    </div>
                    <h2 className="mb-4 page-heading ssr-hading">{text.philosophyPage2.section1?.thisProposol?.title}</h2>
                    <ol className="list-decimal page-content list-outside pl-5 space-y-2  ">
                        {/* <li>
                            {text.philosophyPage2.section1.thisProposol.content}
                        </li> */}
                        <li>
                            {text.philosophyPage2.section1.thisProposol.content[0]}
                        </li>
                        <li>
                            {text.philosophyPage2.section1.thisProposol.content[1]}
                        </li>
                        <li>
                            {text.philosophyPage2.section1.thisProposol.content[2]}
                        </li>
                        <li>
                            {text.philosophyPage2.section1.thisProposol.content[3]}
                        </li>
                        <li>
                            {text.philosophyPage2.section1.thisProposol.content[4]}
                        </li>
                        <li>
                            {text.philosophyPage2.section1.thisProposol.content[5]}
                        </li>
                        <li>
                            {text.philosophyPage2.section1.thisProposol.content[6]}
                        </li>
                    </ol>
                </section>
            </div>

            <div className="">
                {/* 4. Final Statement */}
                <section className="space-y-6  w-full">
                    <p className="  italic page-content pt-4">
                        {text.philosophyPage2.section1.note2}
                    </p>

                    <div className="bg-yellow-50 py-10 rounded-[16px] px-4 md:px-15">
                        <div className="mx-auto space-y-6   page-quotes md:mx-[50px]">
                            <p className='text-center py-1 text-xl font-bold font-th'>~</p>
                            <p>
                                {text.philosophyPage2.section2.content}
                            </p>

                            <p className="text-center  italic  ">
                                {text.philosophyPage2.section2.line}
                            </p>

                            <p className="text-right italic ">
                                {text.philosophyPage2.section2.author}
                            </p>

                            <p className="text-left  text-sm  " dangerouslySetInnerHTML={{ __html: text.philosophyPage2.section2.note }}>


                            </p>
                            <p className='text-center py-1 text-xl font-bold font-th'>~</p>
                        </div>
                    </div>
                </section>
            </div>
            {/* 5. Authors Testimony */}
            <section>
                <ContentPage />
            </section>
        </div>
    );
};

export default page;