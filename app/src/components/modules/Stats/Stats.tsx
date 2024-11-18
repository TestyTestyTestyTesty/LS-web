import { Container, ContentHeaderWrapper, DefaultButton, StatsTile } from "@components"
import { useBreakpoints } from "@lib"
import { Box, Typography, useTheme } from "@mui/material"
import { StatsContent, StatsTilesWrapper } from "./Stats.styles"
import type { StatsProps } from "./Stats.types"

export const Stats = ({ title, buttonLabel, tiles, lead, description }: StatsProps) => {
	const theme = useTheme()
	const { isTablet } = useBreakpoints()

	return (
		<Container>
			<StatsContent>
				<ContentHeaderWrapper sideLineColor={theme.palette.lsGrey.g200}>
					<Typography
						component="p"
						variant={isTablet ? "h6Mobile" : "h6"}
						sx={{ marginBottom: "2rem" }}
					>
						{title.toUpperCase()}
					</Typography>

					<Typography component="h2" variant={isTablet ? "h2Mobile" : "h2"}>
						{lead}
					</Typography>
				</ContentHeaderWrapper>
				<Box sx={{ padding: "1rem 1.5rem", maxWidth: "40.25rem" }}>
					<Typography variant={isTablet ? "p1Mobile" : "p1"}>{description}</Typography>
				</Box>
				<Box sx={{ padding: "1rem 1.5rem", maxWidth: "40.25rem" }}>
					<DefaultButton label={buttonLabel} variant="contained" />
				</Box>
				<StatsTilesWrapper>
					{tiles.map((tile) => (
						<StatsTile
							key={tile.id}
							title={tile.title}
							stats={tile.stats}
							message={tile.message}
							background={tile.backgroundImage}
						/>
					))}
				</StatsTilesWrapper>
			</StatsContent>
		</Container>
	)
}
