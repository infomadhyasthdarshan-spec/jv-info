'use client'
import React from 'react';
import {ArrowRight} from 'lucide-react'
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

const HomeSection7 = () => {
  const router = useRouter();
  const {text} = useLanguage();
  const items = [
     {
      title: text.links.attend,
      description: text.links.des.d5,
      link: '/workshop'
    },
    {
      title: text.links.about,
      description: text.links.des.d1,
      link: '/about'
    },
    {
      title: text.links.philosophy,
      description: text.links.des.d3,
      link: '/philosophy/in-brief'
    },
    {
      title: text.links.books,
      description: text.links.des.d4,
      link: '/books'
    },
    {
      title: text.links['resource-center'],
      description: text.links.des.d2,
      link: '/resource-center'
    },
    {
      title: "मध्यस्थ दर्शन",
      description: "प्रामाणिक नागराजजी (Original Hindi)",
      link: 'https://madhyasth-darshan.megascale.co.in/'
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mb-[34px] px-3 md:px-0">
      <h2 className="page-heading mb-8 text-center">{text.Footer.Attends.h2}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start p-5 cursor-pointer
             bg-white rounded-[16px] transition-all duration-300 border border-[#DDE1E6]"
            onClick={() => router.push(item.link)}
          >
            <div>
              <h3 className="page-nav-card-heading font-bold">{item.title}</h3>
              <p className="page-nav-card-pera mt-1 font-th">{item.description}</p>
            </div>
            {/* Replace src with your icon */}
            <ArrowRight className='h-6 w-6' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection7;
