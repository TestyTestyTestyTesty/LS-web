import { LabelIcon } from "@components"
import type { Meta, StoryObj } from "@storybook/react"
import checkmark from "@svg/checkmark.svg?url"

const meta: Meta<typeof LabelIcon> = {
	title: "Atoms/LabelIcon",
	component: LabelIcon,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof LabelIcon>
export const Default: Story = {
	args: {
		iconUrl: checkmark,
		title: "checkmark",
	},
}
