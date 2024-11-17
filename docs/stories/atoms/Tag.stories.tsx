import { Tag } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Tag> = {
	title: "Atoms/Tag",
	component: Tag,
	argTypes: {},
}

export default meta
type Story = StoryObj<typeof Tag>

export const defaultColor: Story = {
	args: {
		tagText: "Primary Button",
	},
}

export const customColor: Story = {
	args: {
		tagText: "Secondary Button",
		tagColor: "#ff000f",
	},
}

export const customTypography: Story = {
	args: {
		tagText: "Secondary Button",
		typographyVariant: "body1",
	},
}
