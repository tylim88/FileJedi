import {
	SimpleGrid,
	Stack,
	Title,
	Text,
	DEFAULT_THEME,
	Anchor,
	Flex,
	Box,
} from '@mantine/core'
import { RiAdvertisementLine } from 'react-icons/ri'
import { MdAttachMoney } from 'react-icons/md'
import { css } from '@emotion/css'
import { FiServer } from 'react-icons/fi'
import { MdInstallDesktop } from 'react-icons/md'

export const Points = () => {
	const points = [
		{
			title: 'Absolutely Free',
			icon: (
				<Box {...slash}>
					<MdAttachMoney size="2rem" />
				</Box>
			),
			content: (
				<>
					Built for the people, not for profit — even the code is{' '}
					<Anchor fw="bold" underline="always" c="black">
						FREE
					</Anchor>
				</>
			),
		},
		{
			title: 'No Ads',
			icon: (
				<Box {...slash}>
					<RiAdvertisementLine size="2rem" />
				</Box>
			),
			content: 'No Cookies. No Nonsense. No Strings Attached.',
		},
		{
			title: 'No Servers',
			icon: (
				<Box {...slash}>
					<FiServer size="2rem" />
				</Box>
			),
			content: 'Everything runs locally. We see nothing. We keep nothing.',
		},
		{
			title: 'No Downloads',
			icon: (
				<Box {...slash}>
					<MdInstallDesktop size="2rem" />
				</Box>
			),
			content:
				'No apps. No installation. Just fire up your browser and get it done.',
		},
	] as const

	return (
		<SimpleGrid component="section" cols={{ base: 1, sm: 2 }}>
			{points.map(({ title, content, icon }) => (
				<Flex key={title} w="100%" justify="center" mb="md">
					<Stack
						className="shadow-fuchsia-900"
						pt="xl"
						style={{
							border: '4px solid black',
							borderRadius: DEFAULT_THEME.spacing.xl,
							alignItems: 'center',
						}}
						h="16rem"
						gap={0}
					>
						<Title order={2} ta="center" mt="md">
							{title}
						</Title>
						<br />
						{icon || null}
						<br />
						<Text ta="center" px="xl">
							{content}
						</Text>
					</Stack>
				</Flex>
			))}
		</SimpleGrid>
	)
}

const slash = {
	pos: 'relative',
	className: css`
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 141%;
			height: 3px;
			background: red;
			transform: rotate(45deg);
			transform-origin: top left;
		}
	`,
} as const
