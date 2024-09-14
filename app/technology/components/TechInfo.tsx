"use client"

import Image from "next/image"
import { bellefair } from "@/app/ui/fonts"
import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode,
    technology: {
        name: string;
        images: {
            portrait: string;
            landscape: string;
        };
        description: string;
    }
}

export default function TechInfo({ children, technology }: Props) {

    const [data, setData] = useState(technology)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(true)

        setTimeout(() => {
            setData(technology)
            setFade(false)
        }, 500)
    }, [technology])

    return (
        <div className='flex flex-col gap-8 md:gap-4 lg:flex-row lg:gap-10 lg:my-auto lg:max-w-6xl'>
            <Image
                src={data.images.portrait}
                alt={`Technology: ${data.name}`}
                width={375}
                height={258}
                className="w-screen transition-all duration-500 md:h-[35vh] md:object-cover lg:order-1 lg:self-center"
                style={fade ? { opacity: 0 } : { opacity: 1 }}
            />

            {children}

            <article className='px-6 flex flex-col gap-3 items-center text-center transition-all duration-500 lg:px-0 lg:items-start lg:justify-center lg:text-left lg:py-36 lg:w-[45%] lg:shrink-0' style={fade ? { opacity: 0 } : { opacity: 1 }}>
                <p className={`${bellefair.className} text-lg opacity-50 md:text-2xl`}>THE TERMINOLOGY...</p>
                <h2 className={`${bellefair.className} text-2xl md:text-4xl lg:text-5xl`}>
                    {data.name.toUpperCase()}
                </h2>

                <p className='leading-8 text-blue-300 md:max-w-[75vw] md:text-lg md:leading-10'>{data.description}</p>
            </article>
        </div>
    )
}