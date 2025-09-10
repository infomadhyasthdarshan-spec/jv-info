
import React from 'react';

const Uplabhdhi = () => {
  return (
    <div className="py-8 px-4 md:px-0 mx-auto">
      <h2 className="page-small-heading text-black mb-6 font-bold hi-font">
        चरण #1 परिचय शिविर</h2>

      <p className="mb-6 hi-font page-content">
        युवा एवं प्रौढ़ों के लिए मध्यस्थ दर्शन की यात्रा सात दिवसीय जीवन विद्या परिचय शिविर से प्रारंभ होता है | जीवन विद्या परिचय शिविर से मनुष्य के जीवन के सम्पूर्ण आयाम एवं सारे परिस्थियों के बारे जानकारी मिलती है, व इनसे सम्बंधित रहस्यों का उन्मूलन होता है, साथ में समाधान का रास्ता स्पष्ट होता है | एक से अधिक प्रबोधक का 2-3 परिचय शिविर करना सुझावित है | इसमें 6 माह से 1 varsh का समय लग सकता है |
      </p>

      <h3 className="font-semibold page-content mb-4 hi-font">
        * परिचय शिविर के सामान्य फल
      </h3>
      <p className="italic mb-6 page-common-md-pera hi-font">
        (*सभी फल, पूर्व संस्कार, अध्ययन-अभ्यास  एवं वातावरण आधीन है)
      </p>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold page-small-heading mb-2 hi-font">स्थिरता</h4>
          <ul className="list-disc list-inside space-y-2 hi-font page-content">
            <li className="hi-font">मनुष्य जीवन एवं सच्चाई के प्रति स्पष्टता</li>
            <li className="hi-font">आध्यात्म/इश्वर/देवी देवता सम्बन्धी भ्रम दूर होना</li>
            <li className="hi-font">व्यक्ति, परिवार, समाज, एवं प्रकृति के स्तर संगीत हेतु व्यक्तिगत समाधान की आवश्यकता स्पष्ट होना</li>
            <li className="hi-font">मानवीय शिक्षा, उत्पादन, विनिमय, न्याय के प्रति ध्यान जाना</li>
            <li className="hi-font">जागृत होने, अध्ययन की आवश्यकता स्पष्ट होना</li>
            <li className="hi-font">जिन्दगी की सार्थक दिशा मिले</li>
          </ul>
        </div>

        <div className='mb-10'>
          <h4 className="font-semibold page-small-heading mb-2 hi-font">गुणात्मक परिवर्तन</h4>
          <ul className="list-disc list-inside space-y-2 hi-font page-content">
            <li className="hi-font">रूप/बल/धन/पद के प्रति भ्रम-भय का क्षय होना  </li>
            <li className="hi-font">भौतिकता से ध्यान हटकर व्यवहार, समाज एवं बौध्दिकता के ओरे जाना</li>
            <li className="hi-font">व्यवहार में सतर्कता बढ़ेगा, बड़ें गलतियों से बचना</li>
            <li className="hi-font">निकट संबंधों में ध्यान एवं सुधार: माता-पिता, पति-पत्नी, पुत्र-पुत्री...</li>
          </ul>
        </div>
      </div>


      <div className="space-y-4 mt-10 w-full ">
        <div className="bg-white rounded-xl p-4 border border-[#DDE1E6] page-collapse-link flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 w-full cursor-pointer" onClick={
          () => window.open("https://u.pcloud.link/publink/show?code=kZi1EAVZJcOBJMds2IR8TXmO9DazcJzlupYy", "_blank")
        }>
          <span className="flex-1 page-common-md-pera">
            <a href="#" className="text-[#94562B] mt-16 hi-font page-content">
              परिचय कड़ी का विवरण एवं अध्ययन सामग्री देखें
            </a>
            </span>
          <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
        </div>

      </div>
    </div>
  );
};

export default Uplabhdhi;
