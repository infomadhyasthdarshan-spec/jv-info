"use client"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
export default function Login() {
    const router = useRouter();
      useEffect(() => {
    wrapHindiWords ();
  }, []);
    return (
        <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto bg-gray-100 px-3">
            <div className="mx-auto py-8 space-y-8">
                {/* Header */}
                <div className="">
                    <h1 className="page-heading  ">Important note on 'Centers'</h1>
                </div>

                {/* MCVK Indore Caution Note */}
                <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm" onClick={() => router.push('/about/our-centers/important-note/adhyayan-center-indore-mp')}>
                    <span className="text-[#ff2929] page-common-hading">"MCVK Indore" Caution Note</span>
                    <ArrowRight className="w-5 h-5  " />
                </div>

                {/* Basis for listing section */}
                <div className="">
                    <h2 className="page-small-heading  mb-4">Basis for listing a 'recommended center'</h2>
                    <p className="page-content leading-relaxed mb-4">
                        Anyone that came in touch with (late) Shri A.Nagraj and/or Madhyasth Darshan literature is free to 'teach'
                        or start a 'center' institution, etc using the Madhyasth Darshan tag. There is no 'granting agency' that
                        permits or validates a center.
                    </p>
                    <p className="page-content leading-relaxed">
                        The 'centers' or locations must ideally have certain characteristics in line with Madhyasth Darshan
                        teachings.
                    </p>
                </div>

                {/* How 'we' Function section */}
                <div className="">
                    <h2 className="page-small-heading   mb-4">How 'we' Function</h2>
                    <p className="page-content mb-4">
                        Jeevan Vidya, Madhyasth Darshan does not have a 'central committee' of any kind and follows a broad,
                        decentralized model that is mutually cooperative. Individuals /Families living at a location are responsible
                        for their own decisions. They are not 'monitored' by any 'outside group'. Individuals & Families from across
                        the Country have taken up certain responsibilities of their own accord (such as website, sms, printing,
                        distribution, sammelan, textbooks, research work, translations etc) & carry them out in consultation with
                        other friends.
                    </p>
                    <p className="page-content mb-4">
                        Those that have been with this darshan since a long time periodically come together as various assemblies
                        (सभा) & share their common concerns in various platforms/groups. The discussions/ decisions in such 'sabhas'
                        are reflections of the individual understanding (समझ), perspectives (दृष्टि) & discrimination (विवेक) of its
                        participants.
                    </p>
                    <p className="page-content">
                        Members thus join the activities /groups they agree with or are interested in and this is how 'things get
                        done'.
                    </p>
                </div>

                {/* Family based Village Organisation - Highlighted Section */}
                <div className="bg-[#ede2d1] p-6 rounded-xl page-quotes">
                    <p className="page-heading text-center">~</p>
                    <p className="text-[#32373b] leading-relaxed mb-4">
                        The final proposed method of working is{" "}
                        <span className="font-semibold italic">Family based Village Organisation</span>
                        (पारिवार आधारित ग्राम व्यवस्था संस्थान) in which assembly-committees or 'sabhas' consist of awakened individuals
                        (जागृत व्यक्ति). Till such time, each location/center functions based on its understanding & practice which are
                        a reflection of its inhabitants, which are constantly evolving.
                    </p>
                    <p className="text-[#32373b] leading-relaxed mb-4">
                        People from these locations meet periodically to share their individual and collective progress at goshtis
                        and the rashtriya sammelan (national confluence).
                    </p>
                    <p className="text-[#32373b] leading-relaxed font-bold italic text-center">All this put together is 'we'.</p>
                                        <p className="page-heading text-center">~</p>

                </div>

                {/* Importance of Stable Reference section */}
                <div className="">
                    <h2 className="page-small-heading   mb-4">Importance of "Stable Reference" for the student</h2>
                    <p className="page-content mb-4">
                        We recommend that the serious student keep the Original Works of Shri A.Nagraj as the reference baseline for
                        their study. Any 'center' or location exists to only facilitate a student/aspirants study and provide a
                        space for them to learn & practice.
                    </p>
                    <p className="page-content mb-4">
                        It thus becomes imperative to choose the 'appropriate person & place' to further one's study.
                    </p>
                    <p className="page-content mb-4">
                        An in-person survey of the locations below is highly recommended before one finalizes a place to pursue ones
                        study or stay. It is important to keep in mind the Method of Study (अध्ययन विधि).
                    </p>
                    <p className="page-content">
                        This is so until such time that a few of us do not become full realized (in developed consciousness)
                        ourselves. ऐसे में अधिकांश लोग निश्चित मध्यस्थ दर्शन के इस पूरे की व्यापकताओं को निश्चित मध्यस्थ दर्शन के आधार रहेंगे। जागृति की
                        पहचान मध्यस्थ दर्शन आधार, प्रमाण मानकर रहेंगे। इससे ही निश्चित दर्शन रहने वाले हैं।
                    </p>
                </div>

                {/* Footer */}
                <div className="">
                    <p className="page-content  ">Page last updated by Shriram Narasimhan on 11 Aug 2020, 01.01.2023</p>
                </div>
            </div>
        </div>
    )
}
