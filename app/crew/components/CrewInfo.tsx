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
        <>
            <article className="flex flex-col gap-4 items-center text-center my-5 transition-all duration-500" style={fade ? { opacity: 0 } : { opacity: 1 }}>
                <h2 className={`${bellefair.className} text-2xl`}>
                    <span className='opacity-60 block text-xl'>{data.role.toUpperCase()}</span>
                    {data.name.toUpperCase()}
                </h2>

                <p className="leading-8">{data.bio}</p>
            </article>

            {children}

            <Image
                src={data.images.png}
                alt={`Crew: ${data.role} ${data.name}`}
                width={541}
                height={676}
                className="w-3/4 transition-all duration-500"
                style={fade ? { opacity: 0 } : { opacity: 1 }}
            />
        </>
    )
}