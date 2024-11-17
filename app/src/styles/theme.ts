"use client"
import { createTheme } from "@mui/material/styles"
import "@mui/material/styles"
import { nunitoSans, trueno } from "./fonts"

export type LsPrimaryVariants =
	| "p25"
	| "p50"
	| "p100"
	| "p200"
	| "p300"
	| "p400"
	| "p500"
	| "p600"
	| "p700"
	| "p800"
	| "p900"
	| "p1000"
	| "p1100"
	| "p1200"
type LsSecondaryVariants =
	| "c50"
	| "c100"
	| "c200"
	| "c300"
	| "c400"
	| "c500"
	| "c600"
	| "c700"
	| "c800"
	| "c900"
export type LsGreyVariants =
	| "g25"
	| "g50"
	| "g100"
	| "g200"
	| "g300"
	| "g400"
	| "g500"
	| "g600"
	| "g700"
	| "g800"
	| "g900"
	| "g1000"
	| "g1100"
export type LsNavyVariants = "n600" | "n700" | "n800" | "n900"
export type DefaultColorsVariants =
	| "white"
	| "black"
	| "red"
	| "blue"
	| "lightBlue"
	| "label"
	| "link"

export type LsPrimary = Record<LsPrimaryVariants, string>
export type LsSecondary = Record<LsSecondaryVariants, string>
export type LsGrey = Record<LsGreyVariants, string>
export type LsNavy = Record<LsNavyVariants, string>
export type DefaultColors = Record<DefaultColorsVariants, string>
declare module "@mui/material/styles" {
	interface Palette {
		lsPrimary: LsPrimary
		lsSecondary: LsSecondary
		lsGrey: LsGrey
		lsNavy: LsNavy
		defaultColors: DefaultColors
	}
	interface PaletteOptions {
		lsPrimary?: Partial<LsPrimary>
		lsSecondary?: Partial<LsSecondary>
		lsGrey?: Partial<LsGrey>
		lsNavy?: Partial<LsNavy>
		defaultColors?: Partial<DefaultColors>
	}
}
export type CustomTypographyVariants =
	| "h1Mobile"
	| "h2Mobile"
	| "h3Mobile"
	| "h4Mobile"
	| "h5Mobile"
	| "h6Mobile"
	| "p"
	| "p1"
	| "p1Mobile"
	| "quote1"
	| "quote2"
	| "cta"
	| "label"
	| "label1"
	| "label2"
	| "label3"
	| "caption1"
	| "caption1Mobile"
	| "caption2"
	| "caption3"
	| "playBtn"
	| "defaultBtn"
	| "navBtn"
	| "navCaption"
	| "linkArrow"
	| "defaultSmallBtn"
	| "menuHeading"
export type CustomTypographyStyles = Record<CustomTypographyVariants, React.CSSProperties>
declare module "@mui/material/styles" {
	interface TypographyVariants extends CustomTypographyStyles {}
	interface TypographyVariantsOptions extends Partial<CustomTypographyStyles> {}
}
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides extends Record<CustomTypographyVariants, true> {}
}
declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		containedInverse: true
	}
}

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xxs: true
		xs: true
		sm: true
		md: true
		lg: true
		xl: true
		xxl: true
	}
}

