import { MegaMenuHighlightSectionBig } from "@components"
import { megaMenu1Mock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof MegaMenuHighlightSectionBig> = {
	title: "Modules/MegaMenu/HighlightSectionBig",
	component: MegaMenuHighlightSectionBig,
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
type Story = StoryObj<typeof MegaMenuHighlightSectionBig>
export const Default: Story = {
	args: {
		lightAccent: megaMenu1Mock.lightAccent,
		darkAccent: megaMenu1Mock.darkAccent,
		highlightSection: megaMenu1Mock.highlightSection,
	},
}
