"use client"
import React from 'react';
import PdfViewer from "@/components/PdfViewer";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const Indoremp = () => {
      useEffect(() => {
    wrapHindiWords ();
  }, []);
    return (
        <div className="px-4 py-6 max-w-5xl mx-auto  ">
            <h2 className="page-heading  mb-4">
                MCVK, Indore, no longer ‘Madhyasth Darshan Center’
            </h2>
            <p className="mb-4 page-content">
                Manav Chetna Vikas Kendra (MCVK) Indore, <span className="italic font-semibold">is no longer</span> a recommended location for the introduction to Jeevan Vidya or Madhyasth Darshan adhyayan.
            </p>
            <p className="mb-4 page-content">
                See the <a className="text-red-600 underline" href='/about/our-centers'>recommended centers list here</a> and also the basis for recommending a center.
            </p>

            <hr className="my-6 border-t border-gray-400" />

            <h3 className="page-common-hading mb-3 mt-12">MCVK Indore Caution Note | MCVK इंदौर सावधानी पत्रक</h3>

            <p className="mb-4 page-content">
                Rarely, an existing center may be <span className="italic font-semibold">omitted</span> from the ‘recommended list’ since they are found to not be having some or all the needed characteristics (
                <span className="italic">free of pardhan, parnaari-parpurush & parpeeda…towards other centers & co-students, respect for distance between men & women, etc</span>).
            </p>

            <p className="mb-4 page-content">
                For instance, MCVK Indore मानव चेतना विकास केंद्र, इंदौर as of 17th August 2020 has been omitted from this list until further change due to straying away from these characteristics.
                <span className="italic"> An unfortunate series of misrepresentation, misinterpretation, etc have caused this.</span>
            </p>

            <p className="mb-4 italic page-content">
                This is not unexpected in the evolution of any darshan, where practitioners tend to ‘mix’ their previous pravritti or tendencies with that given in the ‘darshan’. This can be ‘rectified’ by sticking to the <a href="/resource-center/Start-Adhyayan/method-of-study" className="text-orange-600 italic font-semibold">‘adhyayan-vidhi’</a> by Shri Nagaraj. A group of concerned students have furthered a <a href='https://megascale.cloud/JV/folder/indore-caution-note.pdf' className="text-orange-600 font-semibold italic">caution note, which can be read here.</a>
            </p>

            <p className="mb-6 page-common-hading italic mt-12">
                Every person is free to pursue their path wherever they deem fit.
            </p>

            <p className="mb-4 page-content">
                कभी-कभार, कोई स्थान हमारे सुझाए गए स्थानों से लोपित किया जाता है, क्योंकि वहां के कार्य एक या अनेक <span className="font-semibold">आवश्यक नियमों</span> का उल्लंघन किये हैं, अथवा वहां के कार्य स्थगित हो गए हों।<br />
                उदाहरण के रूप में MCVK इंदौर, १७ अगस्त २०२० से यहाँ से लो‍पित किया गया है, क्योंकि वे कुछ नियमों से भटक गए हैं। कुछ दुर्भाग्यपूर्ण मिथ्यावचन, अपविवेचन के कारण यह हुआ है।
            </p>

            <p className="mb-4 page-content">
                किसी भी दर्शन के विकासक्रम में यह असामान्य नहीं है, क्योंकि प्रचलित प्रवृत्तियों एवं पूर्व मान्यताओं को ‘दर्शन’ के साथ मिला लेते हैं। इसका परिषोधन, नागराजजी द्वारा दिए <a href='/resource-center/Start-Adhyayan/method-of-study' className="text-red-600 font-semibold">अध्ययन विधि</a> को मानने से हो सकता है। कुछ चिंतित विद्यार्थियों ने एक <span className=" font-semibold">सावधानी पत्रक</span> प्रकाशित किया है, <a href='https://megascale.cloud/JV/folder/indore-caution-note.pdf' className="text-red-600 font-semibold underline">जिसे आप यहाँ पढ़ सकते हैं</a>।
            </p>

            <p className="page-content italic">
                प्रत्येक व्यक्ति, जहाँ उचित समझे, वहाँ अपने मार्ग का अनुसरण करने के लिए स्वतंत्र है।
            </p>
           {/* PDF View */}
                <PdfViewer fileUrl="/pdf/indore-caution-note.pdf" />
           {/* PDF View */}

        </div>
    );
};

export default Indoremp;
