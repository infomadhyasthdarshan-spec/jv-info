import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";
import { downloadAsset } from "@/utils/generateAssetMap";
const IntroReading = () => {
  const { text } = useLanguage();

  const sections = [
    {
      title: text.Resourcepage.row1.title,
      items: text.Resourcepage.row1.content,
      icon: true,
    },
    {
      title: text.Resourcepage.row2.title,
      items: text.Resourcepage.row2.content,
      icon: true,
    },
    {
      title: text.Resourcepage.row3.title,
      items: text.Resourcepage.row3.content,
      icon: false,
    },
    {
      title: text.Resourcepage.row4.title,
      items: text.Resourcepage.row4.content,
      icon: false,
    },
    {
      title: text.Resourcepage.row5.title,
      items: text.Resourcepage.row5.content,
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
    console.log(item)
    const href = getHrefFromItem(item.text);
    if (href) {
      // Check if the link is external or has download attribute
      const isExternal = href.startsWith("http") || href.startsWith("//");
      const isDownload = item.text.includes("download");

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
    <div className="bg-gray-100 py-8 px-4 md:px-0 max-w-5xl mx-auto p-4">
      <h2 className="page-heading mb-6">Intro Reading</h2>
      <h2
        className="page-content mb-6"
        dangerouslySetInnerHTML={{ __html: text.Resourcepage.title }}
      ></h2>
      <h2
        className="page-content mb-6"
        dangerouslySetInnerHTML={{ __html: text.Resourcepage.title1 }}
      ></h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full bg-[#C1B6A3] text-white px-5 py-4 page-collapse-title border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span>{section.title}</span>
              <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <ul className="divide-y divide-gray-300 bg-white">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between px-5 py-4 cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    <span
                      className="page-collapse-link  "
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                    {
                      item.icon ? (section.icon ? (
                        <img
                          src="/icon/install.svg"
                          alt="Download Icon"
                          className="w-7 h-7 object-contain"
                        />
                      ) : (
                        <img
                          src="/icon/link.svg"
                          alt="Download Icon"
                          className="w-6 h-6 object-contain"
                        />
                      )) : <img
                        src="/icon/link.svg"
                        alt="Download Icon"
                        className="w-6 h-6 object-contain"
                      />
                    }
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

export default IntroReading;
