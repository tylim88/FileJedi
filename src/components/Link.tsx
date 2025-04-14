import Link_ from 'next/link'
import type React from 'react'
import type { StrictOmit } from 'ts-essentials'

type propsLink = React.ComponentProps<typeof Link_>

export const Link = ({
	href,
	...props
}: StrictOmit<propsLink, 'href'> &
	(
		| { href: '/' | '/video' | '/audio' | '/motivation' }
		| { href: `https://${string}`; target?: never }
	)) => {
	return (
		<Link_
			target={href.toString().includes('https://') ? '_blank' : ''}
			{...props}
			href={href}
		/>
	)
}
