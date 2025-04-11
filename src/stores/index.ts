import { useAudioStore } from './audio'
import { useVideoStore } from './video'
import { videoTypes, videoPoints, audioPoints, audioTypes } from '@/constants'
export const modes = {
	video: {
		store: useVideoStore,
		types: videoTypes,
		points: videoPoints,
		title1: 'Video Converter',
		title2: 'Support .flv .mp4 .mkv .webm .wmv and more!',
	},
	audio: {
		store: useAudioStore,
		points: audioPoints,
		types: audioTypes,
		title1: 'Audio Converter',
		title2: 'Support .mp3 .wav .mkv .aac .flac and more!',
	},
} as const

export * from './ffmpeg'
export * from './audio'
export * from './video'
