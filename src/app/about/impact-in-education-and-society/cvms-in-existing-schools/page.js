'use client'
import React from 'react';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const EducationHumanization = () => {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      {/* Header - exactly as shown in image */}
      <div className="mb-8">
        <h1 className="page-heading mb-8">
          In Existing Schools
        </h1>
        <div className="w-full h-px bg-gray-300 mb-8"></div>
        
        <h2 className="page-small-heading mb-12">
          Humanization of existing education
        </h2>

        {/* Main Program Title */}
        <div className="text-center mb-8">
          <h3 className="page-common-hading">
            Chetna Vikas Mulya Shiksha (CVMS) or Consciousness Development – Human<br />
            Values inputs in the existing educational framework
          </h3>
        </div>

        {/* Interventions Section */}
        <div className="mb-6 mt-10">
          <h4 className="page-common-hading mb-4">
            Interventions in the prevalent Education System:
          </h4>
        </div>

        {/* Main content paragraphs - exactly as in images */}
        <div className="space-y-6 page-content">
          <p>
            Provides a universal basis for human values that <em>supplements</em> and <em>provides direction</em> to the current 
            educational system: by covering the purpose and goals of human living and its entire expanse.
          </p>
          
          <p>
            The objective of this supplementary course is to bring the context of human living into the 
            classroom. While current education is able to provide information & skills via the method of 
            memorization & analysis, it fails to touch upon the basic aspects of human living.
          </p>

          <p>
            It is amply clear that the current content and context of education is materialistic in nature – it 
            predominantly involves the study of the formal, material aspects of nature leading to a material 
            outcome – of a consumerist lifestyle & society. While this ensures physical comfort, it is both 
            unsatisfying to us as Humans as well as detrimental to nature.
          </p>

          <p>
            Fundamental aspects like understanding of the Self, understanding the nature & purpose of human 
            relationships, living in family & society, and our relationship with nature are completely ignored, or at 
            best addressed in a half hearted manner in prevalent education.
          </p>

          <p>
            This course aims to reduce that gap and point both students and teachers in the right direction by 
            providing them with the relevant content needed.
          </p>

          <p>
            Read our <span className="text-orange-600 underline cursor-pointer">Consciousness-based, Humanistic Approach to Education</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationHumanization;