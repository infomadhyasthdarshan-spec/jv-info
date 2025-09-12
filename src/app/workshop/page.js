"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  User,
  ArrowLeft,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import Gallery from "@/components/Gallery";
import { wrapHindiWords  } from '@/utils/fontInjector';
const IMAGE_ICON1 = "/images/workshop/workshopMain4.svg";
const IMAGE_ICON2 = "/images/workshop/workshopMain5.svg";
const IMAGE_ICON3 = "/images/workshop/workshopMain6.svg";

const images = [
  {
    img: "https://www.youtube.com/embed/9RsiuDJzVD8?si=Z9k89TztJybARndh",
    alt: "Workshop Image 2",
  },
  {
    img: "https://www.youtube.com/embed/qypf9pFkUwo?si=M5EDM-leh4rpTVWv",
    alt: "Workshop Image 1",
  },
  {
    img: "https://www.youtube.com/embed/qypf9pFkUwo?si=M5EDM-leh4rpTVWv",
    alt: "Workshop Image 1",
  },
  {
    img: "https://www.youtube.com/embed/qypf9pFkUwo?si=M5EDM-leh4rpTVWv",
    alt: "Workshop Image 1",
  },
];

const galleryImages = [
  { src: "/images/workshop/Gallery/1.png", alt: "Gallery 1" },
  { src: "/images/workshop/Gallery/2.png", alt: "Gallery 2" },
  { src: "/images/workshop/Gallery/3.png", alt: "Gallery 3" },
  { src: "/images/workshop/Gallery/4.png", alt: "Gallery 4" },
  { src: "/images/workshop/Gallery/5.png", alt: "Gallery 5" },
  { src: "/images/workshop/Gallery/6.png", alt: "Gallery 6" },
];
const topics = [
  {
    img: "/images/workshop/card/c1.png", // ✅ add image path
    content: [
      "What is comprehensive happiness?",
      "Is it an internal state of mind?",
      "Is it a mirage?",
      "Is it only sensory?",
    ],
  },
  {
    img: "/images/workshop/card/c2.png",
    content: [
      "Can expectations in relationships be understood?",
      "What is the true purpose of marriage?",
      "What does it mean to be a father, brother…",
      "Actual nature of emotions such as trust, affection, love…",
    ],
  },
  {
    img: "/images/workshop/card/c3.png",
    content: [
      "Who/Why am I?",
      "Know the depths of your mind",
      "What is existence/reality?",
      "What is the ultimate purpose of all life?",
    ],
  },
  {
    img: "/images/workshop/card/c4.png",
    content: [
      "Long-term solutions for Social conflict",
      "Wholesome purpose/nature of Education",
      "Environmental issues",
      "How can I contribute meaningfully",
    ],
  },
];


