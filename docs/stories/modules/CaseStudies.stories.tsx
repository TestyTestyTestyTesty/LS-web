import { CaseStudies } from "@components"
import { caseStudiesMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof CaseStudies> = {
	title: "Modules/CaseStudies",
	component: CaseStudies,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof CaseStudies>
export const Default: Story = {
	args: {
		subheading: caseStudiesMock.subheading,
		heading: caseStudiesMock.heading,
		caseStudies: caseStudiesMock.caseStudies,
	},
}
