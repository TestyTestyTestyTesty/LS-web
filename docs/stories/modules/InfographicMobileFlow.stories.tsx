import { InfographicMobileFlow } from "@components"
import { infographicMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof InfographicMobileFlow> = {
	title: "Modules/Infographic/MobileFlow",
	component: InfographicMobileFlow,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof InfographicMobileFlow>
export const Default: Story = {
	args: {
		points: infographicMock.points,
	},
}
