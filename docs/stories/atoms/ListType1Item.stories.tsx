import { ListType1Item } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

import checkmark from "@svg/checkmark.svg?url"

const meta: Meta<typeof ListType1Item> = {
	title: "Atoms/ListType1Item",
	component: ListType1Item,
	tags: ["autodocs"],
	argTypes: {
		lightAccent: {
			control: {
				type: "color",
			},
		},
		darkAccent: {
			control: {
				type: "color",
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof ListType1Item>

export const WithSubtitle: Story = {
	args: {
		lightAccent: "#F3FDF4",
		darkAccent: "#00760D",
		listItem: {
			title: "Title",
			subtitle: "Subtitle",
			href: "https://www.google.com",
			iconUrl: checkmark,
			iconAlt: "alt text",
		},
	},
}

export const WithoutSubtitle: Story = {
	args: {
		lightAccent: "#F3FDF4",
		darkAccent: "#00760D",
		listItem: {
			title: "Title",
			href: "https://www.google.com",
			iconUrl: checkmark,
			iconAlt: "alt text",
		},
	},
}
