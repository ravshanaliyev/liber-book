"use client"
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ShoppingCart, UserRound } from 'lucide-react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import Link from 'next/link'
import handleAxios from '@/api/instance'
import { loadState, saveState } from '@/helpers/storage'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const submit = (data: any) => {
        handleAxios.post("/users", data)
            .then((res) => {
                saveState("user", res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                if (loadState("user")) {
                    push("/profile")
                }
            })
    }
    const user = loadState("user")

    const cart_products = useSelector((state: any) => state.cart.cart_products)
    return (
        <div className='flex items-center justify-between my-4'>
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
                {
                    user && (
                        <div className='flex items-center gap-4'>
                            <Link href="/profile/kitoblarim">
                                <div className="relative">
                                    {/* <ShoppingCart  /> */}
                                    <Button variant={"secondary"}><ShoppingCart className='text-[25px] ' /></Button>
                                    <div className="absolute top-[-6px] right-[5px] w-[20px] h-[20px] rounded-full bg-[#3F51B5] text-white text-[14px] flex justify-center items-center">
                                        {cart_products
                                            .map((product: any) => product.count)
                                            .reduce((a: number, b: number) => a + b, 0)}
                                    </div>
                                </div>
                            </Link>
                            {/* <Button variant={"secondary"}><ShoppingCart /></Button> */}
                            <Link href={"/profile"}>
                                <img className='rounded-full w-[45px] h-[45px]' src={user?.avatar} />
                            </Link>
                        </div>
                    )
                }
                {
                    !user && (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className='bg-[#3F51B5] hover:bg-[#3f51b5df]'><UserRound className='w-4 h-4 mr-2' /> Kirish</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Assalomu alaykum Xush kelibsiz!</DialogTitle>
                                    <DialogDescription>
                                        Hisobingizga kirish uchun login va parolni kiriting
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleSubmit(submit)}>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Input id="username" {...register('name', { required: true })} className="col-span-4" placeholder='Username' />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Input id="email" {...register('email', { required: true })} className="col-span-4" placeholder='Email' />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Input id="password" {...register('password', { required: true })} className="col-span-4" placeholder='********' />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Input id="avatar" {...register('avatar', { required: true })} className="col-span-4" placeholder='Avatar' />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button className='bg-[#3F51B5] hover:bg-[#3f51b5df] w-full' type="submit">Kirish</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar