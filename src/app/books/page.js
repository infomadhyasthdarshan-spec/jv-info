"use client"
import { ArrowRight } from 'lucide-react'
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  const { text } = useLanguage()

  const sections = [
    {
      title: 'मूल प्रकाशित पुस्तक (PDF) डाउनलोड',
      items: [
        { title: 'परिचयात्मक पठन संकलन (Introductory Selection)', link: "/api/download/zip/folder/01. परिचयात्मक पुस्तक संकलन (प्रकाशित पुस्तकों से).zip", isLink: false },
        { title: 'प्रकाशित ग्रंथ – वर्तमान संस्करण (Published books, current edition)', link: "/api/download/zip/folder/A0. मूल प्रकाशित ग्रन्थ -वर्तमान संस्करण_current editions.zip", isLink: false },
        { title: 'संवाद वार्ता (प्रकाशित) -Dialogues', link: "/api/download/zip/folder/मध्यस्थ दर्शन_all samvads.zip", isLink: false },
      ],
    },
    {
      title: 'मध्यस्थ दर्शन अप्प डाउनलोड करे',
      items: [{ title: 'Install the Web-App for e-reader & advanced search', link: "https://app.madhyasth.org/read", isLink: true }],
    },
    {
      title: 'ऑडियो डाउनलोड्स',
      items: [{ title: 'Download Audio: संवाद एवं वार्ता  – A.Nagraj', link: "https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=24298539199", isLink: true }],
    },
    {
      title: 'विडियो  देखें (YouTube)',
      items: [{ title: 'नागरज जी Originals YouTube चैनल (Video & Audio)', link: "https://www.youtube.com/channel/UCkg9tIpvZr6-A2RHyl5XcsQ", isLink: true }],
    },
    {
      title: 'श्री नागराजजी के बारे में',
      items: [

        { title: 'जीवन चरित्र – जीवनी (Biography & Personality)', link: "/api/download/zip/folder/मध्यस्थ दर्शन_नागराजजी के बारे.zip", isLink: false },
        { title: 'नागरजजी Photos', link: "/api/download/zip/folder/public-archivedwl-920.zip", isLink: false },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-8 lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto px-3 md:px-0">
      <h2 className="page-heading mb-6 ssr-hading">
        {text.links.tabs.Books.title}
      </h2>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#C1B6A3] rounded-[16px] overflow-hidden">
            <h3 className="bg-[#C1B6A3] px-5 py-4 page-collapse-title border-b border-[#F2F4F8]">
              {section.title}
            </h3>
            <ul className="divide-y divide-gray-300 bg-white">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-center justify-between px-5 py-4 ${item.link ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (item.link) {
                      if (item.link.endsWith('.pdf')) {
                        const link = document.createElement('a');
                        link.href = item.link;
                        link.download = '';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else if (item.link.startsWith('https')) {
                        window.open(item.link, '_blank');
                      } else if (item.link.startsWith('/')) {
                        const link = document.createElement('a');
                        link.href = item.link;
                        link.download = '';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }
                    }
                  }}
                >

                  <span className="page-collapse-link">{item?.title || ""}</span>
                  {/* Replace below with your icon */}
                  {!item.isLink ? <img src="/icon/install.svg" alt="arrow-right" className='h-7 w-7' /> : <img src="/icon/link.svg" alt="arrow-right" className='h-6 w-6' />}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* <p className=" text-[17px] font-[700] mt-6 text-[#94562B]">
        <a href='/resource-center'>*सम्पूर्ण अप्रकाशित ग्रंथालय (e-Library) एवं अध्ययन मार्गदर्शिका के लिए स्टूडेंट्स सेक्शन देखें</a>
      </p> */}
    </div>
  );
};

export default page;