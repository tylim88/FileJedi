import { Loader, Container, Center } from '@mantine/core'
import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from './component'
import { Suspense, useEffect } from 'react'
import { useFFmpegStore } from '@/stores'
import { isChromium } from '@/utils'

const isChrome = isChromium()

export const App = () => {
	useEffect(() => {
		useFFmpegStore.getState().load()
	}, [])
	return (
		<Container h="100%">
			{isChrome ? (
				<Center h="100%" w="100%">
					Please use Firefox
				</Center>
			) : (
				<Outlet />
			)}
			<Suspense fallback={<Loader />}>
				<TanStackRouterDevtools />
			</Suspense>
		</Container>
	)
}
