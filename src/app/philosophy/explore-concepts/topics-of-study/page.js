import Backjs from "@/components/Backjs";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const TopicsOfStudy = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      <Backjs />
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Topics of Study</h1>

      <div className="space-y-6 ">
        <p className="page-content"><strong>Curriculum-Essence for Value-Education and Consciousness-Development</strong><br />
        – By A. Nagraj</p>

        <p className="page-small-heading"><strong>Knowing Existence</strong></p >
        <p className="mb-10 page-content">Study of coexistence as nature (all material and conscious entities) saturated in pervasive-element.
        Study of ten activities of Awakened Jeevan.</p>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-400 page-content">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-2">JEEVAN FORCE</th>
                <th className="border px-3 py-2">ACTIVITY IN STATE</th>
                <th className="border px-3 py-2">ACTIVITY IN MOTION</th>
                <th className="border px-3 py-2">JEEVAN POWER</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">1</td>
                <td className="border px-3 py-2">Atma (nucleus)</td>
                <td className="border px-3 py-2">Realization</td>
                <td className="border px-3 py-2">Evidence</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">2</td>
                <td className="border px-3 py-2">Buddhi(first orbit)</td>
                <td className="border px-3 py-2">Comprehension</td>
                <td className="border px-3 py-2">Determination</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">3</td>
                <td className="border px-3 py-2">Chitta (second orbit)</td>
                <td className="border px-3 py-2">Contemplation</td>
                <td className="border px-3 py-2">Imaging</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">4</td>
                <td className="border px-3 py-2">Vritti (third orbit)</td>
                <td className="border px-3 py-2">Weighing</td>
                <td className="border px-3 py-2">Analysis</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">5</td>
                <td className="border px-3 py-2">Mun (fourth orbit)</td>
                <td className="border px-3 py-2">Tasting</td>
                <td className="border px-3 py-2">Selecting</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="page-content">Awakened human-being is capable of realizing human-values by recognizing relationships in work and behavior. Families of such awakened humans realize resolution and prosperity. These families, in turn realize their participancy in undivided-society, and universal-orderliness.</p>

        <p className="page-content">Nature – manifested as four definite orders – is energized in pervasive-element.<br />
        Matter-Order: Energized, and Active.<br />
        Plant-Order: Energized, Active, and Pulsation.<br />
        Animal-Order: Energized, Active, Respiration, and Desire-of-living.<br />
        Knowledge-Order: Energized, Active, Respiration, Desire-of-living, and having possibility of realizing Wisdom.</p>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-400 page-content">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-2">Four Definite Orders in Existence</th>
                <th className="border px-3 py-2">Nature</th>
                <th className="border px-3 py-2">Attributes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Matter-Order</td>
                <td className="border px-3 py-2">Material Nature</td>
                <td className="border px-3 py-2">Active</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Plant-Order</td>
                <td className="border px-3 py-2">Material Nature</td>
                <td className="border px-3 py-2">Pulsating</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Animal-Order</td>
                <td className="border px-3 py-2">Conscious Nature</td>
                <td className="border px-3 py-2">Desiring to live, Realizes Animal-Consciousness</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Knowledge-Order</td>
                <td className="border px-3 py-2">Conscious Nature</td>
                <td className="border px-3 py-2">Desire to live with happiness; Living with happiness is realizable in Human-Consciousness, Godly-consciousness, and Divine-Consciousness.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="page-content">Activity of an entity in nature is a combined expression of its potential (shram), flow (gati), and constitution (parinam)...</p>

        <p className="page-content">Cause of above: Coexistence is forever effective.</p>

        <p className="page-content">Emergence of plant-order is imperative on an Earth enriched with these four kinds of natural-chemicals...</p>

        <p className="page-content">Human-being is a combined expression of body (physiochemical natural-formation) and jeevan (constitutionally-complete atom)...</p>

        <p className="page-content">Existence-Rooted-Human-Centric-Ideology is an expression of Coexistence as:<br />
        Knowledge (Gyan) of Existence<br />
        Knowledge of Jeevan<br />
        Knowledge of Humane-Conduct</p>

        <p className="page-content">Jeevan-Vidya Program is for universalizing of this wisdom through:<br />
        Integrated-Education<br />
        Jeevan-Vidya Workshops<br />
        Results of Family-Rooted Self-Regulation Orderliness</p>

        <p className="page-common-hading"><>Expression in Living</></p >
        <p className="page-content">Jeevan is the only conscious-entity in existence capable of seeing and knowing...</p>

        <p className="page-common-hading"><>Seven Human-Relations</></p>
        <ul className="list-disc ml-6 page-content">
          <li>Mother/Father</li>
          <li>Son/Daughter</li>
          <li>Brother/Sister</li>
          <li>Teacher-Student</li>
          <li>Peer-Assistant</li>
          <li>Friend</li>
          <li>Husband/Wife</li>
        </ul>

        <p className="page-common-hading"><>Three Relations with rest of the Nature (other than humankind)</></p>
        <ul className="list-disc ml-6 page-content">
          <li>With Animal-Order</li>
          <li>With Plant-Order</li>
          <li>With Matter-Order</li>
        </ul>

        <div className="overflow-x-auto">
          <table className="table-auto border mb-10 border-gray-400 page-content">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-2">Relation Name</th>
                <th className="border px-3 py-2">Innate Purpose of the relationship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Mother/Father</td>
                <td className="border px-3 py-2">Nourishment and Protection</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Son/Daughter</td>
                <td className="border px-3 py-2">Omni-dimensional Resolution, Usefulness, Complementariness</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Brother/Sister</td>
                <td className="border px-3 py-2">Mutual assistance for omni-dimensional resolution</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Teacher-Pupil</td>
                <td className="border px-3 py-2">Knowledge and curiosity</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Peer-Assistant</td>
                <td className="border px-3 py-2">Responsibility and Duty</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Friend</td>
                <td className="border px-3 py-2">Mutual complementariness</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Husband/Wife</td>
                <td className="border px-3 py-2">Realizing wisdom in family through mutual-complementariness.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="page-common-hading "><strong >Four Jeevan-Values</strong><br /></p>
        <p className="page-content">
        Resolution = Happiness<br />
        Resolution and Prosperity = Peace<br />
        Resolution, Prosperity, and Fearlessness = Satisfaction<br />
        Resolution, Prosperity, Fearlessness, and Coexistence Realized = Bliss</p>
      </div>
           
          <h1 className="page-heading mb-6">Humane Orderliness</h1>
          
          <section className="mb-8">
            <h2 className="page-small-heading mb-4 ">Core Principles</h2>
            <p className="mb-4 page-content">Wisdom of principle, natural-control, and equilibrium in relationships with nature – other than humankind.</p>
            <p className="page-content">Study and wisdom of principle, natural-control, equilibrium, justice, resolution, and truth.</p>
          </section>

          <section className="mb-8">
            <h2 className="page-small-heading mb-4">Values</h2>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Four Jeevan-Values</li>
              <li>Six Human-Values</li>
              <li>Nine Established-Values</li>
              <li>Nine Expression-Values</li>
              <li>Two Occupation-Values (related with production)</li>
            </ul>
            <p className="mb-2 page-small-heading">Four Jeevan-Values:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Resolution = Happiness</li>
              <li>Resolution and Prosperity = Peace</li>
              <li>Resolution, Prosperity, and Fearlessness = Satisfaction</li>
              <li>Resolution, Prosperity, Fearlessness, and Coexistence Realized = Bliss</li>
            </ul>
            <p className="mb-2 page-small-heading">Definitions:</p>
            <ul className="list-disc pl-6 page-content">
              <li>Resolution = Having answer of every “why” and “how”</li>
              <li>Prosperity = Producing more than the needs of family in alignment with nature’s-principles.</li>
              <li>Fearlessness = Justice in all human-relationships</li>
              <li>Coexistence = Equilibrium realized in nature’s four orders = Living with principle, natural-control, equilibrium, justice, dharma, and truth</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="page-small-heading mb-4">Human-Consciousness in Relationships</h2>
            <p className="mb-4 page-content">Human-consciousness is manifested in human-relations as following established-values and expression-values.</p>
            <table className="table-auto w-full mt-5 mb-4 page-content">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Established-Values</th>
                  <th className="border px-4 py-2">Expression-Values</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-4 py-2">Gratitude: Acceptance of help received from anyone for realizing omni-dimensional resolution.</td><td className="border px-4 py-2">Self-restraint: Controlled behavior out of one’s own desire.</td></tr>
                <tr><td className="border px-4 py-2">Glory: Unconditional acceptance for following other’s example.</td><td className="border px-4 py-2">Ease: Expression devoid of complexities and tensions.</td></tr>
                <tr><td className="border px-4 py-2">Reverence: (1) Movement towards higher-value, i.e. qualitative-improvement towards conduct-completeness. (2) Movement towards awakening and truth’s-authenticity – and its continuity.</td><td className="border px-4 py-2">Obedience: Activity for qualitative-improvement in one’s conduct, and for awakening.</td></tr>
                <tr><td className="border px-4 py-2">Love: (1) Experiencing completeness in existence. (2) Combined expression of kindness, beneficence, and compassion.</td><td className="border px-4 py-2">Unanimity: (1) Oneness in mutuality (2) Absence of feeling of otherness (3) Mutually complementary activity in human-relationships and rest of nature.</td></tr>
                <tr><td className="border px-4 py-2">Trust: (1) Realizing values innate in a relationship. (2) Expression of resolution with understanding of orderliness in existence.</td><td className="border px-4 py-2">Complementariness: Cooperating, helping, collaborating</td></tr>
                <tr><td className="border px-4 py-2">Guidance: Continuity of nourishment and protection for omni-dimensional resolution.</td><td className="border px-4 py-2">Spontaneity: (1) Clarity and Truth’s-authenticity (2) Coherence in one’s behavior, practice, thinking, and existential-experience</td></tr>
                <tr><td className="border px-4 py-2">Motherliness: (1) Acceptance of providing nourishment and protection as ultimate form of belongingness. (2) Acceptance of another person to be one’s own manifestation, and its continuity.</td><td className="border px-4 py-2">Generosity: (1) Offering and surrendering one’s resources (as body, mind, and wealth) with happiness as needed for another’s awakening, body’s healthiness, and prosperity. (2) Deploying one’s comforts (prosperity) and happiness (resolution) into right-use for others.</td></tr>
                <tr><td className="border px-4 py-2">Respect: Continuous acceptance of good-qualities (talent and personality) in other person and acknowledging these clearly and with equilibrium.</td><td className="border px-4 py-2">Compliance: Activities of presenting exactly the way a concept, experience, memory, and words were accepted from other person.</td></tr>
                <tr><td className="border px-4 py-2">Affection: (1) Spontaneity in judicious behavior. (2) Spontaneously meeting in, for, and from mutual-fulfillment and its continuity.</td><td className="border px-4 py-2">Commitment: Continuous and sustained efforts for achieving objective of awakening in existence, with its definite conceptualization.</td></tr>
              </tbody>
            </table>
          </section>

          <section className="mb-8">
            <h2 className="page-small-heading mt-16 mb-4">Values in Relationships</h2>
            <p className="mb-4 page-content">Humane-orderliness in essence is realization of all relations. Values that are realized in relationships:</p>
            <ul className="list-disc pl-6 page-content">
              <li><strong>Child towards Parents:</strong> Trust and its continuity. Values of Glory, Gratitude, and Love are expressed as Ease, Self-restraint, and Unanimity – along with offering and surrendering of objects and seva.</li>
              <li><strong>Parent/Guardian towards Children:</strong> Trust and its continuity. Values of Motherliness, Guidance, and Love are expressed as Generosity, Spontaneity, and Unanimity – along with offering and surrendering of objects and seva.</li>
              <li><strong>Brother and Sister towards Each Other:</strong> Trust and its continuity. Values of Respect, Glory, Gratitude, and Love are expressed as Compliance, Ease, Self-restraint, and Unanimity – along with offering and surrendering of objects and seva.</li>
              <li><strong>Teacher towards Student:</strong> Trust and its continuity. Values of Love, Guidance, and Motherliness are expressed as Unanimity, Spontaneity, and Generosity with offering and surrendering of objects and seva.</li>
              <li><strong>Student towards Teacher:</strong> Trust and its continuity. Values of Glory, Gratitude, Respect, Love are expressed as Ease, Self-restraint, Compliance, and Unanimity, combined with curiosity for knowledge – with offering and surrendering of objects and seva.</li>
              <li><strong>Husband and Wife towards Each Other:</strong> Trust and its continuity. Values of Affection, Glory, Respect, and Love are expressed as Commitment, Ease, Compliance, and Unanimity – along with offering and surrendering of objects and seva.</li>
              <li><strong>Peer towards Assistant:</strong> Trust and its continuity. Values of Affection, Motherliness are expressed as Commitment with Kindness and Generosity – while giving objects and seva with duty and responsibility.</li>
              <li><strong>Assistant towards Peer:</strong> Trust and its continuity. Values of Glory, Respect, and Gratitude are expressed as Ease, Compliance, and Self-restraint – while surrendering seva.</li>
              <li><strong>Friends towards Each Other:</strong> Trust and its continuity. Values of Affection, Respect, and Love are expressed as Commitment, Compliance, and Unanimity – while offering and surrendering of objects and seva.</li>
              <li><strong>Family-members:</strong> Trust and its continuity. Relations are lived with humane-conduct in work and behavior. Production exceeding the requirements for family’s needs for nourishment, protection, and societal-progress. Usage, right-use, and purposefulness of objects for realizing orderliness.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="page-small-heading mb-4">Humankind Classifications</h2>
            <p className="mb-4 page-content">Humankind of five kinds – in three groups.</p>
            <p className="mb-4 page-content">Coexistence is ever-actively-present nature saturated in pervasive-element. Pervasive-element is complete – since it is changeless. Nature is oriented towards completeness due to its being ‘in’ pervasive-element.</p>
            <p className="mb-4 page-content">Man is an entity of knowledge-order is in Illusion-Plane before realizing human-ness. Illusion-plane living is characterized as:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Man realizing Human-Consciousness</li>
              <li>Man realizing Godly-consciousness (or living as Godly-human)</li>
              <li>Man realizing Divine-Consciousness (or living as Divine-human)</li>
              <li>Sub-human: Man with animal-like mentality, Man with devil-like mentality (living in animal-consciousness)</li>
              <li>Human: Man realizing human-ness (living in human-consciousness)</li>
              <li>Super-Human: Godly-human, Divine-human (living in Godly-consciousness and Divine-Consciousness)</li>
            </ul>
            <p className="mb-4 page-xsmall-hading">Individualism, Sectarianism:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Living as sub-human (animal-like mentality and devil-like mentality)</li>
              <li>Living with fear and greed – due to over-valuation, under-valuation, and un-valuation.</li>
              <li>Sub-human characteristics – Inferiority, Weakness, Cruelty. (animal-like mentality – primarily inferiority, demon-like-mentality – primarily cruelty)</li>
              <li>Sub-human world-views – Pleasurable, Conduciveness, Profitability</li>
              <li>Sub-human Inclinations – Hoarding and Comforts</li>
            </ul>
            <p className="mb-4 page-content"><strong>Human Natural-Characteristics:</strong> Strength, Courage, Generosity</p>
            <p className="mb-4 page-content"><strong>Human World-view:</strong> Justice (primarily)</p>
            <p className="mb-4 page-content"><strong>Human Natural-inclination: </strong>Living as Humane-Family</p>
            <p className="mb-4 page-content"><strong>Godly Human Natural-characteristics:</strong> Strength, Courage, Generosity, Kindness, Beneficence</p>
            <p className="mb-4 page-content"><strong>Godly Human World-view:</strong> Dharma (Omni-dimensional Resolution) primarily</p>
            <p className="mb-4 page-content"><strong>Godly Human Natural-inclination: </strong>Humane-Orderliness, Undivided-Society, and Universal-Orderliness.</p>
            <p className="mb-4 page-content"><strong>Divine Human Natural-characteristics:</strong> Strength, Courage, Generosity, Kindness, Beneficence, and Compassion.</p>
            <p className="mb-4 page-content"><strong>Divine Human World-view:</strong> Truth (primarily)</p>
            <p className="mb-4 page-content"><strong>Divine Human Natural-inclination</strong> universal goodness.</p>
          </section>

          <section className="mb-8  mt-14">
            <h2 className="page-small-heading mb-4 mt-14">Awakened Living</h2>
            <p className="mb-4 page-content">Earth is one, though nation-states are many. All nation-states can realize their purpose in universality and indivisibility.</p>
            <p className="mb-4 page-content">Awakened human-being is an entity that sees (knows), acts (in work and behavior), and takes outcomes of these (awakened) actions.</p>
            <p className="mb-4 page-content">Awakened human realizes freedom in action and also freedom in taking the rewards of those actions.</p>
            <p className="mb-4 page-content">Awakened human – being aware of outcomes of his actions – realizes spontaneity, and since his actions are aligned to Destined-progression – he realizes freedom also in taking the rewards of his (awakened) actions.</p>
            <p className="mb-4 page-content">Destined-progression = Realization of Complementariness and Usefulness.</p>
            <p className="mb-4 page-content">Outcomes of positive-actions get distributed and are accepted by all. Outcomes of negative-actions don’t get accepted by any.</p>
          </section>

          <section className="mb-8">
            <h2 className="page-small-heading mb-4">Human Organization</h2>
            <p className="mb-4 page-content">Vision of Ten Layered Humane-Organization: Existence Rooted Human Centric Ideology’s manifestation. Family is focal-point for this manifestation. Every Family-member realizes following six qualities in himself/herself:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>trust within one’s self</li>
              <li>respect for good-qualities in others</li>
              <li>equilibrium in talent</li>
              <li>equilibrium in personality</li>
              <li>sociality in behavior</li>
              <li>self-dependence in occupation</li>
            </ul>
            <p className="mb-4 page-content">Favorable conditions for human’s Usefulness and Complementariness:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Universal Availability of Education and Sanskar</li>
              <li>Universal Availability of Justice and Protection</li>
              <li>Universal Availability of Production-Work</li>
              <li>Universal Availability of Exchange of Manual-work</li>
              <li>Universal Availability of Health and discipline related knowledge and activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="page-small-heading mb-4">Awakened Human Tradition’s Dimensions</h2>
            <p className="mb-4 page-content"><strong>Living:</strong> Living of human-being is meaningful with realization of Jeevan-Values. Human-Objectives (Resolution, Prosperity, Fearlessness, and Coexistence) need to be achieved for realizing Jeevan-Values.</p>
            <p className="mb-4 page-content"><strong>Undivided Society:</strong> Undivided humane-society is achieved when every human-being realizes established-values and expression-values.</p>
            <p className="mb-4 page-content"><strong>Universal-Orderliness: </strong>Universal-Orderliness is realizable on Earth by universalizing Human-Values.</p>
            <p className="mb-4 page-content"><strong>Stage-1:</strong> Family: Awakened-Family is the first expression of Humane-Orderliness.</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Trust and its continuity are realized in Family.</li>
              <li>Family-members live with Gyan, Vivek, and Vigyan.</li>
              <li>In a Family, Humane-Conduct is realized as continuance of resolution and prosperity.</li>
              <li>Everyone in an awakened-family realizes established-values and expression-values.</li>
              <li>Everyone in an awakened-family achieves human-objectives and realizes jeevan-values.</li>
              <li>Awakened-family is the essence of fearlessness in humane-society.</li>
              <li>An awakened-family realizes its participancy in universal-orderliness.</li>
            </ul>
            <p className="mb-4 page-content"><strong>Stage-2:</strong> Family-Council:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Family-Council is composed of representatives elected from ten families in a locality.</li>
              <li>Family-Council as an entity realizes humane-conduct.</li>
              <li>Family-Council is the second level expression of undivided-society. (first level being family)</li>
              <li>Family-Council has definite programs in following five dimensions in alignment with universal humane-orderliness:</li>
              <ul className="list-disc pl-6 page-content">
                <li>Humane Education and Sanskar program</li>
                <li>Humane Justice and Protection program</li>
                <li>Humane Production program</li>
                <li>Humane Manual-work Exchange program</li>
                <li>Humane Health and Discipline program</li>
              </ul>
              <li>Family-Council works on tests, observations, betterment, assessment, and reporting of the above.</li>
            </ul>
            <p className="mb-4 page-content"><strong>Stage-3:</strong> Village/Locality-Council:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Village/locality-council is composed of ten representatives from ten family-councils of the village/locality. Range of village/locality-council is 100 families.</li>
              <li>Five committees are formed from members selected from the ten family councils of the village/locality.</li>
              <li>Following Five-Committees are formed in every Village/Locality:</li>
              <ul className="list-disc pl-6 page-content">
                <li>Humane Education and Sanskar Committee</li>
                <li>Humane Justice and Protection Committee</li>
                <li>Humane Production-work Committee</li>
                <li>Humane Manual-work exchange Committee</li>
                <li>Humane Health and Discipline Committee</li>
              </ul>
              <li>Responsibilities of the committee members shall be ascertained for the goals Village/locality-council.</li>
            </ul>
            <p className="mb-4 page-content"><strong>Stage-4:</strong> Village/Locality-Family-Council:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Village/Locality-family-council is composed of 10 representatives from the 10 village/locality councils. The range of Village/Locality-family-council, therefore, is 1000 families in 10 villages/localities.</li>
              <li>Joint-testimony of five committees of each village/locality, and testimony of every village/locality-council, and the village/locality-family-council’s own testimony for the condition of the 100 families with respect to their status with :</li>
              <ul className="list-disc pl-6 page-content">
                <li>Knowledge dissemination</li>
                <li>Honesty status – as vivek and vigyan</li>
                <li>Responsibility status – as human-relations</li>
                <li>Participancy status – for realizing its usefulness and complementariness.</li>
              </ul>
            </ul>
            <p className="mb-4 page-content">Valuation and testimony of village-population’s status with human-consciousness, natural-inclination, and commitment.</p>
            <p className="mb-4 page-content">Valuation and Testimony of village-population’s status with respect to the six-qualities</p>
            <p className="mb-4 page-content">Valuation and testimony of village population’s status with respect to the five-dimensions of human-work.</p>
            <p className="mb-4 page-content">In similar fashion remaining six stages are described – which extend up to World-family-council of Humane-orderliness.</p>
          </section>

          <section className="mb-8">
            <h2 className="page-small-heading mb-4">Framework of Humane-Education</h2>
            <p className="mb-4 page-content">Basis: Basis of proposed Humane-Education framework is Madhyasth Darshan Saha-Astitva-Vad. This Darshan is in four parts:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Manav Vyavhar Darshan (Awakening in Humane-Behavior)</li>
              <li>Manav Karm Darshan (Awakening in Humane-Karma)</li>
              <li>Manav Abhyas Darshan (Awakening in Humane-Practice)</li>
              <li>Manav Anubhav Darshan (Awakening in Existential-Experience)</li>
            </ul>
            <p className="mb-4 page-xsmall-hading">Reason for Humane-Education:</p>
            <p className="mb-4 page-content">Conflicts in humankind are due to social (and religion), economic, and political disparities. Humane-Education is needed for realizing omni-dimensional resolution in human-living – as all disparities get dissolved in resolution.</p>
            <p className="mb-4 page-xsmall-hading">Proposition:</p>
            <p className="mb-4 page-content">Jeevan-Vidya Proposal is for transition of humankind from animal-consciousness into human-consciousness.</p>
            <p className="mb-4 page-content">There shall be social, economic, and political harmony in the purview of human-consciousness – since every human desires protection and right-use of his resources.</p>
            <p className="mb-4 page-content">The principles for right-use of resources are – Dharma-Neeti.</p>
            <p className="mb-4 page-content">The principles for protection of resources are – Rajya-Neeti.</p>
            <p className="mb-4 page-content">Protection and right-use of body, mind (mun), and wealth are interdependent. One needs wisdom to realize these.</p>
            <p className="mb-4 mt-10 page-xsmall-hading">The Purpose of Humane-Education:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Establish Work-Ethics of Human-Consciousness – is the purpose of Humane-Education.</li>
              <li>The purpose of Humane-Education is to bring about Harmony and Unanimity in all four aspects of human-living – i.e. Occupation, Behavior, Thinking, and Experience; and all five statuses of human-living – i.e. Individual, Family, Society, Nation, and Inter-nation.</li>
              <li>Emergence of equilibrium in personality and talent in everyone – is the purpose of Humane-Education.</li>
              <li>Changing of all kinds of group-ism tendencies into human-consciousness – is the purpose of humane-education.</li>
              <li>Building coexistence and resolution based social-consciousness – is the purpose of Humane-Education.</li>
              <li>Every child demands justice from birth, and desires to do right. Providing every child capacity to give justice, and capability to do right – is the purpose of Humane-Education.</li>
              <li>Fulfilling everyone’s must-need of realizing resolution and prosperity – is the purpose of Humane-Education.</li>
              <li>Explaining of Destined-progression – and the human-role therefore is the purpose of Humane-Education.</li>
              <li>Humane-Education shall align all Education methods, mechanisms, and norms in purview of human-ness.</li>
              <li>Humane-Education shall establish qualitative-uniformity at all levels of education – schools, high-schools, universities, etc.</li>
              <li>Humane-Education shall establish study and research systems for finer aspects of Psychology.</li>
              <li>Humane-Education shall establish every student and individual as a participant of Undivided-Society.</li>
              <li>Humane-Education shall establish harmony between educators, students, and guardians through behavioral-education.</li>
              <li>Humane-Education shall establish harmony between present, future, and past generations at all levels – by making them capable for carrying out their duties and responsibilities.</li>
              <li>Humane-Education shall establish universal education of humane-culture, humane-norms, and humane-orderliness.</li>
              <li>Humane-Education shall establish the capacity in every individual for producing more and consuming less.</li>
              <li>Humane-Education shall establish systems for students and teachers to interact with local personalities and qualified-individuals.</li>
            </ul>
            <p className="mb-4 page-xsmall-hading">The Content of Humane-Education:</p>
            <p className="mb-4 page-content">All subjects being taught presently in education-systems need to be connected with the Holistic-Knowledge by incorporation of:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Consciousness along with study of Technology</li>
              <li>Values along with study of Psychology</li>
              <li>Realization along with study of Philosophy</li>
              <li>Protection and right-use aspects along with study of Economics</li>
              <li>Assurance and enhancement of human-ness along with study of principled-living of Humane-Orderliness</li>
              <li>Humane-culture and humane-civility along with study of Sociology</li>
              <li>Study of human-being and human-ness along with study of Geography and History</li>
              <li>Reality orientation with study of Literature</li>
            </ul>
            <p className="mb-4 page-xsmall-hading">Education Council:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>There shall be an Education-Council at National level – that will also have students and researchers. This council shall carry out its duties and responsibilities towards International Education-Council.</li>
              <li>This Education-Council shall be responsible for ascertaining the responsibilities, policies, procedures, and directions for Educational-Institutions.</li>
              <li>The proposals of this council shall get approval of the Nation for implementation.</li>
              <li>This council shall have rights to give proposals for qualitative improvements in Education.</li>
              <li>The council shall also accept individual-proposals on matters of education. It will also have system for rewards and recognition for the same.</li>
              <li>Every Education-council shall implement its proposals in purview of Human-ness – which shall ensure that there is no discord in education-councils internationally.</li>
              <li>International Education-council shall ensure universality of Education.</li>
            </ul>
            <p className="mb-4 page-xsmall-hading">Technical Training:</p>
            <ul className="list-disc pl-6 mb-4 page-content">
              <li>Effective methods and systems for technical-training in skill and art shall be needed for successive refinement in production and building.</li>
              <li>Technical education shall also work on establishing social-skills and individual-commitment in the students.</li>
              <li>Education at this level shall incorporate study for realizing godly-consciousness and divine-consciousness.</li>
              <li>Every student shall be trained for production-abilities and shall imbibe wisdom of ‘More Production, Less Consumption’.</li>
              <li>Behavioral-Education shall be incorporated along with Technical-Education so that every individual can become both productive and social.</li>
              <li>Techniques of Agriculture, Industry, and Health shall be incorporated as main subjects – instead of their being optional or a formality.</li>
            </ul>
            <p className="mb-4 page-xsmall-hading">Educational Institution:</p>
            <ul className="list-disc pl-6 mb-14 page-content">
              <li>Every educational-institution shall be responsible for making all adults literate and providing education to all boys and girls in its region.</li>
              <li>Responsibilities of each position in the Educational Institution shall be ascertained by the Education-Council.</li>
              <li>Every educational-institution shall be responsible for surveying the social, economic, political, and behavioral systems of its region.</li>
              <li>Responsibility for reporting the local-conditions shall be with the local institution.</li>
            </ul>
            <p className="mb-4 page-content">English translated version by Rakesh Gupta, student | Jan 2007</p>
          </section>
        </div>
    
  );
};

export default TopicsOfStudy;
