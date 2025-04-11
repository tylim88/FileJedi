import { Title as Title_, Stack } from '@mantine/core'
import { textColor } from '@/styles'
import { useFFmpegStore, modes } from '@/stores'

export const Title = () => {
	const mode = useFFmpegStore(state => state.mode)

	return (
		<Stack justify="center" align="center" gap="xs" pt="xl">
			<Title_ c={textColor} order={1}>
				{modes[mode].title1}
			</Title_>
			<Title_ c={textColor} order={3}>
				Absolutely Free And No Artificial Restrictions!
			</Title_>
			<Title_ c={textColor} order={5}>
				{modes[mode].title2}
			</Title_>
		</Stack>
	)
}
