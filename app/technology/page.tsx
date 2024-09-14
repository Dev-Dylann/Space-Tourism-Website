import Image from "next/image";
import data from '@/data.json'
import Link from "next/link";
import { barlowCondensed, bellefair } from "../ui/fonts";
import TechInfo from "./components/TechInfo";

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default function Technology({ searchParams }: Props) {

    const { id } = searchParams
    const technologies = data.technology

    const currentTech = id === undefined ? technologies[0] : technologies[Number(id) - 1]

    return (
        <main className="relative flex grow">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full -z-[1] bg-cover bg-[50%] lg:bg-fixed" style={{ backgroundImage: "url('/assets/tech-bg.png')" }}></div>

            <section className="grow flex flex-col gap-8 pt-28 pb-6 items-center md:pt-32 md:gap-20 md:pb-12 lg:pt-48 lg:gap-8 border">
                <h1 className={`${barlowCondensed.className} flex gap-5 tracking-widest text-lg md:text-left md:w-full md:px-8 md:text-xl lg:px-10 lg:max-w-6xl lg:text-[28px] lg:self-start lg:mx-auto xl:px-0`}>
                    <span className='font-bold opacity-25'>03</span>
                    SPACE LAUNCH 101
                </h1>

                <TechInfo technology={currentTech}>
                    <div className={`${bellefair.className} flex justify-center gap-8 my-5 md:gap-5 lg:flex-col`}>
                        {technologies.map((tech, index) => (
                            <Link key={`tech${index}`} href={`?id=${index + 1}`} className={index + 1 === Number(id) || id === undefined && index === 0 ? 'w-10 h-10 rounded-full bg-white text-black grid place-content-center text-lg md:h-16 md:w-16 md:text-2xl transition-all' : 'w-10 h-10 rounded-full border border-white/25 grid place-content-center text-lg md:h-16 md:w-16 md:text-2xl hover:border-white transition-all'}>{index + 1}</Link>
                        ))}
                    </div>
                </TechInfo>
            </section>
        </main>
    )
}