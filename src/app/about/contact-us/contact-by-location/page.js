"use client"
import { useState } from "react";
import { Mail, Phone, User, MapPin, X, ChevronDown } from "lucide-react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';

const allStates = [
    {
        state: "Andhra Pradesh",
        contacts: [
            {
                city: "Hyderabad (IIIT)",
                name: "Pradeep R",
                phone: "9391131199",
                email: "ramancharla AT iiit.ac.in",
            },
        ],
    },
    {
        state: "Chhattisgarh",
        contacts: [
            {
                city: "Raipur",
                name: "Surendra Pal",
                phone: "9725025307",
                email: "surendrapal@hotmail.com",
            },
            {
                city: "Achoti",
                name: "Chandrashekhar",
                phone: "9893013341",
                email: "rathore.civil@gmail.com",
            },
        ],
    },
    {
        state: "Gujarat",
        contacts: [
            {
                city: "Ahmedabad",
                name: "Suresh Patel",
                phone: "9727682693",
                email: "sureshbhaipatel AT yahoo.com",
            },
            {
                city: "Surat",
                name: "Ajay Jain",
                phone: "9824304935",
                email: "akj01936 AT yahoo.com",
            },
        ],
    },
    {
        state: "Karnataka",
        contacts: [
            {
                city: "Bangalore",
                name: "Rakesh Gupta",
                phone: "9611509219",
                email: "rakesh2715 AT gmail DOT com",
            },
            {
                city: "Vijaypura (Bijapur)",
                name: "Sanjeev Patil",
                phone: "9448231960",
                email: "tarangscientificinstruments@gmail.com",
            },
        ],
    },
    {
        state: "Madhya Pradesh",
        contacts: [
            {
                city: "Amarkantak",
                name: "Sharada Amba",
                phone: "9425344128",
            },
            {
                city: "Indore",
                name: "Anand Dammani",
                phone: "9770127272",
                email: "anand@galaxyweblinks.com",
            },
        ],
    },
    {
        state: "Maharashtra",
        contacts: [
            {
                city: "Pune",
                name: "Shriram Narasimhan",
                phone: "9907794154",
                email: "zshriram@gmail.com",
            },
            {
                city: "Pune",
                name: "Suvarna Shastri",
                phone: "9630300787",
            },
            {
                city: "Buldhana",
                name: "Sachin Mote",
                phone: "9404508107",
            },
            {
                city: "Mumbai",
                name: "Mangesh Shastri",
                phone: "9821046342",
            },
            {
                city: "Chandrapur",
                name: "Uddhav Rathod",
                phone: "9158033290",
            },
            {
                city: "Yeotmal",
                name: "Rahul Tayde",
                phone: "9860774810",
            },
            {
                city: "Akola",
                name: "Rekha Raut",
                phone: "9850156255",
            },
            {
                city: "Aurangabad",
                name: "Radheshyam",
                phone: "8888855410",
            },
            {
                city: "Nagpur",
                name: "Shalini Arora",
                phone: "9422805479",
            },
        ],
    },
    {
        state: "NCR Delhi",
        contacts: [
            {
                city: "New Delhi",
                name: "Sanjeev Chopra",
                phone: "9811141311",
            },
            {
                city: "Gurugram",
                name: "Kumar Sambhav",
                phone: "9455680200",
                email: "kumarms3@gmail.com",
            },
        ],
    },
    {
        state: "Odisha",
        contacts: [
            {
                city: "Bargarh",
                name: "Gopal Agrawal",
                phone: "9437052360",
                email: " gopal_bgh@yahoo.com",
            },
        ],
    },
    {
        state: "Rajasthan",
        contacts: [
            {
                city: "Sardar Shahar",
                name: "Himansu Dugar",
                phone: "9602411441",
                email: "hdugar1@rediffmail.com",
            },
            {
                city: "Bhilwara",
                name: "Aniruddh Vaishnav",
                phone: "9461263130",
            },
        ],
    },
    {
        state: "Tamil Nadu",
        contacts: [
            {
                city: "Chennai",
                name: "Thirumalai",
                phone: "9884962533",
                email: "thirumalairaja@gmail.com",
            },
        ],
    },
    {
        state: "Uttar Pradesh",
        contacts: [
            {
                city: "Kanpur",
                name: "Shyam Kumar",
                phone: "9450342998",
                email: "shyamk707@gmail.com",
            },
            {
                city: "Bijnore",
                name: "Ransingh Arya",
                phone: "9412218178",
                email: "msyatra AT gmail.com",
            },
            {
                city: "Hapud",
                name: "Ransingh Arya",
                phone: "9412218178",
                email: "schopra45@yahoo.com",
            },
            {
                city: "Banda",
                name: "Prem Singh",
                phone: "9415557444",
            },
        ],
    },
    {
        state: "Bihar",
        contacts: [
            {
                city: "Patna (NIT)",
                name: "Yogesh",
                phone: "9410478242",
                email: "yogesh.me@nitp.ac.in",
            },
        ],
    },
    {
        state: "Jharkhand",
        contacts: [
            {
                city: "Deoghar",
                name: "Ramashankar",
                phone: "9110935465",
            },
        ],
    },
    {
        state: "Canada",
        contacts: [
            {
                city: "Ontario",
                name: "Mahendra & Naomi",
                phone: "+18185338268",
            },
        ],
    },
];

