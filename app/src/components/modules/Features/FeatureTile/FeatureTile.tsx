import { ArrowLink } from "@components"
import { useBreakpoints } from "@lib"
import { Box, Typography, useTheme } from "@mui/material"
import type { FeatureTileProps } from "./FeatureTile.types"
import { TileImage, TileWrapper } from "./FeatureTile.styles"

export const FeatureTile = ({ description, image, heading }: FeatureTileProps) => {
	const {
		palette: {
			lsNavy: { n800 },
		},
	} = useTheme()

	const { isTablet } = useBreakpoints()

	return (
		<TileWrapper>
			<TileImage
				src={image.url}
				alt={image.alt}
				width={356}
				height={166}
				quality={100}
				sizes="(max-width:768px) ,(max-width: 1024px) 260px, 356px"
			/>
			<Box sx={{ padding: "1.5rem 1rem 1rem", display: "flex", flexDirection: "column", gap: 2 }}>
				<ArrowLink
					title={heading.label}
					color={n800}
					href={heading.url}
					typographyVariant={isTablet ? "h6Mobile" : "h6"}
				/>
				<Typography variant={isTablet ? "p1Mobile" : "p1"}>{description}</Typography>
			</Box>
		</TileWrapper>
	)
}
