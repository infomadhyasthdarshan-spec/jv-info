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
          Allied Human Values Courses (HVPE)
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
              <span className="text-red-600  font-bold">Human Values & Ethics</span> – compulsary credit course by AICTE (All India Council for Technical Education)
            </div>
          </div>
          <div className="flex">
            <span className="mr-2">2.</span>
            <div className='page-content'>
              <span className="text-red-600 font-bold">Minor Degree in Universal Human Values</span> – by AICTE
            </div>
          </div>
          <div className="flex">
            <span className="mr-2">3.</span>
            <div className='page-content'>
              <span className="text-red-600 font-bold">Human Values in Madhyasth Darshan</span> – Elective for Engineering students at AKTU, Lucknow (formerly UPTU – UP Technical University)
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
          <div>
            • See <span className="text-red-600 underline cursor-pointer">Introductory Resources</span>
          </div>
          <div>
            • See <span className="text-red-600 underline cursor-pointer">reading articles</span> on Madhyasth Darshan Philosophy
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 mb-12 border-l-4 border-yellow-300 page-content">
        <div>• <span className="text-red-600 underline cursor-pointer">Join an online course</span></div>
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
        <li>• <span className="text-red-600 underline cursor-pointer">Bundelkhand Institute of Engineering and Technology:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Krishna University:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Punjab Technical University:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Uttar Pradesh and Punjab:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Galgotias University</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">AP Government Website:</span></li>
        <li>• <em className="text-red-600 underline cursor-pointer">ppt on AP Govt website</em></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Satavahana University:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Uttar Pradesh Technical University:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Jiwaji University, Gwalior:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Vikram Simhapuri University:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">guru gobind singh indraprasth university:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Deen Bandhu University:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Himachal Pradesh Technical University:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Shivaji UNiversity:</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">Mahamaya Technical University</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">http://uhv.org.in/rub-bhutan.php</span> (Royal University of Bhutan)</li>
        <li>• <span className="text-red-600 underline cursor-pointer">Bhutan Journal of Research & Development</span></li>
        <li>• <span className="text-red-600 underline cursor-pointer">NPTEL website at IIT Madras:</span></li>
      </ul>

      {/* References Section */}
      <h3 className="page-common-hading mb-6 ">Madhyasth Darshan references</h3>
      <p className="italic mb-6 page-content leading-7">
        <em>The above book on Universal Human Values cites the following references to Madhyasth Darshan literature:</em>
      </p>

      <ul className="mb-12 ml-8 space-y-1 page-content">
        <li>• A Nagraj, 1998, <em className="text-red-600">Jivana Vidya ek Parichaya</em>, Jivana Vidya Prakasana, Amarkantak</li>
        <li>• A Nagraj, 1998, <em className="text-red-600">Vyawharvadi Samajshastra</em> Jivana Vidya Prakasana, Amarkantak</li>
        <li>• A Nagraj, 1998, <em className="text-red-600">Avartansila Arthashastra</em> Jivana Vidya Prakasana, Amarkantak</li>
        <li>• A Nagraj, 1998, <em className="text-red-600">Manava Vyawhara Darsana</em> Jivana Vidya Prakasana, Amarkantak</li>
        <li>• A Nagraj, 1998, <em className="text-red-600">Manviya Samvidhana Sutra</em> Vyakhya Jivana Vidya Prakasana, Amarkantak</li>
      </ul>

      <div className="border-t border-dotted border-gray-500 my-10"></div>

      {/* Professional Ethics Book Section */}
      <h3 className="page-common-hading mb-6 ">*Responsibilities in the Human Values & Professional Ethics book:</h3>
      <p className="italic mb-6 page-content"><em>By RR Gaur, R Sangal & GP Bagaria, Excel Publications, Edition #1</em></p>

      <ul className="mb-8 ml-8 space-y-3 page-content">
        <li>• The essential concepts & framework in the book are based on the teachings in Jeevan Vidya – Madhyasth Darshan by <strong>Shri A Nagraj</strong></li>
        <li>• Workshop Presentation of these core-concepts by A.Nagraj in 7 day workshop format in English: <strong>GP Bagaria</strong> <em>(based on earlier efforts by Late Shri Yashpal Satya, IIT Delhi)</em></li>
        <li>• Conversion of workshop notes and writing in book form [Human Values: Section I & II]: <strong>Shriram Narasimhan</strong>, <em>with contributions by Kumar Sambhav, Anurag Sahay & Gowri Srihari (based on the workshop by GP Bagaria at IIIT Hyderabad in 2005) – For (Edition 1)</em></li>
        <li>• Writing of Section III – <strong>Kumar Sambhav and RR Gaur</strong></li>
        <li>• <strong>Miscellaneous efforts:</strong> in formatting, student activities, exercises, etc in the book: <strong>Shyam Kumar and Abhishek Kumar.</strong></li>
      </ul>

      <ul className="mb-12 ml-8 page-content">
        <li>• <em>*Edition 2 of this book has been rewritten by the stated authors (Gaur, Asthana, Bagaria) since Edition 1 did not authentically portray authorship;</em></li>
      </ul>

      <div className="border-t border-dotted border-gray-500 my-10"></div>

      {/* Conventions Section */}
      <h3 className="page-common-hading mb-6 ">National, International Conventions:</h3>

      <div className="mb-12  ">
        <p className="font-bold mb-4 page-content"><strong>At IIT Delhi:</strong> A National Convention on 'Human Values through Jeevan Vidya' was conducted at IIT Delhi in association with IIT Kanpur and IIIT Hyderabad. This was attended by 70 vice-chancellors and directors including directors of these 3 institutes and inaugurated by the then President, APJ Abdul Kalam. Mr Kalam mentioned Jeevan Vidya as a 'crucial input in education' in his <em>address to the nation</em> on 15<sup>th</sup> August, 2006. See</p>
        <p className="mb-2 ml-4 page-content">
          <span className="text-red-600 underline cursor-pointer">www.iitk.ac.in/infocell/announce/ncvejv/content.htm</span> for details and
        </p>
        <p className="mb-8 ml-4 page-content">
          <span className="text-red-600 underline cursor-pointer">http://nrcvee.iitd.ac.in/activities/specials.html</span>
        </p>
      </div>

      <div className="border-t border-dotted border-gray-500 my-10"></div>

      {/* Also See Section */}
      <h3 className="page-common-hading mb-6 ">[ Also See ]</h3>
      <ul className="ml-4 page-content">
        <li>• <span className="text-red-600 underline cursor-pointer">Our current impact</span> in Education</li>
      </ul>
    </div>
  );
};

export default HVPEDocument;