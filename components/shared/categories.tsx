"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
const Categories = () => {
    return (
        <div className='my-8'>
            <h1 className='text-3xl mb-4'>Ruknlar</h1>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full "
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {categories.map((category, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 ">
                            <div>
                                <Card>
                                    <Link href={`/categories${category.url}`} className="w-full">
                                        <CardContent className="flex flex-col gap-2  items-center justify-center border-none">
                                            <Image src={category?.image_url} alt="" className='mt-4 h-[162px] w-full rounded-lg object-cover' width={187.4} height={162} />
                                            <p className='mb-[-10px]'>{category.name}</p>
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
    )
}

export default Categories

const categories = [
    {
        id: 1,
        url: "/jahon-adabiyoti",
        name: 'Jahon adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/b1b2/fae2/567b0026b0060e44e1237d226a753d04?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6z1nzh0DNAEp2RqoakHLq-0pg3rsZdWnWXfCy9wu-I-cRCFDgcoXowAgHMTPci6exsvu6cAmprNHPx82ZQhUmoPj7fEFGJzEn4GOQPD1ojy8ztbRUIkqPgHdgtXGyof6TnB-QrBcjKV-oJUJEpUlomqtaoD0KuzEX-h5l8u-K-w8bSQuzrxtXX6L7kl73grQfx5NHs0PNVr7wFDu8e2H8o6Q5vFk7pCrMFmXx264sfuiT0w8tnAcIqWwrFMA~7Y9tYiXUDDCxwiD-30oHPA-mQK37VmCg~Lu9TBxpbpZbH6S9Gk2rYc6Yih8wBKetuOEip5Ac6W-Ah7FpIRkUXpeA__',
    },
    {
        id: 2,
        url: "/uzbek-adabiyoti",
        name: 'Uzbek adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/7d94/8b6f/a2e3145dd6529ca766e7f3b114f987d8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edxzzyXC9-Y6df8TtaJorUu3WOfO8RDCTahL4q8snZWVfcJZg9kakd7wDxNIyQFacc1CmpuxQ05gpNs8zNuBORJPtwIrhktsVS4J-vcJ2rB18EzBPCRzbUAHFgJcQvt~zIhZ46XnEUYpA64B58YOMyixKUqJw2i~ix~iusXHnee6M-l-ks4HxzcEJrFhb~U0BUJtr3We8-vxT7fsBy~qZ5p9eNPY04jzRru5cE0giCe0r8U5g0X6g-GebDhqEmE1lReG4E-3UPp1bLZ87blbwgkW-vzxwB9mbkqmRrpK8AnUUkJb93uPIzSg~3rMx-yP2bxoP-2mbWlL22m8~isHFA__',
    },
    {
        id: 3,
        url: "/biznes-va-psixologiya",
        name: 'Biznes va psixologiya',
        image_url: 'https://s3-alpha-sig.figma.com/img/980e/5745/b64d15cdda2d320762998db793326873?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lU0582N6gjqfcGZ8iGaOT1iQSSlErrhvIgBBvonCaE7b8HpfTvmooIzh3genSDW6LKE7gyRd5v8hxJGWjU3oavEov1weplHHmKMr~6iopGxrcCKI6GqAVhYr5WgLjEjtXq9UJYB6FmU9cTvazsjWrx8WNjuvU9ZiQOFZFgjR~e0Ck8TXXDcNHxr8WZsqcKYdJ7nob~YCD3UM8Q8C21pWBmwOKDgi7gshpKgploBMBdc3ifpgdIHQjrZB27l4AaA0UYk3HI6aoYhh20S0Kicz8WI9GkPNgZPh501btctM2lYtqs-80Zs7EFpf9F4ERyumk8xpmWGbVP5NNPNOzrn73A__',
    },
    {
        id: 4,
        url: "/bolalar-adabiyoti",
        name: 'Bolalar adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/7682/fd4e/4ace2f7a22783371eb9ab1cdc157b6b8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eRblaE06MVtAA7MUA1-hV~99PkCPTK8wB5C7BmBx3d2GkfsF82lQ-voE6Rws2hjfeB~XtHAiyAvTW1OYfy~1kGQIR6VrMp0VRRbK6tyjgwsyzxPaE6mjQwXgiCnyQGFbziU4UYXa8XsKlTWIfVbS5ujDcPcU1QYA0RSlQQX6pp9v9xRuperROAAG-CkmpQzmXThLtVfyf0gWlV5gOx4OTKNXXFbyGmPw6PamYXs0sWwwrNeLMFzZhewLpnrJyqa3aoAKTv4NaDGiNOZafQu~6KmorfopmJ8ASWT8kyFZH0zzV99m7AF4aixTpBiUFdeNU95qGSWk8dL4aYXMGZdOqQ__',
    },
    {
        id: 5,
        url: "/detektivlar",
        name: 'Detektivlar',
        image_url: 'https://s3-alpha-sig.figma.com/img/618c/2fb7/6c9454e461b3ce8b8f2ee761af7c6033?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gXmFA25l~ojTU8EuagAeEWH7g5HPuxYuCq35mjzGelx03ybXCEdY2wMJNXEkUyplrRdWZmyF62qnxV4l4AHn8EZKCtp0S2VBRNkftL3f81wN0zamcHMqtqz7~HPOpsrEqf19FT0txEcjm6rQf76VmvPuwYt3VkD3ZNdPlhy7QjeTejj2yY2TS3DRZgM7argN3fX1gbDRFl-ajHTgBCOSxqOkMsZqzKQmRiUDBGpWsZk0WUTfkPQxAs8yvn0hbcEDKHyex4Arno0T0mDJYbgepwUf2Ym2HYTYTO8hJwPJ2haMGywvIOBc9cErIr6KZxnEeIDvmP9qcm5lPfww6dYuig__',
    },
    {
        id: 6,
        url: "/fantastika",
        name: 'Fantastika',
        image_url: 'https://s3-alpha-sig.figma.com/img/000f/eba6/6b8e2287ac861589c70db4e3f9ba1303?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c6Pt7uG0ADuBLtMDPn~6Jw8j47hcblveZa6CZkd70gY7CjRhYyZ-shA~G~4R1k5WXXkZSV34rNI3et4JjpbO3C05BIueoDH6bT6760dS3kvutuUI8A2tjK8IPd7jS2-H3ajxObTHofI-QlpHNw6gGPm4Oqnh05-uaS47Rbv5cyyF892uBmVQWhr~sPcfriudxeiBXDONJ7zS-53yJkXVsIjGcpUjLpnIDLNUKFXjBaQUjgVEJ2d5ZRyTN70j9Ya-WellktQr-ItDlpQxOz-Vqdc48UYfbo3M1TWCGZTXoyTZrGjtu2JUStHOVLcfS2PH0vm70AdMyj8iazqemgLzTw__',
    },
    {
        id: 7,
        url: "/diniy-adabiyoti",
        name: 'Diniy adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/048f/7bc9/07d4abfd4b24443f46e9eb6af1dc89bf?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdiIBEv9Bfzbzcy6JQxwpvu1sRyf5R~VFvzKlp4aXERJYhTog5x488YTCQAubXDEr1pR7qTbHm5sJoC-GEwoEX-0LVhhlxG76hltKbB~L~y6wmqdEuNMn~zzlrLE6oA7mXIQFrOVAiIe5LaLP8HHg1681~lQnPfU9TNfJZCuj9Y2Bn4NcTt8NWv3BYo-eRl0eeYCNsQbBx0umEUEbVsPtqasmeCvecL6Gj~U4WD26XnXnXm-M9NNP26NGBgG6SnuVfSGLb01ZjoS4pGk~gtmWf-BPzCwV8~Z8DhKOLYwlUGyz7vo3yRf7S6RVLhlBrBbUNoOXrBR~AAxNb8515ckUQ__'
    },
    {
        id: 8,
        url: "/zamonaviy-uzbek-adabiyoti",
        name: 'Zamonaviy uzbek adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/2b81/a709/3aa5a9e82007af63bc1e6a5442b77ba8?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eMHHfOuOkRaVOw1yL3~06JDN0q4h72jdCcQhpcTqvItvt1HmvSHKjViTpNAXsT2DQzYtKnDFqu1EQSyEuaYPeNNiZUaa7brmM2ozSuUURbHZbKV8zta7rMxB1DfS6RItJN~ZNuBkybECpeL4zkkkGDewzquq3aPTaG6QBNZhpHTigiYK1UIQf2on0mIoYIj7Jwh9H9cBeaqB0n8j-vmZ0jB4Ln2cHM5CumiFEcVmNNg2JwsgUcAcTtfVVSnv58SVTNYPAiRf-0GGMFLnNKiow3oUad7RTpxfQgZ7HM69EBAjOjkAHfMtjRtbx-N6GraWUhPEu5tkIP-qKJ-3pBxrHA__'
    },
    {
        id: 9,
        url: "/fan-va-talim",
        name: 'Fan va talim',
        image_url: 'https://s3-alpha-sig.figma.com/img/ff29/4c51/876afbebec030646c875365057afcc36?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ETBNy8O0ZEpYfgdGRBo2N1i6psIXCYnOuhlk7KFaUeiyQ~T8uhs4yJhjTQZ7OzBdCrL3udCY~rhT3QQQn5fAmR0J6g9pYlLljQucQ9XXAg9SY2y63PwkH-a8~h3~v2NsaZFGgj~DBhQjinll0zbIz5rLU0HONIg1pM5vuiAvXq9Pq86DFeGFNvwZ~v8XL7ms5PEFgJhdmR93Q1eLODKgk7ZotrXnjHb6G1gWKjvzIryR2ugo9Hj9dhRrQb3TXtVVYGrMShfpjwwB-IoqBS60z8lKLUpZdi5F5Ra50rHCxt67S43ukVsEpGB7i-HE09c2jMGccgLZCUztdhn36v4Lwg__'
    }
]