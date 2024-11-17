import { Container, DefaultButton, IconSet, LabelIcons, MarqueeCarousel } from "@components"
import { splitIconsArray, useBreakpoints } from "@lib"
import { Typography } from "@mui/material"

import {
	CtaButtonWrapper,
	CtaHeadingWrapper,
	CtaLabels,
	CtaSubHeadingWrapper,
	CtaWrapper,
} from "./Cta.styles"
import type { CtaProps } from "./Cta.types"

export const Cta = ({ subheading, heading, buttons, labelIcons, icons }: CtaProps) => {
	const { isMobile, isMobileWide } = useBreakpoints()
	const [iconSet1, iconSet2] = splitIconsArray(icons)
	return (
		<Container>
			<CtaWrapper>
				<CtaSubHeadingWrapper>
					<Typography
						variant={isMobile ? "h6Mobile" : "h6"}
						align="center"
						sx={{ textTransform: "uppercase" }}
					>
						{subheading}
					</Typography>
				</CtaSubHeadingWrapper>
				<CtaHeadingWrapper>
					<Typography variant={isMobile ? "h2Mobile" : "h2"} align="center">
						{heading}
					</Typography>
				</CtaHeadingWrapper>
				<CtaButtonWrapper>
					<DefaultButton
						variant="outlined"
						href={buttons[0].href}
						label={buttons[0].title}
						isFullWidth={isMobileWide}
					/>
					<DefaultButton
						variant="contained"
						href={buttons[1].href}
						label={buttons[1].title}
						isFullWidth={isMobileWide}
					/>
				</CtaButtonWrapper>
				<CtaLabels>
					<LabelIcons labelIcons={labelIcons} />
				</CtaLabels>

				{isMobile ? (
					<>
						<MarqueeCarousel direction="normal" icons={iconSet1} />
						<MarqueeCarousel direction="reverse" icons={iconSet2} />
					</>
				) : (
					<IconSet icons={icons} />
				)}
			</CtaWrapper>
		</Container>
	)
}
