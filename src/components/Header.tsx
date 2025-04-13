'use client'
import { Flex, Text, ActionIcon } from '@mantine/core'
import { Link } from './Link'
import { BsGithub } from 'react-icons/bs'

const arr = [
	{ href: '/', label: 'Video' },
	{ href: '/audio', label: 'Audio' },
	{ href: '/motivation', label: 'Motivation' },
	{
		href: 'https://github.com/sponsors/tylim88',
		label: 'Donate',
	},
] as const

export const Header = () => {
	return (
		<Flex w="100%" justify="flex-end" pt="md" gap="xl" align="center">
			{arr.map(({ href, label }) => (
				<Text component={Link} href={href} size="xl" fw={600} key={href}>
					{label}
				</Text>
			))}
			<ActionIcon
				component={Link}
				href="https://github.com/tylim88/FileJedi"
				variant="transparent"
				color="black"
				size="xl"
			>
				<BsGithub size="75%" />
			</ActionIcon>
		</Flex>
	)
}
