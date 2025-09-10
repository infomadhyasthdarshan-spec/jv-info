"use client";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords } from '@/utils/fontInjector';

export default function LifeTopics() {

    useEffect(() => {
        wrapHindiWords();
    }, []);

    const topics = [
        [
            { name: "Love", link: "#love" },
            { name: "Emotions", link: "#emotions" },
            { name: "Money", link: "#money" },
            { name: "Rebirth", link: "#rebirth" },
            { name: "Religion", link: "#religion" },
        ],
        [
            { name: "Happiness", link: "#happiness" },
            { name: "Good Parenting", link: "#good-parenting" },
            { name: "Motivation", link: "#motivation" },
            { name: "Truth", link: "#truth" },
            { name: "Laziness", link: "#laziness" },
        ],
        [
            { name: "Marriage", link: "#marriage" },
            { name: "Spirituality", link: "#spirituality" },
            { name: "Desire", link: "#desire" },
            { name: "Consciousness", link: "#consciousness" },
            { name: "Ego", link: "#ego" },
        ],
        [
            { name: "Relationship", link: "#relationship" },
            { name: "God", link: "#god" },
            { name: "Liberation", link: "#liberation" },
            { name: "Mind", link: "#mind" },
            { name: "Inferiority", link: "#inferiority" },
        ],
        [
            { name: "Suffering", link: "#suffering" },
            { name: "Depression & Anxiety", link: "#depression-anxiety" },
            { name: "War & Peace", link: "#war-peace" },
            { name: "Social Conflict", link: "#social-conflict" },
            { name: "Climate Change", link: "#climate-change" },
        ],
    ];

    return (
        <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto bg-gray-100 px-3 font-th py-8">
            {/* Life Topics Section */}
            <h2 className="page-heading mb-4">Life Topics</h2>

            <div className="bg-white rounded-[16px] p-4 sm:p-6 shadow-sm">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-4">
                    {topics.flat().map((topic, i) => (
                        <h4
                            key={i}
                            onClick={() => {
                                const targetId = topic.link.replace("#", "");
                                document.getElementById(targetId)?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                            className="text-[#a65d2b] page-xsmall-hading text-center hover:underline block cursor-pointer"
                        >
                            {topic.name}
                        </h4>
                    ))}
                </div>
            </div>

            {/* Love Section */}
            <div className="mt-10 scroll-mt-40" id="love">
                <h3 className="page-small-heading mb-4">Love (प्रेम)</h3>
                <p className="mb-4 page-common-hading">
                    What if love wasn't a fleeting feeling, but a permanent state of your
                    understanding?
                </p>
                <div className="space-y-4 text-gray-800 leading-relaxed page-content">
                    <p>
                        We often experience affection as a powerful but temporary wave,
                        dependent on the other person's behavior and our own moods. But what
                        if that feeling is just a glimpse of something far more stable?
                    </p>
                    <p>
                        This workshop proposes that true, unconditional Love (Prem) is the
                        pinnacle of understanding—the final value that emerges from a fully
                        awakened consciousness (जीवन). It is the complete acceptance that
                        arises when we see ourselves in all others, rooted in the
                        realization of Co-existence (सह-अस्तित्व). It is the combined
                        expression of compassion, grace, and mercy (दया, कृपा, करुणा).
                    </p>
                    <p>
                        Unlike fleeting emotions, this Love is not a transaction. It is a
                        stable state (भाव) that radiates from within once we are free from
                        our own inner contradictions. The journey begins with Affection
                        (स्नेह), which is the feeling of being non-opposed to another and is
                        the foundation of justice (न्याय).
                    </p>
                    <p>
                        Could it be that the lasting love we seek is not something to be
                        found in another, but an understanding to be developed within our
                        own consciousness (जीवन)?
                    </p>
                </div>
            </div>

            {/* happiness Section */}
            <div className="mt-10 scroll-mt-40" id="happiness">
                <h3 className="page-small-heading mb-4">On Happiness (सुख)</h3>
                <p className="mb-4 page-common-hading">You've been chasing happiness your whole life; what if it was already inside you, waiting to be understood?</p>
                <p className="mb-4 page-content">Our entire life is a series of pursuits for happiness, believing it lies in the next achievement, the next purchase, or another person's approval. We experience temporary pleasure through our senses (इन्द्रिय सुख), but it never lasts, leaving us chasing the next thing. This is the cycle of a deluded (भ्रमित) human being.</p>
                <p className="mb-4 page-content">What if this chase is the very thing keeping us from happiness? This workshop proposes that human beings are naturally सुखधर्मी (their innate nature is to be happy). True, continuous happiness is not an external reward; it's an internal state of being. It is the result of Resolution (समाधान)—a state where all our "whys" and "hows" about life are answered, and our inner contradictions cease.</p>
                <p className="mb-4 page-content">This workshop presents four states of being: Happiness (सुख), Peace (शांति), Contentment (संतोष), and Bliss (आनंद). These are not random feelings but the precise, experiential outcomes of harmony within our own consciousness (जीवन)—between our Mind (मन), Intellect (वृत्ति), Deeper Conscience (चित्त), and Self (आत्मा).</p>
                <p className="mb-4 page-content">The question then isn't "how to get happiness," but "what is the lack of understanding within me that is blocking my natural state of being happy?"</p>


            </div>
            {/* happiness Section */}
            {/* On Marriage (विवाह) */}
            <div className="mt-10 scroll-mt-40" id="money">
                <h3 className="page-small-heading mb-4">On Marriage (विवाह)</h3>
                <p className="mb-4 page-common-hading">Beyond rituals, adjustments, and compromise, have you discovered the real purpose of being married together?</p>
                <p className="mb-4 page-content">Society often frames marriage as a social contract full of duties, adjustments, and compromises. We focus on the external aspects, but often miss the profound purpose of this relationship.</p>
                <p className="mb-4 page-content">This workshop proposes that marriage (पति-पत्नी संबंध) is a pivotal relationship for mutual development towards a shared goal: awakening (जागृति). The ultimate achievement in a marriage is described as becoming "one mind and two bodies" (एक मन और दो शरीर), where there is such deep harmony in understanding that you act as a single, resolved unit.</p>
                <p className="mb-4 page-content">This is not achieved through compromise, but through mutual fulfillment based on clearly defined values like Trust (विश्वास), Respect (सम्मान), and Affection (स्नेह). It's a relationship where you help each other resolve your inner confusions and contradictions, creating an environment of harmony that becomes the foundation for a resolved family and society.</p>
                <p className="mb-4 page-content">Have we seen our marriage as a journey of mutual self-discovery, or as a set of lifelong adjustments where both individuals slowly lose their sense of self?</p>
            </div>
            {/* On Marriage (विवाह) */}
            {/* On Relationship (संबंध)*/}
            <div className="mt-10 scroll-mt-40" id="marriage">
                <h3 className="page-small-heading mb-4">On Relationship (संबंध)</h3>
                <p className="mb-4 page-common-hading">Tired of managing expectations? Have you ever thought about what are the universally right expectations of humans that needs no management?</p>
                <p className="mb-4 page-content">Most of our exhaustion in relationships comes from managing a web of undefined and often conflicting expectations. We expect others to behave as we want, and they expect the same from us, leading to constant friction and disappointment.</p>
                <p className="mb-4 page-content">This workshop proposes that relationships are not meant to be "managed." They are meant to be recognized (पहचानना) and fulfilled (निर्वाह करना). It identifies definite relationships (like parent-child, friends, partners) and the inherent, universal values (मूल्य) within them, such as Trust (विश्वास), Respect (सम्मान), Gratitude (कृतज्ञता), and Affection (स्नेह).</p>
                <p className="mb-4 page-content">These values are not arbitrary; they are the natural expectation of every human Jeevan (consciousness). When we understand and live with these values, the need for "management" dissolves. Fulfillment becomes effortless. For example, trust is the assurance that the other person wants my happiness. Once I can see this and ensure this for the other, trust becomes the stable foundation.</p>
                <p className="mb-4 page-content">So, the question shifts from "How do I manage this person?" to "Do I understand the inherent values in this relationship and am I able to fulfill them?"</p>
            </div>
            {/* On Relationship (संबंध) */}

            {/* On Good Parenting (सही परवरिश)*/}
            <div className="mt-10 scroll-mt-40" id="good-parenting">
                <h3 className="page-small-heading mb-4">On Good Parenting (सही परवरिश)</h3>
                <p className="mb-4 page-common-hading">You give your child good education for their career, but have you given them the clarity to understand life themselves?</p>
                <p className="mb-4 page-content">As parents, our primary focus is often on providing the best—the best schools, the best facilities, the best opportunities for a successful career. We try to impart good values (संस्कार), but often through instructions and rules.</p>
                <p className="mb-4 page-content">This workshop asks a deeper question: What is the purpose of parenting? Is it to create a successful professional, or a resolved, happy human being? The text suggests that the highest duty of a parent (माता-पिता) is to provide an environment where a child can develop Right Understanding (ज्ञान) and Right Feeling/Resolution (समाधान). This involves helping them understand themselves (the जीवन and the शरीर), their relationships, and their role in the larger existence.</p>
                <p className="mb-4 page-content">A child learns not from our words, but from our being. If we ourselves are living in confusion (भ्रम), anxiety, and contradiction, can we truly provide an environment of clarity and fearlessness (अभय) for them? The greatest gift we can give our children is our own resolved state of being—our own जागृति (awakening).</p>
                <p className="mb-4 page-content">Are we preparing our children just for a livelihood, or for life itself?</p>

            </div>
            {/* On Good Parenting (सही परवरिश) */}


            {/* On Spirituality (अध्यात्म)*/}
            <div className="mt-10 scroll-mt-40" id="spirituality">
                <h3 className="page-small-heading mb-4">On Spirituality (अध्यात्म)</h3>
                <p className="mb-4 page-common-hading">What if spirituality wasn't about leaving the world, but about understanding what is my role in it?</p>
                <p className="mb-4 page-content">Spirituality is often equated with renunciation, rituals, or the search for a mystical experience, separate from our daily lives. This creates a conflict between our "spiritual" and "worldly" duties.</p>
                <p className="mb-4 page-content">This workshop redefines spirituality (अध्यात्म) not as an escape, but as a direct engagement with reality. It is the process of understanding existence (अस्तित्व) as it is. The core spiritual inquiry is to understand the Self (जीवन ज्ञान), to understand the whole of existence (अस्तित्व दर्शन ज्ञान), and to understand how to live in harmony with it (मानवीयतापूर्ण आचरण ज्ञान).</p>
                <p className="mb-4 page-content">It isn’t about seeking a "divine" that is separate from reality. The divine is in the perfect order and harmony of co-existence itself (सह-अस्तित्व). Spirituality, then, is the journey from a state of illusion (भ्रम) to a state of awakening (जागृति), while living fully in the family and society. It is the path to resolving our inner conflicts so we can live with fulfillment and contribute to the universal order.</p>
                <p className="mb-4 page-content">True spirituality isn't about looking up at the heavens, but about looking at existence—inwards and outwards —with total clarity.</p>

            </div>
            {/* On Spirituality (अध्यात्म) */}
            {/*On God (ईश्वर)*/}
            <div className="mt-10 scroll-mt-40" id="god">
                <h3 className="page-small-heading mb-4">On God (ईश्वर)</h3>
                <p className="mb-4 page-common-hading">Instead of just praying to a higher power, what if you could understand the perfect order of existence itself?</p>
                <p className="mb-4 page-content">Humanity has long prayed to, feared, and sought favors from a personal God. This belief has often been rooted in mystery and the unexplainable.</p>
                <p className="mb-4 page-content">This workshop offers a perspective that demystifies this concept. It proposes that what we call God (ईश्वर) or the Supreme Being is not a person, but the all-pervading, omnipresent reality (व्यापक वस्तु or सत्ता) in which all of nature—all matter and all conscious units—is submerged, energized, and controlled. Vyapak is a non-active, transparent, energy-filled "emptiness" or "space" that inspires all activity to happen in a perfectly regulated, orderly way.</p>
                <p className="mb-4 page-content">Instead of a “supreme creator” entire existence is seen as a co-existence with inherent, unchangeable laws of nature (नियम)—the perfect order that governs everything from atoms to galaxies. Instead of praying to an entity for intervention, the proposal is to understand this universal order (व्यवस्था) and align our own lives with it. This alignment, born of knowledge, is what leads to harmony and fulfillment.</p>
                <p className="mb-4 page-content">Could it be that the security we seek from God is actually found in understanding the infallible system of co-existence in which we are already participating?</p>

            </div>
            {/* On God (ईश्वर) */}
            {/* On Money (पैसा) */}
            <div className="mt-10 scroll-mt-40" id="money">
                <h3 className="page-small-heading mb-4">On Money (पैसा)</h3>
                <p className="mb-4 page-common-hading">You know how to earn money, but do you know the simple secret to feeling prosperous regardless of your bank balance?</p>
                <p className="mb-4 page-content">Our society equates money with security and happiness. This leads to a life of endless accumulation, because the feeling of "enough" is never reached. This is a core sign of a deluded (भ्रमित) life.</p>
                <p className="mb-4 page-content">This workshop makes a critical distinction between Wealth (धन) and Prosperity (समृद्धि). Wealth is the accumulation of physical facilities. Prosperity, however, is a feeling of resolution that comes from having more than is required for your physical needs.</p>
                <p className="mb-4 page-content">The key insight is this: our physical needs are limited and can be identified. When we identify our needs and produce or acquire more than that, we have the feeling of prosperity. A person with ten crores can feel deprived, while a person with one lakh can feel prosperous, if they have the right understanding of their needs. Prosperity is a state of mind, not a number in an account. Money (अर्थ) is merely a tool for facilitating the exchange of physical goods; it is not the source of happiness.</p>
                <p className="mb-4 page-content">The real question is not "how much money is enough?" but "have I correctly identified my needs?" Once needs are identified, the path to feeling prosperous becomes clear and achievable.</p>
            </div>
            {/* On Money (पैसा) */}


            {/* On Motivation (प्रेरणा) */}
            <div className="mt-10 scroll-mt-40" id="motivation">
                <h3 className="page-small-heading mb-4">On Motivation (प्रेरणा)</h3>
                <p className="mb-4 page-common-hading">Why rely on temporary motivation from outside when a permanent inspiration can be awakened within?</p>
                <p className="mb-4 page-content">We constantly seek external motivation—from speeches, books, or the approval of others. This motivation is like a spark that quickly dies out, leaving us needing another fix. It's an unstable foundation for life.</p>
                <p className="mb-4 page-content">This workshop points to a source of permanent inspiration (प्रेरणा) that comes from within. This inspiration is not a fleeting emotion but is born from clarity of purpose. When we understand our true goal as a human being—which is to achieve a state of continuous happiness through awakening (जागृति) and co-existence (सह-अस्तित्व)—all our actions become aligned with that purpose.</p>
                <p className="mb-4 page-content">The source of inspiration (प्रेरणा स्रोत) for all positive actions in an awakened human is the experience of knowledge itself (ज्ञान). When you have Resolution (समाधान), you are no longer pushed and pulled by external circumstances. Your actions flow effortlessly from your understanding. This inner alignment provides a steady, unwavering drive that external motivation can never match.</p>
                <p className="mb-4 page-content">Are we living our lives based on temporary boosts from the outside, or from a deep, unshakable clarity on the inside?</p>
            </div>
            {/* On Motivation (प्रेरणा) */}


            {/* On Emotions (भावनाएं) */}
            <div className="mt-10 scroll-mt-40" id="emotions">
                <h3 className="page-small-heading mb-4">On Emotions (भावनाएं)</h3>
                <p className="mb-4 page-common-hading">Are you driven by your emotions, or have you learned to be the master of your inner world?</p>
                <p className="mb-4 page-content">For most of us, our days are a rollercoaster of emotions. We feel happy when things go our way, angry or sad when they don't. We are often slaves to these reactions, which are tied to our sensory experiences and deluded beliefs (प्रियाप्रिय, हिताहित, लाभालाभ). This is the state of being driven by the body and the external world.</p>
                <p className="mb-4 page-content">This workshop explains that our inner world—our consciousness (जीवन)—has a definite structure. In a state of delusion (भ्रम), our mind (which interfaces with the body's senses) is driven by sensory gratification and the need for external validation, leading to chaotic emotions and reactions.</p>
                <p className="mb-4 page-content">Mastery comes when a harmony is achieved within our consciousness. The Self (आत्मा), through the faculty of the True Intellect (बुद्धि), guides our deeper thoughts (चित्त) and intellect (वृत्ति), which in turn guide the mind (मन). When our feelings and actions originate from a place of clear understanding (ज्ञान) rather than sensory reactions, we become the master of our inner world. Our feelings become stable values like trust, respect, and affection, rather than reactive emotions.</p>
                <p className="mb-4 page-content">Are our feelings the result of what happens to us, or the result of the understanding that exists in us?</p>
            </div>
            {/* On Emotions (भावनाएं) */}
            {/* On Desire (इच्छा) */}
            <div className="mt-10 scroll-mt-40" id="desire">
                <h3 className="page-small-heading mb-4">On Desire (इच्छा)</h3>
                <p className="mb-4 page-common-hading">Your desires are endless, but have you ever investigated where they truly come from?</p>
                <p className="mb-4 page-content">We live in a state of endless desire (इच्छा). The moment one is fulfilled, another takes its place. This is because, in a state of delusion (भ्रम), our desires are primarily driven by sensory gratification and the need for external validation. We believe that fulfilling these desires will bring happiness, but it only leads to a temporary pause in our restlessness.</p>
                <p className="mb-4 page-content">This workshop invites us to investigate the root of desire. Desires originate in the चित्त (the faculty of imagination and deeper conscience) within our consciousness (जीवन). In a deluded state, our चित्त is constantly creating images of what it thinks will bring pleasure, based on past sensory experiences and borrowed ideas from society.</p>
                <p className="mb-4 page-content">However, in an awakened state (जागृति), our इच्छा becomes aligned with our true, natural goal: the desire for continuous happiness through resolution (समाधान) and co-existence (सह-अस्तित्व). The randomness of desire is replaced by a clear, singular, and fulfilling purpose.</p>
                <p className="mb-4 page-content">Are our desires truly our own, or are they just random, unexamined imaginations controlling our lives?</p>
            </div>
            {/* On Desire (इच्छा) */}


            {/* On Liberation (मुक्ति/मोक्ष) */}
            <div className="mt-10 scroll-mt-40" id="liberation">
                <h3 className="page-small-heading mb-4">On Liberation (मुक्ति/मोक्ष)</h3>
                <p className="mb-4 page-common-hading">True moksha isn't freedom from the world, but freedom from your own confusion and realising your true purpose while living in it.</p>
                <p className="mb-4 page-content">The concept of Liberation (मोक्ष) has often been misunderstood as an escape from life, relationships, and worldly responsibilities. This creates a false dichotomy between living in the world and being free.</p>
                <p className="mb-4 page-content">This workshop powerfully reframes moksha as freedom from illusion (भ्रम मुक्ति). The bondage is not the world; the bondage is our own ignorance (अज्ञान) and the internal contradictions it creates. The primary illusion is believing we are just this physical body (शरीर) and that happiness comes from sensory gratification.</p>
                <p className="mb-4 page-content">Liberation, therefore, is an internal shift. It is the attainment of Right Understanding (ज्ञान) of what reality is, who "I" (the जीवन) am, and my purpose in the grand scheme of co-existence. A liberated person (जागृत मानव) does not run away from the world. They live fully within family and society, but their actions are rooted in resolution (समाधान) and harmony, not confusion and reaction. They are free from the internal suffering caused by anger, fear, and ego, and their presence helps others on the path to their own liberation.</p>
                <p className="mb-4 page-content">Moksha is not an after-death destination; it is the state of being fully awakened, resolved, and harmonious while living this very life.</p>
            </div>
            {/* On Liberation (मुक्ति/मोक्ष) */}


            {/* On Rebirth (पुनर्जन्म) */}
            <div className="mt-10 scroll-mt-40" id="rebirth">
                <h3 className="page-small-heading mb-4">On Rebirth (पुनर्जन्म)</h3>
                <p className="mb-4 page-common-hading">Before worrying about the next life, have you truly understood the 'Self' that is living this one?</p>
                <p className="mb-4 page-content">The idea of rebirth often leads to speculation about past lives and future destinations, distracting us from the life we are living right now.</p>
                <p className="mb-4 page-content">This workshop brings the focus squarely back to the present. It explains that the "I" or the Self (जीवन) is a conscious, atomic unit that is eternal (अमरत्वधर्मा). The body (शरीर) is a temporary, physical instrument that the जीवन uses. The death of the body is a certainty (शरीर का नश्वरत्व), but the जीवन continues its journey (जीवन का अमरत्व).</p>
                <p className="mb-4 page-content">The state of the जीवन—its accumulated understandings and unresolved illusions (संस्कार)—is what carries forward. The journey of the जीवन through different bodies is a journey towards Awakening (जागृति). Therefore, the most critical task is not to worry about what body we will get next, but to work on resolving our illusions and developing right understanding in this life. By achieving liberation from illusion (भ्रम मुक्ति) now, we break the cycle of confusion that perpetuates suffering across lifetimes.</p>
                <p className="mb-4 page-content">The key to a better future life is to make this present life a fully understood and resolved one. Have we invested our energy in understanding the eternal Jeevan, or only in maintaining the temporary Sharir?</p>
            </div>
            {/* On Rebirth (पुनर्जन्म) */}


            {/* On Truth (सत्य) */}
            <div className="mt-10 scroll-mt-40" id="truth">
                <h3 className="page-small-heading mb-4">On Truth (सत्य)</h3>
                <p className="mb-4 page-common-hading">We argue about what is truth?, but what if Truth was something not to be believed, but to understand our existence and our purpose in it?</p>
                <p className="mb-4 page-content">We are taught to believe in certain truths—be they religious, scientific, or social. This often leads to dogma and conflict, as one person's belief clashes with another's.</p>
                <p className="mb-4 page-content">This workshop presents Truth (सत्य) not as a belief system, but as reality as it is. The ultimate truth is Co-existence (सह-अस्तित्व)—the reality of all of nature (जड़-चैतन्य प्रकृति) being eternally submerged and energized within an all-pervading reality (व्यापक सत्ता). This is not something to be believed, but something to be known, understood, and experienced.</p>
                <p className="mb-4 page-content">Truth is not a statement; it is the very fabric of existence. The goal is to develop the capacity to see this reality directly, moving beyond belief (मान्यता) to knowledge (ज्ञान) and finally to experience (अनुभव).</p>
            </div>
            {/* On Truth (सत्य) */}

            {/* On Consciousness (चेतना) */}
            <div className="mt-10 scroll-mt-40" id="consciousness">
                <h3 className="page-small-heading mb-4">On Consciousness (चेतना)</h3>
                <p className="mb-4 page-common-hading">Have you ever wondered what is consciousness? I am only this physical body or is there something beyond?</p>
                <p className="mb-4 page-content">This is one of the most fundamental questions of human existence. Modern science often tries to explain consciousness as a product of the brain, while traditional views can be mystical.</p>
                <p className="mb-4 page-content">This workshop provides a clear, logical and verifiable answer. It states that you are not just the body (शरीर). You are a conscious unit, the जीवन, which is an eternal, self-organized atomic entity (चैतन्य परमाणु). The body is your instrument, a complex biochemical machine, but the जीवन is the one that experiences, thinks, desires, and understands. It is the seer (दृष्टा), the doer (कर्ता), and the experiencer (भोक्ता).</p>
                <p className="mb-4 page-content">Consciousness (चेतना) itself is identified with the all-pervading reality (व्यापक वस्तु) in which the जीवन is submerged. The जीवन has the potential to realize its oneness with this all-pervading consciousness, which is the ultimate goal of awakening (जागृति). The journey of a human is a journey of consciousness development, moving from जीव चेतना (animal consciousness, focused on survival) to मानव चेतना (human consciousness, living with resolution and values) and ultimately to दिव्य चेतना (divine consciousness, experiencing co-existence).</p>
                <p className="mb-4 page-content">The understanding that "I am a conscious Jeevan, and the body is my instrument" is the first and most crucial step towards self-realization and freedom from confusion (भ्रम).</p>
            </div>
            {/* On Consciousness (चेतना) */}


            {/* On Mind (मन) */}
            <div className="mt-10 scroll-mt-40" id="mind">
                <h3 className="page-small-heading mb-4">On Mind (मन)</h3>
                <p className="mb-4 page-common-hading">Where does mind exist? Is it a part of my brain? Is it a separate entity? how does it function?</p>
                <p className="mb-4 page-content">The mind is often a mystery, thought to be somewhere in the brain, yet intangible. This workshop offers a clear model, placing the mind (मन) as a specific faculty of the conscious Self (जीवन), not the physical brain (मेधस).</p>
                <p className="mb-4 page-content">The जीवन (consciousness) is described as having a structure of five interconnected faculties:</p>
                <p className="mb-2 page-content"><strong>मन (Mind):</strong> The faculty of tasting (आस्वादन) and selecting (चयन). It interfaces with the body's senses and seeks pleasurable sensations.</p>
                <p className="mb-2 page-content"><strong>वृत्ति (Intellect):</strong> The faculty of analyzing (विश्लेषण) and comparing (तुलन).</p>
                <p className="mb-2 page-content"><strong>चित्त (Deeper Conscience):</strong> The faculty of imagination/visualization (चित्रण) and contemplation (चिंतन). This is where desires take shape.</p>
                <p className="mb-2 page-content"><strong>बुद्धि (True Intellect):</strong> The faculty of determination and knowing (बोध) the truth.</p>
                <p className="mb-4 page-content"><strong>आत्मा (Self/Soul):</strong> The faculty of experiencing (अनुभव) reality as it is.</p>
                <p className="mb-4 page-content">The brain (मेधस) is the physical hardware that the मन uses to receive signals from the senses and send commands to the body, but the मन itself is a non-physical activity of the जीवन. In a state of confusion, our मन acts as the master, chasing sensory pleasures. In an awakened state, the मन acts as a disciplined servant, guided by the higher faculties of वृत्ति, चित्त, and बुद्धि, leading to stable happiness instead of fleeting pleasure.</p>
            </div>
            {/* On Mind (मन) */}


            {/* On Religion (धर्म) */}
            <div className="mt-10 scroll-mt-40" id="religion">
                <h3 className="page-small-heading mb-4">On Religion (धर्म)</h3>
                <p className="mb-4 page-common-hading">Beyond organised religion, have you explored the universal dharma of being human?</p>
                <p className="mb-4 page-content">Religion is often associated with specific communities, books, and rituals, which can become sources of division and conflict.</p>
                <p className="mb-4 page-content">This workshop redirects the focus to the universal meaning of Dharma (धर्म). The Dharma of any entity is its intrinsic, inseparable nature—that which cannot be separated from it. For example, the dharma of a material object is to exist (अस्तित्व धर्म).</p>
                <p className="mb-4 page-content">What, then, is the Dharma of a human being? The text states that the Dharma of a human is to live in a state of continuous happiness (सुख). Just as a material object's nature is to exist, a human's nature is to be happy. All our struggles, desires, and actions are fundamentally driven by this singular, universal pursuit.</p>
                <p className="mb-4 page-content">Living according to this Dharma means aligning our thoughts, behavior, and work to achieve this state of resolution-based happiness. This universal Dharma of seeking happiness through right understanding and harmonious living is common to all humans, irrespective of the organized religion they follow. This is the मानव धर्म (Human Religion).</p>
            </div>
            {/* On Religion (धर्म) */}


            {/* On Laziness (आलस) */}
            <div className="mt-10 scroll-mt-40" id="laziness">
                <h3 className="page-small-heading mb-4">On Laziness (आलस)</h3>
                <p className="mb-4 page-common-hading">Is it laziness, or is your inner self simply refusing to work without a clear purpose?</p>
                <p className="mb-4 page-content">We often label our inaction or procrastination as laziness (आलस्य) and try to fight it with willpower. But what if it's a symptom of a deeper issue?</p>
                <p className="mb-4 page-content">This workshop defines laziness as not doing a task even after accepting its rightness and utility. It's a state of internal conflict. It is proposed that the Self (जीवन) is inherently active and wants to express itself. However, when there is no clarity of purpose—when we don't understand why we are doing what we are doing—our inner self feels no inspiration to act.</p>
                <p className="mb-4 page-content">If our work is not aligned with our natural desire for happiness through resolution, if it feels meaningless or is born out of fear and compulsion, our consciousness essentially rebels. The feeling we call "laziness" could be a powerful signal that our actions are disconnected from our core purpose. When a human being has a clear, inspiring goal—like achieving समाधान (resolution) and contributing to a harmonious व्यवस्था (order)—the energy to act flows naturally.</p>
                <p className="mb-4 page-content">Is the problem a lack of energy, or a lack of a purpose that is compelling enough to energize you?</p>
            </div>
            {/* On Laziness (आलस) */}


            {/* On Ego (अहंकार) */}
            <div className="mt-10 scroll-mt-40" id="ego">
                <h3 className="page-small-heading mb-4">On Ego (अहंकार)</h3>
                <p className="mb-4 page-common-hading">Is your 'I' your true self, or just a collection of assumptions you've never questioned?</p>
                <p className="mb-4 page-content">The word "ego" (अहंकार) is often used to mean pride or arrogance. This workshop gives it a much more precise and fundamental meaning.</p>
                <p className="mb-4 page-content">अहंकार is the state of the Intellect (बुद्धि) when it is disconnected from the Self (आत्मा) and its ability to experience reality directly. In this state of delusion (भ्रम), the बुद्धि operates based on unexamined beliefs and assumptions (मान्यताएं) taken from society or based on sensory experiences. It is this collection of borrowed beliefs that creates the false sense of "I" or the ego.</p>
                <p className="mb-4 page-content">This ego is the root of our problems. It's the "I" that believes "I am this body," "I am my possessions," "I am superior/inferior," or "My belief is the only truth." Because these assumptions are not aligned with reality, they inevitably lead to internal contradictions, conflict with others, and suffering. The true "I" is the जीवन—the eternal, conscious Self. The ego is the mask of false identities it wears.</p>
                <p className="mb-4 page-content">The journey of awakening (जागृति) is the journey of dissolving this अहंकार by replacing borrowed beliefs with true understanding (ज्ञान) gained through self-exploration, until the बुद्धि is guided by the direct experience of the आत्मा.</p>
            </div>
            {/* On Ego (अहंकार) */}
            {/* On Inferiority (हीन भावना) */}
            <div className="mt-10 scroll-mt-40" id="inferiority">
                <h3 className="page-small-heading mb-4">On Inferiority (हीन भावना)</h3>
                <p className="mb-4 page-common-hading">Feeling inferior or superior is tiring; what if you could just be your natural, complete self?</p>
                <p className="mb-4 page-content">The constant mental game of comparing ourselves to others—feeling superior to some and inferior to others—is exhausting. This entire spectrum of comparison is a symptom of a deluded state of being.</p>
                <p className="mb-4 page-content">This workshop explains that these feelings stem from mistakenly identifying ourselves with temporary and variable things: our body (रूप), our physical strength (बल), our position or post (पद), and our wealth (धन). Since these are all variable and can be compared, we are trapped in the endless loop of अधिमूल्यन (over-evaluation), अवमूल्यन (under-evaluation), and निर्मूल्यन (devaluation) of ourselves and others. हीनता (inferiority) is explicitly defined as a form of inhumane nature (अमानवीय स्वभाव) alongside helplessness (दीनता) and cruelty (क्रूरता).</p>
                <p className="mb-4 page-content">The way out is to shift our identity. What if you identified yourself not with these temporary attributes, but with your true self—the जीवन (consciousness)? The जीवन in every human being is fundamentally the same in its potential for understanding and happiness. When you see that every human has the same purpose and the same potential, the very basis for comparison dissolves.</p>
                <p className="mb-4 page-content">You are no longer "better than" or "worse than." You are simply a human being on a journey of awakening, and so is everyone else. In this understanding lies true self-acceptance and peace.</p>
            </div>

            {/* On Suffering (दुःख) */}
            <div className="mt-10 scroll-mt-40" id="suffering">
                <h3 className="page-small-heading mb-4">On Suffering (दुःख)</h3>
                <p className="mb-4 page-common-hading">Are others causing your suffering, or is it the storm of contradictions within you?</p>
                <p className="mb-4 page-content">It's natural to blame our suffering (दुःख) on external factors—other people's actions, our circumstances, or just bad luck. This places us in the position of a victim, powerless to change our own state.</p>
                <p className="mb-4 page-content">This workshop turns this perspective inward. It asserts that while external events can trigger pain or discomfort, the root of all suffering (दुःख, क्लेश) is our own internal state of illusion (भ्रम) and contradiction. A deluded person (भ्रमित मानव) is in a state of being at war with themselves. For example, your mind (मन) wants sensory pleasure, but your intellect (वृत्ति) knows it might be harmful. This inner conflict between the faculties of the जीवन is what manifests as suffering, anxiety, and restlessness.</p>
                <p className="mb-4 page-content">An awakened person (जागृत मानव), whose inner faculties are in harmony and aligned with reality, does not experience suffering even in the face of challenging situations. They experience resolution (समाधान). The pain might be there for the body, but the जीवन remains stable and peaceful.</p>
                <p className="mb-4 page-content">Therefore, the path to ending suffering is not to change the world outside, but to resolve the contradictions and ignorance within.</p>
            </div>

            {/* On Depression & Anxiety (अवसाद और चिंता) */}
            <div className="mt-10 scroll-mt-40" id="depression-anxiety">
                <h3 className="page-small-heading mb-4">On Depression & Anxiety (अवसाद और चिंता)</h3>
                <p className="mb-4 page-common-hading">Is it just a chemical 'locha', or a signal from your being that it's tired of living in confusion?</p>
                <p className="mb-4 page-content">While there can be physiological components to our mental states, this workshop encourages looking at the root cause in our consciousness (जीवन). From this perspective, states like anxiety, depression, and stress (तनाव, अवसाद) are the logical and inevitable outcomes of a life lived in delusion (भ्रम).</p>
                <p className="mb-4 page-content">When we live with unresolved contradictions (असंतोष, अशांति), a lack of clarity about our purpose, and a constant internal conflict between what we desire and what is real, our Jeevan is in a state of continuous turmoil. This inner chaos, this deep-seated dissatisfaction and lack of harmony, manifests as what we call depression and anxiety. These states are powerful signals that our way of living, thinking, and believing is out of sync with reality. They are the screams of a Jeevan that is tired of being fragmented and confused.</p>
                <p className="mb-4 page-content">The solution, therefore, is not just to manage the symptoms, but to address the root cause: the lack of Resolution (समाधान). By pursuing right understanding and aligning our lives with the inherent order of existence, we can achieve an inner harmony that is the natural antidote to these states of suffering.</p>
            </div>

            {/* On War & Peace (युद्ध और शांति) */}
            <div className="mt-10 scroll-mt-40" id="war-peace">
                <h3 className="page-small-heading mb-4">On War & Peace (युद्ध और शांति)</h3>
                <p className="mb-4 page-common-hading">Have you ever wondered about a world with zero possibility of war? What can we do to make this happen?</p>
                <p className="mb-4 page-content">We think of war as a conflict between nations, fought with soldiers and weapons, and we seek peace through treaties and negotiations. But these external solutions have never created lasting peace.</p>
                <p className="mb-4 page-content">This workshop posits that the war outside (युद्ध) is merely a large-scale projection of the war raging inside every human being. The root cause of conflict is the deluded (भ्रमित) human consciousness, which operates from a place of fear and a belief in separate, competing identities (my nation vs. your nation, my religion vs. yours). This "us vs. them" thinking, rooted in ignorance (अज्ञान), is what leads to violence.</p>
                <p className="mb-4 page-content">A world without war is only possible when a critical mass of individuals achieves inner peace. This inner peace is Resolution (समाधान)—a state of being free from internal contradictions. A resolved human being lives in Co-existence (सह-अस्तित्व). They see the fundamental oneness of the entire human race (मानव जाति एक) and the world as a single, undivided family (अखण्ड समाज). For such a person, war is an absurdity.</p>
                <p className="mb-4 page-content">Therefore, the work for world peace is not on the battlefield, but within our own consciousness. The path to a war-free world is through mass human awakening (जागृति).</p>
            </div>

            {/* On Social Conflict (सामाजिक संघर्ष) */}
            <div className="mt-10 scroll-mt-40" id="social-conflict">
                <h3 className="page-small-heading mb-4">On Social Conflict (सामाजिक संघर्ष)</h3>
                <p className="mb-4 page-common-hading">We fight over our differences, but have we ever tried to understand our fundamental and universal human oneness?</p>
                <p className="mb-4 page-content">Social conflict—based on caste, religion, class, or ideology—arises from one fundamental error: we identify ourselves and others with our differences. These differences are rooted in our beliefs (मत), our group affiliations (समुदाय), or the circumstances of our body's birth, all of which are temporary and superficial.</p>
                <p className="mb-4 page-content">This workshop states unequivocally that the human race is one (मानव जाति एक). While our bodies, beliefs, and customs may differ, the conscious Self (जीवन) within every person is fundamentally the same. Every human being has the same innate faculties (Mind, Intellect, etc.), the same potential for awakening, and the same ultimate goal: to achieve continuous happiness through resolution (समाधान).</p>
                <p className="mb-4 page-content">When we lack this understanding, we operate from समुदाय चेतना (community consciousness), where our identity is tied to our group, leading to "us vs. them" conflicts. The solution is to elevate ourselves to मानव चेतना (human consciousness), where we see the universal human characteristics first and foremost.</p>
                <p className="mb-4 page-content">The path to resolving social conflict is not about ignoring our differences, but about realizing that our shared, fundamental oneness is far more profound and real.</p>
            </div>

            {/* On Climate Change (जलवायु परिवर्तन) */}
            <div className="mt-10 scroll-mt-40" id="climate-change">
                <h3 className="page-small-heading mb-4">On Climate Change (जलवायु परिवर्तन)</h3>
                <p className="mb-4 page-common-hading">Is climate change an environmental crisis, or is it a crisis of lack of fundamental human understanding?</p>
                <p className="mb-4 page-content">We typically see climate change as a technical problem of emissions and resource depletion, to be solved with new technology and policies. But these only address the symptoms.</p>
                <p className="mb-4 page-content">This workshop points to a much deeper root cause: a crisis in human consciousness. The environmental crisis is a direct result of a deluded (भ्रमित) relationship with nature. This delusion has two main aspects:</p>
                <p className="mb-4 page-content">The Belief in Unlimited Consumption: We mistakenly believe that happiness comes from accumulating and consuming physical things. This leads to an insatiable desire for more (संग्रह कामना), driving the exploitation (शोषण) of natural resources far beyond what is needed.</p>
                <p className="mb-4 page-content">A Sense of Separation from Nature: We see nature as a separate "resource" to be conquered and used, rather than seeing ourselves as an integral and dependent part of a larger, interconnected system (सह-अस्तित्व).</p>
                <p className="mb-4 page-content">An awakened human being, on the other hand, lives with the understanding of Prosperity (समृद्धि)—the feeling of having enough. They recognize their essential physical needs and live in a relationship of mutual fulfillment with nature, focusing on its nourishment (पोषण), not exploitation. They understand that the health of the planet is inseparable from their own well-being.</p>
                <p className="mb-4 page-content">The solution to climate change is not just green technology, but the widespread awakening of a consciousness that knows how to live in harmony.</p>
            </div>
        </div>
    )
}
