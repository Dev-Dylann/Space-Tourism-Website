import Image from "next/image"
import { barlowCondensed, bellefair } from "./ui/fonts"

export default function Home() {
  return (
    <main className="relative flex grow overflow-y-hidden">

      {/* Background Image */}
      <Image
        src="/assets/home-bg-mobile.png"
        alt="Space Background"
        fill
        className="-z-[1]"
      />

      <section className="grow flex flex-col pt-32 pb-12 px-6 items-center text-center">
        <p className={`${barlowCondensed.className} text-lg tracking-widest`}>SO, YOU WANT TO TRAVEL TO</p>

        <p className={`${bellefair.className} text-[100px]`}>SPACE</p>

        <p className='leading-8 text-lg'>
          Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hiver kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
        </p>

        <div className='grow w-full grid place-content-center'>
          <button className={`${bellefair.className} text-xl rounded-full w-36 h-36 bg-white grid place-content-center text-black`}>
            EXPLORE
          </button>
        </div>
      </section>

    </main>
  )
}