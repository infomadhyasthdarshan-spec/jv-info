"use client"
import { ArrowRight, Download } from "lucide-react";

const MethodOfStudy = () => {
    return (
        <div className="bg-[#f1f3f9] lg:max-w-5xl 2xl:max-w-5xl mx-auto py-8 px-4 md:px-0">
            <div className=" mx-auto space-y-6">

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold">
                    Method of Study - <span className="font-normal">अध्ययन प्रक्रिया</span>
                </h1>

                {/* Section 1: English */}
                <div className="rounded-xl overflow-hidden bg-white">
                    <div className="bg-[#C1B6A3] px-4 py-3 text-white font-semibold page-collapse-title">
                        About Adhyayan (English, by Students)
                    </div>
                    <div className="bg-[#FFF5E7] px-4 py-2 text-[16px]">
                        The following has been written by a practicing student and must be treated likewise.
                    </div>
                    <div className="">
                        {[
                            { title: "01. Pointers for your Journey", link: "/resource-center/Start-Adhyayan/method-of-study/useful-pointer", status: true },
                            { title: "02. Introducing Study/Adhyayan", link: "/resource-center/Start-Adhyayan/method-of-study/aboutstudy", status: true },
                            { title: "03. Method of Study in Madhyasth Darshan – Explained", link: "https://megascale.cloud/JV/folder/Madhyasth Darshan Study-Adhyayan - explained.zip", status: false },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-sm cursor-pointer border-b border-[#F2F4F8]"
                                onClick={() => { item.link && window.open(item.link, "_self"); }}
                            >
                                <span className="page-collapse-link">{item.title}</span>

                                {item.status ? (
                                    <ArrowRight size={23} className=" " />
                                ) : (
                                     <img src="/icon/install.svg" alt="Download" className="w-7 h-7 object-contain" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Hindi */}
                 <div className="rounded-xl overflow-hidden bg-white">
                    <div className="bg-[#C1B6A3] px-4 py-3 text-white font-semibold page-collapse-title">
नागराजजी द्वारा अध्ययन प्रक्रिया
                    </div>
                    <div className="bg-[#FFF5E7] px-4 py-2 text-[16px]">
                       
निम्नलिखित को पढ़े, साथ में संबंधित ऑडियो-वीडियो सुने
                    </div>
                    <div className="">
                        {[
                            { title: "01. संवाद #2", link: "https://megascale.cloud/JV/folder/02. प्रकाशित_संवाद भाग 2 _2013_ocr.pdf", status: true },
                            { title: "02. अध्ययन विधि सारांश (संवाद Z संकलन)", link: "https://megascale.cloud/JV/folder/05. संवाद Z सारांश - aktk 2019 sammelan.pdf", status: true },
                            { title: "03. जागृक्षि विधि साधना (लेख)", link: "https://megascale.cloud/JV/folder/D31 ६.३ जीवन विद्या गोष्ठी १० क्रिया V.Good.pdf", status: true },
                            { title: "04. अध्ययन विधि ऑडियो", link: "https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=24298539211", status: false },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 text-sm cursor-pointer border-b border-[#F2F4F8]"
                                onClick={() => { item.link && window.open(item.link, "_blank"); }}
                            >
                                <span className="page-collapse-link">{item.title}</span>

                                {item.status ? (
                                    <img src="/icon/install.svg" alt="Download" className="w-7 h-7 object-contain" />
                                ) : (
                                    <img src="/icon/link.svg" alt="Download" className="w-7 h-7 object-contain" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                        

                {/* Footer note */}
                <p className="text-sm italic  ">shriram n | student | feb 2013</p>
            </div>
        </div>
    );
};

export default MethodOfStudy;
