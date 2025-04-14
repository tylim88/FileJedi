'use client'
import { Flex, Text, ActionIcon } from '@mantine/core'
import { Link } from './Link'
import { BsGithub } from 'react-icons/bs'

const arr = [
	{ href: '/video', label: 'Video' },
	{ href: '/audio', label: 'Audio' },
	{ href: '/motivation', label: 'Motivation' },
] as const

export const Header = () => {
	return (
		<Flex
			component="nav"
			w="100%"
			justify="space-between"
			pt="md"
			align="center"
			display={{ base: 'none', sm: 'flex' }}
		>
			<Text component={Link} href="/" fw={800} title="logo" size="xl">
				FILE JEDI
			</Text>
			<Flex gap="xl" align="center">
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
		</Flex>
	)
}
