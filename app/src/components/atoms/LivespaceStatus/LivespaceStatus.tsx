import React from "react"
import type { LivespaceStatusProps } from "./LivespaceStatus.types"
import { globalConfig } from "@lib"

export const LivespaceStatus = ({ darkMode, size, width, height }: LivespaceStatusProps) => {
	return (
		<iframe
			src={globalConfig.statusUrl(size, darkMode)}
			width={width ?? 250}
			height={height ?? 45}
		/>
	)
}
