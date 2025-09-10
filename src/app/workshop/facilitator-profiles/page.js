"use client"
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';

const FacilitatorProfile = () => {
       useEffect(() => {
    wrapHindiWords ();
  }, []);
    const { language, text } = useLanguage();
    // const profiles = [
    //     {
    //         title: "A Mining Engineer turned Ayurveda practitioner from Bengal",
    //         content: `SB has spent the last 20 yrs in full time study and practice of Madhyasth Darshan (MD). A mining engineer by training, he was looking for someone who 'knew it all'. He is now an organic farmer and an ayurveda practitioner with interests in astrology. Originally from Bengal, SB lives with his wife and daughter in Amarkantak, MP.`
    //     },
    //     {
    //         title: "Engineers, social activists and now philosophers",
    //         content: `After spending many years working in the social development area, ST & NT realized that material growth can only take a person that far. There are other ills. They have been studying and practising MD since 18 yrs. An Electrical Engineer from Nagpur, ST now has a farm and a dairy. This couple lives in a village near Raipur with their son.`
    //     },
    //     {
    //         title: "Left IIT, publisher and now farmer",
    //         content: `He came in touch with MD during his college days at IIT Delhi. Since then, AKG has been pursuing the study of MD and is also our web-master. Among other things, AKG also does farming and recently moved to Bemetra, CG from Dehradun. AKG has a wife and two daughters.`
    //     },
    //     {
    //         title: "MNC Professionals from Pune & Mysore",
    //         content: `A couple of years in the IT world, and SN was left gasping for answers to existential questions and a more meaningful life. He spent a year traveling and volunteering for Asha for Education in a perplexed state. The initial skepticism towards MD was replaced with clarity & assurance. GS was in Unilever research. They has been in full time study and practice since 6 yrs and live in Amarkantak, MP with their daughter.`
    //     },
    //     {
    //         title: "Farmers Movement Leader from UP",
    //         content: `After spending many years working in the social development area, ST & NT realized that material growth can only take a person that far. There are other ills. They have been studying and practising MD since 18 yrs. An Electrical Engineer from Nagpur, ST now has a farm and a dairy. This couple lives in a village near Raipur with their son.`
    //     },
    //     {
    //         title: "Oil MNC CXO from Gujarat",
    //         content: `A former head of commercial at an Oil MNC, he was seeking a model for wisdom based living. A colleague suggested MD. SP now spends time envisioning and setting up the first University based on MD and recently moved to Raipur from Surat with his family. He has a BTech and MTech from IIT Delhi.`
    //     },
    //     {
    //         title: "A Sociologist & Teacher couple from Canada",
    //         content: `MS comes from very modest beginnings in India. He worked his way through childhood and went on to get a Masters Degree. He took to Madhyasth Darshan immediately on coming in touch with it. He spent some time at Somaiya institutes in Mumbai on value education. He met NT during a workshop and they are now happily married with 2 children. They live in Alberta, Canada, where they have gone on to setup a new center for Jeevan Vidya that has ample room for 40 people, natural farming and lots of forest!`
    //     }
    // ];
    const profiles = text.workshopPage2.section9
    return (
        <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto min-h-screen font-sans   py-8">
            <div className="space-y-6">
                {/* Heading */}
                <h2 className="page-heading text-left md:text-left font-ssb px-3 ssr-hading">
                    {/* Who we are? */}
                    {/* {text.workshopPage2.section1.h1} */}
                    About Us
                </h2>

                {/* Paragraph 1 */}
                <p className="text-left md:text-left page-content px-3">
                    {text.workshopPage2.section1.p}
                </p>

                {/* Paragraph 2 */}
                <p className="text-left   mb-9 md:text-left page-content px-3">
                    {text.workshopPage2.section2.p1}
                </p>

                {/* Seminal Work Section */}
                <div className="bg-white p-6 rounded-lg text-center italic page-quotes  mb-9 w-full h-auto md:h-[250px] flex flex-col items-center justify-center">
                    <p className='text-center py-3 text-xl font-bold font-th'>~</p> 
                    <div>
                        <p className="text-black font-th" dangerouslySetInnerHTML={{ __html: text.workshopPage2.section3.h1 }}/>
                    </div>
                    
                    
                    <p className='text-center py-3 text-xl font-bold font-th'>~</p> 
                </div>

                {/* Workshops Paragraph */}
                <p className="text-left md:text-left page-content  px-3">
                    {text.workshopPage2.section4.p1}
                </p>

                {/* Common Quest Paragraph */}
                <p className="text-left md:text-left page-content px-3">
                    {text.workshopPage2.section4.p2}
                </p>

                {/* Workshops Not Livelihood Section */}
                <div  className="bg-[#EDE2D1] rounded-lg p-6 text-center italic text-xl md:text-2xl mb-9 w-full h-auto md:h-[250px] flex flex-col items-center justify-center font-th">
                    <p className='text-center py-6 text-xl font-bold font-th'>~</p> 
                     <p className="page-quotes ">
                    {text.workshopPage2.section5.h1}
                </p>
                <p className='text-center py-6 text-xl font-bold font-th'>~</p> 

                </div>
               

                {/* Number of People Paragraph */}
                <p className="text-left md:text-left page-content px-3">
                    {text.workshopPage2.section6.p1}
                </p>

                {/* Dedicated Centres Section */}
                <div className="bg-white rounded-lg text-center w-full h-auto md:h-[290px] flex flex-col items-center justify-center space-y-6 mb-11 p-6">
                    <p className="  italic page-big-card-pera" dangerouslySetInnerHTML={{ __html: text.workshopPage2.section7.p1 }}></p>
                    <a href="/about/our-centers" className="bg-[#59524E] p-4 hover:bg-[#7E746F] page-small-btn w-[281px] h-[56px] rounded-lg" >
                        {text.workshopPage2.section7.button}
                    </a>
                </div>

                {/* Teaching Importance Paragraph */}
                <p className="text-left md:text-left page-content px-3" dangerouslySetInnerHTML={{__html: text.workshopPage2.section8.p1}}>
                </p>


                <div className="px-6 md:px-0">
                    {profiles.map((profile, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 text-left w-full h-auto md:h-auto mb-3 ">
                            <h3 className="page-big-content text-[#B2917A] font-bold mb-5 font-th">
                                {profile.title}
                            </h3>
                            <div className="my-4 w-full font-bold h-[1px] bg-[#D9D9D9] rounded-sm "></div>
                            <p className="mt-5 whitespace-pre-line page-content">
                                {profile.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FacilitatorProfile;