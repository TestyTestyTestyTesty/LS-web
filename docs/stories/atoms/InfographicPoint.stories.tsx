import { action } from "@storybook/addon-actions"
import { InfographicPoint } from "@components"
import type { Meta, StoryObj } from "@storybook/react"
const meta: Meta<typeof InfographicPoint> = {
	title: "Atoms/InfographicPoint",
	component: InfographicPoint,
	tags: ["autodocs"],
	argTypes: {
		onClick: {
			description: "Callback fired when the point is clicked",
			control: false,
			action: "clicked",
		},
	},
}
export default meta
type Story = StoryObj<typeof InfographicPoint>
export const Default: Story = {
	args: {
		pointPosition: 1,
		onClick: action("onClick"),
		isActive: false,
		item: {
			title: "Map the company sales process or pick a proposed one.",
			imgUrl: "/step-1.webp",
		},
	},
}
