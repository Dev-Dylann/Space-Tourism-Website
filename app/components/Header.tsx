"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import MobileNav from "./MobileNav"
import { barlowCondensed } from "../ui/fonts"
import Link from "next/link"

export default function Header() {

    const [navState, setNavState] = useState(false)
    const path = usePathname()

    const links = ['home', 'destination', 'crew', 'technology']

    return (
        <header className={`${barlowCondensed.className} p-6 flex justify-between items-center fixed top-0 left-0 w-full z-20 md:justify-start md:p-0 lg:py-8 lg:justify-between xl:py-10`}>
            <img src="/assets/logo.svg" alt="Logo" className='md:mx-8 md:my-6 lg:mx-12 xl:mx-16' />

            <button onClick={() => setNavState(true)} className="px-2 rounded-md md:hidden">
                <img src="/assets/hamburger.svg" alt="Menu Icon" />
            </button>

            <MobileNav navState={navState} setNavState={setNavState} path={path} links={links} />

            <section className='hidden md:block bg-white bg-opacity-5 self-stretch grow backdrop-blur-2xl lg:grow-0'>
                <nav className='h-full px-8 text-lg flex items-center justify-end gap-10 tracking-widest before:hidden lg:pr-12 lg:pl-28 xl:px-16 xl:w-[60vw] lg:relative lg:before:block before:absolute before:w-[25vw] before:border-[0.5px] before:border-white before:-left-[35%] xl:before:w-[50%] xl:before:-left-[45%]'>
                    {links.map((link, index) => (
                        <Link key={`link${index}`} href={link !== 'home' ? link : '/'} className={path.includes(link) || path === '/' && index === 0 ? 'border-b-4 transition-all h-full flex items-center' : 'hover:border-b-4 hover:border-blue-300 transition-all h-full flex items-center'}>
                            <span className="font-bold">0{index}</span>
                            &nbsp;
                            {link.toUpperCase()}
                        </Link>
                    ))}
                </nav>
            </section>
        </header>
    )
}