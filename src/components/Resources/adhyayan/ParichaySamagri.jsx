import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

const ParichaySamagri = () => {
  const { text } = useLanguage();

  const sections = [
    {
      title: text.Resourcepage.rows1.title,
      items: text.Resourcepage.rows1.content,
      icon: true,
    },
    {
      title: text.Resourcepage.rows2.title,
      items: text.Resourcepage.rows2.content,
      icon: true,
    },
    {
      title: text.Resourcepage.rows3.title,
      items: text.Resourcepage.rows3.content,
      icon: false,
      linkIcon: true,
    },
    {
      title: text.Resourcepage.rows4.title,
      items: text.Resourcepage.rows4.content,
      icon: false,
    },
    {
      title: text.Resourcepage.rows5.title,
      items: text.Resourcepage.rows5.content,
      icon: false,
    },
    {
      title: text.Resourcepage.rows6.title,
      items: text.Resourcepage.rows6.content,
      icon: false,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Function to extract href from item string
  const getHrefFromItem = (item) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(item, "text/html");
    const anchor = doc.querySelector("a");
    return anchor ? anchor.getAttribute("href") : null;
  };

  // Function to handle click on li
  const handleItemClick = (item) => {
    const href = getHrefFromItem(item);
    if (href) {
      // Check if the link is external or has download attribute
      const isExternal = href.startsWith("http") || href.startsWith("//");
      const isDownload = item.includes("download");

      if (isDownload) {
        // Trigger download for files
        const link = document.createElement("a");
        link.href = href;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (isExternal) {
        // Open external links in a new tab
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        // Handle internal navigation (e.g., using window.location or a router like react-router)
        window.location.href = href; // Modify this if using react-router
      }
    }
  };

  return (
    <div className="bg-gray-100 py-8 px-4 md:px-0 max-w-5xl mx-auto">
      <h2 className="text-xl sm:text-xl text-black mb-6">
        {text.Resourcepage.ParichaySamagri.subtitle}
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full bg-[#C1B6A3] text-white px-3 py-4 page-collapse-title border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span className="page-collapse-title text-start">
                {section.title}
              </span>
              <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <ul className="divide-y divide-gray-300 bg-white">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleItemClick(item)}
                  >
                    <span
                      className="page-collapse-link"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                    {section.linkIcon ? (
                      section.icon ? (
                        <img
                          src="/icon/install.svg"
                          alt="Download Icon"
                          className="w-7 h-7 object-contain"
                        />
                      ) : (
                        <img
                          src="/icon/link.svg"
                          alt="Link Icon"
                          className="w-7 h-7 object-contain"
                        />
                      )
                    ) : section.icon ? (
                      <img
                        src="/icon/install.svg"
                        alt="Download Icon"
                        className="w-7 h-7 object-contain"
                      />
                    ) : (
                      <FaArrowRight size={20} />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParichaySamagri;











// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa6";
// import { useLanguage } from "@/context/LanguageContext";
// const ParichaySamagri = () => {
//   const { text } = useLanguage();

//   const sections = [
//     {
//       title: text.Resourcepage.rows1.title,
//       items: text.Resourcepage.rows1.content,
//       icon: true,
//     },
//     {
//       title: text.Resourcepage.rows2.title,
//       items: text.Resourcepage.rows2.content,
//       icon: true,
//     },
//     {
//       title: text.Resourcepage.rows3.title,
//       items: text.Resourcepage.rows3.content,
//       icon: false,
//       linkIcon: true,
//     },
//     {
//       title: text.Resourcepage.rows4.title,
//       items: text.Resourcepage.rows4.content,
//       icon: false,
//     },
//     {
//       title: text.Resourcepage.rows5.title,
//       items: text.Resourcepage.rows5.content,
//       icon: false,
//     },
//     {
//       title: text.Resourcepage.rows6.title,
//       items: text.Resourcepage.rows6.content,
//       icon: false,
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleSection = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <div className="bg-gray-100 py-8 px-4 md:px-0 max-w-5xl mx-auto">
//       <h2 className="text-xl sm:text-xl text-black mb-6">
//         {text.Resourcepage.ParichaySamagri.subtitle}
//       </h2>

//       <div className="space-y-6">
//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
//           >
//             <button
//               onClick={() => toggleSection(index)}
//               className="w-full bg-[#C1B6A3] text-white px-3 py-4 page-collapse-title border-b border-[#F2F4F8] flex justify-between items-center"
//             >
//               <span className="page-collapse-title text-start">
//                 {section.title}
//               </span>
//               <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
//             </button>
//             {openIndex === index && (
//               <ul className="divide-y divide-gray-300 bg-white">
//                 {section.items.map((item, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center justify-between px-5 py-4"
//                   >
//                     <span
//                       className="page-collapse-link"
//                       dangerouslySetInnerHTML={{ __html: item }}
//                     />
//                     {section.linkIcon ? (
//                       section.icon ? (
//                         <img
//                           src="/icon/install.svg"
//                           alt="Download Icon"
//                           className="w-7 h-7 object-contain"
//                         />
//                       ) : (
//                         <img
//                           src="/icon/link.svg"
//                           alt="Download Icon"
//                           className="w-7 h-7 object-contain"
//                         />
//                       )
//                     ) : section.icon ? (
//                       <img
//                         src="/icon/install.svg"
//                         alt="Download Icon"
//                         className="w-7 h-7 object-contain"
//                       />
//                     ) : (
//                       <FaArrowRight size={20} />
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ParichaySamagri;
