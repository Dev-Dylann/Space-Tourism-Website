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
        <header className={`${barlowCondensed.className} p-6 flex justify-between items-center fixed top-0 left-0 w-full z-20 md:justify-start md:p-0`}>
            <img src="/assets/logo.svg" alt="Logo" className='md:mx-10 md:my-6' />

            <button onClick={() => setNavState(true)} className="px-2 rounded-md md:hidden">
                <img src="/assets/hamburger.svg" alt="Menu Icon" />
            </button>

            <MobileNav navState={navState} setNavState={setNavState} path={path} links={links} />

            <section className='hidden md:block bg-white bg-opacity-5 self-stretch grow backdrop-blur-2xl'>
                <nav className='h-full px-8 text-lg flex items-center justify-end gap-10 tracking-widest'>
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