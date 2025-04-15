import { persistent } from './utils'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'
import ffmpegWasm from '@ffmpeg/core-mt/wasm?url' // resolves to "/@fs/node_modules/@ffmpeg/core-mt/dist/esm/ffmpeg-core.wasm" in dev
import ffmpegCore from '@ffmpeg/core-mt?url'

const initialState = {
	status: 'loading',
	message: null,
	mode: 'video',
} as const

export const ffmpeg = new FFmpeg()
export const useFFmpegStore = persistent<{
	load: () => void
	status: 'error' | 'loading' | 'done'
	message: null | string
	mode: 'video' | 'audio'
	switchMode: (mode: 'video' | 'audio') => void
}>(
	{
		name: 'ffmpeg',
		keysToPersist: ['mode'],
	},
	(set, get) => {
		return {
			...initialState,
			reset: () => {
				set({ ...initialState, status: get().status })
			},
			switchMode: (mode: 'video' | 'audio') => {
				set({ mode })
			},
			load: async () => {
				const { status } = get()
				if (status === 'done') return
				set({ status: 'loading' })

				ffmpeg.on('log', ({ message }) => {
					console.log({ message })
					set({ message })
				})
				// toBlobURL is used to bypass CORS issue, urls with the same
				// domain can be used directly.
				try {
					await ffmpeg.load({
						coreURL: await toBlobURL(ffmpegCore, 'text/javascript'),
						wasmURL: await toBlobURL(
							'https://api.filejedi.com/ffmpeg-core.wasm',
							'application/wasm'
						),
						workerURL: await toBlobURL(`/worker.js`, 'text/javascript'),
					})
					set({ status: 'done' })
				} catch (e) {
					set({ status: 'error' })
					console.error(e)
				}
			},
		}
	}
)
