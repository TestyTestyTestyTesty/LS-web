import { ListType3Item } from "@components"
import { footerMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ListType3Item> = {
	title: "Atoms/ListType3Item",
	component: ListType3Item,
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ListType3Item>

export const Default: Story = {
	args: {
		href: footerMock.middle.lists[0].items[0].href,
		text: footerMock.middle.lists[0].items[0].text,
	},
}

export const WithTag: Story = {
	args: {
		href: footerMock.middle.lists[0].items[0].href,
		text: footerMock.middle.lists[0].items[0].text,
		tag: footerMock.middle.lists[0].items[0].tag,
	},
}
export const BigStyle: Story = {
	args: {
		href: footerMock.middle.lists[0].items[0].href,
		text: footerMock.middle.lists[0].items[0].text,
		isBig: true,
	},
}
