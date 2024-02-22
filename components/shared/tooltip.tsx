import { BadgeCheck, ShieldCheck, Star, Zap } from 'lucide-react'
import React from 'react'

const tooltips = [
    {
        id: 1,
        icon: <Zap />,
        title: "Tezkor yetkasish",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        id: 1,
        icon: <BadgeCheck />,
        title: "Tulov himoyasi",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        id: 1,
        icon: <ShieldCheck />,
        title: "Yuqori sifat",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
    {
        id: 1,
        icon: <Star />,
        title: "Eng sara kitoblar",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
    },
]
const Tooltip = () => {
    return (
        <div className='flex items-start justify-between gap-8 my-10 bg-[#EEF4FF] px-4 py-6 rounded-xl'>
            {
                tooltips.map((tooltip, index) => (
                    <div key={index} className="flex gap-4">
                        <div className='flex items-center justify-center'>
                            <div className='bg-[#3F51B5] p-2 rounded-xl w-[45px] h-[45px] flex items-center justify-center text-white'>
                                {tooltip.icon}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className='text-xl font-semibold'>{tooltip.title}</h3>
                            <p className='text-gray-500 text-[15px]'>{tooltip.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Tooltip
