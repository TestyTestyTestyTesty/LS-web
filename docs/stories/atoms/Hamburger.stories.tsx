import { Hamburger } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Hamburger> = {
	title: "Atoms/Hamburger",
	component: Hamburger,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Hamburger>

export const Default: Story = {}

export const isOpened: Story = {
	args: {
		isOpened: true,
	},
}
