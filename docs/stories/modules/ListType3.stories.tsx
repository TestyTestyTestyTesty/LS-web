import { ListType3 } from "@components"
import { footerMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ListType3> = {
	title: "Modules/Lists/ListType3",
	component: ListType3,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof ListType3>
export const Default: Story = {
	args: {
		title: footerMock.middle.lists[0].title,
		items: footerMock.middle.lists[0].items,
	},
}
