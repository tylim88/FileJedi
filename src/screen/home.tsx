import {
	Dropzone,
	Header,
	Title,
	FileList,
	MainControls,
	DropzoneMini,
	Points,
} from '@/component'
import { Stack, Button, LoadingOverlay, Box, Loader, Text } from '@mantine/core'
import { useVideoStore, useFFmpegStore, useAudioStore, modes } from '@/stores'
import { IconCheck } from '@tabler/icons-react'
const isMoreThan99 = (count: number) =>
	count > 0 ? (count > 99 ? `(99+)` : `(${count})`) : ''

export const Home = () => {
	const mode = useFFmpegStore(state => state.mode)
	const status = useFFmpegStore(state => state.status)
	const store = modes[mode].store
	const types = modes[mode].types
	const points = modes[mode].points
	const audioCount = useAudioStore(state => state.items).length
	const videoCount = useVideoStore(state => state.items).length
	const isVideo = mode === 'video'
	const isAudio = mode === 'audio'
	const hasItems = (isVideo ? videoCount : isAudio ? audioCount : 0) > 0

	return (
		<Stack gap={0} align="center" justify="start" h="100%" px={0}>
			<Header />
			<Title />
			<Box pos="relative">
				<LoadingOverlay
					visible={status === 'loading'}
					loaderProps={{
						children: (
							<>
								<Loader size="xl" />
								<Text size="xl">Initializing...</Text>
							</>
						),
					}}
				/>
				<Stack
					m="xl"
					gap="sm"
					align="center"
					justify="start"
					style={{
						flexGrow: 1,
					}}
				>
					<Button.Group>
						<Button
							w="8rem"
							leftSection={isVideo ? <IconCheck size={14} /> : null}
							variant={isVideo ? 'filled' : 'default'}
							onClick={() => {
								useFFmpegStore.getState().switchMode('video')
							}}
						>
							Video{isMoreThan99(videoCount)}
						</Button>
						<Button
							w="8rem"
							leftSection={isAudio ? <IconCheck size={14} /> : null}
							variant={isAudio ? 'filled' : 'default'}
							onClick={() => {
								useFFmpegStore.getState().switchMode('audio')
							}}
						>
							Audio
							{isMoreThan99(audioCount)}
						</Button>
					</Button.Group>
					{hasItems ? (
						<>
							<MainControls />
							<DropzoneMini onDrop={store.getState().addFiles} accept={types} />
							<FileList />
						</>
					) : (
						<>
							<Dropzone onDrop={store.getState().addFiles} accept={types} />
							<Points items={points} />
						</>
					)}
				</Stack>
			</Box>
		</Stack>
	)
}
