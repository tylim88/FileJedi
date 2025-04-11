import { TablerIconsProps } from '@tabler/icons-react'
import { Text, Title, SimpleGrid, Flex } from '@mantine/core'
import { textColor } from '@/styles'

export const Points = ({
	items,
}: {
	items: {
		Icon: (props: TablerIconsProps) => JSX.Element
		text: string
		title: string
	}[]
}) => {
	return (
		<SimpleGrid mt="xl" cols={{ sm: 1, md: 2 }}>
			{items.map(({ Icon, text, title }) => {
				return (
					<div key={title}>
						<Flex ta="start" gap="md" mb="xs">
							<Icon size={24} color="white" />
							<Title c="white" order={4} ta="start">
								{title}
							</Title>
						</Flex>
						<Text
							c="black"
							ta="start"
							size="sm"
							style={{
								overflowWrap: 'break-word',
							}}
						>
							{text}
						</Text>
					</div>
				)
			})}
		</SimpleGrid>
	)
}
