import { Box, styled } from "@mui/material"

export const VideoPlayButtonWrapper = styled(Box, {
	name: "VideoPlayButtonWrapper",
})(({ theme }) => ({
	padding: "1rem 2.5rem 1rem 1rem",
	background: theme.palette.defaultColors.white,
	border: `1px solid ${theme.palette.lsPrimary.p700}`,
	borderRadius: "3rem",
	alignItems: "center",
	display: "flex",
	gap: "1rem",
	boxShadow: "0px var(--24, 1.5rem) var(--40, 2.5rem) rgba(9, 9, 22, 0.15)",
	transition: "box-shadow 0.3s",
	cursor: "pointer",
	"&:hover": {
		background: theme.palette.lsGrey.g50,
		boxShadow: "0px var(--24, 1.5rem) 2.5rem rgba(9, 9, 22, 0.30)",
	},
}))

export const VideoPlayButtonContent = styled(Box, {
	name: "VideoPlayButtonContent",
})({
	display: "flex",
	flexDirection: "column",
	gap: "0.1rem",
})

export const VideoPlayButtonContentTop = styled(Box, {
	name: "VideoPlayButtonContentTop",
})({
	display: "flex",
	gap: "0.25rem",
	alignItems: "center",
})

export const VideoPlayButtonContentBottom = styled(Box, {
	name: "VideoPlayButtonContentBottom",
})({
	display: "flex",
	gap: "0.25rem",
	alignItems: "center",
})
