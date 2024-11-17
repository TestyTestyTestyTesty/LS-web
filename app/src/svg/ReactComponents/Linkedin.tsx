import { useTheme } from "@mui/material"
import React, { useState } from "react"

export const Linkedin = () => {
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
				d="M12.9856 11.273C14.4239 8.91855 18.9298 9.21147 18.9298 13.08V18.909H16.2057V13.8052C16.2057 12.9689 15.5279 12.2901 14.6906 12.2901C13.8543 12.2901 13.1755 12.9679 13.1755 13.8052V18.909H10.4009V10.0508H12.9816L12.9846 11.273H12.9856Z"
				fill={theme.palette.defaultColors.white}
			/>
			<path
				d="M8.65748 10.0381H5.896V18.9094H8.65748V10.0381Z"
				fill={theme.palette.defaultColors.white}
			/>
			<path
				d="M8.41539 8.41581C9.04415 7.78706 9.04414 6.76764 8.41539 6.13889C7.78663 5.51013 6.76722 5.51013 6.13846 6.13888C5.5097 6.76764 5.50971 7.78705 6.13846 8.41581C6.76722 9.04456 7.78663 9.04457 8.41539 8.41581Z"
				fill={theme.palette.defaultColors.white}
			/>
		</svg>
	)
}