const Page = () => {
  const { language, text } = useLanguage();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Ensure modal is only rendered client-side
  useEffect(() => {
    setIsClient(true);
  }, []);
     useEffect(() => {
    wrapHindiWords ();
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const tabs = text.workshopPage1.tabs;

  const dayContent = [
    {
      title: text.workshopPage1.section25.content[0].day1.title,
      paragraph: text.workshopPage1.section25.content[0].day1.content[0],
      note: text.workshopPage1.section25.content[0].day1.content[1],
    },
    {
      title: text.workshopPage1.section25.content[1].day2.title,
      paragraph: text.workshopPage1.section25.content[1].day2.content[0],
      note: "",
    },
    {
      title: text.workshopPage1.section25.content[2].day3.title,
      paragraph: text.workshopPage1.section25.content[2].day3.content[0],
      note: "",
    },
    {
      title: text.workshopPage1.section25.content[3].day4.title,
      paragraph: text.workshopPage1.section25.content[3].day4.content[0],
      note: "",
    },
    {
      title: text.workshopPage1.section25.content[4].day5.title,
      paragraph: text.workshopPage1.section25.content[4].day5.content[0],
      note: "",
    },
    {
      title: text.workshopPage1.section25.content[5].day6.title,
      paragraph: text.workshopPage1.section25.content[5].day6.content[0],
      note: "",
    },
    {
      title: text.workshopPage1.section25.content[6].day7.title,
      paragraph: text.workshopPage1.section25.content[6].day7.content[0],
      note: "",
    },
    {
      title: text.workshopPage1.section25.content[7].day8.title,
      paragraph: text.workshopPage1.section25.content[7].day8.content[0],
      note: "",
    },
  ];

  const testimonials = [
    {
      text: text.workshopPage1.testimonial.test.test1.content,
      name: text.workshopPage1.testimonial.test.test1.name,
      pro: text.workshopPage1.testimonial.test.test1.pro,
      location: text.workshopPage1.testimonial.test.test1.city,
      avtar: text.workshopPage1.testimonial.test.test1.avtar,
    },
    {
      text: text.workshopPage1.testimonial.test.test2.content,
      name: text.workshopPage1.testimonial.test.test2.name,
      pro: text.workshopPage1.testimonial.test.test2.pro,
      location: text.workshopPage1.testimonial.test.test2.city,
      avtar: text.workshopPage1.testimonial.test.test2.avtar,
    },
    {
      text: text.workshopPage1.testimonial.test.test3.content,
      name: text.workshopPage1.testimonial.test.test3.name,
      pro: text.workshopPage1.testimonial.test.test3.pro,
      location: text.workshopPage1.testimonial.test.test3.city,
      avtar: text.workshopPage1.testimonial.test.test3.avtar,
    },
    {
      text: text.workshopPage1.testimonial.test.test4.content,
      name: text.workshopPage1.testimonial.test.test4.name,
      pro: text.workshopPage1.testimonial.test.test4.pro,
      location: text.workshopPage1.testimonial.test.test4.city,
      avtar: text.workshopPage1.testimonial.test.test4.avtar,
    },
    {
      text: text.workshopPage1.testimonial.test.test5.content,
      name: text.workshopPage1.testimonial.test.test5.name,
      pro: text.workshopPage1.testimonial.test.test5.pro,
      location: text.workshopPage1.testimonial.test.test5.city,
      avtar: text.workshopPage1.testimonial.test.test5.avtar,
    },
  ];

  const infoData = [
    {
      id: 1,
      icon: IMAGE_ICON1,
      title: text.workshopPage1.section24.content.content1.title,
      desc: text.workshopPage1.section24.content.content1.content,
    },
    {
      id: 2,
      icon: IMAGE_ICON2,
      title: text.workshopPage1.section24.content.content2.title,
      desc: text.workshopPage1.section24.content.content2.content,
    },
    {
      id: 3,
      icon: IMAGE_ICON3,
      title: text.workshopPage1.section24.content.content3.title,
      desc: text.workshopPage1.section24.content.content3.content,
    },
  ];

  const current = dayContent[activeTab];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gray-100 justify-center lg:max-w-5xl 2xl:max-w-5xl mx-auto py-8">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          {/* Desktop: Side-by-side */}
          <div className="hidden md:block md:w-1/2 md:h-80">
            <img
              src="/images/workshop/W-1.png"
              alt="Workshop session with audience"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="hidden md:flex md:w-1/2 bg-white p-8 rounded-r-lg h-80 flex-col justify-between shadow-lg">
            <h1 className="page-big-card-heading   mb-4 text-center">
              {text.workshopPage1.section1.title}
            </h1>
            <div>
              <p className="  page-big-card-pera mb-1 text-center">
                {text.workshopPage1.section1.subtitle}
              </p>
              <p className="  page-big-card-pera mb-1 text-center">
                {text.workshopPage1.section1.content[0]}
              </p>
              <p className="  page-big-card-pera mb-1 text-center">
                {text.workshopPage1.section1.content[1]}
              </p>
            </div>
            <div className="text-center">
              <button
                className="bg-[#59524E] hover:bg-[#7E746F] page-big-btn text-white px-10 py-3 rounded-lg transition duration-200 w-full"
                onClick={() => window.open("https://app.madhyasth.org/schedule", "_blank")}
              >
                {text.workshopPage1.section1.button}
              </button>
            </div>
          </div>

          {/* Mobile: Image with overlaid card */}
          <div className="md:hidden w-full flex flex-col items-center">
            <div className="relative w-full flex justify-center">
              <img
                src="/images/workshop/workshopMain1.png"
                alt="Workshop session with audience"
                className="w-full h-52 object-cover"
              />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-44 w-[92%]">
                <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center">
                  <h1 className="page-big-card-heading   mb-2 text-center">
                    {text.workshopPage1.section1.title}
                  </h1>
                  <p className="  px-5 page-big-card-pera mb-1 text-center">
                    {text.workshopPage1.section1.subtitle} {text.workshopPage1.section1.content[0]}
                  </p>
                  <p className="  page-big-card-pera mb-4 text-center">
                    {text.workshopPage1.section1.content[1]}
                  </p>
                  <button className="bg-[#47423f] text-white w-full py-3 rounded-lg font-semibold text-base transition duration-200">
                    {text.workshopPage1.section1.button}
                  </button>
                </div>
              </div>
            </div>
            <div className="h-20" />
          </div>
        </div>
      </div>

      {/* Scrollable Card Row */}
      <div className="mt-36 md:mt-0 px-4 md:px-0">
        <h2 className="text-[28px] font-bold text-center   mb-4 ssr-hading">
          {text.workshopPage1.section21.title}
        </h2>
        <div className="text-center mb-12">
          <p
            className="   text-[22px] leading-[32px]"
            dangerouslySetInnerHTML={{
              __html: text.workshopPage1.section21.content,
            }}
          ></p>
        </div>
      </div>
      {/* row */}
      <div className="w-full px-4 py-8">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md bg-white h-[350px] flex flex-col"
            >
              {/* 🔗 HEADER IMAGE WITH TITLE OVERLAY */}
              <div className="relative h-32">
                <img
                  src={topic.img}
                  alt={topic.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0  flex items-center justify-center">
                  <h2 className="text-white text-[16px] font-bold tracking-wide text-center px-2">
                    {topic.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1">
                <ul className="list-disc list-outside pl-5 space-y-2 text-base text-gray-800">
                  {topic.content.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/*for mobile  old code */}
        <div className="sm:hidden overflow-x-auto lg:max-w-5xl 2xl:max-w-5xl mx-auto scroll-smooth custom-scrollbar px-4 md:px-0">
          <div className="flex gap-6 pb-4 pl-1 pr-1 scroll-smooth">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[320px] max-w-[320px] snap-start shrink-0">
              <div className="h-36 relative">
                <img
                  src="/images/workshop/card/c1.png"
                  alt="Family silhouettes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="">
                  <ul className="list-disc pl-2 space-y-3    text-[16px]">
                    {text.workshopPage1.section21.Cards.card1.content.map(
                      (data, index) => (
                        <li key={index}>{data}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[320px] max-w-[320px] snap-start shrink-0">
              <div className="h-36 relative">
                <img
                  src="/images/workshop/card/c2.png"
                  alt="Family silhouettes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="">
                  <ul className="list-disc pl-2 space-y-3    text-[16px]">
                    {text.workshopPage1.section21.Cards.card2.content.map(
                      (data, index) => (
                        <li key={index}>{data}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[320px] max-w-[320px] snap-start shrink-0">
              <div className="h-36 relative">
                <img
                  src="/images/workshop/card/c4.png"
                  alt="Sunset on cliff"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="">
                  <ul className="list-disc pl-2 space-y-3    text-[16px] ">
                    {text.workshopPage1.section21.Cards.card3.content.map(
                      (data, index) => (
                        <li key={index}>{data}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[320px] max-w-[320px] snap-start shrink-0">
              <div className="h-36 relative">
                <img
                  src="/images/workshop/card/c3.png"
                  alt="Mountain perspective"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="">
                  <ul className="list-disc pl-2 space-y-3    text-[16px]   ">
                    {text.workshopPage1.section21.Cards.card4.content.map(
                      (data, index) => (
                        <li key={index}>{data}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="lg:min-w-[79px] 2xl:min-w-[258px] snap-start" /> */}
          </div>
        </div>
        {/* old code */}
      </div>

      {/* row */}
      <div className="py-10">
        <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto">
          <h2 className="text-[24px] md:text-[28px] font-bold text-center   mb-4 ssr-hading">
            {text.workshopPage1.section22.title}
          </h2>
          <p
            className="text-center text-[20px] sm:text-[22px] mb-16 max-w-2xl mx-auto leading-[32px] px-12"
            dangerouslySetInnerHTML={{
              __html: text.workshopPage1.section22.content,
            }}
          ></p>
          <div className="ml-3 md:ml-0">
            <div className="flex md:hidden gap-4 overflow-x-auto pb-2 -mx-4 px-4 whitespace-nowrap mb-16">
              {text.workshopPage1.section22.buttons.map((button, idx) => (
                <button
                  key={idx}
                  className=" text-[#B47447] bg-white border-2 border-[#B47447] py-6 px-6 rounded-[16px] text-[18px] font-bold min-w-[180px] md:min-w-[160px] "
                >
                  <div
                    className="text-center text-[18px] font-bold  "
                    dangerouslySetInnerHTML={{ __html: button }}
                  ></div>
                </button>
              ))}
              <button className="bg-[#FFFFFF]   py-6 px-6 rounded-[16px] font-semibold min-w-[180px] md:min-w-[160px] border border-gray-300">
                <div
                  className="text-center text-[18px] font-bold"
                  dangerouslySetInnerHTML={{
                    __html: text.workshopPage1.section22.buttons[7],
                  }}
                ></div>
              </button>
            </div>
            <div className="hidden md:grid grid-cols-4 gap-4 mb-16">
              {text.workshopPage1.section22.buttons.map((button, idx) => (
                <div
                  key={idx}
                  className="py-4 px-6 rounded-[16px] font-[800] text-[#B47447] bg-white border-2 border-[#B47447]"
                >
                  <div
                    className="text-center text-[20px] font-bold"
                    dangerouslySetInnerHTML={{ __html: button }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-10">
              <a href="/workshop/life-topics" className="bg-[#59524E] page-big-btn py-4 px-6 rounded-[8px]">Read more on Life Topics</a>
            </div>
          </div>

          <div className="bg-gray-100 flex justify-center">
            <div className="w-full lg:max-w-5xl 2xl:max-w-5xl flex flex-col md:flex-row items-stretch mx-auto mt-4 mb-4">
              <div className="w-full md:w-1/2">
                <img
                  src="/images/workshop/W-2.png"
                  alt="Workshop group"
                  className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-l-[16px] md:rounded-tr-none"
                  style={{ minHeight: "100%", height: "100%" }}
                />
              </div>
              <div className="w-full md:w-1/2 bg-[#FFF5E7] px-4 py-6 md:p-8 rounded-b-xl md:rounded-l-none md:rounded-r-[16px] flex flex-col gap-6 md:gap-3 justify-center">
                <div className="bg-white p-4 rounded-[16px] shadow-sm mb-1">
                  <h3 className="  mb-3 md:mb-4 page-common-hading">
                    {text.workshopPage1.section2.sec1.title}
                  </h3>
                  <ul className="space-y-2   text-base md:text-[16px]">
                    <li className="flex items-start  page-content">
                      <span className="w-2 h-2 mt-2 mr-3 bg-gray-600 rounded-full flex-shrink-0"></span>
                      {text.workshopPage1.section2.sec1.content[0]}
                    </li>
                    <li className="flex items-start  page-content">
                      <span className="w-2 h-2 mt-2 mr-3 bg-gray-600 rounded-full flex-shrink-0"></span>
                      {text.workshopPage1.section2.sec1.content[1]}
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-[16px] shadow-sm">
                  <h3 className="page-common-hading   mb-3 md:mb-4  ">
                    {text.workshopPage1.section2.sec2.title}
                  </h3>
                  <ul className="space-y-2   text-base md:text-[16px]">
                    <li className="flex items-start  page-content">
                      <span className="w-2 h-2 mt-2 mr-3 bg-gray-600 rounded-full flex-shrink-0"></span>
                      {text.workshopPage1.section2.sec2.content[0]}
                    </li>
                    <li className="flex items-start  page-content">
                      <span className="w-2 h-2 mt-2 mr-3 bg-gray-600 rounded-full flex-shrink-0"></span>
                      {text.workshopPage1.section2.sec2.content[1]}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
      {/* What is a Jeevan Vidya Shivir/Workshop Section */}
      <div className="bg-[#F2F4F8] flex justify-center py-6 px-3 md:px-0 h-auto lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm px-4 py-6 md:px-10 md:py-12 max-w-6xl w-full flex flex-col items-center">
          <h2 className="page-heading font-bold text-center mb-4">
            {text.workshopPage1.section23.title}
          </h2>
          <p className="text-center mb-8 page-content px-5">
            {text.workshopPage1.section23.subtitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
            <div className="bg-[#FFF5E7] rounded-lg p-4 text-center">
              <h3 className="page-xsmall-hading font-bold mb-1">
                {text.workshopPage1.section23.Cards.card1.title}
              </h3>
              <p
                className="  text-[16px] md:text-[16px] leading-[22px]  "
                dangerouslySetInnerHTML={{
                  __html: text.workshopPage1.section23.Cards.card1.content,
                }}
              ></p>
            </div>
            <div className="bg-[#FFF5E7] rounded-lg p-4 text-center">
              <h3 className="page-xsmall-hading font-bold   mb-1  ">
                {text.workshopPage1.section23.Cards.card2.title}
              </h3>
              <p
                className=" text-[16px] md:text-[16px] leading-[22px]  "
                dangerouslySetInnerHTML={{
                  __html: text.workshopPage1.section23.Cards.card2.content,
                }}
              ></p>
            </div>
            <div className="bg-[#FFF5E7] rounded-lg p-4 text-center">
              <h3 className="page-xsmall-hading font-bold   mb-1  ">
                {text.workshopPage1.section23.Cards.card3.title}
              </h3>
              <p
                className="  text-[16px] md:text-[16px] leading-[22px]  "
                dangerouslySetInnerHTML={{
                  __html: text.workshopPage1.section23.Cards.card3.content,
                }}
              ></p>
            </div>
            <div className="bg-[#FFF5E7] rounded-lg p-4 text-center">
              <h3 className="page-xsmall-hading font-bold   mb-1  ">
                {text.workshopPage1.section23.Cards.card4.title}
              </h3>
              <p
                className="  text-[16px] md:text-[16px] leading-[22px]  "
                dangerouslySetInnerHTML={{
                  __html: text.workshopPage1.section23.Cards.card4.content,
                }}
              ></p>
            </div>
            <div className="bg-[#FFF5E7] rounded-lg p-4 text-center">
              <h3 className="page-xsmall-hading font-bold   mb-1  ">
                {text.workshopPage1.section23.Cards.card5.title}
              </h3>
              <p
                className="  text-[16px] md:text-[16px] leading-[22px]  "
                dangerouslySetInnerHTML={{
                  __html: text.workshopPage1.section23.Cards.card5.content,
                }}
              ></p>
            </div>
            <div className="bg-[#FFF5E7] rounded-lg p-4 text-center">
              <h3 className="page-xsmall-hading font-bold   mb-1  ">
                {text.workshopPage1.section23.Cards.card6.title}
              </h3>
              <p
                className="  text-[16px] md:text-[16px] leading-[22px]  "
                dangerouslySetInnerHTML={{
                  __html: text.workshopPage1.section23.Cards.card6.content,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>

      {/* ShivirWorkshop Section */}
      <div className="bg-[#F2F4F8] flex flex-col items-center py-8 lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <img
          src="/images/workshop/W-3.png"
          alt="Workshop"
          className="w-full max-w-[1154px] h-auto max-h-[559px] object-cover md:rounded-[16px] shadow-md mb-0"
          style={{ objectPosition: "center top" }}
        />
        <div className="px-3">
          <div className="w-full max-w-[860px] bg-white rounded-[16px] shadow-lg -mt-16 sm:-mt-24">
            <h2 className=" font-bold text-center py-6 sm:py-7 px-0 page-heading">
              {text.workshopPage1.section24.title}
            </h2>
            <div className="flex flex-col gap-4 sm:gap-5 px-4 sm:px-6 pb-6 sm:pb-8">
              {infoData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 px-4 sm:px-5 py-4 shadow-sm bg-[#FFF5E7] rounded-[12px] min-h-[180px] sm:min-h-[220px]"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[80px] h-[75px] sm:w-[116px] sm:h-[108px] object-contain flex-shrink-0"
                  />
                  <div className="flex flex-col items-center md:items-start justify-center">
                    <h3 className="page-small-content font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="page-common-md-pera leading-[24px] text-center md:text-start">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Introduction_Home7 Section */}
      <div className="bg-[#F2F4F8] flex items-center justify-center">
        <div className="bg-[#59524E] sm:rounded-xl px-6 sm:px-8 py-10 w-full lg:max-w-5xl 2xl:max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-10 text-center ssr-hading">
            {text.workshopPage1.youtube.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-8 w-full">
            {images.map((imgObj, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden w-full h-[240px] sm:h-[280px] shadow-lg bg-white flex items-center justify-center"
              >
                <iframe
                  className="w-full h-full"
                  src={imgObj.img}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
          <a
            href="https://www.youtube.com/@jeevanvidyaofficialprogram6848"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#6b605b] font-semibold px-6 sm:px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition text-center page-big-btn-no-bg"
          >
            Visit Youtube Channel
          </a>
        </div>
      </div>

      {/* IntroductionSyllabus Section */}
      <div className="bg-[#F2F4F8] flex flex-col items-center py-10">
        <h2 className="text-[#18181B] text-3xl md:text-4xl font-bold mb-6 text-center px-14 ssr-hading">
          {text.workshopPage1.section25.title}
        </h2>
        <div className="w-full lg:max-w-5xl 2xl:max-w-5xl mx-auto px-4 md:px-0">
          <div
            className="flex rounded-lg bg-[#fdf6e7] px-2 py-2 mb-4 gap-2 overflow-x-auto scrollbar-hide flex-nowrap md:justify-center md:gap-2 md:px-0"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-10 py-2 page-common-md-pera rounded-md font-semibold text-base transition whitespace-nowrap
                ${activeTab === idx
                    ? "bg-[#f3ede0] text-[#18181B] shadow font-bold"
                    : "bg-transparent text-[#18181B] hover:bg-[#f3ede0]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full lg:max-w-5xl 2xl:max-w-5xl mx-auto px-6 md:px-0 bg-white rounded-xl shadow p-8 mb-6 min-h-[320px] flex flex-col justify-center">
          <h3 className="font-bold mb-4 text-center page-small-content">
            {current.title}
          </h3>
          <div className="text-center text-[#18181B] text-base leading-relaxed md:px-20 page-content">
            <p>{current.paragraph}</p>
            {current.note && <p className="italic mt-4">{current.note}</p>}
          </div>
        </div>
        <div className="w-full lg:max-w-5xl 2xl:max-w-5xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <h4 className="page-small-heading font-bold mb-6 text-center">
              {text.workshopPage1.cards.card1.title}
            </h4>
            <a
              href="/workshop/facilitator-profiles"
              className="bg-[#4d463f] hover:bg-[#7E746F] text-white font-semibold px-8 py-3 rounded-md shadow transition page-big-btn"
            >
              {text.workshopPage1.cards.card1.content}
            </a>
          </div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
            <h4 className="page-small-heading font-bold mb-6 text-center">
              {text.workshopPage1.cards.card2.title}
            </h4>
            <a
              href="/workshop/workshop-benefits"
              className="bg-[#4d463f] hover:bg-[#7E746F] text-white font-semibold px-8 py-3 rounded-md shadow transition page-big-btn"
            >
              {text.workshopPage1.cards.card2.content}
            </a>
          </div>
        </div>
        <style>
          {`
             .scrollbar-hide::-webkit-scrollbar {
               display: none;
             }
             .scrollbar-hide {
               -ms-overflow-style: none;
               scrollbar-width: none;
             }
            `}
        </style>
      </div>

      {/* Introduction_Home9 Section */}
      <div className="bg-[#EDE2D1] w-full rounded-xl px-4 py-8 md:py-16 text-center lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl px-5 md:px-0 font-bold mb-8 ssr-hading">
          {text.workshopPage1.section3.title}
        </h2>
        <p
          className="mb-4 text-xl  "
          dangerouslySetInnerHTML={{
            __html: text.workshopPage1.section3.content[0],
          }}
        ></p>
        <p
          className="mb-4 text-xl  "
          dangerouslySetInnerHTML={{
            __html: text.workshopPage1.section3.content[1],
          }}
        ></p>
        <p
          className="mb-4 text-xl  "
          dangerouslySetInnerHTML={{
            __html: text.workshopPage1.section3.content[3],
          }}
        ></p>
      </div>

      <section className="py-16">
        <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="page-small-heading sm:text-3xl lg:text-4xl font-bold   mb-2 ssr-hading">
              {text.workshopPage1.testimonial.title}
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 lg:p-16 mx-8 sm:mx-12">
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-none flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-8 h-8  " />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-none flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-8 h-8  " />
              </button>

              {/* Testimonial Content */}
              <div className="text-center max-w-3xl mx-auto">
                {/* Testimonial Text */}
                <blockquote className="  text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* User Info */}
                <div className="flex flex-col items-center space-y-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 rounded-full flex items-center justify-center">
                    {currentTestimonial.avtar ? (
                      <img
                        src={currentTestimonial.avtar || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-6 h-6 sm:w-7 sm:h-7  " />
                    )}
                  </div>

                  {/* Name and Location */}
                  <div className="text-center">
                    <h3 className="font-semibold   text-lg sm:text-xl">
                      {currentTestimonial.name}
                    </h3>
                    <p className="  text-sm sm:text-base">
                      {currentTestimonial.pro}
                    </p>
                    <p className="  text-sm sm:text-base">
                      {currentTestimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 ${index === currentIndex
                    ? "bg-gray-800"
                    : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TestimonialCarousel Section */}
      <div className="bg-[#F2F4F8] flex flex-col items-center py-10 px-4">
        <h2 className="sm:text-3xl lg:text-4xl font-bold text-center mb-6 ssr-hading">
          {text.workshopPage1.gallery}
        </h2>
        <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto mb-8" id="gallery">
          <Gallery images={galleryImages} />
        </div>
        {/* <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto mb-8">
          <div className="hidden md:grid grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`${
                  index === 0 || index === 3 ? "col-span-1" : "col-span-1"
                } row-span-1 w-full h-[196px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition`}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
          <div className="md:hidden flex flex-col gap-4">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-[180px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition"
              onClick={() => openModal(0)}
            />
            <div className="flex gap-4">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-1/2 h-[110px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition"
                onClick={() => openModal(1)}
              />
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-1/2 h-[110px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition"
                onClick={() => openModal(2)}
              />
            </div>
          </div>
        </div>

        {isClient && isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-2xl w-full">
              <button
                className="absolute top-4 right-4 text-white hover:  z-[60] bg-black bg-opacity-50 rounded-full p-2"
                onClick={() => {
                  console.log("Close modal clicked"); // Debugging
                  closeModal();
                }}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="relative">
                <img
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  className="w-full max-h-[80vh] object-cover rounded-lg"
                />
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition z-[60]"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition z-[60]"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )} */}

        <div className="w-full lg:max-w-5xl 2xl:max-w-5xl px-1 mx-auto mb-6">
          <div className="bg-[#e9dfcf] rounded-lg flex flex-col md:flex-row md:items-center px-4 md:px-8 py-3">
            <span className="flex-1 text-base md:text-lg font-medium flex items-center text-center md:text-left min-h-[48px] md:min-h-[56px]">
              {text.workshopPage1.section4.title}
            </span>
            <a
              href="https://app.madhyasth.org/schedule"
              className="bg-[#47423f] hover:bg-[#7E746F] text-white rounded-md h-10 px-6 flex items-center justify-center text-base font-semibold mt-3 md:mt-0 md:ml-4 transition  w-full md:w-auto"
              target="_blank"
            >
              {text.workshopPage1.section4.button}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:max-w-5xl 2xl:max-w-5xl mx-auto px-1">
          <a
            href="/workshop/download-pre-reading"
            className="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center transition min-h-[56px]"
          >
            <div className="flex-1 p-1">
              <span className="font-semibold block page-nav-card-heading ">
                {text.workshopPage1.download.card1.title}
              </span>
              <div className="  text-sm page-nav-card-pera">
                {text.workshopPage1.download.card1.content}
              </div>
            </div>
            <span className="ml-3 text-xl  ">
              <ArrowRight />
            </span>
          </a>
          <a
            href="/resource-center/Start-Adhyayan"
            className="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center transition min-h-[56px]"
          >
            <div className="flex-1 p-1">
              <span className="font-semibold block page-nav-card-heading">
                {text.workshopPage1.download.card2.title}
              </span>
              <div className="  text-sm page-nav-card-pera">
                {text.workshopPage1.download.card2.content}
              </div>
            </div>
            <span className="ml-3 text-xl  ">
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
