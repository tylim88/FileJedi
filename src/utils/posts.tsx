import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import ky from 'ky'

export type PostType = {
	id: string
	title: string
	body: string
}

export const fetchPost = createServerFn({ method: 'GET' })
	.validator((d: string) => d)
	.handler(async ({ data }) => {
		console.info(`Fetching post with id ${data}...`)
		const post = await ky(`https://jsonplaceholder.typicode.com/posts/${data}`)
			.json<PostType>()
			.catch((err) => {
				console.error(err)
				if (err.status === 404) {
					throw notFound()
				}
				throw err
			})

		return post
	})

export const fetchPosts = createServerFn({ method: 'GET' }).handler(
	async () => {
		console.info('Fetching posts...')
		return ky('https://jsonplaceholder.typicode.com/posts')
			.json<Array<PostType>>()
			.then((r) => r.slice(0, 10))
	},
)
