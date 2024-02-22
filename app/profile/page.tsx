"use client"
import Navbar from '@/components/shared/navbar'
import { loadState } from '@/helpers/storage'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const HomePage = () => {
    const { push } = useRouter()
    const user = loadState("user")
    if (!user) return push("/")
    console.log(user);

    return (
        <div className="w-[1400px] mx-auto">
            <Navbar />
            <div className="my-6 rounded-xl bg-[#EEF4FF] px-16 py-6">
                <div className="flex gap-6 items-center">
                    <Image className='rounded-xl' src={user.avatar} alt="" width={150} height={120} />
                    <div className="flex flex-col gap-2">
                        <h2 className='text-3xl'>{user.name}</h2>
                        <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                        <p className='text-[#3F51B5]'> Balance: 45 000 so&#39;m</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePage