"use client"
import React from 'react'
import { useLanguage } from "@/context/LanguageContext"
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import Backjs from '@/components/Backjs';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';



const Adhyayan = () => {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
    const { text } = useLanguage();
    const router=useRouter();
  const sections = [
    {
      title: "* For a short introduction see our Educational Approach",
      items: [
       
        {"title":"The need for education",link:"resource-center/Start-Adhyayan"},
        {"title":"Our view of Reality/ World-view/Ontology",link:"/resource-center/Start-Adhyayan/systematic-study-roadmap-(eng)"},
        {"title":"Role/Objectives of human education",link:"#"},
        {"title":"Content of Education – Knowledge, Wisdom & Science",link:"#"},
      
      ],
    },
        {
      title: "Multidisciplinary & Holistic Education",
      items: [
       
        {"title":"Life Themes",link:"resource-center/Start-Adhyayan"},
        {"title":"Family Life & Human Character",link:"/resource-center/Start-Adhyayan/systematic-study-roadmap-(eng)"},
        {"title":"Living in Society, Social Character",link:"#"},
        {"title":"Daily Routine & Health",link:"#"},
        {"title":"Learning Theory",link:"#"},
        {"title":"Pedagogy/process of education",link:"#"},
        {"title":"Outcomes of humane education",link:"#"},
        {"title":"How to supplement the prevalent educational content",link:"#"},
        {"title":"Criterion for acceptance of this course",link:"#"},
      
      ],
    },
         {
      title: "*Read Originals by Shri A.Nagraj",
      items: [
       
        {"title":"मानवीय शिक्षा नीति का प्रस्ताव",link:"resource-center/Start-Adhyayan"},
        {"title":"शिक्षा नीति का लघु प्रस्ताव ",link:"/resource-center/Start-Adhyayan/systematic-study-roadmap-(eng)"},
        {"title":"चेतना विकास मूल्य शिक्षा पाठ्यक्रम",link:"#"},
       
      ],
    },
       {
      title: "More",
      items: [
       
        {"title":"Our reach: where we work today",link:"resource-center/Start-Adhyayan"},
        {"title":"Related downloads",link:"/resource-center/Start-Adhyayan/systematic-study-roadmap-(eng)"},
       
       
      ],
    }

  ];
  return (
    <div className="bg-gray-100 py-8 px-1 max-w-5xl mx-auto md:pt-12">
      <Backjs />
      <h2 className="page-heading font-bold text-black mb-6 ssr-hading">
      Educational Philosophy
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <h3 className="bg-[#C1B6A3] page-collapse-title px-5 py-4 font-semibold border-b border-[#F2F4F8]">
              {section.title}
            </h3>
            <ul className="divide-y divide-gray-300 bg-white">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between px-5 py-4" 
                  onClick={()=>router.push(item.link)}
                >
                  <span className="page-collapse-link  ">{item.title}</span>
                  {/* Replace below with your icon */}
                          
                  {/* <img src="/arrow-forward.png" alt="Download Icon" className="w-5 h-5 object-contain" /> */}
                   <FaArrowRight size={20} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    {/* section1 */}
    <div className="mt-12  p-6 rounded-xl   space-y-4 leading-relaxed">
  <h2 className="page-heading font-semibold">The need for humane education</h2>
  <p className='page-content'>
    Despite the long history of education on this planet, the outcomes for us as individuals, families, society & our impact on our natural environment are far from satisfactory. This is because the content and process of <em>humane</em> education yet remain to be identified in a universal manner. While theism/spiritualism could not enunciate their proposals in a <em>universal</em> manner, materialism/science has not been able to provide a way for universal <em>goodness</em>.
  </p>
  <p className='page-content'>
    Whereas, we can observe that every human child expects justice since birth, desires for right behavior and work and speaks the truth. The child does not know the above realities (Justice, Right behavior-work & Truth). It depends on education & human tradition (the environment) in order to understand these.
  </p>
  <p className='page-content'>
    Since human tradition as yet does not have a common clear understanding of the truth, <em>beliefs</em> by name of Justice, Right behavior-work & Truth are commonly accepted by various human communities. Accepting such beliefs, or the combination thereof, we grow up to be adult citizens, with our own varying set of notions & assumptions of right & wrong. This has resulted in the confused state we are in today.
  </p>

  <p className="page-content">We can hence brief the need for human education as follows:</p>
  <ul className="list-disc page-content  space-y-1">
    <li>We humans live our lives based on our assumptions, beliefs and understanding. Humans conform to their assumptions/values or <em>sanskar</em>, unlike animals whose behavior and living is according to their race. <em>If our beliefs change, so do our behavior, goals and actions.</em></li>
    <li>Humans have the <em>ability of imagination</em> & freedom of action. This is why we end up having different beliefs and differing behaviors. Whereas, we see that every other entity in nature: be it soil, metals, plants and animals exhibit a definite conduct. Humans are yet to have a <strong>definite conduct</strong>.</li>
    <li>There is a basic innate expectation & desire in every human to have right understanding and live rightfully with definiteness.</li>
    <li>There are realities in existence in the form of Justice, Religion (innate-order) & Truth. <em>(nyaya-dharma-satya)</em> and the right <em>humane way of living</em></li>
    <li>We can use our <em>imagination abilities</em> to understand these truths and the correct ‘way of living’</li>
    <li>The role of education thus is to enable every human to use their faculty of imagination to understand these realities of existence & human life <em>as they are</em> and live accordingly: spiritually, intellectually, emotionally (in behavior) & in occupation (materially). This leads to definite human conduct & then reflects as coexistence & harmony in living in families, society, nation-states and with nature.</li>
  </ul>

  <p className="font-semibold mt-6">We can hence summarize as follows:</p>
  <ul className="list-disc  page-content space-y-1">
    <li>Human beings belong to the ‘knowledge-order’. Our <strong>fundamental need</strong> is knowledge.</li>
    <li>Humans have the <strong>expectation</strong> to understand the truth about everything, including their living</li>
    <li>There are such realities in existence and the <strong>possibility</strong> that we can understand them</li>
    <li>Humans have the <strong>capability</strong> for such understanding.</li>
    <li>The role of education is to <strong>enable</strong> this understanding.</li>
  </ul>
</div>

    {/* section1 */}
    {/* section2 */}
       <div className="mt-12  p-6 rounded-xl   space-y-4 leading-relaxed">
         <h2 className="page-heading font-semibold">View of Reality/world view/ Ontology</h2>
         <p className='page-content'>Our content and pedagogical process of education is based on a fundamental and deep understanding of the human conscious, mind & psychology as it is in reality. This is enabled by the Madhyasth Darshan philosophy, or saha-astitva-vaad (coexistential thought). Simply put, existence (reality) is in the form of coexistence, is in harmony. There is spontaneous evolution in existence, and the occurrence of the world consisting of conscious entities – both animals and the human beings as we know it.</p>
        <p className='page-content'>Humans on this planet are in a state of ‘awakening progression’ in our consciousness, in a state of illusion, wherein our understanding is partial  and our plane of living is akin to that of animals. The human being has been identified as belonging to the ”knowledge-order’ (gyan avastha).  Knowledge is the fundamental human need. The basic need for the human being is happiness, and this is possible via knowledge that leads to development to ‘human consciousness’ & living with ‘awakening’. See here for a brief summary of this philosophy.</p>
       </div>
    {/* section2 */}

    {/* section3 */}
     <div className="mt-12  p-6 rounded-xl   space-y-4 leading-relaxed">
         <h2 className="page-heading font-semibold">Role/Objectives of human education</h2>
          <p className='page-content'>Humans are disposed towards goodness and knowledge of the Truth, because its necessity and possibility exist in reality. Education enables the actions, conduct & study worthy of understanding the truth.</p>
          <p className='page-content'>Unhappiness, lack of peace & dissatisfaction in the human itself is conflict and these in turn are themselves the results of conflict. Human necessity is happiness, peace, satisfaction & bliss which is possible via knowledge of & living in human-consciousness.</p>
          <p className='page-content'>Enabling this transformation to human consciousness & its expression in living is thus the basic purpose of education. Education enables the arising of civility & culture in a human being. An awakened human being lives with resolution in themselves, with material prosperity in family, trust & cooperation in society & coexistence with nature.</p>
          <p className='page-content'>Education enables the awakening and expression of all four dimensions of the human: a) realization/understanding, b) thought/imagination, c) behavioral/social & d) occupational/natural. This addresses the spiritual, intellectual-logical, emotional and material needs of the human. It enables mental healthiness or intellectual balance, social balance and natural balance. It enables qualitative change from inhuman characteristics to humane characteristics and nature.</p>
          <p className='page-content'>Such an educated individual then goes on to establish/play their role in humane culture, civility, norms & societal organization. The role of education is to provide the content, process and environment for this transformation in an individual & work synergistic-ally with other societal systems in a manner that are in line with universal human goals.</p>
          <p className='page-content'>We can thus summarize that manifestation or appearance of existence itself is discovery and invention by the human being. The generalization process of this understanding in humankind itself is education. Understanding becomes commonly available via education & publicity.</p>
     </div>
    {/* section3 */}
    </div>
  )
}

export default Adhyayan

