import { useMediaQuery, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"
import type { Image } from "@types"
import { useMemo } from "react"
import { IconSetImage, IconSetWrapper } from "./IconSet.styles"
import { adjustIconsToEvenRows } from "@lib"

interface IconSetProps {
	icons: Image[]
	width?: number
	height?: number
}

export const IconSet = ({ icons, width = 83, height = 55 }: IconSetProps) => {
	const theme = useTheme()
	const isDesktopBig = useMediaQuery(theme.breakpoints.up(breakpointsEnum.XL))

	const displayedIcons = useMemo(() => {
		return isDesktopBig ? icons : adjustIconsToEvenRows(icons)
	}, [icons, isDesktopBig])

	return (
		<IconSetWrapper>
			{displayedIcons.map((item, index) => (
				<IconSetImage
					key={item.url || index}
					quality={100}
					src={item.url}
					alt={item.alt}
					width={width}
					height={height}
				/>
			))}
		</IconSetWrapper>
	)
}
