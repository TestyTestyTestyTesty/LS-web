import { NavButton } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof NavButton> = {
	title: "Atoms/Buttons/NavButton",
	component: NavButton,
	tags: ["autodocs"],
	argTypes: {
		disabled: {
			control: {
				type: "boolean",
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof NavButton>

export const Link: Story = {
	args: {
		label: "Text",
		disabled: false,
	},
}
