'use client'
import {
	Flex,
	Text,
	ActionIcon,
	Burger,
	Drawer,
	NavLink,
	DEFAULT_THEME,
} from '@mantine/core'
import { Link } from './Link'
import { BsGithub, BsExclamationLg } from 'react-icons/bs'
import { useDisclosure } from '@mantine/hooks'
import { usePathname } from 'next/navigation'
import { LiaFileAudio, LiaFileVideo } from 'react-icons/lia'

const arr = [
	{
		href: '/video',
		label: 'Video',
		Icon: LiaFileVideo,
		title: 'go to video convertor page',
	},
	{
		href: '/audio',
		label: 'Audio',
		Icon: LiaFileAudio,
		title: 'go to audio convertor page',
	},
	{
		href: '/motivation',
		label: 'Motivation',
		Icon: BsExclamationLg,
		title: 'go to about page',
	},
] as const

export const Header = () => {
	const [opened, { toggle, close }] = useDisclosure()
	const pathname = usePathname()

	return (
		<Flex w="100%" justify="space-between" pt="md" align="center">
			<Text component={Link} href="/" fw={800} title="go to homepage" size="xl">
				FILE JEDI
			</Text>
			<Burger
				opened={opened}
				onClick={toggle}
				aria-label="Toggle navigation"
				display={{ sm: 'none' }}
				title="open navigation drawer"
			/>
			<Drawer
				title={
					<Text
						component={Link}
						href="/"
						fw={800}
						title="go to homepage"
						size="xl"
					>
						FILE JEDI
					</Text>
				}
				closeButtonProps={{ 'aria-label': 'Close drawer' }}
				opened={opened}
				onClose={close}
				position="right"
				component="nav"
				size="100%"
			>
				{arr.map(({ href, label, Icon, title }) => (
					<NavLink
						color="black"
						component={Link}
						active={pathname === href}
						href={href}
						key={href}
						label={label}
						leftSection={Icon && <Icon />}
						onClick={close}
						title={title}
						aria-label={title}
					/>
				))}
			</Drawer>
			<Flex
				component="nav"
				gap="xl"
				align="center"
				display={{ base: 'none', sm: 'flex' }}
			>
				{arr.map(({ href, label, title }) => (
					<NavLink
						color="black"
						component={Link}
						active={pathname === href}
						href={href}
						styles={{
							label: { fontSize: DEFAULT_THEME.fontSizes.xl, fontWeight: 600 },
						}}
						key={href}
						label={label}
						title={title}
					/>
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
