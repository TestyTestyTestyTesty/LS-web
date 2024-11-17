import { FooterMiddle } from "@components"
import { footerMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FooterMiddle> = {
	title: "Modules/Footer/FooterMiddle",
	component: FooterMiddle,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof FooterMiddle>
export const Default: Story = {
	args: {
		highlightedContent: footerMock.middle.highlightedContent,
		lists: footerMock.middle.lists,
	},
}
