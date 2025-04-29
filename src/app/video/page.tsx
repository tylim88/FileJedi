'use client'
import { DEFAULT_THEME, Select, SimpleGrid, Stack, Title } from '@mantine/core'
import { useForm, Controller } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'

export default function Video() {
	const { register, handleSubmit, watch, setValue, control, getValues } =
		useForm<
			| {
					input: 'FLV' | 'AVI' | 'WMV' | '3GP' | 'OGV'
					output: null
					videoCodec: 'Auto'
					audioCodec: 'Auto'
			  }
			| {
					output: 'MP4'
					videoCodec: 'Auto' | 'H.264' | 'H.265' | 'AV1'
					audioCodec: 'Auto' | 'AAC'
			  }
			| {
					output: 'MKV'
					videoCodec: 'Auto' | 'H.264' | 'H.265' | 'AV1'
					audioCodec: 'Auto' | 'AAC' | 'AC3' | 'OPUS' | 'FLAC'
			  }
		>()

	useFormPersist('video', {
		watch,
		setValue,
	})

	return (
		<>
			<Title order={2} mt="md" mb="xl" ta="center">
				Video Converter
			</Title>
			<Stack
				p="lg"
				pb="xl"
				style={{
					borderRadius: DEFAULT_THEME.radius.xl,
					borderWidth: 4,
				}}
			>
				<Title order={4}>Format</Title>
				<SimpleGrid cols={{ base: 1, sm: 2 }}>
					<Controller
						control={control}
						name="output"
						rules={{ required: true }}
						render={({ field }) => (
							<Select
								required
								{...field}
								label="Output"
								data={['MP4', 'MKV', 'WEBM', 'MOV']}
							/>
						)}
					/>
					<Select
						label="Video Codec"
						data={['Auto', 'H.264', 'H.265', 'VP9']}
					/>
					<Select label="Audio Codec" data={['Auto', 'AAC', 'MP3', 'AC3']} />
					{/* <Select label="Resolution" data={['1080p', '720p', '480p']} />
					<Select label="Bitrate" data={['High', 'Medium', 'Low']} />
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
					<Select label="Video Quality" data={['High', 'Medium', 'Low']} /> */}
				</SimpleGrid>
			</Stack>
		</>
	)
}
