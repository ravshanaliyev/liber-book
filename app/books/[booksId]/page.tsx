"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import { books } from '@/data'
import Navbar from '@/components/shared/navbar'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { BookMarked, Headphones, MessageSquareText, Star, Truck } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { useDispatch } from 'react-redux'
const SingleBook = () => {
    const dispatch = useDispatch()
    const { booksId } = useParams()
    const book = books.find((book: any) => book.id === Number(booksId))
    const handleAddToCart = (product: any) => {
        product.count = 1;
        dispatch({ type: "ADD_TO_CART", product });
    };
    return (
        <div className='w-[1400px] mx-auto'>
            <Navbar />
            <div className="flex flex-col my-6">
                <h3>Bosh sahifa / Kitoblar</h3>
                <div className="flex gap-6 my-5">
                    <Image className='w-[300px] h-[400px] rounded-2xl object-cover' src={book?.image_url!} alt="" width={187.4} height={162} />
                    <div className="flex flex-col">
                        <div className="flex items-center gap-16">
                            <h2 className='text-3xl'>{book?.name}</h2>
                            <div className="flex gap-3">
                                <Button variant={"secondary"}><Headphones /></Button>
                                <Button variant={"secondary"}><BookMarked /></Button>
                            </div>
                            <div className="flex  gap-10 items-center">
                                <div className="flex gap-2">
                                    {(Array.from({ length: 4 }).map((_, index) => (
                                        <Star className='text-[#ff7f4d]' key={index} />
                                    )))}
                                </div>
                                <span className='text-[#3F51B5] text-xl'>{book?.rating}</span>
                            </div>
                            <div className="flex">
                                <MessageSquareText />
                                <p>{book?.reviews}</p>
                            </div>
                        </div>
                        <p className='text-xl text-[#3F51B5] my-4'>{book?.genre}</p>
                        <p className='my-2'>{book?.description}</p>
                        <div className="flex justify-between items-center my-6">
                            <div className='flex gap-10'>
                                <div className="flex flex-col">
                                    <p className='text-gray-500'>Muallif</p>
                                    <p className='text-lg'>{book?.author}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-gray-500'>Nashriyot</p>
                                    <p className='text-lg'>{book?.publisher}</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-gray-500'>Yil</p>
                                    <p className='text-lg'>{book?.year}</p>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className="flex gap-6 mt-6">
                            <Button onClick={() => handleAddToCart(book)} className='bg-[#3F51B5] hover:bg-[#384bb7] '><Truck className='mr-2 w-5 h-5' /> Sotib Olish - 60.000 so&#39;m</Button>
                            <Button className='' variant={"secondary"}><Truck className='mr-2 w-5 h-5' /> Audio tinglash - 60.000 so&#39;m</Button>
                            <Button variant={"secondary"}><Truck className='mr-2 w-5 h-5' /> Onlayn o&#39;qish - 60.000 so&#39;m</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleBook