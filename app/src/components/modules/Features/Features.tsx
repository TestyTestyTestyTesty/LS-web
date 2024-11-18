import { Carousel, Container, ContentHeaderWrapper, DefaultButton } from "@components"
import { useBreakpoints } from "@lib"
import { Box, Typography } from "@mui/material"
import { Theme as theme } from "@styles"
import { FeaturesContainer, FeaturesTilesContainer, FeaturesWrapper } from "./Features.styles"
import type { FeaturesProps } from "./Features.types"
import { FeatureTile } from "./FeatureTile/FeatureTile"

export const Features = ({ heading, subheading, button, features }: FeaturesProps) => {
	const { isTablet } = useBreakpoints()

	const renderFeaturesTiles = features.map((feature) => (
		<FeatureTile
			image={feature.image}
			description={feature.description}
			key={feature.id}
			heading={feature.heading}
		/>
	))

	return (
		<FeaturesWrapper>
			<Container>
				<FeaturesContainer>
					<ContentHeaderWrapper sideLineColor={theme.palette.lsPrimary.p200}>
						<Typography
							component="p"
							variant={isTablet ? "h6Mobile" : "h6"}
							sx={{ marginBottom: "2rem", color: theme.palette.defaultColors.white }}
						>
							{heading.toUpperCase()}
						</Typography>

						<Typography
							component="h2"
							variant={isTablet ? "h2Mobile" : "h2"}
							sx={{ color: theme.palette.defaultColors.white }}
						>
							{subheading}
						</Typography>
					</ContentHeaderWrapper>

					<Box sx={{ padding: "2rem 1.5rem", maxWidth: "40.25rem" }}>
						<DefaultButton variant={button.type} label={button.label} href={button.link} />
					</Box>

					{isTablet ? null : <FeaturesTilesContainer>{renderFeaturesTiles}</FeaturesTilesContainer>}
				</FeaturesContainer>
			</Container>
			{isTablet ? (
				<Box sx={{ padding: "0 0 4rem" }}>
					<Carousel
						cards={renderFeaturesTiles}
						carouselProps={{ navigation: false, pagination: isTablet }}
						slidesPerView={{
							xxs: 2,
							xs: 1.8,
							sm: 2.8,
							md: 3.5,
							lg: 4.2,
							xl: 5,
						}}
					/>
				</Box>
			) : null}
		</FeaturesWrapper>
	)
}
