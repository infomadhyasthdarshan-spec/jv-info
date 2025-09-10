"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import ContactLocation from "@/components/contact/ContactPage";
import EmailFomer from "@/components/contact/EmailForm";
import { useSearchParams } from "next/navigation";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const Contactus = () => {
  const { text } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("location");
  // console.log(search);
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  const [showLocationComponent, setShowLocationComponent] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  const locationRef = useRef(null);

  useEffect(() => {
    console.log(typeof search)
    if(search === '1'){
      if(!showEmailForm){
        setShowLocationComponent(true)
        console.log("open")
      }
    }
  },[])

  const handleCallUsClick = () => {
    setShowLocationComponent(true);
    setShowEmailForm(false);

    // Allow component to render before scrolling
    setTimeout(() => {
      locationRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // 100ms delay for better reliability
  };

  const handleEmailFormClick = () => {
    setShowEmailForm(true);
    setShowLocationComponent(false)
    // Allow component to render before scrolling
    setTimeout(() => {
      locationRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // 100ms delay for better reliability
  };

  const contactMethods = [
    {
      title: text.aboutPage8.section1.card1.h1,
      description: text.aboutPage8.section1.card1.p,
      icon: <ArrowRight className="h-6 w-6" />,
      action: handleEmailFormClick,
    },
    {
      title: text.aboutPage8.section1.card2.h1,
      description: text.aboutPage8.section1.card2.p,
      icon: <ArrowRight className="h-6 w-6" />,
      action: handleCallUsClick,
    },
    {
      title: text.aboutPage8.section1.card3.h1,
      description: text.aboutPage8.section1.card3.p,
      icon: <ArrowRight className="h-6 w-6" />,
      action: () => window.open("/about/our-centers", "_blank"),
    },
  ];

  return (
    <>
      <section className="bg-gray-100 py-8 md:px-0 px-4 lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="page-heading mb-6">{text.aboutPage8.section1.h}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] border border-[#dde1e6] p-5 cursor-pointer"
                onClick={method.action}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="page-common-hading  ">{method.title}</h3>
                  {method.icon}
                </div>
                <p className="page-common-md-pera text-[#697077]">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showEmailForm && (
        <div
          className="mt-8 lg:max-w-5xl 2xl:max-w-5xl mx-auto px-4 scroll-mt-40"
          ref={locationRef}
        >
          <EmailFomer />
        </div>
      )}

      {showLocationComponent && (
        <div
          ref={locationRef}
          className="mt-8 lg:max-w-5xl 2xl:max-w-5xl mx-auto px-4 scroll-mt-40"
        >
          <ContactLocation />
        </div>
      )}
    </>
  );
};

export default Contactus;

// ----------------------------------------------------------------------------------------------
// 'use client'
// import { useState } from 'react';
// import { useLanguage } from '@/context/LanguageContext';
// import { ArrowRight } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// // import ContactByLocation from './ContactLoca'; // your additional component
// import ContactLocation from '@/components/contact/ContactPage';

// const Contactus = () => {
//   const { text } = useLanguage();
//   const router = useRouter();
//   const [showLocationComponent, setShowLocationComponent] = useState(false);

//   const contactMethods = [
//     {
//       title: text.aboutPage8.section1.card1.h1,
//       description: text.aboutPage8.section1.card1.p,
//       icon: <ArrowRight className='h-6 w-6' />,
//       link: "https://docs.google.com/forms/d/e/1FAIpQLSdXIwO78jia5Jks0_IQ4JgUMCXBt-sbUNZ4qwbaCsOeLlqDPQ/viewform?embedded=true",
//       action: () => window.open(
//         "https://docs.google.com/forms/d/e/1FAIpQLSdXIwO78jia5Jks0_IQ4JgUMCXBt-sbUNZ4qwbaCsOeLlqDPQ/viewform?embedded=true",
//         '_blank'
//       )
//     },
//     {
//       title: text.aboutPage8.section1.card2.h1,
//       description: text.aboutPage8.section1.card2.p,
//       icon: <ArrowRight className='h-6 w-6' />,
//       link: "/about/contact-us/contact-by-location",
//       action: () => setShowLocationComponent(true)
//     },
//     {
//       title: text.aboutPage8.section1.card3.h1,
//       description: text.aboutPage8.section1.card3.p,
//       icon: <ArrowRight className='h-6 w-6' />,
//       link: "/about/our-centers",
//       action: () => window.open("/about/our-centers", '_blank')
//     },
//   ];

//   return (
//     <>
//       <section className="bg-gray-100 py-10 md:px-0 px-4 lg:max-w-5xl 2xl:max-w-5xl mx-auto">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="page-heading mb-6 ">{text.aboutPage8.section1.h}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {contactMethods.map((method, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-[16px] border border-[#dde1e6] p-5 cursor-pointer"
//                 onClick={method.action}
//               >
//                 <div className="flex justify-between items-center mb-1">
//                   <h3 className="page-common-hading  ">{method.title}</h3>
//                   {method.icon}
//                 </div>
//                 <p className="page-common-md-pera text-[#697077]">{method.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {showLocationComponent && (
//         <div className="mt-8 lg:max-w-5xl 2xl:max-w-5xl mx-auto px-4">
//           <ContactLocation />
//         </div>
//       )}
//     </>
//   );
// };

// export default Contactus;

// 'use client'
// import { useLanguage } from '@/context/LanguageContext';
// import { ArrowRight } from 'lucide-react'
// import { useRouter } from 'next/navigation'

// const Contactus = () => {
//   const { text } = useLanguage()
//   const router = useRouter()
//   const contactMethods = [
//     {
//       title: text.aboutPage8.section1.card1.h1,
//       description: text.aboutPage8.section1.card1.p,
//       icon: <ArrowRight className='h-6 w-6' />,
//       link: "https://docs.google.com/forms/d/e/1FAIpQLSdXIwO78jia5Jks0_IQ4JgUMCXBt-sbUNZ4qwbaCsOeLlqDPQ/viewform?embedded=true",
//     },
//     {
//       title: text.aboutPage8.section1.card2.h1,
//       description: text.aboutPage8.section1.card2.p,
//       icon: <ArrowRight className='h-6 w-6' />,
//       link: "/about/contact-us/contact-by-location"
//     },
//     {
//       title: text.aboutPage8.section1.card3.h1,
//       description: text.aboutPage8.section1.card3.p,
//       icon: <ArrowRight className='h-6 w-6' />,
//       link: "/about/our-centers",
//     },
//   ];

//   return (
//     <section className="bg-gray-100 py-10 md:px-0 px-4 lg:max-w-5xl 2xl:max-w-5xl mx-auto">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="page-heading mb-6 ">{text.aboutPage8.section1.h}</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {contactMethods.map((method, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-[16px]  border border-[#dde1e6] p-5 cursor-pointer"
//               onClick={() => window.open(method.link, '_blank')}
//             >
//               <div className="flex justify-between items-center mb-1">
//                 <h3 className="page-common-hading  ">{method.title}</h3>
//                 {method.icon}
//               </div>
//               <p className="page-common-md-pera  text-[#697077]">{method.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contactus;
