import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Saqlanganlar = () => {
    return (
        <div className='border rounded-xl shadow-lg p-6'>
            <h1 className='text-3xl mb-4'>Saqlanganlar</h1>
            <div className="cards flex  gap-x-4 gap-y-8 flex-wrap">
                <div className="flex gap-4 w-[340px]">
                    <Image src={"/card4.jfif"} className="w-[140px] h-[200px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                    <div className="flex flex-col">
                        <h4 className='text-xl mb-2'>Элжернга аталган гуллар</h4>
                        <p className='text-[#3F51B5]'>Siyosat, Fanstastika</p>
                        <div className="flex gap-2 my-4">
                            <Star className='text-[#ff7f4d]' />
                            <p>4.8</p>
                        </div>
                        <Button className='w-[100px]' variant={"destructive"}>O&#39;chirish</Button>
                    </div>
                </div>
                <div className="flex gap-4 w-[340px]">
                    <Image src={"/card4.jfif"} className="w-[140px] h-[200px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                    <div className="flex flex-col">
                        <h4 className='text-xl mb-2'>Элжернга аталган гуллар</h4>
                        <p className='text-[#3F51B5]'>Siyosat, Fanstastika</p>
                        <div className="flex gap-2 my-4">
                            <Star className='text-[#ff7f4d]' />
                            <p>4.8</p>
                        </div>
                        <Button className='w-[100px]' variant={"destructive"}>O&#39;chirish</Button>
                    </div>
                </div>
                <div className="flex gap-4 w-[340px]">
                    <Image src={"/card4.jfif"} className="w-[140px] h-[200px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                    <div className="flex flex-col">
                        <h4 className='text-xl mb-2'>Элжернга аталган гуллар</h4>
                        <p className='text-[#3F51B5]'>Siyosat, Fanstastika</p>
                        <div className="flex gap-2 my-4">
                            <Star className='text-[#ff7f4d]' />
                            <p>4.8</p>
                        </div>
                        <Button className='w-[100px]' variant={"destructive"}>O&#39;chirish</Button>
                    </div>
                </div>
                <div className="flex gap-4 w-[340px]">
                    <Image src={"/card4.jfif"} className="w-[140px] h-[200px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                    <div className="flex flex-col">
                        <h4 className='text-xl mb-2'>Элжернга аталган гуллар</h4>
                        <p className='text-[#3F51B5]'>Siyosat, Fanstastika</p>
                        <div className="flex gap-2 my-4">
                            <Star className='text-[#ff7f4d]' />
                            <p>4.8</p>
                        </div>
                        <Button className='w-[100px]' variant={"destructive"}>O&#39;chirish</Button>
                    </div>
                </div>
                <div className="flex gap-4 w-[340px]">
                    <Image src={"/card4.jfif"} className="w-[140px] h-[200px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                    <div className="flex flex-col">
                        <h4 className='text-xl mb-2'>Элжернга аталган гуллар</h4>
                        <p className='text-[#3F51B5]'>Siyosat, Fanstastika</p>
                        <div className="flex gap-2 my-4">
                            <Star className='text-[#ff7f4d]' />
                            <p>4.8</p>
                        </div>
                        <Button className='w-[100px]' variant={"destructive"}>O&#39;chirish</Button>
                    </div>
                </div>
                <div className="flex gap-4 w-[340px]">
                    <Image src={"/card4.jfif"} className="w-[140px] h-[200px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                    <div className="flex flex-col">
                        <h4 className='text-xl mb-2'>Элжернга аталган гуллар</h4>
                        <p className='text-[#3F51B5]'>Siyosat, Fanstastika</p>
                        <div className="flex gap-2 my-4">
                            <Star className='text-[#ff7f4d]' />
                            <p>4.8</p>
                        </div>
                        <Button className='w-[100px]' variant={"destructive"}>O&#39;chirish</Button>
                    </div>
                </div>
                <div className="flex gap-4 w-[340px]">
                    <Image src={"/card4.jfif"} className="w-[140px] h-[200px] rounded-[14px] object-cover" alt="" width={80} height={85} />
                    <div className="flex flex-col">
                        <h4 className='text-xl mb-2'>Элжернга аталган гуллар</h4>
                        <p className='text-[#3F51B5]'>Siyosat, Fanstastika</p>
                        <div className="flex gap-2 my-4">
                            <Star className='text-[#ff7f4d]' />
                            <p>4.8</p>
                        </div>
                        <Button className='w-[100px]' variant={"destructive"}>O&#39;chirish</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saqlanganlar