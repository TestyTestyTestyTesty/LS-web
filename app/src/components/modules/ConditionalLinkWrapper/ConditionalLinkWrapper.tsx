import React from "react"
import type { ConditionalLinkWrapperProps } from "./ConditionalLinkWrapper.types"
import Link from "next/link"

export const ConditionalLinkWrapper = ({
	href,
	shouldWrap,
	children,
}: ConditionalLinkWrapperProps) => {
	return (
		<>
			{shouldWrap && href ? (
				<Link href={href} style={{ textDecoration: "none" }}>
					{children}
				</Link>
			) : (
				<>{children}</>
			)}
		</>
	)
}
