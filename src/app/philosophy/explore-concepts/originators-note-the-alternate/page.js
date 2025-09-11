"use client"
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Backjs from "@/components/Backjs";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
function AccordionItemSimple({ title, children, isDefaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="bg-gray-100 rounded shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-3 text-left font-semibold   hover:bg-gray-200 transition"
      >
        <div className="flex items-center space-x-2">
          {isOpen ? (
            <Minus size={20} className=" " />
          ) : (
            <Plus size={20} className=" " />
          )}
          <span>{title}</span>
        </div>
      </button>
      {isOpen && children && (
        <div className="px-4 pb-4 text-sm  ">{children}</div>
      )}
    </div>
  );
}

export default function TheAlternativePage() {
  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
            <Backjs/>

      {/* Header */}
      <div className="mb-6">
        <h1 className="page-heading mb-2">The Alternative (विकल्प) *</h1>
        <hr className="border-t border-dotted border-gray-400 mb-4" />
        <p className="page-small-heading mb-4">Translator's Note:</p>
      </div>

      {/* Bullet Points */}
      <div className="mb-6 text-sm">
        <ul className="space-y-2  text-lg">
          <li className="flex">
            <span className="mr-2">•</span>
            <span>"Vikalp" or "Alternative" provides the background for the emergence of the Madhyasth Darshan proposal.</span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span>
            <span>It is presented as an <strong>"Alternative"</strong> to Idealism (Spiritualism, Pantheism, Super-Naturalism) and Materialism.</span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span>
            <span>This is a <strong>Universal proposal</strong> for all human beings, in all Places, for all Time. "Human Religion is one, and Human Race is one".</span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span>
            <span>Madhyasth Darshan (Coexistentialism) does not profess or promote the Vedas or the Hindu religion or any other tradition or belief. It has its own <strong>independent standing</strong> on reality.</span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span>
            <span>Definitions of the keywords used in this presentation are provided on this website. Please read this write-up along with these definitions.</span>
          </li>
        </ul>
      </div>
      <hr className="border-t border-dotted border-gray-400 mb-4" />
      {/* Preface */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="page-small-heading mb-4">Preface</h2>
          <div className="text-right mb-4">
            <span className="text-xl cursor-pointer">* PDF download <span className="text-red-500">here</span></span>
          </div>
        </div>
        <p className="mb-4 text-lg leading-relaxed">My fellow human brothers and sisters,</p>
        <p className="mb-4 text-lg leading-relaxed">
          <em>The Study of Human-being</em> could not be accomplished until now by the two major ideologies – Theism-Idealism and Materialism (Science) – that emerged and evolved in the history of humankind. I experienced happiness while informing you that – The Alternative is "Madhyasth Darshan Saha-Astitva-Vad" for which another name is "Existence-Rooted Human-Centric Contemplation". The Study of Human-being is now possible, in fact, and for coexistence with Madhyasth Darshan.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          <em>The Alternative</em> here is an attempt to make you aware that all scrutiny, examination, and survey exercises have been completed for universalizing the study of human-being through the method of value-education based on consciousness-development. One such place is “Abhyudaya Sansthan” in Chattisgarh, India.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          This presentation also elucidates how all resolved-humans can live with justice; how every resolved-family can live with resolution and prosperity; and how justice, resolution, and prosperity can be universalized in humankind through the method of education. I trust you will internalize the presented information – using your own good rationale.
        </p>
        <div className="text-right mt-6 text-xl mb-2">
          <p>Yours,</p>
          <p className="font-semibold mt-2 mb-2">A. Nagraj</p>
          <div className="mt-2 page-common-pera leading-tight mb-2">
            <p className="mb-2">Originator – Madhyasth Darshan Saha-Astitva-Vad,</p>
            <p className="mb-2">Divya Path Sansthan,</p>
            <p className="mb-2">Bhajanashram, Amarkantak,</p>
            <p className="mb-2">Distt Anuppur, M.P.</p>
            <p className="mb-2">INDIA</p>
          </div>
        </div>
      </div>

      {/* The Background */}
      <div className="mb-8">
        <h2 className="page-small-heading mb-3">The Background</h2>
        <p className="mb-4 text-lg leading-relaxed">
          The study of human-being could not be achieved by the method of instability, uncertainty rooted physical-chemical material centric ideology or Science. The study of human-being could also not be achieved by the method of mystery rooted idealistic contemplation. In both these types of ideologies, human-being has been called a kind of animal (jeev).
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          In the form of an alternative, via the method of existence-rooted human-centered contemplation, Madhyasth-Darshan Sah-astitva-vad recognized and helped others recognize the human-being as belonging to the knowledge-order.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          According to Madhyasth-Darshan, human-being alone is the knower in existence (one who knows), existence in the form of coexistence is the reality worth knowing, in other words, is the entire reality to be known, this itself is knowledge of darshan or realistic-view. Along with this, the method for evidencing coexistence with knowledge of jeevan and complete-humane conduct has now become study-able.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          The knowledge of existence rooted human-centric contemplation, Madhyasth Darshan, Sah-astitva-vad has been presented for study in literature-form by me before humankind.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Prior to existence-rooted human-centric contemplation, I (A. Nagraj, Agrahar Nagraj, Hassan district, Karnataka State, India) was initiated in spiritual-knowledge vedic-ideology based worships and actions.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          (* A Nagraj was born on 14 January, 1920)
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          According to Vedantic-knowledge “Brahman is Real, World is Illusion” – whereas the origin of the material and conscious world has been said to have been from Brahman.
        </p>
        <div className="mb-4 text-lg leading-relaxed">
          <p>Worship (upasana) :- in the context of deities</p>
          <p>Action (karma) :- All actions for attaining “heaven” (in language form)</p>
          <p>In the Manu Dharma Shastra :- Prescribes code of daily conduct of four social-classes (varna) in four life-stages (ashrama).</p>
          <p>Rituals :- From conception till death, sixteen types of ritual-services are believed and their activities are prescribed.</p>
        </div>
        <p className="mb-4 text-lg leading-relaxed">From the study of all these, there arose a question in my mind:</p>
        <li className="mb-4 text-lg leading-relaxed italic list-disc">
          How could the conscious and material world that originated from the “ultimate-truth, knowledge, infinite Brahman” be an illusion? Upon taking this inquiry to the vedic-scholars and other renowned wise people of that time: –
        </li>
        <p className="mb-4 text-lg leading-relaxed">
          I got the assurance that ‘the unknown becomes known’ in the state of samadhi. On the basis of its confirmation in the scriptures, I accepted to perform the necessary activities for sadhana, samadhi and sanyam. In the state sanyam, via the method of study and realization, I obtained the complete-understanding of entire existence being and manifesting as coexistence, as a result of which Madhyasth Darshan, Sah-Astitva-vaad arose in literature form as an alternative.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          According to scriptures of idealism and mystery-rooted, God-centered contemplation and tradition – “Knowledge is unmanifest and is incommunicable.”
        </p>
        <p className="mb-4 text-lg leading-relaxed font-bold">
          According to Madhyasth-Darshan – Knowledge is manifest, communicable and knowable via the method of study, and it became clear that its evidence is universally achievable through human-behaviour.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          In material centered ideology according to instability, indefiniteness-rooted materialism, science is believed to be knowledge, in which it is said that man hypothesizes the laws of nature. As its alternative, according to coexistentialist ‘existence rooted human-centeric contemplation’; it has been postulated that existence is stable, progress and awakening are definite, and all laws are natural in state and manifestation.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          The nature of existence is not just physiochemical, but all physical, chemical, and conscious (jeevan) entities are inseparably present in the all-pervasive-entity (Omnipresence). This itself is the essence of Madhyasth Darshan, Sah-astitva-vad.
        </p>
      </div>

      {/* Accordion Items */}
      <div className="space-y-3">
        {/* <AccordionItemSimple
          key="vikalp"
          title="'Vikalp' – 'The Alternative'"
          isDefaultOpen={false}
        >
          <div>
            <p className="mb-4 text-lg leading-relaxed"><strong>Translator’s Note:</strong></p>
            <p className="mb-4 text-lg leading-relaxed">“Vikalp” or ‘Alternative’ provides the background for the emergence of the Madhyasth Darshan proposal.</p>
            <p className="mb-4 text-lg leading-relaxed">It is presented as an “Alternative” to Idealism (Spiritualism, Pantheism, Super-Naturalism) and Materialism. [आदर्शवाद और भौतिकवाद का विकल्प].</p>
            <p className="mb-4 text-lg leading-relaxed">This is a Universal proposal– for all human beings, in all Places, for all Time. “Human Religion is one, and Human Race is one”.</p>
            <p className="mb-4 text-lg leading-relaxed">Madhyasth Darshan- (Coexistentialism) does not profess or promote the ‘Vedas’, or the ‘Hindu’ religion or any other tradition or belief. It has its own independent standing – on reality.</p>
            <p className="mb-4 text-lg leading-relaxed">Definitions of the keywords used in this presentation are provided on this website. Please read this write-up along with these definitions.</p>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Preface</h2>
              <div className="text-right mb-4">
                <span className="text-xl cursor-pointer">* PDF download <span className="text-red-500">here</span></span>
              </div>
              <p className="mb-4 text-lg leading-relaxed">My fellow human brothers and sisters,</p>
              <p className="mb-4 text-lg leading-relaxed">
                The Study of Human-being could not be accomplished until now by the two major ideologies – Theism-Idealism and Materialism (Science) – that emerged and evolved in the history of humankind. I experience happiness while informing you that – The Alternative is “Madhyasth Darshan Saha-Astitva-Vad”, for which another name is “Existence-Rooted Human-Centric Contemplation”. The Study of Human-being is now possible in, from, and for coexistence with Madhyasth Darshan.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                The Alternative here is an attempt to make you aware that all scrutiny, examination, and survey exercises have been completed for universalizing the study of human-being through the method of value-education based on consciousness-development. One such place is “Abhyudaya Sansthan” in Chattisgarh, India.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                This presentation also elucidates how all resolved-humans can live with justice; how every resolved-family can live with resolution and prosperity; and how justice, resolution, and prosperity can be universalized in humankind through the method of education. I trust you will internalize the presented information – using your own good rationale.
              </p>
              <div className="text-right mt-6 text-xl mb-2">
                <p>Yours,</p>
                <p className="font-semibold mt-2 mb-2">A. Nagraj</p>
                <div className="mt-2 text-xs leading-tight mb-2">
                  <p className="mb-2">Originator – Madhyasth Darshan Saha-Astitva-Vad,</p>
                  <p className="mb-2">Divya Path Sansthan,</p>
                  <p className="mb-2">Bhajanashram, Amarkantak,</p>
                  <p className="mb-2">Distt Anuppur, M.P.</p>
                  <p className="mb-2">INDIA</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">The Background</h2>
              <p className="mb-4 text-lg leading-relaxed">
                The study of human-being could not be achieved by the method of ‘instability, uncertainty rooted physical-chemical material centric ideology’ or Science. The study of human-being could also not be achieved by the method of ‘mystery rooted idealistic contemplation’. In both these types of ideologies, human-being has been called a kind of animal (jeev).
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                In the form of an alternative, via the method of ‘existence-rooted human-centered contemplation’, Madhyasth-Darshan Sah-astitva-vad recognized and helped others recognize the human-being as belonging to the knowledge-order.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                According to Madhyasth-Darshan, human-being alone is the knower in existence (one who knows), existence in the form of coexistence is the reality worth knowing, in other words, is the entire reality to be known, this itself is knowledge of darshan or realistic-view. Along with this, the method for evidencing coexistence with knowledge of jeevan and complete-humane conduct has now become study-able.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                The knowledge of existence rooted human-centric contemplation, Madhyasth Darshan, Sah-astitva-vad has been presented for study in literature-form by me before humankind.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Prior to existence-rooted human-centric contemplation, I (A. Nagraj, Agrahar Nagraj, Hassan district, Karnataka State, India) was initiated in spiritual-knowledge vedic-ideology based worships and actions.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                (* A Nagraj was born on 14 January, 1920)
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                According to Vedantic-knowledge “Brahman is Real, World is Illusion” – whereas the origin of the material and conscious world has been said to have been from Brahman.
              </p>
              <div className="mb-4 text-lg leading-relaxed">
                <p>Worship (upasana) :- in the context of deities</p>
                <p>Action (karma) :- All actions for attaining “heaven” (in language form)</p>
                <p>In the Manu Dharma Shastra :- Prescribes code of daily conduct of four social-classes (varna) in four life-stages (ashrama).</p>
                <p>Rituals :- From conception till death, sixteen types of ritual-services are believed and their activities are prescribed.</p>
              </div>
              <p className="mb-4 text-lg leading-relaxed">From the study of all these, there arose a question in my mind:</p>
              <p className="mb-4 text-lg leading-relaxed italic">
                How could the conscious and material world that originated from the “ultimate-truth, knowledge, infinite Brahman” be an illusion? Upon taking this inquiry to the vedic-scholars and other renowned wise people of that time: –
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                I got the assurance that ‘the unknown becomes known’ in the state of samadhi. On the basis of its confirmation in the scriptures, I accepted to perform the necessary activities for sadhana, samadhi and sanyam. In the state sanyam, via the method of study and realization, I obtained the complete-understanding of entire existence being and manifesting as coexistence, as a result of which Madhyasth Darshan, Sah-Astitva-vaad arose in literature form as an alternative.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                According to scriptures of idealism and mystery-rooted, God-centered contemplation and tradition – “Knowledge is unmanifest and is incommunicable.”
              </p>
              <p className="mb-4 text-lg leading-relaxed font-bold">
                According to Madhyasth-Darshan – Knowledge is manifest, communicable and knowable via the method of study, and it became clear that its evidence is universally achievable through human-behaviour.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                In material centered ideology according to instability, indefiniteness-rooted materialism, science is believed to be knowledge, in which it is said that man hypothesizes the laws of nature. As its alternative, according to coexistentialist ‘existence rooted human-centeric contemplation’; it has been postulated that existence is stable, progress and awakening are definite, and all laws are natural in state and manifestation.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                The nature of existence is not just physiochemical, but all physical, chemical, and conscious (jeevan) entities are inseparably present in the all-pervasive-entity (Omnipresence). This itself is the essence of Madhyasth Darshan, Sah-astitva-vad.
              </p>
            </div>
          </div>
        </AccordionItemSimple> */}
        <AccordionItemSimple
          key="testimony"
          title="Continue Reading... My Testimony"
          isDefaultOpen={false}
        >
          <div>
            <h2 className="page-small-heading mt-4 mb-4">My Testimony</h2>
            <p className="mb-4 text-lg leading-relaxed">
              In the place where I started this bodily-journey*, my ancestors were called as “ved-murti” (vedic-scholar). My home and village resounded with the language, sounds, and tunes of Vedanta, Upanishads, and Darshana’s. My family tradition carried out invocations, worships, supplication and prayers prescribed in the Vedas. [* A Nagraj was born on 14 January, 1920 in Agrahara Village, off Ramnathpura-Arkalgud Road, Hassan District, Karnataka, India]
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              My family tradition had scholars of the highest order with the attitude of serving others (seva), physically hard working (shram) and mindful of their behavior, out of which I accepted the attitudes of hard work and serving others. Questions remained on the scholarly-aspect.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              The first question that emerged in me was –
            </p>
            <li className="mb-4 text-lg pl-3 leading-relaxed italic list-disc">
              How can the conscious and material world that originated from true brahman be an illusion?
            </li>
            <p className="mb-4 text-lg leading-relaxed">
              Second question –
            </p>
            <li className="mb-4 pl-3 text-lg leading-relaxed italic list-disc">
              How can brahman itself be the cause for both bondage and salvation?
            </li>
            <p className="mb-4 text-lg leading-relaxed">
              Third question –
            </p>
            <li className="mb-4 text-lg pl-3 leading-relaxed italic list-disc">
              Which one of the two is evidence (pramaana) – word or the one who bears and carries the word?
            </li>
            <li className="mb-4 text-lg pl-3 leading-relaxed italic list-disc">
              Which one of the two is evidence – the sacred-word or the originator of sacred-word?
            </li>
            <li className="mb-4 text-lg pl-3 leading-relaxed italic list-disc">
              Which one of the two is evidence – scripture or author of the scripture?
            </li>
            <p className="mb-4 text-lg leading-relaxed">
              From the circumstances of that time, another question emerged.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Fourth question –
            </p>
            <ul className="list-disc list-outside pl-6">
            <li className="mb-4 text-lg pl-2 leading-relaxed italic   ">
              The Constituent Assembly was setup after independence in India – in which there being no definition or description of Nation, Nationality, or National-character – accepted the public-representative as being worthy in the Indian-Constitution.
            </li>
            <li className="mb-4 text-lg pl-2 leading-relaxed italic ">
              What is the meaning of public-verdict and public-representative if votes could be interchanged with money?
            </li>
            <li className="mb-4 text-lg pl-2 leading-relaxed italic ">
              The Constitution proclaiming “secularism” – and at the same time enlisting numerous castes, communities, and sects.
            </li>
            <li className="mb-4 text-lg pl-2 leading-relaxed italic ">
              Constitution proclaimed “equality” – and along with this, it mentioning reservation and the procedures for the same.
            </li>
            <li className="mb-4 text-lg pl-2 leading-relaxed italic ">
              The conjoin of money and votes in the elections of public-representatives
            </li>
            <li className="mb-4 text-lg pl-2 leading-relaxed italic ">
              What kind of democracy is this?
            </li>
            </ul>
            <p className="mb-4 text-lg leading-relaxed">
              In order to rid myself from the shackles of these questions, based on suggestion of scholars, ved-murtis, and respected rishis-mahrishis of that time –
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              (1) The only way for “knowing the unknown” was told to be samadhi – which I accepted.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              (2) I accepted Amarkantak to be a suitable place to perform sadhana.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              (3) I started sadhana procedures from 1950.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              My sadhana attained maturity in the decade of 1960.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              (4) In 1970, I came to the state of accepting my having attained samadhi. In the state of samadhi, my expectations, thoughts, and desires remained silent. In this state, the event of “unknown getting known” did not occur, this too became clear. This state of sadhana used to happen everyday for twelve (12) to eighteen (18) hours.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              I accepted the sequence of samadhi, dharana, and dhyan as procedure for sanyam out of my own self inspiration. On attaining the state of sanyam after two years I accepted the evidence of samadhi having taken place. The activity in the duration of going from samadhi to sanyam too kept taking 12 to 18 hours. As a result, I had realization of entire existence being in the form of coexistence. This has been presented in literature form as “Madhyasth Darshan Sah-astitva-vad”.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Co-existence: – I came to understand entire physiochemical (jad) and conscious (chaitanya) nature to be saturated in all-pervasive-entity (Omnipresence), and this is eternal-presence.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              In coexistence itself:- I came to understand hungry and emissive atoms in the form of development-progression (evolution) in the atom, and as a result of development (progress) in the atom itself, the being and manifestation of ‘jeevan’ in the form of fulfilled atoms.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              In co-existence itself: – The constitutionally-complete atom or conscious-unit, in the form of ‘jeevan’ was understood.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              In co-existence itself: – I came to understand, that it is from hungry and emissive atoms, molecules and pranic-cells that the entire physical, chemical and pranic-order formations are made, and it became clear that earth is composed of atoms and molecules, and numerous earths are composed in the same way.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              I came to understand that in existence, on this earth, which is in the form of a physical formation, it is by the method of synthesis along with chemical processes that formations of pranic-cells evolved in the form of entire range of forests and vegetations, and upon their having fully evolved, from pranic-cells itself, the bodies of animals and the human body also evolved and came to be established in the form of tradition (as continuity of specie)
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              In co-existence itself: – I came to understand human-being to be a combination of jeevan and body manifested as human-tradition.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              In, from, and for co-existence: – I came to understand co-existence to be eternally effective. I understood this itself to be the ‘evolution of destiny or fate’ in co-existence.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              The way of destiny is in accordance with the way of co-existence itself: –
            </p>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Material-order
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Pranic-order
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Animal-order
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Knowledge-order (* humans)
            </li>
            <p className="mb-4 text-lg leading-relaxed">
              And
            </p>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Pranic Plane (*material-order & praanic-order)
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Illusion Plane (*living in animal-consciousness: animals and humans in delusion)
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Godly Plane (*living in human-consciousness: godly human)
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Divine Plane (*living in super-human consciousness: divine human)
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Evolution, Progress (* development-progression in the atom & development in the atom = it becoming ‘conscious’)
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Awakening-progression, Awakening(* in the conscious atom – jeevan, in human tradition)
            </li>
            <p className="mb-4 text-lg leading-relaxed">
              And I came to understand that awakened human tradition itself is the eternal grandeur of humans in self-organization with humanness, and participating in the overall orderliness. I believed this to be the essence of universal-goodness and accepted that all human-beings have natural-expectation for goodness, as a result of which, I have presented before humankind the essence and elucidation of consciousness-development based value-education, constitutional-framework for humanness, humane conduct and orderliness (systems).
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              May the earth be heaven, May humans be godly
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              May dharma* be established, May goodness arise always.
            </p>
            <div className="text-right mt-6 text-lg leading-relaxed">
              <p>– A. Nagraj, 2004</p>
              <p className="italic   page-common-pera">* Dharma = Religion = Inseparability. That which cannot be separated from a unit is its religion.</p>
            </div>
          </div>
        </AccordionItemSimple>
        <AccordionItemSimple
          key="practice"
          title="Continue Reading...The Alternative in Practice - Work & Behavior"
          isDefaultOpen={false}
        >
          <div>
            <h2 className="page-small-heading mt-5 mb-4">The Alternative in Practice (Behavior & Work)</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Material order and Pranic order is in the stage of evolution.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Material order is after the Earth becomes enriched with all kinds of minerals.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Pranic order is enriched with all kinds of forests, big and small jungles with numerous kinds of vegetations. The balance in climate is from balance in forests and minerals, this too became clear.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Along with this, it was also understood that humankind in awakening progression stage, while living in animal consciousness, in the form of communal traditions, as servile human (pashu-manav) and beastial human (rakshas-manav), is caught in a vicious cycle of deceit, cheating, fraud, charlatanism, conflict, revolt, exploitation, war, coercion, bribe, penalising, fragmenting – while believing all kinds of crimes as legal, which resulted in Earth’s becoming sick. Extraction of coal, fossil fuels and radiation metals from Earth is a crime with this Earth. Exploitation of Earth by human being has resulted in Earth’s condition of sickness and now there is a question mark whether it will remain liveable for humankind or not. As alternative to fossil fuels, there is suggestion for using renewable energies, like energy from flow of water current. There is suggestion for making solar equipments cheaper and for maximally using the wind energy. This was suggested for consideration for national planning.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Humankind at present is in animal consciousness, its evidence has been seen as constitutions (law frameworks) of all nations are essentially in the form of attempts of stopping one wrong by doing another wrong, stopping one crime by committing another crime, stopping one war by raging another war – while believing all these acts as legal.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Humankind at present is in animal consciousness as is evident in education of today which encourages maniacal pursuit for profit, sex and consumption.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Media of all kinds is working in the interest of spreading fear and greed. Fear and greed is the limit of humankind of today, this I understood.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              It is due to above mentioned reasons that I accepted to present this alternative, which presents Economics of Natural Cyclicality, Sociology of Human Behaviour and Psychology of Human Consciousness.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              These propose the possibility of evidencing in present the realization of jeevan values (happiness, peace, contentment and bliss) and existential purpose of human being (resolution, prosperity, fearlessness and coexistence) by way of ten staged orderliness.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Innate nature of humanness is proposed to be steadfastness, courage, generosity, kindness, graciousness and compassion. Existential purpose of every human being is proposed to be resolution, prosperity, fearlessness (trust in the present with the four evolution stages) and coexistence.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Humankind produces the evidence of coexistence (upon awakening) in the form of culture, civilization, norms and orderliness.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              It is proposed that (upon awakening) instilled values in human being get manifested as recognition and fulfillment of relationships, as grandeur of eternal celebration of culture, as evidence of the vision of undivided society in present.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              It is also proposed that the activities of giving, taking, offering and surrendering of objects with values of mannerism is also the grandeur of human consciousness.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Human consciousness itself is humanness in behaviour. Human consciousness itself is law in conduct.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Humanness is the evidence in the form of resolution, prosperity, fearlessness and coexistence.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              The knowledge, wisdom, science, thoughts, plans, action plans, behaviour and results of a human being are mutually coherent in the purview of human consciousness. The grandeur of human consciousness is humanness.
            </p>
            <p className="mb-4 page-common-hading  leading-relaxed">
              Knowledge
            </p>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Knowledge of Existence in the form of Coexistence
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Knowledge of Jeevan
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Knowledge of Conduct of Humanness
            </li>
            <p className="mb-4 page-common-hading leading-relaxed">
              Wisdom
            </p>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Immortality of Jeevan
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Mortality of Body
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Laws of Human Behaviour
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Conduct of Humanness (complete-human conduct)
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Righteous Wealth, Righteous Marital Relationship, Work and Behaviour with Kindness
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Relationship, Values, Appraisal and Mutual fulfillment
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Good-use and Protection of Means in the form of body, mind and wealth
            </li>
            <p className="mb-4 page-common-hading leading-relaxed">
              Science
            </p>
            <ul className="list-disc pl-5 mb-4 list-outside">
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Knowledge of Time, Activity and Decision
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Duration of Activity = Time
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Activity = Eternal Presence
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Entire nature is present in the form of activity in coexistence.
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Activity = Effort, Motion, Constitution
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Constitution, Effort and Motion in activity (unit of nature) is progressive for achievement of immortality, effortlessness and destination respectively.
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Immortality of constitution = Constitutionally complete atom = conscious unit = jeevan
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Effortlessness of effort = Tradition of Human Consciousness, as manifestation of undivided society and universal orderliness in human living.
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Human motives (tendencies) = Progeny motive, Wealth motive, Fame motive.
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              Destination of motion = Human living with tendency of beneficience (universal goodness) as godly consciousness and divine consciousness.
            </li>
            </ul>
            <p className="mb-4 text-lg leading-relaxed">
              All this is studiable and livable in, for and from human being.
            </p>
          </div>
        </AccordionItemSimple>
        <AccordionItemSimple
          key="conclusion"
          title="Continue Reading...Possibilities & Conclusion"
          isDefaultOpen={false}
        >
          <div>
            <h2 className="page-small-heading mt-5 mb-4">The Possibility of Purposeful Living</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Every man and woman needs to achieve understanding for liberation from criminal tendency in all 700 crore human beings on this Earth.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              It is from understanding that evidence of resolution gets realized in the present.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              It is with resolution that prosperity becomes evident in every family with deployment of hard work (physical labour). The evidence of beneficence is immanent in every family living with resolution and prosperity.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              The awakened human tradition liberated from crimes is with consciousness development, value education and technology in its education, and every family lives the vision of undivided society and universal orderliness, and thereby tradition of resolution, prosperity, fearlessness and coexistence.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              It is necessary for every man and woman to be as living evidence of law, restraint, balance, justice, religion and truth.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Madhyasth Darshan (Existence rooted Human centered Contemplation) is presented in four parts for study in the form of “consciousness development value education”.
            </p>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Holistic view of Human Behaviour (Manav Vyavhar Darshan)</strong>
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Holistic view of Human Actions (Manav Karma Darshan)</strong>
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Holistic view of Practices in Human living (Manav Abhyas Darshan)</strong>
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Holistic view of Human Realization (Manav Anubhav Darshan)</strong>
            </li>
            <p className="mb-4 text-lg leading-relaxed">
              The thoughts (lines of thinking) based on the above Darshans are in three parts: –
            </p>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Materialism based on Resolution (Samadhanatmak Bhautikvaad)</strong>
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Commentaries based on Human Behaviour (Vyavharatmak Janvaad)</strong>
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Spiritualism based on Realization (Anubhavatmak Adhyatmvaad)</strong>
            </li>
            <p className="mb-4 text-lg leading-relaxed">
              On the basis of Darshan (Holistic view) and Thoughts, the Disciplines are in three parts: –
            </p>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Economics based on Natural Cyclicality (Avartansheel Artha Shastra)</strong>
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Sociology based on Human Behaviour (Vyavharvaadee Samaj Shastra)</strong>
            </li>
            <li className="mb-4 text-lg leading-relaxed list-disc">
              <strong>Psychology based on Human Consciousness (Manav Sanchetnavadee Manovigyan)</strong>
            </li>
            <p className="mb-4 text-lg leading-relaxed">
              On the basis of this contemplation, i.e. Darshan (Holistic view), Thoughts, Discipline: –
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              The method of addressing Jeevan Vidya becomes clear.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              The ‘Constitutional Order of Humanness’ in the form of code of humane conduct has been provisioned and presented for study.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Along with this, a collection of definitions has been presented.
            </p>
            <h2 className="page-common-hading mb-4 mt-6">Statement</h2>
            <p className="mb-4 page-content leading-relaxed">
              The 27 topics which have been presented under the title “The Alternative”, at its root is the vision of humankind living as undivided society and universal orderliness, with human consciousness, liberated from mindset of crimes, hatred and walls of mine versus others. Such living has now become a need for human tradition if human race is to continue on this Earth. Therefore, for taking decisions on righteousness, whatever questions could arise in you for the objective of righteousness based on the information provided here, the answers to all those questions is there with me, those who want can get from me.
            </p>
            <div className="text-right mt-6 page-content leading-relaxed">
              <p>A. Nagraj,</p>
              <p className="font-semibold">Propounder,</p>
              <p>Madhyasth Darshan Sah-astitva-vad,</p>
              <p>Divya Path Sansthan</p>
              <p>Bhajanashram, Amarkantak</p>
              <p>Distt Anuppur, MP, India</p>
            </div>
          </div>
        </AccordionItemSimple>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 page-h6  ">
        <p>– shriram narasimhan | jan 2012 | student | based on the english translation by rakesh gupta</p>
      </div>
    </div>
  );
}
