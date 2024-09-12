import Image from "next/image";
import data from '@/data.json'
import Link from "next/link";
import { barlowCondensed, bellefair } from "../ui/fonts";

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function Destination({ searchParams }: Props) {

    const { dest } = searchParams
    const destinations = data.destinations

    const currentDestination = destinations.find(destination => {
        if (dest === undefined) return destinations[0]

        return destination.name.toLowerCase() === dest
    })

    return (
        <main className="relative flex grow">

            {/* Background Image */}
            <Image
                src="/assets/destination-bg-desktop.png"
                alt="Space Background | Destination"
                fill
                className="-z-[1] bg-fixed transition-all"
            ></Image>

            <section className='grow flex flex-col gap-8 pt-28 pb-6 px-6 items-center'>
                <p className={`${barlowCondensed.className} flex gap-5 tracking-widest text-lg`}>
                    <span className='font-bold opacity-25'>01</span>
                    PICK YOUR DESTINATION
                </p>

                <Image
                    src={currentDestination?.images.png as string}
                    alt={`Destination: ${currentDestination?.name}`}
                    width={481}
                    height={480}
                    className="w-1/2 my-7"
                />

                <div className={`${barlowCondensed.className} flex justify-center gap-10 tracking-widest`}>
                    {destinations.map((destination, index) => (
                        <Link key={`destination${index}`} href={`?dest=${destination.name.toLowerCase()}`} className={destination.name.toLowerCase() === dest || dest === undefined && index === 0 ? 'border-b-2 pb-2' : 'pb-2 opacity-50'}>
                            {destination.name.toUpperCase()}
                        </Link>
                    ))}
                </div>

                <article className="flex flex-col gap-5 items-center text-center">
                    <h2 className={`${bellefair.className} text-[65px]`}>{currentDestination?.name.toUpperCase()}</h2>

                    <p className='leading-8'>{currentDestination?.description}</p>
                </article>

                <div className='w-full border mt-4'></div>

                <article className='flex flex-col gap-5 text-center items-center'>
                    <div className='flex flex-col gap-2'>
                        <p className={`${barlowCondensed.className} tracking-widest opacity-75`}>AVG. DISTANCE</p>
                        <p className={`${bellefair.className} text-3xl`}>{currentDestination?.distance.toUpperCase()}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className={`${barlowCondensed.className} tracking-widest opacity-75`}>EST. TRAVEL TIME</p>
                        <p className={`${bellefair.className} text-3xl`}>{currentDestination?.travel.toUpperCase()}</p>
                    </div>
                </article>

            </section>

        </main>
    )
}