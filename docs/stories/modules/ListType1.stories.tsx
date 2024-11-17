import { ListType1 } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ListType1> = {
	title: "Modules/Lists/ListType1",
	component: ListType1,
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
type Story = StoryObj<typeof ListType1>
export const Default: Story = {
	args: {
		listItems: [
			{
				title: "CRM dla usług B2B",
				href: "/placeholder-link",
				iconUrl: "svg/salesprocess.svg",
				iconAlt: "alt text",
			},
			{
				title: "dla",
				href: "/adfhgdfhg",
				iconUrl: "svg/salesprocess.svg",
				iconAlt: "alt text",
			},
			{
				title: "CRM for production",
				subtitle: "kajshdkajshd aksjd hkajshd",
				href: "/placeholder-link",
				iconUrl: "svg/salesprocess.svg",
				iconAlt: "alt text",
			},
			{
				title: "CRM for automotive",
				href: "/placeholder-link",
				iconUrl: "svg/salesprocess.svg",
				iconAlt: "alt text",
			},
			{
				title: "CRM for agencies",
				href: "/placeholder-link",
				iconUrl: "svg/salesprocess.svg",
				iconAlt: "alt text",
			},
		],
		listTitle: "Rozwiązania dla branz",
		link: {
			href: "#xcvxcv",
			title: "Zobacz więcej",
		},
	},
}
