import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const EHisob = () => {

    return (
        <div>
            <h1 className='text-3xl text-[#11142D] mb-4'>E-Hisob</h1>
            <div className="flex justify-between bg-[#3F51B5] rounded-[20px]">
                <div className="flex flex-col p-4">
                    <span className='text-white'>Balance</span>
                    <p className='text-[24px] text-white'>45 000 so&#39;m</p>
                </div>
                <Image src={"/hisob.svg"} className="w-[80px] h-[91px] object-cover" alt="" width={80} height={85} />
            </div>
            <Button className="mt-4 w-full h-[50px]" variant={"secondary"}><Image src={"/payme.svg"} className="w-full h-[20px]" alt="" width={24} height={24} /></Button>
            <Button className="mt-4 w-full h-[50px]" variant={"secondary"}><Image src={"/click.svg"} className="w-full h-[26px]" alt="" width={24} height={24} /></Button>
        </div>
    )
}

export default EHisob