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
        <>
            <Image
                src={data?.images.png as string}
                alt={`Destination: ${data?.name}`}
                width={481}
                height={480}
                className="w-1/2 my-7 transition-all duration-500"
                style={fade ? { opacity: 0 } : { opacity: 1 }}
            />

            {children}

            <article className="flex flex-col gap-5 items-center text-center transition-all duration-500" style={fade ? { opacity: 0 } : { opacity: 1 }}>
                <h2 className={`${bellefair.className} text-[65px]`}>{data?.name.toUpperCase()}</h2>

                <p className='leading-8'>{data?.description}</p>
            </article>

            <div className='w-full border mt-4 opacity-65'></div>

            <article className='flex flex-col gap-5 text-center items-center transition-all duration-500' style={fade ? { opacity: 0 } : { opacity: 1 }}>
                <div className='flex flex-col gap-2'>
                    <p className={`${barlowCondensed.className} tracking-widest opacity-75`}>AVG. DISTANCE</p>
                    <p className={`${bellefair.className} text-3xl`}>{data?.distance.toUpperCase()}</p>
                </div>

                <div className='flex flex-col gap-2'>

                    <p className={`${barlowCondensed.className} tracking-widest opacity-75`}>EST. TRAVEL TIME</p>
                    <p className={`${bellefair.className} text-3xl`}>{data?.travel.toUpperCase()}</p>
                </div>
            </article>
        </>
    )
}