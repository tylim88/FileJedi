'use client'
import { Pacifico } from 'next/font/google'
import { Title, Stack, Flex, Button, Text } from '@mantine/core'
import { Link, Hero } from '@/components'
import {
	MdOutlineKeyboardDoubleArrowLeft,
	MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md'

const pacifico = Pacifico({
	variable: '--font-pacifico-sans',
	subsets: ['latin'],
	weight: '400',
})

const buttons = [
	{
		label: 'Video',
		gradient: { from: 'red', to: 'yellow', deg: 90 },
		className: 'rounded-l-4xl',
		href: '/video',
		Left: MdOutlineKeyboardDoubleArrowLeft,
		Right: null,
	},
	{
		label: 'Audio',
		gradient: { from: 'yellow', to: 'violet', deg: 90 },
		className: 'rounded-r-4xl',
		href: '/audio',
		Left: null,
		Right: MdOutlineKeyboardDoubleArrowRight,
	},
] as const

export default function Home() {
	return (
		<>
			<Hero />
		</>
	)
}
