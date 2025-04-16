import { SimpleGrid, Stack, Title, Text, DEFAULT_THEME } from '@mantine/core'

const points = [
	{
		title: 'Absolutely Free',
		content:
			'No hidden fees no whatsoever, use it with piece of mind. Even the code is free!',
	},
] as const

export const Points = () => {
	return (
		<SimpleGrid component="section" cols={{ base: 1, sm: 2 }}>
			{points.map(({ title, content }) => (
				<Stack
					className="shadow-fuchsia-900"
					key={title}
					pt="xl"
					m="xl"
					style={{
						border: '4px solid black',
						borderRadius: DEFAULT_THEME.spacing.xl,
					}}
					h="16rem"
				>
					<Title order={2} ta="center" mt="xl">
						{title}
					</Title>
					<Text ta="center">{content}</Text>
				</Stack>
			))}
		</SimpleGrid>
	)
}
