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
                                            <img src={category?.image_url} alt="" className='mt-4 h-[162px] w-full rounded-lg object-cover' width={187.4} height={162} />
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
        image_url: 'https://s3-alpha-sig.figma.com/img/b1b2/fae2/567b0026b0060e44e1237d226a753d04?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VwOGA6eDlu1ujiKelzXKe8bDWP6L6y7qzGQUog1rl0GpS4qpobjf7xKhE3J6ddr2Q1WcT047bCIPztYAVs6DWdQBrStly2VCmuc0iaseNwIGxfK-D8qfDWL~9CVwHUuLZo9SwjnYxpWrH8KvPeemZi~e9oUrcFKzwbvQyVzObhhO9WyXzVb7tiiXgD0soVoCNp2mMswmP7QidUuCi84zPsErtF1-xR8XYAX7NwgAr35~hF6oCTE85PpWTvInG-hQu02WHQxVUnTuVLAEiK66mQeRGg0OBsCrlWCDzenplEksgbjtqzugIFTLPwXL2EKNULjANf1RsVMU~k3~H-B7OQ__',
    },
    {
        id: 2,
        url: "/uzbek-adabiyoti",
        name: 'Uzbek adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/7d94/8b6f/a2e3145dd6529ca766e7f3b114f987d8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8ev9H8HFnUfTZT6m9OrJL5wusDGPWRh7nCTyWmYXESlvKtVdY7wf4i6gSgL-3ArW8i6DNIgIWLppsgU0hzurFv-eckVjbtOu51pbQOKHHuDf-cAATLyCMtoCIS1jOO8RcWmTnhuxYW4v~AzeYs82wkAl2dI3ZKabHVb8Li4jqoRFcCwdi9sTzXt7cC5fnwgARmaH0LLH7MTCJfVLCHar0EC~Z27mQ53tbKjczMTGZQdGDAfUlypshl-4DqjKUnI7izODmcwd3pldeCKECZiFkeHDXqp1TjlrWPKdrlA1F63Twh95gENih0Wz4WOtw~Bk6~91N71Q63eOc3Al~PJMw__',
    },
    {
        id: 3,
        url: "/biznes-va-psixologiya",
        name: 'Biznes va psixologiya',
        image_url: 'https://s3-alpha-sig.figma.com/img/980e/5745/b64d15cdda2d320762998db793326873?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mFeEFFn6m6UwyxqGZciflXaeUfTxEI7h9iZrQy-BV7SrmeH6vK72laCX-E9tBKScaC2fCEC7HwsB5xi~MfQe4Mem2EfuAv2hEtmdje2-McppQf-S5SDgNPL-fl~2J7zOhT2cwuj5pYr6jGbdzI4IjAjTMDFZGbIAKnkuH1yKFhXRZodujxLmgZzvP~KqVfP9zJfv9z9Fw~FpRzSZhIJL-bc8RUmBbM5KxI0v9pS2b2kuKu7b4-I5uQXbDk3MZHvEG~tD38TtNsngGrJUKHc4t7L5YncJXY0zZEdSMy3upfWLaa0O1PLs9muR5KwZPU7eZQt2vjW-IQTSzAVHeOXZSQ__',
    },
    {
        id: 4,
        url: "/bolalar-adabiyoti",
        name: 'Bolalar adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/7682/fd4e/4ace2f7a22783371eb9ab1cdc157b6b8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jiCOPxvjGd0EnNTlAYg8sKBV1ybrld7K-7-og5sQ41apW4JxPJXZsy5d9FoY2tzSTE16JPkOO8cCSy4lSUQ2KeG3Kk0XHSTLy8P2C1OlJzCw8TPh18MU2bbtKzP654EJ3MGbvCTvD-jKB7wIQqQCgRUfDrv45hE2rbf9f0hHvkMfhCgDDSTswSoeCSckWDzj7p7eL6RDV68mMPyE-IkYruDNeKV9vjV9zKy7T42ZBjths1u8TY0hj0s8rGBOgEefLsLkP~AhCq~osA-kmGpTDHjdwHyq560YYUhK-LBrmzqxUndV66e5D~uAiR7zdZE2Z8OkEPFplFDg07KiyqVWyQ__',
    },
    {
        id: 5,
        url: "/detektivlar",
        name: 'Detektivlar',
        image_url: 'https://s3-alpha-sig.figma.com/img/618c/2fb7/6c9454e461b3ce8b8f2ee761af7c6033?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDKpTU7NFxV44cd2JqN--~DsprtEacwumiDHJvPvY37DBC2cMq47v3lXwitpJPzzQmt97h-Fc4ZLfCV0aWmSJ6pY3jicw7dxE86fxLdU4khJznwBUJmJlZgIXEN1OVwCSf9FYJgwBKqKoyFzcctNOw0LxKHsFoYfv91HFPd1UK8wILEdmj-3Iw7J9K0VqLCj9yyh8kuhriMctG9T7VGQ~wRKS1hWYH~D7TYDYdP9l7slsQM7DPmmQP2oAdHiybTlyj~jvgaYL-uqT0WGqlgXNSmklVPl20eKqaeiHuaEAcCOTJdTGNDSyZe5dl~NvseDdqKCoIXNh6WwC48I47whuQ__',
    },
    {
        id: 6,
        url: "/fantastika",
        name: 'Fantastika',
        image_url: 'https://s3-alpha-sig.figma.com/img/000f/eba6/6b8e2287ac861589c70db4e3f9ba1303?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GVFESnDyeekb9kIUulRY0vQ3CxMRoxQ8upwD5-Km6C0OYLQjWY6dpXW1jKcqWREKSVWhPbKiWjW3ziRCyoxS906ELiPnud26yVY6RUv1b5uFQ1TKZec0q2Gza3W~-1au4881XotySNerMjvwEKozRutp96yhAvkamRnmuyJUGxeJegSwtR60j-GH5NIW5rnxX~hTJcKIkCT-Cnbmc3WOkeGTDcPhYNuU1tGVPoHFu6LASrDQ3lGMR1k1M0F4RYYnOROnYWjqPGjU4euQR0trVHioecf-bXCGM44p4DV1eYYrXB-ghjTzMKA5Jr~1hAfPYa0LV~elW2a5GHM724-RIA__',
    },
    {
        id: 7,
        url: "/diniy-adabiyoti",
        name: 'Diniy adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/048f/7bc9/07d4abfd4b24443f46e9eb6af1dc89bf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W9vX7X3J2ZBBKV1MzOjYoldUS9mZqWnpcy-v-2XoIogWIQ369RbVworFP8B3~hgbCOys-ymyhVkwEBYy~rICxUs5E30aK4-Opxxi-g8LM6DVnTW3qLi~M7FZMCMBm231YQDI4hAPMA699L~v7qZwrev3SvSIhtrfAXcXE89LnhbsDiYI77Oe-PZ3qhHQNs4Vnt6EX~q1jXSNU8oSlbwVUPcw5x~wews33kvIjITIVXsC5tZE-3jYqZ0EwnDf7Xf7J9kQo-OrlcSNQNkpwfsXZLZ1dSbAx~2GeAHTO9Vo7asW4ydQvaiddjrEGU54PGne1YvrbuHYaRqEeppyAkHdfQ__'
    },
    {
        id: 8,
        url: "/zamonaviy-uzbek-adabiyoti",
        name: 'Zamonaviy uzbek adabiyoti',
        image_url: 'https://s3-alpha-sig.figma.com/img/2b81/a709/3aa5a9e82007af63bc1e6a5442b77ba8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOLO5a8kZ1z5DaPU7MNNwqkFLY9g-TOIb1nTfsSNWJuZRERW35ZKH8K98ABfwsdYQgFqtFxzkorhR0K-3Q9Kj8s7W0UVqc8fd46RS7Z0drFYgskECl6omGuBx58u50Kg7GE16LwXkWaLNz9XAYOkD2l2TdhY2Uc6UF4C7~MbKi1m2ttAzX7Bs6AETlQOuk-67TRsDA0HH~GKid4h6P6BQW80zYwSijMZ4--g~gY7GHGNpOfBfFWK6inc6E27~BXWNd7sxoCPme99ZapQnwgcEdOvAKksSiK8EPLKJ8gZBs2o7LRykobnG512O4Pt-030J90W6kqIcFwyO9f-yeYb0w__'
    },
    {
        id: 9,
        url: "/fan-va-talim",
        name: 'Fan va talim',
        image_url: 'https://s3-alpha-sig.figma.com/img/ff29/4c51/876afbebec030646c875365057afcc36?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbPL24KeWIuG4K0m60O7VNDjYXl8kYUhOmFf-VJXzJI0KG0No8e13eiL73namyBdgZK~kAlrG7uZ7RdXhtCCpdW~opj7ui1QGDW3omSPD-Gj9kQbiYPDgO94Rk~8dXIJyttzugh3N3Bwqk7DeT5ion4aT5vR8FvsfRmS~s8oSG2wUoNsqpPUr1TZt9lL3Xvm6C2EJle5L4xrX4vwocy8DU5NYqCiXs7oq-wCvdNuWURxkEdwT9kxuh9tC3pYnRauPV8lZ7KeFLmhbU7C34luZ6~QpRz5UX7tYFLzF6gVj224ht0T09spTFMzxceOaPGyCd-vSQoLCaUW~cX-GSgXvQ__'
    }
]