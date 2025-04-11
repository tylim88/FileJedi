import { Flex, ActionIcon, rem, Button } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'
import { FeedBack } from './FeedBack'
import { useDisclosure } from '@mantine/hooks'
import { IconMail } from '@tabler/icons-react'

const size = rem(24)
const style = { width: size, height: size }

export function Header() {
	const [isFeedbackOpened, { open: openFeedback, close: closeFeedback }] =
		useDisclosure(false)
	return (
		<>
			<FeedBack isOpened={isFeedbackOpened} close={closeFeedback} />
			<Flex gap={0} justify="flex-end" py="xl" w="100%">
				<Button
					w="8rem"
					leftSection={<IconMail size={14} />}
					variant="transparent"
					onClick={openFeedback}
					c="white"
				>
					Feedback
				</Button>
				<ActionIcon
					size="lg"
					color="white"
					variant="subtle"
					component="a"
					href="https://github.com/tylim88/File-Formatify"
					target="_blank"
				>
					<IconBrandGithub style={style} stroke={1.5} />
				</ActionIcon>
			</Flex>
		</>
	)
}
