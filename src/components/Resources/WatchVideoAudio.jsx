import React, { useState } from 'react';

const WatchVideoAudio = () => {
  const sections = [
    {
      title: 'Official YouTube Channels',
      items: [
        'Students Channel @  YouTube (Jeevan Vidya Official)',
        'A.Nagraj Channel @ YouTube (Madhyasth Darshan Originals)',
      ],
    },
  ];

  const sections1 = [
    {
      title: 'Nagrajji Audio',
      items: [
        'Download Audio Originals: नागराजजी के ऑडियो डाउनलोड करें ',
        'Audio Books Download',
      ],
    },
  ];

  const courses = [
    {
      title: '#1: Parichay Shivir',
      items: [
        'Video: प्रारंभिक परिचय विवेचन सेमिनार (60 hrs)',
        'Video: Intro Workshop (Eng) - 10 days',
        'Video: Intro Workshop (Eng) - 7 days',
        'परिचय कक्षी का मार्गदर्शिका डाउनलोड कर अध्ययन करें',
      ],
    },
    {
      title: '#2: Adhyayan Bindu Shivir',
      items: [
        'Online adhyayan-bindu shivirों',
        'Adhyayan Bindu Shivir #2',
        'अध्ययन बिंदु का मार्गदर्शिका डाउनलोड कर अध्ययन करें',
      ],
    },
    {
      title: '#3: Avlokan/Overview',
      items: [
        'Adhyayan Vastu Avlokan (पुस्तक पढ़ने से पहले)',
        'अवलोकन मार्गदर्शिका डाउनलोड कर अध्ययन करें',
      ],
    },
    {
      title: '#4: Adhyayan Shivir (with original books)',
      items: [
        'All books reading + explanation: मधस्थ दर्शन के 50 से अधिक अध्येताओं द्वारा पुस्तकों का पढ़ना सहित व्याख्या – 400 hrs',
      ],
    },
    {
      title: '#5: Adhyayan-Abhyas Vidhi',
      items: [
        'अध्ययन एवं अभ्यास विधि परिचय (पुस्तक पढ़ने के बाद)',
        'अभ्यास प्रक्रिया (श्रवण–मंथन) – क्लासरूम मोड 30 घंटे / रिकॉर्डिंग',
        'अभ्यास विधि परिचय (सागर भाई)',
      ],
    },
  ];

  const [openSections, setOpenSections] = useState({
    youtube: true,
    courses: true,
    audio: true,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#f1f2f5] py-8 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
        What to do after the Parichay Shivir? परिचय शिविर के बाद क्या करें?
      </h2>
      <p className="text-[15px] text-black mb-6">
        * विभिन्न प्रबोधाकों का कम से कम दो से तीन जीवन परिचय शिविर करना सुझावित है
      </p>

      {/* Official YouTube Channels */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <button
              onClick={() => toggleSection('youtube')}
              className="w-full bg-[#C1B6A3] text-white px-5 py-4 font-bold border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span>{section.title}</span>
              <span className="text-lg">{openSections.youtube ? '−' : '+'}</span>
            </button>
            {openSections.youtube && (
              <ul className="divide-y divide-[#F2F4F8] bg-white">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between px-5 py-4">
                    <span className="text-[15px] font-[500]  ">{item}</span>
                    <img src="/arrow-forward.png" alt="arrow" className="w-5 h-5 object-contain" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Online Courses */}
      <div className="space-y-6 mt-10">
        <div className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
          <button
            onClick={() => toggleSection('courses')}
            className="w-full bg-[#C1B6A3] text-white px-5 py-4 font-bold border-b border-[#F2F4F8] flex justify-between items-center"
          >
            <span>Online Courses</span>
            <span className="text-lg">{openSections.courses ? '−' : '+'}</span>
          </button>
          {openSections.courses && (
            <div className="bg-white">
              <div className="px-5 pt-4 text-sm  ">
                <p className="mb-1">A Basic Selection is given below.</p>
                <p className="text-[11px] italic   mb-3">
                  * Online resources/study is only a stop-gap / supplementary resource and cannot replace a live human interaction
                </p>
              </div>
              <ul className="divide-y divide-[#F2F4F8]">
                {courses.map((course, index) => (
                  <li key={index} className="px-5 py-4">
                    <h4 className="font-bold text-[18px] text-[#333] mb-2">{course.title}</h4>
                    <ul className="divide-y divide-[#F2F4F8]">
                      {course.items.map((item, idx) => (
                        <li key={idx} className="flex items-center justify-between py-3">
                          <span className="text-[15px] font-[500]  ">{item}</span>
                          <img
                            src="/arrow-forward.png"
                            alt="arrow"
                            className="w-5 h-5 object-contain"
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Nagrajji Audio */}
      <div className="space-y-6 mt-10">
        {sections1.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <button
              onClick={() => toggleSection('audio')}
              className="w-full bg-[#C1B6A3] text-white px-5 py-4 font-bold border-b border-[#F2F4F8] flex justify-between items-center"
            >
              <span>{section.title}</span>
              <span className="text-lg">{openSections.audio ? '−' : '+'}</span>
            </button>
            {openSections.audio && (
              <ul className="divide-y divide-[#F2F4F8] bg-white">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between px-5 py-4">
                    <span className="text-[15px] font-[500]  ">{item}</span>
                    <img src="/arrow-forward.png" alt="arrow" className="w-5 h-5 object-contain" />
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

export default WatchVideoAudio;
