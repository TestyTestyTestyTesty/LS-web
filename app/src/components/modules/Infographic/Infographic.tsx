import { Typography, useTheme } from "@mui/material"

import {
	Container,
	ContentHeaderWrapper,
	InfographicDesktopFlow,
	InfographicMobileFlow,
} from "@components"
import { useBreakpoints } from "@lib"
import type { InfographicProps } from "./Infographic.types"

import {
	InfographicBottom,
	InfographicContent,
	InfographicHeading,
	InfographicWrapper,
} from "./Infographic.styles"

export const Infographic = ({ title, subtitle, points }: InfographicProps) => {
	const theme = useTheme()
	const { isDesktop } = useBreakpoints()

	return (
		<InfographicWrapper>
			<Container>
				<InfographicContent>
					<ContentHeaderWrapper>
						<InfographicHeading>
							<Typography
								variant={isDesktop ? "h6" : "h6Mobile"}
								color={theme.palette.defaultColors.white}
								component="h5"
								sx={{ marginBottom: "1.5rem", textTransform: "uppercase" }}
							>
								{title}
							</Typography>
							<Typography
								variant={isDesktop ? "h2" : "h2Mobile"}
								color={theme.palette.defaultColors.white}
							>
								{subtitle}
							</Typography>
						</InfographicHeading>
					</ContentHeaderWrapper>
					<InfographicBottom>
						{isDesktop ? (
							<InfographicDesktopFlow points={points} />
						) : (
							<InfographicMobileFlow points={points} />
						)}
					</InfographicBottom>
				</InfographicContent>
			</Container>
		</InfographicWrapper>
	)
}
