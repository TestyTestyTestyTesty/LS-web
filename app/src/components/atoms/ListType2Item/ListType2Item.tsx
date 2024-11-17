"use client"
import { Typography, useMediaQuery, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"
import Image from "next/image"
import Link from "next/link"
import { DummyArrowLink } from "../Buttons/DummyArrowLink/DummyArrowLink"
import {
	ListType2ContentWrapper,
	ListType2ImageWrapper,
	ListType2Link,
	ListType2TextWrapper,
	ListType2Wrapper,
} from "./ListType2Item.styles"
import type { listType2ItemProps } from "./ListType2Item.types"

export const ListType2Item = ({
	listItem,
	lightAccent = "#fff",
	darkAccent = "#000",
}: listType2ItemProps) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down(breakpointsEnum.MD))
	return (
		<ListType2Wrapper>
			<Link href={listItem.linkHref} passHref legacyBehavior>
				<ListType2Link backgroundColor={lightAccent} underline="none">
					<ListType2ContentWrapper>
						<ListType2ImageWrapper>
							<Image
								src={listItem.iconUrl}
								width={isMobile ? 32 : 28}
								height={isMobile ? 32 : 28}
								alt={listItem.iconAlt}
								quality={100}
							/>
						</ListType2ImageWrapper>
						<ListType2TextWrapper sx={{}}>
							<Typography variant="linkArrow">{listItem.title}</Typography>
							{listItem.subtitle && <Typography>{listItem.subtitle}</Typography>}
							<DummyArrowLink title={listItem.linkTitle} color={darkAccent} />
						</ListType2TextWrapper>
					</ListType2ContentWrapper>
				</ListType2Link>
			</Link>
		</ListType2Wrapper>
	)
}
