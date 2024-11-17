import { useBreakpoints } from "@lib"
import SouthIcon from "@mui/icons-material/South"
import { Typography, useTheme } from "@mui/material"
import { StatsTileWrapper } from "./StatsTile.styles"
import type { StatsTileProps } from "./StatsTile.types"

export const StatsTile = ({ title, stats, message, background }: StatsTileProps) => {
	const {
		palette: {
			defaultColors: { white },
			lsPrimary: { p400 },
		},
	} = useTheme()

	const { isMobile, isTablet } = useBreakpoints()

	return (
		<StatsTileWrapper background={background}>
			<Typography color={white} variant={isTablet ? "h6Mobile" : "h5"}>
				{title}
			</Typography>
			{isMobile ? null : <SouthIcon sx={{ color: "white" }} />}
			<Typography color={p400} variant={isTablet ? "h3Mobile" : "h2"}>
				{stats}
			</Typography>
			<Typography
				color={white}
				variant={isTablet ? "caption1Mobile" : "p1"}
				textAlign="center"
				sx={{ maxWidth: "11.25rem", padding: "0 1rem" }}
			>
				{message}
			</Typography>
		</StatsTileWrapper>
	)
}
