import { FooterTop } from "@components"
import { footerMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof FooterTop> = {
	title: "Modules/Footer/FooterTop",
	component: FooterTop,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof FooterTop>
export const Default: Story = {
	args: {
		socialLinks: footerMock.top.socialLinks,
	},
}
