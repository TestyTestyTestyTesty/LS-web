import { NavLink } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof NavLink> = {
	title: "Atoms/Buttons/NavLink",
	component: NavLink,
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
type Story = StoryObj<typeof NavLink>

export const Link: Story = {
	args: {
		label: "Text",
		disabled: false,
		href: "#",
	},
}
