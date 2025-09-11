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
    <>
      <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
        <Backjs />
        <h2 className="page-heading  pb-6">
          Educational Approach
        </h2>
        <p className="italic page-common-hading text-sm ">
          A brief, ‘accessible’ explanation is given below as a ‘small glimpse’:
        </p>
        <p>
        </p>

        <section>
          <h3 className="page-small-heading mt-6 mb-2">Approach: ‘Human-centric view’</h3>
          <ul className="list-disc pl-5 space-y-2 page-content">
            <li>Integral role of the ‘seer’ as the one that is experiencing, living (study of the human, not just abstraction of bodily physiology, anatomy, etc)</li>
            <li>Includes all phases and dimensions of human life, human happiness</li>
            <li>Includes all aspects of nature, reality the human needs to understand, and is related to, and affected by.</li>
          </ul>
        </section>

        <section>
          <h3 className="page-small-heading mt-6 mb-2">Curriculum & classroom practices</h3>
          <ul className="list-disc pl-5 space-y-2 page-content">
            <li>Based on a deep direct-understanding of the nature of existence (reality) and the human being & universal human purpose.</li>
            <li>
              Integrated view of all subjects as seen from within the experience of actual human living (<i>the way the child, youth, and adult see and experience the world</i>)
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Addresses all aspects of individual living: spiritual, experiential, intellectual, behavioural, material.
                </li>
                <li>
                  Includes laws in the natural sciences, laws of behaviour, social laws, and law in intellectual spheres.
                </li>
              </ul>
            </li>
            <li>Addresses universal human aspirations of happiness, peace, understanding, prosperity, good character, etc.</li>
            <li>Includes expectations of the Family, Society and Nation from the student, and vice-versa and their interactions thereof.</li>
            <li>Needs, Capabilities & commensurate learning & practices in the life stages of the human: childhood, youth, adult and old-age; whilst living in the Individual, Family, Society, Nation and Inter-Nation spheres.</li>
            <li>Reduce info load, increase practice of relevant skills (math, science, geo) and ‘core-concepts clarity’ focus.</li>
          </ul>
        </section>

        <section>
          <h3 className="page-small-heading mt-6 mb-2">Pedagogy & School environment</h3>
          <ul className="list-disc pl-5 space-y-2 page-content">
            <li>Based on a deep understanding of the conscious aspect (<i>chaitanya jeevan and its precise functioning</i>) and the true nature of ‘spirituality’ based on actual existential knowledge, not just mystical intuition or estimations.</li>
            <li>Enabling to ‘see & live’ instead of only ‘learn & reproduce’: guided exploration</li>
            <li>All environments the child lives in are taken into consideration – in the school, and outside.</li>
            <li>School is an extension of the <i>behavioural environment</i> at home.</li>
            <li>Teacher is in the role of the guru and is responsible for the overall development of the child to fruition as a complete-human being. Based on personal <i>‘guru-shishya sambandh’</i>. The child’s development forms part of the teachers practice towards <i>their own</i> personal improvement. Teacher addressed as <i>acharya</i>, or <i>adhyapakji</i></li>
            <li>Our Understanding of the child’s development is – ages: 0-5: emulation, 5-10: purpose (obeying), 11-16: discipline, 16-18: self-discipline.</li>
            <li>Although they are English medium schools, all instruction and interaction is bilingual.</li>
            <li>The child’s attention is guided in such a manner that they can address the various elements of their ‘being’ and ‘living’ appropriately.</li>
            <li>Concept-based approaches to math and sciences, where it is first instilled in imagination, the utility & observational in nature is taught, then the theory.</li>
            <li>The syllabus is also planned in such a manner that topics a child will require to understand later are introduced a few years prior.</li>
            <li>Our Methods of Teaching</li>
            <ul className='list-disc pl-5 space-y-2'>
              <li>Meaningful Dialogue</li>
              <li>Appreciation</li>
              <li>Guided Practice</li>
              <li>Collaborative Project – project based learning</li>
              <li>Peer Learning and Higher Learning</li>
              <li>Life-long learning concepts, social-character, daily routine (health & work)</li>
              <li>Connect content with living – living in a family and participating in family vocations – increase production + physical work mentality.</li>
              <li>Math Practice at the beginning of every day</li>
              <li>Village Surveys</li>
              <li>Production Activities – to meaningfully use the organs of action</li>
              <li>Non-competitive games and sports – self competitive not with each other</li>
              <li>Debriefing</li>
            </ul>
            <li>Bother teachers and parents are facilitated via Jeevan Vidya workshops and the understanding of the underlying philosophies to get this integral-view.</li>
          </ul>
        </section>
        <h2 className="mt-4 mb-4 page-common-hading">Assessment approaches</h2>
        <ul className="list-disc list-outside pl-5 space-y-2 page-content">
          <li>Both quantitative and qualitative methods of assessment are used, as needed.</li>
          <li>Comparison for competition not done. Used as tools for personal improvement. Others' successes are celebrated and emulated.</li>
          <li>Covers the following areas.</li>
        </ul>

        <div className="mt-4">
          <h3 className="page-nav-card-heading font-bold">Material Aspect</h3>
          <ul className="list-disc list-outside pl-5  page-content space-y-1">
            <li>Healthy development of sensory aspects, brain, body strength, agility, etc.</li>
            <li>Skills learning, willingness for physical work, sincerity</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="page-nav-card-heading font-bold">Behavioural Aspect</h3>
          <ul className="list-disc page-content list-outside pl-5 space-y-1">
            <li>Tendencies, bhaavas, expression – verbal and others, commitment to relationship</li>
            <li>Participation at home in multiple dimensions – behaviour & seva</li>
            <li>Societal interaction, character, appreciation of place in Human society.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="page-nav-card-heading font-bold">Intellectual aspect</h3>
          <ul className="list-disc list-outside pl-5 space-y-1 page-content">
            <li>Memory and recall</li>
            <li>Language & Math, computation</li>
            <li>Critical reasoning, understanding</li>
            <li>Qualitative application in life: wisdom/ viveka.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="page-nav-card-heading font-bold"> Spiritual, Existential Aspect</h3>
          <ul className="list-disc list-outside pl-5 space-y-1 page-content">
            <li>Clarity on human life, consciousness, goals, purpose</li>
            <li>Existential nature of the Universe and its components</li>
            <li>Knowledge of laws of the Material world</li>
            <li>
              Clarity on how all this information and knowledge is related to individual, familial and societal happiness,
              contentment & well-being
            </li>
          </ul>
        </div>

        <div className="my-6 text-center text-lg font-semibold">***</div>

        {/* <p className="page-content mt-4 pb-5 border-t pt-4 ">
          See inputs provided to the <span className="text-red-600 underline">National Curriculum Framework</span> as part of the
          National Education Policy for India (NEP) 2022
        </p>
        <p className="page-content ">
          Also see concept note on higher education: <span className="text-red-600 underline">Value Education for Consciousness Transformation</span>
        </p> */}

        <p className="page-content italic mt-6">
          shriram n / student / june 2022 / based on inputs from education team in the schools.
        </p>
      </div>
    </>
  )
}

export default page