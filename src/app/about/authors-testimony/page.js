"use client"
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
import { useLanguage } from "@/context/LanguageContext"
const page = () => {
    const { text, language } = useLanguage();
  useEffect(() => {
    wrapHindiWords ();
  }, []);
    return (
        <>
            <section className="px-4 py-8 sm:px-6 lg:px-32   font-th">
                <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto space-y-6">
                    <h2 className="page-heading text-start ssr-hading">{text.aboutPage2.title}</h2>

                    <p className="page-content">
                        {text.aboutPage2.content[0]}
                    </p>

                    <p className="page-content">
                         {text.aboutPage2.content[1]}
                    </p>

                    <p className="page-content">
                         {text.aboutPage2.content[2]}
                    </p>

                    <p className="page-content">
                         {text.aboutPage2.content[3]}
                    </p>

                    <p className="page-content">
                         {text.aboutPage2.content[4]}
                    </p>
                    <ol className="list-decimal list-inside ml-4 mt-2 space-y-1 page-content">
                        <li> {text.aboutPage2.content[5]}</li>
                        <li> {text.aboutPage2.content[6]}</li>
                        <li> {text.aboutPage2.content[7]}</li>
                    </ol>


                    <p className="page-content">
                         {text.aboutPage2.content[8]}
                    </p>

                    <p className="page-content">
                        {text.aboutPage2.content[9]}
                    </p>

                    <p className="page-content"> {text.aboutPage2.content[10]}</p>

                    <p className="page-content mt-6"> {text.aboutPage2.content[11]}</p>
                </div>
            </section>

            {/* <section className="bg-white px-4 py-16 sm:px-6 lg:px-32   font-[sans-serif]">
                <div className="lg:max-w-5xl 2xl:max-w-5xl font-th min-h-screen mx-auto space-y-6 leading-relaxed">
                    <h2 className="page-heading text-start mb-4">जीवन ज्ञान संबंधी अध्ययन</h2>

                    <p className="page-content">
                        जीवन ज्ञान संबंधी अध्ययन अस्तित्व मूलक मानव केंद्रित चिंतन विधि से प्राप्त हुआ। ऐसी प्राप्ति ए. नागराज, भजनाश्रम, अमरकंटक (म.प्र. भारत) निवासी को प्राप्त हुआ।
                    </p>

                    <p className="page-content">
                        मैं, नागराज, बता रहा हूँ कि साधना समाधि संयमपूर्वक अस्तित्वमूलक मानव केंद्रित चिंतन मुझे समझ में आया। मैं इस आधार पर साधना किया। ब्रह्म से जगत पैदा हुआ, ब्रह्म सत्य जगत मिथ्या कहा जाता है शास्त्रों में। इस जिज्ञासावश मैं साधना किया।
                    </p>

                    <p className="page-content">
                        संयमपूर्वक जब संपूर्ण अस्तित्व को अध्ययन किया अध्ययन विधि से, तब ये पता चला ब्रह्म से कोई चीज पैदा नहीं हुआ है। (व्यापक रूपी) ब्रह्म में संपूर्ण प्रकृति काम कर रहा है।
                    </p>

                    <p className="page-content">
                        भौतिकवादी विचार परम्परा के अनुसार, संरचना के आधार पर चेतना निषपत्ती बताई जाती है, जबकि इश्वरवादी विचार के अनुसार चेतना से वस्तु की निषपत्ती बताई जाती है। इन दोनों का शोध करने के उपरांत, पता लगा की सहअस्तित्व (जड़, चैतन्य एवं चेतना) नित्य वर्तमान, परम सत्य है। इसमें उत्पत्ति की कल्पना ही गलत हो गयी।
                    </p>

                    <p className="page-content">
                        विगत से, दोनों विधा से, आदर्शवादी, भौतिक विधा से, किये गये अध्ययन में छूटे हुए मुद्दे तीन बिंदुओं में मुझे समझ में आए:
                    </p>
                    <ol className="list-decimal list-inside ml-4 mt-2 space-y-1 page-content">
                        <li>सह अस्तित्वरूपी अस्तित्व दर्शन ज्ञान</li>
                        <li>चैतन्य रूपी ‘जीवन’ ज्ञान</li>
                        <li>मानवीयतापूर्ण आचरण ज्ञान</li>
                    </ol>


                    <p className="page-content">
                        मानवीयतापूर्ण आचरण ज्ञान संबंधी बात पर सभी समुदाय कुछ कुछ सोचा। किसी समुदाय का आचरण सर्वमानव को स्वीकार नहीं, यह आंकलन बीसवी शताब्दि के अंत तक हुआ।
                    </p>

                    <p className="page-content">
                        इक्कीसवी शताब्दि के प्रथम दशक में अस्तित्व मूलक मानव केंद्रित चिंतन मानव गोचर होने लगा। कुछ ज्ञानी, विज्ञानी, अज्ञानियों में स्वीकृत होने लगा। इससे मेरा मन यह स्वीकार किया कि यह सर्वमानव उपयुक्त है।
                    </p>

                    <p className="page-content">इसी आधार पर सर्वमानव सम्मुख प्रस्तुत करने का प्रयत्न किया। आशा है इससे सर्वमानव उपकृत हो।</p>

                    <p className="text-right font-semibold mt-6 page-content">– ए. नागराज, २००९</p>
                </div>
            </section> */}
        </>
    )
}

export default page