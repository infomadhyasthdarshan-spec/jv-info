import React from 'react'

export default function OurCentersLayout({ children }) {
    return (
        <div className='bg-[#F2F4F8]'>
            <div className="lg:max-w-5xl 2xl:max-w-7xl min-h-screen mx-auto flex flex-col items-center">
                {children}
            </div>
        </div>
    )
}
