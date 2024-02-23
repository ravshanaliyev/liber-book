"use client"
import { loadState } from '@/helpers/storage'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
import { Button } from '@/components/ui/button'

const HomePage = () => {
    const { push } = useRouter()
    const user = loadState("user")
    if (!user) return push("/")

    return (
        <div>
            <div style={{ backgroundImage: `url(/bg.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="rounded-xl bg-[#ff7f4d] flex justify-between ">
                <h2 className="text-3xl font-bold text-white p-8">O&#39;z sevgan  bo&#39;limga <br /> obuna bo&#39;ling</h2>
                <Image src={"/girl.svg"} alt="" width={186} height={150} />
            </div>
            <div className="my-6 rounded-xl shadow-lg px-16 py-6">
                <h3 className='text-3xl my-6'>Obuna</h3>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-4">
                        <Select>
                            <SelectTrigger className="w-[250px]">
                                <SelectValue placeholder="Obuna bolish vaqti" defaultValue={"30"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="30">30 kun</SelectItem>
                                    <SelectItem value="45">45 kun</SelectItem>
                                    <SelectItem value="90">90 kun</SelectItem>
                                    <SelectItem value="365">1 yil</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[250px]">
                                <SelectValue placeholder="bolimni tanlang" defaultValue={"fantastika"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="fantastika">Fantastika</SelectItem>
                                    <SelectItem value="romantika">Romantika</SelectItem>
                                    <SelectItem value="adabiyot">Adabiyot</SelectItem>
                                    <SelectItem value="psixolog">Psixologiya</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <h3 className='text-xl'>Obuna 30 kun davom etadi</h3>
                    </div>
                    <div>
                        <div className="rounded-lg bg-[#f5f5f5] p-6 flex flex-col gap-2">
                            <div className="flex justify-between gap-10">
                                <p>Boshlanish vaqti</p>
                                <span className='text-[#3f51b5]'>12/09/2024</span>
                            </div>
                            <div className="flex justify-between">
                                <p>Yakunlanish vaqti</p>
                                <span className='text-[#3f51b5]'>12/10/2024</span>
                            </div>
                            <div className="flex justify-between">
                                <p>Obuna narxi</p>
                                <span className='text-[#3f51b5]'>12 000 сум</span>
                            </div>
                        </div>
                        <Button className='w-full my-4 bg-[#3f51b5] hover:bg-[#3f51b5df]'>Obuna bo&#39;lish</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage