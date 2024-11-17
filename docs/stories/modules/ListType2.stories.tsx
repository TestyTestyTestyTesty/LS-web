import { ListType2 } from "@components"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ListType2> = {
	title: "Modules/Lists/ListType2",
	component: ListType2,
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
type Story = StoryObj<typeof ListType2>
export const Default: Story = {
	args: {
		listItems: [
			{
				title: "Indywidualne wdrożenie",
				subtitle: "Wdrożymy Livespacedo Twojej firmy.",
				linkHref: "/placeholder-link",
				linkTitle: "Zobacz wdrożenia",
				iconUrl: "svg/salesprocess.svg",
				iconAlt: "alt text",
			},
			{
				title: "Zapisz się na newsletter",
				subtitle: "Ponad 200 integracji z narzędziami.",
				linkHref: "/adfhgdfhg",
				linkTitle: "Zobacz nasze integracje ",
				iconUrl: "svg/salesprocess.svg",
				iconAlt: "alt text",
			},
			{
				title: "Zapisz się na newsletter",
				subtitle: "Ponad 200 integracji z narzędziami.",
				linkHref: "/adfhgdfhg",
				linkTitle: "Zobacz nasze integracje ",
				iconUrl: "svg/salesprocess.svg",
				iconAlt: "alt text",
			},
		],
	},
}
