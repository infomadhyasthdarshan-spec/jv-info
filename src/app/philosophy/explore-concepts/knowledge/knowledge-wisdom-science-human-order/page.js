"use client";
import Backjs from "@/components/Backjs";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
export default function KnowledgeOfExistence() {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
    const definitions = [
    {
      term: "सत्ता (satta)",
      english: "Omnipotence",
      meaning:
        "The eternal grandeur present in all places where nature is, and where nature is not. Space is permeable in conscious and physiochemical nature and is transparent in their mutualities. That which is not an activity itself, but in which all activities are included (activities are present in space). They are soaked, submerged & encircled in space. What we consider to be ‘empty space’ or void is actually an all-pervasive-entity, a reality. It is Omnipotence = energy in equilibrium.",
    },
    {
      term: "स्तु	(vyapak)",
      english: "Pervasive-entity (Omnipresence)",
      meaning:
        "That which is cognizable via the activity of realization in the Self, or conscious unit (jeevan). Origin of the word entity: 15th century (denoting a thing’s existence): from French entité or medieval Latin entitas, from Latin ens, ent-‘being’ (from esse ‘be’).",
    },
    {
      term: "शून्य (shunya)",
      english: "Space, Void",
      meaning:
        "Space, absolute-force, equilibrium energy, in which all units exist. Recognized as void but actually is all-pervasive-entity.",
    },
    {
      term: "चेतना (chetana)",
      english: "Consciousness",
      meaning:
        "Cognition, accomplished with knowledge, wisdom & science. Knowledge, equilibrium energy, space, absolute-force.",
    },
    {
      term: "रूप (roop)",
      english: "Form/appearance",
      meaning: "Shape, surface area and volume.",
    },
    {
      term: "गुण (guna)",
      english: "Properties",
      meaning:
        "Relative powers are known as properties (guna). Properties (gunas) are recognized in the form of positive, negative, and madhyasth (mediating), which itself is effect. Synonyms: quality, especially when we consider ‘properties’ of a human being.",
    },
    {
      term: "स्वभाव (swabhav)",
      english: "Innate-nature",
      meaning:
        "Purpose, participation, value. The utility of properties itself is innate-nature. Synonyms: essence, true-nature, characteristic, fundamental attribute.",
    },
    {
      term: "धर्म (dharma)",
      english: "Religion",
      meaning:
        "Inseparability itself is dharma. That which cannot be separated from a unit is its dharma or religion. Translator notes: inseparability, innateness origin of the word ‘religion’: based on Latin religare ‘to bind’.",
    },
    {
      term: "अस्तित्व (astitv)",
      english: "Existence",
      meaning:
        "Physiochemical and conscious nature saturated in all-pervasive-entity, in Omnipotence (space).",
    },
    {
      term: "सह अस्तित्व (sah-astitv)",
      english: "Coexistence",
      meaning:
        "(Definition in the context of existential-purpose of humankind): Relationships without exploitation, hoarding and hatred, and fulfillment of relationships and associations with behavior of generosity, affection, and serving alone is co-existence. (Basic Definition): nature saturated in the all-pervasive-entity, Omnipotence, space.",
    },
    {
      term: "संपृक्त (samprikt)",
      english: "Saturated",
      meaning:
        "Status of nature (physical, chemical, and conscious) soaked, submerged and enveloped in Omnipresence, Omnipotence, space. #Omnipresence: all-pervasive.",
    },
    {
      term: "प्रकृति (prakriti)",
      english: "Nature",
      meaning:
        "Form-full existence; i.e. infinite units of material-order, bio-order, animal-order and knowledge-order (humans). Infinite agglomeration of physiochemical and conscious units. Continuously-active. Inseparable presence of form/appearance, properties, innate-nature & religion (dharma).",
    },
      {
      term: "मानव",
      english: "Human-being *	",
      meaning:"One who materializes his ideas, has expectation for healthiness of mind and realizes the same is known as human-being.",
    },
      {
      term: "जीव चेतना	",
      english: "Animal-consciousness(animal chetana)	",
      meaning:"Human being living in delusion# Translators notes: lack of knowledge, un-awakened",
    },
      {
      term: "मानव चेतना	",
      english: "Human Consciousness(human chetana)	",
      meaning:"Awakened human being, free of illusion, living with knowledge and progeny-motive, prosperity-motive and fame-motive.",
    },
      {
      term: "जड़",
      english: "Physiochemical * (jad)	",
      meaning:"The unit without any thinking-aspect, whose span of function is limited to its length, width, and height.# ‘inert’ in the sense it is not conscious",
    },
      {
      term: "चैतन्य(जीवन)	",
      english: "Conscious *(chaitanya)(jeevan)	",
      meaning:"The unit whose span of function is more than its length, width, and height and has an active thinking-aspect called conscious (unit). ",
    },
      {
      term: "कल्पनाशीलता",
      english: "Imagination",
      meaning:"Expression of 4.5 activities of imaging, analysis, weighing, tasting and selecting in conscious unit (jeevan).",
    },
      {
      term: "कर्मस्वतंत्रता	",
      english: "Freedom to act	",
      meaning:"Evidence of freedom of action according to imagination in every human",
    },
      {
      term: "भ्रम",
      english: "Delusion",
      meaning:"	Flaw in cognition: assuming something to be more, less or other than what it is.# Translator notes: error in cognition, incomplete cognition ",
    },
  ];
  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      <Backjs/>
      {/* Heading */}
      <h2 className="page-heading mb-4">
        Knowledge of Existence:
      </h2>
      <h3 className="page-common-hading  mb-4">
        (अस्तित्व दर्शन ज्ञान)
      </h3>

      {/* Intro */}
      <p className="mb-4 page-content ">
        Existence is in the form of co-existence, as{" "}
        <span className="italic page-content">
          “nature saturated in all-pervasive-entity or space”
        </span>.
      </p>
      <p className="mb-6 italic page-content ">
        There are only two kinds of realities in Existence / in the Universe:
      </p>
      <ol className="list-decimal list-inside mb-8 space-y-2 page-content">
        <li>
          Units, or Nature (Matter, Mass, Substance, Material) – that are{" "}
          <strong>‘active’</strong>
        </li>
        <li>
          All-pervasive void (Omnipresence) – is <strong>‘inactive’</strong>
        </li>
      </ol>

      {/* Section 1 */}
      <h4 className="page-common-hading mb-4">1. Units or matter are</h4>
      <p className="mb-4 page-content">
        <strong>“saturated”</strong> (samprikt) in the all-pervasive-entity{" "}
        <em>(vyaapak vastu)</em>, currently called <strong>space</strong>.
      </p>
      <p className="mb-4 italic page-content">To be “saturated” means to be: (संप्रिक्त)</p>
      <ul className="list-disc list-inside space-y-2 mb-8 page-content">
        <li>
          <strong>Soaked (bheega):</strong> By which every unit is energized –
          <em> oojrit (ऊर्जित)</em>
        </li>
        <li>
          <strong>Encircled (ghira):</strong> By which every unit is restrained
          – <em>niyantrit (नियंत्रित)</em>
        </li>
        <li>
          <strong>Submerged (dooba):</strong> By which every unit is active –
          <em> kriyasheel (क्रियाशील)</em>
        </li>
      </ul>

      {/* Section 2 */}
      <h4 className="page-common-hading   mb-4">2. Void or ‘Space’ is:</h4>
      <ul className="list-disc list-inside space-y-2 mb-6 page-content">
        <li>
          <strong>Pervasive – vyaapak (व्यापक):</strong> there is no ‘place’
          where space is not. Every ‘place’ itself is ‘space’.
        </li>
        <li>
          <strong>Transparent – pardarshi (पारदर्शी):</strong> Reflecting, every
          unit is able to recognize the other unit by being in it.
        </li>
        <li>
          <strong>Permeating – paargaami (पारगामी):</strong> Space exists
          ‘where’ there is a unit, units are so
          aked in space.
        </li>
        <li>
          <strong>Omnipotence – satta (सत्ता):</strong> Energy in equilibrium:
          that neither increases, nor decreases.
        </li>
        <li>
          <strong>Has no activity – kriyashunya (क्रियाशून्य):</strong> Inactive,
          not a ‘unit’, unchanging.
        </li>
      </ul>

      <p className="mb-4 page-content">
        What we call as <em>‘empty space’</em> is not ‘empty’; it is equilibrium
        energy itself and the fundamental source for all activity (at the atomic
        level) in the entire universe, in existence.
      </p>
      <p className="mb-4 page-content">
        Space manifests as <strong>‘energy’</strong> in physiochemical matter{" "}
        <em>(jad)</em> and as <strong>‘knowledge (gyaan)’</strong> or{" "}
        <strong>‘consciousness (chetana)’</strong> in the conscious unit{" "}
        <em>(chaitanya)</em> (Self or Jeevan).
      </p>
      <h2 className="page-common-hading mb-4">
        ‘Units’ (Ikai) are of two kinds:
      </h2>
      <p className="mb-4 text-gray-700 page-content italic">
        (Units = Nature, Matter, Mass, Substance, Material)
      </p>

      {/* Types of Units */}
      <ul className="list-disc list-inside mb-6 page-content space-y-2">
        <li>
          <strong>Physiochemical (insentient) (Jad)</strong>
        </li>
        <li>
          <strong>Conscious (sentient) (Chaitanya)</strong>
        </li>
      </ul>

      <p className="mb-6 text-gray-700 page-content">
        These units, or ‘Nature’ is manifested as the 4 ‘natural-orders’:
      </p>
      <ul className="list-disc list-inside mb-8 page-content space-y-2">
        <li>
          <strong>Knowledge Order (human beings)</strong> – ज्ञान व्यवस्था
        </li>
        <li>
          <strong>Animal Order</strong> – जीव व्यवस्था
        </li>
        <li>
          <strong>Bio (pranic) Order</strong> – प्राण व्यवस्था
        </li>
        <li>
          <strong>Material Order</strong> – पदार्थ व्यवस्था
        </li>
      </ul>

      {/* Dimensions */}
      <p className="mb-6 page-content">
        Each unit in Existence, i.e. each of the four ‘natural-orders’ has the
        following dimensions:
      </p>
      <ul className="list-disc list-inside mb-8 page-content space-y-2">
        <li>
          <strong>Form/appearance</strong> (Shape, Surface Area, Density) – रूप
        </li>
        <li>
          <strong>Properties</strong> (Positive, Negative, Mediating properties;
          relative cause and effect) – गुण
        </li>
        <li>
          <strong>Innate-nature</strong> (Purpose or participation or value or
          essence) – स्वभाव
        </li>
        <li>
          <strong>Religion</strong> (Inseparability or Innateness) – धर्म
        </li>
      </ul>

      {/* Explanation */}
      <p className="mb-4 text-gray-700 page-content">
        Every ‘unit’ (from an atom to the larger formations of matter) in
        existence has these four dimensions. Of these four dimensions,
        ‘form/appearance’ and ‘properties’ are ‘form-full’ in that they have
        length, breadth & height while innate-nature & religion are form-less
        (no length, breadth, height). Understanding both the form-full and
        form-less dimensions is needed to understand these 4 ‘natural-orders’
        completely, to understand reality.
      </p>

      <p className="mb-4 text-gray-700 page-content">
        This enables us to understand their ‘innate-nature’ as their ‘purpose’
        in existence, their <em>participation</em> or their <em>value</em>; and
        their religion, as their very <em>‘being-ness’</em> or{" "}
        <em>‘intrinsic-ness’</em>, or their ‘orderliness within’.
      </p>

      <p className="mb-8 text-gray-700 page-content">
        To date, humankind has largely concerned itself with the study of only
        the form-full dimensions’ of reality (form/appearance and properties)
        ignoring the other dimensions of reality.
      </p>

      {/* Remaining dimensions */}
      <h3 className="page-common-hading mb-4">
        The following dimensions of reality still remain to be understood by us
        humans:
      </h3>
      <ol className="list-decimal list-inside mb-6 space-y-4 page-content">
        <li>
          <strong>
           All-pervasive-entity (omnipresence) or space, and its attributes of
          </strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 page-content">
            <li>Omnipotence, permeating, & Transparency</li>
            <li>
              व्यापक तत्व, व्यापकत्व, सत्ता, पारदर्शी, व्यापकत्व
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Conscious unit or matter that has consciousness (Chaitanya Ikai), and
            its dimensions:
          </strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 page-content">
            <li>form/appearance</li>
            <li>properties</li>
            <li>innate-nature</li>
            <li>religion</li>
          </ul>
        </li>
        <li>
          <strong>
             The 3 formless aspects of physiochemical units/matter (Jad Upadān):
          </strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 page-content">
            <li>Mediating Properties</li>
            <li>Innate-nature & Religion (माध्यम गुण, स्वभाव और धर्म)</li>
          </ul>
        </li>
          <li>
          <strong>
            Relationship between the above:
          </strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1 page-content">
            <li>conscious matter, physiochemical matter and all-expansive omnipotence (space): चैतन्य इकाई, जड़ इकाई, व्यापक सत्ता में संबंध
</li>
          </ul>
        </li>
      </ol>
      <p className="mb-6 page-content">The problems we have today are a result of not having the above knowledge. The reason we do not have this knowledge is because we have not yet ‘used’ certain faculties of knowing present in ourselves (Self or jeevan).</p>
      <p className="mb-6 page-content">Madhyasth Darshan – Coexistentialism (Jeevan Vidya) has proposals for the above, in the form of words that point to these realities. On Studying these realities with the aid of words, and using the ‘faculty’ of imagination present in us under the guidance of someone who has this knowledge, we are able to have ‘understanding’ of these realities in our own right.</p>
      <p className="mb-6 page-common-hading">The atom is the smallest basic unit that is in organization or orderliness in Existence:</p>
      <p className="mb-6 page-content">The smallest unit to count as ‘1’ is the atom – this is the ‘stable point’ for counting, below which we do not find any definiteness. The natural state of being of ‘matter’ is in the form of an atom. This atom is natural to existence. The human being does not ‘organize’ the atom, or ‘regulate’ them; nor are we ‘supplying’ energy to atoms for them to be continuously active; and neither have we created the various types of atoms.

</p>
      <p className="mb-6 page-content ">We can only study and comprehend stable states – and our study has to include the ‘whole’ [units and space] and ‘the observer’ [the conscious entity that is understanding].</p>
      <p className="mb-6 page-common-hading">There is no centralization in Existence. There is no ‘creator, sustainer, controller and destroyer’. There is decentralized self-regulation in Existence.

</p>
      <p className="mb-6 page-content ">This ‘orderliness’ is seen across all 4 ‘natural-orders’, and except in the human, on this planet.</p>
      <p className="mb-6  page-content">Units in Existence are self-organized, or in ‘orderliness within’ and participate in the larger orderliness. No one is ‘organizing’ this from the outside. This is their natural state of being.</p>
            <hr className="border-gray-300 mb-6" />
  {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        * Innate Nature & Religion
      </h2>

      {/* Innate Nature */}
      <h3 className="page-common-hading mb-4">Innate-Nature (Swabhav)</h3>
      <ul className="list-disc list-inside space-y-2 mb-6 page-content">
        <li>Innate-nature of the material-order is ‘composition-decomposition’</li>
        <li>Innate-nature of the bio-order is ‘enhance-worsen’</li>
        <li>Innate-nature of the animal-order is cruel — non-cruel</li>
        <li>
          Innate-nature of humans living in <em>‘animal-consciousness’</em> is:
          wretchedness, cunningness & cruelness
        </li>
        <li>
          Innate-nature of humans living in <em>‘human-consciousness’</em> (true
          human nature) is: steadfastness, courage & generosity, kindness,
          graciousness & compassion
        </li>
      </ul>

      {/* Religion */}
      <h3 className="page-common-hading mb-4">Religion (Dharma)</h3>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 page-content">
        <li>Religion of the material-order is: to exist, indestructibly</li>
        <li>Religion of the bio-order (plants, pranic) is: ‘growth’</li>
        <li>Religion of the animal-order is: ‘the will to live’</li>
        <li>Religion of the human-order is: live with happiness, resolution</li>
      </ul>

      <p className="italic text-gray-600 mb-6 page-content">
        #origin of the word ‘religion’: based on Latin religare ‘to bind’
      </p>

      {/* Explanation */}
      <p className="mb-4 page-content">
        Man living in <strong>animal-consciousness</strong> uses only partial
        activities in the Self or conscious unit (jeevan), and as a result lives
        with animal-like attributes. He lives only with{" "}
        <strong>Assuming</strong> (& expectation of Knowing) & innate-nature as
        wretchedness, cunningness, cruelty: which is{" "}
        <strong>unnatural</strong> to him, and is not acceptable to him, or to
        others (when expressed). He has an expectation for
        resolution & happiness (his religion) but is unable to have/ensure
        continuity of the same.
      </p>

      <p className="mb-4 page-content">
        Man living in this state, makes some <strong>assumptions</strong>{" "}
        regarding his innate-nature & religion that do not have universality and
        thus cause differences in human-society. This is why this plane of
        living is called ‘animal-consciousness’ since even though man has
        progressed from where animals are, he has still not known his
        innate-nature & religion, still not accessed the will to ‘know’ and
        hence, assumes struggle for survival as the goal (akin to animals) and
        an innate-nature that is akin to animals.
      </p>

      <p className="mb-6 page-content">
        The proof of this is the definition of the Human as a ‘social-animal’.
      </p>

      <p className="mb-4 page-content">
        Man living in <strong>human-consciousness</strong> lives well all 10
        activities in the Self or conscious unit (jeevan), and as a result lives
        with the humane-attributes. He lives with Knowledge (& Assuming,
        Recognition and Fulfillment on this basis) & his innate-nature is
        steadfastness, courage & generosity: which is <strong>natural</strong>{" "}
        to him, and acceptable to him, and to others (when expressed).
      </p>

      {/* Main conclusion */}
      <p className="mb-4 page-content">
        <strong>I.e. the rest of the 3 ‘natural-orders’ are living according to their
        innate-nature & religion. Only man needs to do so. He is able to do so
        by having ‘knowledge’.</strong> Man has thus been recognized as belonging to the
        ‘knowledge-order’. Knowledge is his fundamental need. Thus, on the basis
        of living with human-consciousness, it becomes clear that:
      </p>
      <ul className="list-disc list-inside mb-8 page-content space-y-2">
        <li>
          <strong>Human Nature is the SAME</strong> for all humans (on the basis
          of their ‘innate-nature’),
        </li>
        <li>
          <strong>Human Race is ONE</strong> (based on similar construction of
          the Body &)
        </li>
        <li>
          <strong>Human Religion is ONE</strong> (based on happiness, resolution,
          understanding)
        </li>
      </ul>
 
      <p className="mb-4 italic text-gray-600 page-content">
        [Innate-nature = purpose, value] [Religion = inseparability; that which
        cannot be separated from a unit is its religion, same as dharma]
      </p>

      {/* Final Note */}
      <p className="mb-4 text-gray-700 page-content">
        Thus, the <strong>fundamental need</strong> for the human is to{" "}
        <strong>SHIFT</strong> from living in animal-consciousness to living in
        human-consciousness, which is only possible via Knowledge with the
        method of consciousness development.
      </p>
      {/* table */}
       <h2 className="page-common-hading mt-20 font-bold mb-8">
        Important Definitions of Words used in Knowledge of Darshan of Existence
      </h2>

      <div className="overflow-x-auto overflow-y-hidden ">
        <table className="w-full border page-content border-gray-300 rounded-lg">
          <thead className="bg-gray-100">



            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left w-1/5">
                Term (Sanskrit)
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left w-1/5">
                English Meaning
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left w-3/5">
                Explanation
              </th>
            </tr>
          </thead>
          <tbody>
            {definitions.map((def, index) => (
              <tr key={index} className="">
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  {def.term}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {def.english}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {def.meaning}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="page-content italic mt-10">– shriram narasimhan | student | jan 2012</p>
      </div>
      {/* table */}
    </div>
  );
}
    