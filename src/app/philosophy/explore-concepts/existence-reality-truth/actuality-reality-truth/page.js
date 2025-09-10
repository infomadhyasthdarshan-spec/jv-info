"use client"
import Backjs from '@/components/Backjs'
import React from 'react'
import { useEffect } from 'react';
import { wrapHindiWords  } from '@/utils/fontInjector';
const page = () => {
        useEffect(() => {
    wrapHindiWords ();
  }, []);
  return (
 <div className="px-4 md:px-0 py-8 max-w-5xl mx-auto text-[#111] space-y-6">
      {/* Page Heading */}
      <Backjs/>
      <h1 className="page-heading mb-2">Actuality, Reality & Truth</h1>
      <hr className="border-gray-300 mb-6" />
      <p className='mb-4 page-content'>On the basis of having understood coexistence and evolution in existence, we can define actuality, reality & truth:</p>

            <h1 className="page-common-hading mb-2">Acutality (यथार्थता)</h1>
            <p className="page-content mb-2">the intrinsic-nature or participation of a unit in Existence (swabhava). Or, the meaning of a unit in Existence is its actuality.</p>

             <h1 className="page-common-hading mb-2">Reality (वास्तविकता)</h1>
            <p className="page-content mb-2">four dimensions of a unit- appearance, qualities, intrinsic-nature and religion (rup, gun, swabhav, dharm). i.e. reality of a unit or activity consists of both its form-full aspects (appearance, qualities) as well as its formless aspects (intrinsic-nature and religion)</p>

             <h1 className="page-common-hading mb-2">Truth (सत्यता)</h1>
            <p className="page-content mb-2"><strong>Absolute Truth:</strong> (स्थिति सत्य) Physical-Chemical and conscious (jeevan) activities saturated or samprikt in all pervasive space.</p>
            <p className="page-content mb-2"><strong>State-full Truth:</strong> (वस्तुगत सत्य) The inseparable dimensions of appearance, qualities, intrinsic-nature and religion (rup, gun, swabhav, dharm) in a physical, chemical or conscious unit. </p>
            <p className="page-content mb-2"><strong>Relative Truth: </strong>(वस्तु स्थिति सत्य) The relative notions of occupied space, direction and time of a unit, which is relative to the observer and the period of observation.</p>
      <hr className="border-gray-300 mb-6" />
      <p className="page-content italic mb-2">– shriram n | student | jan 2012</p>
      </div>  )
}

export default page