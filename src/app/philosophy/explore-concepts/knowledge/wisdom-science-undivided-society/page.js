import Backjs from '@/components/Backjs'
import React from 'react'
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <>
         <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
<Backjs/>
            <h1 className="page-heading mb-2">Knowledge Wisdom Science</h1>
      <hr className="border-gray-300 mb-6" />
      <p className='mb-6 page-small-heading'>Knowledge</p>
    
            <p className="mb-10 page-content">Knowledge is the anchor for the human being, his innate, inalienable need. This knowledge is:</p>
            <ul className="list-disc list-inside text-left ml-3 mx-auto">
              <li className="mb-1 page-content"><a className='text-[#9c5027]'>Knowledge of realistic-view of Existence:</a> [अस्तित्व दर्शन ज्ञान]</li>
              <ul className="list-disc list-outside ml-12 mb-10 page-content">
                <li>Existence is Coexistence, as nature saturated in all-pervasive 'space/energy'. Nature = collection of active units = physicochemical and conscious units.</li>
                <li>Knowledge of all four dimensions of nature (matter): form, properties, innate-nature & religion (rup, gun, swabhāv & dharm) consisting of formful and formless dimensions.</li>
              </ul>
              <li className="mb-1 page-content"><a className='text-[#9c5027]'>Knowledge of Conscious Self</a> (Jeevan): [जीवन् ज्ञान]</li>
              <ul className="list-disc list-outside ml-12 mb-10 page-content">
                <li>Knowledge of the 10 activities in the Self (Conscious) and the 5 Potentials and 5 Forces.</li>
                <li>Viz: Tasting & Choosing; Evaluating & Analysing; Contemplating & Visualising; Comprehension & Determination; Realization & Evidencing corresponding respectively to the 5 factors: disposition, mind, intellect & soul (mun, vritti, citta, buddhi & ātmā).</li>
              </ul>
              <li className="mb-1 page-content"><a className='text-[#9c5027]'>Knowledge of perfect-Humane Conduct:</a> (मानवीय आचरण ज्ञान)</li>
              <ul className="list-disc list-outside ml-12 page-content" >
                <li>Living in human-human relationships and human-nature relationships - as humane values, character & ethics.</li>
              </ul>
            </ul>
          <div className="flex justify-center mb-20">
            <img
              src="/images/philosophy/k3.jpg"
              alt="Knowledge Diagram"
              className="max-w-full mt-10 h-auto responsive-image"
            />
          </div>
          {/* Title */}
      <h2 className="page-small-heading mb-4">
        Wisdom <span className="italic">(viveka)</span>
      </h2>

      {/* Intro paragraph */}
      <p className="mb-4 page-content leading-relaxed">
        While knowledge enables understanding of <em>what</em> exists, and <em>how</em> it exists,
        Wisdom based on knowledge provides the <em>purpose</em> for human living:
      </p>

      {/* Wisdom Definition */}
      <p className="mb-4 page-content leading-relaxed">
        Wisdom or Conscience based on Knowledge is defined as knowledge of the:
      </p>

      <ul className="list-disc page-content pl-12 mb-6 space-y-3">
        <li>
          immortality of the conscious self (jeevan) &amp; mortality of the body –{" "}
          <em>hence enables discrimination between ‘true &amp; false’</em>
        </li>
        <li>
          knowledge of the laws of living as intellectual law, social law and natural law –{" "}
          <em>hence enables discrimination between ‘right &amp; wrong’</em>
        </li>
      </ul>

      <p className="mb-6 page-content leading-relaxed">
        On the basis of the above identification, wisdom enables the identification of the{" "}
        <span className="italic">Universal Human Goal</span> in the form of:
      </p>

      {/* Goals List */}
      <ul className="list-disc pl-12 mb-20 space-y-6 page-content">
        <li>
          <span className="font-semibold">Resolution</span> (samadhaan) in every Individual
          <ul className="list-none pl-4 mt-1">
            <li className="page-content italic">
              (leading to happiness) [हर व्यक्ति में समाधान]
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Prosperity</span> in every Family
          <ul className="list-none pl-4 mt-1">
            <li className="page-content italic">
              (leading to happiness, peace) [हर परिवार में समृद्धि]
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Fearlessness</span> (Trust) in Society
          <ul className="list-none pl-4 mt-1">
            <li className="page-content italic">
              (leading to happiness, peace, satisfaction) [समाज में अभय]
            </li>
          </ul>
        </li>

        <li>
          <span className="font-semibold">Coexistence</span> in all four ‘natural-orders’
          <ul className="list-none pl-4 mt-1">
            <li className="page-content  italic">
              (leading to happiness, peace, satisfaction + bliss) [प्रकृति में सह-अस्तित्व]
            </li>
          </ul>
        </li>
      </ul><br/>
      {/* Title */}
      <h2 className="page-small-heading mt-14 mb-4">
        Science <span className="italic">(vigyan)</span>
      </h2>

      {/* Section Heading */}
      <h3 className="page-common-hading mb-4 uppercase">
        The Current Scientific Outcome:
      </h3>

      {/* Intro paragraphs */}
      <p className="mb-4 page-content ">
        Humans want to succeed in the method of science. Science so far has faced the following two
        experimental &amp; behavioral difficulties in being able to succeed:
      </p>

      <ul className="list-disc pl-10 mb-6 space-y-2 page-content">
        <li>Firstly, could not find out any clue about the ultimate truth,</li>
        <li>Secondly, could not find out the basic unit, basic energy &amp; their goal</li>
      </ul>

      <p className="mb-4  leading-relaxed page-content">
        Science’s attempt to recognize the human as being equivalent to a machine and has been{" "}
        <span className="italic">entirely unsuccessful.</span>
      </p>

      <p className="mb-4  page-content">
        The scientific view is committed to struggle. On this basis, it is postulated that entire
        nature other than humans is for human consumption. People and technology based on science
        have ended up trying to dominate nature. This is at the root of our ecological crisis. Will
        science take responsibility for this outcome? Which scientist is even ready to assume this
        responsibility? (for natural destruction).{" "}
        <span className="italic">Who is responsible for science?</span>
      </p>

      {/* Subheading */}
      <h4 className="page-common-hading mt-10 mb-3 italic">
        The book or the human?
      </h4>

      <p className="mb-4  leading-relaxed page-content">
        Instruments which are an outcome of such books are assumed to be the basis for the ultimate
        truth. In this manner, rather than humans taking up responsibility, this responsibility has
        been imposed on the instrument. This was so we could escape getting embroiled in logic. An
        instrument cannot be argued with, since a machine/instrument keeps repeating the results. In
        this manner, <em>reiterating repeatedly</em> was assumed to be the basis for trust. On the
        basis of scientific endeavor, Humans thus moved away from assuming responsibility for their{" "}
        <em>actions (extrapolating it on the machine)</em>. Whereas, we find on scrutiny and
        observation that every human is in favor of assuming responsibility. Every human is in favor
        of justice, is in favor of order. At the base of all of this, every human is in favor of
        being wise.
      </p>

      <p className="mb-6  leading-relaxed page-content">
        From the co-existential view, we can thus see that while knowledge enables understanding of{" "}
        <em>what</em> exists, &amp; wisdom provides the <em>purpose &amp; goal</em>, science
        determines <em>how to achieve</em> these goals – the direction for achieving the universal
        human-goal. Science consists of :
      </p>

      {/* Science Knowledge Points */}
      <ul className="list-disc pl-10 mb-6 space-y-4 page-content">
        <li>
          <span className="font-semibold">Knowledge of Activity or procedural knowledge</span>
          <p className="pl-4 italic page-content">
            (Activity is continuous, eternal-active-presence; never ceases since units are energized
            by being in space)
          </p>
        </li>
        <li>
          <span className="font-semibold">Knowledge of Time or chronological knowledge</span>
          <p className="pl-4 italic page-content">
            (As Past, Presence &amp; Future: The Periodicity of an activity itself is measured-time)
          </p>
        </li>
        <li>
          <span className="font-semibold">Knowledge of Decision or purposeful knowledge</span>
          <p className="pl-4 italic page-content">
            (provides the direction to achieve the Human Goal identified via Wisdom – viveka)
          </p>
        </li>
      </ul>

      {/* Coexistential Science Section */}
      <h3 className="page-common-hading mb-4">
        Coexistential Science thus consists of :
      </h3>

      <ul className="list-disc pl-10 mb-6 space-y-2 page-content">
        <li>
          <span className="page-content">Material Science</span> – study &amp; implementation of
          physical-chemical interactions &amp; procedures
        </li>
        <li>
          <span className="page-content">Behavioral science</span> – study of &amp; implementation
          of human interactions &amp; ways of living
        </li>
        <li>
          <span className="page-content">Spiritual science</span> – study &amp; practice of
          conscious (psychological) interactions &amp; procedures for knowledge
        </li>
      </ul>

      <p className="mb-4 page-content leading-relaxed">
        The study of physiochemical nature and the use of technology, is thus for a{" "}
        <span className="italic">definite purpose</span>: to fulfill the universal human goal, and
        these are in keeping in mind the inherent coexistence &amp; harmony in nature.
      </p>

      <p className="mb-4 page-content leading-relaxed italic">
        Science in the co-existential view, is thus not in opposition with nature, nor is it
        alienated from human purpose and life.
      </p>

      <p className="mb-4 page-content leading-relaxed">
        This is the meaning of <span className="font-semibold">wisdom-oriented science</span>, or{" "}
        <span className="font-semibold">science with purpose.</span>
      </p>

      <p className="mb-4 page-content leading-relaxed">
        In the coexistent view, there is absolutely no entity or reality in existence that cannot be
        understood. Everything ‘in’ existence, in reality has been understood. And this can be
        communicated and can be lived.
      </p>
            <hr className="border-gray-300 mb-6" />
      <p className="mb-4 italic page-content">shriram n | student | jan 2012, updated jan 2015
</p>

         </div>

    
    </>
  )
}

export default page