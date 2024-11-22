import { ArrowLink, DefaultButton, Tag } from "@components"
import { useBreakpoints } from "@lib"
import { Box, Typography, useTheme } from "@mui/material"
import Image from "next/image"
import {
	CaseStudyCardBottom,
	CaseStudyCardBottomWrapper,
	CaseStudyCardGoalWrapper,
	CaseStudyCardImage,
	CaseStudyCardImageWrapper,
	CaseStudyCardIndustryWrapper,
	CaseStudyCardLogoWrapper,
	CaseStudyCardOutcome,
	CaseStudyCardOutcomes,
	CaseStudyCardTagsWrapper,
	CaseStudyCardTop,
	CaseStudyCardWrapper,
} from "./CaseStudyCard.styles"
import type { CaseStudyCardProps } from "./CaseStudyCard.types"

export const CaseStudyCard = ({
	topText,
	bottomText,
	logo,
	outcomes,
	description,
	link,
	backgroundImage,
}: CaseStudyCardProps) => {
	const theme = useTheme()
	const { isTablet, isTabletWide, isMobileWide } = useBreakpoints()
	return (
		<CaseStudyCardWrapper>
			<CaseStudyCardTop>
				<CaseStudyCardTagsWrapper>
					<CaseStudyCardIndustryWrapper>
						<Typography
							variant={isMobileWide ? "caption1Mobile" : isTablet ? "p1Mobile" : "p1"}
							color={theme.palette.lsGrey.g900}
						>
							{topText.label}
						</Typography>
						<Tag tagColor={theme.palette.lsPrimary.p200}>
							<Typography variant={isTabletWide ? "caption1MobileBold" : "caption1"}>
								{topText.description}
							</Typography>
						</Tag>
					</CaseStudyCardIndustryWrapper>
					<CaseStudyCardGoalWrapper>
						<Typography
							variant={isMobileWide ? "caption1Mobile" : isTablet ? "p1Mobile" : "p1"}
							color={theme.palette.lsGrey.g900}
						>
							{bottomText.label}
						</Typography>
						<Typography
							variant={isMobileWide ? "caption1MobileBold" : isTablet ? "caption1Mobile" : "p1"}
						>
							{bottomText.description}
						</Typography>
					</CaseStudyCardGoalWrapper>
				</CaseStudyCardTagsWrapper>
				{!isMobileWide && (
					<CaseStudyCardLogoWrapper>
						<Image
							src={logo.url}
							alt={logo.alt}
							width="143"
							height="48"
							quality={100}
							style={{ objectFit: "contain" }}
						/>
					</CaseStudyCardLogoWrapper>
				)}
			</CaseStudyCardTop>
			<CaseStudyCardBottom>
				<CaseStudyCardBottomWrapper>
					{!isMobileWide && (
						<CaseStudyCardOutcomes>
							{outcomes.map((outcome) => (
								<CaseStudyCardOutcome key={outcome.title}>
									<Typography
										variant={isTablet ? "h3Mobile" : "h3"}
										color={theme.palette.lsPrimary.p600}
									>
										{outcome.title}
									</Typography>
									<Typography variant={isTablet ? "caption1Mobile" : "h6"}>
										{outcome.subtitle}
									</Typography>
								</CaseStudyCardOutcome>
							))}
						</CaseStudyCardOutcomes>
					)}
					{isMobileWide && (
						<Typography variant="h3Mobile">
							{outcomes[0].title} {outcomes[0].subtitle}
						</Typography>
					)}
					<Typography variant={isTablet ? "p1Mobile" : "p1"}>{description}</Typography>
				</CaseStudyCardBottomWrapper>
				<Box>
					{isTabletWide ? (
						<DefaultButton
							variant="outlined"
							label={link.title}
							href={link.href}
							isFullWidth={isMobileWide}
							size="small"
						/>
					) : (
						<ArrowLink
							href={link.href}
							title={link.title}
							typographyVariant="h5"
							hoverColor={theme.palette.lsPrimary.p800}
						/>
					)}
				</Box>
				{!isMobileWide && (
					<CaseStudyCardImageWrapper>
						<CaseStudyCardImage
							src={backgroundImage.url}
							alt={backgroundImage.alt}
							width={isTablet ? 225 : 373}
							height={isTablet ? 222 : 368}
							quality={100}
						/>
					</CaseStudyCardImageWrapper>
				)}
			</CaseStudyCardBottom>
		</CaseStudyCardWrapper>
	)
}
