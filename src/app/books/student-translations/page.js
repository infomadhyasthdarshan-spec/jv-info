"use client"

import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
import Link from 'next/link';
const page = () => {
      useEffect(() => {
    wrapHindiWords ();
  }, []);
    const items = [
        { text: "Manav Vyavhar Darshan English", href: "https://docs.google.com/document/d/1QnYmvI50e0CqHkV6NQ_i5UYXPvE9y_L7JLnD_Q4r-Qk/edit?tab=t.0" },
        { text: "Janvad English", href: "https://docs.google.com/document/d/1FFYmzzxdaEiru52oPmUU5Xu-jgQlfNl6VdoFXDATmLw/edit?tab=t.0" },
        { text: "Adhyatmvad English", href: "https://docs.google.com/document/d/1Z4YdtVjPRKn29j0Zj7y_tcwiv_njlRAP/edit?tab=t.0" },
        { text: "Manviya Samvidhan English", href: "https://docs.google.com/document/d/1TAlxir7tUYx3yE9BxGqQaGWZub2wh69sYl1BWDR3_1E/edit?tab=t.0" },
        { text: "Paribhasha Samhita English", href: "https://docs.google.com/spreadsheets/d/1AkSDskVwAVlyRT-sePO3vciKOKg-Y0DD1qeP-TcLvkQ/edit?gid=1326517795#gid=1326517795" },
        { text: "Anubhav Darshan English", href: "https://docs.google.com/document/d/1Cdk_HrGzpjcq8keC0HdZd4xm7VvTthaG/edit?tab=t.0" },
    ];
    return (
        <div className="bg-gray-100 lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto px-3 md:px-0 py-8">
            <div className="rounded-[16px] ">
                <h2 className="page-heading mb-6 ssr-hading">
                    Student Translations: English & others
                </h2>

                {/* Section 1: English Translations */}
                <div className="bg-white rounded-[16px] mb-6 ">
                    <div className="bg-[#c4b8a7] page-collapse-title p-3 py-5 rounded-t-[16px]">
                        English Translated Versions of Original Hindi (by Student Practitioners)
                    </div>

                    <div className="px-4 py-4 bg-[#FFF5E7]">
                        <strong>In Google Docs:</strong><span className='italic'> in Progress English Translations</span>
                    </div>

                    <ul className="divide-y divide-gray-200">
                        {items.map((item, index) => (
                            <li key={index} className="flex justify-between items-center cursor-pointer px-4 py-4"
                                onClick={() => {
                                    if (item.href) {
                                        window.open(item.href, '_blank');
                                    }
                                }}>
                                <span className="page-collapse-link"><>{item.text}</></span>
                                <img src="/icon/link.svg" alt="arrow-right" className='h-6 w-6' />
                            </li>
                        ))}
                    </ul>

                    {/* <div className="italic text-sm px-4 py-3">
                        <span className="font-semibold">In PDF shareable versions.:</span> Other than those in Google Docs
                    </div> */}

                    {/* <div className="flex justify-between items-center px-4 py-3 " onClick={() => {
                        window.open("https://u.pcloud.link/publink/show?code=kZzWXckZkDCvrnL3KuuCOyRzUPU0eRT4NDQk#folder=17057208189&tpl=publicfoldergrid", '_blank');
                    }}>
                        <span>Paribhasha Samhita English</span>
                        <ArrowRight className='h-6 w-6' />
                    </div> */}
                </div>

                {/* Section 2: Other Languages */}
                <div className="bg-white rounded-[16px] ">
                    <div className="bg-[#c4b8a7] page-collapse-title p-3 py-5 rounded-t-[16px]">
                        Other Languages
                    </div>

                <ul className="divide-y divide-gray-200">
  {/* Block 1 */}
  <li className="px-4 py-3 page-collapse-link bg-[#FFF5E7]">
    <strong>Gujarati</strong>
  </li>
  <a
    href="https://megascale.cloud/JV/folder/દિવ્ય પથ Divya Path _ Guj _ Second Edition _ Aug 2025 (2).pdf"
    download="DivyaPath-Gujarati.pdf"
  >
    <li className="flex justify-between items-center px-4 py-3 page-collapse-link cursor-pointer">
      <span>ગુજરાતી મા (in progress)</span>
      <img src="/icon/install.svg" alt="arrow-right" className="h-7 w-7" />
    </li>
  </a>

  {/* Block 2 */}
  <li className="px-4 py-3 page-collapse-link bg-[#FFF5E7]">
    <strong>Kannada</strong>
  </li>
  <a
    href="  https://megascale.cloud/JV/folder/ಕನ್ನಡ – Kannada Translations - Gowri Srihari (2).zip"
    download="Kannada-Translations.zip"
  >
    <li className="flex justify-between items-center px-4 py-3 page-collapse-link cursor-pointer">
      <span>ಹೆಸರು (in progress)</span>
      <img src="/icon/install.svg" alt="arrow-right" className="h-7 w-7" />
    </li>
  </a>
</ul>

                </div>

             
            </div>
        </div>
    );
};

export default page;
