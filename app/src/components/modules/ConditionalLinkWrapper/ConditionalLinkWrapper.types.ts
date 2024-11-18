import type { ReactNode } from "react"

export interface ConditionalLinkWrapperProps {
	href?: string
	children: ReactNode
	shouldWrap: boolean
}
