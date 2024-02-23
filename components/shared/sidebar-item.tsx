import { usePathname } from 'next/navigation';
import React from 'react'

const SidebarItem = ({ link }: any) => {
    const pathname = usePathname();

    const isActive = pathname === link.path;
    return (
        <>
            <link.icon className={isActive ? "text-[#3F51B5]" : "text-[#242424]"} />
            <p className={isActive ? "text-[#3F51B5] font-semibold text-[18px]" : "text-[#242424] text-[18px]"}>{link.label}</p>
        </>
    )
}

export default SidebarItem