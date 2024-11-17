import { Infographic } from "@components"
import { infographicMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Infographic> = {
	title: "Modules/Infographic/Infographic",
	component: Infographic,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Infographic>
export const Default: Story = {
	args: {
		title: infographicMock.title,
		subtitle: infographicMock.subtitle,
		points: infographicMock.points,
	},
}
