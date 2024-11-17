import { CaseStudyCard } from "@components"
import { caseStudiesMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof CaseStudyCard> = {
	title: "Modules/CaseStudyCard",
	component: CaseStudyCard,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof CaseStudyCard>
export const Default: Story = {
	args: {
		topText: caseStudiesMock.caseStudies[0].topText,
		bottomText: caseStudiesMock.caseStudies[0].bottomText,
		logo: caseStudiesMock.caseStudies[0].logo,
		outcomes: caseStudiesMock.caseStudies[0].outcomes,
		description: caseStudiesMock.caseStudies[0].description,
		link: caseStudiesMock.caseStudies[0].link,
		backgroundImage: caseStudiesMock.caseStudies[0].backgroundImage,
	},
}
