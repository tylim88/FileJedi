import { Select, SimpleGrid } from '@mantine/core'

export default function Video() {
	return (
		<>
			<SimpleGrid cols={{ base: 1 }}>
				<Select
					label="Format"
					data={[
						'3GP',
						'FLV',
						'MP4',
						'AVI',
						'MKV',
						'WMV',
						'WEBM',
						'MOV',
						'OGV',
					]}
				/>
				<Select label="Resolution" data={['1080p', '720p', '480p']} />
				<Select label="Bitrate" data={['High', 'Medium', 'Low']} />
				<Select label="Audio Codec" data={['AAC', 'MP3', 'AC3']} />
				<Select
					label="Audio Bitrate"
					data={['128kbps', '192kbps', '256kbps']}
				/>
				<Select label="Audio Channels" data={['Mono', 'Stereo']} />
				<Select label="Subtitle" data={['English', 'Spanish', 'French']} />
				<Select label="Aspect Ratio" data={['16:9', '4:3', '1:1']} />
				<Select label="Frame Rate" data={['30fps', '60fps', '120fps']} />
				<Select label="Container" data={['MP4', 'MKV', 'AVI']} />
				<Select
					label="Audio Sample Rate"
					data={['44.1kHz', '48kHz', '96kHz']}
				/>
				<Select label="Video Codec" data={['H.264', 'H.265', 'VP9']} />
				<Select label="Video Quality" data={['High', 'Medium', 'Low']} />
			</SimpleGrid>
		</>
	)
}
