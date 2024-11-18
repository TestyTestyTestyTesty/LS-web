import { breakpointsEnum } from "@lib"
import { Box, styled } from "@mui/material"

export const FeaturesWrapper = styled(Box, {
	name: "FeaturesWrapper",
})(({ theme }) => ({
	backgroundColor: theme.palette.lsPrimary.p1100,
	margin: "0 auto",
	overflow: "hidden",
	[theme.breakpoints.up(breakpointsEnum.LG)]: {
		backgroundImage: "url(/features-green-line.svg)",
		backgroundSize: "100% 60%",
		backgroundPosition: "bottom center",
		backgroundRepeat: "no-repeat",
	},
}))

export const FeaturesContainer = styled(Box, {
	name: "FeaturesContainer",
})({
	margin: "0 auto",
	padding: "4rem 0",
})

export const FeaturesTilesContainer = styled(Box, {
	name: "FeaturesTilesContainer",
})({
	display: "grid",
	gridTemplateColumns: "repeat(3,1fr)",
	gap: "2rem",
	padding: "2rem 1.25rem",
})
