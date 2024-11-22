"use client"
import { Typography, useTheme } from "@mui/material"
import Link from "next/link"
import { ListType3ArrowItem } from "../ListType3ArrowItem/ListType3ArrowItem"
import { Tag } from "../Tag/Tag"
import {
	ListType3ItemContentWrapper,
	ListType3ItemLink,
	ListType3ItemTextWrapper,
	ListType3ItemWrapper,
} from "./ListType3Item.styles"
import type { listType3ItemProps } from "./ListType3Item.types"
import {
	ListType3ItemTag,
	ListType3ItemWrapperInnerWrapper,
} from "@components/modules/Lists/ListType3/ListType3.styles"

export const ListType3Item = ({ text, href, tag, isBig }: listType3ItemProps) => {
	const theme = useTheme()
	return (
		<ListType3ItemWrapper>
			<ListType3ItemContentWrapper>
				{isBig ? (
					<ListType3ItemTextWrapper>
						<ListType3ArrowItem href={href} text={text} />
					</ListType3ItemTextWrapper>
				) : (
					<ListType3ItemWrapperInnerWrapper>
						<Link href={href} passHref legacyBehavior>
							<ListType3ItemLink underline="none">
								<ListType3ItemTextWrapper>
									<Typography variant="navBtn">{text}</Typography>
								</ListType3ItemTextWrapper>
							</ListType3ItemLink>
						</Link>
						{tag && (
							<ListType3ItemTag>
								<Tag tagColor={theme.palette.lsPrimary.p300}>
									<Typography variant="label" textTransform={"uppercase"}>
										{tag}
									</Typography>
								</Tag>
							</ListType3ItemTag>
						)}
					</ListType3ItemWrapperInnerWrapper>
				)}
			</ListType3ItemContentWrapper>
		</ListType3ItemWrapper>
	)
}
