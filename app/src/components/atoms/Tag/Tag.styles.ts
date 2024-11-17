import { Box, styled } from "@mui/material"

export const TagWrapper = styled(Box, {
	name: "TagWrapper",
	shouldForwardProp: (prop) => prop !== "wide",
})<{ backgroundColor?: string; wide: boolean }>(({ backgroundColor, wide, theme }) => ({
	display: "flex",
	padding: wide ? "0.25rem 0.5rem" : "0.25rem",
	backgroundColor: backgroundColor ? backgroundColor : theme.palette.lsPrimary.p200,
	borderRadius: "0.125rem",
	width: "fit-content",
}))
