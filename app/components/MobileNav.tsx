import Link from "next/link"
import { usePathname } from "next/navigation";
import { barlowCondensed } from "../ui/fonts";
import { useEffect } from "react";

type Props = {
    navState: boolean,
    setNavState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileNav({ navState, setNavState }: Props) {

    const path = usePathname()

    const links = ['home', 'destination', 'crew', 'technology']

    useEffect(() => {
        console.log(path)
    }, [path])

    return (
        <aside className='fixed w-2/3 h-full top-0 -right-full backdrop-blur-2xl pl-8 py-6 flex flex-col gap-16 transition-all duration-300' style={navState ? { transform: 'translateX(-150%)' } : {}}>
            <button onClick={() => setNavState(false)} className='p-2 w-fit mr-6 self-end rounded-md'>
                <img src="/assets/xmark.svg" alt="Close Nav" />
            </button>

            <nav>
                <ul className={`${barlowCondensed.className} tracking-widest flex flex-col gap-8`}>
                    {links.map((link, index) => (
                        <li key={`link${index}`} onClick={() => setNavState(false)} className={path.includes(link) || path === '/' && index === 0 ? 'border-r-4 flex' : 'flex'}>
                            <Link href={link !== 'home' ? link : '/'} className='w-full'>
                                <span className="font-bold">0{index}</span>
                                &nbsp; &nbsp;
                                {link.toUpperCase()}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>

        </aside>
    )
}