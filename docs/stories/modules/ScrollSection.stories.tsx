import { ScrollSection } from "@components"
import { scrollSectionMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ScrollSection> = {
	title: "Modules/ScrollSection",
	component: ScrollSection,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"ScrollSection uses react-intersection-observer to handle scroll dependent sections",
			},
		},
	},
}
export default meta
type Story = StoryObj<typeof ScrollSection>
export const Default: Story = {
	args: {
		...scrollSectionMock,
	},
}
