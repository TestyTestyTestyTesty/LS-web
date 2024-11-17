"use client"
import { GreenFlowArrows } from "@svg/ReactComponents/GreenFlowArrows"

import { InfographicPoint } from "@components"
import { useEffect, useId, useState } from "react"

import {
	InfographicDesktopFlowImageContainer,
	InfographicDesktopFlowWrapper,
	InforgraphicDesktopFlowImage,
} from "./InfographicDesktopFlow.styles"
import type { InfographicPointProps } from "../Infographic.types"
import type { Image } from "@types"

export const InfographicDesktopFlow = ({ points }: { points: InfographicPointProps[] }) => {
	const [activeItemId, setActiveItemId] = useState(1)
	const [fade, setFade] = useState(false)
	const [imgUrl, setImgUrl] = useState(points[0].image.url)
	const [imgAlt, setImgAlt] = useState(points[0].image.alt)

	const handleChangeActiveItem = (id: number) => (img: Image) => {
		setFade(true)
		setImgUrl(img.url)
		setImgAlt(img.alt)
		setActiveItemId(id)
	}
	useEffect(() => {
		setFade(false)
	}, [imgUrl])

	return (
		<>
			<InfographicDesktopFlowWrapper>
				<GreenFlowArrows />
				<InfographicDesktopFlowImageContainer>
					<InforgraphicDesktopFlowImage
						key={activeItemId}
						fade={fade}
						src={imgUrl}
						alt={imgAlt}
						width="550"
						height="140"
						quality={100}
					/>
				</InfographicDesktopFlowImageContainer>
			</InfographicDesktopFlowWrapper>
			{points.map((item, index) => (
				<InfographicPoint
					key={useId()}
					pointPosition={index + 1}
					onClick={handleChangeActiveItem(index + 1)}
					isActive={activeItemId === index + 1}
					item={item}
				/>
			))}
		</>
	)
}
