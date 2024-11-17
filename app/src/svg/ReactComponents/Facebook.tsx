import { useTheme } from "@mui/material"
import { useState } from "react"

export const Facebook = () => {
	const [isHovered, setIsHovered] = useState(false)
	const theme = useTheme()
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<path
				d="M0 9.6C0 6.23969 0 4.55953 0.653961 3.27606C1.2292 2.14708 2.14708 1.2292 3.27606 0.653961C4.55953 0 6.23969 0 9.6 0H14.4C17.7603 0 19.4405 0 20.7239 0.653961C21.8529 1.2292 22.7708 2.14708 23.346 3.27606C24 4.55953 24 6.23969 24 9.6V14.4C24 17.7603 24 19.4405 23.346 20.7239C22.7708 21.8529 21.8529 22.7708 20.7239 23.346C19.4405 24 17.7603 24 14.4 24H9.6C6.23969 24 4.55953 24 3.27606 23.346C2.14708 22.7708 1.2292 21.8529 0.653961 20.7239C0 19.4405 0 17.7603 0 14.4V9.6Z"
				fill={isHovered ? theme.palette.lsPrimary.p600 : theme.palette.lsNavy.n800}
			/>
			<path
				d="M13.533 24.0001V15.8309H16.4552L16.8709 12.2952H13.533V10.0314C13.533 8.82266 13.9882 8.34446 15.0138 8.34446H17V5.19237C12.6345 4.48422 9.95172 5.65125 9.95172 10.0304V12.2942H7V15.8299H9.95172V24L13.533 24.0001Z"
				fill={theme.palette.defaultColors.white}
			/>
		</svg>
	)
}
