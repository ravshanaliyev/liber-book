"use client"
import Navbar from '@/components/shared/navbar'
import React from 'react'
import { Book, NotebookPen, Save, Settings, Wallet, WalletCards } from 'lucide-react'
import Link from 'next/link'
import Profile from '@/components/shared/profile'
import SidebarItem from '@/components/shared/sidebar-item'


const ProfileLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="w-[1400px] mx-auto">
            <Navbar />
            <Profile />
            <div className="my-6 flex gap-6">
                <div className="w-1/6 rounded-xl shadow-lg">
                    <div className="px-4 py-6 flex flex-col gap-4">
                        {sidebarLinks.map((link, index) => (
                            <Link href={link.path} key={index} className="flex items-center gap-3">
                                <SidebarItem link={link} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-5/6">
                    {children}
                </div>
            </div>
        </div >
    )
}

export default ProfileLayout

const sidebarLinks = [
    {
        label: "Obuna bolish",
        icon: NotebookPen,
        path: "/profile",
    },
    {
        label: "E-Hisob",
        icon: Wallet,
        path: "/profile/e-hisob",
    },
    {
        label: "Kitoblarim",
        icon: Book,
        path: "/profile/kitoblarim",
    },
    {
        label: "Saqlanganlar",
        icon: Save,
        path: "/profile/saqlanganlar",
    },
    {
        label: "Sozlamalar",
        icon: Settings,
        path: "/profile/sozlamalar",
    },
];