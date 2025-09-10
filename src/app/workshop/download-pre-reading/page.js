"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
export default function page() {
    const { text } = useLanguage()
    const downloadIcon = "/icon/download.svg"; // Update with your icon path

    const Card = ({ title, details, link }) => (
        <div
            className="bg-white p-4 rounded-[16px] border border-[#DDE1E6] w-full flex justify-between items-center cursor-pointer"
            onClick={() => {
                if (link) {
                    const a = document.createElement('a');
                    a.href = link;
                    a.download = link.split('/').pop();
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }
            }}
        >
            <div>
                <p className="page-xsmall-hading">{title}</p>
                {details && <p className="page-common-md-pera">{details}</p>}
            </div>
            <img src={downloadIcon} alt="Download Icon" className="w-7 h-7 object-contain" />
        </div>
    );



    const ImageCard = ({ title, image }) => (
        <div className="flex flex-col gap-2 w-full">
            <img src={image} alt={title} className="w-full rounded-xl shadow object-cover" />
        </div>
    );

    const resources = {
        syllabus: [
            { title: text.workshopPage4['Download Pre Reading'].card1.title, details: text.workshopPage4['Download Pre Reading'].card1.subtitle, link: "/api/download/file/folder/prereading/7-Day-Syllabus.pdf" },
            { title: text.workshopPage4['Download Pre Reading'].card2.title, details: text.workshopPage4['Download Pre Reading'].card2.subtitle, link: "/api/download/file/folder/prereading/04.-Jeevan-Vidya-Objectives.pdf" }
        ],
        toCirculate: [
            { title: text.workshopPage4['To circulate (invite others)'].card1.title, details: text.workshopPage4['To circulate (invite others)'].card1.subtitle, link: "/api/download/file/folder/prereading/03.-About-the-Jeevan-Vidya-Workshop-for-Scholars.pdf" },
            { title: text.workshopPage4['To circulate (invite others)'].card2.title, details: text.workshopPage4['To circulate (invite others)'].card2.subtitle, link: "/api/download/file/folder/prereading/02.-About-the-Jeevan-Vidya-Workshop-Typical.pdf" },
            { title: text.workshopPage4['To circulate (invite others)'].card3.title, details: text.workshopPage4['To circulate (invite others)'].card3.subtitle, link: "/api/download/file/folder/prereading/01.-Brochure-Jeevan-Vidya-Shivir-.pdf" },
        ],
        posters: [
            { title: text.workshopPage4['Invitation Posters'].card1.title, details: text.workshopPage4['Invitation Posters'].card1.subtitle, link: "/api/download/file/folder/prereading/Intro-Workshop-english.pdf" },
            { title: text.workshopPage4['Invitation Posters'].card2.title, details: text.workshopPage4['Invitation Posters'].card2.subtitle, link: "/api/download/file/folder/prereading/SHARED-हिंदी-शिविर-परिचय-hindi.pdf" },
        ],
        images: [
            { title: 'English Poster', image: '/images/workshop/dpr.png' },
            { title: 'Hindi Poster', image: '/images/workshop/dpr.png' },
        ],
    };

       useEffect(() => {
    wrapHindiWords ();
  }, []);

    return (
        <div className="mx-2 md:mx-auto lg:max-w-5xl 2xl:max-w-5xl space-y-10 mb-8 py-8">
            {/* Syllabus Section */}
            <section className="space-y-4">
                <h2 className="page-heading pl-2 lg:pl-0 md:pl-0 ssr-hading">
                    {text.workshopPage4['Download Pre Reading'].title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resources.syllabus.map((item, idx) => (
                        <Card
                            key={idx}
                            title={item.title}
                            details={item.details}
                            link={item.link}
                        />
                    ))}
                </div>
            </section>


            {/* To Circulate Section */}
            <section className="space-y-4">
                <h2 className="page-heading  pl-2 lg:pl-0 md:pl-0 ssr-hading">{text.workshopPage4['To circulate (invite others)'].title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resources.toCirculate.map((item, idx) => (
                        <Card key={idx} title={item.title} details={item.details} link={item.link} />
                    ))}
                </div>
            </section>

            {/* Invitation Posters Section */}
            <section className="space-y-4">
                <h2 className="page-heading  pl-2 lg:pl-0 md:pl-0 ssr-hading">{text.workshopPage4['Invitation Posters'].title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resources.posters.map((item, idx) => (
                        <Card key={idx} title={item.title} details={item.details} link={item.link} />
                    ))}
                </div>
            </section>


        </div>
    );
}
