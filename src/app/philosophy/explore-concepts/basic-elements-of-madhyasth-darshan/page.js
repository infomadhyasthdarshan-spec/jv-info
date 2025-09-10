import Backjs from "@/components/Backjs";
import React from "react";

const MadhyasthDarshanContent = () => {
  const sections = [
    { id: 1, title: "Proclamation", content: (<><li className="list-disc">"Let Live and Live"</li></> )},
    {
      id: 2,
      title: "Wish for Universal-Goodness",
      content: (
        <>
          <li className="list-disc">May Earth be Heaven,</li>
          <li className="list-disc">May humans be godly.</li>
          <li className="list-disc">May Dharma* be fulfilled,</li>
          <li className="list-disc">May goodness arise always.</li>
          <p className="text-sm italic page-content">
            (* Dharma = Religion = Adherence = Inseparability. That which cannot be
            separated from a thing is its Religion or dharma.)
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Knowledge in Realization",
      content:(<><li className="list-disc list-outside  ">Physiochemical (jad) and conscious (chaitanya) nature saturated in the Omnipotence, physiochemical and conscious units saturated in the all-pervasive Omnipotence are infinite. All units saturated in all-pervasive, (transparent, and permeating) Omnipotence are endowed with form, properties, innate-nature, and religion (dharma*) – and are orderly with their innate-nature and participate in the overall-orderliness.</li></>)
    },
    { id: 4, title: "Principle", content:(<><li className="list-disc">Effort, Motion, Result (shram, gati, parinam)</li></>)  },
    { id: 5, title: "Sermon", content:(<><li className="list-disc">Believe what has been known\nKnow what has been believed</li></>)  },
    {
      id: 6,
      title: "State of Being",
      content:
        (<><li className="list-disc">Continuously-evolving nature saturated in the complete-state Omnipotence. Co-existence is eternal-presence.</li></>) 
    },
    {
      id: 7,
      title: "Evidence",
      content: (
        <>
          <li className="list-disc">Realization – Behaviour – Experimentation</li>
          <li className="list-disc">Realization itself is ultimate-evidence,</li>
          <li className="list-disc">Evidence itself is holistic-understanding, knowledge,</li>
          <li className="list-disc">Holistic-Understanding itself is manifest,</li>
          <li className="list-disc">Manifestation (of understanding) itself is resolved work and behaviour,</li>
          <li className="list-disc">Resolved work and behaviour itself is evidence,</li>
          <li className="list-disc">Evidence itself is awakened-tradition,</li>
          <li className="list-disc">Awakened-tradition itself is co-existence.</li>
        </>
      ),
    },
    {
      id: 8,
      title: "Actuality",
      content: (
        <ul className="list-disc ">
          <li className="list-disc ">Brahman* is real, world is eternal</li>
          <li className="list-disc ">
            Brahman (Omnipotence) is all-pervasive (Omnipresent), jeevan-units are many.
          </li>
          <li className="list-disc ">
            Atma, buddhi, chitta, vritti, and mun are inseparable in jeevan. The grandeur of human-being is as combined expression of jeevan and body.
          </li>
          <li className="list-disc ">
            God is the Omnipresence, while divine-beings are many. Humankind is one race, while human-actions are many. This earth is one undivided nation, while nation-states are many. Human Religion is one, while resolutions are in many dimensions. Jeevan is eternal, while birth and death are events.
          </li>
          <li className=" italic page-content">
            (* Translator note: ‘Brahman’ refers to all-pervasive space/void/energy in equilibrium. It is synonymous with Omnipotence and has no ideological connotations.)
          </li>
        </ul>
      ),
    },
{ id: 9, title: "Reality", content: (<li className="list-disc">Development-progression and development in co-existence. Awakening-progression – Awakening. Expressions upon Awakening as human-tradition of holistic-understanding.</li>) },
{ id: 10, title: "Knowledge", content: (<li className="list-disc">Knowledge of jeevan in co-existence. Knowledge of realistic-view of existence in the form of co-existence. Knowledge of ‘perfect-humane conduct’. Realization itself is knowledge.</li>) },
{ id: 11, title: "Discovery from Exploration", content: (<li className="list-disc">Constitutional Completeness. Functional Completeness. Conduct Completeness.</li>) },
{ id: 12, title: "Basis", content: (<li className="list-disc">Nature saturated in Omnipotence (Coexistence)</li>) },
{ id: 13, title: "Postulations", content: (<li className="list-disc">Physical-chemical nature alone is in the stage of development-progression. Jeevan is conscious-unit in the developed form. The conscious-unit or jeevan alone, upon awakening, produces evidence of undivided society in human tradition...</li>) },
{ id: 14, title: "Truth", content: (<li className="list-disc">Nature saturated in Omnipotence itself is Creation... Law is in Jeevan.</li>) },
{ id: 15, title: "Refuge of Humankind", content: (<li className="list-disc">The refuge of humankind is undivided-society and universal-orderliness (co-existence) – as human-tradition with evidences.</li>) },
{ id: 16, title: "Humane Orderliness", content: (<li className="list-disc">Humanness. Orderliness with humanness, participation in overall-orderliness.</li>) },
{ id: 17, title: "Perfection in Individual", content: (<li className="list-disc">Functional Perfection. Conduct Perfection.</li>) },
{ id: 18, title: "Perfection in Society", content: (<li className="list-disc">Resolution in all dimensions. Prosperity. Fearlessness. Human-tradition as evidence of co-existence.</li>) },
{ id: 19, title: "Perfection in the Nation-state", content: (<li className="list-disc">Skillfulness. Artfulness. Scholarliness.</li>) },
{ id: 20, title: "Perfection in Inter-nation", content: (<li className="list-disc">Coherence (universality) in Humane Culture, Civilization, Norms, and Orderliness</li>) },
{ id: 21, title: "Human Religion", content: (<li className="list-disc">Happiness, Peace, Contentment, Bliss</li>) },
{ id: 22, title: "The Basis of Religious Ethics", content: (<li className="list-disc">Orderliness for right-use of material and conscious means-of-living in the form of body, mind, and wealth</li>) },
{ id: 23, title: "The Basis for State Ethics", content: (<li className="list-disc">Orderliness for protection of material and conscious means-of-living in the form of body, mind, and wealth</li>) },
{ id: 24, title: "Movement towards Realization and Contemplation", content: (<li className="list-disc">From gross to subtle. From subtle to causal. From causal to supreme-cause (co-existence).</li>) },
{ id: 25, title: "Evidence of Awakening", content: (<li className="list-disc">From inhumanness to humanness. From humanness to godly-humanness. From godly-humanness to divine-humanness.</li>) },
{ id: 26, title: "Harmony", content: (<li className="list-disc">Jeevan is a status of harmony... Realization is a status of harmony.</li>) },
{ id: 27, title: "Universal Harmony", content: (<li className="list-disc ">Coherence and universality in the four aspects of human-living (work, behaviour, thought, and realization), five statuses (individual, family, society, nation, and inter-nation), and the ten staged family rooted self-organizing orderliness.</li>) },
{ id: 28, title: "Supreme Harmony", content: (<li className="list-disc">Awakening as realization in Truth (liberation from delusion)</li>) },
{ id: 29, title: "Accomplishment", content: (<li className="list-disc">Experience in established-values in co-existence. Liberation from delusion and everlasting awakening.</li>) },
{ id: 30, title: "Completeness in Education", content: (<li className="list-disc">Consciousness-development Value-Education. Technical Education (Skills)</li>) },
  ];

  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      <Backjs/>
      <h1 className="page-heading mb-6 text-left">Madhyasth Darshan – A. Nagraj</h1>
      <p className="text-left mb-6 italic   page-small-heading">
        English version of Original Hindi by Shri A. Nagraj | Translated by Shriram N | Student | Jan 2012
      </p>
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id}>
            <h2 className="page-common-hading mb-2">
              {section.id}. {section.title}
            </h2>
            <ul className="page-content pl-6">{section.content}</ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MadhyasthDarshanContent;
