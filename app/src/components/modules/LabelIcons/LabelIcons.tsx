import { LabelIcon } from "@components/atoms/LabelIcon/LabelIcon"
import { useId } from "react"
import { LabelIconsWrapper } from "./LabelIcons.styles"
import type { LabelIconsProps } from "./LabelIcons.types"

export const LabelIcons = ({ labelIcons }: LabelIconsProps) => {
	return (
		<LabelIconsWrapper>
			{labelIcons.map(({ title, iconUrl }) => (
				<LabelIcon key={useId()} iconUrl={iconUrl} title={title} />
			))}
		</LabelIconsWrapper>
	)
}
