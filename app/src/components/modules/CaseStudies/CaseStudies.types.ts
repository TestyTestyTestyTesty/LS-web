import type { CaseStudyCardProps } from "../CaseStudyCard/CaseStudyCard.types"

export interface CaseStudyOutcomeProps {
	title: string
	subtitle: string
}

export interface CaseStudiesProps {
	subheading: string
	heading: string
	caseStudies: CaseStudyCardProps[]
}
