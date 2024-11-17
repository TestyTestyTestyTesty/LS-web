import { ListType2Item } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ListType2Item> = {
	title: "Atoms/ListType2Item",
	component: ListType2Item,
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
type Story = StoryObj<typeof ListType2Item>

export const WithSubtitle: Story = {
	args: {
		lightAccent: "#F3FDF4",
		darkAccent: "#00760D",
		listItem: {
			title: "Indywidualne wdrożenie",
			subtitle: "Wdrożymy Livespacedo Twojej firmy.",
			linkHref: "/placeholder-link",
			linkTitle: "Zobacz wdrożenia",
			iconUrl: "svg/salesprocess.svg",
			iconAlt: "placeholder-alt",
		},
	},
}

export const WithoutSubtitle: Story = {
	args: {
		lightAccent: "#F3FDF4",
		darkAccent: "#00760D",
		listItem: {
			title: "Indywidualne wdrożenie",
			linkHref: "/placeholder-link",
			linkTitle: "Zobacz wdrożenia",
			iconUrl: "svg/salesprocess.svg",
			iconAlt: "placeholder-alt",
		},
	},
}
