"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const SystematicRoadmap = () => {
  const { text, language } = useLanguage();
  const stagesData = [
    {
      phaseTitle: "~ प्राथमिक आधार स्तर (3 चरण) ~",
      id:"level-1",
      stages: [
        {
          label: "चरण#1",
          title: "कोर्स/चरण #1: जीवन विद्या परिचय",
          description:
            "मध्यस्थ दर्शन की यात्रा सात दिवसीय जीवन विद्या परिचय शिविर से प्रारंभ होती है। यह शिविर मानव जीवन और सभी स्थितियों के सम्पूर्ण आयामों की जानकारी देता है। इससे संबंधित रहस्यों का निवारण होता है और समाधान का मार्ग स्पष्ट होता है। सुझाव है कि आप एक से अधिक प्रबोधकों द्वारा परिचय शिविर में भाग लें। इस चरण में 6 महीने से 1 वर्ष तक का समय लग सकता है।",
        },
        {
          label: "चरण#2",
          title: "कोर्स/चरण #2: अध्ययन बिंदु",
          description:
            "'अध्ययन बिंदु' शिविर, श्री ए. नागराज द्वारा रचित 'जीवन विद्या 44 बिंदु पुस्तिका' की व्याख्या है। इसमें मध्यस्थ दर्शन के मूल तत्वों जैसे - सहअस्तित्व का ज्ञान, चेतना का ज्ञान, मानव कर्तव्य का ज्ञान, विवेक, विज्ञान, एकीकृत समाज और सार्वभौमिक व्यवस्था की जानकारी मिलती है। यह कार्यशाला यह भी स्पष्ट करती है कि मध्यस्थ दर्शन भौतिकवाद और आदर्शवाद का एक 'विकल्प' है। सुझाव है कि आप 3-6 महीने के अंतराल पर एक या दो अध्ययन बिंदु शिविर में भाग लें।",
        },
        {
          label: "चरण#3",
          title: "कोर्स/चरण #3: अवलोकन",
          description:
            "अवलोकन शिविर में मध्यस्थ दर्शन के सम्पूर्ण साहित्य का संक्षिप्त रूप में परिचय दिया जाता है, साथ ही उन्हें पढ़ने की दृष्टि पर चर्चा होती है। इसके साथ अध्ययन और अभ्यास की विधि भी स्पष्ट होती है। इसका उद्देश्य मध्यस्थ दर्शन के ग्रंथों को पढ़ने की क्षमता विकसित करना और पढ़ने के बाद अपनी समझ को संक्षेपित करना है। इसमें 'अस्तित्व आधारित मानव केंद्रित चिंतन' की मनोवृत्ति स्पष्ट होती है। इस चरण को पूरा करने में लगभग 9 महीने से 1 वर्ष लग सकता है।",
        },
      ],
    },
    {
      phaseTitle: "~ विधिवत अध्ययन स्तर (2 चरण) ~",
      id:"level-2",
      stages: [
        {
          label: "चरण#4",
          title: "कोर्स/चरण #4: 12 पुस्तकों का प्रथम पाठ",
          description:
            "मध्यस्थ दर्शन अध्ययन शिविर 12 पुस्तकों (4 दर्शन, 3 वाद, 3 शास्त्र, परिभाषाओं की पुस्तक और मानव संविधान) का क्रमबद्ध अध्ययन है। इसमें एक वरिष्ठ छात्र शिक्षण करता है और यह पूर्णकालिक या अंशकालिक आधार पर किया जा सकता है। इस अध्ययन में समझ, जीवन, मानव प्रणाली और परंपरा की पूरी जानकारी मिलती है। अध्ययन शिविर 6 महीने से 2 वर्षों तक पूर्ण/अंशकालिक रूप में उपलब्ध होते हैं।",
        },
        {
          label: "चरण#5",
          title: "कोर्स/चरण #5: पुनः पाठ और चर्चा",
          description:
            "अध्ययन-अभ्यास गोष्ठियाँ - पुस्तकों को बार-बार पढ़ने के साथ अपनी समझ/मान्यताओं/निष्कर्षों की जाँच, अभ्यास की विधियों की समझ और आपसी मित्रता में वृद्धि का अवसर मिलता है। यह छोटे समूहों में होता है। इस चरण में पूरी भाषा सूत्रों के रूप में समाहित हो जाती है। इस स्तर में पुस्तकों को 2 से 8 बार पढ़ना होता है और इसे पूरा करने में 4 से 8 वर्ष लग सकते हैं।",
        },
      ],
    },
    {
      phaseTitle: "~ क्रमबद्ध अभ्यास स्तर ~",
      id:"level-3",
      stages: [
        {
          label: "चरण#6",
          title: "कोर्स/चरण #6: मनन",
          description:
            "सम्पूर्ण साहित्य को 'समझ' लेने के बाद, मनन स्तर में जो समझा गया है, उसे आत्मसात करने और स्वयं ज्ञानी बनने पर ध्यान केंद्रित किया जाता है। इसमें आंतरिक और बाह्य आचरण, आत्म-मूल्यांकन और समझ के पहलुओं पर गहन चर्चा होती है। इस स्तर में भाषा घटती है और 'अर्थ' बढ़ता है। मनन में परिपक्वता पाने में कई वर्ष लगते हैं, और यह हमारे पूर्व संस्कार और स्वयं को बदलने की तीव्र इच्छा पर निर्भर करता है।",
        },
      ],
    },
    {
      phaseTitle: "~ समझ स्तर (3 चरण) ~",
      id:"level-4",
      stages: [
        {
          label: "चरण#7,8,9",
          title: "साक्षात्कार, बोध, अनुभव",
          description: [
            "साक्षात्कार में हमें उन वास्तविकताओं का प्रत्यक्ष अनुभव होता है जिन्हें हमने पहले समझा और चिंतन किया है। अस्तित्व में विद्यमान अपरिवर्तनशील वास्तविकताओं का ज्ञान होता है। इसमें भाषा और तर्क नहीं रहते, केवल साक्षात्कार होता है जिससे उस सत्ता में श्रद्धा और उसके अनुसार जीने का संकल्प होता है। एक बार साक्षात्कार हो जाने पर शब्द पीछे छूटने लगते हैं। अवधारणा की स्थिरता साक्षात्कार और बोध की प्रक्रिया में समय लेती है और यह हमारे संस्कार और तीव्र आकांक्षा पर निर्भर करती है।",
            "अवधारणा होते ही अमानवीय और निषिद्ध व्यवहार पीछे छूट जाते हैं। इससे विकसित चेतना का ज्ञान उत्पन्न होता है।",
            "बोध में उन बातों पर दृढ़ता होती है जो साक्षात हुई होती हैं। पुस्तक पीछे छूट जाती है।",
            "साक्षात्कार-बोध की प्रक्रिया में व्यक्ति विश्राम, सुख, शांति, आत्मसंतोष प्राप्त करने लगता है। अनुभव के बाद सुख की निरंतरता बनी रहती है।",
            "अनुभव में ज्ञान और आचरण पूर्ण हो जाते हैं।",
          ],
        },
      ],
    },
  ];
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="bg-[#f3f4f6] py-8 px-3 md:px-0">
      <div className="max-w-5xl mx-auto  ">
        <h1 className="page-heading mt-4 mb-5">मध्यस्थ दर्शन अध्ययन यात्रा</h1>
        <div className="space-y-2 w-full mb-5">
          <div className="bg-white rounded-xl p-4 border border-[#DDE1E6] page-collapse-link flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 w-full">
            <span className="flex-1">
              <p>
                "
                <a
                  style={{ color: "#94562B", fontWeight: "bold" }}
                  href="https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=25142683892"
                >
                  अध्ययन यात्रा की PDF डाउनलोड करें
                </a>{" "}
                जिसमें प्रत्येक स्तर की विस्तृत व्याख्या अंग्रेज़ी में है।"
              </p>
            </span>
            <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
          </div>
        </div>
        <div className="space-y-2 w-full mb-10">
          <div className="bg-white rounded-xl p-4 border border-[#DDE1E6] page-collapse-link flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 w-full">
            <span className="flex-1">
              <p>
                अध्ययन क्रम संक्षिप्तदृश्य PDF डाउनलोड करें{" "}
                <a
                  style={{ color: "#94562B", fontWeight: "bold" }}
                  href="https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=21560812706"
                >
                  सम्पूर्ण मार्गदर्शिका देखें
                </a>
              </p>
            </span>
            <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
          </div>
        </div>

        <p className="text-base sm:text-lg mb-6">
          'मध्यस्थ दर्शन' ज्ञान प्राप्त करने और उसके अनुसार जीने का मार्ग है। इस
          अध्ययन यात्रा को यहाँ संक्षेप में प्रस्तुत किया गया है। इसमें समय लगता
          है।
        </p>
        <p className="text-base sm:text-lg mb-6">
          अध्ययन में मुख्य रूप से चार स्तर होते हैं। प्रत्येक स्तर में कुछ 'स्तर'
          होते हैं, जिनसे होकर गुजरने पर उस स्तर की समझ पूरी होती है।
        </p>

        {/* Phase Descriptions */}
        {[
          {
            title: "स्तर 1: प्राथमिक आधार",
            points: [
              "इस स्तर में मध्यस्थ दर्शन के मूल तत्वों के प्रति सजग होकर ग्रंथों को पढ़ने की क्षमता विकसित होती है।",
              "इसमें 3 चरण होते हैं {परिचय शिविर, अध्ययन बिंदु (मूल अवधारणाएं), और अवलोकन",
            ],
            link: "#level-1",
          },
          {
            title: "स्तर 2: क्रमबद्ध अध्ययन (श्रवण)",
            points: [
              "इस स्तर में मध्यस्थ दर्शन के मूल तत्वों के प्रति सजग होकर ग्रंथों को पढ़ने की क्षमता विकसित होती है।",
              "इसमें 3 चरण होते हैं {परिचय शिविर, अध्ययन बिंदु (मूल अवधारणाएं), और अवलोकन}",
            ],
            link: "#level-2",
          },
          {
            title: "स्तर 3: क्रमबद्ध अभ्यास (मनन)",
            points: [
              "इस स्तर में अभ्यास की गहराई बढ़ती है जिससे आंतरिक परिवर्तन होता है।",
              "इसमें 1 चरण होता है {अभ्यास}",
            ],
            link: "#level-3",
          },
          {
            title: "स्तर 4: समझ और ज्ञान (साक्षात्कार)",
            points: [
              "इस स्तर में वास्तविकताओं का प्रत्यक्ष ज्ञान होता है।",
              "इसमें 3 चरण होते हैं (साक्षात्कार- बोध - अनुभव)",
            ],
            link: "#level-4",
          },
        ].map((phase, i) => (
          <div className="mb-6" key={i}>
            <h3
              className="text-lg sm:text-xl py-5 font-bold text-[#8a4d1e] cursor-pointer"
              onClick={() => {
                if (phase.link) {
                  // check if it's an internal anchor (#sectionId)
                  if (phase.link.startsWith("#")) {
                    const targetId = phase.link.replace("#", "");
                    document.getElementById(targetId)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  } else {
                    // external / normal link
                    window.open(phase.link, "_self");
                    alert("click");
                  }
                }
              }}
            >
              {phase.title}
            </h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              {phase.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-4 mb-4">
          यह मार्गदर्शिका प्रत्येक चरण/स्तर का विवरण, संभावित लाभ (लक्षण)
          प्रस्तुत करती है।
        </p>

        {/* Action Boxes */}

        {/* Tabbed Phases */}
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-16">
          {stagesData.map((phase, index) => (
            <div key={index} id={phase.id} className="scroll-mt-40">
              <PhaseBlock phase={phase} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function PhaseBlock({ phase }) {
  const [activeTab, setActiveTab] = useState(0);

  return (<>
       <div className="space-y-6 bg-[#EDE2D1] p-6 rounded-2xl">

      <h2 className="text-center text-xl sm:text-2xl font-semibold italic  ">
        {phase.phaseTitle}
      </h2>

      {/* Tabs */}
      <div className="overflow-x-auto">
        <div className="inline-flex sm:flex flex-nowrap gap-3 pl-5 pr-4 bg-[#FFF5E7] rounded-[12px] py-2 min-w-full">
          {phase.stages.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 whitespace-nowrap rounded-[8px] text-md font-medium transition ${
                activeTab === idx ? "bg-[#EDE2D1]  " : "  hover: "
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {phase.stages[activeTab]?.title && (
        <div className="bg-white  rounded-xl p-5 sm:p-6">
          <h3 className="font-bold mb-4 text-center page-xsmall-hading">
            {phase.stages[activeTab].title}
          </h3>
          <p className="leading-relaxed whitespace-pre-line page-common-md-pera">
            {phase.stages[activeTab].description}
          </p>
        </div>
      )}

     
    </div>
     <div className="space-y-2 mt-10 w-full mb-5">
        <div className="bg-white rounded-xl p-4 border border-[#DDE1E6] page-collapse-link flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 w-full">
          <span className="flex-1">
            <p>
              "
              <a
                style={{ color: "#94562B", fontWeight: "bold" }}
                href="https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=25142683892"
              >
                अध्ययन यात्रा की PDF डाउनलोड करें
              </a>{" "}
              जिसमें प्रत्येक स्तर की विस्तृत व्याख्या अंग्रेज़ी में है।"
            </p>
          </span>
          <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
        </div>
      </div>
      <div className="space-y-2 w-full mb-10">
        <div className="bg-white rounded-xl p-4 border border-[#DDE1E6] page-collapse-link flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 w-full">
          <span className="flex-1">
            <p>
              अध्ययन क्रम संक्षिप्तदृश्य PDF डाउनलोड करें{" "}
              <a
                style={{ color: "#94562B", fontWeight: "bold" }}
                href="https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=21560812706"
              >
                सम्पूर्ण मार्गदर्शिका देखें
              </a>
            </p>
          </span>
          <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
        </div>
      </div>
    </>
  );
}

export default SystematicRoadmap;
