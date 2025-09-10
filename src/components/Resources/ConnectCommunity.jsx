import React, { useState } from "react";

const ConnectCommunity = () => {
    const sections = [
        {
            title: "WhatsApp / Telegram Groups",
            items: [
                "1. Shivir Announcements ONLY Community (WhatsApp)",
                "2. Parivar Sabha - general WhatsApp forum",
                "3. 'Jeevan Vidya Parivar' General WhatsApp",
                "4. Production & Exchange WhatsApp",
                "5. Women's Group - 'Stushi' - WhatsApp",
                "6. अध्ययन Q&A discussions - Telegram",
                "7. English Translations - Telegram",
                "8. Regional WhatsApp Groups:",
                "  a. Abhyuday Sansthan, Raipur (CG) Updates",
                "  b. Deogarh - Jharkhand Study Circle",
                "9. School Curriculum & textbooks development group - contact Chani: 96913.52929, chani.chawda@gmail.com"
            ],
        },
        {
            title: "Regional YouTube Channels",
            items: [
                "V Connect - Abhyuday Sansthan, Raipur Achoti",
                "Delhi NCR",
                "Deogarh, Jharkhand",
                "Bhilwara, Rajasthan",
                "Visnagar, Gujarat",
                "Ahmedabad, Gujarat",
                "Yavatmal, Maharashtra",
                "Happiness DoE, Delhi Govt",
                "Atmiya University, Rajkot"
            ],
        },
        {
            title: "Facebook",
            items: [
                "Jeevan Vidya Connect @ Abhyuday Sansthan, Achoti (Raipur, CG)",
                "Abhibhavak Vidyalaya - Grade 1 to 10 school @ abhyuday sansthan, achoti",
                "Abhibhavak Vidyalaya - Grade 1 to 5 school in Raipur",
                "Adhyayan Shivir Information @ Abhyuday Sansthan, Achoti"
            ],
        },
        {
            title: "Our Centers",
            items: [
                "Achoti, Raipur, CG (Abhyuday Sansthan) / Contact - Chandrashekhar / rathore.civil@gmail.com / 98930-25307",
                "Bemetara, (Manav Teerth) CG / Contact - Vinayak / 88269-39310",
                "Hapud, NCR Delhi (Abhyuday Sansthan) / Contact - Sanjeev / 88826-27996",
                "Bijnor, UP (Jeevan Vidya Pratishthan) / Contact - Ransinh / 94122-18178",
                "Raipur School, CG (Abhibhavak Vidylaya) / Contact - Anita / 90097-78000",
                "Kanpur UP / Contact - Shyam Kumar / shyamk707@gmail.com / 9450342998",
                "* For individual contacts in all locations across India see here"
            ],
            about: [

                "Over the past 25 years, a number of people from different backgrounds have come in touch with Madhyasth Darshan and are sincerely involved in understanding, living and sharing this work. A few people have come together at various places to establish ‘dedicated locations’.",
                "       1.Introduction Centers: For the introduction to 'Jeevan Vidya' & its concepts.",
                "       2.Study Locations: For formal study of the literature, practice in living & related research work.",
                "These locations are self-funded and people at these places look after their own needs via various means including agriculture, dairy and production.",
                "There is no central structure, funding, membership or hierarchies. Anyone is free to start their own location.",

            ]
        },
        {
            title: "Products / Volunteer / Contacts",
            items: [
                "Products fair exchange platform. Utsav.earth -",
                "Volunteer! - Contribute your time & Efforts!",
                "Meet someone!: City wise Contacts"
            ],
        },

    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto p-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">
                Connect To Community
            </h2>

            <div className="space-y-6">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-[#C1B6A3] rounded-[16px] overflow-hidden"
                    >
                        <button
                            onClick={() => toggleSection(index)}
                            className="w-full bg-[#C1B6A3] text-white px-5 py-4 font-semibold border-b border-[#F2F4F8] flex justify-between items-center"
                        >
                            <span>{section.title}</span>
                            <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="bg-white">
                                {/* Items list */}
                                {section.items?.length > 0 && (
                                    <ul className="divide-y divide-gray-300">
                                        {section.items.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center justify-between px-5 py-4"
                                            >
                                                <span className="text-[15px] font-[500]  ">
                                                    {item}
                                                </span>
                                                <img
                                                    src="/arrow-forward.png"
                                                    alt="Arrow Icon"
                                                    className="w-5 h-5 object-contain"
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {/* About section as paragraph */}
                                {section.about && (
                                    <>
                                        <h1 className="px-5 py-4 space-y-3 font-bold text-[26px]">About our Centers</h1>
                                        <h1 className="px-5 py-4 space-y-3 text-red-400 text-[16px] text-center">*See 'MCVK Indore' Caution Note</h1>
                                        <div className="px-5 py-4 space-y-3">
                                            {section.about.map((para, idx) => (
                                                <p
                                                    key={idx}
                                                    className="text-[15px]   leading-relaxed"
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                        <h1 className="px-5 py-2 space-y-1
                                       font-bold text-red-400 text-[16px]">* See Important Note on Centers</h1>

                                    </>

                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConnectCommunity;
