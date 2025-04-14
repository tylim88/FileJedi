import type { Metadata } from 'next'
import { Geist, Geist_Mono, Rubik } from 'next/font/google'
import {
	MantineProvider,
	ColorSchemeScript,
	mantineHtmlProps,
	createTheme,
	Container,
} from '@mantine/core'
import { Header } from '@/components'
import 'tailwind-preset-mantine'

const font = Rubik({ variable: '--font-rubick', subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'FileJedi',
	description:
		'FileJedi is your go-to online video converter and compressor. Convert and compress videos for free, with no ads, no limits, and no need to download software. Support for MP4, AVI, MKV, and more.',
	keywords:
		'FileJedi, video converter, online video converter, free video conversion, compress video, convert mp4, mkv, webm, wmv',
	openGraph: {
		title: 'FileJedi | Free Online Video Converter & Compressor',
		description:
			'Convert and compress videos for free with FileJedi. No ads, no limits, and no software download needed. Supports MP4, AVI, MKV, WMV, and more.',
		images: 'https://www.filejedi.com/assets/og-image.jpg',
		type: 'website',
		url: 'https://www.filejedi.com',
	},
}

export const theme = createTheme({ fontFamily: font.style.fontFamily })

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" {...mantineHtmlProps}>
			<head>
				<ColorSchemeScript />
				<meta charSet="UTF-8" />
				<link rel="shortcut icon" href="/favicon.svg" />
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
			</head>
			<body className="antialiased">
				<MantineProvider theme={theme}>
					<Container>
						<Header />
						{children}
					</Container>
				</MantineProvider>
			</body>
		</html>
	)
}
