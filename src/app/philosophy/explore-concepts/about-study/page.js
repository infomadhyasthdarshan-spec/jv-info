'use client'
import Backjs from '@/components/Backjs';
import React from 'react';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const AboutStudy = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      <Backjs/>
      <h2 className="page-heading font-semibold">About Study</h2>

      {/* Why Study */}
      <section>
        <h3 className="page-small-heading mt-6 mb-2 ">Why should we Study?</h3>
        <ul className="list-disc page-content list-inside space-y-2">
          <li>It is not possible for us humans to live meaningfully without understanding ourselves, the world we live in, and our relationship with this world.</li>
          <li>We humans Study because we want to ‘understand’, and live with ‘humanness’. We want to be happy, be peaceful, contented, etc.</li>
          <li>The outcome of Study is ‘consciousness transformation’ or awakening. When we are awakened we can ‘see’ the <em>natural order of everything that exists</em>. We thus have a resolution (<strong>samadhan</strong>) for all states we live in. This is happiness.</li>
          <li>We thus live in ‘human-consciousness’, express our awakening, happiness and humane-conduct. This is our ultimate goal, the human goal.</li>
        </ul>
      </section>

      {/* Objective of Study */}
      <section>
        <h3 className="page-small-heading mt-16 mb-2">Objective of Study</h3>
        <p>The <strong>objective of Study</strong> is transformation from ‘animal consciousness’ to ‘human consciousness’:</p>
        <ul className="list-disc page-content list-inside space-y-2 mt-2">
          <li><strong>Freedom</strong> from wrongful mentality (अपराध मुक्ति)</li>
          <li><strong>Freedom from Illusion</strong>, via <em>Knowledge of reality</em></li>
          <li><strong>Living</strong> with humanness – with feelings such as trust, affection, care and love in our relationships</li>
          <li><strong>Participation</strong>: ensuring we promote an undivided human society and natural world order</li>
          <li><strong>Experience and express happiness</strong>, peace, contentment & joy as a result of the above.</li>
        </ul>
        <p className="mt-4 page-content">
          The approach to Study of Madhyasth Darshan consists of 2 broad Phases:
        </p>
      </section>

      {/* Phase 1 */}
      <section>
        <h4 className="page-small-heading mt-16 mb-2">
          Phase#1: Preliminary evaluation to ascertain one's seriousness
        </h4>
        <p className="mt-2 page-content">
          The first step is ‘Preliminary Evaluation’ to clear our doubts. We test the <strong>need and validity</strong> of the proposal for ourselves and all of humanity. We start by attending <span className="text-blue-600 underline">introductory</span> workshops.
        </p>
        <p className="mt-2 page-content">
          We evaluate this proposal via <strong>Scrutiny, Examination & Survey</strong> (निरीक्षण, परीक्षण, सर्वेक्षण) in the workshops, discussions and <span className="text-red-600 underline">reading of the books</span> and finding that it fulfills our need & conditions for knowing & living.
        </p>

        <p className="mt-4 page-content">There are 4 Parameters for Testing the validity of this proposal through-out the process of study:</p>
        <ul className="list-disc page-content list-inside space-y-2 mt-2">
          <li><strong>Universal</strong> for all places & people <em>(naturally acceptable to me, rational, experiential)</em></li>
          <li><strong>Perennial</strong> – for all time <em>(natural to existence)</em></li>
          <li><strong>Livable</strong>: <em>(harmony with humans and nature)</em></li>
          <li><strong>Communicable</strong>: <em>from one human to another</em></li>
        </ul>

        <p className="mt-4 page-content">
          This phase thus convinces us to commit ourselves <em>wholly to this endeavour</em> or <em>‘way of life’</em>.
        </p>
      </section>

      {/* Phase 2 Header */}
      <section>
        <h4 className="page-small-heading mt-16">Phase#2: Study & Practice (अध्ययन और अभ्यास)</h4>
      </section>
       <p className='page-content'>
        Once doubts have been cleared in the ‘preliminary evaluation’, <em>and we don’t have any other alternatives for knowing and living</em>, <strong>we commit ourselves</strong> to serious Study & Practice of the proposal. This broadly consists of:
      </p>

      {/* I. Practice of Textual Study */}
      <section>
        <h3 className="page-common-hading mt-4">I) Practice of Textual Study</h3>
        <ul className="list-disc list-outside pl-5 mt-2 space-y-2 page-content">
          <li>Systematic study & understanding of the subject matter in the Literature in a logically-consistent manner</li>
          <li>Get an intellectual-view of the nature of Reality, and the basic program for a Human</li>
        </ul>
      </section>

      {/* II. Practice in Humane Living */}
      <section>
        <h3 className="page-common-hading mt-4">II) Practice in Humane Living</h3>
        <ul className="list-disc page-content list-outside pl-5 mt-2 space-y-2">
          <li>We practice the laws of living we’ve understood in our daily life.</li>
          <li>These include righteousness in wealth, marital life (chastity) and kindness in behaviour.</li>
          <li>We recognise the relationships we live - in family and beyond, and fulfil them.</li>
        </ul>
      </section>

      {/* III. Practice Meditation/Reflection */}
      <section>
        <h3 className="page-common-hading mt-4">III) Practice Meditation/Reflection</h3>
        <ul className="list-disc page-content list-outside pl-5 mt-2 space-y-2">
          <li>This is a process of distillation where we derive inferences from our Study & Practice in Living</li>
          <li>We strive to continually focus on the realities we seek to have knowledge of our conscious-self and its many faculties or activities, of the various dimensions of reality/existence, and of humane conduct or living.</li>
          <li>This process leads to gradual clarity as glimpse (<em>bhaas</em>) and semblance (<em>abhaas</em>) in understanding and living.</li>
          <li>Our success is in being able to have direct-perception (<em>sakshatkar</em>) of such realities</li>
          <li>Such clarity or insight enables an evolving transformation in our level of consciousness.</li>
        </ul>
        <p className="mt-2 page-content">
          See a more technical description in <span className="text-red-600 underline cursor-pointer">Method of Study</span>
        </p>
      </section>

      {/* What Study is Not */}
      <section>
        <h3 className="page-small-heading mt-16">What Study is not</h3>
        <ol className="list-decimal page-content list-inside space-y-2 mt-2">
          <li>
            Study (<em>adhyayan</em>) is not merely a <em>‘bookish’ exercise</em> to be done on a desk. Study takes place with a competent person, a teacher – in whom the meanings of words reside as <em>‘knowledge of reality’</em>.
          </li>
          <li>
            This is not merely an <em>‘intellectual exercise’</em>; but one that manifests in living and necessitates investigation of & living in human-relationships and relationship with the rest of nature.
          </li>
          <li>
            This is not a <em>‘part-time’ pursuit</em>. Serious study – (in order to become awakened, complete with knowledge) requires full time commitment to Study and Practice and needs changes in lifestyle and our perspectives (<em>drishti</em>).
          </li>
          <li>
            The study of reality according to Madhyasth Darshan <strong>does not</strong> include any <em>‘prevalent meditative-practices’, ‘need to close one’s eyes’, ‘chanting’ or ‘mystical-experiences’.</em>
          </li>
          <li>
            Madhyasth Darshan <strong>does not derive</strong> from other darshans or philosophies. This is being mentioned here in order to avoid confusing this with existing theories, where the words used are similar, but with a <em>totally different intended meaning</em>.
          </li>
        </ol>
      </section>

      {/* Back link and author */}
      <p className="text-red-600 underline font-medium mt-4 cursor-pointer">
        &lt;-- Back to Adhyayan Prakriya Main Page
      </p>
      <p className="italic page-content  mt-2">
        shriram n | student | jan 2016
      </p>
      <hr className="border border-dotted mt-4" />
    </div>
  );
};

export default AboutStudy;
