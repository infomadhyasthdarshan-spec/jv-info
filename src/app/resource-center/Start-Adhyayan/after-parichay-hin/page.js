"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import ParichaySamagri from '@/components/Resources/adhyayan/ParichaySamagri';
import Uplabhdhi from '@/components/Resources/adhyayan/Uplabhdhi';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';

const tabs = [
  { label: 'परिचय सामग्री' },
  { label: 'उपलब्धियां' },

];

const Tabs = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className='lg:max-w-5xl 2xl:max-w-5xl px-3 md:px-0 py-8 mx-auto'>
      <h2 className="page-heading font-bold text-black mb-6 text-start hi-font">
        परिचय शिविर के बाद क्या करें?
      </h2>
      <div className="flex flex-col items-center">
        {/* Tab Buttons */}
        <div className="bg-[#FFF5E7] w-full h-[60px] md:rounded-[16px] px-2 py-2 flex gap-2 md:gap-4 overflow-x-auto md:overflow-visible flex-nowrap scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-sm md:text-base font-medium px-3 py-1 rounded-[16px] transition-colors duration-200 whitespace-nowrap hi-font min-w-max
        ${activeTab === index
                  ? 'bg-[#EDE2D1] text-black shadow-inner font-extrabold'
                  : '  hover:text-black'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>



        {/* Tab Content */}
        <div className="w-full mt-6">
          {activeTab === 0 && <ParichaySamagri />}
          {activeTab === 1 && <Uplabhdhi />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
