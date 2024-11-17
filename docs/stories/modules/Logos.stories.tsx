import { Logos } from "@components"
import { logosMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Logos> = {
	title: "Modules/Logos",
	component: Logos,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Logos>
export const Default: Story = {
	args: {
		title: logosMock.title,
		icons: logosMock.icons,
	},
}
