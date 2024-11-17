import { IconSet } from "@components"
import { ctaMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof IconSet> = {
	title: "Modules/IconSet",
	component: IconSet,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Currently is used only on desktop so doesnt come with mobile design yet. If mobile design will be created, this component can be exapanded for mobile use case",
			},
		},
	},
}
export default meta
type Story = StoryObj<typeof IconSet>
export const Default: Story = {
	args: {
		icons: ctaMock.icons,
	},
}
