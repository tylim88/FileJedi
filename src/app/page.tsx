'use client'
import { Pacifico } from 'next/font/google'
import { Title, Stack, Flex, Button, Text } from '@mantine/core'
import { Link } from '@/components'
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
		<Stack w="100%" align="center" gap={0}>
			<Title ta="center" order={1} fz={60} fw={800} mt="10vh">
				Absolutely{' '}
				<span className={`${pacifico.className} block text-shadow-lg`}>
					Free
				</span>{' '}
				Media Converters
			</Title>
			<Flex gap="lg" my="xl">
				{buttons.map(({ gradient, href, label, className, Left, Right }) => {
					return (
						<Button
							href={href}
							component={Link}
							gradient={gradient}
							size="xl"
							w="10rem"
							radius="lg"
							className={className}
							variant="gradient"
							rightSection={Right && <Right size={28} />}
							leftSection={Left && <Left size={28} />}
						>
							{label}
						</Button>
					)
				})}
			</Flex>
			<Text className={pacifico.className}>Try Them Now!</Text>
		</Stack>
	)
}
