import { Logo } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Logo> = {
	title: "Atoms/Logo",
	component: Logo,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: {
				type: "select",
				options: ["small", "large"],
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof Logo>

export const Large: Story = {
	args: {
		size: "large",
		alt: "Livespace Logo",
	},
}

export const Small: Story = {
	args: {
		size: "small",
		alt: "Livespace Logo",
	},
}
