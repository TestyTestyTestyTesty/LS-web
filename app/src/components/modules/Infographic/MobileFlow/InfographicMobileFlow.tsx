import { StripedLine } from "@components"
import { useTheme } from "@mui/material"
import FlowMobile from "@svg/flow-mobile.svg?url"
import { useId } from "react"
import type { InfographicPointProps } from "../Infographic.types"
import {
	InfographicMobileFlowContent,
	InfographicMobileFlowFlowLineWrapper,
	InfographicMobileFlowItem,
	InfographicMobileFlowItemText,
	InfographicMobileFlowWrapper,
	InforgraphicMobileFlowImage,
} from "./InfographicMobileFlow.styles"

export const InfographicMobileFlow = ({ points }: { points: InfographicPointProps[] }) => {
	const theme = useTheme()
	return (
		<>
			<InfographicMobileFlowWrapper>
				<InforgraphicMobileFlowImage
					src={FlowMobile}
					alt="flow visualisation"
					width="120"
					height="516"
					quality={100}
					style={{ objectFit: "contain" }}
				/>
				<InfographicMobileFlowContent>
					{points.map((item, index) => (
						<InfographicMobileFlowItem itemPosition={index + 1} key={useId()}>
							<InfographicMobileFlowFlowLineWrapper>
								<StripedLine lines={index === 0 || index === 4 ? 5 : 2} />
							</InfographicMobileFlowFlowLineWrapper>
							<InfographicMobileFlowItemText
								variant="p1Mobile"
								color={theme.palette.defaultColors.white}
							>
								{item.title}
							</InfographicMobileFlowItemText>
						</InfographicMobileFlowItem>
					))}
				</InfographicMobileFlowContent>
			</InfographicMobileFlowWrapper>
		</>
	)
}
