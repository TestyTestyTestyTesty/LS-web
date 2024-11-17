import { FooterBottom } from "@components"
import { footerMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FooterBottom> = {
	title: "Modules/Footer/FooterBottom",
	component: FooterBottom,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof FooterBottom>
export const Default: Story = {
	args: {
		copyright: footerMock.bottom.copyright,
		links: footerMock.bottom.links,
	},
}
