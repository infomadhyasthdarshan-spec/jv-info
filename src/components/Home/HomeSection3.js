"use client"
import { useLanguage } from '@/context/LanguageContext';
import React from 'react';
import { useRouter } from 'next/navigation'

const HomeSection3 = () => {
  const { text } = useLanguage()
  const router = useRouter()
  return (
    <div className="flex items-center justify-center bg-gray-100 py-4 px-4 md:px-0">
      <div className="flex flex-row gap-4 w-full max-w-md md:max-w-full">
        {/* Card 1 */}
        <div className="w-1/2 bg-white rounded-2xl p-4 md:px-12 md:py-[32px] text-center">
          <h2 className="page-small-heading mb-4 md:mb-[20px]">{text.home.section3.card1.h1}</h2>
          <p className="page-content mb-4 md:mb-[32px] md:px-10">
            {/* Further your understanding via these useful starter resources. */}
            {text.home.section3.card1.p}
          </p>
          <button className="bg-[#59524E] hover:bg-[#7E746F] page-big-btn py-2 md:py-[12px] px-2 rounded-md md:w-64" onClick={() => router.push("/resource-center/Start-Adhyayan")}>
            {/* Next Steps */}
            {text.home.section3.card1.button}
          </button>
        </div>

        {/* Card 2 */}
        <div className="w-1/2 bg-white rounded-2xl p-4 md:px-12 md:py-[32px] text-center">
          <h2 className="page-small-heading mb-4 md:mb-[20px]">{text.home.section3.card2.h1}</h2>
          <p className="page-content mb-4 md:mb-[32px] md:px-5">
            {/* Formal Study of the Books is essential for lasting understanding & change. */}
            {text.home.section3.card2.p}
          </p>
          <button className="bg-[#59524E] hover:bg-[#7E746F] page-big-btn py-2 md:py-[12px] px-2 rounded-md md:w-64" onClick={() => router.push("/resource-center/Start-Adhyayan/systematic-study-roadmap-(eng)")}>
            {/* Start Here */}
            {text.home.section3.card2.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;




// import React from 'react'

// const HomeSection3 = () => {
//     return (
//         <div>
//             <section className='flex flex-row gap-5 mt-5'>
//                 <div className="w-1/2 md:w-1/2 flex flex-col justify-center items-center md:px-8 py-6 rounded-r-xl bg-white rounded-lg">
//                     <div className="space-y-6 text-center">
//                         <h2 className="text-[17px] md:text-lg lg:text-2xl 2xl:text-3xl   font-th font-bold" style={{ fontWeight: '1000' }}>
//                             Completed Intro Workshops?
//                         </h2>

//                         <p className="  leading-relaxed font-th px-10 text-lg">
//                             Further your understanding via these useful starter resources.
//                         </p>

//                         <button className="bg-[#59524E] hover:bg-[#59524E] text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 font-th">
//                             Next Steps
//                         </button>
//                     </div>
//                 </div>
//                 <div className="w-1/2 md:w-1/2 flex flex-col justify-center items-center px-8 py-6 rounded-r-xl bg-white rounded-lg">
//                     <div className="space-y-6 text-center">
//                         <h2 className="lg:text-2xl 2xl:text-3xl   font-th font-bold" style={{ fontWeight: '1000' }}>
//                             Go Deeper?
//                         </h2>

//                         <p className="  leading-relaxed font-th px-10 text-lg">
//                             Formal Study of the Books is essential for lasting understanding & change.
//                         </p>

//                         <button className="bg-[#59524E] hover:bg-[#59524E] text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 font-th">
//                             Next Steps
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default HomeSection3