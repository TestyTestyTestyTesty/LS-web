import { Box, styled } from "@mui/material"

export const CarouselCustomDotItem = styled(Box, {
	name: "CarouselCustomDotItem",
	shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
	background: active ? theme.palette.lsPrimary.p400 : theme.palette.lsPrimary.p1000,
	height: "0.4rem",
	width: "0.4rem",
	margin: "0.3rem",
	borderRadius: "50000rem",
}))
