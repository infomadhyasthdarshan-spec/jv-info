"use client";
import React from "react";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
export default function ExistenceReality() {
     useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
    
    <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      {/* Page Heading */}
      <h1 className="page-heading mb-2">
        Existence (Reality)
      </h1>
      <hr className="border-gray-300 mb-6" />

      {/* Section Intro */}
      <h2 className="page-common-hading mb-4">
        This section contains the basic postulations on various dimensions of
        Reality. Postulations are statements about Truth. These are in the form
        of aphorisms (सूत्रात्मक) - such that maximum knowledge is encapsulated
        in minimal words.
      </h2>
            <hr className="border-gray-300 mb-6" />


      <p className="mb-6 page-content">
        Reality can be expressed in these 5 aphorisms. The entire 3,600 pages of
        Madhyasth Darshan literature is to explain and express these 5 lines.
      </p>

      {/* 5 Points */}
      <div className="mb-6">
        <h3 className="page-common-hading mb-2">
          These are the 5 lines to be understood, realized:
        </h3>
        <ol className="list-decimal pl-6 page-content space-y-2">
          <li>Existence is in the form of ‘Coexistence’</li>
          <li>There is Development Progression (evolution) in Existence</li>
          <li>There is Development (progress) in Existence</li>
          <li>
            There is Awakening Progression (of the human) in Existence
          </li>
          <li>There is Awakening (of the human) in Existence</li>
        </ol>
      </div>

      {/* Explanation */}
      <p className="mb-4 page-content">
        Read below for an explanation of these lines:
      </p>

      {/* Links */}
      <div className="space-y-2">
        <a
          href="#"
          className="block text-orange-600 page-content hover:underline"
        >
          Coexistence & Evolution in Existence
        </a>
        <a
          href="#"
          className="block text-orange-600 page-content hover:underline"
        >
          Actuality, Reality & Truth
        </a>
      </div>
    </div>
  );
}
