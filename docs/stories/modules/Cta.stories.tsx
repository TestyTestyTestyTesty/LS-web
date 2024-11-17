import { Cta } from "@components"
import { ctaMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Cta> = {
	title: "Modules/Cta",
	component: Cta,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Cta uses different component for displaying logos for desktop version and mobile version. Those 2 component are MarqueeCarousel and IconSet",
			},
		},
	},
}
export default meta
type Story = StoryObj<typeof Cta>
export const Default: Story = {
	args: {
		subheading: ctaMock.subheading,
		heading: ctaMock.heading,
		buttons: ctaMock.buttons,
		labelIcons: ctaMock.labelIcons,
		icons: ctaMock.icons,
	},
}
