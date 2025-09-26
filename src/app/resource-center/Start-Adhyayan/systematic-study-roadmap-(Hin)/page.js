"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect } from 'react';
import { wrapHindiWords } from '@/utils/fontInjector';
const SystematicRoadmap = () => {
  const { text, language } = useLanguage();
  const stagesData = [
    {
      phaseTitle: "~ प्राथमिक आधार स्तर (3 चरण) ~",
      id: "level-1",
      stages: [
        {
          label: "चरण#1",
          title: "चरण #1  परिचय",
          description:
            "युवा एवं प्रौढ़ों के लिए मध्यस्थ दर्शन की यात्रा सात दिवसीय जीवन विद्या परिचय शिविर से प्रारंभ होता है | जीवन विद्या परिचय शिविर से मनुष्य के जीवन के सम्पूर्ण आयाम एवं सारे परिस्थियों के बारे जानकारी मिलती है, व इनसे सम्बंधित रहस्यों का उन्मूलन होता है, साथ में समाधान का रास्ता स्पष्ट होता है |एक से अधिक प्रबोधक का 2-3 परिचय शिविर करना सुझावित है | इसमें 6 माह से 1 वर्ष का समय लग सकता है |",
          link:["*परिचय शिविर के बाद ऑनलाइन देखें"," परिचय कड़ी के फल एवं पठन मार्गदर्शिका PDF डाउनलोड करें"]
        },
        {
          label: "चरण#2",
          title: "चरण #2 अध्ययन बिन्दु",
          description:
            "अध्ययन बिंदु शिविर, श्री ए.नागराज के द्वारा लिखित ‘जीवन विद्या 44 उद्बोधन बिन्दुओं’ का व्याख्या है | इसमें मध्यस्थ दर्शन के मूल तत्वों से अवगत होना होता है – जैसे सहअस्तित्व दर्शन ज्ञान, चैतन्य रूपी जीवन ज्ञान में १- क्रियाएं, मानवीयतापूर्ण आचरण ज्ञान, विवेक, विज्ञान, अखंड समाज एवं सार्वभौम व्यवस्था | साथ में मध्यस्थ दर्शन का भौतिकवाद एवं आदर्शवाद का ‘विकल्प’ होना स्पष्ट होता है |३-६ माह के अंतराल में एक-दो अध्ययन बिंदु शिविर करना सुझावित है |",
        link:["अध्ययन बिन्दु कड़ी मार्गदर्शिका PDF डाउनलोड करें"]
          },
        {
          label: "चरण#3",
          title: "चरण #3: अवलोकन (Optional)",
          description:
            "अवलोकन शिविर में मध्यस्थ दर्शन के मुख्य अध्ययन के बिन्दुओं का सारांश रूप के साथ सम्पूर्ण वांग्मय का परिचय है, तथा इन्हें पढने के विधि को लेकर विमर्श होता है | साथ में अध्ययन एवं अभ्यास के विधि पर स्पष्टता आति है | अवलोकन शिविर का उद्देश्य मध्यस्थ दर्शन पुस्तकों को पढने में सुलभता, एवं पढने के अनंतर समेटने में मदद करता है | इसमें ‘चैतन्य जीवन’ को केंद्र में रखते हुए, ‘अस्तित्व’ का अध्ययन करने का मानसिकता स्पष्ट हो जाता है | | प्रथम पठन के पूर्व में ‘अवलोकन Module’ हेतु पठन एवं सुनना लगभग 9 माह से 1 वर्ष लग सकता है | अवलोकन के अनंतर अध्ययन शिविर करने से पुस्तकों को पढने की अच्छी पूर्व तय्यारी हो जाती है | ",
           
        language:["अवलोकन कड़ी मार्गदर्शिका PDF डाउनलोड करें"]
          },
      ],
    },
    {
      phaseTitle: "~ विधिवत अध्ययन स्तर (2 चरण) ~",
      id: "level-2",
      stages: [
        {
          label: "चरण#4",
          title: "चरण #4: अध्ययन शिविर  (पुस्तको के साथ प्रथम पठन)",
          description:"मध्यस्थ दर्शन अध्ययन शिविर विधिवत १२ पुस्तकों का अध्ययन है (4 दर्शन, 3 वाद, 3 शास्त्र, परिभाषा एवं संविधान) | इसमें कोई ज्येष्ठ अध्येता साथ में रहते हैं एवं पूर्ण कालीन अथवा अंश कालीन माध्यम से पूरा किया जा सकता है | इसमें समझने, जीने एवं मानवीय व्यवस्था एवं परंपरा का सम्पूर्ण सूचना सामने आ जाती है, एवं आगे इसे समझने एवं जीने का मन तैयार होता है |अध्ययन शिविर 6 माह से 2 वर्ष,  पूर्ण एवं अंश कालीन विधियों में उपलब्ध हैं | ",
          link:["पुस्तक सुलभ अध्ययन क्रम मार्गदर्शिका PDF डाउनलोड करें "]
        },
        {
          label: "चरण#5",
          title: "चरण #5: अध्ययन पुनावृत्ति (अध्ययन गोष्ठी)",
          description:"अध्ययन-अभ्यास गोष्ठी – पुतकों को कई बार पुन:-पठन के साथ साथ अपने समझ / मान्यता / निष्कर्षों को जांचने, अभ्यास के विधियों को समझने एवं परस्पर मित्री के लिए अवसर है | यह छोटे समूहों में होता है | इस चरण में सारा भाषा सिमटकर सूत्र रूप में हमारे में हो जाता है | इस क्रम में पुस्तकों को 2 से 8 बार पढना हो जाता है एवं 4 से 8 वर्ष लग सकते हैं |",
          link:["अध्ययन गोष्ठी कड़ी मार्गदर्शिका PDF डाउनलोड करें"]
        },
      ],
    },
    {
      phaseTitle: "~ क्रमबद्ध अभ्यास स्तर ~",
      id: "level-3",
      stages: [
        {
          label: "चरण#6",
          title: "चरण  #6: मनन-अभ्यास गोष्ठी (जारी)",
          description:"मनन गोष्ठी, सम्पूर्ण वांग्मय पर श्रवण अधिकार के पश्चात, अपने ‘समझ’ जैसे स्वयं होने के लिए, ज्ञान सम्मपन्न होने के लिए केन्द्रित होने के लिए है | इसमें व्यवहार, स्व-मूल्यांकन एवं समझ के मुद्दों पर महीन बा हो पाती है | इस भूमि में भाषा कम हो जाता है, अर्थ अधिक हो जाता है | मनन में प्रौढ़ता आने में कई वर्ष लगता है, यह हमारा पूर्व संस्कार एवं स्वयं प्रमाणित होने के तीव्र इच्छा पर निर्भर करता है |"
           
        },
      ],
    },
    {
      phaseTitle: "~ समझ स्तर (3 चरण) ~",
      id: "level-4",
      stages: [
        {
          label: "चरण#7,8,9",
          title: "चरण#7 (साक्षात्कार), #8 (बोध), #9 (अनुभव)",
          description: "साक्षात्कार में हम समझे हुए, मनन किये हुए निरंतर रहें वाले वास्तविकताओं को अस्तित्व में ‘वस्तु’ रूप में पहचान लेते हैं, इसका ज्ञान होता है | साक्षात्कार में भाषा एवं तर्क नहीं रहता, साक्षात्कार होने से वस्तु पर विश्वास एवं वैसे जीना में निष्ठा बन जाता है | साक्षात्कार होने से पुस्तक पीछे छूटना शुरू हो जाता है | मनन-साक्षात्कार-जीना क्रम में अवधारणा रूपी स्थिरता आने में समय लगता है | यह हमारा पूर्व संस्कार एवं स्वयं प्रमाणित होने के तीव्र इच्छा पर निर्भर करता है |",
          li:["अवधारणा होने से अमानवीयता/ निषेध पीछे रह जाता है |  विकसित चेतना का ज्ञान होता है |",
            "बोध में साक्षात्कार किये वस्तुओं पर दृढ़ता बन जाति है | बोध होने से पुस्तक पीछे छूट जाता है|",
            "साक्षात्कार-बोध क्रम में स्वयं में विश्राम, सुख, शांति, संतोष होने लगता है, एवं अनुभव पूर्वक आनंद की निरंतरता होता है |",
            "अनुभव में ज्ञान एवं आचरण पूर्ण हो जाता  है|"],
          link:["समझ कड़ी मार्गदर्शिका PDF डाउनलोड करें "]
        },
      ],
    },
  ];
  useEffect(() => {
    wrapHindiWords();
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
                  target="_blank">
                  अध्ययन यात्रा का ‘संक्षिप्त स्वरूप’ PDF डाउनलोड करें|
                </a>{" "}
                यह मार्गदर्शिका प्रत्येक चरण/स्तर का विवरण, संभावित लाभ (लक्षण) प्रस्तुत करती है।
              </p>
            </span>
            <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
          </div>
        </div>
        <div className="space-y-2 w-full mb-10">
          <div className="bg-white rounded-xl p-4 border border-[#DDE1E6] page-collapse-link flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 w-full">
            <span className="flex-1">
              <p>
                विस्तृत अध्ययन मार्गदर्शिका PDF डाउनलोड करें।{" "}
                <a
                  style={{ color: "#94562B", fontWeight: "bold" }}
                  href="https://u.pcloud.link/publink/show?code=kZ6Gm05ZfUbbDBW8fKmKB9ejvrO6cSRnRRH7#/filemanager?folder=21560812706"
                  target="_blank">
                  इसमें प्रत्येक स्तर का स्वाध्याय सामग्री भी है।
                </a>
              </p>
            </span>
            <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
          </div>
        </div>

        <p className="text-base sm:text-lg mb-6">
          'मध्यस्थ दर्शन' ज्ञान संपन्न होने एवं जीने का मार्ग है | यहाँ इसके अध्ययन के यात्रा को दर्शाया गया है | इसमें समय लगता है |
        </p>
        <p className="text-base sm:text-lg mb-6">
          अध्ययन में मुख्य रूप से चार स्तर है | प्रत्येक स्तर में कुछ "चरण" हैं, जिससे गुजरने से उस स्तर की जानकारी पुरी होती है |
        </p>

        {/* Phase Descriptions */}
        {[
          {
            title: "स्तर 1: प्राथमिक नीव",
            points: [
              "इस स्तर में मध्यस्थ दर्शन के मूल तत्वों से अवगत होकर, ग्रंथों को पढने की योग्यता विकसित होती है|",
              "इसमें 3 चरण होते हैं {परिचय शिविर, अध्ययन बिंदु (मूल अवधारणाएं), और अवलोकन",
            ],
            link: "#level-1",
          },
          {
            title: "स्तर 2: क्रमबद्ध अध्ययन (श्रवण)",
            points: [
              "इस शृंखला में दर्शन के मूल ग्रंथों को पढ़कर समझते हैं",
              "इसमें 2 चरण हैं {प्रथम पुस्तक पठन + पुनरावृति एवं अध्ययन गोष्ठी}",
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
              "इस स्तर में वास्तविकताओं का सीधे ज्ञान होता है।",
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
              className={`px-6 py-2 whitespace-nowrap rounded-[8px] text-md font-medium transition ${activeTab === idx ? "bg-[#EDE2D1]  " : "  hover: "
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
          <h3 className="font-bold mb-4 text-center page-common-md-pera">
            {phase.stages[activeTab].title}
          </h3>
          <p className="leading-relaxed whitespace-pre-line page-common-md-pera">
            {phase.stages[activeTab].description}
          </p>
        </div>
      )}


    </div>
    {/* <div className="space-y-2 mt-10 w-full mb-5">
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
      </div> */}
  </>
  );
}

export default SystematicRoadmap;
