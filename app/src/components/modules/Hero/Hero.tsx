"use client"
import { Container, DefaultButton, LabelIcons, VideoPlayButton } from "@components"
import {
	HeroButtonWrapper,
	HeroContent,
	HeroHeading,
	HeroImage,
	HeroImageWrapper,
	HeroSubheading,
	HeroSubtitle,
	HeroVideoPlayButtonWrapper,
	HeroWrapper,
} from "./Hero.styles"
import type { HeroProps } from "./Hero.types"
import { useBreakpoints } from "@lib"

export const Hero = ({
	subheading,
	heading,
	subtitle,
	buttons,
	labelIcons,
	backgroundImage,
	playButton,
}: HeroProps) => {
	const { isMobile, isTabletWide } = useBreakpoints()
	return (
		<HeroWrapper>
			<Container>
				<HeroContent>
					<HeroSubheading variant={isMobile ? "label3" : "h4"} align="center" component="h1">
						{subheading}
					</HeroSubheading>
					<HeroHeading variant={isMobile ? "h1Mobile" : "h1"} align="center" component="h2">
						{heading}
					</HeroHeading>
					<HeroSubtitle variant={isMobile ? "label3" : "h6"} align="center" component="h3">
						{subtitle}
					</HeroSubtitle>

					<HeroButtonWrapper>
						<DefaultButton
							variant="outlined"
							href={buttons[0].href}
							label={buttons[0].title}
							isFullWidth={isTabletWide}
						/>
						<DefaultButton
							variant="contained"
							href={buttons[1].href}
							label={buttons[1].title}
							isFullWidth={isTabletWide}
						/>
					</HeroButtonWrapper>
					<LabelIcons labelIcons={labelIcons} />
				</HeroContent>
			</Container>
			<HeroImageWrapper>
				<HeroVideoPlayButtonWrapper>
					<VideoPlayButton
						topLineText={playButton.topLineText}
						duration={playButton.duration}
						linkText={playButton.linkText}
						showLogo={playButton.showLogo}
						mediaId={playButton.mediaId}
					/>
				</HeroVideoPlayButtonWrapper>
				<HeroImage
					src={backgroundImage.url}
					width="960"
					height="562"
					alt={backgroundImage.alt}
					quality={100}
				/>
			</HeroImageWrapper>
		</HeroWrapper>
	)
}
