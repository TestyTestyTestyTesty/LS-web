import { StatsTile } from "@components"
import type { Meta, StoryObj } from "@storybook/react"
import { statsSectionMock } from "@mocks"

const meta: Meta<typeof StatsTile> = {
	title: "Atoms/StatsTile",
	component: StatsTile,
	tags: ["autodocs"],
	argTypes: {
		background: {
			control: "text",
		},
		title: {
			control: "text",
		},
		stats: {
			control: "text",
		},
		message: {
			control: "text",
		},
	},
}

export default meta
type Story = StoryObj<typeof StatsTile>

export const Default: Story = {
	args: {
		title: statsSectionMock.tiles[0].title,
		stats: statsSectionMock.tiles[0].stats,
		message: statsSectionMock.tiles[0].message,
		background: statsSectionMock.tiles[0].backgroundImage,
	},
}

export const NoBackground: Story = {
	args: {
		title: statsSectionMock.tiles[0].title,
		stats: statsSectionMock.tiles[0].stats,
		message: statsSectionMock.tiles[0].message,
	},
}
