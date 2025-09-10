import React from "react";
import Image from 'next/image'

const Footer1 = () => {
    return (
        <footer className="bg-[#58504b] text-white px-5 py-8 text-sm">
            {/* Logo + Tagline */}
            <div className="mb-6">
                <div className="flex items-center gap-2">
                    <Image src="/logo/LogoWhite.svg" width={50} height={50} alt="Logo" />
                    <p className="font-semibold">Madhyasth Darshan</p>
                </div>
                <p className="italic   text-xs mt-1">
                    "May Knowledge & Goodness prevail"
                </p>
            </div>

            {/* Quick Links + Attend side by side */}
            <div className="flex justify-between mb-6">
                {/* Quick Links */}
                <div>
                    <h4 className="font-bold mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-gray-100">
                        <li><a href="#">Original Books</a></li>
                        <li><a href="#">Print Copies</a></li>
                        <li><a href="#">Audio</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">All resources</a></li>
                    </ul>
                </div>

                {/* Attend */}
                <div>
                    <h4 className="font-bold mb-2">Attend</h4>
                    <ul className="space-y-1 text-gray-100">
                        <li><a href="#">Workshop Schedule</a></li>
                        <li><a href="#">Print Copies</a></li>
                        <li><a href="#">Audio</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">All resources</a></li>
                    </ul>
                </div>
            </div>

            {/* Connect section */}
            <div className="mb-6">
                <h4 className="font-bold mb-2">Connect</h4>
                <ul className="space-y-1 text-gray-100">
                    <li><a href="#">Get Notifications</a></li>
                    <li><a href="#">Join Groups</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Our Locations</a></li>
                    <li><a href="#">Volunteer</a></li>
                </ul>
            </div>

            {/* Download App section */}
            <div className="mb-6">
                <p className="  mb-2">
                    Download the JVidya mobile app for schedule<br />and latest updates
                </p>
                <button className="bg-white text-[#58504b] font-semibold py-2 w-2/3 rounded shadow">
                    Download the Jvidya App
                </button>
            </div>

            {/* Divider */}
            <hr className="border-gray-500 mb-4" />

            {/* Bottom text */}
            <p className="  text-[13px] mb-2">
                Jeevan Vidya has no interest in religion,<br />politics or money.
            </p>
            <p className="  text-[13px]">
                Site Terms & Responsibilities
            </p>
        </footer>
    );
};

export default Footer1;
