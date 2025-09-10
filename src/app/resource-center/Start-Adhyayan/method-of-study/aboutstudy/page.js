import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const AboutStudy = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="min-h-screen px-3 py-8 md:px-0 font-sans">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Section Title */}
        <h2 className=" page-heading">About Study</h2>

        {/* Why Should We Study */}
        <div>
          <h3 className="page-small-heading mb-4 mt-10 ">Why should we Study?</h3>
          <ul className="list-disc list-outside page-content pl-5 space-y-3 text-[15px] leading-relaxed  ">
            <li>
              It is not possible for us humans to live meaningfully without understanding ourselves, the world we live in, and our relationship with this world.
            </li>
            <li>
              We humans Study because we want to ‘understand’, and live with ‘humanness’. We want to be happy, be peaceful, contented, etc.
            </li>
            <li>
              The outcome of Study is ‘consciousness transformation’ or awakening. When we are awakened we can ‘see’ the natural order of everything that exists. We thus have a resolution (samadhan) for all states we live in. This is happiness.
            </li>
            <li>
              We thus live in ‘human-consciousness’, express our awakening, happiness and humane-conduct. This is our ultimate goal, the human goal.
            </li>
          </ul>
        </div>

        {/* Objective of Study */}
        <div>
          <h3 className="page-small-heading mb-4 mt-10">Objective of Study</h3>
          <ul className="list-disc list-outside page-content pl-5 text-[15px] leading-relaxed space-y-3">
            <li>
              The <strong>objective of Study</strong> is transformation from ‘animal consciousness’ to ‘human consciousness’:
              <ul className="mt-2 space-y-2 page-content list-disc list-inside pl-4 text-sm  ">
                <li><strong>Freedom</strong> from wrongful mentality (अपराध बुद्धि)</li>
                <li><strong>Freedom from Illusion</strong>, via Knowledge of reality</li>
                <li><strong>Living</strong> with humaneness – with feelings such as trust, affection, care and love in our relationships</li>
                <li><strong>Participation</strong>: ensuring we promote an undivided human society and natural world order</li>
                <li><strong>Experience and express happiness</strong>, peace, contentment & joy as a result of the above.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* 2 Phases */}
        <div className="text-[15px] leading-relaxed page-content">
          <p>
            The approach to Study of Madhyasth Darshan consists of <strong>2 broad Phases</strong>:
          </p>

          <h4 className=" mt-16 page-small-heading">Phase#1: Preliminary evaluation to ascertain one's seriousness</h4>

          <p className="mt-2">
            The first step is ‘Preliminary Evaluation’ to clear our doubts. We test the <strong>need and validity</strong> of the proposal for ourselves and all of humanity. We start by attending <a href="/workshop" className="text-[#94562B] underline">introductory</a> workshops.
          </p>

          <p className="mt-2">
            We evaluate this proposal via <strong>Scrutiny, Examination & Survey</strong> (निरीक्षण, परीक्षण, सर्वेक्षण) in the workshops, discussions and <a href="/books" className="text-[#94562B] underline">reading of the books</a> and finding that it fulfills our need & conditions for knowing & living.
          </p>

          <p className="mt-4">There are <strong>4 Parameters</strong> for Testing the validity of this proposal through-out the process of study:</p>
          <ul className="list-disc list-inside page-content pl-4 mt-2 space-y-2 text-sm  ">
            <li><strong>Universal</strong> for all places & people (naturally acceptable to me, rational, experiential)</li>
            <li><strong>Perennial</strong> – for all time (natural to existence)</li>
            <li><strong>Livable</strong>: (harmony with humans and nature)</li>
            <li><strong>Communicable</strong>: from one human to another</li>
          </ul>

          <p className="mt-4 page-content">
            This phase thus convinces us to commit ourselves wholly to this endeavour or ‘way of life’.
          </p>
        </div>

        <section className="study-section py-5  ">
      <h2 className="study-heading  page-small-heading  mb-4">
        Phase#2: Study & Practice (अध्ययन और अभ्यास)
      </h2>
      <p className="text-base md:text-lg mb-6 page-content">
        Once doubts have been cleared in the ‘preliminary evaluation’, and <i>we don’t have any other alternatives for knowing and living</i>, we <strong>commit ourselves</strong> to serious Study & Practice of the proposal.
        <br />
        This broadly consists of:
      </p>

      {/* Section I */}
      <h3 className="page-common-hading mt-8 mb-2">I) Practice of Textual Study</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 page-content">
        <li>Systematic study & understanding of the subject matter in the Literature in a logically–consistent manner</li>
        <li>Get an intellectual-view of the nature of Reality, and the basic program for a Human</li>
      </ul>

      {/* Section II */}
      <h3 className="page-common-hading mt-8 mb-2">II) Practice in Humane Living</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 page-content">
        <li>We practice the laws of living we've understood in our daily life.</li>
        <li>These include righteousness in wealth, marital life (chastity) and kindness in behaviour.</li>
        <li>We recognise the relationships we live - in family and beyond, and fulfil them.</li>
      </ul>

      {/* Section III */}
      <h3 className="page-common-hading mt-8 mb-2">III) Practice Meditation/Reflection</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2 page-content">
        <li>This is a process of distillation where we derive inferences from our Study & Practice in Living</li>
        <li>We strive to continually focus on the realities we seek to have knowledge of our conscious-self and its many faculties or activities, of the various dimensions of reality/existence, and of humane conduct or living.</li>
        <li>This process leads to gradual clarity as glimpse (<i>bhaas</i>) and semblance (<i>abhaas</i>) in understanding and living.</li>
        <li>Our success is in being able to have direct-perception (<i>sakshatkar</i>) of such realities</li>
        <li>Such clarity or insight enables an evolving transformation in our level of consciousness.</li>
      </ul>

      {/* <p className="text-base md:text-lg mb-10 page-content">
        See a more technical description in <span className="text-[#94562B] underline cursor-pointer">Method of Study</span>
      </p> */}

      {/* What Study is Not */}
      <h3 className=" page-small-heading text-red-600 mt-10 mb-4">What Study is not</h3>
      <ul className="list-disc pl-6 space-y-2 mb-10 page-content">
        <li>
          Study (<i>adhyayan</i>) is not merely a <i>‘bookish’</i> exercise to be done on a desk. Study takes place with a competent person, a teacher – in whom the meanings of words reside as ‘knowledge of reality’.
        </li>
        <li>
          This is not merely an <i>‘intellectual exercise’</i>, but one that manifests in living and necessitates investigation of & living in human-relationships and relationship with the rest of nature.
        </li>
        <li>
          This is not a <i>‘part-time’</i> pursuit. Serious study – (in order to become awakened, complete with knowledge) requires full time commitment to Study and Practice and needs changes in lifestyle and our perspectives (<i>drishti</i>).
        </li>
        <li>
          The study of reality according to Madhyasth Darshan <strong>does not</strong> include any ‘prevalent meditative-practices’; ‘need to close ones eyes’, ‘chanting’ or ‘mystical-experiences’.
        </li>
        <li>
          Madhyasth Darshan does not derive from other darshans or philosophies. This is being mentioned here in order to avoid confusing this with existing theories, where the words used are similar, but with a <strong>totally different intended meaning</strong>.
        </li>
      </ul>

      <p className="text-sm italic text-left page-content">shriram n | student | jan 2016</p>
    </section>
      </div>

      

    </div>
  );
};

export default AboutStudy;
