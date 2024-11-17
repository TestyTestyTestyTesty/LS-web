import { MegaMenuBottomSection } from "@components"
import { megaMenu2Mock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof MegaMenuBottomSection> = {
	title: "Modules/MegaMenu/BottomSection",
	component: MegaMenuBottomSection,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof MegaMenuBottomSection>
export const Default: Story = {
	args: {
		title: megaMenu2Mock.bottomSection.title,
		subtitle: megaMenu2Mock.bottomSection.subtitle,
		link: megaMenu2Mock.bottomSection.link,
	},
}
