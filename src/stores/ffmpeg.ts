import { persistent } from './utils'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { toBlobURL } from '@ffmpeg/util'
import ffmpegCore from '@ffmpeg/core-mt?url'
import { wasmURL } from '@/config'
import workerRaw from '@/worker.js?raw'

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
					set({ message })
				})
				// toBlobURL is used to bypass CORS issue, urls with the same
				// domain can be used directly.
				try {
					await ffmpeg.load({
						coreURL: await toBlobURL(ffmpegCore, 'text/javascript'),
						wasmURL: await toBlobURL(wasmURL, 'application/wasm'),
						workerURL: await toBlobURL(
							URL.createObjectURL(
								new Blob([workerRaw], { type: 'application/javascript' })
							),
							'text/javascript'
						),
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
