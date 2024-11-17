import { InfographicDesktopFlow } from "@components"
import { infographicMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof InfographicDesktopFlow> = {
	title: "Modules/Infographic/DesktopFlow",
	component: InfographicDesktopFlow,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof InfographicDesktopFlow>
export const Default: Story = {
	args: {
		points: infographicMock.points,
	},
}
