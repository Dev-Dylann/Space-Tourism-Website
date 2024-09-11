import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google'

const bellefair = Bellefair({ subsets: ['latin'], display: 'swap', weight: '400' })

const barlow = Barlow({ subsets: ['latin'], display: 'swap', weight: '400' })

const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], display: 'swap', weight: '400' })

export { bellefair, barlow, barlowCondensed }