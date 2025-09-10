"use client";
import React, { useState } from "react";
import { MoveRight } from "lucide-react"; // Import MoveRight icon from lucide-react
import { useLanguage } from "@/context/LanguageContext";
import PDFModal from "@/components/PDFPreview";
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
  const { text } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleOpenPDF = (pdfUrl) => {
    setSelectedPDF(pdfUrl);
    setShowModal(true);
  };
  useEffect(() => {
    wrapHindiWords ();
  }, []);

  return (
    <div className="min-h-screen px-3   font-th mb-8 py-8">
      <PDFModal
        show={showModal}
        onClose={() => setShowModal(false)}
        fileUrl={selectedPDF}
      />
      <div className="lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto space-y-6">
        {/* Heading and Navigation Buttons */}
        <div className="space-y-4">
          <h2 className="page-heading   ssr-hading">
            {text.philosophyPage5.title}
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
            <button
              className="bg-white rounded-2xl px-4 py-2 border border-gray-200 text-black flex items-center h-[79px] w-full page-common-hading"
              onClick={() =>
                window.open(
                  "https://jeevan-vidya.megascale.co.in/shop/",
                  "_blank"
                )
              }
            >
              {text.philosophyPage5.button.b1.title}
              <img src="/icon/link.svg" className="w-7 h-7 ml-auto" />
            </button>
            <button
              className="bg-white rounded-2xl px-4 py-2 border border-gray-200 text-black flex items-center h-[79px] w-full page-common-hading"
              onClick={() => {
                window.open("/books", "_blank");
              }}
            >
              {text.philosophyPage5.button.b2.title}
              <MoveRight className="w-5 h-5 ml-auto" />
            </button>
          </div>
        </div>

        {/* First Paragraph */}
        <p
          className="text-black mt-8 page-content"
          dangerouslySetInnerHTML={{
            __html: text.philosophyPage5.description[0],
          }}
        ></p>

        {/* What Follows Paragraph */}
        <p
          className="text-black text-lg page-content"
          dangerouslySetInnerHTML={{
            __html: text.philosophyPage5.description[1],
          }}
        ></p>
        <div className="bg-[#EDE2D1] flex flex-col items-center  justify-center p-3 rounded-[16px] shadow-md mt-8 gap-5">
          <div className="">
            {/* Darshan Heading */}
            <h3 className="page-heading text-black mt-5 ssr-hading">
              {text.philosophyPage5.description[2]}
            </h3>

            {/* Darshan Paragraph */}
            <p
              className="text-black mt-5 page-content"
              dangerouslySetInnerHTML={{
                __html: text.philosophyPage5.description[3],
              }}
            ></p>

            {/* 4 Volumes Paragraph */}
            <p className="text-black page-heading mt-5">
              {text.philosophyPage5["4 Volumes"].title}
            </p>
          </div>

          {/* Book Card 1 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[327px] w-full md:w-[903px] mt-8">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[350px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/02-Vyavahar.png"
                      alt="Book Cover - मानव व्यवहार दर्शन"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      मानव व्यवहार दर्शन
                    </h4>
                    <p className="text-black text-sm ">
                      <span >
                        {text.philosophyPage5["4 Volumes"].books.b1.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["4 Volumes"].books.b1.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["4 Volumes"].books.b1.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    मानव व्यवहार दर्शन
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["4 Volumes"].books.b1.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["4 Volumes"].books.b1.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[625px] h-[120px]">
                  {text.philosophyPage5["4 Volumes"].books.b1.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/04_manav_vyavhar_darshan_2015_ocr.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/04_manav_vyavhar_darshan_2015_ocr.pdf#toolbar=0")}>
                      {text.philosophyPage5["4 Volumes"].books.b1.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/04_manav_vyavhar_darshan_2015_ocr.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/04_manav_vyavhar_darshan_2015_ocr.pdf#toolbar=0")}>
                    {text.philosophyPage5["4 Volumes"].books.b1.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[327px] w-full md:w-[903px]">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[300px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/03-Karm.png"
                      alt="Book Cover - मानव कर्म दर्शन"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      मानव कर्म दर्शन
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["4 Volumes"].books.b2.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["4 Volumes"].books.b2.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["4 Volumes"].books.b2.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    मानव कर्म दर्शन
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["4 Volumes"].books.b2.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["4 Volumes"].books.b2.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[625px] h-[120px]">
                  {text.philosophyPage5["4 Volumes"].books.b2.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/05_manav_karm_darshan_2017_ocr.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/05_manav_karm_darshan_2017_ocr.pdf#toolbar=0")}>
                      {text.philosophyPage5["4 Volumes"].books.b2.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/05_manav_karm_darshan_2017_ocr.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/05_manav_karm_darshan_2017_ocr.pdf#toolbar=0")}>
                    {text.philosophyPage5["4 Volumes"].books.b2.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Book Card 3 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[348px] w-full md:w-[903px]">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[360px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/04-Abhyaas.png"
                      alt="Book Cover - मानव अभ्यास दर्शन"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      मानव अभ्यास दर्शन
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["4 Volumes"].books.b3.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["4 Volumes"].books.b3.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["4 Volumes"].books.b2.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    मानव अभ्यास दर्शन
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["4 Volumes"].books.b3.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["4 Volumes"].books.b3.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[625px] h-[120px]">
                  {text.philosophyPage5["4 Volumes"].books.b2.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/06_manav_abhyas_darshan_2018_ocr.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/06_manav_abhyas_darshan_2018_ocr.pdf#toolbar=0")}>
                      {text.philosophyPage5["4 Volumes"].books.b3.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/06_manav_abhyas_darshan_2018_ocr.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/06_manav_abhyas_darshan_2018_ocr.pdf#toolbar=0")}>
                    {text.philosophyPage5["4 Volumes"].books.b3.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Book Card 4 */}
          <div className="flex flex-col mb-8 md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[348px] w-full md:w-[903px]">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[370px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/05-Anubhav.png"
                      alt="Book Cover - मानव अनुभव दर्शन"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      मानव अनुभव दर्शन
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["4 Volumes"].books.b4.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["4 Volumes"].books.b4.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["4 Volumes"].books.b4.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    मानव अनुभव दर्शन
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["4 Volumes"].books.b4.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["4 Volumes"].books.b4.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[625px] h-[120px]">
                  {text.philosophyPage5["4 Volumes"].books.b4.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/07_manav_anubhav_darshan_2015_ocr.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/07_manav_anubhav_darshan_2015_ocr.pdf#toolbar=0")}>
                      {text.philosophyPage5["4 Volumes"].books.b4.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/07_manav_anubhav_darshan_2015_ocr.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/07_manav_anubhav_darshan_2015_ocr.pdf#toolbar=0")}>
                    {text.philosophyPage5["4 Volumes"].books.b4.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EDE2D1] flex flex-col items-center justify-center p-3 rounded-[16px] shadow-md mt-8 gap-5">
          <div className="w-full md:w-[903px]">
            <h3 className="page-heading text-black mt-5 ssr-hading">
              {text.philosophyPage5.content.title}
            </h3>

            <p className="text-black mt-5 page-small-heading italic">
              {text.philosophyPage5.content.sub}
            </p>

            <p
              className="text-black mt-5 page-content"
              dangerouslySetInnerHTML={{
                __html: text.philosophyPage5.content.description,
              }}
            ></p>
            <p className="text-black page-heading mt-11">
              3 volumes fall under this set:
            </p>
          </div>

          {/* Book Card 5 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[404px] w-full md:w-[903px] mt-8">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[410px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/06-Bhautikvaad.png"
                      alt="Book Cover - समाधानात्मक भौतिकवाद"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      समाधानात्मक भौतिकवाद
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["3 Volumes"].books.b1.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["3 Volumes"].books.b1.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["3 Volumes"].books.b1.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    समाधानात्मक भौतिकवाद
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["3 Volumes"].books.b1.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["3 Volumes"].books.b1.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[621px] h-[196px]">
                  {text.philosophyPage5["3 Volumes"].books.b1.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/09_samadhanatmak bhoutikvad _unicode_2023.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/09_samadhanatmak bhoutikvad _unicode_2023.pdf#toolbar=0")}>
                      {text.philosophyPage5["3 Volumes"].books.b1.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/09_samadhanatmak bhoutikvad _unicode_2023.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/09_samadhanatmak bhoutikvad _unicode_2023.pdf#toolbar=0")}>
                    {text.philosophyPage5["3 Volumes"].books.b1.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Book Card 6 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[404px] w-full md:w-[903px] mt-8">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[500px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/07-janvaad.png"
                      alt="Book Cover - व्यवहारात्मक जनवाद"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      व्यवहारात्मक जनवाद
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["3 Volumes"].books.b2.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["3 Volumes"].books.b2.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["3 Volumes"].books.b2.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    व्यवहारात्मक जनवाद
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["3 Volumes"].books.b1.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["3 Volumes"].books.b2.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[621px] h-[224px]">
                  {text.philosophyPage5["3 Volumes"].books.b2.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/10_vyavharatmak_janvaad_2017_ocr.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/10_vyavharatmak_janvaad_2017_ocr.pdf#toolbar=0")}>
                      {text.philosophyPage5["3 Volumes"].books.b2.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/10_vyavharatmak_janvaad_2017_ocr.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/10_vyavharatmak_janvaad_2017_ocr.pdf#toolbar=0")}>
                    {text.philosophyPage5["3 Volumes"].books.b2.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Book Card 7 */}
          <div className="flex mb-8 flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[343px] w-full md:w-[903px] mt-8">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[350px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/08-Adhyatmavaad.png"
                      alt="Book Cover - अनुभवात्मक आध्यात्मवाद"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      अनुभवात्मक आध्यात्मवाद
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["3 Volumes"].books.b3.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["3 Volumes"].books.b3.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["3 Volumes"].books.b3.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    अनुभवात्मक आध्यात्मवाद
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["3 Volumes"].books.b3.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["3 Volumes"].books.b3.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[621px] h-[135px]">
                  {text.philosophyPage5["3 Volumes"].books.b3.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/08_anubhavatmak adhyatmvad_unicode_2023.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/08_anubhavatmak adhyatmvad_unicode_2023.pdf#toolbar=0")}>
                      {text.philosophyPage5["3 Volumes"].books.b3.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/08_anubhavatmak adhyatmvad_unicode_2023.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/08_anubhavatmak adhyatmvad_unicode_2023.pdf#toolbar=0")}>
                    {text.philosophyPage5["3 Volumes"].books.b3.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EDE2D1] flex flex-col items-center  justify-center p-3 rounded-[16px] shadow-md mt-8 gap-5">
          <div className="w-full md:w-[903px]">
            <h3 className="page-heading text-black mt-10 ssr-hading">
              {text.philosophyPage5.content2.title}
            </h3>

            <p className="text-black mt-10 page-small-heading italic">
              {text.philosophyPage5.content2.sub}
            </p>
            <p
              className="text-black mt-10 page-content"
              dangerouslySetInnerHTML={{
                __html: text.philosophyPage5.content2.description,
              }}
            ></p>

            <p className="text-black page-heading font-bold mt-11">
              {text.philosophyPage5["4 Volume"].title}
            </p>
          </div>

          {/* Book Card 8 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[348px] w-full md:w-[903px] mt-8">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[370px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/11-Samaajshastra.png"
                      alt="Book Cover - व्यवहारवादी समाजशास्त्र"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      व्यवहारवादी समाजशास्त्र
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["4 Volume"].books.b1.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["4 Volume"].books.b1.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["4 Volume"].books.b1.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    व्यवहारवादी समाजशास्त्र
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["4 Volume"].books.b1.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["4 Volume"].books.b1.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[621px] h-[140px]">
                  {text.philosophyPage5["4 Volume"].books.b1.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/12_vyavharvaadi_samajshastra_unicode_2025.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/12_vyavharvaadi_samajshastra_unicode_2025.pdf#toolbar=0")}>
                      {text.philosophyPage5["4 Volume"].books.b1.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/12_vyavharvaadi_samajshastra_unicode_2025.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/12_vyavharvaadi_samajshastra_unicode_2025.pdf#toolbar=0")}>
                    {text.philosophyPage5["4 Volume"].books.b1.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Book Card 9 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[404px] w-full md:w-[903px] mt-8">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[420px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/10-Arthshastra.png"
                      alt="Book Cover - आवर्तनशील अर्थशास्त्र"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      आवर्तनशील अर्थशास्त्र
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["4 Volume"].books.b2.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["4 Volume"].books.b2.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["4 Volume"].books.b2.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    आवर्तनशील अर्थशास्त्र
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["4 Volume"].books.b2.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["4 Volume"].books.b2.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[621px] h-[196px]">
                  {text.philosophyPage5["4 Volume"].books.b2.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/11_avartanshil_arthashastra_unicode_2024.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/11_avartanshil_arthashastra_unicode_2024.pdf#toolbar=0")}>
                      {text.philosophyPage5["4 Volume"].books.b2.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/11_avartanshil_arthashastra_unicode_2024.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/11_avartanshil_arthashastra_unicode_2024.pdf#toolbar=0")}>
                    {text.philosophyPage5["4 Volume"].books.b2.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Book Card 10 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[327px] w-full md:w-[903px] mt-8">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[340px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/09-Manovigyan.png"
                      alt="Book Cover - मानव संचेतानावादी मनोविज्ञान"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      मानव संचेतानावादी मनोविज्ञान
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["4 Volume"].books.b3.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["4 Volume"].books.b3.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["4 Volume"].books.b3.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    मानव संचेतानावादी मनोविज्ञान
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["4 Volume"].books.b3.subtitle}
                    </span>
                    <span className="ml-5">
                      {text.philosophyPage5["4 Volume"].books.b3.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[621px] h-[112px]">
                  {text.philosophyPage5["4 Volume"].books.b3.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/11_avartanshil_arthashastra_unicode_2024.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/manav_sanchetnavaadi_manovigyan_edited.pdf")}>
                      {text.philosophyPage5["4 Volume"].books.b3.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/11_avartanshil_arthashastra_unicode_2024.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/manav_sanchetnavaadi_manovigyan_edited.pdf")}>
                    {text.philosophyPage5["4 Volume"].books.b3.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>

          {/* Book Card 11 */}
          <div className="flex flex-col mb-8 md:flex-row bg-white rounded-lg shadow-md p-6 h-auto md:h-[442px] w-full md:w-[903px] mt-8">
            {/* Main Card Container for Mobile */}
            <div className="w-full md:w-auto flex flex-col  md:flex-row md:space-x-6">
              {/* Inner Div */}
              <div className="w-[313px] md:w-[197px] h-[400px] md:h-[263px] flex flex-col space-y-4 md:space-y-0">
                {/* First Row: Image and Details */}
                <div className="w-[313px] md:w-full h-[180px] md:h-[263px] flex md:flex-col space-x-4 md:space-x-0">
                  {/* Image Column */}
                  <div className="h-[180px] md:h-[263px] w-[135px] md:w-[197px] flex-shrink-0 rounded-md shadow-lg">
                    <img
                      src="/images/philosophy/Book/12-Samvidhaan.png"
                      alt="Book Cover - मानव आचार संहिता रूपी मानवीय संविधान"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  {/* Details Column (Visible only in Mobile) */}
                  <div className="flex-1 flex flex-col md:hidden">
                    <h4 className="text-lg font-bold text-black mb-2">
                      मानव आचार संहिता रूपी मानवीय संविधान
                    </h4>
                    <p className="text-black text-sm">
                      <span>
                        {text.philosophyPage5["4 Volume"].books.b4.subtitle}
                      </span>
                      <br />
                      <span>
                        {text.philosophyPage5["4 Volume"].books.b4.subtitle2}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Second Row: Description (Visible only in Mobile) */}
                <div className="w-[313px] h-[140px] md:hidden">
                  <p className="text-black text-sm">
                    {text.philosophyPage5["4 Volume"].books.b3.description}
                  </p>
                </div>
              </div>
              {/* Desktop View Details */}
              <div className="hidden md:flex md:flex-1 flex-col">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-black mb-4">
                    मानव आचार संहिता रूपी मानवीय संविधान
                  </h4>
                  <p className="text-black text-sm mb-4">
                    <span>
                      {text.philosophyPage5["4 Volume"].books.b4.subtitle}
                    </span>
                    <br />
                    <span>
                      {text.philosophyPage5["4 Volume"].books.b4.subtitle2}
                    </span>
                  </p>
                </div>
                <p className="text-black mt-2 w-[621px] h-[168px]">
                  {text.philosophyPage5["4 Volume"].books.b4.description}
                </p>
                <div className="flex justify-end mt-6">
                  {/* <a
                    href="/pdf/literature/14_manviya_samvidhaan_sootravyakhya_unicode_2023.pdf#toolbar=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  > */}
                    <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[186px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/14_manviya_samvidhaan_sootravyakhya_unicode_2023.pdf#toolbar=0")}>
                      {text.philosophyPage5["4 Volume"].books.b4.button}
                    </button>
                  {/* </a> */}
                </div>
              </div>
              {/* Preview Button (Visible only in Mobile) */}
              <div className="flex justify-center mt-4 md:hidden">
                {/* <a
                  href="/pdf/literature/14_manviya_samvidhaan_sootravyakhya_unicode_2023.pdf#toolbar=0"
                  target="_blank"
                  rel="noopener noreferrer"
                > */}
                  <button className="bg-[#59524E] hover:bg-[#7E746F] text-white px-4 py-2 rounded-lg h-[40px] w-[200px]" onClick={() => handleOpenPDF("/api/download/file/pdf/literature/14_manviya_samvidhaan_sootravyakhya_unicode_2023.pdf#toolbar=0")}>
                    {text.philosophyPage5["4 Volume"].books.b3.button}
                  </button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
