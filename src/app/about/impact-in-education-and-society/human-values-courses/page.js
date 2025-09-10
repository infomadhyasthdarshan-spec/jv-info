'use client'
import React from 'react';
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const VECTCourseDocument = () => {
    useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="">
      <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      {/* Header */}
      <div className=" mb-8">
        <h1 className="page-heading mb-2">In Higher Education</h1>
      </div>

      {/* Main Title */}
      <div className=" mb-6">
        <h2 className="page-small-heading mb-4">Value Education for Consciousness Transformation (VECT)</h2>
        <p className="text-orange-600 page-content font-semibold">* Also see Universal Human Values (UHV) courses in AICTE</p>
      </div>

      {/* Main Content */}
      <div className="space-y-6 page-content">
        <p className="">
          The objective of this course is to bring the context of human living into the classroom. While current 
          education is able to provide information & skills via the method of memorization & analysis, it fails to 
          touch upon the basic aspects of human living.
        </p>

        <p className="">
          It is amply clear that the current content and context of education is materialistic in nature – it 
          predominantly involves the study of the formful, material aspects of nature leading to a material 
          outcome – of a consumerist lifestyle & society. While this ensures physical comfort, it is both 
          unsatisfying to us as Humans as well as detrimental to nature.
        </p>

        <p className="">
          Fundamental aspects like understanding of the Self, understanding the nature & purpose of human 
          relationships, living in family & society, and our relationship with nature are completely ignored, or at 
          best addressed in a half hearted manner in prevalent education.
        </p>

        <p className="">
          This course aims to reduce that gap and point both students and teachers in the right direction by 
          providing them with the relevant content needed.
        </p>

        <p className="text-justify">
          This 'alternative view' of study and life can be provided to students so they may appreciate the need 
          for living with human values and human-consciousness and make efforts to study & practice the 
          same.
        </p>

        {/* Program Outline */}
        <div className="mt-8">
          <h3 className="page-small-heading mt-10 mb-4">Outline of 3 year Program in Human Values (UHVCD):</h3>
          
          <h4 className="page-common-hading mb-3">Need for the course:</h4>
          <ul className="list-disc ml-6 mb-6">
            <li>Supplement the current education with crucial inputs in Universal Human Values and Ethics 
            that is much needed to ensure all round development in students</li>
          </ul>

          <h4 className="page-common-hading mb-3">Course Objectives:</h4>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Enable a holistic & inter-connected view of Life and Living in Students.</li>
            <li>To help students understand the meaning of happiness, peace and prosperity for a human being</li>
            <li>To facilitate students in applying the understanding of harmony in existence in their lives and lead an ethical life</li>
            <li>Instill critical thinking and reasoning abilities in the students between 'Right' and 'Wrong'; 'Desirable' & 'Undesirable', etc</li>
            <li>Enable inculcation of:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Universal Human Values such as: Trust, Respect, Affection, Kindness, etc</li>
                <li>Social Character: Rightful Livelihood; Kindness in Work and Behavior, etc</li>
                <li>Ethics: Right utilization of ones body, mind & wealth.</li>
              </ul>
            </li>
            <li>Enable the living of 'Balanced Lives' by having Harmony in the four Dimensions of Individual Living:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>In Thought</li>
                <li>In Behavior</li>
                <li>In Work</li>
                <li>In Realization & Understanding</li>
              </ul>
            </li>
            <li>Ensure that students are responsible social citizens by recognizing and fulfilling their participation across:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Family</li>
                <li>Society</li>
                <li>Nation State & Inter-Nation</li>
                <li>With Nature, Natural-Systems</li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Course Outcomes */}
        <div className="mt-8">
          <h3 className="page-common-hading mb-4">Course Outcomes</h3>
          <p className="mb-4">On completion of this course, the students will be able to</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Distinguish between values and skills, "happiness" and "accumulation" of physical facilities, the Self and the Body, Intention and Competence of an individual, etc.</li>
            <li>Understand the value of harmonious relationship based on trust and respect in their life</li>
            <li>Understand the role of a human being in ensuring harmony in society and nature.</li>
            <li>Appreciate the need for 'Consciousness-development' & 'Universal Human Values and Ethics' in order to live 'Human-Consciousness'. Appreciate the need for 'Study' or 'Adhyayan' for the same.</li>
          </ol>
        </div>

        {/* Course Guidelines */}
        <div className="mt-8">
          <h3 className="page-common-hading mb-4">Course Guidelines:</h3>
          <p className="mb-4">The course content follows the guidelines mentioned below, that are in the line with those recommended by the Ministry of HRD:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Universal</strong>– with respect to time, space & individual</li>
            <li><strong>Secular</strong>– is not dependent on any caste, creed, religion or sect</li>
            <li><strong>Rational</strong>– in the sense that it appeals to human reasoning</li>
            <li><strong>Verifiable</strong> – It can be self-investigated and verified in living</li>
            <li><strong>Natural for human being</strong>– it is naturally acceptable to every human being and there is provision in nature for its fulfillment. I.e. it does not have to be imposed & is realizable.</li>
          </ul>
        </div>

        {/* Course Methodology */}
        <div className="mt-8">
          <h3 className="page-common-hading mb-4">Course Methodology:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>The methodology of this course involves a systematic and rational study of the human being vis-à-vis the rest of Existence (Nature)</li>
            <li>It is free from any dogma and sectarian value-prescriptions</li>
            <li>It is a process of guided self-investigation, and not of giving sermons. Whatever is found as truth or reality is stated as a proposal and the Students are facilitated to verify the same using a process of exploration that includes Scrutiny, Observation & Survey (<em>nirikshan, parikshan, sarvekshan</em>)</li>
            <li>This process of Exploration takes the form of a dialogue between the teacher and students to begin with, and finally within the student himself/herself.</li>
            <li>This exploration also facilitates students to evaluate their pre-conditionings and beliefs with respect of Goals of Life, Relationships, Lifestyle, Social and Ecological impact, etc.</li>
          </ul>
        </div>

        {/* Course Outline */}
        <div className="">
          <h3 className="page-common-hading mt-16 mb-6">Course Outline:</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-3">First Year</h4>
              <div className="ml-4 space-y-1">
                <p>Semester-1: Introduction to Coexistence of Living</p>
                <p>Semester-2: Basic elements in Consciousness Development, Human Values</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-3">Second year</h4>
              <div className="ml-4 space-y-1">
                <p>Semester-1: Behavior-centric Humanism & Human Values</p>
                <p>Semester-2: Spiritualism and Materialism – Coexistentialist View</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-3">Third year</h4>
              <div className="ml-4 space-y-1">
                <p>Semester-1: Behavioral Sociology & Human Values</p>
                <p>Semester-2: Cyclical Economics & Human Values</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Books */}
        <div className="">
          <h3 className="page-common-hading mt-16 mb-4">Course Books:</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">First Year:</h4>
              <p className="ml-4 text-justify">
                Introductory Collection, Adhyayan Bindu & Jeevan Vidya an Introduction: 
                <em> Parichaytmak Sankalan, Jeevan Vidya ek Parichay  </em>
                – Madhyasth Darshan, Sah-astitva-vaad (Coexistentialism) by A Nagraj, 
                Jeevan Vidya Prakashan, Amarkantak, India
              </p>
            </div>

            <div>
              <h4 className="font-bold">Second Year:</h4>
              <p className="ml-4 text-justify">
                Behavioral Humanism, Realization-centric Spiritualism & Resolution-centric Materialism: 
                <em> Vyawharatmak Janvaad, Anubhavatmak Adhyatmavaad, Samadhanaatmak Bhoutikvaad </em>
                – Madhyasth Darshan, Sah-astitva-vaad (Coexistentialism) by A Nagraj, 
                Jeevan Vidya Prakashan, Amarkantak, India
              </p>
            </div>

            <div>
              <h4 className="font-bold">Third Year:</h4>
              <p className="ml-4 text-justify">
                Behavioral Sociology, Cyclical Economics 
                <em>  Vyawharvaadi Samajshastra, Avartansheel Arthshastra </em>
                – Madhyasth Darshan Madhyasth Darshan, Sah-astitva-vaad (Coexistentialism) by A Nagraj, 
                Jeevan Vidya Prakashan, Amarkantak, India
              </p>
            </div>
          </div>
        </div>

        {/* Reference Books */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Reference Books:</h3>
          <p className="ml-4 text-justify">
            Holistic-view of Human Behavior, Human Work, Human Practice & Human Realization: 
            <em>  Vyawhaar Darshan, Abhyas Darshan, Karm Darshan, Anubhav Darshan </em>
            – by A Nagraj, Jeevan Vidya Prakashan, Amarkantak, India
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-12 pt-6 border-t border-gray-300">
          <div className="text-center space-y-2">
            <p className="page-small-heading">[ More ]</p>
            <p className="text-orange-600 page-content">Concept Note for Higher Education</p>
            <p><span className="text-orange-600 page-content">First Year Syllabus:</span> Human Values course in Higher Education</p>
            <p><span className="text-orange-600 page-content">Universal Human Values courses (UHV)</span> – experiments in professional courses</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VECTCourseDocument;