function ContactLocation() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedStates, setSelectedStates] = useState([]);

    const toggleState = (state) => {
        setSelectedStates((prev) =>
            prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
        );
    };

    const filteredData =
        selectedStates.length === 0
            ? allStates
            : allStates.filter((s) => selectedStates.includes(s.state));
  useEffect(() => {
    wrapHindiWords ();
  }, []);
    return (
        <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto relative flex flex-col px-3">
            <div>
                {/* Heading */}
                <h1 className="text-2xl font-bold mb-4 font-ssr">
                    Contacts by Location
                </h1>

                {/* Custom Dropdown Button */}
                <div className="relative w-full max-w-[359px]">
                    <button
                        onClick={() => setShowDropdown(true)}
                        className="flex items-center w-full h-[54px] px-4 py-2 rounded-xl bg-white shadow justify-between  "
                    >
                        <div className="flex items-center gap-2">
                            <MapPin size={20} />
                            Choose a Location
                        </div>
                        <ChevronDown size={20} />
                    </button>

                    {showDropdown && (
                        <>
                            {/* Overlay for Both Mobile and Desktop */}
                            <div
                                className="fixed inset-0 bg-gray-900/60 transition-opacity duration-300 ease-in-out z-10"
                                onClick={() => setShowDropdown(false)}
                            ></div>

                            {/* Dropdown Content */}
                            <div
                                className="fixed bottom-0 left-0 w-full max-h-[80vh] bg-white rounded-t-xl shadow-lg z-20 p-4 transform transition-all duration-300 ease-in-out"
                                style={{
                                    transform: showDropdown ? "translateY(0)" : "translateY(100%)",
                                }}
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <button onClick={() => setShowDropdown(false)}>
                                        <X className=" " />
                                    </button>
                                    <span className="text-center font-semibold   flex-1">
                                        Choose a location
                                    </span>
                                </div>

                                {/* Checkboxes */}
                                <div className="overflow-auto space-y-4">
                                    {allStates.map((item, i) => (
                                        <label
                                            key={i}
                                            className="flex items-center gap-3  "
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedStates.includes(item.state)}
                                                onChange={() => toggleState(item.state)}
                                                className="w-4 h-4 text-blue-500"
                                            />
                                            {item.state}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Filtered Contacts */}
                <div className="mt-6">
                    {filteredData.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white w-full rounded-xl shadow mb-6 p-4"
                        >
                            <h2 className="text-[#AD825F] font-semibold text-lg flex items-center mb-4">
                                <MapPin className="mr-2 text-black" size={24} />
                                {section.state}
                            </h2>

                            {section.contacts.map((c, i) => (
                                <div
                                    key={i}
                                    className="bg-[#F5F6F8] w-full rounded-xl mb-4 p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between md:h-[116px]"
                                >
                                    {/* Mobile View */}
                                    <div className="md:hidden flex flex-col w-full">
                                        <div className="font-semibold text-[15px] mb-1">
                                            {c.city}
                                        </div>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <User className="  w-6 h-6" />
                                                <span>{c.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Phone className="  w-6 h-6" />
                                                <span>{c.phone}</span>
                                            </div>
                                        </div>
                                        {c.email && (
                                            <div className="flex items-center gap-2 text-sm">
                                                <Mail className="  w-6 h-6" />
                                                <span>{c.email}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Desktop View */}
                                    <div className="hidden md:flex md:flex-col md:w-full">
                                        <div className="font-semibold mb-1 text-[15px]">
                                            {c.city}
                                        </div>
                                        <div className="flex gap-10 text-sm mt-1 mb-2">
                                            <div className="flex items-center gap-2">
                                                <User className="  w-6 h-6 mt-2" />
                                                <span className="mt-2">{c.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="  w-6 h-6 mt-2" />
                                                <span className="mt-2">{c.phone}</span>
                                            </div>
                                            {c.email && (
                                                <div className="flex items-center gap-2">
                                                    <Mail className="  w-6 h-6 mt-2" />
                                                    <span className="mt-2">{c.email}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactLocation;