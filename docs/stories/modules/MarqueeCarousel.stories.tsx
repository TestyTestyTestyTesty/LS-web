import { MarqueeCarousel } from "@components"
import { ctaMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof MarqueeCarousel> = {
	title: "Modules/MarqueeCarousel",
	component: MarqueeCarousel,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof MarqueeCarousel>
export const Default: Story = {
	args: {
		icons: ctaMock.icons,
	},
}
