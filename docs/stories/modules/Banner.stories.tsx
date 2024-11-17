import { Banner } from "@components"
import { bannerMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Banner> = {
	title: "Modules/Banner",
	component: Banner,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Banner>
export const Default: Story = {
	args: {
		caption: bannerMock.caption,
		subheading: bannerMock.subheading,
		heading: bannerMock.heading,
		button: bannerMock.button,
		participants: bannerMock.participants,
		backgroundCards: bannerMock.backgroundCards,
	},
}
