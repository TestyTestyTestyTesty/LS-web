import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { breakpointsEnum } from "@lib"

export const useBreakpoints = () => {
	const theme = useTheme()

	const isMobile = useMediaQuery(theme.breakpoints.down(breakpointsEnum.SM))
	const isMobileWide = useMediaQuery(theme.breakpoints.down(breakpointsEnum.MD))
	const isTablet = useMediaQuery(theme.breakpoints.down(breakpointsEnum.LG))
	const isTabletWide = useMediaQuery(theme.breakpoints.down(breakpointsEnum.XL))
	const isDesktop = useMediaQuery(theme.breakpoints.up(breakpointsEnum.XL))

	return {
		isMobile,
		isMobileWide,
		isTablet,
		isTabletWide,
		isDesktop,
	}
}
