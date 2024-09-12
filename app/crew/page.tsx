import Image from "next/image";
import Link from "next/link";
import data from '@/data.json'
import { barlowCondensed, bellefair } from "../ui/fonts";

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
        <main className='relative flex grow overflow-y-hidden'>
            {/* Background Image */}
            <Image
                src="/assets/crew-bg.png"
                alt="Space Background | Crew"
                fill
                className="-z-[1] bg-fixed"
            ></Image>

            <section className="grow flex flex-col gap-8 pt-28 pb-6 px-6 items-center overflow-y-scroll">
                <h1 className={`${barlowCondensed.className} flex gap-5 tracking-widest text-lg`}>
                    <span className='font-bold opacity-25'>02</span>
                    MEET YOUR CREW
                </h1>

                <article className="flex flex-col gap-4 items-center text-center my-5">
                    <h2 className={`${bellefair.className} text-2xl`}>
                        <span className='opacity-60 block text-xl'>{currentCrew.role.toUpperCase()}</span>
                        {currentCrew.name.toUpperCase()}
                    </h2>

                    <p className="leading-8">{currentCrew.bio}</p>
                </article>

                <div className="flex justify-center gap-6 my-6">
                    {crewDetails.map((crewDetail, index) => (
                        <Link key={`crew${index}`} href={`?id=${index + 1}`} className={index + 1 === Number(id) || id === undefined && index === 0 ? 'h-3 w-3 rounded-full bg-white' : 'h-3 w-3 rounded-full bg-white opacity-60'}></Link>
                    ))}
                </div>

                <Image
                    src={currentCrew.images.png}
                    alt={`Crew: ${currentCrew.role} ${currentCrew.name}`}
                    width={541}
                    height={676}
                    className="w-3/4"
                />
            </section>
        </main>
    )
}