import { Link, styled } from "@mui/material"

export const HighlightedItemLink = styled(Link, {
	name: "HighlightedItemLink",
})(({ theme }) => ({
	padding: "1rem",
	borderRadius: "0.5rem",
	boxShadow: "0 0.25rem 1rem 0 rgba(36, 41, 59, 0.15)",
	border: `1px solid ${theme.palette.lsGrey.g300}`,
	display: "flex",
	alignItems: "center",
	gap: "1rem",
}))
