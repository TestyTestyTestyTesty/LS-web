import { DefaultButton } from "@components/atoms/Buttons/DefaultButton/DefaultButton"
import { useBreakpoints } from "@lib"
import {
	MegaMenuBottomSectionTextWrapper,
	MegaMenuBottomSectionWrapper,
	MenuBottomSectionTypography,
} from "./MegaMenuBottomSection.styles"
import type { MegaMenuBottomSectionProps } from "./MegaMenuBottomSection.types"

export const MegaMenuBottomSection = ({ title, subtitle, link }: MegaMenuBottomSectionProps) => {
	const { isTabletWide } = useBreakpoints()
	return (
		<MegaMenuBottomSectionWrapper>
			<MegaMenuBottomSectionTextWrapper>
				<MenuBottomSectionTypography variant="linkArrow">{title}</MenuBottomSectionTypography>
				<MenuBottomSectionTypography variant="caption3">{subtitle}</MenuBottomSectionTypography>
			</MegaMenuBottomSectionTextWrapper>
			<DefaultButton
				variant="outlined"
				size={isTabletWide ? "large" : "small"}
				href={link.href}
				label={link.title}
				isFullWidth={isTabletWide}
			/>
		</MegaMenuBottomSectionWrapper>
	)
}
