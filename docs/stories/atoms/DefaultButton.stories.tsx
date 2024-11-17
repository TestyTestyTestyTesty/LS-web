import { DefaultButton } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof DefaultButton> = {
	title: "Atoms/Buttons/DefaultButton",
	component: DefaultButton,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["contained", "outlined", "text", "contained-inverse"],
			},
			size: {
				control: {
					type: "select",
					options: ["small", "large"],
				},
			},
			disabled: {
				control: {
					type: "select",
					options: [false, true],
				},
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof DefaultButton>

export const Primary: Story = {
	args: {
		label: "Primary Button",
		variant: "contained",
	},
}

export const Small: Story = {
	args: {
		label: "Primary Button",
		variant: "contained",
		size: "small",
	},
}

export const PrimaryInverse: Story = {
	args: {
		label: "Primary inversed Button",
		variant: "containedInverse",
	},
}

export const Secondary: Story = {
	args: {
		label: "Secondary Button",
		variant: "outlined",
	},
}

export const Text: Story = {
	args: {
		label: "Text Button",
		variant: "text",
	},
}

export const FullWidth: Story = {
	args: {
		label: "Primary Button",
		variant: "contained",
		isFullWidth: true,
	},
}
