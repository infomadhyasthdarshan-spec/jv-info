'use client'
import React from 'react';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const HVPEDocument = () => {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      {/* Header */}
      <div className=" mb-12">
        <h1 className="page-heading tracking-wide">
          Allied Human Values Courses 
        </h1>
      </div>

      {/* Main Title */}
      <h2 className=" mb-6 page-small-heading">
        Human Values Programs on the basis of Coexistential Philosophy
      </h2>

      {/* Subtitle */}
      <p className="text-right page-content italic mb-8  font-semibold">(Jeevan Vidya)</p>

      {/* Introduction */}
      <p className="mb-8 page-content">
        The following Government approved programs are currently running in Higher Education across India:
      </p>

      {/* Programs List */}
      <div className="mb-8 ml-8">
        <div className="space-y-4">
          <div className="flex">
            <span className="mr-2">1.</span>
            <div className='page-content'>
              <span className="a  font-bold">Human Values & Ethics</span> – compulsary credit course by AICTE (All India Council for Technical Education)
            </div>
          </div>
          <div className="flex">
            <span className="mr-2">2.</span>
            <div className='page-content'>
              <span className="a font-bold">Minor Degree in Universal Human Values</span> – by AICTE
            </div>
          </div>
          <div className="flex">
            <span className="mr-2">3.</span>
            <div className='page-content'>
              <span className="a font-bold">Human Values in Madhyasth Darshan</span> – Elective for Engineering students at AKTU, Lucknow (formerly UPTU – UP Technical University)
            </div>
          </div>
        </div>
      </div>

      {/* UHV Note */}
      <p className="mb-8 page-content">
        The above courses go by the name <strong>"UHV – or Universal Human Values"</strong>
      </p>

      {/* Emphasis Note */}
      <p className="mb-10 italic page-content">
        <em>Deeper understanding of the content requires a systematic introduction via the 'Jeevan Vidya workshop' and long-term commitment to understanding Madhyasth Darshan.</em>
      </p>

      {/* Resources Section */}
      <div className="bg-yellow-100 p-4 mb-4 border-l-4 border-yellow-300 page-content">
        <div className="space-y-2">
          <a href="/resource-center/Start-Adhyayan/after-parichay-en/">
            • See <span className="text-[#b2917a] underline cursor-pointer">Introductory Resources</span>
          </a><br/>
          <a href="/philosophy/explore-concepts/">
            • See <span className="text-[#b2917a] underline cursor-pointer">reading articles</span> on Madhyasth Darshan Philosophy
          </a>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 mb-12 border-l-4 border-yellow-300 page-content">
        <a href="/resource-center/watch-audio-video/">• <span className="text-[#b2917a] underline cursor-pointer">Join an online course</span></a>
      </div>

      <div className="border-t border-dotted border-gray-500 my-8"></div>

      {/* Textbooks Section */}
      <p className="mb-8 page-content ">
        <strong>Textbooks books under the topic – Values, Ethics and Holistic Living</strong> <em>(based on Coexistential Philosophy)</em> <strong>are under development. It is envisioned that textbooks shall be written to complete the UHV vision by AICTE (UHV I to UHV VIII)</strong>
      </p>

      {/* Graduate Attributes */}
      <h3 className="page-common-hading mb-6 ">* Graduate Attributes of UHV Minor Degree by AICTE</h3>
      <ul className="mb-10 ml-8 space-y-2 page-content">
        <li>• Holistic vision of life</li>
        <li>• Socially responsible behaviour</li>
        <li>• Environmentally responsible work</li>
        <li>• Ethical human conduct</li>
        <li>• Having competence and capabilities for maintaining health and hygiene</li>
        <li>• Appreciation and aspiration for excellence (merit) and gratitude for all</li>
      </ul>

      <div className="border-t border-dotted border-gray-500 my-8"></div>

      {/* Syllabus Section */}
      <h3 className="page-common-hading mb-6">Human Values & Ethics Syllabus links at some University sites:</h3>
      <p className="italic mb-8 page-content">
        (syllabus based on Jeevan Vidya, Madhyasth Darshan philosophy by Shri A Nagraj)
      </p>

      {/* Universities List */}
      <ul className="mb-12 ml-6 space-y-1 page-content">
        <li>• <a href="https://bietjhs.ac.in/pdf/human_values.pdf" className="text-[#b2917a] underline cursor-pointer">Bundelkhand Institute of Engineering and Technology:</a></li>
        <li>• <a href="http://www.krishnauniversity.ac.in/examportal/Syllabus/2012-13/UG%20SYLLABUS/UG%20HUMAN%20VALUES%20&%20PROF%20ETHICS%20SYL%20&%20MODEL%20QPS.pdf" className="text-[#b2917a] underline cursor-pointer">Krishna University:</a></li>
        <li>• <a href="https://ptu.ac.in/userfiles/file/syllabus/Management/B-Com/B_Com_Batch2011%20upload%20on%2027_05_13.pdf" className="text-[#b2917a] underline cursor-pointer">Punjab Technical University:</a></li>
        <li>• <a href="http://www.uhv.ac.in/index.php?show=examsyllabus" className="text-[#b2917a] underline cursor-pointer">Uttar Pradesh and Punjab:</a></li>
        <li>• <a href="https://sites.google.com/a/galgotiasuniversity.edu.in/uhve/syllabus" className="text-[#b2917a] underline cursor-pointer">Galgotias University</a></li>
        <li>• <a href="https://apcce.gov.in/veldata/HVPE%20Syllabus%20of%20Ist%20Year%20&%20IInd%20Year%20Degree%20Students.pdf" className="text-[#b2917a] underline cursor-pointer">AP Government Website:</a></li>
        <li>•<a href="https://madhyasth-darshan.info/program/efforts-in-education/human-values-courses-2/www.che.ap.gov.in/veldata/pptlessons/HVPE0.1Need.ppt" className="text-[#b2917a] underline cursor-pointer">ppt on AP Govt website</a></li>
        <li>• <a href="http://satavahanaonline.com/PDFs/Human%20Values%20and%20Professional%20Ethics.pdf" className="text-[#b2917a] underline cursor-pointer">Satavahana University:</a></li>
        <li>• <a href="http://www.uptu.ac.in/academics/syllabus/human_values_professional_ethics.pdf" className="text-[#b2917a] underline cursor-pointer">Uttar Pradesh Technical University:</a></li>
        <li>• <a href="https://www.jiwaji.edu/pdf/syllabus/2014/%2821%29%20B%20B%20A%20-%20II%20Sem.%20Exam.%20May-June%20-%202014.pdf" className="text-[#b2917a] underline cursor-pointer">Jiwaji University, Gwalior:</a></li>
        <li>• <a href="https://www.madhyasth-darshan.info/program/efforts-in-education/human-values-courses-2/%20http:/www.simhapuriuniv.ac.in/downloads/HVA.pdf" className="text-[#b2917a] underline cursor-pointer">Vikram Simhapuri University:</a></li>
        <li>• <a href="http://ipu.ac.in/uset/propsyll230413.pdf" className="text-[#b2917a] underline cursor-pointer">guru gobind singh indraprasth university:</a></li>
        <li>• <a href="https://www.dcrustm.ac.in/wp-content/uploads/2014/08/BCA-3-yrs-Undergraduate.pdf" className="text-[#b2917a] underline cursor-pointer">Deen Bandhu University:</a></li>
        <li>• <a href="https://www.himtu.ac.in/pdf/syllabus/AYURVEDIC-Pharmacy-Syllabus-HPTU.pdf" className="text-[#b2917a] underline cursor-pointer">Himachal Pradesh Technical University:</a></li>
        <li>• <a href="https://www.unishivaji.ac.in/syllabus/engineering/be/b.e/b.e.mech%202%20syl%202010-11.pdf" className="text-[#b2917a] underline cursor-pointer">Shivaji UNiversity:</a></li>
        <li>• <a href="https://www.rkgit.edu.in/mba/MBA%20Syllabus%20III%20&%20IV%20Semester%202013-14.pdf" className="text-[#b2917a] underline cursor-pointer">Mahamaya Technical University</a></li>
        <li>• <a href="" className="text-[#b2917a] underline cursor-pointer">http://uhv.org.in/rub-bhutan.php</a> (Royal University of Bhutan)</li>
        <li>• <a href="" className="text-[#b2917a] underline cursor-pointer">Bhutan Journal of Research & Development</a></li>
        <li>• <a href="https://nptel.ac.in/courses/109104068/36" className="text-[#b2917a] underline cursor-pointer">NPTEL website at IIT Madras:</a></li>
      </ul>

      {/* References Section */}
      <h3 className="page-common-hading mb-6 ">Madhyasth Darshan references</h3>
      <p className="italic mb-6 page-content leading-7">
        <em>The above book on Universal Human Values cites the following references to Madhyasth Darshan literature:</em>
      </p>

      <ul className="mb-12 ml-8 space-y-1 page-content">
        <li>• A Nagraj, 1998, <em className="">Jivana Vidya ek Parichaya</em>, Jivana Vidya Prakasana, Amarkantak</li>
        <li>• A Nagraj, 1998, <em className="">Vyawharvadi Samajshastra</em> Jivana Vidya Prakasana, Amarkantak</li>
        <li>• A Nagraj, 1998, <em className="">Avartansila Arthashastra</em> Jivana Vidya Prakasana, Amarkantak</li>
        <li>• A Nagraj, 1998, <em className="">Manava Vyawhara Darsana</em> Jivana Vidya Prakasana, Amarkantak</li>
        <li>• A Nagraj, 1998, <em className="">Manviya Samvidhana Sutra</em> Vyakhya Jivana Vidya Prakasana, Amarkantak</li>
      </ul>


     

      <div className="border-t border-dotted border-gray-500 my-10"></div>

      {/* Conventions Section */}
      <h3 className="page-common-hading mb-6 ">National, International Conventions:</h3>

      <div className="mb-12  ">
        <p className="font-bold mb-4 page-content"><strong>At IIT Delhi:</strong> A National Convention on 'Human Values through Jeevan Vidya' was conducted at IIT Delhi in association with IIT Kanpur and IIIT Hyderabad. This was attended by 70 vice-chancellors and directors including directors of these 3 institutes and inaugurated by the then President, APJ Abdul Kalam. Mr Kalam mentioned Jeevan Vidya as a 'crucial input in education' in his <em>address to the nation</em> on 15<sup>th</sup> August, 2006. See</p>
        <p className="mb-2 ml-4 page-content">
          <span className="text-[#b2917a] underline cursor-pointer">www.iitk.ac.in/infocell/announce/ncvejv/content.htm</span> for details and
        </p>
        <p className="mb-8 ml-4 page-content">
          <span className="text-[#b2917a] underline cursor-pointer">http://nrcvee.iitd.ac.in/activities/specials.html</span>
        </p>
      </div>

   

      {/* Also See Section */}
      {/* <h3 className="page-common-hading mb-6 ">[ Also See ]</h3>
      <ul className="ml-4 page-content">
        <li>• <span className="text-red-600 underline cursor-pointer">Our current impact</span> in Education</li>
      </ul> */}
    </div>
  );
};

export default HVPEDocument;
