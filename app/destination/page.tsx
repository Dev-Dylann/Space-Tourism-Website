import Image from "next/image";
import data from '@/data.json'
import Link from "next/link";
import { barlowCondensed, bellefair } from "../ui/fonts";
import DestinationInfo from "./components/DestInfo";

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default function Destination({ searchParams }: Props) {

    const { dest } = searchParams
    const destinations = data.destinations

    const currentDestination = destinations.find(destination => {
        if (dest === undefined) return destinations[0]

        return destination.name.toLowerCase() === dest
    })

    return (
        <main className="relative flex grow">

            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full -z-[1] bg-cover bg-[50%] bg-fixed" style={{ backgroundImage: "url('/assets/destination-bg-desktop.png')" }}></div>

            <section className='grow flex flex-col gap-8 pt-28 pb-6 px-6 items-center md:pt-32 md:px-8 md:gap-12 md:pb-12 lg:px-10 lg:max-w-6xl lg:mx-auto lg:pt-48'>
                <h1 className={`${barlowCondensed.className} flex gap-5 tracking-widest text-lg md:text-left md:w-full md:text-xl lg:text-[28px]`}>
                    <span className='font-bold opacity-25'>01</span>
                    PICK YOUR DESTINATION
                </h1>

                <DestinationInfo destination={currentDestination!}>
                    <div className={`${barlowCondensed.className} flex justify-center gap-10 tracking-widest md:text-lg lg:justify-start`}>
                        {destinations.map((destination, index) => (
                            <Link key={`destination${index}`} href={`?dest=${destination.name.toLowerCase()}`} className={destination.name.toLowerCase() === dest || dest === undefined && index === 0 ? 'border-b-2 pb-2 transition-all' : 'pb-2 text-blue-300 hover:border-b-2 hover:border-blue-300 transition-all'}>
                                {destination.name.toUpperCase()}
                            </Link>
                        ))}
                    </div>
                </DestinationInfo>

            </section>

        </main>
    )
}