"use client";
import React, { useState } from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const CollapsibleRow = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
   useEffect(() => {
    wrapHindiWords ();
  }, []);
    return (
        <div className="w-full mx-auto mb-5  group border-2 border-[#d6d6d6] rounded-2xl ">
            {/* Toggle Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex justify-between items-center bg-white p-5 text-left rounded-t-2xl  ${isOpen ? " bg-white" : "border-gray-300  "
                    } ${!isOpen ? "rounded-b-2xl" : ""}`}
            >
                <span
                    className={`page-accordion-heading transition-colors duration-300 ${isOpen ? "text-black" : "text-black"
                        }`}
                >
                    {title}
                </span>
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "text-black rotate-180" : "  "
                        }`}
                >
                    <span className="text-3xl font-semibold">{isOpen ? "−" : "+"}</span>
                </div>
            </button>

            {/* Collapsible Content with smooth animation */}
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "h-full opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white h-full p-8 page-accordion-pera rounded-b-2xl">
                    {children}
                </div>
            </div>
        </div>
    );
};
const Page = () => {
    const [activeTab, setActiveTab] = useState("workshop");

    return (
        <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
            <h1 className="page-heading mb-8">Frequently Asked Questions</h1>

            {/* Tabs */}
            <div className="flex flex-col md:flex-row gap-4 pb-8 ">
                <button
                    onClick={() => setActiveTab("workshop")}
                    className={`flex-1 py-4 px-5 border-2 rounded-[12px] font-bold transition ${activeTab === "workshop"
                        ? "border-[#B2917A] bg-[#FFFFFF] text-[#B2917A]"
                        : "border-[#666666] text-[#666666] hover:bg-gray-100"
                        }`}
                >
                    About the Workshop
                </button>
                <button
                    onClick={() => setActiveTab("logistics")}
                    className={`flex-1 py-4 px-5 border-2 rounded-[12px] font-bold transition ${activeTab === "logistics"
                        ? "border-[#B2917A] bg-[#FFFFFF] text-[#B2917A]"
                        : "border-[#666666] text-[#666666] hover:bg-gray-100"
                        }`}
                >
                    Logistics & Participation
                </button>
                <button
                    onClick={() => setActiveTab("attendance")}
                    className={`flex-1 py-4 px-5 border-2 rounded-[12px] font-bold transition ${activeTab === "attendance"
                        ? "border-[#B2917A] bg-[#FFFFFF] text-[#B2917A]"
                        : "border-[#666666] text-[#666666] hover:bg-gray-100"
                        }`}>
                    Who can Attend?
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === "workshop" && (
                <div>
                    <CollapsibleRow title="1. What is the Jeevan Vidya Introductory Workshop?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <p className="font-th text-[20px] leading-[32px] ">
                                It is a 7–8 day dialogue-based interaction designed to explore our lives, human values, ethics, relationships, society, and our place in nature. It does not rely on preaching or traditional scriptures but instead uses a method of ‘reflective reasoning’ for self-examination. The facilitator puts forth Proposals for the same.  Also, there are no ‘Meditative Practices’, ‘Chanting’, etc.
                            </p>


                        </div>
                    </CollapsibleRow>
                    {/* 2 */}
                    <CollapsibleRow title="2. What is the main objective of this workshop?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>To discover clarity about life and human purpose.</li>
                                <li>To get an integral view of self, family, society, and nature.</li>
                                <li>To enable the path towards harmony in our thoughts, relationships and occupation.</li>
                                <li>To impress the need for systematic study for the same.</li>
                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 3 */}
                    <CollapsibleRow title="3. What topics are covered?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>Universal nature of Human beings and consciousness.</li>
                                <li>Mind, body, and desires, wisdom and universal experience.</li>
                                <li>Relationships: family, marriage, friendship, parenting.</li>
                                <li>Society: education, economy, justice, and resolving conflicts.</li>
                                <li>Human–nature coexistence and the universe.
                                </li>

                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 4 */}
                    <CollapsibleRow title="4. What philosophy is it based on?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <p className="font-th text-[20px] leading-[32px] ">
                                It is based on Madhyasth Darshan (Coexistential Philosophy), propounded by Shri A. Nagraj and meant to be a behavioural introduction to the same. </p>


                        </div>
                    </CollapsibleRow>
                    {/* 5 */}
                    <CollapsibleRow title="5. Who can attend?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <p className="font-th text-[20px] leading-[32px] ">
                                Anyone—students, professionals, homemakers, educators, thinkers or social workers. No prior knowledge is needed.</p>


                        </div>
                    </CollapsibleRow>
                    {/* 6 */}
                    <CollapsibleRow title="6. Is there any fee for the workshop?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <p className="font-th text-[20px] leading-[32px] ">
                                There is no fee for 'teaching'. It is a purely voluntary expression & hence offered as a 'gift'. However, a nominal daily contribution is expected to cover food and basic stay arrangements (typically. ₹300- 500 per person per day for residential participants; reduced for non-residential participants).</p>
                        </div>
                    </CollapsibleRow>
                </div>
            )}

            {activeTab === "logistics" && (
                <div>
                    {/* 7 */}
                    <CollapsibleRow title="7. Where is the workshop held?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <p>Workshops are hosted at designated locations across India. See the <a href="https://app.madhyasth.org/schedule" style={{color: "#94562B"}} className="underline italic font-bold">Schedule page</a> for the same2</p>


                        </div>
                    </CollapsibleRow>
                    {/* 8 */}
                    <CollapsibleRow title="8. What are the stay arrangements?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>Simple shared accommodation is provided on campus.</li>
                                <li>Basic bedding (mattress, pillow, blanket) is available, but participants are advised to bring an extra bedsheet/blanket if possible.Check with the workshop organisers for further details</li>
                                <li>Accommodation is limited, so rooms are allotted based on availability.</li>
                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 9 */}
                    <CollapsibleRow title="9. What about food?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>Nutritious vegetarian meals are provided.</li>
                                <li>Children below 10 years old are  not charged for food.</li>
                                <li>Accomodation for special meal preferences like Jain, no dairy etc can be organised. Please check with workshop organisers for further details</li>

                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 10*/}
                    <CollapsibleRow title="10. What should I bring with me?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>Two extra bedsheets/blankets for personal comfort.</li>
                                <li>Water bottle, personal medicines, mosquito repellent.</li>
                                <li>Notebook and pen for taking notes.</li>
                                <li>Warm clothes or Umbrella (if needed depending on season).</li>
                                <li>An Open Mind.</li>
                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 11 */}
                    <CollapsibleRow title="11. What are the daily timings?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>Classroom Sessions typically run from 9:00 AM to 6:00 PM, with breaks for breakfast, lunch, tea, and dinner</li>
                                <li>Evening goshthi (group dialogue) is held from 8:00–9:00 PM post dinner.</li>

                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 12*/}
                    <CollapsibleRow title="12. How do I reach the venue?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>Contact numbers of local drivers are shared with registered participants for ease of travel.</li>
                                <li>Join the relevant whatsapp group or contact the workshop organisers for further details</li>

                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 13 */}
                    <CollapsibleRow title="13. Can I attend for fewer days if I cannot commit the full duration?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <p className="page-content ">It is recommended to attend the entire 7–8 days for full benefit, as the workshop is designed as a complete journey. Partial attendance may limit understanding and not enable the ‘integral-view’ the workshop seeks to communicate.</p>


                        </div>
                    </CollapsibleRow>
                    {/* 14 */}
                    <CollapsibleRow title="14. What is the policy on contributions?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>No tuition or teaching fee is charged.Ever. </li>
                                <li>Voluntary contribution only for food and accommodation.</li>
                                <li>Participants unable to pay may discuss individually—contribution is never a barrier to attendance.</li>
                                <li>Full transparency: at the end of the workshop, a summary of expenses and contributions is shared with all participants.</li>

                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 15*/}
                    <CollapsibleRow title="15. Are there any restrictions during the workshop?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <p>Yes. To maintain focus and harmony:</p>
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <li>No alcohol, tobacco, or intoxicants are allowed.</li>
                                <li>Participants are advised not to bring valuables.</li>
                                <li>Everyone is expected to take care of their own health and follow a simple lifestyle during the stay. </li>

                            </ul>


                        </div>
                    </CollapsibleRow>
                    {/* 16*/}
                    <CollapsibleRow title="16. What happens after the workshop?">
                        <div className="prose prose-lg max-w-none space-y-4 h-full ">
                            <p>Participants can continue their journey through:</p>
                            <ul className="page-content list-disc list-outside py-1 pl-5 ">
                                <a href="/resource-center/Start-Adhyayan" className="text-[#b2917a]"><li>See Recommended Next Steps - Beginners material.</li></a>
                                <li>Advanced workshops. <a href="/resource-center" className="text-[#b2917a]" >See the Study Guide here.</a> </li>
                                <li>Reading Madhyasth Darshan literature.</li>
                                <li>Staying connected with facilitators and local groups for deeper study.</li>

                            </ul>


                        </div>
                    </CollapsibleRow>
                </div>
            )}

            {activeTab === "attendance" && (
                <div>
                    <CollapsibleRow title="This workshop is for you if:">
                        <div className="prose prose-lg max-w-none space-y-4 h-full page-content ">
                            <p>You feel existing paradigms are inadequate to explain the Human Condition and/or your Questions.</p>
                            <p>You do not want an 'Authority figure' to prescribe how you should live your life. You don't want to be part of a 'following' or a 'Cult'. </p>
                            <p>You are comfortable thinking independently, being challenged and drawing conclusions from your own first-hand reasoning & experience.</p>
                            <p>You don't want to stop at 'mere intellectualisation' but pursue something that can be lived. </p>
                            <p>You are open to reflect on your own behaviors & are willing to change. Open to occasional Hindi/Sanskrit Terms</p>
                            <p>You are looking for something more than just 'relief' measures. </p>
                            <p>You (also) value Family & Relationships</p>
                            <p>You (also) want to participate in meaningful social action.</p>
                            <p>You Exist.</p>
                        </div>
                    </CollapsibleRow>
                </div>
            )}

        </div>
    );
};

export default Page;

