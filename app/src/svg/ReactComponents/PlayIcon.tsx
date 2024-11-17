import { useTheme } from "@mui/material"
import React from "react"

export const PlayIcon = ({ isHovered }: { isHovered: boolean }) => {
	const theme = useTheme()
	return (
		<>
			<svg
				width="58"
				height="58"
				viewBox="0 0 58 58"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					cx="29"
					cy="29"
					r="29"
					fill={isHovered ? theme.palette.lsPrimary.p600 : theme.palette.lsPrimary.p400}
					style={{ transition: "all 0.3s" }}
				/>
				<g filter="url(#filter0_d_1370_200)">
					<path
						d="M40.404 28.1235C41.0955 28.5033 41.0955 29.4968 40.404 29.8765L22.9814 39.4448C22.3149 39.8108 21.5 39.3286 21.5 38.5683L21.5 19.4318C21.5 18.6714 22.3149 18.1892 22.9814 18.5552L40.404 28.1235Z"
						fill={theme.palette.defaultColors.white}
					/>
				</g>
			</svg>
		</>
	)
}
