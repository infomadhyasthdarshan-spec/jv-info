'use client'
import React from 'react';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const MethodOfStudy = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-0 py-8 sm:py-12">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        Method of Study (Adhyayan Vidhi)
      </h1>

      {/* Intro Box */}
      <div className="bg-[#eee0cb] rounded-2xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base sm:text-lg text-center sm:text-left">
          Read the basic introduction to Study and Practice first
        </p>
        <button className="bg-[#59524E] hover:bg-[#3d3a39] text-white font-semibold px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base w-full sm:w-auto">
          What is Study
        </button>
      </div>

      {/* Download Box */}
      <div className="mt-6 bg-white border border-gray-200 rounded-2xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-sm sm:text-base text-center sm:text-left">
          Download following article as PDF.
        </p>
        <button className="  hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
            />
          </svg>
        </button>
      </div>

      {/* Paragraph */}
      <div className="mt-6 text-base sm:text-[17px] leading-relaxed  ">
        <p>
          <span className="font-semibold">The objective</span> of study & practice is to have the understanding, or answers to every why, what and how. This is called{' '}
          <em>resolution or samadhan</em>. 'Resolution' is possible via transformation to human consciousness & awakening, that results in happiness, peace, satisfaction & bliss.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="bg-[#eee0cb] px-4 sm:px-6 py-5 flex items-center justify-center mt-8 sm:mt-10 rounded-2xl">
        <p className="text-xl sm:text-2xl text-center font-bold">Introduction</p>
      </div>

      <div className="mt-6 text-base sm:text-[17px] leading-relaxed  ">
        <p>
          The method consists of <span className="font-semibold">Study (अध्ययन) & Practice (अभ्यास)</span> that takes one through the four following <br />stages or grounds:
        </p>
      </div>

      {/* Stage 1 */}
      <div className="mt-8 sm:mt-10 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Stage 1. Theoretical Understanding</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            We systematically study the <span className="text-[#94562B] font-semibold underline">literature</span> to access the underlying meanings denoted. The meanings cover
            <ul className="list-disc pl-5 sm:pl-6 mt-2 space-y-1">
              <li>the Conscious Self (<em>jeevan</em>),</li>
              <li>Existence (<em>astitva darshan</em>),</li>
              <li>Humane Conduct (<em>manveey aacharan</em>) and</li>
              <li>Humane Order (<em>akhand samaj, sarvabhoum vyavastha</em>).</li>
            </ul>
          </li>
          <li>
            Via a process of repeated study, we use logical analysis & comparison of different concepts to get a 'composite-view' of the different aspects of reality, the conscious self (<em>jeevan</em>) & the program for a human (awakening-progression & awakening).
          </li>
          <li>
            At some point, we commit to refocus our lives wholly for this pursuit of the Human Goal (<em>manav ka karykram</em>), of the goal of the conscious self (<em>jeevan ka karykram</em>).
          </li>
          <li>
            We notice gross level changes in our selves, our goals for life and living.
          </li>
          <li>
            We get a wholesome 'view' that <em>mimics all aspects of reality</em> - the material, conscious and spatial in their gross, subtle & causal dimensions.
          </li>
          <li>
            We are convinced about the validity of the proposal, the path, & ability to have the understanding oneself.
          </li>
          <li>
            We choose a <span className="font-bold">favourable environment</span> where we can pursue this further: <span className="text-[#94562B] font-bold underline">place, people</span> (fraternity), <br />program and <span className="text-[#94562B] font-bold underline">larger-purpose</span>.
          </li>
          <li>
            At this stage, our 'understanding' is largely dependent on words. This is where we reconfirm our beliefs or <span className="font-bold">shravan.</span>
          </li>
          <li>
            This stage is called listening or viewing in or via the mind or shravan.
          </li>
        </ul>
      </div>

      {/* Stage 2 */}
      <div className="mt-8 sm:mt-10 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Stage 2. Focusing & Implementation in Living</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            We further focus on the theoretical understanding obtained to get a distilled view of the different dimensions of reality, to get its semblance. This includes research and cross-referencing across the <span className="text-[#94562B] font-bold underline">entire body of literature</span>.
          </li>
          <li>
            These distilled 'inferences' or nishkarsh, are now as meanings, supported by words. We check and recheck our inferences and shravan for <span className="font-bold">'confirmation bias'</span> (believing our own beliefs to be true!)
          </li>
          <li>
            We now become involved with these meanings, we implement these inferences in our <span className="font-bold">daily life:</span>
            <ul className="list-disc pl-5 sm:pl-6 mt-2 space-y-1">
              <li>We identify the various conscious activities in ourselves via self-scrutiny and observation</li>
              <li>We deploy these inferences or acceptances in our conduct - in living with humans and in work with nature.</li>
              <li>We thus practice laws such as non-accumulation, righteous wealth, chastity in marital life, kindness, trust, care, generosity, identifying & fulfilling relationships etc. in daily life,</li>
              <li>At the same time we identify and let go of undesirable traits in us.</li>
              <li>This help develop the associated feelings (bhavas) in us</li>
            </ul>
          </li>
          <li>
            This repeated process thus makes our inferences come 'alive', further sharpening them with subtle interconnections and refining the picture/cognition we have. We now are able to deliberate or judge on the basis of a total semblance of the realities of justice-religion & truth (nyaya dharma satya).
          </li>
          <li>
            Maturity in this stage of practice demands a high degree of internal honesty, objectivity, purity, humility & acceptance of coexistential bhavas.
          </li>
          <li>
            We achieve a basic (wavering) level of 'retention' of our mental faculties on these meanings resident in our mind (citta or psyche). We begin to identify the gross & subtle dimensions of conscious (jeevan) activities and external realities and experience interrupted (semblance) of happiness & peace (sukh, shanti)
          </li>
          <li>
            Based on the clarity from such retention & results we get in daily life, we now have the highest intense desire to 'see' these realities ourselves and achieve continuity in our state of contentment.
          </li>
          <li>
            This stage is called <span className="font-bold">Reflection, Meditation, or manan</span>. Here, the object of knowing & living is fixated in our mind or citta, and the activities of analysis and tasting in the mun follow suit.
          </li>
        </ul>
      </div>

      {/* Stage 3 */}
      <div className="mt-8 sm:mt-10 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Stage 3. Establishment via Confirmation & Practice</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            When the previous practice gives rise to an intense concentration of our mental faculties, we are able to get confirmation of the inferences we have distilled.
          </li>
          <li>
            This happens when we have direct-perception or direct-knowledge of the realities related to any one or more of these inferences.
          </li>
          <li>
            This direct-perception is beyond, or devoid of word and logic. It reveals the associated reality and hence confirms the earlier inferences that were supported by word & logic. This is the beginning of 'knowing'.
          </li>
          <li>
            This results in immutable contemplative-knowledge of first the subtle and then the causal activities in the conscious self (jeevan) & corresponding dimensions of external reality that is continuous and un-erasable. This is also called profound meditation or niddhiyasan.
          </li>
          <li>
            As a result of such knowledge, we become committed to live according to the knowledge gained and strive to bring it in practice and complete our knowledge of the remaining realities via further concentration or focus to achieve unwavering retention.
          </li>
          <li>
            This cyclical process of concentration & behavioural practice leads to a state of 'Fixity' in humane conduct and the experience of developed human consciousness. It doesn't 'move' or 'shake' any more.
          </li>
          <li>
            We now experience a retention in our experience of happiness, peace and contentment (sukh, shanti, santosh).
          </li>
          <li>
            This stage is called sakshatkar leading to avdharna. This is 'Study' or Adhyayan that has resulted from the previous Practices, or 'arms of adhyayan'.
          </li>
        </ul>
      </div>

      {/* Stage 4 */}
      <div className="mt-8 sm:mt-10 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Stage 4. Comprehension & Realization - Concentration</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            Once we have complete mastery over the Establishment or Fixity in developed human consciousness & humane living, we further concentrate our faculties on its essential value or meaning and refine our behaviour & conduct to include Love, or complete acceptance.
          </li>
          <li>
            When this replacing is achieved, we have knowledge about the causal-dimensions of ones conscious self (jeevan), of spatial reality (vyapak, shunya) & the innate nature of external reality (dharma). This is a spiritual accomplishment.
          </li>
          <li>
            This is the 'balance' in knowing and believing & called Comprehension or Bodh, leading to further fineness & abilities in living, followed by final Realization.
          </li>
          <li>
            Realization (or Spiritual Experience) means complete acceptance of the existence of, and fundamental relationship between spatial reality (satya) and all (causal, subtle & gross) dimensions of conscious and material realities. This is called anubhav.
          </li>
          <li>
            This is the contentment point of knowing & believing. There is nothing left to be 'known'.
          </li>
          <li>
            We then live accordingly, variously expressing justice, religion & truth (nyaya, dharma, satya) – evidencing Human, Godly & Divine Consciousness (मानव, देव मानव, दिव्य मानव प्रमाणित होता).
          </li>
        </ul>
      </div>

      {/* Theory Section */}
      <div className="bg-[#eee0cb] px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 rounded-2xl">
        <p className="text-base sm:text-lg text-center sm:text-left">Theory</p>
      </div>
      <div className="mt-6 text-base sm:text-[17px] leading-relaxed  ">
        <p>
          A theoretical overview of the method of study (adhyayan prakriya) is given below.
        </p>
      </div>
      <div className="mt-6 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Definition of Practice (अभ्यास)</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>Intellectual, Spoken & bodily activities for obtaining the answer to Why? and What?</li>
        </ul>
      </div>
      <div className="mt-6 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Definition of Study: (अध्ययन)</h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            "Becoming in the form of the truth or tadakaar: Our imagination becoming in the form of, attuned to the meanings indicated by words", in the form of realities, itself is becoming tadakaar (tadakaar hona - शब्द के अर्थ में स्वयं में आत्मा में वास्तविक रूप होने)<br />
            .[word given in madhyastha darshan]
          </li>
          <li>
            The combined procedure of listening, meditation & direct-perception is adhyayan (श्रवण मनन निदिध्यासन को संयुक्त प्रक्रिया ही अध्ययन है)
          </li>
        </ul>
      </div>
      <div className="mt-6 text-base sm:text-[17px] leading-relaxed  ">
        <p>
          Study and Practice go together. <span className="font-bold">Study itself is Practice</span>
        </p>
      </div>
      <div className="mt-6 text-base sm:text-[17px] leading-relaxed  ">
        <p>
          We deploy our faculty of imagination envisioning & thoughts to understand Reality. We use our ability of knowledge-perspective, or knowledge-cognition (gyan drishti, gochar) instead of the sensory-perspective or sensory-cognition (chakshu drishti, gochar) for our study. This is essential to understand the 'formless' dimensions of reality.
        </p>
      </div>
      <div className="mt-6 text-base sm:text-[17px] leading-relaxed  ">
        <p>
          We progress through the following four stages or grounds in our Study & Practice:
        </p>
      </div>

      {/* Ground 1 */}
      <div className="mt-8 sm:mt-10 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Ground 1: Listening (श्रवण) → (Acceptance & Understanding)</h2>
        <h3 className="text-base sm:text-lg text-[#94562B] font-bold mb-2">Literature Study-Practice (साहित्य-अध्ययन-प्रक्रिया)</h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            <span className="font-bold">Glimpse of Reality (संभावना):</span> "Acceptance of the meaning of the written and spoken word – the ultimate truth of Coexistence coming in imagination". Apprehending via external inputs from the books/ spoken /media
          </li>
          <li>
            <span className="font-bold">Semblance of Reality (आभास):</span> "With the word & meaning in imagination, usage of logic for consistency of meaning, as a result of which, the entity/reality becomes clear"
          </li>
          <li>
            <span className="text-[#94562B] font-bold underline">Verification</span> whether the proposal is a) Universal b) Live-able c) Teachable
          </li>
          <li>
            Distinguish between acceptable (universal, right) and unacceptable (criminal, wrong) behavior: <br /> Acceptance of living in "social law" - righteous-wealth, fidelity in marital relationship & kindness in behavior (धर्म, धन, दम्पत्य सम्बन्ध, दया व्यवहार)
          </li>
        </ul>
        <h3 className="text-base sm:text-lg font-semibold mb-2 mt-4">Outcome</h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            <span className="font-bold">Glimpse of Reality (संभावना):</span>(विधिवत अध्ययन एवं तर्क संतुष्ट होना, शब्द-अर्थ - स्मरण में होना )
          </li>
          <li>
            <span className="font-bold">Desire for knowing and living according to the truth</span>  (वास्तविकता को जानने एवं जीने के लिए इच्छा)
            Living with acceptance and practice of righteous wealth, chastity in marital relationship & kindness in behaviour
          </li>
        </ul>
      </div>

      {/* Ground 2 */}
      <div className="mt-8 sm:mt-10 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Ground 2: Reflection & Meditation (मनन) → (Preparation for Concentration)
        </h2>
        <p className="mb-4">
          <span className="font-bold">Semblance of Reality complete (आभास पूरा):</span> becomes apparent
        </p>
        <h3 className="text-base sm:text-lg text-[#94562B] font-bold mb-2">
          Contemplative Practice (साक्षातकार के लिए अभ्यास)
        </h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li><span className="font-bold">Discriminating Study (विवेकात्मक अध्ययन):</span></li>
          <li>Deliberating/evaluation on the basis of Justice-Religion-Truth (न्याय धर्म सत्य का तुलन)</li>
          <li>Scrutiny & Observation (निरीक्षण परीक्षण) of (a)Existence, (b)Activities in the Self or jeevan & (c) Living.</li>
          <li>Witnessing, evaluating & understanding the activities in the Mun, vritti, chitta (मन, वृत्ति, चित्त)</li>
          <li>Distinguish between changing and changeless dimensions of reality & laws of living</li>
        </ul>
        <h3 className="text-base sm:text-lg text-[#94562B] font-bold mt-4 sm:mt-6 mb-2">
          Behavioral Practice (व्यवहाराभ्यास)
        </h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>Living according to Intellectual law, Social law, Natural law - नियम अनुसार जीवन + व्यवस्था में भागीदारी</li>
          <li>In Family: Fulfillment of human responsibilities and duties - participation in justice, production/seva & exchange - परिवार व्यवस्था में भागीदारी</li>
          <li>In Society - via the family, participation towards the larger order/good - in education, public awareness, health, production, etc - समाज व्यवस्था में भागीदारी</li>
          <li>Inculcating/Practicing of humane values or bhavas such as Trust, Respect, Affection, Non-Accumulation, Humility, Generosity, Gratitude, Reverence, etc.</li>
          <li>Letting go of, or weeding of tendencies and acceptances that are inhumane.</li>
        </ul>
        <h3 className="text-base sm:text-lg text-[#94562B] font-bold mt-4 sm:mt-6 mb-2">
          Practice of Work (कर्माभ्यास)
        </h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>Physical efforts needed for fulfillment of material needs that are synchronous with 'natural law' and 'social law'</li>
          <li>Experience confidence & fearlessness in the material sphere (not related to money)</li>
        </ul>
        <h3 className="text-base sm:text-lg text-[#94562B] font-semibold mt-4 sm:mt-6 mb-2">Outcome</h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            <span className="font-bold">Intense Desire - Priority established of Justice-Religion-Truth over Preference-Health-Profit</span> <br />
            (प्रमाणिकता, असली इच्छा दृढ़ता से न्याय- धर्म- सत्य का प्राधानिकता , लाभ इच्छा होना)
          </li>
          <li>
            <span className="font-bold">Living with semblance of humanness</span> (मानवतः जीवन का आभास पूरा होता)
            <ul className="list-disc pl-5 sm:pl-6 mt-2 space-y-2">
              <li>Living in Social Law, Natural law, semblance of Intellectual law (non-accumulation, affection, straightforwardness & fearlessness)</li>
              <li>Regulation of the agitations such as infatuation, greed, malice, vanity, anger and passion, and tendencies such as obstinacy & pride.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Concentrating the mental faculties on the realities to be known</span> <br />
            (Existence, Conscious Self & Humane Conduct that exist in memory/as imaging) <br />
            (स्मरण रूपी श्रेणियों के अर्थ में चित्त द्वारा ध्यान होना - अस्तित्व, चेतन जीव व मानवीय आचरण)
          </li>
        </ul>
      </div>

      {/* Ground 3 */}
      <div className="mt-8 sm:mt-10 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Ground 3: Direct-Perception & Preformation → Stability & Concentration<br />
          (साक्षात्कार, अवधारण)
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            Direct identification/understanding of the realities of Justice-Religion-Truth devoid of logic, form, words & living accordingly
            (रूप गुण स्वभाव धर्म के संयोग रूप में साक्षात्कार)
          </li>
          <li>
            Having credibility (प्रमिति). Definitive acceptance (निश्चितात्मक स्वीकृति): Comprehending, understanding the meaning, Reality.
            (वास्तविकता का साक्षात्कार एवं स्वीकृति)
          </li>
          <li>
            Alternative terms - प्रमिति, साक्षात्कार, निधिध्यासन
          </li>
        </ul>
        <h3 className="text-base sm:text-lg text-[#94562B] font-bold mt-4 sm:mt-6 mb-2">
          Contemplative Practice (चिन्तनाभ्यास) and Behavioral Practice (व्यवहाराभ्यास)
        </h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            Contemplation on the Truths known, the purpose of Entities & Living accordingly with humane conduct <br />
            (वस्तुओं के प्रयोजन पर चिंतन, मानवीय दृष्टि विषय स्वरूप सहित जीना अभ्यास)
          </li>
          <li>
            <span className="font-bold">Knowledge of state-full truth & relative truth as-it-is</span>
            (वस्तुगत सत्य, वस्तु स्थिति सत्य)
          </li>
        </ul>
        <h3 className="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-2">Outcome</h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            <span className="font-bold">Stability from Sakshatkar (स्थिरता) = Avdharna (अवधारण)</span>
          </li>
          <li>
            <span className="font-bold italic">Establishment (धारण) & Regulation of the mental faculties in developed human consciousness</span><br />
            (मानवीयतापूर्ण जीवन के अन्तरंग न्याय-धर्म-सत्य रूपी वांछित वस्तु देश एवं तत्व में चित्त वृत्तियों का संयम होना)
          </li>
          <li>
            <span className="font-bold">Awakening of Activity-Force</span> (क्रिया शक्ति जागरण)
          </li>
          <li>
            <span className="font-bold">Awakening of the Desiring-Force</span> (इच्छा शक्ति जागरण)
          </li>
          <li>
            <span className="font-bold">Happiness, Peace & Contentment</span> (सुख, शांति, संतोष)
          </li>
          <li>
            Non-occurrence of the agitations such as infatuation, greed, malice, vanity, anger and passion, and tendencies such as obstinacy & pride.
          </li>
          <li>
            Developed Human Consciousness with Positive Ego, humane perspectives, characteristics (steadfastness, courage, generosity & wishes).
          </li>
        </ul>
      </div>

      {/* Ground 4 */}
      <div className="mt-8 sm:mt-10 text-base sm:text-[17px] leading-relaxed  ">
        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Ground 4: Total Comprehension & Realization <br />
          (पूर्ण बोध, अनुभव) → ध्यान, केन्द्रीकृत ध्यान
        </h2>
        <h3 className="text-base sm:text-lg text-[#94562B] font-bold mb-2">Total Comprehension (पूर्ण बोध)</h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            <span className="italic font-semibold">
              On having complete regulation or mastery on Fixity, the mental faculties get concentrated on the desired region or essential region of such Fixity (establishment)
            </span><br />
            (धारण पर पूर्णाधिकार के अनन्तर उसके वांछित अथवा सारभूत भाग में चित्त-वृत्तियों का केन्द्राभूत होना - निष्ठा , ध्यान )
          </li>
          <li>Comprehension of oneself (स्व-बोध) and Void (व्यापक)</li>
          <li>The activities in the jeevan now get aligned according to the nucleus.</li>
          <li>Continuance of Behavioral Practice.</li>
        </ul>
        <h3 className="text-base sm:text-lg text-[#94562B] font-bold mt-4 sm:mt-6 mb-2">Complete Realization (पूर्णअनुभूति)</h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            Complete Acceptance of absolute truth, state-full truth and relative truth <br />
            (स्थिति सत्य, वस्तुगत सत्य, वस्तुस्थिति सत्य की पूर्ण स्वीकृति)
          </li>
          <li>
            Direct Experience of ultimate nature of Reality: of Coexistence, of Self & human nature: Complete knowledge of Pervasive Space (Brahman), Coexistence, evolution, development, awakening progression, awakening = <br />
            <span className="italic">"Material and Conscious nature saturated in pervasive space"</span> <br />
            (व्यापक सत्ता में भौम, चैत, इसा प्रकृति का बोध एवं अनुभव)
          </li>
          <li>
            The satisfaction point of knowing and believing. Nothing left to be "known”.
          </li>
        </ul>
        <h3 className="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-2">Outcome</h3>
        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4">
          <li>
            Immersion of the chitta, vritti & sankalpa (buddhi) in but the meaning, the value of the Aim. <br />
            (ध्येय के मूल्य मात्र में, अथवा अर्थ मात्र में चित्त वृत्ति एवं संकल्प (बुद्धि) का निमग्न होना - सतनामता में अनुभूति)
          </li>
          <li><span className="font-bold">Awakening of the Knowledge-Force</span> (ज्ञान शक्ति जागरण)</li>
          <li><span className="font-bold">Living with evidence of Realization, Thought & Behavior</span> (अनुभव, विचार, व्यवहार प्रमाण)</li>
          <li><span className="font-bold">Happiness, Peace, Contentment & Bliss</span> (सुख, शांति, संतोष, आनंद की निरंतरता)</li>
        </ul>
        <p className="mt-4 sm:mt-6 italic font-bold text-center text-[#94562B]">
          Perfect Humane Conduct.
        </p>
      </div>

      {/* Notes */}
      <div className="mt-8 sm:mt-10 px-4 sm:px-6 py-6 rounded-xl" style={{ backgroundColor: '#EDE2D1' }}>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">NOTES</h3>
        <ol className="list-decimal pl-5 space-y-3 sm:space-y-4   text-base sm:text-[17px]">
          <li>
            The study of reality according to Madhyasth Darshan does not include any ‘prevalent meditative-practices,’ ‘need to close ones eyes,’ or ‘mystical-experiences’.
            This is being mentioned here in order to avoid confusing this with other philosophies/darshan, where the words like
            ‘Shravan, Manan, Nididhyasan’, etc are used with a different intended meaning. See definitions.
          </li>
          <li>
            The objectives, method & outcomes of study in madhyasth darshan does not derive from or based on Vedanta, the YogaSutras or Buddhism, etc.
            Terms may be similar or have some overlaps.
          </li>
          <li>
            Stages 1, 2 & 3 above are both sequential and cyclical.
            Success in Study needs guidance from a living competent human being, that has this understanding.
          </li>
        </ol>
        <p className="mt-4  ">
          See <span className="font-semibold underline  ">Guidance for Study</span> for suggestion on how to proceed.
        </p>
        <p className="mt-4 sm:mt-6 text-sm italic  ">
          -shriram n | student | june 2013 | updated - January 2017 | revised - February 2022
        </p>
      </div>
    </div>
  );
};

export default MethodOfStudy;