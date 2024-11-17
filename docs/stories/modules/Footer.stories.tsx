import { Footer } from "@components"
import { footerMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Footer> = {
	title: "Modules/Footer/Footer",
	component: Footer,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Footer>
export const Default: Story = {
	args: {
		top: footerMock.top,
		middle: footerMock.middle,
		bottom: footerMock.bottom,
	},
}
