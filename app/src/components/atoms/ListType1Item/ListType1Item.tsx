import EastIcon from "@mui/icons-material/East"
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import { breakpointsEnum } from "@lib"
import Image from "next/image"
import Link from "next/link"
import {
	ListType1ItemImageWrapper,
	ListType1ItemLink,
	ListType1ItemListItem,
	ListType1ItemTextWrapper,
	ListType1ItemWrapper,
} from "./ListType1Item.styles"
import type { ListType1ItemProps } from "./ListType1Item.types"

export const ListType1Item = ({
	listItem,
	lightAccent = "#fff",
	darkAccent = "#000",
}: ListType1ItemProps) => {
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down(breakpointsEnum.LG))
	return (
		<ListType1ItemListItem>
			<Link href={listItem.href} passHref legacyBehavior>
				<ListType1ItemLink backgroundColor={lightAccent} underline="none">
					<ListType1ItemWrapper sx={{ alignItems: listItem.subtitle ? "flex-start" : "center" }}>
						<ListType1ItemImageWrapper style={{ backgroundColor: lightAccent }}>
							<Image
								src={listItem.iconUrl}
								width={isMobile ? 21 : 16}
								height={isMobile ? 21 : 16}
								alt={listItem.iconAlt}
								quality={100}
							/>
						</ListType1ItemImageWrapper>
						<ListType1ItemTextWrapper>
							<Box>
								<Typography variant="linkArrow">{listItem.title}</Typography>
								{listItem.subtitle && <Typography>{listItem.subtitle}</Typography>}
							</Box>
							{isMobile && <EastIcon sx={{ color: darkAccent }} />}
						</ListType1ItemTextWrapper>
					</ListType1ItemWrapper>
				</ListType1ItemLink>
			</Link>
		</ListType1ItemListItem>
	)
}
