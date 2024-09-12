import { barlowCondensed } from "../ui/fonts";

type Props = {
    navState: boolean,
    setNavState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileNav({ navState, setNavState }: Props) {
    return (
        <aside className='fixed w-2/3 h-full top-0 -right-full backdrop-blur-lg pl-8 py-6 flex flex-col gap-16 transition-all duration-300' style={navState ? { transform: 'translateX(-150%)' } : {}}>
            <button onClick={() => setNavState(false)} className='p-2 w-fit mr-6 self-end rounded-md'>
                <img src="/assets/xmark.svg" alt="Close Nav" />
            </button>

            <nav>
                <ul className={`${barlowCondensed.className} flex flex-col gap-8`}>
                    <li className='border-r-4'>
                        <span className="font-bold">00</span>
                        &nbsp; &nbsp;
                        HOME
                    </li>

                    <li className=''>
                        <span className="font-bold">01</span>
                        &nbsp; &nbsp;
                        DESTINATION
                    </li>

                    <li className=''>
                        <span className="font-bold">02</span>
                        &nbsp; &nbsp;
                        CREW
                    </li>

                    <li className=''>
                        <span className="font-bold">02</span>
                        &nbsp; &nbsp;
                        TECHNOLOGY
                    </li>
                </ul>
            </nav>

        </aside>
    )
}