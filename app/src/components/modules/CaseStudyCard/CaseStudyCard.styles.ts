import { Box, styled } from "@mui/material"
import { breakpointsEnum } from "@lib"
import Image from "next/image"

export const CaseStudyCardWrapper = styled(Box, {
	name: "CaseStudyCardWrapper",
})(({ theme }) => ({
	backgroundColor: theme.palette.defaultColors.white,
	borderRadius: "1rem",
	position: "relative",
	maxWidth: "67.5rem",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	flex: 1,
	justifyContent: "space-between",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		width: "38rem",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		width: "16.125rem",
	},
}))

export const CaseStudyCardTop = styled(Box, {
	name: "CaseStudyCardTop",
})(({ theme }) => ({
	padding: "1.4rem 2.5rem",
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "row",
	borderBottom: `1px solid ${theme.palette.lsGrey.g400}`,
	alignItems: "center",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		padding: "1rem 1.5rem",
		alignItems: "center",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		alignItems: "center",
		padding: "1rem",
		background: theme.palette.lsGrey.g50,
		borderRadius: "1rem 1rem 0 0",
	},
}))

export const CaseStudyCardTagsWrapper = styled(Box, {
	name: "CaseStudyCardTagsWrapper",
})(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "row",
	gap: "4.8rem",
	alignItems: "center",
	[theme.breakpoints.down(breakpointsEnum.XL)]: {
		gap: "1rem",
		alignItems: "flex-start",
		flexDirection: "column",
	},
}))

export const CaseStudyCardIndustryWrapper = styled(Box, {
	name: "CaseStudyCardIndustryWrapper",
})(({ theme }) => ({
	display: "flex",
	gap: "0.5rem",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		gap: "0.2rem",
		flexDirection: "column",
	},
}))

export const CaseStudyCardGoalWrapper = styled(Box, {
	name: "CaseStudyCardGoalWrapper",
})(({ theme }) => ({
	display: "flex",
	gap: "0.5rem",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		alignItems: "center",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		alignItems: "flex-start",
		gap: "0.2rem",
		flexDirection: "column",
	},
}))

export const CaseStudyCardLogoWrapper = styled(Box, {
	name: "CaseStudyCardLogoWrapper",
})({
	maxHeight: "3rem",
	height: "100%",
})

export const CaseStudyCardBottom = styled(Box, {
	name: "CaseStudyCardBottom",
})(({ theme }) => ({
	position: "relative",
	overflow: "hidden",
	borderRadius: "1rem",
	zIndex: 1,
	display: "flex",
	flexDirection: "column",
	flex: 1,
	[theme.breakpoints.up(breakpointsEnum.MD)]: {
		padding: "1.5rem",
		gap: "1.5rem",
	},
	[theme.breakpoints.up(breakpointsEnum.XL)]: {
		gap: "2.5rem",
		padding: "2.5rem",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		padding: "1rem",
		justifyContent: "space-between",
		gap: "0.5rem",
	},
}))

export const CaseStudyCardBottomWrapper = styled(Box, {
	name: "CaseStudyCardBottomWrapper",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	[theme.breakpoints.up(breakpointsEnum.MD)]: {
		maxWidth: "70%",
		gap: "1.5rem",
	},
	[theme.breakpoints.up(breakpointsEnum.XL)]: {
		gap: "2.5rem",
	},
	[theme.breakpoints.down(breakpointsEnum.MD)]: {
		maxWidth: "100%",
		gap: "1rem",
	},
}))

export const CaseStudyCardOutcomes = styled(Box, {
	name: "CaseStudyCardOutcomes",
})(({ theme }) => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 13.8rem)",
	gap: "2px",
	[theme.breakpoints.down(breakpointsEnum.LG)]: {
		gridTemplateColumns: "repeat(3, 7.5rem)",
	},
}))

export const CaseStudyCardOutcome = styled(Box, {
	name: "CaseStudyCardOutcome",
})(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: "0.5rem",
	alignItems: "center",
	background: theme.palette.lsPrimary.p50,
	padding: "0.75rem 0.5rem",
	textAlign: "center",
	"&:first-of-type": {
		borderRadius: "0.5rem 0 0 0.5rem",
	},
	"&:last-of-type": {
		borderRadius: "0 0.5rem 0.5rem 0",
	},
}))

export const CaseStudyCardImageWrapper = styled(Box, {
	name: "CaseStudyCardImageWrapper",
})({
	position: "absolute",
	bottom: 0,
	right: "-1rem",
	overflow: "hidden",
	zIndex: -1,
	display: "flex",
})

export const CaseStudyCardImage = styled(Image, {
	name: "CaseStudyCardImage",
})({
	objectFit: "contain",
})
