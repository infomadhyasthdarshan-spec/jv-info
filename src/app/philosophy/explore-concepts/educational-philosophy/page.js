"use client";
import Backjs from "@/components/Backjs";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <>
      <div className="`px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6`">
        <Backjs />
        <h2 className="page-heading pb-2">Educational Philosophy</h2>
        <div>
          <p className="page-content pb-2">Click section to read</p>

          <ul className="list-disc pl-5 space-y-2 page-content">
            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId = "the-need-for-education";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              The need for education
            </li>

            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId = "our-view-of-reality-World-view-ontology";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Our view of Reality/ World-view/Ontology
            </li>

            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId = "role-objectives-of-human-education";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Role/Objectives of human education
            </li>

            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId =
                  "content-of-education-Knowledge-wisdom-science";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Content of Education - Knowledge, Wisdom & Science
            </li>

            <li>Multidisciplinary & Holistic Education</li>

            <ul className="list-decimal pl-5 space-y-2 page-content">
              <li
                className="text-[#9c5027] cursor-pointer"
                onClick={() => {
                  const targetId = "life-themes";
                  document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Life Themes
              </li>

              <li
                className="text-[#9c5027] cursor-pointer"
                onClick={() => {
                  const targetId = "family-life-human-character";
                  document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Family Life & Human Character
              </li>

              <li
                className="text-[#9c5027] cursor-pointer"
                onClick={() => {
                  const targetId = "living-insociety-social-character";
                  document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Living in Society, Social Character
              </li>

              <li
                className="text-[#9c5027] cursor-pointer"
                onClick={() => {
                  const targetId = "daily-routine-health";
                  document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Daily Routine & Health
              </li>
            </ul>
            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId = "learning-heory";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Learning Theory
            </li>

            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId = "pedagogy-process-of-education";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Pedagogy/process of education
            </li>

            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId = "outcomes-of-humane-education";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Outcomes of humane education
            </li>

            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId =
                  "how-to-supplement-the-prevalent-educational-content";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              How to supplement the prevalent educational content
            </li>

            <li
              className="text-[#9c5027] cursor-pointer"
              onClick={() => {
                const targetId = "criterion-for-acceptance-of-this-course";
                document.getElementById(targetId)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Criterion for acceptance of this course
            </li>
          </ul>
        </div>
        {/* <h2 className="page-heading pt-10  pb-2"> *Read Originals by Shri A.Nagraj</h2>
                <ul className="list-disc pl-5 space-y-2 page-content">
                    <li>मानवीय शिक्षा नीति का प्रस्ताव</li>
                    <li>शिक्षा नीति का लघु प्रस्ताव</li>
                    <li>चेतना विकास मूल्य शिक्षा पाठ्यक्रम</li>

                </ul>
                <h2 className="page-heading pt-10  pb-2">More</h2>
                <ul className="list-disc pl-5 space-y-2 page-content">
                    <li>Our reach: where we work today</li>
                    <li>Related downloads</li>


                </ul> */}
        <div className="pt-10">
          <h1
            className="page-heading pb-8 scroll-mt-40"
            id="the-need-for-education"
          >
            The need for humane education
          </h1>
          <p className="mb-5 page-content">
            Despite the long history of education on this planet, the outcomes
            for us as individuals, families, society & our impact on our natural
            environment are far from satisfactory. This is because the content
            and process of humane education yet remain to be identified in a
            universal manner: While theism/spiritualism could not enunciate
            their proposals in a universal manner, materialism/science has not
            been able to provide a way for universal goodness.
          </p>
          <p className="mb-5 page-content">
            Whereas, we can observe that every human child expects justice since
            birth, desires for right behavior and work and speaks the truth. The
            child does not know the above realities (Justice, Right
            behavior-work & Truth). It depends on education & human tradition
            (the environment) in order to understand these. Since human
            tradition as yet does not have a common clear understanding of the
            truth, beliefs by name of Justice, Right behavior-work & Truth are
            commonly accepted by various human communities. Accepting such
            beliefs, or the combination thereof, we grow up to be adult
            citizens, with our own varying set of notions & assumptions of right
            & wrong. This has resulted in the confused state we are in today.
          </p>
          <p className="mb-5 page-content font-bold">
            We can hence brief the need for human education as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>
              We humans live our lives based on our assumptions, beliefs and
              understanding.
            </li>
            <li>
              Humans conform to their assumptions/values or sanskar, unlike
              animals whose behavior and living is according to their race.
            </li>
            <li>
              If our beliefs change, so do our behavior, goals and actions.
            </li>
            <li>
              Humans have the ability of imagination & freedom of action. This
              is why we end up having different beliefs and differing behaviors.
            </li>
            <li>
              Every other entity in nature—be it soil, metals, plants and
              animals—exhibits a definite conduct. Humans are yet to have a{" "}
              <strong>definite conduct.</strong>
            </li>
            <li>
              There is a basic innate expectation & desire in every human to
              have right understanding and live rightfully with definiteness.
            </li>
            <li>
              There are realities in existence in the form of Justice, Religion
              (innate-order) & Truth (nyaya-dharma-satya) and the right humane
              way of living.
            </li>
            <li>
              We can use our imagination abilities to understand these truths
              and the correct ‘way of living’.
            </li>
            <li>
              The role of education is to enable every human to use their
              faculty of imagination to understand these realities of existence
              & human life as they are and live accordingly: spiritually,
              intellectually, emotionally (in behavior) & in occupation
              (materially).
            </li>
            <li>
              This leads to definite human conduct & then reflects as
              coexistence & harmony in living in families, society,
              nation-states and with nature.
            </li>
          </ul>
          <p className="mb-5 page-content font-bold mt-10">
            We can hence summarize as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>
              Human beings belong to the ‘knowledge-order’. Our{" "}
              <strong>fundamental need</strong> is knowledge.
            </li>
            <li>
              Humans have the <strong>expectation</strong> to understand the
              truth about everything, including their living.
            </li>
            <li>
              There are such realities in existence and the{" "}
              <strong>possibility</strong> that we can understand them.
            </li>
            <li>
              Humans have the <strong>capability</strong> for such
              understanding.
            </li>
            <li>
              The role of education is to <strong>enable</strong> this
              understanding.
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h1
            className="page-heading pb-8 scroll-mt-40"
            id="our-view-of-reality-World-view-ontology"
          >
            View of Reality/world view/ Ontology
          </h1>
          <p className="mb-5 page-content">
            <strong>
              Our content and pedagogical process of education is based on a
              fundamental and deep understanding of the human conscious, mind &
              psychology
            </strong>{" "}
            as it is in reality. This is enabled by the Madhyasth Darshan
            philosophy, or saha-astitva-vaad (coexistential thought). Simply
            put, existence (reality) is in the form of coexistence, is in
            harmony. There is spontaneous evolution in existence, and the
            occurrence of the world consisting of conscious entities – both
            animals and the human beings as we know it.
          </p>
          <p className="mb-5 page-content">
            Humans on this planet are in a state of ‘awakening progression’ in
            our consciousness, in a state of illusion, wherein our understanding
            is partial and our plane of living is akin to that of animals. The
            human being has been identified as belonging to the
            ”knowledge-order’ (gyan avastha).{" "}
            <strong>Knowledge is the fundamental human need.</strong> The basic
            need for the human being is happiness, and this is possible via
            knowledge that leads to development to ‘human consciousness’ &
            living with ‘awakening’. See here for a brief summary of this
            philosophy.
          </p>
        </div>
        <div className="pt-10">
          <h1
            className="page-heading pb-8 scroll-mt-40"
            id="role-objectives-of-human-education"
          >
            Role/Objectives of human education
          </h1>
          <p className="mb-5 page-content">
            Humans are disposed towards goodness and knowledge of the Truth,
            because its necessity and possibility exist in reality. Education
            enables the actions, conduct & study worthy of understanding the
            truth.
          </p>

          <p className="mb-5 page-content">
            Unhappiness, lack of peace & dissatisfaction in the human itself is
            conflict and these in turn are themselves the results of conflict.
            Human necessity is happiness, peace, satisfaction & bliss which is
            possible via knowledge of & living in human-consciousness.
          </p>

          <p className="mb-5 page-content">
            Enabling this transformation to human consciousness & its expression
            in living is thus the basic purpose of education. Education enables
            the arising of civility & culture in a human being. An awakened
            human being lives with resolution in themselves, with material
            prosperity in family, trust & cooperation in society & coexistence
            with nature.
          </p>

          <p className="mb-5 page-content">
            Education enables the awakening and expression of all four
            dimensions of the human: a) realization/understanding, b)
            thought/imagination, c) behavioral/social & d) occupational/natural.
            This addresses the spiritual, intellectual-logical, emotional and
            material needs of the human. It enables mental healthiness or
            intellectual balance, social balance and natural balance. It enables
            qualitative change from inhuman characteristics to humane
            characteristics and nature.
          </p>

          <p className="mb-5 page-content">
            Such an educated individual then goes on to establish/play their
            role in humane culture, civility, norms & societal organization. The
            role of education is to provide the content, process and environment
            for this transformation in an individual & work synergistic-ally
            with other societal systems in a manner that are in line with
            universal human goals.
          </p>

          <p className="mb-5 page-content">
            We can thus summarize that manifestation or appearance of existence
            itself is discovery and invention by the human being. The
            generalization process of this understanding in humankind itself is
            education. Understanding becomes commonly available via education &
            publicity.
          </p>
        </div>
        <div className="pt-10">
          <h1
            className="page-heading pb-8 scroll-mt-40"
            id="content-of-education-Knowledge-wisdom-science"
          >
            {" "}
            Content of Education
          </h1>
          <p className="mb-5 page-content">
            The basic content of human education consists of knowledge, wisdom &
            science covering conscious & material realities and their
            inter-relationships:
          </p>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>
              <strong>Knowledge = Why & How things</strong> exist in reality
            </li>
            <li>
              <strong>Wisdom = What to do </strong>– purpose and laws of living
            </li>
            <li>
              <strong>Science = How to live,</strong> how to do – in behavior,
              work & mind (Science = behavioral science or values, material
              science and skills)
            </li>
          </ul>

          <p className="mb-5 page-content">
            In other words, the entire content for education is the study of
            physical, chemical & conscious (jeevan) activities, leading to
            mental balance, behavioral & social balance & natural balance. This
            content covers the three dimensions below::
          </p>
        </div>
        <div className="pt-10">
          <h1 className="page-small-heading pb-8">
            1. Self education (jeevan vidya, जीवन विद्या )
          </h1>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>
              jeevan vidya – understanding myself, my activities, goals and how
              I am conscious, the causes for my happiness and unhappiness, my
              aspirations and fears as they are, in reality.
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h1 className="page-small-heading pb-8">
            2. Behavioral education: (value education, मूल्य शिक्षा )
          </h1>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>
              <strong>in Family:</strong> understanding my relationships with
              other humans: in family, with parents, brothers, sisters, etc and
              with friends, teachers & acquaintances. Understanding the
              intrinsic values in living and how they can be recognized and
              fulfilled
            </li>
            <li>
              <strong>Social education:</strong> understanding my relationship
              with other humans, how human race is one and human religion is
              one. Understanding social-laws & human values and how to live in
              them
            </li>
            <li>
              <strong>Human organizational education:</strong> Learning how
              human society is formed and what our common goals are. Learning to
              live in family, and the roles, duties and responsibilities, like
              seva or service in family. Human history.
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h1 className="page-small-heading pb-8">
            3. Material education: (vastu vidya, वस्तु विद्या)
          </h1>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>
              <strong>Skill based occupational education: </strong>Learning
              useful skills so I can earn my own living when i grow up. Learning
              to use my hands and feet on the rest of nature effectively –
              farming, carpentry, repairing things, making a mobile phone, wind
              generators, etc.
            </li>
            <li>
              <strong>Material science education:</strong> understanding the
              physical-chemical processes in nature and how they have evolved,
              their innate nature and characteristics. Physics, Chemistry,
              Biology, Geography & Mathematics.
            </li>
            <li>
              <strong>Ecological education:</strong> understanding the evolution
              from matter to plants to animals, their inter-relationships and
              how they are in harmony and how to interact with and live with
              them in a harmonious manner. Understanding natural law.
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <h1 className="page-heading pb-8">
            Multidisciplinary and holistic education
          </h1>
          <h1 className="page-heading pb-8 scroll-mt-40" id="life-themes">
            1) Life Themes
          </h1>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>
              Takes a ‘human-centric’ view of understanding, with the experience
              of the seer, the student, at the center.
            </li>
            <li>
              Based on a sound understanding of consciousness and how it
              functions, with the brain.
            </li>
            <li>
              Subjects are taught as they integrate in the fabric of nature, and
              how they relate to the student and the various dimensions of real
              human living. i.e. human living is connected to the classroom.
            </li>
            <li>
              This helps the child make connections between theoretical memory
              and practical experience, and develops the child’s interest in the
              subject, since now, it is something that ‘they need’ compared to
              what ‘the school wants to teach them’, since their own curiosity,
              happiness now depends on it.
            </li>
          </ul>
          <img src="/images/a5.jpg" className="w-[750px] h-[400px] mt-5" />
        </div>
        <div className="pt-10">
          <p className="page-content font-bold">Reasoning: </p>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>
              Human living is in the following four dimensions, and there is a
              specific experience or contentment we derive from these four
              dimensions.
            </li>
            <li>
              We hence have to have the input, or understanding that can fulfill
              these needs.
            </li>
            <li>
              The basis for these inputs has to be based on an understanding of
              the human being vis-a-vis reality, and this is obtained as
              Knowledge, Wisdom & Science (ज्ञान, विवेक, विज्ञान)
            </li>
            <li>
              The subjects that can complete this understanding thus has to be
              communicated to the child, in an age-appropriate manner.
            </li>
          </ul>
        </div>

        <div className="pt-10">
          <h1 className="page-small-heading">
            Address the 4 dimensions of Human Living{" "}
          </h1>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li className="font-bold">Experential/Existential</li>
            <ul className=" pl-6 space-y-2 page-content">
              <li>
                <strong>- Fulfilled by:</strong> Purpose, Happiness, Fulfillment
                & Peace.
              </li>
            </ul>
            <li className="font-bold">Intellectual/Rational</li>
            <ul className=" pl-6 space-y-2 page-content">
              <li>
                <strong>- Fulfilled by:</strong> Language, Math, Logic &
                Reasoning.
              </li>
            </ul>
            <li className="font-bold">
              Behavioural /Relationships (i& Society)
            </li>
            <ul className=" pl-6 space-y-2 page-content">
              <li>
                <strong>- In Family:</strong> Relationships, Values such as
                Trust, Affection, Care, Respect, Kindness
              </li>
              <li>
                <strong>- In Society:</strong> Ethics, Social Character,
                History, Civics and Culture
              </li>
            </ul>
            <li className="font-bold">Material/Occupational</li>
            <ul className=" pl-6 space-y-2 page-content">
              <li>
                <strong>- Fulfilled by:</strong> Natural Sciences, Geography,
                and finally Skills & Technology to ensure material livelihood
              </li>
            </ul>
          </ul>
        </div>
        <div className="pt-10">
          <h1 className="page-small-heading">
            The 5 levels / ‘spheres’ of Living{" "}
          </h1>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>Individual</li>
            <li>Family</li>
            <li>Societal</li>
            <li>Nation</li>
            <li>Inter-Nation</li>
          </ul>
        </div>
        <div className="pt-10">
          <h1 className="page-small-heading">
            {" "}
            The different needs, expectations & responsibilities in the various
            stages of Human Life{" "}
          </h1>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>1. Student life (vidyarthi)</li>
            <li>
              2. Householder – Relationships + Economic aspects (grahastha,
              arthik)
            </li>
            <li>3. Old Age</li>
          </ul>
        </div>
        <div className="pt-10">
          <h1 className="page-small-heading">
            The above gives rise to/enables fulfillment/happiness in Living
          </h1>
          <ul className="list-disc pl-6 space-y-2 page-content">
            <li>Sensory Fulfillment (& Material Security)</li>
            <li>Emotional Fulfillment (Relationships, in Family)</li>
            <li>Purpose based Fulfillment (Larger goals of living, Society)</li>
            <li>
              Inner Peace (Due to clarity & being able to deal with various
              situations of life)
            </li>
            <li>
              Contentment (From the Confidence that their vision is
              Comprehensive)
            </li>
          </ul>
          <p className="page-content">
            Language, Math, the Natural Sciences, Social Sciences, Vocational
            Skills, are thus seen as experienced from within the child’s world
            combining Intellect, Emotions, and Real Life Experience.{" "}
          </p>
          <p className="page-content ">
            Humans are naturally inclined towards curiosity and the need for
            happiness and the subjects thus naturally fulfill these needs. These
            connections are made clear. These are done in two ways{" "}
          </p>
          <p className="page-content mt-5 mb-5">
            1. Having a separate integration class where this is clarified in an
            age-appropriate manner.
          </p>
          <p className="page-content">
            2. Embedding this understanding while teaching the individual
            subjects (needs the teacher to have this holistic view).
          </p>
        </div>

        <div className="pt-10">
          <h1
            className="page-heading pb-8 scroll-mt-40"
            id="family-life-human-character"
          >
            2) Family Life, Human Character
          </h1>
          <p className="page-content">
            Equip the child with the clarity, sensitivity and capability to live
            within the Family.{" "}
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-5  page-content">
            <li className="page-common-hading">As a Student</li>
            <ul className="pl-6 space-y-2 page-content">
              <li>
                - Relationship with parents, with siblings, friends and elders
                -the expectations the child has from all of them and that the
                Family has from them.{" "}
              </li>
              <li>
                - Brought out using theory, real-life obervations at home and
                discussions.
              </li>
            </ul>
          </ul>
          <ul className="list-disc pl-6 space-y-2 mt-5 page-content">
            <li className="page-common-hading">As an Adult</li>
            <ul className=" pl-6 space-y-2 page-content">
              <li>
                - The meaning of martial life, its responsibilities, and the
                sanctity of Marital life. Examples are taken from home and
                around, bringing out the secure environment the child has at
                home and how it is essential to maintain and secure this for the
                future as well.
              </li>
            </ul>
          </ul>
          <ul className="list-disc pl-6 space-y-2 mt-5  page-content">
            <li className="page-common-hading">Old Age</li>
            <ul className=" pl-6 space-y-2 page-content">
              <li>
                - The sensitivities involved as we age, and the need for seva
                for elders at this stage in life, and how this also emotionally
                fulfilling for us. Children are able to relate these to the real
                conduct they see in their family and around.
              </li>
            </ul>
          </ul>

          <p className="page-content">
            This is rendered in an age & stage appropriate manner.
          </p>
        </div>

        <div className="pt-16">
          <h1
            className="page-heading pb-8 scroll-mt-40"
            id="living-insociety-social-character"
          >
            3) Living in Society, Social Character.
          </h1>
          <p className="page-content">
            Equip adults with the clarity of social-life, its inter-dependencies
            and intricacies.
          </p>
          <h1 className="page-common-hading mt-6">
            How I am related to Society, and how we are dependent on it. My
            expectations from Society
          </h1>

          <ul className="list-disc pl-6 space-y-2 mt-5  page-content">
            <li className="page-content">
              The deeper connection, or relationship between us as humans
              (goals, and all the subjects and needs and dimensions given in
              point #1 are the same)
            </li>
            <li className="page-content">
              The various things we use (food, clothing, shelter, services, etc)
              and need and how they are enabled by so many others in society
            </li>
            <li className="page-content">
              This is brought about using content and discussion on how deeply
              inter-twined social networks are, about how it takes so many
              people to come together to produce a single item, and how it is
              due to this inherent cooperation that we are able to live like we
              do.
            </li>
          </ul>
          <h1 className="page-heading mt-10">Societies expectation from me</h1>
          <p className="page-content">
            As social character. There is a basic expectation of conduct from
            society, and this itself is taught as social-law. Restraint in, or
            not hurting anyone via the following
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-5  page-content">
            <li className="page-content">
              <strong>Not hurting va Mind:</strong> Not troubling or bothering
              anyone, or hurting them: i.e by adopting kindness in behaviour and
              work: restraint of the mind
            </li>
            <li className="page-content">
              <strong>Not hurting via Body:</strong> Not harming anyone, or
              outraging their modesty: i.e. by respecting the sanctity of Family
              life, by practising chastity; restraint of the body
            </li>
            <li className="page-content">
              <strong>Not hurting via Wealth:</strong> Not stealing, not taking
              what is not mine: or by following righteous wealth: restraint of
              source/means of acquiring wealth
            </li>
          </ul>

          <p className="page-content mt-16">
            These points are brought out using written content and discussions
            in an age appropriate manner. These are basic expectations that we
            too have from every human, and in turn, other humans (society) has
            from us. This is the bedrock on which every family is built. When
            any of these 3 conditions are broken, then we have social and
            familial distress, and lack of mental peace and self-confidence.
          </p>
          <p className="page-content">
            When any or more of these basic rules are broken, society, and the
            law, call it a ‘crime’. Every definition in the Indian Penal Code
            (IPC) consists of these. This is brought out using live examples
            from news items, etc. Ex:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-5  page-content">
            <li className="page-content">
              <strong>Mind:</strong> Defamation suits, mental harrasment,
              dowry/torture cases
            </li>
            <li className="page-content">
              <strong>Body:</strong> Infidelity, Sexual harrasment, Gender Bias,
              Murder and Molestation Cases
            </li>
            <li className="page-content">
              <strong>Wealth:</strong> Theft, forgery, corruption, financial
              fudging, misdirecting wealth, etc cases.
            </li>
          </ul>
          <p className="page-content">
            This is gradually developed’ over the years to develop suitable
            mentality & acceptance in the child to abide by social-law. This
            goes to ensure a big part of “ethics & morality in social life”.
          </p>
        </div>

        <div className="pt-16">
          <h1
            className="page-heading pb-8 scroll-mt-40"
            id="daily-routine-health"
          >
            {" "}
            4) Daily Routine and Health
          </h1>
          <p className="page-content">
            {" "}
            While we teach human anatomy and physiology, the basics of staying
            healthy are also covered. This is especially pertinent in todays
            scenario where the adult population in India lives a consumption
            based, sedentary lifestyle (in the cities) and ailments like
            diabetes have penetrated the villages. India is today the diabetes
            capital of the world.
          </p>
          <h1 className="page-heading mt-10">
            Discussion on need to be healthy
          </h1>
          <ul className="list-disc pl-6 space-y-2 mt-5  page-content">
            <li className="page-content">
              Importance of daily routine for smooth functioning of the various
              organs – examples are taken from nature, where animals too follow
              a natural cycle of waking, eating, excretion and sleeping, etc. ;
            </li>
            <li className="page-content">
              Importance of daily routine – waking times, eating times,
              exercise, and sleeping on time are discussed.
            </li>
            <li className="page-content">
              The 4 seasons in India are taught and discussed and the different
              changes the body undergoes and its differing needs in terms of
              food are also discussed. Examples are brought in from home and
              elders traditions to enrich the same. Foods to be avoided in
              certains seasons and at certain times of the day are also
              communicated.
            </li>
            <li className="page-content">
              Higher class students are also taught about common ailments we
              encounter – such as colds, fevers, wounds, etc – and how they can
              be taken case using home-remedies. This avoids the tendency or
              habit of over-medication as they grow older.
            </li>
            <li className="page-content">
              This daily routine is then tied to the daily-cycle-of-life we have
              mentioned in the first suggestion to show how this daily routine +
              the lifecycle of an adult, to old age: consisting of
              relationships, occupation/work, seva, intellectual and social
              pursuits, etc make for a complete and holistic experience of
              living.
            </li>
          </ul>
          <h1
            className="page-heading mb-5 scroll-mt-40 mt-10"
            id="learning-heory"
          >
            {" "}
            Learning Theory
          </h1>
          <p className="page-common-hading">
            {" "}
            Both environments are considered equally important as input-sources
            for the child:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-5  page-content">
            <li className="page-content">
              The School environment: that includes the formal-content, teacher
              relationship, peers and general humane atmosphere.
            </li>
            <ul className="list-disc pl-6 space-y-2 page-content">
              <li>
                expectations the school has from the child, and vice-versa
              </li>
            </ul>
          </ul>
          <ul className="list-disc pl-6  space-y-2 mt-5 mb-5  page-content">
            <li className="page-content">
              Environment outside: at the Home, the Larger Community, Society,
              Culture & Nature.
            </li>
            <ul className="list-disc pl-6 space-y-2 page-content">
              <li>
                expectations each of these have from the child & vice-versa
              </li>
            </ul>
          </ul>
          <h1 className="page-common-hading mt-10">
            Child’s /Human mind (conscious jeevan) and how it assimilates
            learning
          </h1>
          <ul className=" space-y-2 mt-5 mb-5  page-content">
            <li className="page-content">
              1. Has a desire/will or purpose – that it wants/needs (according
              to age){" "}
            </li>
            <li className="page-content">2. This results in imagination </li>
            <li className="page-content">
              3. input comes from the school or outside life environment in the
              form of
            </li>
            <ul className=" pl-6 space-y-2 page-content">
              <li>a. Language</li>
              <li>b. Experiments/Practice</li>
              <li>c. Observations</li>
            </ul>
            <li className="page-content">
              4. the child matches theory to the observations he/she makes
              within and without -i.e. around, across matter, plants, animals
              and people
            </li>
            <li className="page-content">
              5. These lead to mental-impressions (sanskar)
            </li>
            <li className="page-content">
              6. The child assimilates/adopts these impressions depending on
              their tendencies (pravritti)
            </li>
            <li className="page-content">
              7. This goes on to form a conviction/belief about that
              subject/object/ living.
            </li>
            <li className="page-content">
              8. Such beliefs are across the Individual, Family, Societal,
              Nation, and the entire spectrum of Nature
            </li>
          </ul>
          <p className="page-content">
            {" "}
            This in sum develops into ‘human mindset’. This mindset is what
            makes us who we are.{" "}
          </p>
          <p className="page-common-hading mt-5 mb-5">
            The role of education thus is to create the necessary factors that
            shall enable ‘humane mindset’ in a comprehensive manner.
          </p>
          <img src="/images/a6.jpg" className="h-[500px] " />
        </div>

        <div className="pt-10">
          <h1
            className="page-heading pb-8 scroll-mt-40"
            id="pedagogy-process-of-education"
          >
            Pedagogy/Process of Education
          </h1>
          <p className="page-content">
            There are realities in existence and the meanings & understanding of
            these realities reside in the teacher/guru. Since words are the most
            potent means of communication, they are used to provide direction to
            the pupils imagination.
          </p>
          <p className="page-content">
            {" "}
            Education thus, is the process of transferring this understanding or
            right values (sanskar) from the teacher to the student enabling the
            student to have these impressions of reality & live accordingly.
          </p>
          <p className="page-content">
            {" "}
            Our process of education has the following characteristics:{" "}
          </p>
          <h1 className="page-small-heading mt-10">
            1. Addresses the ‘self ‘ directly
          </h1>
          <ul className=" list-disc space-y-2 mt-5 mb-5 pl-5 page-content">
            <li className="page-content">
              Addresses inquisitiveness and exploration by each child, since the
              innate need for every human is to know – in place of mere
              memorization and rote learning{" "}
            </li>
            <li className="page-content">
              {" "}
              <strong>Respect: </strong> Respects the freedom of imagination and
              freedom of action in the child allowing for their creative
              thinking & expressions (कल्पनाशीलता, कर्मस्वतंत्रता){" "}
            </li>
            <li className="page-content">
              {" "}
              <strong>Critical thinking: </strong> Enables students to
              scrutinize & evaluate using their own freedom of imagination and
              decide between right & wrong, true & false in their own right.{" "}
            </li>
          </ul>
          <h1 className="page-small-heading mt-10">
            2. Recognizes human relationship
          </h1>
          <ul className="list-disc pl-5  space-y-2 mt-5 mb-5  page-content">
            <li className="page-content">
              Based on sound teacher-student relationship – between one who
              knows and one who wants to know: as against it being a ‘job’
              alone.
            </li>
            <li className="page-content">
              Based on values & evaluation, as against fear and enticement.
              (punishment and rewards)
            </li>
            <li className="page-content">
              Fosters cooperation and mutual fulfillment with other children/
              humans – in place of seeing them as opponents to compete against.
            </li>
            <li className="page-content">
              Promotes excellence – everyone can be excellent. As against
              specialty & competition.
            </li>
          </ul>
          <h1 className="page-small-heading mt-10">
            3. Integrated approach based on reality
          </h1>
          <ul className="list-disc pl-5 space-y-2 mt-5 mb-5  page-content">
            <li className="page-content">
              Subjects taught in an integrated manner – as the inter-related
              fabric of the cosmos, to human life on this planet and our roles
              as individuals, in families, society, nation-state etc – as
              against fragmented teaching leading only to specialization
            </li>
            <li className="page-content">
              {" "}
              <strong>Addresses all dimensions of human living: </strong>{" "}
              realization, thought, behavior and occupation – as against the
              current goal of education largely for an occupation, or ‘to make a
              living’
            </li>
            <li className="page-content">
              Based on the reality of Coexistence – of Existence being in
              harmony, that can be known – as against material-centrist
              chaos/instability based view or mysticism/god centrist views.
            </li>
          </ul>
        </div>
        <h2
          className="page-heading pb-8 scroll-mt-40"
          id="outcomes-of-humane-education"
        >
          Outcomes of Education
        </h2>
        <p className="mb-4 page-content ">
          The person that successfully completes such education is endowed with
          the following 5 qualities:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8 page-content">
          <li>
            <span className="font-semibold italic">Has assurance</span>, trust
            in oneself and his capabilities and knowledge
          </li>
          <li>
            <span className="font-semibold italic">Respects excellence</span> in
            the other human – recognition of who has worked for, or reached the
            common human goal
          </li>
          <li>
            <span className="font-semibold italic">
              Has balance in his knowledge and personality
            </span>{" "}
            – can live according to what he/she knows
          </li>
          <li>
            <span className="font-semibold italic">
              Is sociable in behavior
            </span>
            : pupils' living does not cause an imbalance in society: lives
            within the confines of marital relationship and displays kindness in
            behavior with other humans, lives with human values.
          </li>
          <li>
            <span className="font-semibold italic">
              Is self-sufficient in occupation
            </span>
            : has the needed skills to work for his and family's material
            prosperity
          </li>
        </ul>

        <h2
          className="page-heading pb-8 scroll-mt-40"
          id="how-to-supplement-the-prevalent-educational-content"
        >
          Supplementing the current educational content
        </h2>
        <p className="mb-4 page-content">
          Students don’t get complete knowledge in any single subject in the
          current Education system. Study of the following missing aspects need
          to be inculcated to make prevalent education complete:
        </p>
        <ul className="list-disc list-inside space-y-2 page-content">
          <li>
            <span className="italic">addition of Conscious aspect</span>{" "}
            (jeevan) in Science.
          </li>
          <li>
            <span className="italic">addition of Mental-Impressions</span>{" "}
            (sanskar) in Psychology.
          </li>
          <li>
            <span className="italic">addition of Ethical utilization</span> of
            the material and conscious aspects in Economics.
          </li>
          <li>
            <span className="italic">
              addition of Culture and Civics of Humaneness
            </span>{" "}
            in Sociology.
          </li>
          <li>
            <span className="italic">
              addition of Conservation and Encouragement of Humaneness
            </span>{" "}
            in Political Science.
          </li>
          <li>
            <span className="italic">addition of Activity of Matter</span> in
            Philosophy (Darshan-Shastra).
          </li>
          <li>
            <span className="italic">
              addition of Human being and Humaneness
            </span>{" "}
            in History and Geography.
          </li>
          <li>
            <span className="italic">addition of Essential Reality</span> in
            Literature.
          </li>
        </ul>

        {/* Criterion for Evaluation */}
        <section>
          <h2
            className="page-heading pb-8 scroll-mt-40"
            id="criterion-for-acceptance-of-this-course"
          >
            Criterion for evaluation & acceptance
          </h2>
          <p className="mb-4">
            The human values via consciousness development or Chetna Vikas Mulya
            Shiksha (CVMS) fulfills the following criterion:
          </p>
          <ol className="list-decimal list-inside page-content space-y-2">
            <li>
              <span className="font-semibold">Universal</span> –{" "}
              <em>
                naturally acceptable to the human & natural to existence/nature
                – is not be an imposition
              </em>
            </li>
            <li>
              <span className="font-semibold">Perennial</span> –{" "}
              <em>
                Timeless truths are free of the limitations of space & time.
              </em>
            </li>
            <li>
              <span className="font-semibold">Logical & Verifiable</span> –{" "}
              <em>
                Appeals to human reasoning and intuitively & experientially
                verifiable
              </em>
            </li>
            <li>
              <span className="font-semibold">Livable</span>:{" "}
              <em>
                comes in living – improves quality of understanding and living
                and leads to harmony with humans and nature
              </em>
            </li>
          </ol>
        </section>

        <hr className="border border-dotted" />

        {/* Related Downloads */}
        {/* <section>
        <h3 className="page-heading mt-10 font-semibold mb-3">Related downloads</h3>
        <ul className="list-disc page-content list-inside space-y-2">
          <li><em>student article:</em> चेतना विकास मूल्य शिक्षा - एक परिचय</li>
          <li>Educational Material, textbooks, etc.</li>
        </ul>
      </section>

      <hr className="border border-dotted" />

      {/* Author */}
        {/* <p className="italic m-5 text-sm">– shriram narasimhan | student | january 2017</p> */}

        {/* More in this Section */}
        {/* <section>
        <h4 className="text-lg font-bold mb-2">[ More in this Section ]</h4>
        <ul className="list-disc list-inside text-[#c0392b] space-y-1 page-content">
          <li>About our Alternative Schools – a new beginning</li>
          <li>In Existing Schools – humanization of education</li>
          <li>Human Values courses in Higher Education</li>
          <li>Allied Human values courses (HVPE) – experiments in professional courses</li>
          <li>Where we work: our current reach in Education</li>
        </ul>
      </section>  */}
      </div>
    </>
  );
};

export default page;
