import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Heart } from 'lucide-react'
const Banner = () => {
    return (
        <div className='my-4 flex items-center gap-4'>
            <div className="w-5/6 rounded-xl bg-[#EEF4FF] px-16 py-6">
                <h1 className='text-xl mb-4'>Ko&#39;p o&#39;qilayotgan kitoblar</h1>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-6xl"
                >
                    <CarouselContent>
                        {books.map((book, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6 ">
                                <div className="">
                                    <Card>
                                        <Link href={"/books/1984"} className="w-full">
                                            <CardContent className="flex flex-col gap-2 aspect-square items-center justify-center border-none">
                                                <Image src={book.image} alt="" className=' mt-2 h-[162px] rounded-lg' width={187.4} height={162} />
                                                <p className=''>{book.name}</p>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="w-1/6 rounded-xl bg-[#3F51B5] h-[320px] flex flex-col p-6 justify-between">
                <div className="text-white ">
                    <h3 className='text-2xl font-semibold mb-3'>Kitob o&#39;qishni yoqtirasizmi</h3>
                    <p className='text-[16px]'>Unda o&#39;zingiz yoqtirgan ruknga obuna bo&#39;ling. Yangi tarjimalarni yuklab olishingiz mumkin</p>
                </div>
                <Button className='text-[16px] ' variant={"secondary"}><Heart className='w-4 h-4 mr-2' /> Obuna bo&#39;lish</Button>
            </div>
        </div >
    )
}

export default Banner

const books = [
    {
        name: "1984",
        image: "/card1.jfif",
        url: "/books/1984"
    },
    {
        name: "Code 8",
        image: "/card2.jfif",
        url: "/books/code-8"
    },
    {
        name: "Rich Poor Dad",
        image: "/card3.jfif",
        url: "/books/rich-dad-poor-dad"
    },
    {
        name: "Daniel qiz",
        image: "/card4.jfif",
        url: "/books/daniel-qiz"
    },
    {
        name: "beparvolik",
        image: "/card5.jfif",
        url: "/books/beparvolik"
    },
    {
        name: "City on edge",
        image: "/card6.png",
        url: "/books/city-on-edge"
    },
    {
        name: "ego",
        image: "/card7.jfif",
        url: "/books/ego"
    },
    {
        name: "beparvolik",
        image: "/card5.jfif",
        url: "/books/beparvolik"
    },
    {
        name: "City on edge",
        image: "/card6.png",
        url: "/books/city-on-edge"
    },
    {
        name: "ego",
        image: "/card7.jfif",
        url: "/books/ego"
    }
]