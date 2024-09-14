import Image from "next/image"
import { barlowCondensed, bellefair } from "./ui/fonts"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex grow overflow-y-hidden">

      {/* Background Image - mobile and tablets */}
      <Image
        src="/assets/home-bg-mobile.png"
        alt="Space Background"
        fill
        className="-z-[1] lg:hidden"
      />

      {/* Background Image - desktop */}
      <Image
        src="/assets/home-bg-desktop.png"
        alt="Space Background"
        fill
        className="-z-[1] hidden lg:block"
      />

      <section className="grow flex flex-col pt-32 pb-12 px-6 items-center text-center md:pt-40 md:px-8 md:justify-center lg:flex-row lg:justify-between lg:items-end lg:pb-20 lg:px-10 lg:text-left lg:gap-10 max-w-6xl mx-auto xl:pb-32">
        <article className='flex flex-col'>
          <p className={`${barlowCondensed.className} text-lg tracking-widest text-blue-300 md:text-xl`}>SO, YOU WANT TO TRAVEL TO</p>

          <p className={`${bellefair.className} text-[100px] md:text-[124px]`}>SPACE</p>

          <p className='leading-8 text-lg text-blue-300 md:px-10 md:text-base md:leading-10 lg:px-0'>
            Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hiver kind of on the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
          </p>
        </article>

        <div className='grow w-full grid place-content-center md:grow-0 md:py-12 lg:place-content-end'>
          <Link href="/destination" className={`${bellefair.className} text-xl text-blue-900 rounded-full w-36 h-36 bg-white grid place-content-center md:w-60 md:h-60 md:text-3xl hover:scale-90 transition-all duration-700 relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full before:bg-white before:bg-opacity-50 hover:before:scale-150 before:-z-[1] before:transition-all before:duration-700`}>
            EXPLORE
          </Link>
        </div>
      </section>

    </main>
  )
}