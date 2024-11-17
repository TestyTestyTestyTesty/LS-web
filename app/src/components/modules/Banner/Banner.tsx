import { DefaultButton } from "@components"
import { ContainerSmall } from "@components/atoms/Containers/Container.styles"
import { useBreakpoints } from "@lib"
import { Typography, useTheme } from "@mui/material"
import { useId } from "react"
import {
	BannerButtonWrapper,
	BannerCaptionWrapper,
	BannerHeadingWrapper,
	BannerParticipantImage,
	BannerParticipantsWrapper,
	BannerSubHeadingWrapper,
	BannerWrapper,
} from "./Banner.styles"
import type { BannerProps } from "./Banner.types"

export const Banner = ({
	caption,
	subheading,
	heading,
	button,
	participants,
	backgroundCards,
}: BannerProps) => {
	const theme = useTheme()
	const { isMobile } = useBreakpoints()
	return (
		<ContainerSmall>
			<BannerWrapper backgroundCards={backgroundCards}>
				<BannerCaptionWrapper>
					<Typography
						variant={isMobile ? "p1Mobile" : "caption2"}
						align="center"
						sx={{ textTransform: "uppercase" }}
						color={theme.palette.defaultColors.white}
					>
						{caption}
					</Typography>
				</BannerCaptionWrapper>
				<BannerSubHeadingWrapper>
					<Typography
						variant={isMobile ? "h5Mobile" : "h5"}
						align="center"
						sx={{ textTransform: "uppercase" }}
						color={theme.palette.defaultColors.white}
					>
						{subheading}
					</Typography>
				</BannerSubHeadingWrapper>
				<BannerHeadingWrapper>
					<Typography
						variant={isMobile ? "h3Mobile" : "h2"}
						align="center"
						color={theme.palette.defaultColors.white}
					>
						{heading}
					</Typography>
				</BannerHeadingWrapper>
				<BannerButtonWrapper>
					<DefaultButton variant="containedInverse" href={button.href} label={button.title} />
				</BannerButtonWrapper>
				<BannerParticipantsWrapper>
					{participants.map((participant, index) => (
						<BannerParticipantImage
							key={useId()}
							quality={100}
							src={participant.url}
							alt={participant.alt}
							width={96}
							height={103}
							style={{ zIndex: participants.length - index }}
						/>
					))}
				</BannerParticipantsWrapper>
			</BannerWrapper>
		</ContainerSmall>
	)
}
