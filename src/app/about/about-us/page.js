"use client"
import { useLanguage } from "@/context/LanguageContext"
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';

const page = () => {
const { text, language } = useLanguage();
  useEffect(() => {
    wrapHindiWords ();
  }, []);

    return (
        <section className="py-10 lg:max-w-5xl 2xl:max-w-5xl px-3 min-h-screen mx-auto">
            <div className="space-y-6   page-content">
                <h2 className="page-heading text-start mb-6 ssr-hading">{text.aboutPage6.h1}</h2>

                <p>
                    {text.aboutPage6.p1}
                </p>

                <p>
                   {text.aboutPage6.p2}
                </p>

                <p>
                  {text.aboutPage6.p3}
                </p>

                <p>
                   {text.aboutPage6.p4}
                </p>

                <p>
                   {text.aboutPage6.p5}
                </p>

                <p>
                    {text.aboutPage6.p6} <a href="/workshop/facilitator-profiles" className="text-blue-600 underline hover:text-blue-800">here</a>. You can contact some of us <a href="/about/contact-us/contact-by-location" className="text-blue-600 underline hover:text-blue-800">here</a>.
                </p>

                <div className="text-right mt-8   italic">
                    – Shriram Narasimhan | Student | May 2016
                </div>
            </div>
        </section>
    );
};

export default page;
