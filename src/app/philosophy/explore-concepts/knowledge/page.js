"use client";
import Backjs from "@/components/Backjs";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
export default function KnowledgeSection() {
       useEffect(() => {
    wrapHindiWords ();
  }, []);
    return (
        <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
            <Backjs/>
            {/* Intro Heading */}
            <h1 className="page-heading mb-6">Knowledge</h1>

            {/* Introductory Text */}
            <h2 className="page-common-hading font-semibold mb-4">
                This section contains the basic postulations on various dimensions of
                Reality. Postulations are statements about Truth. These are in the form
                of aphorisms (सूत्रात्मक) - such that maximum knowledge is encapsulated
                in minimal words.
            </h2>
            <hr className="my-8 border-t-2 border-gray-300" />


            <p className="mb-6  page-content ">
                Knowledge is the anchor for the human being, his innate, inalienable
                need. This knowledge is:
            </p>

            {/* Knowledge List */}
            <ul className=" page-content list-disc pl-6 space-y-4">
                <li>
                    <a href="#" className="text-red-600 font-semibold hover:underline">
                        Knowledge of realistic-view of Existence: <span className="text-black">(अस्तित्व दर्शन ज्ञान)</span>
                    </a>
                    <p className="ml-4 mt-1 text-gray-700">
                        Existence is Coexistence, as nature saturated in all-pervasive
                        ‘space/energy’. Nature = collection of active units = physiochemical
                        and conscious units.
                    </p>
                </li>

                <li>
                    <a href="#" className="text-red-600 font-semibold hover:underline">
                        Knowledge of Conscious Self <span className="text-black">(Jeevan):(जीवन ज्ञान)</span>
                    </a>
                    <p className="ml-4 mt-1 text-gray-700">
                        10 activities in the Self (Conscious) and the 5 Potentials and 5
                        Forces.
                    </p>
                </li>

                <li>
                    <a href="#" className="text-red-600 font-semibold hover:underline">
                        Knowledge of perfect-Humane Conduct: <span className="text-black">(मानवीयता पूर्ण आचरण ज्ञान)</span>
                    </a>
                    <p className="ml-4 mt-1 text-gray-700">
                        Living in human-human relationships and human-nature relationships.
                        – values, character, ethics
                    </p>
                </li>
            </ul>

            {/* Flow Diagram Placeholder */}
            <div className="my-8">
                <img
                    src="/images/philosophy/k2.jpg"
                    alt="Knowledge Flow Diagram"
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Wisdom Section */}
            <h3 className="page-common-hading mt-8 mb-4">
                Wisdom based on this knowledge: <span className="italic">(vivek)
                </span>     </h3>
            <ul className="list-disc pl-6 page-content space-y-2">
                <li>
                    Knowledge of Immortality of Jeevan (Conscious Self) & Mortality of
                    Body
                </li>
                <li>
                    Knowledge of laws of living: intellectual, social & natural laws.{" "}
                    <span className="italic">
                        (boudhik niyam, samajik niyam, prakritik niyam)
                    </span>
                </li>
                <li>Identify the human-goal, the human target</li>
            </ul>

            {/* Science Section */}
            <h3 className="page-common-hading mt-8 mb-4">
                Science based on this wisdom: <span className="italic">(vigyaan)</span>
            </h3>
            <ul className="list-disc pl-6 page-content space-y-2">
                <li>Knowledge of activity, time & decision making.</li>
                <li>Sets the direction for Human-Goals identified in Wisdom.</li>

            </ul>
            <li className="mt-10 page-content">
                <span className="text-red-600  font-semibold">
                    Wisdom, science & Human Civilization
                </span>
            </li>
            <hr className="my-8 border-t-2 border-gray-300" />
            {/* Next Link */}
            <div className="text-right mb-10 mt-10">
                <a
                    href="#"
                    className="text-red-700 page-content hover:underline"
                >
                    <span className="text-black page-content">Next:</span> Knowledge of realistic-view of Existence
                </a>
            </div>

            {/* Word & Meaning Note */}
            <p className="italic page-content leading-relaxed">
                <span className="font-semibold">*Word & Meaning: –</span> The words
                employed here have specific and precise meanings. While this site has
                the definitions, the meanings to these words are resident in a human
                being. The definitions link the words to meanings in existence. For
                example: the word ‘knowledge’ used here is with a different
                meaning/depth than what is usually assumed. It is recommended that you
                get in touch with someone associated with the study of Madhyasth Darshan
                (Jeevan Vidya) to understand what these words exactly mean; else one
                runs the risk of coming to premature conclusions based on wrong
                connotations extended to these words. Attending a 7 day introductory
                workshop (shivir) is a good starting point.
            </p>

            {/* Author Credit */}
            <p className="mt-6 italic page-content">
                – shriram n | student | Jan 2012
            </p>
        </div>
    );
}
