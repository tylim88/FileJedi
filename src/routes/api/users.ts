import { json } from '@tanstack/react-start'
import { createAPIFileRoute } from '@tanstack/react-start/api'
import ky from 'ky'
import type { User } from '../../utils/users'

export const APIRoute = createAPIFileRoute('/api/users')({
	GET: async ({ request }) => {
		console.info('Fetching users... @', request.url)
		const res = await ky('https://jsonplaceholder.typicode.com/users').json<
			Array<User>
		>()

		const list = res.slice(0, 10)

		return json(list.map((u) => ({ id: u.id, name: u.name, email: u.email })))
	},
})
