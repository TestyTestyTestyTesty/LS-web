import type { Image, Link } from "@types"
import type { CaseStudyOutcomeProps } from "../CaseStudies/CaseStudies.types"

export interface CaseStudyCardProps {
	topText: labelDescriptionGroup
	bottomText: labelDescriptionGroup
	logo: Image
	outcomes: CaseStudyOutcomeProps[]
	description: string
	link: Link
	backgroundImage: Image
}

type labelDescriptionGroup = {
	label: string
	description: string
}
