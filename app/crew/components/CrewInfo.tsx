"use client"

import Image from "next/image"
import { bellefair } from "@/app/ui/fonts"
import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode,
    crewMember: {
        name: string;
        images: {
            png: string;
            webp: string;
        };
        role: string;
        bio: string;
    },
}

export default function CrewInfo({ children, crewMember }: Props) {

    const [data, setData] = useState(crewMember)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(true)

        setTimeout(() => {
            setData(crewMember)
            setFade(false)
        }, 500)
    }, [crewMember])

    return (
        <div className='flex flex-col gap-8 items-center lg:grid lg:grid-cols-2 lg:grid-rows-[1fr,_auto] lg:gap-12 lg:my-auto'>
            <article className="flex flex-col gap-4 items-center text-center my-5 transition-all duration-500 md:max-w-[75vw] lg:items-start lg:text-left lg:h-full lg:justify-center" style={fade ? { opacity: 0 } : { opacity: 1 }}>
                <h2 className={`${bellefair.className} text-2xl md:text-4xl`}>
                    <span className='opacity-50 block text-xl md:text-2xl md:pb-4'>{data.role.toUpperCase()}</span>
                    {data.name.toUpperCase()}
                </h2>

                <p className="leading-8 text-blue-300 md:text-lg md:leading-10">{data.bio}</p>
            </article>

            {children}

            <Image
                src={data.images.png}
                alt={`Crew: ${data.role} ${data.name}`}
                width={541}
                height={676}
                className="w-3/4 transition-all duration-500 md:w-2/3 lg:col-start-2 lg:row-span-full lg:w-full"
                style={fade ? { opacity: 0 } : { opacity: 1 }}
            />
        </div>
    )
}