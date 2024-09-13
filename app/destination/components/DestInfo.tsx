"use client"

import Image from "next/image"
import { bellefair, barlowCondensed } from "@/app/ui/fonts"
import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode,
    destination: {
        name: string;
        images: {
            png: string;
            webp: string;
        };
        description: string;
        distance: string;
        travel: string;
    }
}

export default function DestinationInfo({ children, destination }: Props) {

    const [data, setData] = useState(destination)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(true)

        setTimeout(() => {
            setData(destination)
            setFade(false)
        }, 500)
    }, [destination])

    return (
        <div className='flex flex-col gap-8 md:gap-12 items-center lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(5,_auto)] lg:gap-y-8 lg:gap-x-16 lg:my-auto xl:gap-x-24'>
            <Image
                src={data?.images.png as string}
                alt={`Destination: ${data?.name}`}
                width={481}
                height={480}
                className="w-1/2 my-7 transition-all duration-500 lg:row-span-full lg:w-full"
                style={fade ? { opacity: 0 } : { opacity: 1 }}
            />

            {children}

            <article className="flex flex-col gap-5 items-center text-center transition-all duration-500 md:gap-1 lg:text-left lg:items-start" style={fade ? { opacity: 0 } : { opacity: 1 }}>
                <h2 className={`${bellefair.className} text-[65px] md:text-[80px]`}>{data?.name.toUpperCase()}</h2>

                <p className='leading-8 text-blue-300 md:text-lg md:leading-10 md:max-w-[75vw]'>{data?.description}</p>
            </article>

            <div className='w-full border-white border mt-4 opacity-25 md:max-w-[75vw] md:mt-0'></div>

            <article className='flex flex-col gap-5 text-center items-center transition-all duration-500 md:flex-row md:w-full md:justify-between md:max-w-[75vw] lg:text-left lg:items-start' style={fade ? { opacity: 0 } : { opacity: 1 }}>
                <div className='flex flex-col gap-2 w-full'>
                    <p className={`${barlowCondensed.className} tracking-widest opacity-75`}>AVG. DISTANCE</p>
                    <p className={`${bellefair.className} text-3xl`}>{data?.distance.toUpperCase()}</p>
                </div>

                <div className='flex flex-col gap-2 w-full'>

                    <p className={`${barlowCondensed.className} tracking-widest opacity-75`}>EST. TRAVEL TIME</p>
                    <p className={`${bellefair.className} text-3xl`}>{data?.travel.toUpperCase()}</p>
                </div>
            </article>
        </div>
    )
}