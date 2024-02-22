import Link from 'next/link'
import React from 'react'

const Sections = () => {
    return (
        <div className='my-5'>
            <ul className='flex items-center gap-4'>
                {
                    sections.map((section, index) => {
                        return (
                            <li key={index}><Link className='text-[#3F51B5] font-semibold' href={`/${section.sectionUrl}`}>{section.sectionName}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Sections

const sections = [
    {
        sectionName: "Audio Kitoblar",
        sectionUrl: "audio-kitoblar"
    },
    {
        sectionName: "Elektron Kitoblar",
        sectionUrl: "elektron-kitoblar"
    },
    {
        sectionName: "Bosma Kitoblar",
        sectionUrl: "bosma-kitoblar"
    },
    {
        sectionName: "Kontakt",
        sectionUrl: "kontakt"
    },
    {
        sectionName: "Biz haqimizda",
        sectionUrl: "about"
    },
]