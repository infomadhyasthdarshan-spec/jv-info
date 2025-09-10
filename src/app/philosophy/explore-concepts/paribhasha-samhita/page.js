'use client'
import Backjs from "@/components/Backjs";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const ParibhashaPage = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  const entries = [
    {
      devnagiri: "मध्यस्थ (madhyasth)",
      english: "Mediating",
      definition:
        "Restraining of positive and negative (properties). Unaffected by positive and negative (properties). The grandeur of normalizing of all excited-states and remaining unaffected by excited-states.",
    },
    {
      devnagiri: "दर्शन (darshan)",
      english: "Realistic-view",
      definition:
        "Activity by the seer via their vision (sight) for understanding the scene as-it-is. #Translators notes: Knowledge of: Actuality, Reality and the Truth is darsana or realistic-view.\nActuality: Understanding the participation in existence as ‘utility & complementariness’\nReality: Understanding the thing as-it-is\nTruth: Understanding Coexistence, cause and ultimate cause.",
    },
    {
      devnagiri: "मध्यस्थ दर्शन (madhyasth darshan)",
      english: "Madhyasth-darshan (realistic-view of mediation)",
      definition:
        "Study and exposition of aphorisms of mediating-omnipotence, mediating-activity, mediating-potential and mediating-jeevan in coexistence. # Translators notes: mediating = madhyasth",
    },
    {
      devnagiri: "सह-अस्तित्ववाद (sah-astitva-vad)",
      english: "Co-existentialism",
      definition:
        "Aphorisms & exposition of development, complementariness and transformational changes in existence. Developed unit being conducive for the development of undeveloped unit – complementariness",
    },
    {
      devnagiri: "मानव (manav)",
      english: "Human-being *",
      definition:
        "One who materializes his ideas, has expectation for healthiness of mind and realizes the same is known as human-being.",
    },
    {
      devnagiri: "जीव चेतना (jeev chetna)",
      english: "Animal-consciousness",
      definition:
        "Human being living in delusion. #Translators notes: lack of knowledge, un-awakened",
    },
    {
      devnagiri: "मानव चेतना (manav chetna)",
      english: "Human Consciousness",
      definition:
        "Awakened human being, free of illusion, living with knowledge and progeny-motive, prosperity-motive and fame-motive.",
    },
    {
      devnagiri: "देव चेतना (dev chetna)",
      english: "Godly consciousness",
      definition:
        "Awakened human being living with knowledge and only fame-motive.",
    },
    {
      devnagiri: "दिव्य चेतना (divya chetna)",
      english: "Divine Consciousness",
      definition:
        "Awakened human being living with knowledge and free of all motives – living only for beneficence.",
    },
    {
      devnagiri: "चेतना (chetna)",
      english: "Consciousness",
      definition:
        "Cognition, accomplished with knowledge, wisdom & science. Knowledge, equilibrium energy, space, absolute-force.",
    },
    {
      devnagiri: "समझ  (samajh)",
      english: "Understanding",
      definition: "Endowed with knowledge, wisdom and science",
    },
    {
      devnagiri: "अनुभव (anubhav)",
      english: "Consciousness",
      definition:
        "	Experience *Realization	The understanding, status, expression, and transformation obtained from existential-progression alone is experience.",
    },
    {
      devnagiri: "अस्तित्व (astitva)",
      english: "Existence *",
      definition:
        "Material and conscious nature saturated in all-pervasive-entity, in Omnipotence (space).",
    },
    {
      devnagiri: "सहअस्तित्व (sah-astitva)",
      english: "Coexistence *",
      definition:
        "		(Definition in the context of existential-purpose of humankind):Relationships without exploitation, hoarding and hatred, and fulfillment of relationships and associations with behavior of generosity, affection, and serving alone is co-existence.(Basic Definition):  nature saturated in the all-pervasive-entity, Omnipotence, space.",
    },
    {
      devnagiri: "संपृक्त (samprikt)",
      english: "Saturated *",
      definition:
        "Status of nature (physical, chemical, and conscious) soaked, submerged and enveloped in Omnipresence, Omnipotence, space.# Omnipresence: all-pervasive",
    },
    {
      devnagiri: "जड़(jarh)",
      english: "Material *",
      definition:
        "The unit without any thinking-aspect, whose span of function is limited to its length, width, and height.#Translators notes: Insentient, or ‘inert’ in the sense it is not conscious",
    },

    {
      devnagiri: "चैतन्य(जीवन) – chaitanya-jeevan",
      english: "Conscious *(jeevan)",
      definition:
        "The unit whose span of function is more than its length, width, and height and has an active thinking-aspect is called conscious (unit). #Translators notes: Sentient unit, sentient activity. The conscious unit or ‘self’ or ‘jeevan’ has 10 activities in combinations of 2 each: one in potential, and the other in expression as ‘force’: experience-evidencing; understanding-determination; contemplation-imaging; weighing-analysis and tasting-selecting. Clarification: conscious unit is an activity; it is a 'constitutionally-completed atom'. It is not ‘material’ in the sense it has the faculty or potential of cognition, but it is a reality, a unit, made up of the same sub-atomic particles as material units. The ‘conscious unit’ is not space. The conscious unit is endowed with consciousness by being saturated in space; hence space is also called ‘consciousness’.",
    },
    {
      devnagiri: "प्रकृति (prakriti)",
      english: "Nature",
      definition:
        "Form-full existence; i.e., Infinite units of material-order, bio-order, animal-order and knowledge-order (humans). Infinite agglomeration of material and conscious units. Continuously-active. Inseparable presence of appearance, properties, innate-nature & religion (dharma).",
    },
    {
      devnagiri: "जीवन (jeevan)",
      english: "Jeevan",
      definition: "Same as conscious (unit) – see above.",
    },
    {
      devnagiri: "मानवीय आचरण (manveey acharan)",
      english: "Humane Conduct",
      definition:
        "Behavior of righteous-wealth, righteous husband/wife relationship, and kindness in work and behavior. Recognition of relationships, fulfillment of values. Entire work, behavior, thought done as an inseparable active-presence of values, character & ethics.",
    },
    {
      devnagiri: "मानवीय स्वभाव (manvey swabhav)",
      english: "Humane-nature",
      definition:
        "Steadfastness (dheerta), Courage (veerta) and Generosity (udarta) are humane-nature. Innate-nature of super-humanness is: kindness (daya), graciousness (krupa) and compassion (karuna).",
    },
    {
      devnagiri: "अमानवीय स्वभाव (amanvey swabhav)",
      english: "Inhuman-nature *",
      definition:
        "Cunningness (heenta), wretchedness (deenta), and cruelness (kroorta) alone are inhuman-nature.",
    },
    {
      devnagiri: "रूप (roop)",
      english: "Appearance",
      definition: "Shape, surface area and volume.",
    },
    {
      devnagiri: "गुण (guna)",
      english: "Properties",
      definition:
        "Relative powers are known as properties (guna). Properties are recognized in the form of positive, negative, and madhyasth (mediating), which itself is effect. # Synonyms: quality, especially when considering ‘properties’ of a human being.",
    },
    {
      devnagiri: "स्वभाव (swabhav)",
      english: "Innate-nature",
      definition:
        "Purpose, participation, value. The utility of properties itself is innate-nature. # Synonyms: essence, true-nature, characteristic, fundamental attribute. Innate-nature of the material-order is ‘composition-decomposition’; of the bio-order is ‘enhance-worsen’; of the animal-order is cruel. Innate-nature of humans living in ‘animal-consciousness’ is: wretchedness, cunningness & cruelness. Innate-nature of humans living in ‘human-consciousness’ is: steadfastness, courage & generosity.",
    },
    {
      devnagiri: "धर्म (dharma)",
      english: "Religion *",
      definition:
        "Inseparability itself is dharma. That which cannot be separated from a unit is its dharma or religion. Religion of the material-order: to exist, indestructibly. Of the respirating-order: ‘growth’. Of the animal-order: ‘will to live’. Of the human-order: live with happiness, resolution. # Word ‘religion’ based on Latin religare ‘to bind’.",
    },
    {
      devnagiri: "सत्य (satya)",
      english: "Truth *",
      definition:
        "Existence, nature saturated in all-pervasive-entity, Omnipotence (space).",
    },
    {
      devnagiri: "न्याय (nyaya)",
      english: "Justice",
      definition:
        "Activity of recognition of relationships & fulfillment of values. Activity for nourishment and enrichment of humanness.",
    },
    {
      devnagiri: "बौद्धिक समाधान (boudhik samadhan)",
      english: "Intellectual Resolution *",
      definition:
        "The fulfillment (answer) of every why and how itself is resolution.",
    },
    {
      devnagiri: "अभय (abhay)",
      english: "Fearlessness, Trust",
      definition:
        "Trust in the active-present. Activity of mutual trust and complementariness.",
    },
    {
      devnagiri: "अखंड समाज (akhand samaj)",
      english: "Undivided Society",
      definition:
        "Human tradition free of communal-mentality and endowed with human-consciousness. Awakened human tradition free of illusion. Human tradition endowed with knowledge-wisdom-science and free of individualistic mindset. Completeness of resolution, prosperity, trust and co-existence. Harmony in humane culture, civility, norms, systems and conduct.",
    },
    {
      devnagiri: "सार्वभौम व्यवस्था (sarvabhoum vyawastha)",
      english: "Universal Orderliness",
      definition:
        "Accepted meaningful, balanced just-full orderliness in human tradition on the entire earth.",
    },
    {
      devnagiri: "संस्कृति (sanskriti)",
      english: "Culture",
      definition:
        "Tradition of completeness, humane conduct. Activities done in view of completeness, participation in humane orderliness.",
    },
    {
      devnagiri: "सभ्यता (sabhyata)",
      english: "Civility",
      definition:
        "Participation in undivided society and universal orderliness.",
    },
    {
      devnagiri: "विधि (vidhi)",
      english: "Norms",
      definition: "Code for law-full conduct of humane-culture.",
    },
    {
      devnagiri: "व्यवस्था (vyawastha)",
      english: "Systems *",
      definition:
        "The tradition for implementing the intent of norms is known as human-systems. # Organization, human-systems, orderliness.",
    },
    {
      devnagiri: "ज्ञान (gyan, jnana)",
      english: "Knowledge *",
      definition:
        "Knowledge of realistic-view or darshan of Co-existence, Knowledge of Jeevan in Co-existence, and Knowledge of Humane Conduct in Co-existence.",
    },
    {
      devnagiri: "विवेक (vivek)",
      english: "Wisdom *",
      definition: "The understanding of existential-purpose of human-being.",
    },
    {
      devnagiri: "विज्ञान (vigyan)",
      english: "Science *",
      definition:
        "The knowledge for determining direction for achieving universal human-goal along with material-prosperity. Knowledge of activity, time and decision.",
    },
    {
      devnagiri: "कल्पनाशीलता (kalpanasheelta)",
      english: "Imagination",
      definition:
        "Expression of 4.5 activities of imaging, analysis, weighing, tasting and selecting in conscious unit (jeevan).",
    },
    {
      devnagiri: "कर्मस्वतंत्रता (karma-swatantrata)",
      english: "Freedom to act",
      definition:
        "Evidence of freedom of action according to imagination in every human.",
    },
    {
      devnagiri: "भ्रम (bhram)",
      english: "Delusion",
      definition:
        "Flaw in cognition: assuming something to be more, less or other than what it is. # Translator notes: error in cognition, incomplete cognition.",
    },
    {
      devnagiri: "दर्शन (darshan)",
      english: "Darsana or realistic-view",
      definition:
        "Activity by the seer via his/her vision (sight) for understanding the scene as-it-is, and its expression, communication and publishing.",
    },
    {
      devnagiri: "वाद (vaad)",
      english: "‘Ism",
      definition: "Clear propounding of Actuality, Reality & Truth.",
    },
    {
      devnagiri: "शास्त्र (shaastra)",
      english: "Code-of-Conduct",
      definition:
        "Inspiration for self-discipline. Activity of transmission capable of ensuring assimilation of restraint.",
    },
  ];
  const definitions = [
    "1. Existence (astitva): – Being, continually being.",
    "2. Inseparability (avibhajya): – Continuous activity of units in pervasive element as eternal manifestation.",
    "3. Ashrama: – Producing evidence of human consciousness with hard work and endeavours.",
    "4. Countless (anant): – That whose count cannot be understood mathematically – while possibility of its being remains. That which is in imagination but has not been understood – while possibility of its becoming known remains.",
    "5. Study (adhyayan): – The activities and endeavours in the light of realization upon memorization.",
    "6. Undivided Society (akhand samaj): – Oneness of human race, religion, state and orderliness. Universality in culture, civilization, norms and orderliness as tradition.",
    "7. Studiable (adhyayangamya): – Realities in existence becoming understood upon study.",
    "8. Emissive atom (ajeercna parmanu): – The atomic constitution that has more number of particles than needed for atom’s constitutional-completeness. Atom’s being effortful for expelling some particles from itself and spreading the radiation effect.",
    "9. Molecule (anu): – Composition of material atoms. Combined activity of more than one atoms.",
    "10. Crime (apradh): – Unrighteous wealth (misappropriation), Unrighteous marital relationship (infidelity), Work and behaviour that inflicts suffering to others. Pashu manav and rakshas manav who believes hoarding and comforts to be livelihood.",
    "11. Natural Cyclicality (avartansheelta): – Becoming prosperous through production, while ensuring the continuity of the source of raw material for every production.",
    "12. Fearlessness (abhaya): – Trust in existence as eternal manifestation. The evidence in living as undivided society and universal orderliness.",
    "13. Offering (arpan): – Giving something with the expectation of taking something in return.",
    "14. Immortality (amaratva): – Constitutional-completeness. Permanence of constitution.",
    "15. Abhyudaya: – All-round resolution as evidence.",
    "16. Want (asha): – The want of living with happiness.",
    "17. Desire (ichchha): – The imaging of contemplation of holistic view and its expression.",
    "18. Honesty (imandari): – Preparing a definite plan for evidencing the understanding.",
    "19. Mutual fulfillment (ubhaya trupti): – The fulfillment of values in minimum of two relationships.",
    "20. Beneficence (upkar): – Becoming wise, manifestation of “letting live and live” with understanding.",
    "21. Upasana: – Study, acceptance, achievement and evidence of desired objective by following a definite path.",
    "22. Human motive (eshana): – Expression of human motives of progeny, wealth and fame.",
    "23. Human action (karma): – Production activities for common aspirations (food, shelter and utilities) and higher aspirations (tele-communication and transportation).",
    "24. Action Plan (karya yojana): – Implemention of the plan.",
    "25. Work and Behaviour (karya vyavhar): – Behaviour with human being, and work with material nature for production.",
    "26. Practice in Work (karma abhyas): – Becoming proficient in instilling utility value and art value on natural abundance.",
    "27. Mania for Sex (kaam unmad): – Human being besmeared in the thoughts of carnality.",
    "28. Mineral (khanij): – Desired material that is extracted from solid Earth by digging.",
    "29. Motion (gati): – Change in position.",
    "30. Consciousness Development (chetana vikas): – Human consciousness is good – and it is a qualitatively superior to animal consciousness, Godly consciousness is better than human consciousness, Divine consciousness is best – and it is qualitatively superior to Godly consciousness.",
    "31. Conscious (chaitanya): – Constitutionally complete atom, conscious unit, jeevan.",
    "32. Contemplation (chintan): – Qualitatively refined manifestation of the desire force.",
    "33. Knowledge of Jeevan (jeevan gyan): – Understanding and teaching of constitutional completeness, functional completeness and conduct completeness.",
    "34. Jeevan (jeevan vastu): – The expression of conscious forces of want, thought, desire, conviction and evidence.",
    "35. Material (jad): – The activities of material and pranic order. Those objects whose span of activity is within their expanse (height, width and breadth).",
    "36. Material world (jagat): – The physical and chemical nature.",
    "37. Animal order (jeevavastha): – Presence in the form of many species with want-to-be-alive.",
    "38. Awakened human tradition (jagruti sahaj manav parampara): – The tradition of evidencing all-round resolution with understanding. The evidence in orderliness by way of education and justice.",
    "39. Jeevan values (jeevan mulya): – Happiness, Peace, Contentment and Bliss.",
    "40. Responsibility (jimmedari): – Converting understanding into work, behaviour and plans.",
    "41. Godly Plane (dev pad chakra): – The plane of human living in which there is cyclicality of qualitative advancement towards Godly consciousness from human consciousness and deterioration of Godly consciousness into human consciousness.",
    "42. Divine Plane (divya pad): – Eternal presence of divine consciousness, conduct completeness, evidence of tendency of beneficence.",
    "43. Holistic view (darshan): – Eternal manifestation (as acceptance of form, characteristics, innate nature and religion), appraisal of realities, eternal presence, evidence.",
    "44. Observable Reality (drishya): – Being inseparably in, from and for the Omnipresence.",
    "45. Observer (drishta): – Understanding and teaching of absolute truth, relative truth and objective truth.",
    "46. The Knowledge of Holistic view (darshan gyan): – The understanding, acceptance and evidence of absolute truth, relative truth and objective truth.",
    "47. Initiation (deeksha): – Definite way, acceptance and commitment for understanding and teaching.",
    "48. Earth (dharti): – Big composition from molecules of material order on which evolution of pranic order, animal order and knowledge order has happened.",
    "49. Mortality (nashvaratva): – That which traditionally has a continuously changing constitution.",
    "50. Eternal Grandeur (nitya vaibhav): – Every evolution stage and plane having a grandeur of its stage in existential progression and its having eternal presence.",
    "51. Existential Progression (niyati kram): – The evolution of pranic order from material order, of animal order from pranic order, and of knowledge order from animal order.",
    "52. The Way of Existence (niyati vidhi): – Definitiveness in the conduct of material order, pranic order, animal order and knowledge order.",
    "53. Eternal (nitya): – Continually forever.",
    "54. Restraint (niyantran): – Orderliness with its elementalness and participating in holistic orderliness.",
    "55. Law (niyam): – Definite conduct of a reality in existence itself is evidence of law.",
    "56. Justice (nyaya): – Relationship, Values, Appraisal, Mutual fulfillment and its continuity.",
    "57. Constitution (parinam): – The increase or decrease in number of particles in an atom results in atomic constitutions.",
    "58. Evidence (praman): – Continuity of an evolution stage in the form of tradition itself is evidence.",
    "59. Nature (prakruti): – That which gives the evidence in the form of “always been there” and “is there”.",
    "60. Atom (parmanu): – Orderliness with its elementalness and participation in holistic orderliness. Elementalness is having what it takes to be that element, neither less nor more. Basic unit with usefulness and complementariness in the form of material nature.",
    "61. Pranic cell (pran kosha): – The cellular form as combination of pranic threads, formation element and strengthening element, which along with inhaling and exhaling has the tendency of composing according to its composition method.",
    "62. Material order (padarth avastha): – That which evidences the distinction of meaning from the distinction of its evolution stage.",
    "63. Pranic Plane (pran pad chakra): – The cyclical transformations from pranic order to material order and from material order to pranic order.",
    "64. Greed (pralobhan): – Being helpless towards conduciveness of sense organs (hearing, touch, sight, taste and smell).",
    "65. Result (fal): – The accomplishments from implementation of a plan.",
    "66. Praneta: – The source of inspiration. Clarifying the absolute truth, relative truth and objective truth in a complete way.",
    "67. Brahman: – Another name for pervasive element.",
    "68. Bondage (bandhan): – Delusion. The flaw of over-valuation, under-valuation or unvaluation.",
    "69. Participation (bhagidari): – The activities performed for taking the accountability for the results and outcomes.",
    "70. Fear (bhaya): – Fear is not being able to trust one’s relationships and not being able to evidence understanding in one’s living while having its expectation.",
    "71. Mania of consumption (bhogonmad): – The tendency and helplessness of making it conducive for sense organs (hearing, touch, sight, taste and smell).",
    "72. Plane of Delusion (bhranti pad): – The cycle of advancement from animal order to deluded human living and deterioration from deluded human living to animal order. Cycle of living in animal consciousness.",
    "73. Receptive Atom (bhukha parmanu): – Atom with constitution having fewer number of particles than the number of particles in a constitutionally complete atom.",
    "74. Physical entity (bhautik vastu): – Composition of atoms and molecules.",
    "75. Human being (manav): – The one who materializes his ideas and evidences healthiness of mind.",
    "76. Conduct of Humanness (manviyata poorna acharan): – The human tradition that evidences values, character and ethics.",
    "77. Madhyasth Darshan: – The essence and elucidation of continuity in, from and for existence.",
    "78. Salvation (moksha): – Liberation from delusion, awakening.",
    "79. Human Values (manav mulya): – Steadfastness, Courage, Generosity, Kindness, Graciousness and Compassion.",
    "80. Value Education (mulya shiksha): – The educational program that makes Jeevan values, Human values, Instilled values, Mannerism values, Utility values and Art values practicable in work and behaviour.",
    "81. Plan (yojana): – Making decisions for desired accomplishment from union and happy coincidence.",
    "82. Mystery (rahasya): – Not understanding something while having intuition of its being. Not having the clarity itself is mystery.",
    "83. Chemical entity (rasayanik vastu): – Becoming present in different conduct from physical activity as a result of synthesis.",
    "84. Nation (rashtra): – Undivided Earth.",
    "85. Nationhood (rashtriyata): – Undivided Society",
    "86. National Character (rashtriya charitra): – The tradition of resolution, prosperity, fearlessness and coexistence becoming realized on Earth in the form of undivided society.",
    "87. Composition (rachna): – All compositions like vegetations, forests, shrubs, greenery, animals, human beings are in big composition of Earth.",
    "88. Chemical Framework (rasayan tantra): – The emergence of strengthening element and formation element from the union of acid and base in water on Earth. The combined activity of all chemical substances emerged from this itself is chemical framework.",
    "89. Rakshas Manav: – The one who lives with cruelness in animal consciousness.",
    "90. Mania for Profit (labhonmad): – The wicked tendency and deeds of giving less while taking more.",
    "91. Thought (vichar): – The acceptance of logical conclusions for their implementation.",
    "92. Ideology (vaad): – Evidence and presence with causal, qualitative and mathematical reasoning.",
    "93. Varna: – The level of one’s consciousness (animal consciousness, human consciousness, godly consciousness, divine consciousness) itself is one’s varna.",
    "94. Alternative (vikalp): – Resolution of problems encountered in human tradition thus far.",
    "95. Omnipresence (vyapak): – Present everywhere – immanent in, from and for material and conscious nature.",
    "96. Eternal Presence (vartman): – Continually being present.",
    "97. Practice in Behaviour (vyavhar abhyas): – The practice of living with resolution and prosperity in relationships, evidencing values, character and ethics.",
    "98. Intelligence (vidvata): – The evidence of realization of absolute truth, relative truth and objective truth. The evidence of having the understanding as knowledge, wisdom and science.",
    "99. Entity (vastu): – The expression of reality. (The evidence as usefulness and complementariness of eternal manifestation.)",
    "100. Behaviourism (vyavharvad): – The necessary study and discussions for purposeful reasoning about Relationship, Value, Appraisal, Mutual fufillment, Righteous wealth, Righteous marital relationship, Work and Behaviour with Kindness, Good-use and Protection of means as body, mind and wealth.",
    "101. Relative Truth (vastu sthiti satya): – Place, Time and Direction. Objective Truth (vastugat satya): – Form, Characteristics, Innate-nature and Religion.",
    "102. Relationship (sambandh): – (i) Biological Relationships, (ii) Human Relationships, (iii) Educational Relationships, (iv) Orderliness Relationships, (v) Production Relationships, (vi) Exchange Relationships, (vii) Environmental Relationships.",
    "103. Absolute Truth (sthiti satya): – Nature saturated in the Omnipotence.",
    "104. Understanding (samajhdari): – Knowlege, Wisdom, Science.",
    "105. Surrender (samarpan): – The activity of giving with no expectation of getting anything in return.",
    "106. Civilization (sabhyata): – Participation in norms and orderliness. The evidence in the form of orderliness.",
    "107. Culture (sanskruti): – The activities – as work and behaviour – done as manifestation of completeness.",
    "108. Prosperity (samriddhi): – Production more than the needs of family.",
    "109. Resolution (samadhan): – Understanding, Honesty, Responsibility and Participation. The results being according to the understanding.",
    "110. Instilled values (sthapit mulya): – (1) Trust, (2) Respect, (3) Affection, (4) Gratitude, (5) Honour, (6) Reverence, (7) Care, (8) Guidance, (9) Love.",
    "111. Saturation (samprikt): – Being submerged, soaked and encircled as manifestation of completeness and wholeness.",
    "112. Universal Orderliness (sarvbhaum vyavastha): – The ten staged family rooted self organized orderliness, in which public representative becomes available without expediture. Where all public representatives live with resolution and prosperity. The public representative from a resolved and prosperous family would participate in humane education, justice, production, exchange, health and discipline activities.",
    "113. Coexistentialism (sah-astitva-vad): – The eternal effect, activities and presence of material and conscious nature saturated in the Omnipotence.",
    "114. Testimony (satyapan): – The description of state of being in, from and for self.",
    "115. Sanyam: – The evidence in human tradition of understanding, honesty, responsibility and participation.",
    "116. Samadhi: – The wants, thoughts and desires being silent and being the seer of self’s existence.",
    "117. Sadhana: – The activities performed or endeavours for achieving the objective.",
    "118. Truth (satya): – Nature saturated in the Omnipotence. The material and conscious nature saturated in all pervasive element as evidence of absolute truth, relative truth and objective truth.",
    "119. Balance (santulan): – Mutual usefulness and complementariness in material order, pranic order, animal order and knowledge order.",
    "120. Coexistence (sah-astitva): – Material and conscious nature saturated in the Omnipotence.",
    "121. Evolution in Coexistence (sah-astitva me vikas kram): – The expulsion and inclusion activity of particles in atoms.",
    "122. Progress in Coexistence (sah-astitva me vikas): – Constitutional-completeness in atom.",
    "123. Awakening progression in Coexistence (sah-astiva me jagruti kram): – Human being as a combined expression of jeevan and body in living.",
    "124. Awakening in Coexistence (sah-astitva me jagruti): – The evidence of constitutional-completeness, functional-completeness and conduct-completeness in knowledge order in nature saturated in the Omnipotence.",
    "125. Continuity of Awakening in Coexistence (sah-astitva me jagruti kee nirantarta): – Continuity of functional-completeness and conduct-completeness in human tradition. Continuity of evidence of resolution, prosperity, fearlessness and coexistence. Continuity of undivided society and universal orderliness.",
    "126. Discipline (shastra): – Coherence in many links of human actions of doing, getting done and giving consent – physically, mentally and verbally.",
    "127. Education (shiksha): – Having the knowledge, wisdom and science.",
    "128. Training (shikshan): – Technology. The practice of necessary techniques for production activities.",
    "129. Manual work (shram): – Instilling utility value and art value on natural abundance with proficiency in skill, behaviour and knowledge by human being as combined expression of jeevan and body.",
    "130. Knowledge (gyan): – The knowledge of existence, jeevan (conscious aspect), and conduct of humanness.",
    "131. Knower (gyata): – The one who understands and evidences the understanding.",
    "132. Knowledge order (gyan-avastha): – Human consciousness is good – and it is a qualitatively superior to animal consciousness, Godly consciousness is better than human consciousness, Divine consciousness is best – and it is qualitatively superior to Godly consciousness.",
  ];

  // Add the rest of the entries here following the same structure...

  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      <Backjs />
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none page-content">
        <h1 className="page-heading  pb-6">
          Paribhasha Samhita – Book of Definitions
        </h1>
        <p>
          The ‘paribhasha samhita’ (परिभाषा संहिता) book contains the key-terms
          used in the literature. These key-words have been defined in a
          specific, definitive way, which ties their meaning to reality. The
          words have been taken from the sanskrit language and used in hindi
          rendition. This is called ‘tatsam’.
        </p>
        <p>
          It is thus essential that the reader interpret the books according to
          these definitions. Else, one runs the risk of using ones own
          interpretation, or interpreting words such as vyavhar, anubhav, etc as
          per other knowledge-systems or darshan’s.
        </p>
        <br />
        <a
          href="https://app.madhyasth.org/paribhasha"
          className="pb-3 page-small-heading"
          target="_blank"
        >
          <>Browse the definitions in the app”</>
        </a>

        <h3 className="mt-1">Partial List of Definitions[परिभाषा]</h3>
        <p>
          * Only a small & important selection given. The book of Definitions is
          250 pages.
        </p>

        <p>
          Every word has a meaning. There are realities in existence in the form
          of these meanings. The definitions, or paribhasha – links the words to
          meanings in reality. The entire work in Madhyasth Darshan uses the
          “definition method”: the definitions connect the words to meanings
          which are as realities in Existence; such meanings can be understood
          by humans.
        </p>

        <p>
          The words used are from human tradition, while the definitions have
          been given totally afresh, tying them to reality. I.e. the entire work
          has been built “ground-up”
        </p>

        <p>
          The original hindi definitions have not been included here , while in
          some places only part of the definitions have been give, in the
          interest of space. The English definitions are still
          work-under-progress as of January 2012 and not ‘stabilized’. The
          choice of English-words & definitions are yet to be finalized, it will
          be many years before they are.
        </p>

        <p>
          Base reference for the English translations: Paribhasha Samhita in
          Hindi, ed-2008, by A Nagraj.
        </p>

        <p>
          <em>
            All text in italics in the English definition are additions by the
            translator.
          </em>
        </p>

        {/* LARGE BLOCK OF TEXT START */}
        <div className="overflow-x-auto p-4">
          <table className="min-w-full border border-gray-300 text-sm text-left page-common-pera">
            <thead className="bg-gray-200  ">
              <tr>
                <th className="border px-4 py-2">Devnagiri word (Hindi)</th>
                <th className="border px-4 py-2">English equivalent</th>
                <th className="border px-4 py-2">Definition in English</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((row, idx) => (
                <tr key={idx} className="align-top">
                  <td className="border px-4 py-2 whitespace-pre-wrap">
                    {row.devnagiri}
                  </td>
                  <td className="border px-4 py-2 whitespace-pre-wrap">
                    {row.english}
                  </td>
                  <td className="border px-4 py-2 whitespace-pre-wrap">
                    {row.definition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="   mt-4 page-content">
            * Partial list shown for readability.
          </p>
        </div>
        {/* LARGE BLOCK OF TEXT END */}
      </div>
      <div className="p-4 max-w-5xl mx-auto">
        <ul className="space-y-2">
          {definitions.map((item, index) => {
            const [title, ...rest] = item.split(":");
            return (
              <li key={index} className="page-content">
                <strong>{title}:</strong>
                {rest.join(":")}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-10">
        <p className="page-content">
          rakesh gupta | student | 2007-2010| English version of Original Hindi
          by A.Nagraj
        </p>
        <p className="page-h6 italic">
          Definitions marked with the * sign have been modified by shriram n |
          student | jan 2012
        </p>
      </div>
    </div>
  );
};

export default ParibhashaPage;
