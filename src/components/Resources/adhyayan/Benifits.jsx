import React from "react";
import { useLanguage } from "@/context/LanguageContext"
const Benifits = () => {
  const { text } = useLanguage()
  return (
    <div className="lg:max-w-5xl 2xl:max-w-5xl px-3 md:px-0 py-8 mx-auto">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="page-small-heading font-bold text-center  ssr-hading">
          {text.Resourcepage.benifits.title}
        </h1>

        <div className=" p-6 space-y-4">
          <h2 className="page-small-heading font-semibold">{text.Resourcepage.benifits.subtitle}</h2>
          <p className="font-semibold page-content mb-4">{text.Resourcepage.benifits.sub}</p>

          <section>
            <h3 className="page-content font-medium mb-2">{text.Resourcepage.benifits.content.title}</h3>
            <ul className="list-disc pl-5 page-content space-y-1">
              <li>{text.Resourcepage.benifits.content.content[0]}</li>
              <li>{text.Resourcepage.benifits.content.content[1]}</li>
              <li>{text.Resourcepage.benifits.content.content[2]}</li>
              <li>{text.Resourcepage.benifits.content.content[3]}</li>
              <li>{text.Resourcepage.benifits.content.content[4]}</li>

            </ul>
          </section>

          <section>
            <h3 className="page-content font-medium  mb-2">{text.Resourcepage.benifits.intent.title}</h3>
            <ul className="list-disc pl-5 page-content space-y-1">
              <li>{text.Resourcepage.benifits.intent.content[0]}</li>
              <li>{text.Resourcepage.benifits.intent.content[1]}</li>
              <li>{text.Resourcepage.benifits.intent.content[2]}</li>
            </ul>
          </section>

          <section>
            <h3 className="page-content font-medium  mb-2">{text.Resourcepage.benifits.outcomes.title}</h3>
            <ul className="list-disc pl-5 page-content space-y-1">
              <li>{text.Resourcepage.benifits.outcomes.content[0]}</li>
              <li>{text.Resourcepage.benifits.outcomes.content[1]}</li>
              <li>{text.Resourcepage.benifits.outcomes.content[2]}</li>
              <li>{text.Resourcepage.benifits.outcomes.content[3]}</li>
              <li>{text.Resourcepage.benifits.outcomes.content[4]}</li>
              <li>{text.Resourcepage.benifits.outcomes.content[5]}</li>
              <li>{text.Resourcepage.benifits.outcomes.content[6]}</li>
              <li>{text.Resourcepage.benifits.outcomes.content[7]}</li>
            </ul>
          </section>

          <section>
            <h3 className="page-content font-medium  mb-2">{text.Resourcepage.benifits.practices.title}</h3>
            <ul className="list-disc pl-5 page-content space-y-1">
              <li>{text.Resourcepage.benifits.practices.content[0]}</li>
              <li>{text.Resourcepage.benifits.practices.content[1]}</li>
              <li>{text.Resourcepage.benifits.practices.content[2]}</li>
              <li>{text.Resourcepage.benifits.practices.content[3]}</li>
              <li>{text.Resourcepage.benifits.practices.content[4]}</li>
            </ul>
          </section>

          <section>
            <h3 className="page-content font-medium  mb-2">{text.Resourcepage.benifits.resources.title}</h3>
            <p className="page-content">{text.Resourcepage.benifits.resources.content}</p>
          </section>

          <section>
            <h3 className="page-content font-medium mb-2">{text.Resourcepage.benifits.nextstep.title}</h3>
            <p className="page-content" dangerouslySetInnerHTML={{ __html: text.Resourcepage.benifits.nextstep.content }}></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
