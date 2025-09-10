"use client";

import { useLanguage } from "@/context/LanguageContext";
import React from "react";


const Footer = () => {
  const { text } = useLanguage();
  return (
    <footer className="bg-[#4E4641] text-white px-6 py-10 text-sm">
      <div className="max-w-5xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Column */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center text-xs font-th font-semibold">
                <img src={"/logo/MDIconFooter.svg"} className="rounded-lg" />
              </div>
              <h2 className="text-xl font-bold font-th">
                {text.Footer.logo.brand}
              </h2>
            </div>
            <p className="italic   text-[20px] font-th mb-4">
              {text.Footer.logo.title}
            </p>
            <div className="hidden md:block">
              <p>
                <a href="https://madhyasth-darshan.megascale.co.in/" className="underline text-[16px] font-th text-white py-6">
                  {text.Footer["sub"][0]}
                </a>{" "}
                {text.Footer["sub"][1]}
              </p>
              {/* <p className="mt-4 font-th text-[16px]   py-2">
                <a href="/site-responsibility">{text.Footer["sub"][3]}</a>
              </p> */}
              <p className="mt-2 font-th text-[16px]   py-3">
                {text.Footer["sub"][2]}
              </p>
            </div>
          </div>

          {/* Right Columns (Responsive) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10 lg:gap-20">
            {/* Teachings */}
            <div>
              <h3 className="font-bold text-[20px] font-th mb-2">{text.Footer["Quick links"]["h1"]}</h3>
              <ul className="space-y-1 text-[16px] leading-[22px]  ">
                <li>
                  <a href="/books" className="hover:underline font-th">
                    {text.Footer["Quick links"]["original Books"]}
                  </a>
                </li>
                <li>
                  <a
                    href="https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=24298539199"
                    className="hover:underline font-th"
                  target="_blank" rel="noopener noreferrer">
                    {text.Footer["Quick links"]["Audio"]}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCkg9tIpvZr6-A2RHyl5XcsQ"
                    className="hover:underline font-th" target="_blank" rel="noopener noreferrer"
                  >
                    {text.Footer["Quick links"]["videos"]}
                  </a>
                </li>
              </ul>
            </div>

            {/* Attend */}
            <div>
              <h3 className="font-bold text-[20px] font-th mb-2">{text.Footer["Attends"]["h1"]}</h3>
              <ul className="space-y-1 text-[16px] leading-[22px]  ">
                <li>
                  <a
                    href="https://app.madhyasth.org/schedule"
                    className="hover:text-white transition-colors font-th"
                  target="_blank" rel="noopener noreferrer">
                    {text.Footer["Attends"]["workshop Schedule"]}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.whatsapp.com/channel/0029VaAZJ4iGehEIwisnME14"
                    className="hover:underline font-th" target="_blank" rel="noopener noreferrer"
                  >
                    {text.Footer["Attends"]["Get Notified"]}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@jeevanvidyaofficialprogram6848"
                    className="hover:underline font-th" target="_blank" rel="noopener noreferrer"
                  >
                    {text.Footer["Attends"]["Workshops@YouTube"]}
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-bold text-[20px] font-th mb-2">{text.Footer["Connect"]["h1"]}</h3>
              <ul className="space-y-1 text-[16px] leading-[22px]  ">
                <li>
                  <a
                    href="/resource-center/connect-to-community"
                    className="hover:underline font-th"
                  >
                    {text.Footer["Connect"]["Groups"]}
                  </a>
                </li>
                <li>
                  <a
                    href="/about/contact-us/contact-by-location"
                    className="hover:underline font-th"
                  >
                    {text.Footer["Connect"]["Our Location"]}
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeC17vxy_bBRYgpb8c-6T7-Ix7EgpYuIX0MNGfJI35quHDvgA/viewform"
                    className="hover:underline font-th"
                    target="_blank" rel="noopener noreferrer"
                  >
                    {text.Footer["Connect"]["Volunteer"]}
                  </a>
                </li>
                <li>
                  <a
                    href="/about/contact-us"
                    className="hover:underline font-th"
                  >
                    {text.Footer["Connect"]["Contact Us"]}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#6a6360] mt-6 pt-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="  page-common-pera">
            {text.Footer["Download App"].AppTitle}
          </p>
          <button className="bg-white text-[#4E4641] font-th font-bold text-[18px] px-4 py-2 rounded shadow hover:bg-gray-200">
            {text.Footer["Download App"].button}
          </button>
        </div>
        {/* Bottom */}
        <div className="border-t border-[#6a6360] text-white text-start md:text-center text-l flex flex-col items-start md:items-center mt-3 justify-center gap-1 mb-20 md:mb-0">
          {/* Mobile only: sub text */}
          <div className="block md:hidden mt-6">
            <p className="mt-2 font-th   py-2">
              {text.Footer["sub"][2]}
            </p>

          </div>
          <p className="mt-2 page-content italic  py-1">

            {text.Footer["sub"][4]}
          </p>
          <p className="mt-2 text-[16px]  py-1">

            <a href="/site-responsibility">{text.Footer["sub"][3]}</a> |   <a
              href="https://divya-path.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-[16px] font-th md:pt-4"
            >
              Divya Path Sansthan © 2025 All rights reserved.
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

// "use client";

// import { useLanguage } from "@/context/LanguageContext";
// import React from "react";
// import { FaRegCopyright } from "react-icons/fa";

// const Footer = () => {
//   const { text } = useLanguage();
//   return (
//     <footer className="bg-[#4E4641] text-white px-6 py-10 text-sm">
//       <div className="max-w-5xl mx-auto">
//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between gap-10">
//           {/* Left Column */}
//           <div className="md:w-1/3">
//             <div className="flex items-center gap-3 mb-2">
//               <div className="w-10 h-10  flex items-center justify-center text-xs font-th font-semibold">
//                 {/* Logo Placeholder */}
//                 <img src={"/logo/LogoWhite.svg"} />
//               </div>
//               <h2 className="text-xl font-bold font-th">
//                 {text.Footer.logo.brand}
//               </h2>
//             </div>
//             <p className="italic   font-th mb-4">
//               {text.Footer.logo.title}
//             </p>
//             <div className="hidden md:block">
//               <p>
//                 <a href="#" className="underline font-th text-white py-6">
//                   {text.Footer["sub"][0]}
//                 </a>{" "}
//                 {text.Footer["sub"][1]}
//               </p>
//               <p className="mt-2 font-th   py-5">
//                 {text.Footer["sub"][2]}
//               </p>
//             </div>
//           </div>

//           {/* Right Columns */}
//           <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20">
//             {/* Teachings */}
//             <div>
//               <h3 className="font-bold font-th mb-2">Teachings</h3>
//               <ul className="space-y-1  ">
//                 <li>
//                   <a href="/books" className="hover:underline font-th">
//                     {text.Footer["Quick links"]["original Books"]}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/books/student-translations"
//                     className="hover:underline font-th"
//                   >
//                     {text.Footer["Quick links"]["Audio"]}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.youtube.com/channel/UCkg9tIpvZr6-A2RHyl5XcsQ"
//                     className="hover:underline font-th"
//                   >
//                     {text.Footer["Quick links"]["videos"]}
//                   </a>
//                 </li>
//                 <li></li>
//               </ul>
//             </div>

//             {/* Attend */}
//             <div>
//               <h3 className="font-bold font-th mb-2">Attend</h3>
//               <ul className="space-y-1  ">
//                 <li>
//                   <a
//                     href="/workshop"
//                     className="hover:text-white transition-colors font-th"
//                   >
//                     {text.Footer["Attends"]["workshop Schedule"]}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://chat.whatsapp.com/Gk2MshyXsy9H1O1UTnFqaL"
//                     className="hover:underline font-th"
//                   >
//                     {text.Footer["Attends"]["Get Notified"]}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.youtube.com/@jeevanvidyaofficialprogram6848"
//                     className="hover:underline font-th"
//                   >
//                     {text.Footer["Attends"]["Workshops@YouTube"]}
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Connect */}
//             <div>
//               <h3 className="font-bold font-th mb-2">Connect</h3>
//               <ul className="space-y-1  ">
//                 <li>
//                   <a
//                     href="/resource-center"
//                     className="hover:underline font-th"
//                   >
//                     {text.Footer["Connect"]["Groups"]}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/about/contact-us/contact-by-location"
//                     className="hover:underline font-th"
//                   >
//                     {text.Footer["Connect"]["Our Location"]}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://docs.google.com/forms/d/e/1FAIpQLSeC17vxy_bBRYgpb8c-6T7-Ix7EgpYuIX0MNGfJI35quHDvgA/viewform"
//                     className="hover:underline font-th"
//                   >
//                     {text.Footer["Connect"]["Volunteer"]}
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/about/contact-us"
//                     className="hover:underline font-th"
//                   >
//                     {text.Footer["Connect"]["Contact Us"]}
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         </div>
//         <div className="block md:hidden">
//           <p>
//             <a href="#" className="underline font-th text-white py-6">
//               {text.Footer["sub"][0]}
//             </a>{" "}
//             {text.Footer["sub"][1]}
//           </p>
//           <p className="mt-2 font-th   py-5">
//             {text.Footer["sub"][2]}
//           </p>
//         {/* Divider */}
//         <div className="border-t border-[#6a6360] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="  font-th">
//             {text.Footer["Download App"].AppTitle}
//           </p>
//           <button className="bg-white text-[#4E4641] font-th font-semibold px-4 py-2 rounded shadow hover:bg-gray-200">
//             {text.Footer["Download App"].button}
//           </button>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-[#6a6360] text-white text-center mt-6 text-l flex items-center justify-center gap-1">
//           <a
//             href="https://divya-path.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline py-5 font-th"
//           >
//             Divya Path Sansthan © 2025 All rights reserved.
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
