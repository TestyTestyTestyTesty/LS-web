import { MegaMenuHighlightSectionSmall } from "@components"
import { megaMenu1Mock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof MegaMenuHighlightSectionSmall> = {
	title: "Modules/MegaMenu/HighlightSectionSmall",
	component: MegaMenuHighlightSectionSmall,
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
type Story = StoryObj<typeof MegaMenuHighlightSectionSmall>
export const Default: Story = {
	args: {
		lightAccent: megaMenu1Mock.lightAccent,
		darkAccent: megaMenu1Mock.darkAccent,
		highlightSection: megaMenu1Mock.highlightSection,
	},
}
