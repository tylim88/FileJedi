import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import ky from 'ky'
import type { User } from '../../utils/users'

export const APIRoute = createAPIFileRoute('/api/users/$id')({
	GET: async ({ request, params }) => {
		console.info(`Fetching users by id=${params.id}... @`, request.url)
		try {
			const res = await ky(
				'https://jsonplaceholder.typicode.com/users/' + params.id,
			).json<User>()

			return json({
				id: res.id,
				name: res.name,
				email: res.email,
			})
		} catch (e) {
			console.error(e)
			return json({ error: 'User not found' }, { status: 404 })
		}
	},
})
