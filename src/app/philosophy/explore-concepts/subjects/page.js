import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const bookSections = [
  {
    title: "Darshan (Vision, Philosophy)",
    items: [
      "Philosophy (realistic-view) of Human Behavior (मानव व्यवहार दर्शन)",
      "Philosophy (realistic-view) of Human Action (मानव कर्म दर्शन)",
      "Philosophy (realistic-view) of Human Practice (मानव अभ्यास दर्शन)",
      "Philosophy (realistic-view) of Human Realization (मानव अनुभव दर्शन)",
    ],
  },
  {
    title: "Vaada (Dialectic)",
    items: [
      "Spiritualism-Realization centric (अनुभवात्मक अध्यात्मवाद)",
      "Materialism – Resolution centric (समाधानात्मक भौतिकवाद)",
      "Humanism – Behavior centric (व्यवहारात्मक जनवाद)",
    ],
  },
  {
    title: "Shastra (Codes of Conduct)",
    items: [
      "Sociology-Behavioral (व्यवहारवादी समाजशास्त्र)",
      "Economics-Cyclical (आवर्तनशील अर्थशास्त्र)",
      "Psychology- Human Consciousness/Cognition based (मानव संचेतनावादी मनोविज्ञान)",
      "Universal Human Constitution (मानवीय संविधान)",
    ],
  },
  {
    title: "Others",
    items: [
      "Jeevan Vidya an Introduction (जीवन विद्या एक परिचय)",
      "Paribhasha Samhita (परिभाषा संहिता)",
    ],
  },
];

const BooksOverview = () => {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    <div className="max-w-5xl mx-auto md:px-0 px-3 py-8">
      <h1 className="page-heading mb-6">
        Madhyasth Darshan – Overview of each Book
      </h1>

      <p className="mb-4 page-content">
        This is the basic literature written & published by Shri A.Nagraj and
        available for Study & Practice. These books are the ‘subjects’ in the
        Study of Jeevan Vidya – Madhyasth Darshan. They are organized as:
      </p>

      <ul className="list-disc list-outside pl-5 mb-4 page-content">
        <li>
          <strong>Madhyasth Darshan</strong> – existential postulations from
          realization (in 4 parts)
        </li>
        <li>
          <strong>Saha-astitva-Vaad</strong> – dialectics & elaboration on the
          realization (in 3 parts)
        </li>
        <li>
          <strong>Shastra</strong> – code of conduct, for humane living (in 3
          parts)
        </li>
      </ul>

      <p className="mb-6 page-content">
        There is a book on each subject. See below to get a quick summary of
        each book/subject:
      </p>

      {bookSections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="page-common-hading mb-2">{section.title}</h2>
          <ul className="list-disc list-inside page-content space-y-1 pl-4">
            {section.items.map((item, subIdx) => (
              <li key={subIdx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-8">
        <h2 className="page-common-hading mb-2">Download</h2>
        <ul className="list-disc list-inside pl-4 space-y-1 page-content">
          <li>Download the published literature (latest editions)</li>
          <li>Get printed books</li>
        </ul>
        <p className="mt-4 page-content">
          In addition to the published literature, the full digital library
          contains over <strong>10,000 pages</strong> of scanned writings and
          articles.
        </p>
      </div>
    </div>
  );
};

export default BooksOverview;
