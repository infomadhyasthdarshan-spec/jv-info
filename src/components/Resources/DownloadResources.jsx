import React, { useState } from "react";

const DownloadResources = () => {
  const sections = [
    {
      title: "ऑडियो सामग्री (Audio Books & Dialogues)",
      items: [
        "Download Audio Originals: नागराजजी के ऑडियो डाउनलोड करें ",
        "Audio Books Download",
      ],
    },
    {
      title: "अध्ययन सामग्री (Adhyayan Related) ",
      items: [
       "मूल वाङ्मय डाउनलोड करें: Download Basic Books ",
"Paribhasha Samhita web-app* (*see + or download arrow in browser-window at top right corner to install on your device)",
"अप्रकाशित लेखकों से उपयोगी संकलन (सीधे निस्सारण) (Useful Extracts from the unpublished & published works)",
"अप्रकाशित संवाद संकलन (Dialogues Compilation, Book Form)  |   संवाद ब्लॉग (Samvad, Blog Form) ",
"पुस्तकों को विषय-वस्तु अनुसार ब्राउज करें (अनुच्छेद, Topic-wise browsing)",
"शोध पत्र (विद्यार्थी विवेचन) (Students Analysis-Research on core topics)"
      ],
    },
    {
      title: "शिक्षा सामग्री (Education Related)",
      items: ["Grade कक्षा 1 से १० पाठ्यपुस्तक",
"CVMS English Textbooks",
"Happiness Curriculum (Delhi)",
"Abhibhavak Vidyalaya Achoti Drive",
"College Materials",
"All Education Materials"],
    },
    {
      title: "योजना सामग्री (Program Related)",
      items: [
        "Shivir taking Resources / notes",
"General ppts-powerpoints",
"Publicity - References",
"Old Project Reports",
"Published Papers / PhD's",
"शिक्षा में कार्य रिपोर्ट",
      ],
    },
    {
      title: "विद्यार्थी लिखित (Students Writings)",
      items: [
        "Book: Jeevan Vidya Shivir – A Companion Reader (Eng) -to be read before/after the parichay shivir. ",
        "Book: नागराजजी के साथ के विद्यार्थी संस्मरण",
        "Book: नागराजजी का चरित्र चित्रण ",
        "Articles: Basic Concepts Collection (Eng)",
        "गीत संग्रह",
        "संस्कार पत्र- जन्म, विवाह, मृत्यु",
        "विद्यार्थी लेख - सम्पूर्ण(all students articles) ",
      ],
    },
    {
      title: "सम्पूर्ण ग्रंथालय (Full e-library)",
      items: [
        "dub.sh/mdlibrary  (pCloud) नागराजजी के सम्पूर्ण अप्रकाशित लेख, डायरी, चार्ट्स एवं पुराने संस्करण",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto p-4">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
      Download Resources
      </h2>
   

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full bg-[#C1B6A3] text-white px-5 py-4 font-semibold border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span>{section.title}</span>
              <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <ul className="divide-y divide-gray-300 bg-white">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    <span className="text-[15px] font-[500]  ">
                      {item}
                    </span>
                    <img
                      src="/arrow-forward.png"
                      alt="Download Icon"
                      className="w-5 h-5 object-contain"
                    />
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

export default DownloadResources;
