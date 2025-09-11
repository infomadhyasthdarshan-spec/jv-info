"use client"
import Backjs from '@/components/Backjs'
import React from 'react'
  import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const Page = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <>
 <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      {/* Back Button */} 
      <Backjs/>
      {/* Page Heading */}
      <h1 className="page-heading mb-2">Knowledge of Humane conduct</h1>
      <hr className="border-gray-300 mb-6" />
      <p className='mb-6 page-common-hading'>(विवेक, मानवीयतपूर्ण आचरण ज्ञान)</p>
      <p className='mb-4 page-content'>Having understood Existence and the nature of the Conscious unit, or Self (Jeevan), we understand our relationship with every unit in Existence & live accordingly, in the form of complete-Human Conduct, via Wisdom (vivek).</p>
      <p className='mb-4 page-content'>When a human being has knowledge, he desires, thinks and behaves according to that knowledge. This knowledge is based on existence, on reality; hence human living becomes based on a definite meaning and understanding, leading to a definite human conduct. On the basis of this knowledge, the human is able to clearly identify the ‘values in living‘ as his ‘participation in the larger orderliness’.</p>
      <p className='mb-4 page-content'>He is able to see that these values are naturally acceptable to him; and living according to these values gives him satisfaction and is also fulfilling for other humans and the rest of nature (plants, animals, etc). ‘Values’ are thus the same as our ‘participation’ or ‘innate-nature’; our ‘purpose’ of living.</p>
      <p className='mb-4 page-content'>Consequently, all his thoughts and imagination become in accordance with these ‘values’ and he expresses his understanding via these ‘values’ with other humans as well as nature. Therefore to live with these values becomes natural for him and to live otherwise becomes unnatural.</p>
      <p className='mb-4 page-content'>On the basis of this he is able to live with satisfaction in the self and have mutually satisfying relationships: with other humans and with ‘nature’. This itself is ‘justice’ & fulfillment in relationships.</p>
      <p className='mb-4 page-content'>This prepares the ground for Human tradition via education. Human beings can thus have definite conduct. Complete-Humane Conduct comprises of:</p>
        <ul className="list-decimal pl-6 page-content space-y-2">
          <li>Values [मूल्य]</li>
          <li>Character [चरित्र]</li>
          <li>Ethics [निति]</li>
        </ul>
        <div className='mt-16'>
              <p className='mb-4 page-content'>First – <strong>values </strong>are our participation in the larger orderliness. There are 4 values in the Self, or Jeevan, 6 Human Values, 18 Values in Human-Human relationship and 2 Values in Human-Nature relationship; totaling 30 values in all. Put together, these are <strong>‘human values’</strong>.</p>
              <p className='mb-4 page-content'>Second – <strong>humane-character</strong> is the same for every human. Humane-character is in the form of righteous-wealth, morality in husband-wife relationship and work-behavior filled with kindness. [चरित्र = स्वधन, स्वनरी/स्वपुरुष, दया पूर्ण कार्य व्यवहार]</p>
              <p className='mb-20 page-content'>Third – we realize <strong>ethics</strong> when we rightly-use and protect our resources (body, mind, and wealth). [तुन, मन, धन का सुरक्षा, सदुपयोग]</p>
              <p className='mb-6 page-content'>In this way, complete-<strong> humane-conduct gets explained as a combination of values, character, and ethics.</strong> These are the three pillars for our living in orderliness</p>
              <p className='mb-6 page-content'>Living with such humane-conduct requires the basis of Wisdom:</p>
              <p className='mb-6 page-content'>Wisdom, Conduct and Values <strong>do not need to be ‘enforced’, or ‘learnt’.</strong> They are a <strong>natural outcome </strong>of Knowledge, of Understanding. Each Human has <strong>Natural Acceptance </strong>for these laws and values.</p>

        </div>
        {/* section1 */}
              <h1 className="page-small-heading mb-6">
        Wisdom, Universal Human Laws of Living
      </h1>
      <p className="mb-6 page-content">
        Immortality of Jeevan, Perishable nature of the body, and Laws of living:
      </p>

      {/* Laws */}
      <ul className="list-disc list-outside ml-5 mb-6 space-y-2 page-content">
        <li>
          <span className="font-semibold">Intellectual Laws (pertaining to Self):</span> 
          Non-Accumulation (Balance between spends and earnings: prosperity), Affection, Knowledge, Ease, Fearlessness
        </li>
        <li>
          <span className="font-semibold">Social Laws (pertaining to Human-Human relationship, in Society):</span> 
          Righteous Wealth, Righteous Marital relationship (Husband/Wife), Kindness in work and behavior
        </li>
        <li>
          <span className="font-semibold">Natural Laws (pertaining to Human - rest of Nature relationship):</span> 
          Utility, Complementarity, Purpose-fullness, Coexistence
        </li>
      </ul>

      <h2 className="page-common-hading mb-16">
        The 30 Values (human values) of Humane-Conduct when living with such wisdom:
      </h2>

      {/* Values Section */}
      <h3 className="page-common-hading mb-2">Values: [मूल्य]</h3>
      <p className="mb-4">
        <span className="page-content">4 ‘Values in the Self’ (Conscious unit, Jeevan):</span> Happiness, Peace, Satisfaction, Bliss.
      </p>
      <p className="mb-4">
        <span className="page-content">6 ‘Human Values’:</span> Steadfastness, Courage, Generosity and Kindness, Graciousness, Compassion
      </p>
      <p className="mb-6">
        <span className="page-content">18 ‘Relationship Values’:</span> Values in Human-Relationships (Interpersonal)
      </p>

      <p className="mb-6 page-content">
        Human Relationship IS in existence. It does not have to be created. It is already there. It only needs to be understood.
        These are definite expectations in relationships, also called values. Values in behavior are manifest in human relationships
        as 9 established and 9 expression values. These are definite and can be understood. i.e. the expectations in human relationships
        are definite and can be fulfilled leading to mutual satisfaction.
      </p>

      <p className="mb-6 page-content">
        The identification of Human Relationships, fulfillment of values and mutual satisfaction itself is <strong>Justice</strong>.
      </p>

      {/* Responsive Table */}
      <div className="overflow-x-auto mb-16">
        <table className="table-auto border border-gray-300 w-full page-content">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Established-Value (स्थापित मूल्य)</th>
              <th className="border px-4 py-2">Expressed-Values (सिद्ध मूल्य)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Trust (विश्वास)", "Complementariness (पूरकता)"],
              ["Respect (सम्मान)", "Compliance (सहिष्णुता)"],
              ["Affection (स्नेह)", "Commitment (निष्ठा)"],
              ["Care (ममता)", "Generosity (उदारता)"],
              ["Guidance (मार्गदर्शन)", "Spontaneity (स्वाभाविकता)"],
              ["Reverence (श्रद्धा)", "Obedience (आज्ञापालन)"],
              ["Glory (गौरव)", "Ease (सहजता)"],
              ["Gratitude (कृतज्ञता)", "Self-restraint (संयम)"],
              ["Love (प्रेम)", "Unanimity (अभिन्नता)"],
            ].map(([established, expressed], index) => (
              <tr key={index} >
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{established}</td>
                <td className="border px-4 py-2">{expressed}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
        {/* section1 */}
        {/* section2 */}

 {/* Section Heading */}
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        There are 7 kinds of Human-Relationships in line with <em>Human Purpose</em>:
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto mb-8">
        <table className="table-auto border border-gray-300 w-full text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-4 py-2">Name of Relationship</th>
              <th className="border px-4 py-2">Activity, Purpose</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Father-Mother, Son-Daughter", "Nourishment, Protection; Utility – Complementariness"],
              ["Husband-Wife", "Mutual Complementariness"],
              ["Brother-Sister", "Mutual Assistance"],
              ["Friend-Friend", "Mutual Assistance"],
              ["Teacher-Student", "Evidenced-Enquiring"],
              ["Colleague-Coworker", "Responsibility-Duty"],
              ["System Relation", "Participation"],
            ].map(([relation, purpose], index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{relation}</td>
                <td className="border px-4 py-2">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paragraphs */}
      <p className="mb-4 text-justify page-content">
        <strong>Values flow only on recognizing the meaning or purpose of relationships.</strong> For example – when someone recognizes the meaning or purpose of relation
        of his father, or of the teacher, then values naturally flow in those relationships. When the mother recognizes the relationship with the child,
        she does not need to make efforts to have the feeling of Care, it flows naturally.
      </p>

      <p className="mb-4 text-justify page-content">
        Values don’t flow naturally where there isn’t any recognition of relationships. Study of relations can be done on the basis of their purposes.
        The continuity of recognition of relationships and fulfillment of values is only possible by having knowledge, by living in developed-consciousness,
        as human-consciousness.
      </p>

      <p className="mb-16 page-content">
        Each of the 7 relationships and the 18 values therein are explained in detail in the Madhyasth Darshan–Coexistentialism literature.
      </p>

      {/* Character Section */}
      <h2 className="page-small-heading mb-4">Character: [चरित्र]</h2>
      <p className="mb-6 page-content">
        Living with acceptance for ‘social laws’ itself manifests as ‘character’ while living in human-society.
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="page-common-hading mb-2">Righteous Wealth:</h3>
          <p className='page-content'>Wealth acquired by means of:</p>
          <ul className="list-disc list-outside ml-4 page-content">
            <li>(a) Fruit of efforts employed on nature</li>
            <li>(b) Gift from someone</li>
            <li>(c) Award given (without asking or expectation) for services rendered in society</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 page-common-hading">Righteous Marital relationship (Husband/Wife):</h3>
          <ul className="list-disc list-outside ml-4 page-content">
            <li>Fidelity in Marital relationship: in Words, Thought &amp; Deeds</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 page-common-hading">Kindness in Work and behavior:</h3>
          <ul className="list-disc list-outside ml-4 mb-20 page-content">
            <li>Not intruding in the others progress. Recognition of complementariness.</li>
          </ul>
        </div>
      </div>

      <p className="mb-6 text-justify page-content">
        Living with these social-laws or ‘character’ ensures we are self-restrained, not intruding in the other persons living in society, we let the other live. 
        When we are unable to live with the above, we end up being a <span className="font-semibold ">burden for society. All crimes in society</span> are a result of not following one, some or all of the above:
      </p>

      {/* Crimes Section */}
      <ul className="list-disc list-outside ml-5 mb-20 space-y-2 page-content">
        <li>
          <span className="font-semibold">Unrighteous Wealth:</span> Steal, Cheat or Conniving, Harming someone’s wealth.
        </li>
        <li>
          <span className="font-semibold">Infidelity:</span> Causing mental and physical harm by outraging someone’s modesty.
        </li>
        <li>
          <span className="font-semibold">Sadism:</span> Either speak, wish or partake in acts to cause harm to the other: mentally or physically.
        </li>
      </ul>

        {/* section2 */}
         {/* Ethics Section */}
      <h2 className="page-small-heading mb-4">
        Ethics [निति]
      </h2>
      <p className="mb-4 page-content">
        <span className="font-semibold">Essence of Ethics</span> is deploying one’s resources (body, mind, and wealth) for purposefulness. 
        This is called right-use. Right-use is in two aspects:
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h3 className="page-common-hading mb-2">Religious Ethics (Ethics of Religion, Dharma)</h3>
          <ul className="list-disc list-outside page-content ml-5">
            <li>Right-use of one’s resources: Body, Mind (conscious aspect), and Wealth.</li>
          </ul>
        </div>

        <div>
          <h3 className="page-common-hading mb-2">State Ethics (Ethics of State, Rajya)</h3>
          <ul className="list-disc list-outside ml-5 page-content">
            <li>Protection of one’s resources: Body, Mind (conscious aspect), and Wealth.</li>
          </ul>
        </div>
      </div>

      <p className="italic page-content mb-6">
        * Living in this manner/on this basis flows naturally from every human as a result of knowledge. It does not have to be imposed from outside or ‘learnt’ and 
        ‘repeated’. Hence, this is not a ‘set of beliefs’ or a ‘set of rules’ to be followed, but something that has to be known. 
        <span className="font-semibold"> This is the reason ‘human values’ is only possible via consciousness-development.</span>
      </p>

      <p className="mb-8 page-content">
        In this way, complete-Humane-conduct gets defined as a combined form of Values, Character, and Ethics.
      </p>

      {/* Human Family Section */}
      <h2 className="page-small-heading mb-4">Human Family</h2>
      <h3 className="font-semibold page-content mb-2">
        The family is the basic unit of organization and basis for humane society:
      </h3>
      <p className="mb-4 page-content">
        Such a family consists of a definite set of individuals living with ‘resolution,’ & prosperity. 
        They participate in production, exchange of goods and ensuring ‘justice’ – by way of living with ‘humane conduct’ as defined above. 
        A family unit typically consists of 3 generations and about 10-12 people. 
        Recognition of relationship and fulfillment of values such as Trust, Respect, Affection and Care in the family ensures mutual-fulfillment which itself is Justice.
      </p>

      <p className="mb-4  page-content">
        There are 3 relationships within the family: <span className="font-semibold">Mother-Father/Son-Daughter; Husband-Wife; and Brother-Sister.</span> 
        There are 3 relationships outside the family: <span className="font-semibold">Friend-Friend; Colleague-Coworker; and the ‘System’ relation</span> 
        (participation in human orderliness, systems). Every human lives in such relationships, even today. 
        When we <span className="italic">deny</span> any of these relationships, it causes problems.
      </p>

      <p className="mb-4 page-content">
        The identity of a human being is only in the family. A human being has no independent identity (although we imagine otherwise today). 
        Material needs can only be definitely identified in a family.
      </p>

      <p className="mb-4 page-content">
        Just like many particles come together to form an atom which is the smallest unit in orderliness in the Universe, 
        so also, humans come together to live in a family (some by birth, some by marriage) and this forms the smallest unit and basis for orderliness in human society. 
        Human beings experience fulfillment only by living in relationships.
      </p>

      <p className="mb-8 page-content">
        It is not possible to have complete-Humane-Conduct without Wisdom; and it is not possible to have Wisdom without ‘Knowledge’.
      </p>

      <p className="page-content italic">– shriram n | student | jan 2012</p>
</div>
    </>
  )
}

export default Page