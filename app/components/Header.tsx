"use client"

import { useState } from "react"
import MobileNav from "./MobileNav"

export default function Header() {

    const [navState, setNavState] = useState(false)

    return (
        <header className="p-6 flex justify-between items-center fixed top-0 left-0 w-full z-20">
            <img src="/assets/logo.svg" alt="Logo" />

            <button onClick={() => setNavState(true)} className="px-2 rounded-md">
                <img src="/assets/hamburger.svg" alt="Menu Icon" />
            </button>

            <MobileNav navState={navState} setNavState={setNavState} />
        </header>
    )
}