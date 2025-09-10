import React from "react";

export default function AlternativeSchool() {
  return (
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="page-heading mb-4 border-b pb-2">
          Alternative Schools
        </h2>
        <h1 className="page-small-heading mb-6">
          Steps towards a new, Alternative Education
        </h1>

        <h3 className="page-common-hading mt-10 mb-3">About</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <ul className="list-disc pl-6 flex-1 space-y-2 page-content">
            <li>
              A primary school that aims to provide entire education in the
              light of Madhyasth Darshan – Coexistentialism has been started at
              VIP Road, Raipur and at Achotis Village, Durg called “Abhibhavak
              Vidyalay” or “Guardians School”.
            </li>
            <li>
              The schools currently have about 200 students from grades 1 to 10.
              Work is underway to have a school upto class 12.
            </li>
            <li>
              It puts understanding ourselves, our lives, understanding reality,
              human relationships, and human purpose above the current emphasis
              on rote-learning, gathering information and skills.
            </li>
            <li>
              The foundation will be on the basis of the understanding of
              reality on the basis of Madhyasth Darshan, while all the currently
              prevalent subjects will be taught in this light.
            </li>
            <li className="font-bold">
              The teachers do not draw any “salary” for teaching or sharing this
              knowledge.
            </li>
          </ul>

          <img
            src="https://madhyasth-darshan.info/wp-content/uploads/2015/02/abhibhavak-vidyalaya-CVMS-schools-img1-768x513.jpg"
            alt="School"
            className="w-72 rounded shadow"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <p className="mb-4 page-content">
          <span className="font-bold">Contact:</span> Chani Chawda:{" "}
          <a href="mailto:chani.chawda@gmail.com" className="text-red-500">
            chani.chawda@gmail.com
          </a>
          , 96913-52929 | Anita Shah at 90097-78000 for details.
        </p>

        <h3 className="page-common-hading mt-16 mb-3">Note from the Teachers</h3>
        <p className="mb-4 page-content">
          Abhibhavak vidyalaya (Guardians school) is an earnest effort by
          parents and teachers to provide value education for consciousness
          development of the child. The objective of education is to make every
          child capable of living with coherence in all dimensions, be it
          realization, thought process, behaviour or occupation and at all
          levels i.e. individual, family, society, nation and inter-nation.
        </p>

        <img
          src="https://madhyasth-darshan.info/wp-content/uploads/2015/02/abhibhavak-vidyalaya-CVMS-schools-img2-768x515.jpg"
          alt="Children"
          className="w-full md:w-2/3 rounded shadow"
        />
      </section>

      {/* Section 3 */}
      <section>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 space-y-3 page-content">
            <p>
              The responsibility to make the study successful lies with
              teachers, parents, education-content and education-procedure
              because these four are complementary. When teachers, parents and
              education system are in congruence only then it becomes possible
              to develop successful teaching methodologies by which the path of
              gratitude and co-existence gets paved.
            </p>
            <p>
              Every human being wants to live with harmony from within and
              outside. This, in our belief, can only be achieved if the child
              becomes proficient in knowledge, skill and behaviour as it leads
              to orderliness in one’s living.
            </p>
            <p>
              It’s a step-by-step procedure which begins with identifying each
              and every relation and addressing them correctly, then identifying
              the values inherent in each relation for mutual fulfillment.
            </p>
            <p>
              Whether we are learning different languages, mathematics, science,
              social science or any other subject, the goal of every human being
              is to live with resolution, prosperity, fearlessness and
              co-existence.
            </p>
          </div>

          <img
            src="https://madhyasth-darshan.info/wp-content/uploads/2015/02/abhibhavak-vidyalaya-CVMS-schools-img3-300x198.jpg"
            alt="School Building"
            className="w-72 rounded shadow"
          />
        </div>

        <p className="mt-6 page-content">
          Education related <span className="text-red-600 font-semibold">resources</span> (textbooks, guidelines, etc)
        </p>
      </section>
    </div>
  );
}