const commonStyles = {
	fontFamily: `${nunitoSans.style.fontFamily}, Helvetica, Arial, sans-serif`,
	lineHeight: "1.5rem",
	fontWeight: 400,
}
const theme = createTheme({
	breakpoints: {
		values: {
			xxs: 0,
			xs: 360,
			sm: 620,
			md: 768,
			lg: 1024,
			xl: 1280,
			xxl: 1440,
		},
	},

	palette: {
		lsPrimary: {
			p25: "#F3FDF4",
			p50: "#E7F9E9",
			p100: "#C7F0CA",
			p200: "#A1E6A8",
			p300: "#75DD83",
			p400: "#4FD465",
			p500: "#19CB46",
			p600: "#3BBA5D",
			p700: "#26AE4D",
			p800: "#279D42",
			p900: "#00760D",
			p1000: "#005819",
			p1100: "#154B31",
			p1200: "#26383E",
		},
		lsSecondary: {
			c50: "#EBE8F6",
			c100: "#CDC6E9",
			c200: "#ACA1DB",
			c300: "#8A7CCD",
			c400: "#7060C3",
			c500: "#5546B8",
			c600: "#4C41B2",
			c700: "#3D39A8",
			c800: "#3033A0",
			c900: "#172890",
		},
		lsGrey: {
			g25: "#FAFBFD",
			g50: "#F5F7FC",
			g100: "#F0F2F7",
			g200: "#E9EBF0",
			g300: "#E4E5EA",
			g400: "#DDDEE2",
			g500: "#C7C9CE",
			g600: "#AAABB0",
			g700: "#98999F",
			g800: "#808186",
			g900: "#76777B",
			g1000: "#6B6C71",
			g1100: "#4B4D51",
		},
		lsNavy: { n600: "#4A5069", n700: "#3D435A", n800: "#24293b", n900: "#030405" },
		defaultColors: {
			white: "#FFFFFF",
			black: "#000000",
			red: "#DF224B",
			blue: "#006FF5",
			lightBlue: "#509FFF",
			label: "#C3BEFF",
			link: "#5757D9",
		},
	},
	typography: {
		allVariants: {
			color: "#24293b",
		},
		fontFamily: `${nunitoSans.style.fontFamily}, Helvetica, Arial, sans-serif`,
		h1: {
			fontFamily: `${trueno.style.fontFamily}, Helvetica, Arial, sans-serif`,
			fontSize: "4rem",
			lineHeight: "4.5rem",
			fontWeight: 800,
		},
		h1Mobile: {
			fontFamily: `${trueno.style.fontFamily}, Helvetica, Arial, sans-serif`,
			fontSize: "2.25rem",
			lineHeight: "3rem",
			fontWeight: 800,
		},
		h2: {
			fontFamily: `${trueno.style.fontFamily}, Helvetica, Arial, sans-serif`,
			fontSize: "2.25rem",
			lineHeight: "3.25rem",
			fontWeight: 800,
		},
		h2Mobile: {
			fontFamily: `${trueno.style.fontFamily}, Helvetica, Arial, sans-serif`,
			fontSize: "1.875rem",
			lineHeight: "2.75rem",
			fontWeight: 800,
		},
		h3: {
			fontFamily: `${trueno.style.fontFamily}, Helvetica, Arial, sans-serif`,
			fontSize: "2rem",
			lineHeight: "3rem",
			fontWeight: 800,
		},
		h3Mobile: {
			fontFamily: `${trueno.style.fontFamily}, Helvetica, Arial, sans-serif`,
			fontSize: "1.5rem",
			lineHeight: "2rem",
			fontWeight: 800,
		},
		h4: { ...commonStyles, fontSize: "1.75rem", fontWeight: 800, lineHeight: "2.75rem" },
		h4Mobile: { ...commonStyles, fontSize: "1.3125rem", fontWeight: 800, lineHeight: "1.8125rem" },
		h5: { ...commonStyles, fontSize: "1.5rem", fontWeight: 800, lineHeight: "2.25rem" },
		h5Mobile: { ...commonStyles, fontSize: "1.1875rem", fontWeight: 800, lineHeight: "1.625rem" },
		h6: { ...commonStyles, fontSize: "1.25rem", fontWeight: 700, lineHeight: "1.625rem" },
		h6Mobile: { ...commonStyles, fontSize: "1.0625rem", fontWeight: 700 },
		p: { ...commonStyles, fontSize: "1.125rem", lineHeight: "2rem" },
		menuHeading: { ...commonStyles, fontSize: "1.125rem" },
		p1: { ...commonStyles, fontSize: "1.25rem", lineHeight: "2rem" },
		p1Mobile: { ...commonStyles, fontSize: "0.9375rem", lineHeight: "1.5rem" },
		quote1: { ...commonStyles, fontStyle: "italic", fontSize: "2rem", lineHeight: "3rem" },
		quote2: { ...commonStyles, fontStyle: "italic", fontSize: "1.25rem", lineHeight: "2rem" },
		cta: {
			...commonStyles,
			fontStyle: "italic",
			fontSize: "1.25rem",
			lineHeight: "2rem",
			fontWeight: 700,
		},
		label: {
			...commonStyles,
			fontStyle: "italic",
			fontSize: "0.8125rem",
			lineHeight: "normal",
			fontWeight: 700,
		},
		label1: {
			...commonStyles,
			fontSize: "1rem",
			lineHeight: "1.375rem",
			fontWeight: 600,
			textTransform: "uppercase",
		},
		label2: { ...commonStyles, fontSize: "0.875rem", lineHeight: "1.3125rem", fontWeight: 700 },
		label3: { ...commonStyles, fontSize: "1.0625rem", lineHeight: "1.5rem", fontWeight: 700 },
		caption1: { ...commonStyles, fontSize: "1rem", fontWeight: 700 },
		caption1Mobile: {
			...commonStyles,
			fontSize: "0.8125rem",
			lineHeight: "1.125rem",
			fontWeight: 700,
		},
		caption2: {
			...commonStyles,
			fontSize: "1rem",
			fontWeight: 500,
		},
		caption3: {
			...commonStyles,
			fontSize: "0.9375rem",
			lineHeight: "normal",
		},
		playBtn: { ...commonStyles, fontSize: "1rem", lineHeight: "normal", fontWeight: 700 },
		defaultBtn: { ...commonStyles, fontSize: "1.25rem", lineHeight: "normal", fontWeight: 700 },
		navBtn: { ...commonStyles, fontSize: "0.9375rem", lineHeight: "1.25rem", fontWeight: 700 },
		linkArrow: { ...commonStyles, fontSize: "0.9375rem", lineHeight: "normal", fontWeight: 700 },
		navCaption: { ...commonStyles, fontSize: "0.9375rem", lineHeight: "1.25rem" },
		defaultSmallBtn: {
			...commonStyles,
			fontSize: "0.8125rem",
			lineHeight: "normal",
			fontWeight: 700,
		},
	},
	shape: { borderRadius: 25 },
})
export default theme
