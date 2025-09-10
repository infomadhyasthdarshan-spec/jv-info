"use client"
import { useLanguage } from '@/context/LanguageContext'
import React from 'react'

export default function page() {
    const {text} = useLanguage()
    return (
        <div className='lg:max-w-5xl 2xl:max-w-5xl min-h-screen mx-auto py-8'>
            <h1 className='page-heading text-center ssr-hading' dangerouslySetInnerHTML={{__html: text.aboutPage3.title}}></h1>
            <section className="bg-[#FFF5E7] px-2 py-12 sm:px-6 mt-10 lg:px-16 font-[sans-serif]  ">
                <h2 className="page-small-heading text-center mb-10">{text.aboutPage3.container.title}</h2>
                <h2 className="page-content text-center mb-10">{text.aboutPage3.container.title1}</h2>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-7xl mx-auto">

                    {/* Every Human */}
                    <div className="bg-white shadow-md rounded-2xl p-4">
                        <h3 className="mb-4 page-small-heading">{text.aboutPage3.container.cards.card1.title}</h3>
                        <ul className="list-disc list-outside space-y-2 ml-5 page-content">
                            <li>{text.aboutPage3.container.cards.card1.content[0]}</li>
                            <li>{text.aboutPage3.container.cards.card1.content[1]}</li>
                            <li>{text.aboutPage3.container.cards.card1.content[2]}</li>
                            <li>{text.aboutPage3.container.cards.card1.content[3]}</li>
                        </ul>
                    </div>

                    {/* Every Family */}
                    <div className="bg-white shadow-md rounded-2xl p-4">
                        <h3 className="mb-4 page-small-heading">{text.aboutPage3.container.cards.card2.title}</h3>
                        <ul className="list-disc list-outside space-y-2 ml-5 page-content">
                            <li>{text.aboutPage3.container.cards.card2.content[0]}</li>
                            <li>{text.aboutPage3.container.cards.card1.content[1]}</li>
                        </ul>
                    </div>

                    {/* Human Society */}
                    <div className="bg-white shadow-md rounded-2xl p-4">
                        <h3 className="mb-4 page-small-heading">{text.aboutPage3.container.cards.card3.title}</h3>
                        <ul className="list-disc list-outside space-y-2 ml-5 page-content">
                            <li>{text.aboutPage3.container.cards.card1.content[0]}</li>
                            <li>{text.aboutPage3.container.cards.card1.content[1]}</li>
                            <li>{text.aboutPage3.container.cards.card1.content[2]}</li>
                            <li>{text.aboutPage3.container.cards.card1.content[3]}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <h1 className='page-heading text-center  mt-10'>{text.aboutPage3.section.title}</h1>
            <div className='flex justify-start pl-4 mt-10'>
                <ul className="list-disc list-outside space-y-3 px-5 md:px-0 page-content">
                    <li>{text.aboutPage3.section.content[0]}</li>
                    <li>{text.aboutPage3.section.content[1]}</li>
                    <li className=' font-bold '>{text.aboutPage3.section.content[2]}</li>
                    <li>{text.aboutPage3.section.content[3]}</li>
                    <li>{text.aboutPage3.section.content[4]}</li>
                </ul>

            </div>
            <h1 className='text-left ml-5 page-content mt-10'>{text.aboutPage3.section.content[5]}</h1>
            {/* brown container */}
            <div className='w-full bg-[#59524e] py-6 mb-10 mt-10 sm:rounded-xl '>
                <p className='text-center py-2 text-xl text-white font-bold font-th'>~</p> 
                <h1 className='text-center page-quotes text-white'>{text.aboutPage3.lines.line[0]}<br />
                {text.aboutPage3.lines.line[1]} <br />
                {text.aboutPage3.lines.line[2]} <br />
                {text.aboutPage3.lines.line[3]} <br />
                {text.aboutPage3.lines.line[4]}</h1>
                <p className='text-center py-2 text-xl text-white font-bold font-th'>~</p> 
            </div>
            {/* <div className='w-full bg-[#FFF5E7] py-10 mt-10 px-4 rounded-xl mb-6'>
                <h1 className='page-big-content'>{text.aboutPage3.realted.title}</h1>
                <ul className='list-outside page-common-md-pera'>
                     <li >{text.aboutPage3.realted.content}</li>
                </ul>
               
            </div> */}

        </div>
    )
}
