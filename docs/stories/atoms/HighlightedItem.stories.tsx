import { HighlightedItem } from "@components"
import { footerMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof HighlightedItem> = {
	title: "Atoms/HighlightedItem",
	component: HighlightedItem,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof HighlightedItem>
export const Default: Story = {
	args: {
		title: footerMock.middle.highlightedContent.links[0].title,
		href: footerMock.middle.highlightedContent.links[0].href,
		imageUrl: footerMock.middle.highlightedContent.links[0].imageUrl,
	},
}
