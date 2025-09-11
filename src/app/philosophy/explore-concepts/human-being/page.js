'use client'
import Backjs from '@/components/Backjs'
import React from 'react'
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
     <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      {/* Back Button */}
      <Backjs/>
      {/* Page Heading */}
      <h1 className="page-heading mb-10">Human Being</h1>
      <hr className="border-gray-300 mb-6" />
      {/* Definition of the Human Being */}
      <h2 className="page-common-hading mb-4">
        Definition of the Human Being
      </h2>
      <p className="mb-4 page-content">
        One who actualizes his mental visions/imagination and has expectation for healthiness of mind. Since the beginning of Human history, we have used our faculty 
        of imagination to understand our surroundings and learnt to modify and live with them. We have thus actualized our imagination, be it using tools, agriculture, 
        to advanced machines and computer with AI, etc. We have achieved many milestones in this respect.
      </p>
      <p className="mb-16 page-content ">
        Each one of us desires to have a healthy mind. We don’t want internal conflict. We want to be in a state if synergy – within ourselves and with our surroundings, 
        which we can call happiness. We have yet to achieve any real progress in this regard.
      </p>

      {/* Human Purpose / Goal */}
      <h2 className="page-common-hading mb-4">Human Purpose / Goal</h2>
      <p className="mb-4 page-content">
        The universal human goal is intellectual resolution in the Self, Prosperity in Family, Trust in Society and Coexistence in Nature. Our basic purpose is to have knowledge, 
        to be awakened, to live in ‘human-consciousness’; be happy, live with ‘perfect-human-conduct’. This is our Universal goal, whether we know it or not now.
      </p>
      <p className="italic mb-16 page-content ">
        Today, we have and live a set of assumed goals which is a sum total of our impressions, the influences from the environment and our bodies. 
        Our goals, hence are not really our own, which is why they are not stable. Which is why ‘satisfaction’ remains elusive.
      </p>

      {/* Human Construct */}
      <h2 className="page-common-hading mb-4">Human Construct</h2>
      <p className="mb-4 page-content">
        The Human Being is combined form of the conscious <span className="italic">jeevan</span> and the physical-chemical body. 
        There is quantitative change in the body from the time to conception to death. There is Qualitative change in the conscious <span className="italic">jeevan</span>.
      </p>
      <p className="mb-4 page-content">
        Activities like understanding, thinking, desiring, expecting, using logic, imagination, etc are in the conscious self or jeevan. 
        Activities like physical transformation, digestion, breathing, eating, excretion, etc are in the Body. 
        Every human being has the <span className="font-semibold">‘freedom of imagination’</span> (Kalpana-sheetla) and 
        <span className="font-semibold"> ‘freedom of action’</span> (karma-svatantata).
      </p>
      <p className="italic page-content mb-16">
        We currently try to understand the human being solely on the basis of the body, which is not going to be possible.
      </p>

      {/* Human Values */}
      <h2 className="page-common-hading mb-4">Human Values</h2>
      <p className="mb-4 page-content">
        There are a total of 30 identified universal human values:
      </p>
      <ul className="list-disc list-outside ml-4 mb-4 space-y-1 page-content">
        <li>
          <span className="font-semibold">Universal values in society are:</span> Steadfastness, Courageousness, Generosity; and Kindness, Graciousness & Benevolence.
        </li>
        <li>
          <span className="font-semibold">Values in the Self are:</span> Happiness, Peace, Satisfaction & Bliss.
        </li>
        <li>
          <span className="font-semibold">Values in human-human relationship are:</span> Trust, Respect, Affection, Care, Guidance, Glory, Worship, Gratitude, & Love. 
          These 9 values reside in us as ‘established values’ and we express them in relationship as 9 ‘expressed values’.
        </li>
      </ul>
      <p className="italic page-content mb-16 ">
        What we call as values today stem from some belief or imagination or expectation for humanness.
      </p>
     

      {/* Laws of Living */}
      <section className="mb-8">
        <h2 className="page-common-hading mb-4">Laws of Living</h2>
        <p className="mb-2  page-content ">
          Once we understand reality, existence, and its inherent laws, we also
          understand and accept the universal laws of living for a human being:
        </p>
        <ul className=" page-content list-disc ml-6 mb-2">
          <li>
            <strong>Intellectual law:</strong> ensures balance & healthiness of
            mind: a) non-accumulation b) affection c) knowledge d)
            straightforwardness e) fearlessness
          </li>
          <li>
            <strong>Social law:</strong> ensures balance and regulated behaviour
            in societal living: a) self-wealth b) morality in marital life c)
            kindness in behavior
          </li>
          <li>
            <strong>Natural law:</strong> ensures balance and enrichment of
            nature: a) coexistence b) utility & complementariness
          </li>
        </ul>
        <em className='page-content'>
          Today, our laws of living or lack thereof are a set of assumptions
          based on society, culture, religion, belief and our own fancy
          imagination.
        </em>
      </section>

      {/* Human Relationships */}
      <section className="mb-8">
        <h2 className="page-common-hading mb-4">Human Relationships</h2>
        <p className="mb-2 page-content">
          There are 7 human relationships in all: Mother-Father & Son-Daughter,
          Brother-Sister, Friends, Teacher-Student, Husband-Wife, Colleague-Co
          worker & Relationship with Society/ Larger Order. The values in
          relationships like Trust, Affection, etc are expressed as expectations
          and fulfilled in these relationships.
        </p>
        <p className="mb-2 page-content">
          We assume today that relationships have to be made, or forged.
          Whereas, relationship IS in existence. We are inalienably related to
          every other human. When we accept our responsibility and duty towards
          the other human live together, it is called family.
        </p>
        <em className='page-content '>
          Today, our notion of relationship is either related to the Body, or
          some kind of gain that comes from that association. Which is why we
          can ‘make’ and ‘break’ relationships today.
        </em>
      </section>

      {/* Human Character */}
      <section className='mb-8'>
        <h2 className="page-small-heading mb-4">Human Character</h2>
        <p className="mb-2 page-content">
          Is defined as having & living with righteous wealth, fidelity in
          marital relationship and displaying kindness in behaviour. Righteous
          wealth is defined as material goods acquired via ones physical efforts
          on nature, or that received as gifts or at social functions. Kindness
          in behaviour means letting live & live.
        </p>
        <em className='page-content '>
          Even today, someone that interferes in another's marital life, does
          harm to the others mind, or wealth, or steals, etc is called upon as a
          criminal and said to have bad character.
        </em>
      </section>
       {/*Human Ethics */}
      <section>
        <h2 className="page-small-heading mb-4">Human Ethics</h2>
        <p className="mb-2 page-content">
          This is defined as State Ethics and Religious Ethics. State Ethics is defined as the protection of ones body, mind & wealth. Religious Ethics is defined as the right-utilization of ones body, mind & wealth


        </p>
        <em className='page-content'>
        Ethics can only be understood when we understand Humane Organization, its purpose, and our participation in it. Ethics today attempt to derive from morals, but since there is no Universal basis for the same, it ends being faith based. This is why Ethics are not natural today, rather we have to talk to enforcing ethics.  


        </em>
      </section>
        <hr className="border-gray-300 mb-6 mt-6" />
      <p className="page-content italic mb-2">– shriram n | student | jan 2015</p>





      </div>
  )
}

export default page