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
      phaseTitle: text.SystematicRoadmapEng.stages.title1,
      id: "level-1",
      stages: [
        {
          label: text.SystematicRoadmapEng.stages.stage1.st,
          title: text.SystematicRoadmapEng.stages.stage1.title,
          description: text.SystematicRoadmapEng.stages.stage1.content,
        },
        {
          label: text.SystematicRoadmapEng.stages.stage2.st,
          title: text.SystematicRoadmapEng.stages.stage2.title,
          description: text.SystematicRoadmapEng.stages.stage2.content,
        },
        {
          label: text.SystematicRoadmapEng.stages.stage3.st,
          title: text.SystematicRoadmapEng.stages.stage3.title,
          description: text.SystematicRoadmapEng.stages.stage3.content,
        },
      ],
    },
    {
      phaseTitle: text.SystematicRoadmapEng.stages.title2,
      id: "level-2",
      stages: [
        {
          label: text.SystematicRoadmapEng.stages.stage4.st,
          title: text.SystematicRoadmapEng.stages.stage4.title,
          description: text.SystematicRoadmapEng.stages.stage4.content,
        },
        {
          label: text.SystematicRoadmapEng.stages.stage5.st,
          title: text.SystematicRoadmapEng.stages.stage5.title,
          description: text.SystematicRoadmapEng.stages.stage5.content,
        },
      ],
    },
    {
      phaseTitle: text.SystematicRoadmapEng.stages.title3,
      id: "level-3",
      stages: [
        {
          label: text.SystematicRoadmapEng.stages.stage6.st,
          title: text.SystematicRoadmapEng.stages.stage6.title,
          description: text.SystematicRoadmapEng.stages.stage6.content,
        },
      ],
    },
    {
      phaseTitle: text.SystematicRoadmapEng.stages.title4,
      id: "level-4",
      stages: [
        {
          label: text.SystematicRoadmapEng.stages.stage789.st,
          title: text.SystematicRoadmapEng.stages.stage789.title,
          description: text.SystematicRoadmapEng.stages.stage789.content,
        },
      ],
    },
  ];

  const getHrefFromItem = (item) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(item, "text/html");
    const anchor = doc.querySelector("a");
    return anchor ? anchor.getAttribute("href") : null;
  };

  // Function to handle click on div
  const handleItemClick = (item) => {
    const href = getHrefFromItem(item);
    if (href) {
      // Check if the link is external or has download attribute
      const isExternal = href.startsWith("http") || href.startsWith("//");
      const isDownload = item.includes("download");

      if (isDownload) {
        // Trigger download for files
        const link = document.createElement("a");
        link.href = href;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (isExternal) {
        // Open external links in a new tab
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        // Handle internal navigation (e.g., using window.location or a router like react-router)
        window.location.href = href; // Modify this if using react-router
      }
    }
  };
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="bg-[#f3f4f6] py-8 px-3 md:px-0">
      <div className="lg:max-w-5xl 2xl:max-w-5xl mx-auto">
        <p className="page-heading mb-10  ">
          Madhyasth Darshan Journey Roadmap{" "}
        </p>
        <br />
        {/* Action Boxes */}
        <div className="space-y-4 w-full mb-12">
          {text.SystematicRoadmapEng.links.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 border border-[#DDE1E6] page-collapse-link flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 w-full cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <span className="flex-1 page-content">
                <p dangerouslySetInnerHTML={{ __html: item }} />
              </span>
              <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
            </div>
          ))}
        </div>
        <p className="page-content mb-6">
          {text.SystematicRoadmapEng.content[0]}
        </p>
        <p className="page-content mb-6">
          {text.SystematicRoadmapEng.content[1]}
        </p>

        {/* Phase Descriptions */}
        {[
          {
            title: text.SystematicRoadmapEng.phase1.title,
            points: text.SystematicRoadmapEng.phase1.content,
            link: text.SystematicRoadmapEng.phase1.link,
          },
          {
            title: text.SystematicRoadmapEng.phase2.title,
            points: text.SystematicRoadmapEng.phase2.content,
            link: text.SystematicRoadmapEng.phase2.link,
          },
          {
            title: text.SystematicRoadmapEng.phase3.title,
            points: text.SystematicRoadmapEng.phase3.content,
            link: text.SystematicRoadmapEng.phase3.link,
          },
          {
            title: text.SystematicRoadmapEng.phase4.title,
            points: text.SystematicRoadmapEng.phase4.content,
            link: text.SystematicRoadmapEng.phase4.link,
          },
        ].map((phase, i) => (
          <div className="mb-6" key={i}>
            <h3
              className="page-small-hading text-[#8a4d1e]"
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
                  }
                }
              }}
              style={{ cursor: phase.link ? "pointer" : "default" }}
            >
              {phase.title}
            </h3>

            <ul className="list-disc ml-6 page-content mt-2 space-y-1">
              {phase.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
        <p className="mt-4 page-content mb-4">
          {text.SystematicRoadmapEng.subtitle}
        </p>

        {/* Tabbed Phases */}
        <div className="max-w-5xl mx-auto px-0 py-8 space-y-16">
          {stagesData.map((phase, index) => (
            <div id={phase.id} key={index} className="scroll-mt-40">
              <PhaseBlock phase={phase} />
            </div>
          ))}
        </div>
        {/* Action Boxes */}
        <div className="space-y-4 w-full mb-12">
          {text.SystematicRoadmapEng.links.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 border border-[#DDE1E6] page-collapse-link flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 w-full cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <span className="flex-1 page-content">
                <p dangerouslySetInnerHTML={{ __html: item }} />
              </span>
              <img src="/icon/link.svg" alt="arrow-right" className="h-7 w-7" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function PhaseBlock({ phase, text }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-6 bg-[#EDE2D1] p-6 rounded-2xl">
      <h2 className="text-center page-small-hading italic">
        {phase.phaseTitle}
      </h2>

      {/* Tabs */}
      <div className="overflow-x-auto">
        <div className="inline-flex sm:flex flex-nowrap gap-3 pl-5 pr-4 bg-[#FFF5E7] rounded-[12px] py-2 min-w-full">
          {phase.stages.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 whitespace-nowrap rounded-[8px] text-sm font-medium transition ${
                activeTab === idx ? "bg-[#EDE2D1]" : "hover:bg-[#f5f5f5]"
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {phase.stages[activeTab]?.title && (
        <div className="bg-white rounded-xl p-5 sm:p-6">
          <h3 className="mb-4 text-center page-xsmall-hading">
            {phase.stages[activeTab].title}
          </h3>
          <p className="leading-relaxed whitespace-pre-line page-common-md-pera">
            {phase.stages[activeTab].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default SystematicRoadmap;
