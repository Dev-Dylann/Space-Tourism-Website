import Image from "next/image"

export default function Home() {
  return (
    <main className="relative min-h-screen">

      {/* Background Image */}
      <Image
        src="/assets/home-bg-mobile.png"
        alt="Space Background"
        fill
        className="-z-[1]"
      ></Image>

      <header className="p-5 flex justify-between items-center">
        <img src="/assets/logo.svg" alt="Logo" />

        <button className="px-2 rounded-md">
          <img src="/assets/hamburger.svg" alt="Menu Icon" />
        </button>
      </header>


    </main>
  )
}