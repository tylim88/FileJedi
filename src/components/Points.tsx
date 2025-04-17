import {
	SimpleGrid,
	Stack,
	Title,
	Text,
	DEFAULT_THEME,
	Anchor,
	Box,
	Flex,
} from '@mantine/core'
// import { RiAdvertisementLine } from 'react-icons/ri'

export const Points = () => {
	const points = [
		{
			title: 'Absolutely Free',
			// icon: <RiAdvertisementLine style={{ textDecoration: 'line-through' }} />,
			content: (
				<Box px="xl" ta="center">
					<Text display="inline">
						Built for the people, not for profit — even the code is
					</Text>{' '}
					<Anchor fw="bold" underline="always" c="black">
						FREE
					</Anchor>
				</Box>
			),
		},
		{
			title: 'No Ads',
			// icon: <RiAdvertisementLine style={{ textDecoration: 'line-through' }} />,
			content: (
				<Text px="xl" ta="center">
					No Cookies. No Corporate Nonsense.
				</Text>
			),
		},
	] as const

	return (
		<SimpleGrid component="section" cols={{ base: 1, sm: 2 }}>
			{points.map(({ title, content }) => (
				<Flex key={title} w="100%" justify="center">
					<Stack
						maw={{ base: '50%', sm: '100%' }}
						className="shadow-fuchsia-900"
						pt="xl"
						mx="xl"
						style={{
							border: '4px solid black',
							borderRadius: DEFAULT_THEME.spacing.xl,
						}}
						h="16rem"
						gap={0}
					>
						<Title order={2} ta="center" mt="xl">
							{title}
						</Title>
						<br />
						{/* {icon} */}
						<br />
						{content}
					</Stack>
				</Flex>
			))}
		</SimpleGrid>
	)
}
