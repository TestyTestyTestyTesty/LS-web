import { styled } from "@mui/material"

export const HamburgerWrapper = styled("div", {
	name: "HamburgerWrapper",
})({
	display: "flex",
	cursor: "pointer",
	font: "inherit",
	color: "inherit",
	textTransform: "none",
	backgroundColor: "transparent",
	border: 0,
	margin: 0,
	overflow: "visible",
	padding: "10px",
})

export const HamburgerBox = styled("div", {
	name: "HamburgerBox",
})({
	width: "24px",
	height: "24px",
	display: "inline-block",
	position: "relative",
})

export const HamburgerInner = styled("div", {
	name: "HamburgerInner",
	shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
	display: " block",
	position: "absolute",
	top: "2px",
	marginTop: "-2px",
	width: "24px",
	height: "2px",
	backgroundColor: theme.palette.lsNavy.n800,
	transition: "transform 0.15s ease",
	transform: isActive ? "translate3d(0, 9px, 0) rotate(45deg)" : "none",
	"&:after,&:before": {
		content: "''",
		display: "block",
		width: "24px",
		height: "2px",
		backgroundColor: theme.palette.lsNavy.n800,
		position: "absolute",
		transition: "transform 0.15s ease",
	},
	"&:before": {
		top: "9px",
		transform: isActive ? "rotate(-45deg) translate3d(-5.71429px, -6px, 0)" : "none",
		opacity: isActive ? 0 : 1,
	},
	"&:after": {
		top: "18px",
		transform: isActive ? "translate3d(0, -18px, 0) rotate(-90deg)" : "none",
		bottom: "-10px",
	},
}))
