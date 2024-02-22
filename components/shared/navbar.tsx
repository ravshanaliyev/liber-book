import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { UserRound } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex items-center justify-around my-4'>
            <Link href={"/"}><img src="/logo.png" alt="" /></Link>
            <div className='flex items-center gap-4'>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ruknlar" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="jaxon-adabiyoti">Jaxon adabiyoti</SelectItem>
                            <SelectItem value="uzbek-adabiyoti">Uzbek adabiyoti</SelectItem>
                            <SelectItem value="bolalar-adabiyoti">Bolalar adabiyoti</SelectItem>
                            <SelectItem value="biznes-va-psixologiya">Biznes va psixologiya</SelectItem>
                            <SelectItem value="detektivlar">Detektivlar</SelectItem>
                            <SelectItem value="fantastika">Fantastika</SelectItem>
                            <SelectItem value="diniy-adabiyot">Diniy adabiyot</SelectItem>
                            <SelectItem value="fan-talim">Fan va talim</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input className='w-[540px]' placeholder="Qidirish" />
            </div>
            <div className="flex items-center gap-4">
                <Select>
                    <SelectTrigger className='w-[80px]'>
                        <SelectValue placeholder="uz" defaultValue={"uz"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            <SelectItem value="uz">uz</SelectItem>
                            <SelectItem value="ru">ru</SelectItem>
                            <SelectItem value="en">en</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button className='bg-[#3F51B5] hover:bg-[#3f51b5df]'><UserRound className='w-4 h-4 mr-2' /> Kirish</Button>
            </div>
        </div>
    )
}

export default Navbar