import { useTheme } from "@mui/material"
import React, { useState } from "react"

export const Youtube = () => {
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
				d="M18.8841 11.1727C18.8538 10.5273 18.8064 9.72227 18.7468 9.31825C18.6064 8.25466 17.9751 7.64155 16.7943 7.53247C15.9529 7.46176 14.4076 7.37793 12.0481 7.37793H12.0319C9.6724 7.37793 8.12701 7.46176 7.28563 7.53247C6.10487 7.64155 5.47359 8.25466 5.33319 9.31825C5.2736 9.72227 5.22612 10.5273 5.19582 11.1727C5.16552 11.8091 5.16552 12.4464 5.19582 13.0837C5.22612 13.7292 5.2736 14.5342 5.33319 14.9382C5.47359 16.0018 6.10487 16.6149 7.28563 16.724C8.12701 16.7947 9.6724 16.8785 12.0319 16.8785C12.0349 16.8785 12.0369 16.8785 12.04 16.8785C12.043 16.8785 12.045 16.8785 12.0481 16.8785C14.4076 16.8785 15.9529 16.7947 16.7943 16.724C17.9751 16.6149 18.6064 16.0018 18.7468 14.9382C18.8064 14.5342 18.8538 13.7292 18.8841 13.0837C18.9144 12.4474 18.9144 11.8101 18.8841 11.1727Z"
				fill={theme.palette.defaultColors.white}
			/>
			<path
				d="M10.5439 9.6875V14.562L14.3498 12.1288L10.5439 9.6875Z"
				fill={isHovered ? theme.palette.lsPrimary.p600 : theme.palette.lsNavy.n800}
			/>
		</svg>
	)
}