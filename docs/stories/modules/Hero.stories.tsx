import { Hero } from "@components"
import { heroMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Hero> = {
	title: "Modules/Hero",
	component: Hero,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Hero>
export const Default: Story = {
	args: {
		subheading: heroMock.subheading,
		heading: heroMock.heading,
		subtitle: heroMock.subtitle,
		buttons: heroMock.buttons,
		playButton: heroMock.playButton,
		labelIcons: heroMock.labelIcons,
		backgroundImage: heroMock.backgroundImage,
	},
}
