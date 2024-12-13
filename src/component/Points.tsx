import { TablerIconsProps } from '@tabler/icons-react'
import { Text, Title, SimpleGrid, Flex } from '@mantine/core'
import { useIsSmallestBreakpoint } from '@/hooks'
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
	const span = useIsSmallestBreakpoint() ? 12 : 6
	return (
		<SimpleGrid py="xl" cols={{ sm: 1, md: 2 }}>
			{items.map(({ Icon, text, title }) => {
				return (
					<div>
						<Flex ta="start">
							<Icon size={24} color={textColor} />
						</Flex>
						<Title order={4} ta="start">
							{title}
						</Title>
						<Text
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
