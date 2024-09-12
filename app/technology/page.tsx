import Image from "next/image";
import data from '@/data.json'
import Link from "next/link";
import { barlowCondensed, bellefair } from "../ui/fonts";

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
        <main className="relative flex grow overflow-y-hidden">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full -z-[1] bg-cover bg-[50%] bg-fixed" style={{ backgroundImage: "url('/assets/tech-bg.png')" }}></div>

            <section className="grow flex flex-col gap-8 pt-28 pb-6 items-center overflow-y-scroll">
                <h1 className={`${barlowCondensed.className} flex gap-5 tracking-widest text-lg`}>
                    <span className='font-bold opacity-25'>03</span>
                    SPACE LAUNCH 101
                </h1>

                <Image
                    src={currentTech.images.portrait}
                    alt={`Technology: ${currentTech.name}`}
                    width={375}
                    height={258}
                    className="w-screen"
                />

                <div className={`${bellefair.className} flex justify-center gap-8 my-5`}>
                    {technologies.map((tech, index) => (
                        <Link key={`tech${index}`} href={`?id=${index + 1}`} className={index + 1 === Number(id) || id === undefined && index === 0 ? 'w-10 h-10 rounded-full bg-white text-black grid place-content-center text-lg' : 'w-10 h-10 rounded-full border grid place-content-center text-lg'}>{index + 1}</Link>
                    ))}
                </div>

                <article className='px-6 flex flex-col gap-3 items-center text-center'>
                    <p className={`${bellefair.className} text-lg opacity-65`}>THE TERMINOLOGY...</p>
                    <h2 className={`${bellefair.className} text-2xl`}>
                        {currentTech.name.toUpperCase()}
                    </h2>

                    <p className='leading-8'>{currentTech.description}</p>
                </article>
            </section>
        </main>
    )
}