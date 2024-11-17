import type { FooterBottomProps } from "./FooterBottom/FooterBottom.types"
import type { FooterMiddleProps } from "./FooterMiddle/FooterMiddle.types"
import type { FooterTopProps } from "./FooterTop/FooterTop.types"

export interface FooterProps {
	top: FooterTopProps
	middle: FooterMiddleProps
	bottom: FooterBottomProps
}
