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
        <>
            <Image
                src={data.images.portrait}
                alt={`Technology: ${data.name}`}
                width={375}
                height={258}
                className="w-screen transition-all duration-500"
                style={fade ? { opacity: 0 } : { opacity: 1 }}
            />

            {children}

            <article className='px-6 flex flex-col gap-3 items-center text-center transition-all duration-500' style={fade ? { opacity: 0 } : { opacity: 1 }}>
                <p className={`${bellefair.className} text-lg opacity-65`}>THE TERMINOLOGY...</p>
                <h2 className={`${bellefair.className} text-2xl`}>
                    {data.name.toUpperCase()}
                </h2>

                <p className='leading-8'>{data.description}</p>
            </article>
        </>
    )
}