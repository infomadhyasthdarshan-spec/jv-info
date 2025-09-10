'use client'
import React from 'react'
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const UsefulPointer = () => {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <>
      <div className="max-w-5xl mx-auto px-3 md:px-0 py-8">
        <h1 className=" page-heading mb-5">Things to keep in mind</h1>
        <h1 className="page-small-heading mb-6">Living –जीना</h1>
        <ul className="list-disc pl-5 space-y-2 page-content px-4 md:px-0">
          <li>‘Adhyayan’ is not just about ‘reading at a desk’. Reading & Analysis is the first step in the Study Process.</li>
          <li>Study & Practice also involves ‘Self-Evaluation’ and ‘Living accordingly‘:</li>
          <ul className="list-disc pl-5 space-y-2 page-content">
            <li>as Behavior (Vyavaharabhyas) & fulfillment of relationships with other Humans (in Family, friends, etc) and</li>
            <li>‘Work’ with the rest of nature. (Karmabhyas)</li>
          </ul>
          <li>Practice of ‘Living’  according to ‘intellectual-law’(बौद्धिक नियम), social-law(सामाजिक नियम) and natural-law(प्राकृतिक नियम) is an integral part of Practice. Read the <a className='text-[#94562B]' href='/resource-center/Start-Adhyayan/method-of-study/aboutstudy'>method of study</a> </li>
        </ul>

        <div className='mt-10  md:px-0'>
          <h1 className="page-small-heading mb-6">Meet & Sharing with people –  सामाजिकता</h1>
          <ul className="list-disc pl-5 space-y-2 page-content">
            <li>‘Adhyayan’ or Study is not an ‘isolated’ exercise. While reading and other media are important, guidance is ultimately only from a Human Being (Teacher) who has understood, hence it is important to be in touch with a competent person you feel can guide you.</li>
            <li>You may want to ‘share’ what you have ‘learned/ understood’ with others – via small discussions or even conducting full-introductory shivirs yourself. Keep in mind that we are doing this for ‘our practice’, and to ‘test & deepen’ our own understanding. Not to ‘change the world’. The world will be properly benefited, only when we are ourselves complete, have had ‘Understanding’ ourselves. Sharing what we have learned benefits the world anyways. Hence, this is not primarily a ‘social change’ program. Rather, it is a process of having knowledge and living with humane-conduct ourselves, and change percolating to others via our own understanding & living.</li>
          </ul>
        </div>
        <div className='mt-10'>
          <h2 className="page-small-heading mb-6 italic md:px-0">
            Not ‘Mixing’ – <span className="not-italic">बिना मिलावट का अध्ययन</span>
          </h2>

          {/* Bullet Points */}
          <ul className="list-disc px-4 md:px-0 list-outside page-content pl-5 space-y-4 text-[15px] leading-relaxed  ">
            <li>
              The study of reality according to Madhyasth Darshan <strong>does not</strong> include any ‘prevalent meditative-practices’, ‘need to close ones eyes’, ‘chanting’ or ‘mystical-experiences’.
            </li>
            <li>
              <span className="italic text-[#c52e2e] font-medium page-content">
                ‘Madhyasth Darshan’ does not derive from, nor related to
                Vedanta, the YogaSutras by Sage Patanjali, Buddhism or any other Darshan
                in any way, albeit one will find many similar sounding words and overlapping concepts.
              </span>
              <ul className="list-disc list-inside page-content pl-5 mt-2 space-y-1 text-sm  ">
                <li>
                  This is being mentioned here in order to avoid confusing this with existing theories, where the words like <em>‘Shravan, Manan, Nididhyasan’</em>, etc used are similar, but with a <em>totally different intended meaning</em>.
                </li>
              
              </ul>
            </li>

            <li className='page-content'>
              ‘Study’ also does not mean ‘comparative studies’ with other <em>philosophies/darsanas</em>
            </li>

            <li className='page-content'>
              Hence, Madhyasth Darshan needs to be studied and practiced in its own right, and not on the basis of any current / past practice, or some ‘hybrid-method’ we may come up with.
            </li>

            <li className='page-content'>
              The method to achieve anything is provided by one who has crossed that path, not the student that is on the path himself.
            </li>
          </ul>

          {/* Highlight Box */}
          <div className="bg-[#EDE2D1] px-6 py-8 page-quotes text-center rounded-md mt-10 mb-10 text-[15px] text-[#1e1e1e] leading-relaxed">
            <p className="italic">~</p>
            <p className="font-semibold italic">
              ** Remember, stick to the ‘Original Guidance’ by Shri Nagarj in matters related to <em>adhyayan vidhi</em> and <em>jeevan jagriti!</em>
            </p>
            <p className="italic">~</p>
          </div>

          {/* Footer */}
          <p className="page-content mt-3 italic   px-4 md:px-0">
            shriram n | student | jan 2013 – updated Feb 2022
          </p>
        </div>
      </div>
    </>)
}

export default UsefulPointer