import { Loader, Container, Center } from '@mantine/core'
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
			<Center h="100%" w="100%">
				This website is temporary down, please check back later.
			</Center>
			<Suspense fallback={<Loader />}>
				<TanStackRouterDevtools />
			</Suspense>
		</Container>
	)
}
