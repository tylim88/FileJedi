import { Loader, Container, Center, Anchor, Text } from '@mantine/core'
import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from './component'
import { Suspense, useEffect } from 'react'
import { useFFmpegStore } from '@/stores'

export const App = () => {
	useEffect(() => {
		useFFmpegStore.getState().load()
	}, [])
	return (
		<Container h="100%">
			<Center h="100%" w="100%" style={{ flexDirection: 'column' }}>
				<Text>
					This website is temporary down, please come back later or get the code
					here:
				</Text>
				<Anchor
					c="white"
					href="https://github.com/tylim88/FileJedi"
					underline="always"
				>
					Github
				</Anchor>
			</Center>
			<Suspense fallback={<Loader />}>
				<TanStackRouterDevtools />
			</Suspense>
		</Container>
	)
}
