import { Carousel, CaseStudyCard, Container } from "@components"

import {
	CaseStudiesContent,
	CaseStudiesHeading,
	CaseStudiesSubheading,
	CaseStudiesWrapper,
} from "./CaseStudies.styles"
import type { CaseStudiesProps } from "./CaseStudies.types"

import { useBreakpoints } from "@lib"
import { useId } from "react"

export const CaseStudies = ({ subheading, heading, caseStudies }: CaseStudiesProps) => {
	const { isTablet, isMobileWide } = useBreakpoints()

	const caseStudyCards = caseStudies.map((caseStudy) => (
		<CaseStudyCard key={useId()} {...caseStudy} />
	))

	return (
		<CaseStudiesWrapper>
			<Container>
				<CaseStudiesContent>
					<CaseStudiesSubheading variant={isTablet ? "h6Mobile" : "h6"}>
						{subheading}
					</CaseStudiesSubheading>
					<CaseStudiesHeading variant={isTablet ? "h2Mobile" : "h2"}>{heading}</CaseStudiesHeading>
				</CaseStudiesContent>
			</Container>
			<Carousel
				cards={caseStudyCards}
				carouselProps={{ navigation: !isMobileWide, pagination: isTablet }}
				slidesPerView={{
					xxs: 1.4,
					xs: 1.4,
					sm: 2,
					md: 1.4,
					lg: 1.4,
					xl: 1,
				}}
			/>
		</CaseStudiesWrapper>
	)
}
