import Image from "next/image"
import { barlow, barlowCondensed, bellefair } from "./ui/fonts"

export default function Home() {
  return (
    <main className="relative flex grow">

      {/* Background Image */}
      <Image
        src="/assets/home-bg-mobile.png"
        alt="Space Background"
        fill
        className="-z-[1]"
      ></Image>

      <section className="grow flex flex-col gap-6 py-32 px-6 items-center text-center">
        <p className={`${barlowCondensed.className}`}>SO, YOU WANT TO TRAVEL TO</p>

        <p className={`${bellefair.className}`}>SPACE</p>

        <p className="leading-8">
          Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hiver kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
        </p>

        <div className='border grow w-full grid place-content-center'>
          <button className={`${bellefair.className} rounded-full w-36 h-36 bg-white grid place-content-center text-black`}>
            EXPLORE
          </button>
        </div>
      </section>

    </main>
  )
}