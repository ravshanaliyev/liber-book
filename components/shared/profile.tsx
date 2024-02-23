"use client"
import { loadState } from '@/helpers/storage'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
    const user = loadState("user")
    return (
        <div>
            <div className="my-6 rounded-xl bg-[#EEF4FF] px-16 py-6">
                <div className="flex gap-6 items-center">
                    <Image className='rounded-xl w-[180px] h-[150px] object-cover' src={user?.avatar} alt="" width={150} height={120} />
                    <div className="flex flex-col gap-2">
                        <h2 className='text-3xl'>{user?.name}</h2>
                        <p>Email: {user?.email}</p>
                        <p>Role: {user?.role}</p>
                        <p className='text-[#3F51B5]'> Balance: 45 000 so&#39;m</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile