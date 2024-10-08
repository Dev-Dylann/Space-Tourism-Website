import Image from "next/image";
import Link from "next/link";
import data from '@/data.json'
import { barlowCondensed } from "../ui/fonts";
import CrewInfo from "./components/CrewInfo";

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default function Crew({ searchParams }: Props) {

    const { id } = searchParams
    const crewDetails = data.crew

    const currentCrew = id === undefined ? crewDetails[0] : crewDetails[Number(id) - 1]

    return (
        <main className='relative flex grow'>
            {/* Background Image */}
            <Image
                src="/assets/crew-bg.png"
                alt="Space Background | Crew"
                fill
                className="-z-[1] bg-fixed"
            ></Image>

            <section className="grow flex flex-col gap-8 pt-28 pb-6 px-6 items-center md:pt-32 md:px-8 md:gap-12 md:pb-12 lg:px-10 lg:max-w-6xl lg:mx-auto lg:pt-48">
                <h1 className={`${barlowCondensed.className} flex gap-5 tracking-widest text-lg md:text-left md:w-full md:text-xl lg:text-[28px]`}>
                    <span className='font-bold opacity-25'>02</span>
                    MEET YOUR CREW
                </h1>

                <CrewInfo crewMember={currentCrew}>
                    <div className="flex justify-center gap-6 my-6 lg:w-fit lg:gap-10">
                        {crewDetails.map((crewDetail, index) => (
                            <Link key={`crew${index}`} href={`?id=${index + 1}`} className={index + 1 === Number(id) || id === undefined && index === 0 ? 'h-3 w-3 rounded-full bg-white lg:h-4 lg:w-4 transition-all' : 'h-3 w-3 rounded-full bg-white lg:h-4 lg:w-4 opacity-20 hover:opacity-50 transition-all'}></Link>
                        ))}
                    </div>
                </CrewInfo>
            </section>
        </main>
    )
}