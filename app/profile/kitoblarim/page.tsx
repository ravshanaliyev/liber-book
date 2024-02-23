import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
import { BookMarked, Headphones, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Kitoblarim = () => {
    return (
        <div>
            <h1 className='text-3xl text-[#11142D] mb-4'>Kitoblarim</h1>
            <Tabs defaultValue="audio" className="">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="audio">Audio Kitoblar</TabsTrigger>
                    <TabsTrigger value="elektron">Elektron Kitoblar</TabsTrigger>
                    <TabsTrigger value="bosma">Bosma Kitoblar</TabsTrigger>
                </TabsList>
                <TabsContent className='' value="audio">
                    <div className="cards flex flex-col gap-4">
                        <div className="card flex gap-6 rounded-xl shadow-lg border p-6">
                            <Image src={"/card1.jfif"} className="w-[200px] h-[250px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                            <div className="flex flex-col">
                                <div className="flex w-[880px] justify-between items-center">
                                    <div className="flex flex-col gap-2">
                                        <h1 className='text-3xl text-[#11142D]'>1984</h1>
                                        <span className='text-[#3F51B5] uppercase'>Siyosat, Fanstastika</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            {(Array.from({ length: 4 }).map((_, index) => (
                                                <Star className='text-[#ff7f4d]' key={index} />
                                            )))}
                                        </div>
                                        <span className='text-[#3F51B5] text-xl'>4.9</span>
                                    </div>
                                </div>
                                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-10'>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Muallif</p>
                                            <p className='text-lg'>Kevin Smiley</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Nashriyot</p>
                                            <p className='text-lg'>Printarea Studio</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Yil</p>
                                            <p className='text-lg'>2024</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant={"secondary"}><Headphones /></Button>
                                        <Button variant={"secondary"}><BookMarked /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="elektron">
                    <div className="cards flex flex-col gap-4">
                        <div className="card flex gap-6 rounded-xl shadow-lg border p-6">
                            <Image src={"/card3.jfif"} className="w-[200px] h-[250px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                            <div className="flex flex-col">
                                <div className="flex w-[880px] justify-between items-center">
                                    <div className="flex flex-col gap-2">
                                        <h1 className='text-3xl text-[#11142D]'>Rich Dad Poor Dad</h1>
                                        <span className='text-[#3F51B5] uppercase'>Siyosat, Fanstastika</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            {(Array.from({ length: 4 }).map((_, index) => (
                                                <Star className='text-[#ff7f4d]' key={index} />
                                            )))}
                                        </div>
                                        <span className='text-[#3F51B5] text-xl'>4.9</span>
                                    </div>
                                </div>
                                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-10'>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Muallif</p>
                                            <p className='text-lg'>Kevin Smiley</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Nashriyot</p>
                                            <p className='text-lg'>Printarea Studio</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Yil</p>
                                            <p className='text-lg'>2024</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant={"secondary"}><Headphones /></Button>
                                        <Button variant={"secondary"}><BookMarked /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="bosma">
                    <div className="cards flex flex-col gap-4">
                        <div className="card flex gap-6 rounded-xl shadow-lg border p-6">
                            <Image src={"/card2.jfif"} className="w-[200px] h-[250px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                            <div className="flex flex-col">
                                <div className="flex w-[880px] justify-between items-center">
                                    <div className="flex flex-col gap-2">
                                        <h1 className='text-3xl text-[#11142D]'>Code 8</h1>
                                        <span className='text-[#3F51B5] uppercase'>Siyosat, Fanstastika</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            {(Array.from({ length: 4 }).map((_, index) => (
                                                <Star className='text-[#ff7f4d]' key={index} />
                                            )))}
                                        </div>
                                        <span className='text-[#3F51B5] text-xl'>4.9</span>
                                    </div>
                                </div>
                                <p className='my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-10'>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Muallif</p>
                                            <p className='text-lg'>Kevin Smiley</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Nashriyot</p>
                                            <p className='text-lg'>Printarea Studio</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className='text-gray-500'>Yil</p>
                                            <p className='text-lg'>2024</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant={"secondary"}><Headphones /></Button>
                                        <Button variant={"secondary"}><BookMarked /></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Kitoblarim